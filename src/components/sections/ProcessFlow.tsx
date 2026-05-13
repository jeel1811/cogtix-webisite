"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Compass,
  FileCheck2,
  Files,
  Gauge,
  Headset,
  Layers3,
  PenTool,
  ScanSearch,
  Sparkles,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

type IconKey =
  | "users"
  | "workflow"
  | "briefcase"
  | "brain"
  | "clipboard"
  | "pen"
  | "filecheck"
  | "check"
  | "headset"
  | "scansearch"
  | "layers"
  | "compass"
  | "files"
  | "sparkles"
  | "gauge";

type FlowItem = {
  step: string;
  title: string;
  description: string;
  iconKey: IconKey;
  tone?: "dark" | "light";
};

type ProcessFlowProps = {
  heading: string;
  subheading?: string;
  items: FlowItem[];
};

const iconMap: Record<IconKey, LucideIcon> = {
  users: Users,
  workflow: Workflow,
  briefcase: BriefcaseBusiness,
  brain: BrainCircuit,
  clipboard: ClipboardList,
  pen: PenTool,
  filecheck: FileCheck2,
  check: CheckCircle2,
  headset: Headset,
  scansearch: ScanSearch,
  layers: Layers3,
  compass: Compass,
  files: Files,
  sparkles: Sparkles,
  gauge: Gauge,
};

type Curve = { d: string };

export default function ProcessFlow({
  heading,
  subheading,
  items,
}: ProcessFlowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [curves, setCurves] = useState<Curve[]>([]);

  const buildCurves = () => {
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    const next: Curve[] = [];

    for (let i = 0; i < nodeRefs.current.length - 1; i++) {
      const a = nodeRefs.current[i];
      const b = nodeRefs.current[i + 1];
      if (!a || !b) continue;

      const ar = a.getBoundingClientRect();
      const br = b.getBoundingClientRect();

      const fx = ar.left + ar.width / 2 - cRect.left;
      const fy = ar.top + ar.height - cRect.top;
      const tx = br.left + br.width / 2 - cRect.left;
      const ty = br.top - cRect.top;

      const offset = 36;
      const fromLeft = i % 2 === 0;
      const c1x = fromLeft ? fx - offset : fx + offset;
      const c1y = fy + (ty - fy) * 0.35;
      const c2x = fromLeft ? tx + offset : tx - offset;
      const c2y = fy + (ty - fy) * 0.65;

      next.push({ d: `M${fx},${fy} C${c1x},${c1y} ${c2x},${c2y} ${tx},${ty}` });
    }

    setCurves(next);
  };

  useEffect(() => {
    const id = requestAnimationFrame(() => requestAnimationFrame(buildCurves));
    window.addEventListener("resize", buildCurves);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", buildCurves);
    };
  }, [items]);

  return (
    <section>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
          {heading}
        </h3>
        {subheading && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
            {subheading}
          </p>
        )}
      </div>

      <div ref={containerRef} className="relative">
        {/* SVG connector layer — measured from real DOM positions */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <marker
              id="pf-arrow"
              markerWidth="7"
              markerHeight="7"
              refX="6"
              refY="3.5"
              orient="auto"
            >
              <path
                d="M0,0.5 L6,3.5 L0,6.5"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          {curves.map((curve, i) => (
            <motion.path
              key={i}
              d={curve.d}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
              opacity={0.65}
              markerEnd="url(#pf-arrow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.65 }}
              transition={{
                pathLength: {
                  duration: 1.2,
                  delay: i * 0.16,
                  ease: [0.16, 1, 0.3, 1],
                },
                opacity: { duration: 0.3, delay: i * 0.16 },
              }}
            />
          ))}
        </svg>

        {/* Step rows */}
        <div className="relative z-10">
          {items.map((item, index) => {
            const Icon = iconMap[item.iconKey];
            const dark = item.tone === "dark";
            const side: "left" | "right" = index % 2 === 0 ? "left" : "right";

            return (
              <div
                key={item.step}
                className="grid grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] items-start"
                style={{ minHeight: index === items.length - 1 ? 140 : 170 }}
              >
                {/* Left column */}
                <div className="flex justify-end pr-4 pt-4">
                  {side === "left" && (
                    <StepCard
                      item={item}
                      Icon={Icon}
                      dark={dark}
                      side="left"
                      index={index}
                    />
                  )}
                </div>

                {/* Spine — node sits here, curves connect between nodes */}
                <div className="flex flex-col items-center pt-4">
                  <motion.div
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className={[
                      "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                      dark
                        ? "bg-slate-900 text-white ring-2 ring-slate-900/10"
                        : "bg-sky-100 text-sky-800 ring-2 ring-sky-200",
                    ].join(" ")}
                  >
                    {item.step}
                  </motion.div>
                </div>

                {/* Right column */}
                <div className="flex justify-start pl-4 pt-4">
                  {side === "right" && (
                    <StepCard
                      item={item}
                      Icon={Icon}
                      dark={dark}
                      side="right"
                      index={index}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type StepCardProps = {
  item: FlowItem;
  Icon: LucideIcon;
  dark: boolean;
  side: "left" | "right";
  index: number;
};

function StepCard({ item, Icon, dark, side, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, x: side === "left" ? -16 : 16 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -3 }}
      className={[
        "w-full max-w-[280px] rounded-2xl border p-4 transition-[border-color] duration-200",
        dark
          ? "border-slate-900 bg-slate-950"
          : "border-slate-200 bg-white hover:border-slate-300",
      ].join(" ")}
    >
      <div
        className={[
          "mb-3 flex h-9 w-9 items-center justify-center rounded-xl",
          dark ? "bg-white/10 text-white" : "bg-sky-50 text-sky-600",
        ].join(" ")}
      >
        <Icon className="h-4 w-4" />
      </div>

      <p
        className={[
          "mb-1 text-[10px] font-semibold uppercase tracking-widest",
          dark ? "text-white/40" : "text-sky-500",
        ].join(" ")}
      >
        Step {item.step}
      </p>

      <h4
        className={[
          "text-sm font-semibold leading-snug",
          dark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {item.title}
      </h4>

      <p
        className={[
          "mt-1.5 text-xs leading-relaxed",
          dark ? "text-white/55" : "text-slate-500",
        ].join(" ")}
      >
        {item.description}
      </p>
    </motion.div>
  );
}
