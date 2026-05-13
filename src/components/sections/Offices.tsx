"use client";

import { useEffect, useState } from "react";
import { MapPin, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { OFFICES } from "@/lib/constants";
import { useI18n } from "@/i18n/provider";

import { Sun, Moon, Sunrise, Sunset } from "lucide-react";
import { InFlag, UsFlag, AuFlag, UkFlag } from "@/components/icons/flags";

const COUNTRY_FLAGS: Record<string, React.ComponentType> = {
  India: InFlag,
  USA: UsFlag,
  Australia: AuFlag,
  UK: UkFlag,
};

function LiveClock({ timezone, locale }: { timezone: string; locale: string }) {
  const [time, setTime] = useState("");
  const [timeState, setTimeState] = useState<"sunrise" | "day" | "sunset" | "night">("day");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Get formatted time
      setTime(
        now.toLocaleTimeString(locale, {
          timeZone: timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

      // Determine time state
      const hour = parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour: "2-digit",
          hour12: false,
        })
      );
      
      if (hour >= 5 && hour < 8) setTimeState("sunrise");
      else if (hour >= 8 && hour < 17) setTimeState("day");
      else if (hour >= 17 && hour < 20) setTimeState("sunset");
      else setTimeState("night");
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone, locale]);

  const config = {
    sunrise: { icon: Sunrise, color: "bg-sky-50 text-sky-500" },
    day: { icon: Sun, color: "bg-blue-50 text-blue-500" },
    sunset: { icon: Sunset, color: "bg-rose-50 text-rose-500" },
    night: { icon: Moon, color: "bg-indigo-50 text-indigo-500" },
  };

  const { icon: Icon, color } = config[timeState];

  return (
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-lg ${color} transition-colors duration-500`}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-2xl font-bold text-navy-900 tabular-nums tracking-tight">
        {time || "--:-- --"}
      </span>
    </div>
  );
}

export default function Offices() {
  const { locale, m } = useI18n();

  return (
    <section className="relative py-10 md:py-10 bg-white overflow-hidden">
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center scale-150">
        <Globe2 className="w-full h-full text-navy-900" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              badge={m.offices.badge}
              title={m.offices.title}
              subtitle={m.offices.subtitle}
              className="text-left !mb-0"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICES.map((office) => {
            const FlagIcon = COUNTRY_FLAGS[office.country];
            return (
              <div
                key={office.country}
                className="group bg-gray-50/50 border border-gray-100 rounded-[2rem] p-6 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col h-full">
                  {/* Header: Flag & Location on same line */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-shrink-0">
                      {FlagIcon ? <FlagIcon /> : <div className="w-8 h-8 rounded-full bg-gray-200" />}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy-900 tracking-tight leading-none mb-1">
                        {office.country}
                      </h4>
                      <p className="text-blue-500 font-bold uppercase tracking-widest text-[0.625rem]">
                        {office.city}
                      </p>
                    </div>
                  </div>

                  {/* Time Focus */}
                  <div className="mb-8">
                    <LiveClock timezone={office.timezone} locale={locale} />
                  </div>

                  {/* Body: Address */}
                  <div className="pt-6 border-t border-gray-100 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50 transition-colors">
                      <MapPin className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <p className="text-gray-500 text-[0.6875rem] leading-relaxed font-medium">
                      {office.address}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
