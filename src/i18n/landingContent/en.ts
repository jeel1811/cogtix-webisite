import type { HowWeWorkLandingCopy, IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const enServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Engineering Services | Cogtix Solutions',
    description:
      'Explore Cogtix engineering services including AI/ML, cloud and DevOps, data engineering, digital experience, enterprise services, and Microsoft technologies.',
  },
  hero: {
    title:
      'Building engineering teams that ship faster and scale with confidence',
    description:
      'Explore the full engineering portfolio: product development, cloud, data, Microsoft, AI/ML, and experience design services built to cover the full delivery lifecycle.',
    ctaPrimary: 'Talk to us',
    ctaSecondary: 'View services',
    highlights: [
      'Strategy-led engineering across modern product stacks',
      'Delivery teams for product builds, modernization, and cloud programs',
      'Specialized pods for AI, data, Microsoft, and customer experience work',
    ],
  },
  grid: {
    eyebrow: 'What we offer',
    title: 'All engineering services in one place.',
    description:
      'Each card links to a focused capability page so users can go from a high-level overview to the exact service they need.',
    exploreCta: 'Explore',
  },
  items: [
    {
      title: 'AI/ML Engineering',
      description:
        'Custom AI solutions, generative AI systems, machine learning pipelines, and model deployment.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      description:
        'Cloud architecture, Kubernetes, CI/CD, infrastructure automation, and platform reliability.',
    },
    {
      title: 'Data Engineering',
      description:
        'Scalable data platforms, pipelines, warehouses, and analytics foundations.',
    },
    {
      title: 'Digital & Experience Engineering',
      description:
        'Product design, UX engineering, and responsive digital experiences for web and mobile.',
    },
    {
      title: 'Enterprise Services',
      description:
        'Enterprise software modernization, system integration, and business process automation.',
    },
    {
      title: 'Microsoft Technologies',
      description:
        'Modern .NET, Azure, and Power Platform solutions for enterprise transformation.',
    },
  ],
}

export const enIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Industries We Serve | Cogtix Solutions',
    description:
      'Explore the industries Cogtix serves, including financial services, healthcare, retail, supply chain, and high-tech digital native businesses.',
  },
  hero: {
    title:
      'Build for the realities of your market, not just the software stack.',
    description:
      'Browse the industries we serve and jump into the exact domain page for financial services, healthcare, retail, logistics, and high-tech products.',
    ctaPrimary: 'Discuss your industry',
    ctaSecondary: 'View industries',
    highlights: [
      'Industry-specific product thinking with compliance-aware delivery',
      'Reusable delivery patterns for regulated, operational, and consumer sectors',
      'Engagement models tuned to modernization, automation, and growth programs',
    ],
  },
  grid: {
    eyebrow: 'Market focus',
    title: 'Domain pages for the sectors we work with most.',
    description:
      'Each card connects to a dedicated industry page with relevant use cases, challenges, and delivery outcomes.',
    industryLabel: 'Industry',
    exploreCta: 'Explore industry',
  },
  items: [
    {
      title: 'Financial Services',
      description:
        'Secure payment systems, digital banking, and compliance solutions.',
    },
    {
      title: 'Healthcare and Life Sciences',
      description:
        'Telemedicine, EHR systems, and patient management solutions.',
    },
    {
      title: 'Retail and E-commerce',
      description:
        'Omnichannel commerce, POS integrations, and personalized shopping experiences.',
    },
    {
      title: 'Supply Chain and Logistics',
      description:
        'Fleet management, warehouse automation, and real-time tracking visibility.',
    },
    {
      title: 'Hi-Tech and Digital Natives',
      description:
        'Scalable SaaS solutions, cloud-native architecture, and rapid prototyping.',
    },
  ],
}

export const enHowWeWorkLanding: HowWeWorkLandingCopy = {
  metadata: {
    title: 'How We Work | Cogtix Solutions',
    description:
      'Learn about our agile methodology and development process that ensures high-quality delivery and client satisfaction.',
  },
  hero: {
    title: 'A proven process for delivering exceptional digital products.',
    description:
      'We follow a structured, transparent, and collaborative approach to transform your ideas into scalable reality.',
    ctaPrimary: 'Start a project',
    ctaSecondary: '',
    highlights: [
      'Agile-first methodology focused on speed and quality',
      'Direct access to engineering teams and project transparency',
      'Iterative delivery with continuous feedback loops',
    ],
  },
  grid: {
    eyebrow: 'Our Engagement Models',
    title: 'Tailored ways to work with us.',
    description:
      'We offer three primary engagement models designed to fit different project types, budgets, and team structures.',
    exploreCta: 'Explore model',
  },
  items: [
    {
      title: 'Dedicated Resource Model',
      description:
        'A flexible engagement where we provide a dedicated team of experts that integrates seamlessly with your internal processes.',
    },
    {
      title: 'Discovery Process Model',
      description:
        'A comprehensive exploration phase to define technical requirements, user journeys, and project roadmaps before development.',
    },
    {
      title: 'Fixed Cost Model',
      description:
        'A clear, milestone-based approach with defined scope and budget, ideal for well-specified projects and MVPs.',
    },
  ],
}
