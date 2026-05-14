"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { ServiceVariant, serviceThemes } from "./service-themes";
import { getTechLogo } from "@/lib/techIcons";
import React from "react";

interface TechCategory {
  name: string;
  items: string[];
  overview: string;
  outcomes: string[];
}

interface ServiceTechnologiesProps {
  title: string;
  subtitle: string;
  description?: string;
  panelOutcomesTitle: string;
  categories: TechCategory[];
  variant?: ServiceVariant;
}

export default function ServiceTechnologies({
  title,
  subtitle,
  description,
  panelOutcomesTitle,
  categories,
  variant = "microsoft",
}: ServiceTechnologiesProps) {
  const theme = serviceThemes[variant];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex] ?? categories[0];

  return (
    <section className="relative overflow-hidden bg-white py-10 md:py-14">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${theme.ctaBgFrom} ${theme.ctaBgTo}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,30,0.18),rgba(255,255,255,0.02))]" />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[18%] opacity-35"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, transparent 0, transparent 12px, ${theme.ctaPattern} 12px, ${theme.ctaPattern} 18px)`,
          maskImage: "linear-gradient(to left, black 55%, transparent 100%)",
        }}
      />

      <Container>
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3.5 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-white/88 ring-1 ring-white/14">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              {subtitle}
            </div>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-white md:text-[3rem]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 max-w-5xl text-base leading-relaxed text-white/88 md:text-[0.9375rem]">
                {description}
              </p>
            )}
          </div>

          <div className="mt-10 grid items-start gap-5 lg:grid-cols-[28%_minmax(0,1fr)] xl:gap-7">
            <div className="space-y-2">
              {categories.map((category, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex w-full items-center justify-between rounded-[0.75rem] border px-4 py-2.5 text-left transition-all duration-200 ${
                      isActive
                        ? "border-white/18 bg-white/16 text-white shadow-[0_18px_40px_-28px_rgba(0,0,0,0.45)]"
                        : "border-white/10 bg-navy-900/18 text-white/88 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div>
                      <div className="text-[0.8125rem] font-semibold leading-snug md:text-[0.875rem]">
                        {category.name}
                      </div>
                    </div>

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full ${
                        isActive
                          ? "bg-white/18 text-white"
                          : "bg-white/12 text-white/80"
                      }`}
                    >
                      <ChevronRight
                        className={`h-3 w-3 transition-transform ${isActive ? "translate-x-0.5" : ""}`}
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[0.95rem] border border-slate-200 bg-white/96 px-4 py-4 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-[6px] md:px-5 md:py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[1.35rem] font-bold leading-tight text-slate-950 md:text-[1.8rem]">
                    {activeCategory.name}
                  </h3>
                </div>
              </div>

              <p className="mt-3 max-w-3xl text-[0.8125rem] leading-6 text-slate-600 md:text-[0.9375rem]">
                {activeCategory.overview}
              </p>

              {activeCategory.outcomes.length > 0 && (
                <div className="mt-5">
                  <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {panelOutcomesTitle}
                  </div>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {activeCategory.outcomes.slice(0, 2).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${theme.accentText}`}
                          aria-hidden
                        />
                        <span className="text-[0.8125rem] leading-snug text-slate-700">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-5 rounded-[0.75rem] border border-slate-200 bg-white px-4 py-3.5 shadow-sm">
                <div className="flex flex-wrap gap-x-6 gap-y-5">
                  {activeCategory.items.map((item) => {
                    const logoData = getTechLogo(item);
                    return (
                      <div
                        key={item}
                        className="rounded border border-slate-200 bg-white px-3 py-2.5 transition-colors hover:bg-slate-50"
                        title={item}
                      >
                        {logoData ? (
                          <div className="flex items-center gap-2">
                            <span
                              className="flex h-4 w-4 shrink-0 items-center justify-center"
                              style={{ color: logoData.color || "#0f172a" }}
                            >
                              {React.cloneElement(
                                logoData.icon as React.ReactElement<
                                  Record<string, unknown>
                                >,
                                { size: 16 },
                              )}
                            </span>
                            <span className="text-[0.6875rem] font-medium text-slate-700 whitespace-nowrap">
                              {item}
                            </span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <span className="text-[0.6875rem] font-medium text-slate-700 whitespace-nowrap">
                              {item}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
