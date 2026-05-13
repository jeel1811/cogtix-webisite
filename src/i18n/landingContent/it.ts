import type { IndustriesLandingCopy, ServicesLandingCopy } from './types'

export const itServicesLanding: ServicesLandingCopy = {
  metadata: {
    title: 'Servizi di Ingegneria | Cogtix Solutions',
    description:
      'Esplora i servizi di ingegneria Cogtix: AI/ML, cloud e DevOps, data engineering, esperienza digitale, servizi enterprise e tecnologie Microsoft.',
  },
  hero: {
    title:
      'Costruiamo team di ingegneria che consegnano più velocemente e scalano con sicurezza',
    description:
      'Esplora l’intero portafoglio di ingegneria: sviluppo prodotto, cloud, dati, Microsoft, AI/ML ed experience design per coprire l’intero ciclo di consegna.',
    ctaPrimary: 'Parliamone',
    ctaSecondary: 'Vedi i servizi',
    highlights: [
      'Ingegneria guidata dalla strategia su stack di prodotto moderni',
      'Team di delivery per build di prodotto, modernizzazione e programmi cloud',
      'Pod specializzati su AI, dati, Microsoft e customer experience',
    ],
  },
  grid: {
    eyebrow: 'Cosa offriamo',
    title: 'Tutti i servizi di ingegneria in un unico posto.',
    description:
      'Ogni card porta a una pagina di capacità focalizzata, dalla panoramica al servizio esatto che ti serve.',
    exploreCta: 'Esplora il servizio',
  },
  items: [
    {
      title: 'AI/ML Engineering',
      description:
        'Soluzioni AI su misura, sistemi di AI generativa, pipeline di machine learning e deployment di modelli.',
    },
    {
      title: 'Cloud & DevOps Engineering',
      description:
        'Architettura cloud, Kubernetes, CI/CD, automazione dell’infrastruttura e affidabilità di piattaforma.',
    },
    {
      title: 'Data Engineering',
      description:
        'Piattaforme dati scalabili, pipeline, warehouse e fondamenta analitiche.',
    },
    {
      title: 'Digital & Experience Engineering',
      description:
        'Product design, UX engineering ed esperienze digitali responsive per web e mobile.',
    },
    {
      title: 'Servizi Enterprise',
      description:
        'Modernizzazione di software enterprise, integrazione di sistemi e automazione dei processi di business.',
    },
    {
      title: 'Tecnologie Microsoft',
      description:
        'Soluzioni moderne .NET, Azure e Power Platform per la trasformazione aziendale.',
    },
  ],
}

export const itIndustriesLanding: IndustriesLandingCopy = {
  metadata: {
    title: 'Settori che serviamo | Cogtix Solutions',
    description:
      'Esplora i settori serviti da Cogtix: servizi finanziari, sanità, retail, supply chain e business hi-tech digital native.',
  },
  hero: {
    title:
      'Costruisci per la realtà del tuo mercato, non solo per lo stack software.',
    description:
      'Sfoglia i settori che serviamo e salta direttamente alla pagina per servizi finanziari, sanità, retail, logistica e prodotti hi-tech.',
    ctaPrimary: 'Parla del tuo settore',
    ctaSecondary: 'Vedi i settori',
    highlights: [
      'Pensiero di prodotto specifico per settore con delivery consapevole della compliance',
      'Pattern di delivery riutilizzabili per settori regolamentati, operativi e consumer',
      'Modelli di engagement adattati a modernizzazione, automazione e crescita',
    ],
  },
  grid: {
    eyebrow: 'Focus di mercato',
    title: 'Pagine di dominio per i settori con cui lavoriamo di più.',
    description:
      'Ogni card collega a una pagina di settore dedicata con casi d’uso, sfide e risultati di delivery rilevanti.',
    industryLabel: 'Settore',
    exploreCta: 'Esplora il settore',
  },
  items: [
    {
      title: 'Servizi finanziari',
      description:
        'Sistemi di pagamento sicuri, digital banking e soluzioni di compliance.',
    },
    {
      title: 'Sanità e Life Sciences',
      description:
        'Telemedicina, sistemi EHR e soluzioni di gestione paziente.',
    },
    {
      title: 'Retail ed E-commerce',
      description:
        'Commercio omnicanale, integrazioni POS ed esperienze di acquisto personalizzate.',
    },
    {
      title: 'Supply Chain e Logistica',
      description:
        'Fleet management, automazione di magazzino e visibilità di tracking in tempo reale.',
    },
    {
      title: 'Hi-Tech e Digital Native',
      description:
        'Soluzioni SaaS scalabili, architettura cloud-native e prototipazione rapida.',
    },
  ],
}
