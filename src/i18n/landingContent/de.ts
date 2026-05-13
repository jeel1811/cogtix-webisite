import type { IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const deServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Engineering-Services | Cogtix Solutions',
    description:
      'Entdeckt die Engineering-Services von Cogtix: AI/ML, Cloud und DevOps, Data Engineering, Digital Experience, Enterprise Services und Microsoft-Technologien.',
  },
  hero: {
    title:
      'Engineering-Teams bauen, die schneller liefern und sicher skalieren',
    description:
      'Entdeckt das komplette Engineering-Portfolio: Produktentwicklung, Cloud, Data, Microsoft, AI/ML und Experience Design für den vollen Liefer-Lifecycle.',
    ctaPrimary: 'Sprechen wir',
    ctaSecondary: 'Services ansehen',
    highlights: [
      'Strategiegeführtes Engineering über moderne Produkt-Stacks',
      'Liefer-Teams für Produktbuilds, Modernisierung und Cloud-Programme',
      'Spezialisierte Pods für AI, Data, Microsoft und Customer Experience',
    ],
  },
  grid: {
    eyebrow: 'Was wir anbieten',
    title: 'Alle Engineering-Services an einem Ort.',
    description:
      'Jede Karte führt zu einer fokussierten Capability-Seite, damit ihr vom Überblick direkt zu dem Service kommt, den ihr braucht.',
    exploreCta: 'Service entdecken',
  },
  items: [
    {
      title: 'AI/ML Engineering',
      description:
        'Maßgeschneiderte AI-Lösungen, generative AI-Systeme, Machine-Learning-Pipelines und Model-Deployment.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      description:
        'Cloud-Architektur, Kubernetes, CI/CD, Infrastruktur-Automatisierung und Plattform-Zuverlässigkeit.',
    },
    {
      title: 'Data Engineering',
      description:
        'Skalierbare Datenplattformen, Pipelines, Warehouses und Analytics-Fundamente.',
    },
    {
      title: 'Digital & Experience Engineering',
      description:
        'Produktdesign, UX-Engineering und responsive Digital-Experiences für Web und Mobile.',
    },
    {
      title: 'Enterprise Services',
      description:
        'Modernisierung von Enterprise-Software, Systemintegration und Geschäftsprozess-Automatisierung.',
    },
    {
      title: 'Microsoft-Technologien',
      description:
        'Moderne .NET-, Azure- und Power-Platform-Lösungen für die Unternehmenstransformation.',
    },
  ],
}

export const deIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Branchen, die wir bedienen | Cogtix Solutions',
    description:
      'Entdeckt die Branchen, die Cogtix bedient: Financial Services, Healthcare, Retail, Supply Chain und High-Tech Digital Natives.',
  },
  hero: {
    title:
      'Baut für die Realität eures Markts, nicht nur für den Software-Stack.',
    description:
      'Browst durch die Branchen, die wir bedienen, und springt direkt auf die Seite für Financial Services, Healthcare, Retail, Logistik oder High-Tech-Produkte.',
    ctaPrimary: 'Besprecht eure Branche',
    ctaSecondary: 'Branchen ansehen',
    highlights: [
      'Branchenspezifisches Produktdenken mit compliance-bewusster Lieferung',
      'Wiederverwendbare Liefer-Patterns für regulierte, operative und Consumer-Sektoren',
      'Engagement-Modelle für Modernisierung, Automatisierung und Wachstumsprogramme',
    ],
  },
  grid: {
    eyebrow: 'Marktfokus',
    title: 'Domain-Seiten für die Sektoren, mit denen wir am meisten arbeiten.',
    description:
      'Jede Karte führt zu einer dedizierten Branchenseite mit relevanten Use Cases, Herausforderungen und Liefer-Ergebnissen.',
    industryLabel: 'Branche',
    exploreCta: 'Branche entdecken',
  },
  items: [
    {
      title: 'Financial Services',
      description:
        'Sichere Zahlungssysteme, Digital Banking und Compliance-Lösungen.',
    },
    {
      title: 'Healthcare und Life Sciences',
      description:
        'Telemedizin, EHR-Systeme und Patient-Management-Lösungen.',
    },
    {
      title: 'Retail und E-Commerce',
      description:
        'Omnichannel-Commerce, POS-Integrationen und personalisierte Shopping-Erlebnisse.',
    },
    {
      title: 'Supply Chain und Logistik',
      description:
        'Fleet Management, Lagerautomatisierung und Echtzeit-Tracking-Transparenz.',
    },
    {
      title: 'High-Tech und Digital Natives',
      description:
        'Skalierbare SaaS-Lösungen, Cloud-Native-Architektur und Rapid Prototyping.',
    },
  ],
}
