import type { IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const frServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Services d’Ingénierie | Cogtix Solutions',
    description:
      'Découvrez les services d’ingénierie Cogtix : IA/ML, cloud et DevOps, data engineering, expérience digitale, services entreprise et technologies Microsoft.',
  },
  hero: {
    title:
      'Construire des équipes d’ingénierie qui livrent plus vite et passent à l’échelle en confiance',
    description:
      'Explorez le portefeuille d’ingénierie complet : développement produit, cloud, data, Microsoft, IA/ML et design d’expérience, pensés pour couvrir tout le cycle de livraison.',
    ctaPrimary: 'Parlons-en',
    ctaSecondary: 'Voir les services',
    highlights: [
      'Ingénierie pilotée par la stratégie sur des stacks produit modernes',
      'Équipes de livraison pour nouveaux produits, modernisation et programmes cloud',
      'Pods spécialisés IA, data, Microsoft et expérience client',
    ],
  },
  grid: {
    eyebrow: 'Ce que nous proposons',
    title: 'Tous les services d’ingénierie au même endroit.',
    description:
      'Chaque carte mène à une page de capacité focalisée : passez d’une vue d’ensemble au service exact dont vous avez besoin.',
    exploreCta: 'Explorer le service',
  },
  items: [
    {
      title: 'Ingénierie IA/ML',
      description:
        'Solutions IA sur mesure, systèmes d’IA générative, pipelines de machine learning et déploiement de modèles.',
    },
    {
      title: 'Ingénierie Cloud et DevOps',
      description:
        'Architecture cloud, Kubernetes, CI/CD, automatisation d’infrastructure et fiabilité de plateforme.',
    },
    {
      title: 'Data Engineering',
      description:
        'Plateformes data scalables, pipelines, entrepôts et fondations analytiques.',
    },
    {
      title: 'Ingénierie digitale et d’expérience',
      description:
        'Design produit, ingénierie UX et expériences digitales responsive pour web et mobile.',
    },
    {
      title: 'Services entreprise',
      description:
        'Modernisation logicielle, intégration de systèmes et automatisation des processus métier.',
    },
    {
      title: 'Technologies Microsoft',
      description:
        'Solutions modernes .NET, Azure et Power Platform pour la transformation d’entreprise.',
    },
  ],
}

export const frIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Secteurs servis | Cogtix Solutions',
    description:
      'Découvrez les secteurs servis par Cogtix : services financiers, santé, retail, supply chain et entreprises digitales high-tech.',
  },
  hero: {
    title:
      'Construire pour la réalité de votre marché, pas seulement pour la stack technique.',
    description:
      'Parcourez les secteurs que nous servons et accédez à la page dédiée : services financiers, santé, retail, logistique et produits high-tech.',
    ctaPrimary: 'Parlons de votre secteur',
    ctaSecondary: 'Voir les secteurs',
    highlights: [
      'Pensée produit propre au secteur avec livraison consciente de la conformité',
      'Patterns de livraison réutilisables pour secteurs régulés, opérationnels et grand public',
      'Modèles d’engagement adaptés à la modernisation, l’automatisation et la croissance',
    ],
  },
  grid: {
    eyebrow: 'Focus marché',
    title: 'Pages dédiées aux secteurs où nous intervenons le plus.',
    description:
      'Chaque carte conduit à une page de secteur dédiée avec cas d’usage, défis et résultats de livraison pertinents.',
    industryLabel: 'Secteur',
    exploreCta: 'Explorer le secteur',
  },
  items: [
    {
      title: 'Services financiers',
      description:
        'Systèmes de paiement sécurisés, banque digitale et solutions de conformité.',
    },
    {
      title: 'Santé et sciences de la vie',
      description:
        'Télémédecine, systèmes DSE et solutions de gestion patient.',
    },
    {
      title: 'Retail et E-commerce',
      description:
        'Commerce omnicanal, intégrations POS et expériences d’achat personnalisées.',
    },
    {
      title: 'Supply Chain et logistique',
      description:
        'Gestion de flotte, automatisation d’entrepôt et visibilité de suivi en temps réel.',
    },
    {
      title: 'High-Tech et natifs numériques',
      description:
        'Solutions SaaS scalables, architecture cloud-native et prototypage rapide.',
    },
  ],
}
