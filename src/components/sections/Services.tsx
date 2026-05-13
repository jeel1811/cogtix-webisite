"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { useI18n } from "@/i18n/provider";

const SERVICES = [
  {
    title: 'AI/ML Engineering',
    description:
      'Custom AI solutions, generative AI systems, machine learning pipelines, and model deployment.',
    href: '/services/gen-ai-ml-development',
  },
  {
    title: 'Cloud & DevOps Engineering',
    description:
      'Cloud architecture, Kubernetes, CI/CD, infrastructure automation, and platform reliability.',
    href: '/services/cloud-devops-engineering',
  },
  {
    title: 'Data Engineering',
    description:
      'Scalable data platforms, pipelines, warehouses, and analytics foundations.',
    href: '/services/data-engineering',
  },
  {
    title: 'Digital & Experience Engineering',
    description:
      'Product design, UX engineering, and responsive digital experiences for web and mobile.',
    href: '/services/digital-experience-engineering',
  },
  {
    title: 'Enterprise Services',
    description:
      'Enterprise software modernization, system integration, and business process automation.',
    href: '/services/enterprise-solutions',
  },
  {
    title: 'Microsoft Technologies',
    description:
      'Modern .NET, Azure, and Power Platform solutions for enterprise transformation.',
    href: '/services/microsoft-technologies',
  },
] as const

export default function Services() {
  const { m } = useI18n();

  return (
    <section id="services" className="py-10 md:py-14 bg-gray-50">
      <Container>
        <SectionHeading
          badge={m.services.badge}
          title={m.services.title}
          subtitle={m.services.subtitle}
          align="left"
          compact={true}
          className="max-w-2xl mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {SERVICES.map((service) => {
            return (
              <Link key={service.title} href={service.href} className="block">
                <Card padding="sm" className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative">
                    <h3 className="text-sm font-bold text-navy-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-[0.75rem] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
