import type { InsightsLandingCopy } from './types'

export const frInsightsLanding: InsightsLandingCopy = {
  metadata: {
    title: 'Insights | Cogtix Solutions',
    description:
      'Découvrez les insights Cogtix : articles, études de cas et regards ingénierie sur le cloud, l’IA, la transformation digitale et la livraison produit.',
  },
  hero: {
    badge: 'Insights',
    titleLine1: 'Insights et',
    titleGradient: 'Savoir.',
    description:
      'Parcourez articles, études de cas et perspectives concrètes sur le développement logiciel, le cloud, la transformation digitale et les pratiques de livraison que nous utilisons avec nos clients.',
    ctaBlogs: 'Lire les blogs',
    ctaExplore: 'Explorer les insights',
  },
  grid: {
    eyebrow: 'Contenu phare',
    title: 'Un point d’entrée simple vers notre réflexion et nos résultats.',
    description:
      'Utilisez cette page pour accéder aux blogs, études de cas et autres contenus qui montrent comment nous relevons les défis de livraison.',
    cardPill: 'Insight',
  },
  cards: [
    {
      title: 'Blogs',
      description:
        'Articles pratiques sur l’ingénierie logicielle, la livraison cloud, l’IA et la transformation digitale.',
      exploreCta: 'Explorer les blogs',
    },
    {
      title: 'Études de cas',
      description:
        'Récits de projets avec résultats, approches de livraison et impact business.',
      exploreCta: 'Explorer les études de cas',
    },
  ],
}
