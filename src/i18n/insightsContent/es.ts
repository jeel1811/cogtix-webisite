import type { InsightsLandingCopy } from './types'

export const esInsightsLanding: InsightsLandingCopy = {
  metadata: {
    title: 'Insights | Cogtix Solutions',
    description:
      'Explora insights, artículos, casos de éxito y perspectivas de ingeniería de Cogtix sobre cloud, IA, transformación digital y entrega de producto.',
  },
  hero: {
    badge: 'Insights',
    titleLine1: 'Insights y',
    titleGradient: 'Conocimiento.',
    description:
      'Explora artículos, casos de éxito y perspectivas prácticas sobre desarrollo de software, tecnologías cloud, transformación digital y las prácticas de entrega que aplicamos con clientes.',
    ctaBlogs: 'Leer blogs',
    ctaExplore: 'Explorar insights',
  },
  grid: {
    eyebrow: 'Contenido destacado',
    title: 'Un punto de entrada claro a nuestra forma de pensar y a los resultados.',
    description:
      'Usa esta página para ir a blogs, casos de éxito y más contenido que muestra cómo abordamos retos reales de entrega.',
    cardPill: 'Insight',
  },
  cards: [
    {
      title: 'Blogs',
      description:
        'Artículos prácticos sobre ingeniería de software, entrega cloud, IA y transformación digital.',
      exploreCta: 'Explorar blogs',
    },
    {
      title: 'Casos de éxito',
      description:
        'Historias de proyecto con resultados, enfoques de entrega e impacto en el negocio.',
      exploreCta: 'Explorar casos de éxito',
    },
  ],
}
