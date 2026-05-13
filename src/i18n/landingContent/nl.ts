import type { IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const nlServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Engineering-diensten | Cogtix Solutions',
    description:
      'Verken de engineering-diensten van Cogtix: AI/ML, cloud en DevOps, data engineering, digitale experience, enterprise services en Microsoft-technologieën.',
  },
  hero: {
    title:
      'Engineering-teams bouwen die sneller leveren en met vertrouwen opschalen',
    description:
      'Verken het volledige engineering-portfolio: productontwikkeling, cloud, data, Microsoft, AI/ML en experience design voor de hele leveringscyclus.',
    ctaPrimary: 'Praat met ons',
    ctaSecondary: 'Bekijk diensten',
    highlights: [
      'Strategie-geleide engineering over moderne product-stacks',
      'Leverteams voor productbuilds, modernisering en cloud-programma’s',
      'Gespecialiseerde pods voor AI, data, Microsoft en customer experience',
    ],
  },
  grid: {
    eyebrow: 'Wat we bieden',
    title: 'Alle engineering-diensten op één plek.',
    description:
      'Elke kaart linkt naar een gefocuste capability-pagina, zodat je van overzicht naar precies de juiste dienst gaat.',
    exploreCta: 'Verken dienst',
  },
  items: [
    {
      title: 'AI/ML Engineering',
      description:
        'Maatwerk AI-oplossingen, generatieve AI-systemen, machine-learning-pipelines en modeluitrol.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      description:
        'Cloud-architectuur, Kubernetes, CI/CD, infrastructuur-automatisering en platform-betrouwbaarheid.',
    },
    {
      title: 'Data Engineering',
      description:
        'Schaalbare dataplatformen, pipelines, warehouses en analytics-fundamenten.',
    },
    {
      title: 'Digital & Experience Engineering',
      description:
        'Productontwerp, UX-engineering en responsive digitale experiences voor web en mobiel.',
    },
    {
      title: 'Enterprise Services',
      description:
        'Modernisering van enterprise-software, systeemintegratie en bedrijfsprocesautomatisering.',
    },
    {
      title: 'Microsoft-technologieën',
      description:
        'Moderne .NET-, Azure- en Power Platform-oplossingen voor enterprise-transformatie.',
    },
  ],
}

export const nlIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Sectoren die we bedienen | Cogtix Solutions',
    description:
      'Verken de sectoren die Cogtix bedient: financial services, healthcare, retail, supply chain en hi-tech digital natives.',
  },
  hero: {
    title:
      'Bouw voor de realiteit van je markt, niet alleen voor de software-stack.',
    description:
      'Bekijk de sectoren die we bedienen en spring direct naar de juiste pagina voor financial services, healthcare, retail, logistiek en hi-tech producten.',
    ctaPrimary: 'Bespreek je sector',
    ctaSecondary: 'Bekijk sectoren',
    highlights: [
      'Sector-specifiek productdenken met compliance-bewuste levering',
      'Herbruikbare leveringspatronen voor gereguleerde, operationele en consumer-sectoren',
      'Engagement-modellen afgestemd op modernisering, automatisering en groei',
    ],
  },
  grid: {
    eyebrow: 'Marktfocus',
    title: 'Domein-pagina’s voor de sectoren waarin we het meest werken.',
    description:
      'Elke kaart leidt naar een dedicated sectorpagina met relevante use cases, uitdagingen en leveringsresultaten.',
    industryLabel: 'Sector',
    exploreCta: 'Verken sector',
  },
  items: [
    {
      title: 'Financial Services',
      description:
        'Veilige betalingssystemen, digital banking en compliance-oplossingen.',
    },
    {
      title: 'Healthcare en Life Sciences',
      description:
        'Telemedicine, EHR-systemen en patiëntmanagement-oplossingen.',
    },
    {
      title: 'Retail en E-commerce',
      description:
        'Omnichannel commerce, POS-integraties en gepersonaliseerde shopping-ervaringen.',
    },
    {
      title: 'Supply Chain en Logistiek',
      description:
        'Fleet management, magazijn-automatisering en real-time tracking-zichtbaarheid.',
    },
    {
      title: 'Hi-Tech en Digital Natives',
      description:
        'Schaalbare SaaS-oplossingen, cloud-native architectuur en rapid prototyping.',
    },
  ],
}
