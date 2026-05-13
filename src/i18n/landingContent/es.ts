import type { IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const esServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Servicios de Ingeniería | Cogtix Solutions',
    description:
      'Explora los servicios de ingeniería de Cogtix: IA/ML, cloud y DevOps, ingeniería de datos, experiencia digital, servicios empresariales y tecnologías Microsoft.',
  },
  hero: {
    title:
      'Construimos equipos de ingeniería que entregan más rápido y escalan con confianza',
    description:
      'Explora el portafolio completo de ingeniería: desarrollo de producto, cloud, datos, Microsoft, IA/ML y diseño de experiencia, pensado para cubrir todo el ciclo de entrega.',
    ctaPrimary: 'Hablemos',
    ctaSecondary: 'Ver servicios',
    highlights: [
      'Ingeniería con estrategia sobre stacks de producto modernos',
      'Equipos de entrega para nuevos productos, modernización y programas cloud',
      'Pods especializados en IA, datos, Microsoft y experiencia de cliente',
    ],
  },
  grid: {
    eyebrow: 'Lo que ofrecemos',
    title: 'Todos los servicios de ingeniería en un solo lugar.',
    description:
      'Cada tarjeta enlaza a una página de capacidad enfocada para pasar de una visión general al servicio exacto que necesitas.',
    exploreCta: 'Explorar servicio',
  },
  items: [
    {
      title: 'Ingeniería IA/ML',
      description:
        'Soluciones de IA a medida, sistemas de IA generativa, pipelines de machine learning y despliegue de modelos.',
    },
    {
      title: 'Ingeniería Cloud y DevOps',
      description:
        'Arquitectura cloud, Kubernetes, CI/CD, automatización de infraestructura y fiabilidad de plataforma.',
    },
    {
      title: 'Ingeniería de datos',
      description:
        'Plataformas de datos escalables, pipelines, warehouses y bases analíticas.',
    },
    {
      title: 'Ingeniería digital y de experiencia',
      description:
        'Diseño de producto, ingeniería de UX y experiencias digitales responsive para web y móvil.',
    },
    {
      title: 'Servicios empresariales',
      description:
        'Modernización de software corporativo, integración de sistemas y automatización de procesos de negocio.',
    },
    {
      title: 'Tecnologías Microsoft',
      description:
        'Soluciones modernas .NET, Azure y Power Platform para la transformación empresarial.',
    },
  ],
}

export const esIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Sectores en los que trabajamos | Cogtix Solutions',
    description:
      'Explora los sectores que atiende Cogtix: servicios financieros, salud, retail, supply chain y negocios digitales de alta tecnología.',
  },
  hero: {
    title:
      'Construye para la realidad de tu mercado, no solo para el stack de software.',
    description:
      'Recorre los sectores que servimos y entra en la página exacta de servicios financieros, salud, retail, logística y productos high-tech.',
    ctaPrimary: 'Háblanos de tu sector',
    ctaSecondary: 'Ver sectores',
    highlights: [
      'Pensamiento de producto específico del sector con entrega consciente del cumplimiento',
      'Patrones de entrega reutilizables para sectores regulados, operativos y de consumo',
      'Modelos de engagement ajustados a modernización, automatización y crecimiento',
    ],
  },
  grid: {
    eyebrow: 'Enfoque de mercado',
    title: 'Páginas de dominio para los sectores con los que más trabajamos.',
    description:
      'Cada tarjeta conecta con una página de sector dedicada con casos de uso, retos y resultados de entrega relevantes.',
    industryLabel: 'Sector',
    exploreCta: 'Explorar sector',
  },
  items: [
    {
      title: 'Servicios financieros',
      description:
        'Sistemas de pago seguros, banca digital y soluciones de cumplimiento.',
    },
    {
      title: 'Salud y ciencias de la vida',
      description:
        'Telemedicina, sistemas EHR y soluciones de gestión de pacientes.',
    },
    {
      title: 'Retail y E-commerce',
      description:
        'Comercio omnicanal, integración con TPV y experiencias de compra personalizadas.',
    },
    {
      title: 'Supply Chain y Logística',
      description:
        'Gestión de flotas, automatización de almacenes y visibilidad de seguimiento en tiempo real.',
    },
    {
      title: 'Alta tecnología y nativos digitales',
      description:
        'Soluciones SaaS escalables, arquitectura cloud-native y prototipado rápido.',
    },
  ],
}
