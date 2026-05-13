"use client";

import {
  Factory,
  Landmark,
  Building2,
  GraduationCap,
  Film,
  HeartPulse,
  Rocket,
  ShoppingCart,
  Zap,
  Truck,
  Wifi,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";
import { useI18n } from "@/i18n/provider";

const industryIcons = [
  Landmark,
  GraduationCap,
  Factory,
  Film,
  Truck,
  HeartPulse,
  Building2,
  Rocket,
  ShoppingCart,
  Zap,
  Wifi,
];

const industryColors = [
  "from-blue-500 to-blue-600",
  "from-teal-500 to-teal-600",
  "from-indigo-500 to-indigo-600",
  "from-cyan-500 to-cyan-600",
  "from-purple-500 to-purple-600",
  "from-rose-500 to-rose-600",
  "from-sky-500 to-sky-600",
  "from-green-500 to-green-600",
  "from-emerald-500 to-emerald-600",
  "from-pink-500 to-pink-600",
  "from-violet-500 to-violet-600",
];

export default function Industries() {
  const { m } = useI18n();

  return (
    <section id="industries" className="py-20 md:py-28 bg-white">
      <Container>
        <SectionHeading
          badge={m.industries.badge}
          title={m.industries.title}
          subtitle={m.industries.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = industryIcons[index];
            return (
              <div
                key={industry.title}
                className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200/60 p-8 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-blue-200/60"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                {/* Decorative circle */}
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors duration-500" />

                <div className="relative">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industryColors[index]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
