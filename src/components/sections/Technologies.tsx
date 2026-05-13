"use client";

import { useState, type ComponentType } from "react";
import {
  SiDotnet,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiLaravel,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiBlazor,
  SiFlutter,
  SiIonic,
  SiAndroid,
  SiApple,
  SiJenkins,
  SiWordpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiFirebase,
  SiEthereum,
  SiSolidity,
  SiWeb3dotjs,
} from "@icons-pack/react-simple-icons";
import { Cloud, Server, GitBranch, Blocks, ShoppingBag } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { useI18n } from "@/i18n/provider";

interface TechItem {
  name: string;
  icon: ComponentType<{ size?: number; className?: string; color?: string }>;
  color: string;
}

const TECH_TABS: Record<string, TechItem[]> = {
  Backend: [
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Java", icon: Server, color: "#ED8B00" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
  ],
  Frontend: [
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Blazor", icon: SiBlazor, color: "#512BD4" },
    { name: ".NET MVC", icon: SiDotnet, color: "#512BD4" },
  ],
  Mobile: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Ionic", icon: SiIonic, color: "#3880FF" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    { name: "iOS", icon: SiApple, color: "#000000" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
  ],
  "Infra & Cloud": [
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Azure", icon: Cloud, color: "#0078D4" },
    { name: "DevOps", icon: GitBranch, color: "#0078D4" },
    { name: "Jenkins", icon: SiJenkins, color: "#D24939" },
  ],
  CMS: [
    { name: "Magento", icon: ShoppingBag, color: "#EE672F" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],
  Blockchain: [
    { name: "Ethereum", icon: SiEthereum, color: "#3C3C3D" },
    { name: "Solidity", icon: SiSolidity, color: "#363636" },
    { name: "Web3.js", icon: SiWeb3dotjs, color: "#F16822" },
    { name: "Hyperledger", icon: Blocks, color: "#2F3134" },
  ],
};

const TABS = Object.keys(TECH_TABS);

export default function Technologies() {
  const { m } = useI18n();
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="technologies" className="py-10 md:py-14 bg-gray-50">
      <Container>
        <SectionHeading
          badge={m.technologies.badge}
          title={m.technologies.title}
          subtitle={m.technologies.subtitle}
        />

        {/* Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-white text-gray-500 hover:text-navy-900 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_TABS[activeTab].map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group bg-white rounded-2xl border border-gray-200/60 p-6 flex flex-col items-center justify-center gap-3 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <IconComponent
                    size={32}
                    className="transition-transform duration-300 group-hover:scale-110"
                    color={tech.color}
                  />
                </div>
                <span className="text-sm font-semibold text-navy-900 text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
