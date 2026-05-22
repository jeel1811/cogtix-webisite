import type { Locale } from '@/i18n/config'

export interface ServicePageMessages {
  hero: {
    badge: string
    title: string
    highlight: string
    description: string
    cta: string
    statLabels: [string, string, string]
  }
  features: {
    badge: string
    title: string
    description: string
    outcomesTitle: string
    items: {
      title: string
      description: string
      details: string
      outcomes: string[]
    }[]
  }
  useCases: {
    badge: string
    title: string
    description: string
    items: { title: string; description: string }[]
  }
  expertise: {
    badge: string
    title: string
    description: string
    items: { title: string; description: string }[]
  }
  technologies: {
    badge: string
    title: string
    description: string
    categories: string[]
  }
}

type ServiceVariantKey =
  | 'ai'
  | 'cloud'
  | 'microsoft'
  | 'enterprise'
  | 'data'
  | 'experience'

export interface Messages {
  nav: {
    company: string
    services: string
    engineering: string
    industries: string
    partners: string
    insights: string
    careers: string
    aboutUs: string
    contactUs: string
    howWeWork: string
    ai: string
    dataAnalytics: string
    cloud: string
    microsoftTechnologies: string
    experienceDesign: string
    cmsDevelopment: string
    digitalMarketing: string
    qualityAssurance: string
    financialServices: string
    healthcareLifeSciences: string
    retailEcommerce: string
    supplyChainLogistics: string
    hiTechDigitalNatives: string
    microsoft: string
    aws: string
    googleCloud: string
    caseStudies: string
    blogs: string
    hireTalent: string
    aiEngineering: string
    cloudDevOpsEngineering: string
    dataEngineering: string
    digitalExperienceEngineering: string
    enterpriseServices: string
  }
  common: {
    contactUs: string
    getStarted: string
    language: string
    quickContact: string
  }
  siteCtas: {
    bookConsultation: string
    discussProject: string
    freeEstimate: string
  }
  hero: {
    trustedBy: string
    title: string
    titleHighlight: string
    subtitle: string
    scheduleMeeting: string
    viewCaseStudies: string
    projectsDelivered: string
    happyClients: string
    globalOffices: string
    expertDevelopers: string
    featureAiTitle: string
    featureAiDesc: string
    featureMicrosoftTitle: string
    featureMicrosoftDesc: string
    featureCustomTitle: string
    featureCustomDesc: string
  }
  services: {
    badge: string
    title: string
    subtitle: string
    learnMore: string
  }
  engineeringServices: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    explore: string
    outcomesTitle: string
    outcomeScalability: string
    outcomePerformance: string
    outcomeAutomation: string
    outcomeCostOptimization: string
    aiMl: { description: string }
    cloudDevOps: { description: string }
    digitalExperience: { description: string }
    dataEngineering: { description: string }
    enterprise: { description: string }
    microsoft: { description: string }
  }
  whoWeWorkWith: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    cta: string
    startups: { title: string; tag: string; description: string }
    saas: { title: string; tag: string; description: string }
    enterprises: { title: string; tag: string; description: string }
    aiFounders: { title: string; tag: string; description: string }
  }
  homeCaseStudies: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    labels: {
      problem: string
      solution: string
      impact: string
      techStack: string
    }
    viewStudy: string
    viewAll: string
    items: {
      id: string
      title: string
      sector: string
      technology: string
      description: string
      problem: string
      solution: string
      impacts: { value: string; label: string }[]
      techStack: string[]
      slug?: string
      imageUrl?: string
    }[]
  }
  industries: {
    badge: string
    title: string
    subtitle: string
  }
  technologies: {
    badge: string
    title: string
    subtitle: string
  }
  whyChooseUs: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    trackRecord: string
    certifiedExperts: string
    clientCentric: string
    innovativeSolutions: string
    endToEndSupport: string
  }
  whyCogtixPillars: {
    badge: string
    items: { title: string; description: string }[]
  }
  contact: {
    heroTitle: string
    heroSubtitle: string
    badge: string
    title: string
    subtitle: string
    infoTitle: string
    infoSubtitle: string
    locationSummary: string
    avgResponsePrefix: string
    avgResponseValue: string
    firstName: string
    lastName: string
    emailAddress: string
    phoneNumber: string
    message: string
    sendMessage: string
    sending: string
    submitSuccess: string
    submitError: string
    scheduleTitle: string
    scheduleSubtitle: string
  }
  aboutUs: {
    badge: string
    title: string
    subtitle: string
    heroTitle: string
    heroSubtitle: string
    whoWeAreTitle: string
    whoWeAreContent: string
    missionTitle: string
    missionContent: string
    visionTitle: string
    visionContent: string
    valuesTitle: string
    valuesSubtitle: string
  }
  founderProfile: {
    badge: string
    name: string
    title: string
    summary: string
    tagline: string
    experience: { label: string; description: string }
    techExpertise: { label: string; description: string }
    domainExposure: { label: string; description: string }
  }
  awards: {
    badge: string
    title: string
    subtitle: string
  }
  offices: {
    badge: string
    title: string
    subtitle: string
  }
  clients: {
    trustedBy: string
  }
  footer: {
    company: string
    engineering: string
    contactUs: string
    chatWithUs: string
    privacyPolicy: string
    designedBy: string
    rightsReserved: string
    description: string
    home: string
    aboutUs: string
    caseStudies: string
    blog: string
    careers: string
    contactUsLink: string
    aiEngineering: string
    digitalProductEngineering: string
    cloudDevOpsEngineering: string
    dataEngineering: string
    experienceEngineering: string
    enterpriseServices: string
    status: string
  }
  testimonials: {
    badge: string
    title: string
    subtitle: string
    description: string
    stats: {
      implementations: string
      implementationsLabel: string
      minds: string
      mindsLabel: string
    }
    items: {
      name: string
      title: string
      quoteTitle: string
      description: string
    }[]
  }
  home: {
    clientSay: string
  }
  serviceContent: Record<ServiceVariantKey, ServicePageMessages>
}

/** Home page engineering services (English; other locales use this until translated). */
export const engineeringServicesContent: Messages['engineeringServices'] = {
  badge: 'What We Deliver',
  title: 'Solutions Built for',
  titleHighlight: 'Business Impact',
  subtitle:
    'We help leaders launch and grow digital products with clear outcomes: stronger performance, smarter automation, scalable platforms, and cloud spend that stays under control.',
  explore: 'Learn more',
  outcomesTitle: 'Outcomes we focus on',
  outcomeScalability: 'Scalability',
  outcomePerformance: 'Performance',
  outcomeAutomation: 'Automation',
  outcomeCostOptimization: 'Cost optimization',
  aiMl: {
    description:
      'Turn data into decisions with production-ready AI and automation that reduce manual work, improve accuracy, and scale with your business.',
  },
  cloudDevOps: {
    description:
      'Run reliable platforms with faster releases, stronger security, and cloud practices that improve uptime while keeping infrastructure spend predictable.',
  },
  digitalExperience: {
    description:
      'Launch web and mobile products customers enjoy, with clear UX, steady performance, and delivery rhythms that support adoption and retention.',
  },
  dataEngineering: {
    description:
      'Build trusted data pipelines and analytics foundations so teams get timely insights, better forecasting, and confidence in reporting.',
  },
  enterprise: {
    description:
      'Modernize core systems and integrations with software shaped to your processes, compliance needs, and long-term growth plans.',
  },
  microsoft: {
    description:
      'Get more from the Microsoft stack with secure cloud, modern applications, and delivery approaches aligned to enterprise governance.',
  },
}

/** Primary site CTAs (English; other locales use this until translated). */
export const siteCtasContent: Messages['siteCtas'] = {
  bookConsultation: 'Book a Free Consultation',
  discussProject: 'Discuss Your Project',
  freeEstimate: 'Get Free Estimate',
}

/** Home page audience section (English; other locales use this until translated). */
export const whoWeWorkWithContent: Messages['whoWeWorkWith'] = {
  badge: 'Who we work with',
  title: 'Partnerships for teams at',
  titleHighlight: 'every stage of growth',
  subtitle:
    'We are not a one-size-fits-all vendor. We match how we engage, staff, and deliver to the pace, risk, and ambition of your business.',
  cta: siteCtasContent.discussProject,
  startups: {
    title: 'Startups',
    tag: 'MVP & early traction',
    description:
      'Validate ideas quickly with a focused MVP, clear milestones, and engineering that keeps burn low while you learn from real users.',
  },
  saas: {
    title: 'SaaS companies',
    tag: 'Scale & retention',
    description:
      'Grow subscription products with reliable releases, performance you can measure, and platforms that handle more customers without surprise rework.',
  },
  enterprises: {
    title: 'Enterprises',
    tag: 'Governed delivery',
    description:
      'Modernize safely inside your security, compliance, and integration requirements, with transparent communication and predictable delivery cadence.',
  },
  aiFounders: {
    title: 'Founders building AI products',
    tag: 'AI-first products',
    description:
      'Ship AI features responsibly with the right data, evaluation, and production path so demos become dependable products customers trust.',
  },
}

/** About page founder / leadership block (English; other locales use this until translated). */
export const founderProfileContent: Messages['founderProfile'] = {
  badge: 'Leadership',
  name: 'Akash Limbani',
  title: 'CEO & Co-Founder',
  summary:
    'Akash keeps the company focused on thoughtful delivery, practical innovation, and work that feels clear from first conversation to final handoff.',
  tagline:
    'Focused on simple delivery, long-term thinking, and strong client relationships.',
  experience: {
    label: 'Experience',
    description:
      '10+ Years Leading Software Delivery Across Startups, SaaS, and Enterprise Programs, from MVP Launches Through Scaled Platforms.',
  },
  techExpertise: {
    label: 'Tech expertise',
    description:
      'Deep hands-on background in Backend Systems, Cloud Architecture, APIs, Data Platforms, DevOps, and Modern Product Engineering.',
  },
  domainExposure: {
    label: 'Domain exposure',
    description:
      'Fintech, Logistics, Healthcare, Recruiting, Cybersecurity, and B2B SaaS, with teams and clients across the US, Europe, and APAC.',
  },
}

/** Why Cogtix differentiation pillars (English; other locales use this until translated). */
export const whyCogtixPillarsContent: Messages['whyCogtixPillars'] = {
  badge: 'Why Cogtix',
  items: [
    {
      title: '10+ years experience',
      description:
        'A decade of delivery across startups and enterprises, with teams that understand product, platform, and scale.',
    },
    {
      title: 'Strong backend & cloud expertise',
      description:
        'Deep engineering in APIs, data, Azure, AWS, and DevOps so your foundations stay reliable as you grow.',
    },
    {
      title: 'Startup-friendly execution',
      description:
        'Fast MVPs, clear milestones, and pragmatic scope so you ship without burning runway.',
    },
    {
      title: 'Long-term partnership approach',
      description:
        'We align to your roadmap beyond launch with maintainable code and continuity you can count on.',
    },
  ],
}

/** Home page case studies (English; other locales use this until translated). */
export const homeCaseStudiesContent: Messages['homeCaseStudies'] = {
  badge: 'Case studies',
  title: 'Proof that',
  titleHighlight: 'delivery creates outcomes',
  subtitle:
    'Real engagements across SaaS, enterprise, and AI products. Each story shows the challenge, how we solved it, measurable impact, and the stack we used.',
  labels: {
    problem: 'Problem',
    solution: 'Solution',
    impact: 'Impact',
    techStack: 'Tech stack',
  },
  viewStudy: 'Read full case study',
  viewAll: 'View all case studies',
  items: [
    {
      id: 'saas-analytics',
      title: 'B2B analytics SaaS platform',
      sector: 'SaaS',
      technology: 'Node.js | React | AWS',
      description:
        'Dashboard load times exceeded 12 seconds at peak usage. We redesigned the data layer and rebuilt the customer app for faster releases and lower cloud spend.',
      problem:
        'Dashboard load times exceeded 12 seconds at peak usage, churn risk was rising, and the team could not ship features without breaking reporting jobs.',
      solution:
        'We redesigned the data layer, introduced caching and async pipelines, and rebuilt the customer-facing app on a modular front end with CI/CD and observability baked in.',
      impacts: [
        { value: '45%', label: 'faster report queries' },
        { value: '2x', label: 'release cadence' },
        { value: '30%', label: 'lower cloud spend' },
      ],
      techStack: [
        'React',
        'Node.js',
        'PostgreSQL',
        'AWS',
        'Kubernetes',
        'Redis',
      ],
    },
    {
      id: 'enterprise-logistics',
      title: 'Global logistics operations suite',
      sector: 'Enterprise',
      technology: '.NET | Azure | Kubernetes',
      description:
        'A monolithic legacy system blocked releases across regions. We phased delivery into domain services on Azure with governed, zero-downtime cutovers.',
      problem:
        'A monolithic legacy system blocked quarterly releases, integrations were brittle, and operations teams lacked a single view across regions.',
      solution:
        'We phased delivery into domain services on Azure, standardized APIs, and migrated critical workflows with zero-downtime cutovers and strong governance.',
      impacts: [
        { value: '60%', label: 'fewer production incidents' },
        { value: '4', label: 'regions live on new stack' },
        { value: '8 wks', label: 'first milestone shipped' },
      ],
      techStack: [
        '.NET',
        'Azure',
        'Kubernetes',
        'SQL Server',
        'Redis',
        'API Management',
      ],
    },
    {
      id: 'ai-recruiting',
      title: 'AI-powered recruiting assistant',
      sector: 'AI product',
      technology: 'Python | FastAPI | OpenAI',
      description:
        'Founders needed a credible MVP in weeks with strong privacy and model quality. We shipped a RAG assistant and production pipeline in eight weeks.',
      problem:
        'Founders needed a credible MVP in weeks, not months, with guardrails for data privacy, model quality, and a path from prototype to production.',
      solution:
        'We delivered a RAG-based assistant, admin tooling, evaluation harness, and a secure deployment pipeline so the team could iterate with real user feedback.',
      impacts: [
        { value: '8 wks', label: 'to production MVP' },
        { value: '3.2x', label: 'candidate engagement' },
        { value: '99.5%', label: 'uptime after launch' },
      ],
      techStack: [
        'Python',
        'FastAPI',
        'React',
        'OpenAI',
        'PostgreSQL',
        'Docker',
      ],
    },
  ],
}

export const messages: Record<Locale, Messages> = {
  en: {
    nav: {
      company: 'Company',
      services: 'Services',
      engineering: 'Engineering',
      industries: 'Industries',
      partners: 'Partners',
      insights: 'Insights',
      careers: 'Careers',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      howWeWork: 'How We Work',
      ai: 'AI',
      dataAnalytics: 'Data & Analytics',
      cloud: 'Cloud',
      microsoftTechnologies: 'Microsoft Technologies',
      experienceDesign: 'Experience Design',
      cmsDevelopment: 'CMS Development',
      digitalMarketing: 'Digital Marketing',
      qualityAssurance: 'Quality Assurance',
      financialServices: 'Financial Services',
      healthcareLifeSciences: 'Healthcare and Life Sciences',
      retailEcommerce: 'Retail and E-commerce',
      supplyChainLogistics: 'Supply Chain and Logistics',
      hiTechDigitalNatives: 'Hi-Tech and Digital Natives',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Case Studies',
      blogs: 'Blogs',
      hireTalent: 'Hire Talent',
      aiEngineering: 'AI/ML Engineering',
      cloudDevOpsEngineering: 'Cloud & DevOps Engineering',
      dataEngineering: 'Data Engineering',
      digitalExperienceEngineering: 'Digital & Experience Engineering',
      enterpriseServices: 'Enterprise Services',
    },
    common: {
      contactUs: 'Contact Us',
      getStarted: 'Get Started',
      language: 'Language',
      quickContact: 'Quick Contact',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy: 'Trusted by forward-thinking companies worldwide',
      title: 'Custom SaaS, AI & Cloud Solutions',
      titleHighlight: 'Built to Scale',
      subtitle:
        'Cogtix helps startups and enterprises turn ideas into powerful, scalable products with modern engineering and AI-driven innovation',
      scheduleMeeting: siteCtasContent.bookConsultation,
      viewCaseStudies: 'View Case Studies',
      projectsDelivered: 'Projects Delivered',
      happyClients: 'Happy Clients',
      globalOffices: 'Global Offices',
      expertDevelopers: 'Expert Developers',
      featureAiTitle: 'AI Solutions',
      featureAiDesc: 'Smart Business Innovation',
      featureMicrosoftTitle: 'Microsoft Expertise',
      featureMicrosoftDesc: 'Cloud, Data, Security',
      featureCustomTitle: 'Custom Solutions',
      featureCustomDesc: 'Built for Your Business',
    },
    services: {
      badge: 'What We Do',
      title: 'Services We Offer',
      subtitle:
        'From generative AI and cloud-native architecture to digital product engineering, we build scalable systems that drive innovation.',
      learnMore: 'Learn more',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Industries',
      title: 'Industries We Serve',
      subtitle:
        'We bring deep domain expertise across diverse industries, delivering tailored solutions that drive real business impact.',
    },
    technologies: {
      badge: 'Technologies',
      title: 'Technologies We Craft Solutions With',
      subtitle:
        'We leverage cutting-edge technologies to build high-performance, scalable solutions for your business.',
    },
    whyChooseUs: {
      badge: 'WHY CHOOSE COGTIX',
      title: 'Expertise You Can Trust',
      titleHighlight: 'Expertise',
      subtitle:
        'At Cogtix, we combine innovation, technical expertise, and business understanding to deliver impactful digital solutions. Our team is committed to building reliable, scalable, and future-ready technologies that help businesses grow with confidence.',
      trackRecord: 'Proven Track Record',
      certifiedExperts: 'Certified Experts',
      clientCentric: 'Client-Centric Approach',
      innovativeSolutions: 'Innovative Solutions',
      endToEndSupport: 'End-to-End Support',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Get in Touch',
      heroSubtitle:
        'Have a project in mind? Let\'s discuss how we can help your business grow with our custom technology solutions.',
      badge: 'Get In Touch',
      title: "Let's Build Something Great Together",
      subtitle:
        'Fill out the form below and our team will get back to you within 24 hours.',
      infoTitle: 'Contact Information',
      infoSubtitle:
        "Reach out to us and let's discuss how we can help transform your business with technology.",
      locationSummary: 'USA • India • Australia • UK',
      avgResponsePrefix: 'Average response time:',
      avgResponseValue: 'within 2 hours',
      firstName: 'First Name *',
      lastName: 'Last Name *',
      emailAddress: 'Email Address *',
      phoneNumber: 'Mobile Number *',
      message: 'Message *',
      sendMessage: 'Send Message',
      sending: 'Sending…',
      submitSuccess:
        'Thank you. Your message was sent successfully. We will get back to you soon.',
      submitError:
        'Something went wrong. Please try again or email us directly.',
      scheduleTitle: 'Schedule a meeting',
      scheduleSubtitle:
        'Pick a time that works for you. We will confirm your slot and send a calendar invite.',
    },
    aboutUs: {
      badge: 'Our Company',
      title: 'Driving Innovation Forward',
      subtitle:
        'Cogtix helps businesses leverage modern technology to accelerate digital transformation and drive innovation. We specialize in AI solutions, Microsoft technologies, and custom software development tailored to unique business needs. Our mission is to build scalable, secure, and future-ready digital experiences that create lasting impact.',
      heroTitle: 'Driving Innovation Through Technology',
      heroSubtitle:
        'Cogtix is a premier technology partner helping businesses across the globe transform their digital landscape through intelligent software engineering.',
      whoWeAreTitle: 'Who We Are',
      whoWeAreContent:
        'Founded with a vision to simplify complex technology for businesses, Cogtix has grown into a multidisciplinary team of experts dedicated to building future-ready digital products.',
      missionTitle: 'Our Mission',
      missionContent:
        'To empower businesses worldwide by delivering cutting-edge, scalable, and secure technology solutions that drive growth, efficiency, and digital transformation.',
      visionTitle: 'Our Vision',
      visionContent:
        'To become the global leader in digital engineering, recognized for our commitment to excellence, innovation, and creating positive impact through technology.',
      valuesTitle: 'Our Core Values',
      valuesSubtitle:
        'The principles that guide everything we do, from our code to our client relationships.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Recognition',
      title: 'Award-Winning Excellence',
      subtitle:
        'Globally recognized for excellence in development and innovative solutions Our team has earned top rankings and prestigious accolades from industry leaders.',
    },
    offices: {
      badge: 'Our Offices',
      title: 'Located Around the World',
      subtitle:
        'With offices across four continents, we\'re always close to our clients.',
    },
    clients: {
      trustedBy: 'Trusted by leading companies worldwide',
    },
    footer: {
      company: 'Company',
      engineering: 'Engineering',
      contactUs: 'Contact Us',
      chatWithUs: 'Chat with us',
      privacyPolicy: 'Privacy Policy',
      designedBy: 'Designed by',
      rightsReserved: 'All Rights Reserved.',
      description:
        'A leading software development company renowned for agile and bespoke methodologies.',
      home: 'Home',
      aboutUs: 'About Us',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      careers: 'Careers',
      contactUsLink: 'Contact Us',
      aiEngineering: 'AI/ML Engineering',
      digitalProductEngineering: 'Digital Product Engineering',
      cloudDevOpsEngineering: 'Cloud & DevOps Engineering',
      dataEngineering: 'Data Engineering',
      experienceEngineering: 'Digital & Experience Engineering',
      enterpriseServices: 'Enterprise Services',
      status: 'Status',
    },
    testimonials: {
      badge: 'Testimonial',
      title: 'What They Say About Us',
      subtitle: 'Customer Stories',
      description:
        'Dynamically initiate market positioning total linkage with clicks-and-mortar technology compelling data for cutting-edge markets.',
      stats: {
        implementations: '12+',
        implementationsLabel: 'Successful Implementation',
        minds: '21+',
        mindsLabel: 'Brilliant Minds',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project\'s timelines and requirements, and internal stakeholders were impressed with the service provider\'s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'What Our Clients Say',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'AI & Machine Learning',
          title: 'Bring Intelligence into Core Business Workflows',
          highlight: 'Intelligence',
          description:
            'We help you move from AI experiments to production-ready systems with strong data foundations, clear evaluation, and reliable operational ownership.',
          cta: 'Start Your AI Project',
          statLabels: [
            'AI Models Shipped',
            'GenAI Engagements',
            'Pipeline Uptime',
          ],
        },
        features: {
          badge: 'Core Capabilities',
          title: 'Our AI/ML Services',
          description:
            'From GenAI and data science to ML engineering and MLOps, we cover the full AI lifecycle.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'Generative AI',
              description:
                'Custom GPT, LLM integration, and generative AI applications built with Claude, GPT-4, and open-source models.',
              details:
                'We design and deploy production-grade generative AI systems including retrieval-augmented generation (RAG) pipelines, multi-agent architectures, and domain-specific fine-tuned models that automate content creation, code generation, and intelligent document processing at scale.',
              outcomes: [
                'Reference RAG architecture with vector search',
                'Fine-tuned domain LLM with eval harness',
                'Production guardrails and content safety filters',
                'Token, latency, and grounding-rate dashboards',
                'Responsible-AI checklist signed off with legal',
              ],
            },
            {
              title: 'Data Science',
              description:
                'Predictive analytics, classification, regression, and clustering models trained on your business data.',
              details:
                'Our data science practice delivers actionable insights through advanced statistical modeling, feature engineering, and exploratory analysis. We turn raw data into dashboards, forecasts, and decision-support systems that drive measurable business outcomes.',
              outcomes: [
                'Cleaned and feature-engineered analytical dataset',
                'Predictive model with documented evaluation',
                'Interactive dashboards on Power BI or Looker',
                'Decision-support API for downstream apps',
                'Knowledge transfer to your analytics team',
              ],
            },
            {
              title: 'Machine Learning',
              description:
                'Image recognition, object detection, OCR, and visual processing for enterprise applications.',
              details:
                'We build and deploy custom ML models for computer vision, natural language processing, anomaly detection, and time-series forecasting, with rigorous evaluation pipelines, bias mitigation, and continuous model retraining for sustained production accuracy.',
              outcomes: [
                'Curated, labelled training and evaluation datasets',
                'Production ML model with versioned artefacts',
                'Bias and fairness review with mitigation plan',
                'Continuous retraining workflow with quality gates',
                'Inference API hardened for production traffic',
              ],
            },
            {
              title: 'MLOps',
              description:
                'Automated MLOps practices that streamline your entire ML lifecycle and keep production models reliable.',
              details:
                'Our MLOps framework covers experiment tracking and CI/CD for ML, automated model monitoring, drift detection, and governance. The result keeps your models performant, compliant, and cost-efficient in production environments.',
              outcomes: [
                'Experiment tracking on MLflow or Weights & Biases',
                'CI/CD pipeline for model training and deployment',
                'Drift, skew, and feature monitoring with alerts',
                'Model registry with approvals and lineage',
                'Runbook for rollback and incident response',
              ],
            },
            {
              title: 'AI Integration',
              description:
                'Seamless integration of AI capabilities into existing systems, ERPs, CRMs, and SaaS platforms.',
              details:
                'We architect API-first AI solutions that integrate directly into your business workflows, embedding real-time inference, intelligent automation, and predictive capabilities into existing ERP, CRM, and operational systems without disruptive rewrites.',
              outcomes: [
                'Integration architecture with API contracts',
                'AI plugins for ERP, CRM, and SaaS platforms',
                'Real-time inference endpoints with SLAs',
                'Authentication, rate limiting, and audit logging',
                'Sandbox and production environments configured',
              ],
            },
            {
              title: 'Model Deployment',
              description:
                'Production-ready ML operations, model serving, monitoring, and continuous improvement of AI systems.',
              details:
                'We handle containerized model serving on Kubernetes, A/B model testing, shadow mode rollouts, cost-optimized GPU allocation, and automated rollback strategies, so your AI systems stay reliable, scalable, and cost-efficient as traffic grows.',
              outcomes: [
                'Containerized model serving on Kubernetes',
                'A/B and shadow-mode rollout patterns',
                'GPU cost optimization and right-sizing',
                'Automated rollback on quality regression',
                'Capacity plan tested with load runs',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with AI/ML Engineering Services',
          description:
            'We bring deep domain expertise across industries and deliver AI solutions that solve real, measurable business problems.',
          items: [
            {
              title: 'Recommendation Systems',
              description:
                'AI-driven personalization engines for ecommerce, content, and learning platforms with dynamic pricing and user journeys.',
            },
            {
              title: 'Agentic AI Workflows',
              description:
                'Agent-based systems that automate multi-step tasks using reasoning, memory, and goal-directed behavior.',
            },
            {
              title: 'Shopping Advisors',
              description:
                'Virtual shopping assistants using conversational AI and real-time personalization for ecommerce conversion.',
            },
            {
              title: 'Content Moderation',
              description:
                'Scalable AI models for image, text, and video moderation that catch harmful content and enforce policy at scale.',
            },
            {
              title: 'Enterprise Cognitive Search',
              description:
                'Intelligent search that goes beyond keywords with semantic understanding, document parsing, and auto-tagging of content repositories.',
            },
            {
              title: 'Intelligent Risk Management',
              description:
                'AI-powered fraud detection, credit risk, cyber threat monitoring, and compliance violation flagging.',
            },
            {
              title: 'Operational Intelligence',
              description:
                'Predictive maintenance, quality control automation, workforce scheduling, and resource allocation at scale.',
            },
            {
              title: 'Demand Forecasting',
              description:
                'Accurate forecasting models for supply chain, inventory, and financial planning using historical and real-time data.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your AI/ML Solutions',
          description:
            'Our proven frameworks, deep tooling expertise, and production-first approach ensure your AI investments deliver lasting value.',
          items: [
            {
              title: 'GenAI Early-Mover Advantage',
              description:
                'As early adopters of generative AI technologies, we help businesses move beyond PoCs to deploy production-ready, scalable solutions with real-world impact.',
            },
            {
              title: 'Enterprise GenAI Accelerator',
              description:
                'Our foundational GenAI framework accelerates AI development with built-in capabilities for dataOps, governance, security, LLM integration, RAG, and model monitoring.',
            },
            {
              title: 'Data Readiness for Large-Scale AI',
              description:
                'Successful AI initiatives rely on high-quality, well-structured data. We ensure your data is optimized and ready to support large-scale, high-impact AI implementations.',
            },
            {
              title: 'Comprehensive MLOps Toolkit',
              description:
                'Our MLOps toolkit streamlines the entire ML lifecycle, including model training, data tagging, and quality control, ensuring high standards for AI deployment and management.',
            },
            {
              title: 'Azure Data & AI Competencies',
              description:
                'With specialization in Azure Data and AI, we leverage the latest advancements to create efficient data architectures for seamless model deployments and analytics.',
            },
            {
              title: 'Full Spectrum AI/ML',
              description:
                'End-to-end AI/ML solutions covering Generative AI, document extraction, and computer vision tasks like object detection, delivering precise domain-specific applications.',
            },
          ],
        },
        technologies: {
          badge: 'Technology Stack',
          title: 'Latest AI & ML Technologies',
          description:
            'We leverage industry leading tools and frameworks for optimal results.',
          categories: [
            'LLMs & Frameworks',
            'ML Libraries',
            'Cloud Platforms',
            'Data Processing',
            'Deployment',
            'Tools & Utilities',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud & DevOps',
          title: 'Modern Cloud & DevOps Engineering',
          highlight: 'DevOps',
          description:
            'Build, deploy, and manage cloud infrastructure with confidence. Our DevOps experts architect scalable solutions with automation, security, and operational excellence.',
          cta: 'Start Your Cloud Journey',
          statLabels: ['Cloud Migrations', 'SLA Uptime', 'Avg Cost Saved'],
        },
        features: {
          badge: 'Core Capabilities',
          title: 'Comprehensive Cloud & DevOps Services',
          description:
            'From architecture to operations, we handle every layer of your cloud infrastructure.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'Cloud Architecture Design',
              description:
                'Scalable, reliable, and secure cloud infrastructure on AWS, Azure, or Google Cloud, tailored to your business needs.',
              details:
                'We run Well-Architected reviews against all six pillars, design multi-region topologies for resilience, and implement auto-scaling strategies that ensure 99.99% availability while optimizing your monthly cloud spend by up to 40%.',
              outcomes: [
                'Well-Architected review with remediation backlog',
                'Reference multi-region topology diagram',
                'Auto-scaling policies for each workload tier',
                'Cost baseline with savings recommendations',
                'Reusable IaC starter for new environments',
              ],
            },
            {
              title: 'Kubernetes Orchestration',
              description:
                'Deploy, manage, and scale containerized applications using Kubernetes at enterprise scale with full observability.',
              details:
                'We set up EKS, AKS, or GKE clusters, manage Helm charts, configure service mesh, and define pod autoscaling. The result is a production-grade container orchestration platform with comprehensive monitoring and self-healing capabilities.',
              outcomes: [
                'Production EKS, AKS, or GKE cluster handed over',
                'Helm chart repository with release pipelines',
                'Service mesh configured for mTLS and observability',
                'Cluster, node, and pod autoscaling policies',
                'Upgrade and disaster recovery runbook',
              ],
            },
            {
              title: 'CI/CD Pipeline Implementation',
              description:
                'Automated build, test, and deployment pipelines for faster, reliable releases with zero-downtime delivery.',
              details:
                'Our CI/CD implementations include GitOps workflows, automated quality gates, blue-green and canary deployment strategies, and rollback automation. Customers typically see deployment failures fall by 90% and release cycles shrink from weeks to hours.',
              outcomes: [
                'GitOps delivery via Argo CD or Flux',
                'Automated quality gates for tests and security',
                'Blue-green and canary deployment templates',
                'One-click rollback automation per service',
                'Release dashboard for engineering and SRE',
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automate infrastructure provisioning using Terraform, CloudFormation, and Ansible for repeatable environments.',
              details:
                'We build modular, reusable IaC modules with drift detection, policy enforcement, and automated testing, so every environment is reproducible, auditable, and compliant with organizational standards from day one.',
              outcomes: [
                'Modular Terraform or CloudFormation library',
                'Drift detection with daily reports',
                'Policy-as-code enforcement on every change',
                'Automated unit and integration tests for IaC',
                'Pipeline templates for new repositories',
              ],
            },
            {
              title: 'Monitoring & Observability',
              description:
                'Comprehensive monitoring, logging, and alerting with Datadog, Prometheus, and ELK for full operational visibility.',
              details:
                'We implement the three pillars of observability, namely metrics, logs, and traces, with SLI and SLO definitions, distributed tracing, anomaly detection dashboards, and automated incident response runbooks tied to your on-call rotation.',
              outcomes: [
                'SLIs, SLOs, and error budgets defined per service',
                'Distributed tracing across critical user journeys',
                'Centralized logs and structured search',
                'Anomaly detection alerts wired to on-call',
                'Incident response runbooks tested in game days',
              ],
            },
            {
              title: 'Security & Compliance',
              description:
                'Implement security best practices, compliance frameworks, and disaster recovery strategies for regulated workloads.',
              details:
                'Our security practice covers zero-trust network architectures, secrets management with Vault, automated SOC 2, HIPAA, and PCI-DSS compliance checks, and disaster recovery planning with defined RTO and RPO targets.',
              outcomes: [
                'Zero-trust network reference architecture',
                'Secrets management via Vault or KMS',
                'Automated SOC 2, HIPAA, and PCI-DSS controls',
                'IAM and RBAC baseline with reviews',
                'DR plan with documented RTO and RPO',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with Cloud & DevOps Engineering',
          description:
            'We deliver cloud and DevOps solutions across migration, modernization, security, and cost optimization for enterprises at every stage.',
          items: [
            {
              title: 'Cloud Migration & Lift-Shift',
              description:
                'Move legacy on-premises workloads to cloud with minimal disruption using proven migration frameworks and tooling.',
            },
            {
              title: 'Application Modernization',
              description:
                'Containerize and re-architect monolithic applications into microservices for cloud-native scalability and maintainability.',
            },
            {
              title: 'Multi-Cloud Management',
              description:
                'Design and govern workloads across AWS, Azure, and GCP with unified policies, cost control, and security.',
            },
            {
              title: 'Disaster Recovery Engineering',
              description:
                'Design and automate DR strategies with RTO and RPO targets, failover testing, and geo-redundant backup solutions.',
            },
            {
              title: 'Performance Engineering',
              description:
                'Optimize cloud resource usage, reduce latency, and tune infrastructure for high-throughput, cost-efficient workloads.',
            },
            {
              title: 'Compliance Automation',
              description:
                'Automate compliance checks for HIPAA, PCI-DSS, SOC 2, and GDPR with continuous policy enforcement and audit trails.',
            },
            {
              title: 'DevSecOps Integration',
              description:
                'Embed security scanning, SAST and DAST testing, and vulnerability management directly into CI/CD pipelines.',
            },
            {
              title: 'FinOps & Cost Optimization',
              description:
                'Continuously analyze cloud spend, right-size resources, and implement tagging governance to reduce cloud bills by 30 to 60%.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your Cloud Infrastructure',
          description:
            'Our cloud-native methodologies, SRE practices, and security-first culture ensure you get infrastructure that scales, stays secure, and stays affordable.',
          items: [
            {
              title: 'Cloud-Native First Approach',
              description:
                'We design every solution for the cloud from day one, leveraging managed services, serverless, and containers to minimize operational overhead.',
            },
            {
              title: 'Security-by-Design',
              description:
                'Security is embedded at every layer, from IAM policies and secret management to network segmentation and automated compliance monitoring.',
            },
            {
              title: 'GitOps-Driven Delivery',
              description:
                'All infrastructure and application changes flow through version-controlled, reviewed pipelines, which enables auditability, rollbacks, and speed.',
            },
            {
              title: 'SRE & Reliability Engineering',
              description:
                'We define SLIs, SLOs, and error budgets, then build automation that keeps your systems reliable, observable, and self-healing.',
            },
            {
              title: 'Multi-Region Scalability',
              description:
                'Architect globally distributed systems with active-active or active-passive topologies for maximum availability and data residency compliance.',
            },
            {
              title: 'Cost Engineering',
              description:
                'Systematic FinOps practices, including reserved instances, spot fleets, autoscaling, and tagging governance, reduce cloud costs by an average of 40%.',
            },
          ],
        },
        technologies: {
          badge: 'Technology Stack',
          title: 'Industry Leading Cloud & DevOps Tools',
          description:
            'We leverage proven technologies for reliable, scalable deployments.',
          categories: [
            'Cloud Platforms',
            'Container & Orchestration',
            'Infrastructure as Code',
            'CI/CD Tools',
            'Monitoring & Logging',
            'Cloud Services',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: 'Microsoft Center of Excellence',
          title: 'Enterprise-Grade Innovation with Microsoft Technologies',
          highlight: 'Innovation',
          description:
            'We harness the power of the Microsoft ecosystem: .NET, Azure, and Power Platform: to build scalable, secure, and future-ready enterprise solutions.',
          cta: 'Talk to a Microsoft Expert',
          statLabels: [
            '.NET Projects',
            'Tech Experience',
            'Azure Certifications',
          ],
        },
        features: {
          badge: 'Our Expertise',
          title: 'Comprehensive Microsoft Technology Services',
          description:
            'Tailored solutions across the entire Microsoft stack to drive your business efficiency.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'Full-Stack .NET Development',
              description:
                'Robust, high-performance web and desktop applications built using .NET, ASP.NET, and Entity Framework.',
              details:
                'We architect .NET solutions with microservices patterns, real-time capabilities via SignalR, Blazor WebAssembly SPAs, and API-first design. The result is enterprise-grade applications that handle millions of concurrent users with sub-100ms response times.',
              outcomes: [
                'Reference .NET microservices architecture',
                'API-first design with OpenAPI contracts',
                'Real-time channels using SignalR',
                'CI/CD pipelines on GitHub Actions or Azure DevOps',
                'Application Insights observability per service',
              ],
            },
            {
              title: 'Azure Cloud Solutions',
              description:
                'Scalable cloud-native applications architected and deployed on the full power of the Microsoft Azure ecosystem.',
              details:
                'Our Azure practice covers App Services, serverless Functions, AKS container orchestration, Cosmos DB for globally distributed data, and Azure SQL, all designed with the Azure Well-Architected Framework for reliability, security, and cost optimization.',
              outcomes: [
                'Azure landing zone with policy guardrails',
                'Reference workload deployed across two regions',
                'Cosmos DB or Azure SQL data layer with PITR',
                'Bicep infrastructure repository handed over',
                'Cost baseline with Well-Architected review',
              ],
            },
            {
              title: 'Power Platform & Business Apps',
              description:
                'Low-code solutions, automated workflows, and data-driven business intelligence that empower your organization.',
              details:
                'We design and deploy Power Apps (Canvas and Model-driven), Power Automate workflows, Power BI dashboards with row-level security, and Dataverse integrations. The result enables citizen development while maintaining enterprise governance and security.',
              outcomes: [
                'Power Platform Center of Excellence (CoE) setup',
                'Two to four production Power Apps in use',
                'Power Automate workflows replacing manual handoffs',
                'Power BI dashboards with row-level security',
                'Dataverse model owned by your IT team',
              ],
            },
            {
              title: 'Modernization & Migration',
              description:
                'Safely transform legacy .NET applications into modern, cloud-optimized .NET solutions.',
              details:
                'Our modernization methodology covers legacy .NET refactoring, on-premises to Azure migration using Azure Migrate, monolith decomposition into microservices, and performance optimization. The result reduces technical debt while preserving critical business logic.',
              outcomes: [
                'Application portfolio assessment and 6 R plan',
                'Strangler-fig roadmap with quarterly milestones',
                'New services running on .NET in AKS or App Service',
                'Performance baseline and post-migration uplift report',
                'Knowledge transfer for your engineering team',
              ],
            },
            {
              title: 'Microsoft 365 & SharePoint',
              description:
                'Custom collaboration solutions and enterprise content management built on Microsoft 365 and SharePoint Online.',
              details:
                'We build SharePoint Framework (SPFx) solutions, Teams app integrations, Microsoft 365 automation workflows, and modern intranet portals that enhance employee collaboration, knowledge management, and digital workplace experiences.',
              outcomes: [
                'SharePoint Online intranet with Viva Connections',
                'Teams Toolkit apps integrated into daily workflows',
                'Microsoft Graph automations replacing handoffs',
                'Tenant security review with Secure Score uplift',
                'Content governance and lifecycle policies documented',
              ],
            },
            {
              title: 'Data & AI on Azure',
              description:
                'Intelligent applications with advanced data insights, built on Azure Machine Learning and Cognitive Services.',
              details:
                'We integrate Azure OpenAI Service, Cognitive Services for vision, speech, and language, Synapse Analytics for data warehousing, and Databricks for advanced ML workflows, embedding intelligence directly into your enterprise applications.',
              outcomes: [
                'Reference architecture on Azure OpenAI and AI Search',
                'Cognitive Services integrated into existing apps',
                'Synapse or Fabric lakehouse with semantic models',
                'Databricks workflows for advanced ML pipelines',
                'Application Insights dashboards for AI workloads',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with Microsoft Technology Services',
          description:
            'From Azure migrations and .NET modernization to Power Platform automation, we solve real Microsoft-stack challenges for enterprises of all sizes.',
          items: [
            {
              title: 'Enterprise Azure Migration',
              description:
                'Move complex on-premises workloads to Azure with minimal disruption using Azure Migrate, ASR, and proven migration patterns.',
            },
            {
              title: '.NET Legacy Modernization',
              description:
                'Modernize legacy .NET applications and containerize them on Azure AKS for cloud-native scalability.',
            },
            {
              title: 'Power Platform Low-Code Solutions',
              description:
                'Build departmental apps, automated approval workflows, and Power BI reports without the cost of custom development.',
            },
            {
              title: 'Azure Data & Analytics Platforms',
              description:
                'Design end-to-end Azure data platforms using Synapse, Data Factory, and Power BI for unified analytics and reporting.',
            },
            {
              title: 'Microsoft 365 Intranet Portals',
              description:
                'Build modern SharePoint-based intranets and Teams integrations that improve employee engagement and knowledge sharing.',
            },
            {
              title: 'Azure AI & Cognitive Applications',
              description:
                'Embed Azure OpenAI, Form Recognizer, Speech, and Computer Vision into enterprise apps for intelligent automation.',
            },
            {
              title: 'Azure Security & Compliance',
              description:
                'Implement Azure Security Center, Defender, Key Vault, and Sentinel to harden cloud environments for regulated industries.',
            },
            {
              title: 'Custom Dynamics 365 Solutions',
              description:
                'Extend and customize Dynamics 365 Sales, Customer Service, and Finance with tailored plugins, PCF controls, and integrations.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your Microsoft Investments',
          description:
            'Our Microsoft-certified engineers, structured adoption frameworks, and partner ecosystem access ensure every Microsoft engagement delivers maximum ROI.',
          items: [
            {
              title: 'Microsoft-Certified Engineering Team',
              description:
                'Our engineers hold 50+ active Microsoft certifications across Azure, .NET, Power Platform, and Dynamics 365, ensuring current, compliant implementations.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                'We structure all Azure engagements using Microsoft CAF, ensuring your cloud adoption follows best practices for security, governance, and cost management.',
            },
            {
              title: 'Azure Well-Architected Reviews',
              description:
                'We conduct structured Azure Well-Architected reviews across reliability, security, cost optimization, performance, and operational excellence pillars.',
            },
            {
              title: 'Microsoft Partner Ecosystem',
              description:
                'As a recognized Microsoft Partner, we have access to early technical previews, dedicated support channels, and co-sell capabilities for enterprise deals.',
            },
            {
              title: 'Power Platform Center of Excellence',
              description:
                'We stand up Power Platform CoE toolkits that govern citizen development, enforce security policies, and measure adoption across the organization.',
            },
            {
              title: 'Azure Data Specialization',
              description:
                'Deep expertise in Azure Synapse Analytics, Data Factory, Databricks, and Cosmos DB for enterprise-scale data platforms on Azure.',
            },
          ],
        },
        technologies: {
          badge: 'Microsoft Stack',
          title: 'Microsoft Ecosystem & Tooling',
          description:
            'Our deep expertise in Microsoft technologies ensures we choose the right tools for your specific needs.',
          categories: [
            '.NET',
            'Azure Services',
            'Data & Storage',
            'Power Platform',
            'DevOps & Tooling',
            'Collaboration',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Enterprise Services',
          title: 'Enterprise-Grade Software Solutions',
          highlight: 'Enterprise-Grade',
          description:
            'Power your enterprise with custom, scalable solutions that handle complex business requirements. From ERP implementations to legacy modernization, we deliver proven enterprise solutions.',
          cta: 'Discuss Your Enterprise Needs',
          statLabels: [
            'Enterprise Clients',
            'Transactions / Day',
            'Compliance Ready',
          ],
        },
        features: {
          badge: 'Core Capabilities',
          title: 'Complete Enterprise Services',
          description:
            'Comprehensive services for enterprise transformation and digital modernization.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'Custom Enterprise Applications',
              description:
                'Scalable, mission-critical applications built to handle complex business requirements and high transaction volumes.',
              details:
                'We architect enterprise systems using domain-driven design, event-driven patterns, and horizontal scalability. The result handles millions of transactions daily with multi-tenant isolation, comprehensive audit trails, and 99.99% SLA targets.',
              outcomes: [
                'Domain model with bounded contexts documented',
                'Event-driven architecture reference and contracts',
                'Multi-tenant isolation pattern and SDK',
                'Audit trail and compliance reporting baked in',
                'SLA dashboard tied to error budgets',
              ],
            },
            {
              title: 'ERP & CRM Solutions',
              description:
                'SAP, Oracle, Salesforce, and Dynamics implementations with deep customization and seamless system integration.',
              details:
                'Our ERP and CRM practice covers full-lifecycle implementations, from requirements mapping and data migration to custom module development, third-party integrations, user training, and post-go-live hypercare support.',
              outcomes: [
                'Functional and technical requirements signed off',
                'Data migration plan with cleansing and validation',
                'Custom modules and integrations delivered',
                'End-user training program and adoption playbook',
                'Hypercare and post-go-live support window',
              ],
            },
            {
              title: 'Business Process Automation',
              description:
                'Streamline operations with RPA, workflow automation, and digital process optimization that cuts manual effort.',
              details:
                'We implement hyperautomation strategies combining UiPath or Power Automate bots, intelligent approval workflows, process mining analytics, and digital twins, delivering measurable productivity gains of 40 to 70% across operations.',
              outcomes: [
                'Process inventory with automation candidates ranked',
                'Top three RPA bots in production with monitoring',
                'Approval workflows replacing email and paper trails',
                'Process mining dashboards for continuous improvement',
                'Productivity baseline and post-automation uplift report',
              ],
            },
            {
              title: 'Legacy Modernization',
              description:
                'Transform legacy systems into modern, cloud-native architectures while preserving critical business functionality.',
              details:
                'Our modernization playbook uses strangler fig patterns, API wrapping, and phased migrations, so business operations stay uninterrupted while we systematically replace legacy COBOL, Delphi, or monolithic Java systems with modern, maintainable platforms.',
              outcomes: [
                'Application portfolio assessment with risk scoring',
                'Strangler-fig roadmap with phased migration plan',
                'API gateway in front of the legacy system',
                'New services running on cloud-native runtimes',
                'Decommissioning checklist for retired components',
              ],
            },
            {
              title: 'Enterprise Integration',
              description:
                'Integrate disparate systems and data sources with API-first and microservices architecture and event buses.',
              details:
                'We design enterprise integration hubs using MuleSoft, Apache Kafka, and cloud-native iPaaS platforms that enable real-time data synchronization across ERP, CRM, HRMS, finance, and third-party SaaS applications.',
              outcomes: [
                'Integration architecture with API and event contracts',
                'MuleSoft, Kafka, or iPaaS platform stood up',
                'Reusable connectors for top systems',
                'Real-time data sync replacing nightly batch',
                'Observability for integration flows end to end',
              ],
            },
            {
              title: 'Security & Compliance',
              description:
                'Enterprise-grade security, compliance frameworks, and governance for regulated industries and critical systems.',
              details:
                'Our security practice implements SOC 2, ISO 27001, and industry-specific compliance controls with zero-trust architecture, role-based access management, automated penetration testing, and comprehensive audit logging.',
              outcomes: [
                'Zero-trust network reference architecture',
                'RBAC and identity model documented',
                'SOC 2 and ISO 27001 control mapping',
                'Automated penetration testing in CI/CD',
                'Audit logging and SIEM integration enabled',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with Enterprise Software Services',
          description:
            'We partner with enterprise teams across BFSI, healthcare, manufacturing, and government to solve complex, mission-critical software challenges.',
          items: [
            {
              title: 'Global Enterprise Rollouts',
              description:
                'Design and deploy multi-region, multi-language enterprise applications serving thousands of internal and external users.',
            },
            {
              title: 'Legacy System Replacement',
              description:
                'Safely retire aging COBOL, Delphi, or legacy Java monoliths and replace them with modern, maintainable platforms.',
            },
            {
              title: 'Workflow & Approval Automation',
              description:
                'Automate multi-step business approvals, document routing, and audit-ready workflows across departments and subsidiaries.',
            },
            {
              title: 'Enterprise Analytics & Reporting',
              description:
                'Build embedded analytics, real-time dashboards, and self-serve BI for operations, finance, and executive teams.',
            },
            {
              title: 'Microservices Decomposition',
              description:
                'Break down monolithic enterprise apps into independently deployable, business-aligned microservices at safe pace.',
            },
            {
              title: 'System Integration Hubs',
              description:
                'Build enterprise integration hubs that connect ERP, CRM, HRMS, finance, and third-party SaaS with real-time data sync.',
            },
            {
              title: 'Regulated Industry Compliance',
              description:
                'Purpose-built compliance solutions for BFSI, healthcare, and government that meet strict audit, data, and security standards.',
            },
            {
              title: 'AI-Powered Enterprise Apps',
              description:
                'Infuse enterprise apps with AI capabilities including intelligent search, document processing, predictive alerts, and decision support modules.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your Enterprise Systems',
          description:
            'Our domain-driven approach, proven modernization playbook, and security-first culture deliver enterprise solutions that last decades, not months.',
          items: [
            {
              title: 'Domain-Driven Design Expertise',
              description:
                'We model complex enterprise domains using DDD principles, where bounded contexts, aggregates, and a ubiquitous language ensure software matches business reality.',
            },
            {
              title: 'Enterprise Security & Governance',
              description:
                'Security is not an afterthought. We implement zero-trust architectures, RBAC, secrets management, and automated compliance from day one.',
            },
            {
              title: 'Proven Modernization Methodology',
              description:
                'Our battle-tested modernization playbook minimizes business risk using strangler fig patterns, feature parity testing, and phased migrations.',
            },
            {
              title: 'Deep Integration Expertise',
              description:
                'Certified expertise in MuleSoft, Apache Kafka, and major iPaaS platforms to connect complex enterprise application landscapes.',
            },
            {
              title: 'Hyperautomation & RPA',
              description:
                'We combine RPA, AI, and workflow automation to eliminate manual processes, delivering measurable productivity gains across the enterprise.',
            },
            {
              title: 'Outcome-Focused Delivery',
              description:
                'Every engagement is tied to business outcomes. We define measurable KPIs upfront and report against them throughout delivery.',
            },
          ],
        },
        technologies: {
          badge: 'Technology Stack',
          title: 'Enterprise Technology Platform',
          description:
            'Proven enterprise technologies for mission-critical systems.',
          categories: [
            'Enterprise Platforms',
            'Business Process',
            'Backend & APIs',
            'Database',
            'Integration',
            'Enterprise Tools',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Data Engineering',
          title: 'Build Enterprise-Scale Data Solutions',
          highlight: 'Enterprise-Scale',
          description:
            'Unlock the value of your data with scalable data pipelines, warehouses, and analytics platforms. We architect and implement data solutions that handle complex requirements and massive volumes.',
          cta: 'Start Your Data Project',
          statLabels: ['Data Processed', 'Stream Latency', 'Pipeline SLO'],
        },
        features: {
          badge: 'Core Capabilities',
          title: 'Complete Data Engineering Services',
          description:
            'From architecture to deployment and maintenance of enterprise data solutions.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'Data Pipeline Architecture',
              description:
                'Scalable ETL and ELT pipelines that handle massive data volumes with high reliability and zero data loss.',
              details:
                'We architect idempotent, SLA-driven data pipelines with schema evolution support, dead-letter queues, and automated retry mechanisms. The pipelines process billions of records daily with full observability and alerting.',
              outcomes: [
                'Reference pipeline framework with retry and DLQ',
                'Schema registry with versioning and contracts',
                'SLA dashboards and freshness monitoring',
                'Backfill and replay tooling for historical data',
                'CI/CD pipeline for transformations',
              ],
            },
            {
              title: 'Data Warehouse Solutions',
              description:
                'Modern data warehouses built on cloud-native technologies for analytics, reporting, and business intelligence.',
              details:
                'From dimensional modeling with star and snowflake schemas to columnar storage optimization, incremental materialized views, and BI tool connectivity, we build warehouses that serve fast analytics at petabyte scale.',
              outcomes: [
                'Dimensional model with documented grain',
                'Optimized partitioning and clustering layout',
                'Incremental materialized views for top queries',
                'Certified semantic layer in Looker or Power BI',
                'Cost model and slot or capacity strategy',
              ],
            },
            {
              title: 'Real-time Data Processing',
              description:
                'Stream processing and real-time analytics on Apache Kafka, Flink, and Spark Streaming for sub-second insights.',
              details:
                'We design event-driven architectures with exactly-once semantics, change data capture (CDC), and sub-5ms processing latency, which enables real-time dashboards, fraud detection, and operational alerting.',
              outcomes: [
                'Kafka topics with schema registry contracts',
                'Flink or Spark Streaming jobs in production',
                'CDC connectors from operational databases',
                'Exactly-once processing patterns documented',
                'Live dashboards with sub-second freshness',
              ],
            },
            {
              title: 'Data Lake Management',
              description:
                'Enterprise data lakes with governance, quality, and metadata management built on open table formats.',
              details:
                'We implement Delta Lake, Apache Iceberg, and Hudi-based lakehouses with automated data cataloging, fine-grained access control, and cost-tiered storage lifecycle policies for optimal total cost of ownership.',
              outcomes: [
                'Open lakehouse on Delta, Iceberg, or Hudi',
                'Automated data catalog with rich metadata',
                'Fine-grained access policies enforced at query time',
                'Storage lifecycle and tiering rules in place',
                'Compaction and small-file management automated',
              ],
            },
            {
              title: 'Data Integration',
              description:
                'Connect and harmonize data from multiple sources with robust data quality assurance and lineage tracking.',
              details:
                'We build API connectors, CDC pipelines, and reverse ETL flows with automated data quality scoring and complete lineage tracking, which keeps data flows trustworthy across your entire organization.',
              outcomes: [
                'Reusable API and CDC connector library',
                'Reverse ETL flows back to operational systems',
                'Data quality scoring on every dataset',
                'End-to-end lineage visible to business users',
                'Incident response runbooks for data outages',
              ],
            },
            {
              title: 'Data Security & Governance',
              description:
                'Data governance frameworks with compliance, security, privacy standards, and automated policy enforcement.',
              details:
                'Our governance frameworks cover GDPR, HIPAA, and CCPA compliance, PII auto-detection and masking, role-based access control, encryption at rest and in transit, and comprehensive audit logging for regulatory readiness.',
              outcomes: [
                'PII detection and masking rules across datasets',
                'RBAC and ABAC access policies enforced',
                'Encryption at rest and in transit verified',
                'Audit logs streaming to SIEM',
                'Regulatory mapping for GDPR, HIPAA, and CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with Data Engineering Services',
          description:
            'We serve data-intensive organizations across finance, retail, healthcare, and SaaS, delivering reliable, governed, and scalable data infrastructure.',
          items: [
            {
              title: 'Customer 360 Platforms',
              description:
                'Unify customer data from CRM, web, mobile, and support channels into a single, real-time view that drives personalization.',
            },
            {
              title: 'Real-Time Analytics Dashboards',
              description:
                'Stream operational data into live dashboards for executive reporting, sales ops, and customer success teams.',
            },
            {
              title: 'Multi-Source Data Integration',
              description:
                'Harmonize data from ERP, CRM, marketing, and IoT sources into a clean, governed data layer ready for analytics.',
            },
            {
              title: 'Financial Data Pipelines',
              description:
                'Build compliant, auditable pipelines for financial reporting, regulatory submissions, and risk model data feeds.',
            },
            {
              title: 'Data Platform Modernization',
              description:
                'Migrate legacy Hadoop or on-premises warehouses to modern cloud-native platforms like Snowflake, BigQuery, or Synapse.',
            },
            {
              title: 'IoT Data Ingestion & Processing',
              description:
                'Ingest and process millions of IoT events per second from devices, sensors, and edge nodes for operational intelligence.',
            },
            {
              title: 'Compliance Data Management',
              description:
                'Automate data classification, consent tracking, and retention policies to meet GDPR, HIPAA, and CCPA requirements.',
            },
            {
              title: 'ML Feature Stores',
              description:
                'Build centralized feature stores that serve consistent, pre-computed ML features at training and inference time.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your Data Platform',
          description:
            'Our DataOps-first culture, deep cloud expertise, and commitment to data quality ensure your data platform becomes a genuine competitive asset.',
          items: [
            {
              title: 'Modern Data Architecture',
              description:
                'We design data architectures using lakehouse patterns that combine the flexibility of data lakes with the performance of warehouses.',
            },
            {
              title: 'DataOps & Automation',
              description:
                'Our DataOps practices bring CI/CD, testing, and monitoring to data pipelines, reducing time-to-insight and ensuring data quality.',
            },
            {
              title: 'Real-Time Streaming Expertise',
              description:
                'Deep hands-on expertise in Kafka, Flink, and Spark Streaming for building low-latency, fault-tolerant event-driven architectures.',
            },
            {
              title: 'Data Governance & Quality',
              description:
                'We embed automated data quality checks, schema registries, and lineage tracking so your data is always trustworthy and auditable.',
            },
            {
              title: 'Cloud Data Warehouse Specialists',
              description:
                'Certified expertise in Snowflake, BigQuery, Redshift, and Azure Synapse, from architecture to query optimization and cost control.',
            },
            {
              title: 'Regulatory Compliance Built-In',
              description:
                'All our data pipelines are designed with compliance from day one, data masking, encryption at rest/transit, and audit trails.',
            },
          ],
        },
        technologies: {
          badge: 'Technology Stack',
          title: 'Modern Data Engineering Stack',
          description:
            'We use best-in-class tools and platforms for reliable, scalable solutions.',
          categories: [
            'Cloud Data Warehouses',
            'Stream Processing',
            'ETL/ELT Tools',
            'Data Lakes',
            'Storage & Processing',
            'Monitoring & Tools',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Digital & Experience Engineering',
          title: 'Craft Connected Digital Experiences That Convert',
          highlight: 'Experiences',
          description:
            'We design and engineer end-to-end digital experiences with deep focus on usability, accessibility, and business outcomes across web and mobile touchpoints.',
          cta: 'Start Your Design Project',
          statLabels: [
            'Avg Conversion Lift',
            'Accessibility',
            'Design Systems',
          ],
        },
        features: {
          badge: 'Core Capabilities',
          title: 'Comprehensive Digital & Experience Engineering Services',
          description:
            'From user research to design systems and production implementation.',
          outcomesTitle: 'What we deliver',
          items: [
            {
              title: 'User Experience Design',
              description:
                'Research-driven UX design that creates intuitive, accessible, and delightful user experiences across all touchpoints.',
              details:
                'We conduct user journey mapping, competitive audits, and usability testing sessions to validate every interaction. Our WCAG-compliant designs ensure accessibility while delivering experiences that reduce task completion time by 30 to 50%.',
              outcomes: [
                'User journey maps for the top user flows',
                'Usability test reports with prioritized fixes',
                'WCAG-compliant interaction patterns',
                'Information architecture and sitemap',
                'Hi-fi prototypes ready for engineering handoff',
              ],
            },
            {
              title: 'User Interface Design',
              description:
                'Beautiful, modern UI design aligned with your brand identity, design system, and user expectations.',
              details:
                'Our UI practice delivers brand-aligned interfaces with sophisticated micro-interactions, adaptive dark and light theming, fluid responsive layouts, and motion design that brings personality to every screen, all backed by a token-based design system.',
              outcomes: [
                'Brand-aligned UI kit with documented states',
                'Dark and light theme tokens defined',
                'Micro-interaction and motion guidelines',
                'Responsive grid and breakpoint system',
                'Figma library handed over with usage docs',
              ],
            },
            {
              title: 'Web Design',
              description:
                'Responsive, performance-optimized web design that converts users into customers with strong visual hierarchy.',
              details:
                'We design conversion-focused web experiences optimized for Core Web Vitals such as LCP, CLS, and FID, combining persuasive visual hierarchy, strategic CTA placement, and performant animations that keep engagement high without sacrificing page speed.',
              outcomes: [
                'Conversion-focused landing page designs',
                'Core Web Vitals targets agreed upfront',
                'Animation specs that respect performance budgets',
                'A/B test variants for top funnels',
                'Engineering handoff package with assets',
              ],
            },
            {
              title: 'Mobile App Design',
              description:
                'Intuitive mobile experiences for iOS and Android that users love, built to platform HIG standards.',
              details:
                'We design native-feeling mobile experiences compliant with Apple HIG and Material Design 3 guidelines, featuring gesture-based interactions, platform-specific navigation patterns, and cross-platform design parity that maintains brand consistency.',
              outcomes: [
                'Native iOS and Android design specifications',
                'Platform-specific navigation and patterns',
                'Gesture and haptic interaction guidelines',
                'Onboarding and first-run experience design',
                'App Store and Play Store creative assets',
              ],
            },
            {
              title: 'User Research',
              description:
                'Comprehensive user research, testing, and analytics that validate design decisions with real user data.',
              details:
                'Our research practice includes ethnographic studies, moderated usability testing, A/B experimentation, heatmap analysis, card sorting exercises, and quantitative analytics, so every design decision is grounded in evidence, not assumptions.',
              outcomes: [
                'Research plan with success criteria',
                'Moderated and unmoderated test reports',
                'Persona and JTBD documentation',
                'Quantitative analytics review with findings',
                'Backlog of prioritized improvements',
              ],
            },
            {
              title: 'Design Systems',
              description:
                'Scalable, consistent design systems and component libraries that accelerate product teams at scale.',
              details:
                'We architect token-driven design systems in Figma with auto-layout components, variant structures, and documentation, paired with Storybook implementations and versioned release workflows that serve multiple product teams seamlessly.',
              outcomes: [
                'Design tokens for color, spacing, and type',
                'Figma component library with variants',
                'Storybook implementation in your tech stack',
                'Versioning and release process documented',
                'Adoption playbook and governance model',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Use Cases',
          title: 'Use Cases We Cater to with Experience Design Services',
          description:
            'We work with SaaS, ecommerce, fintech, and enterprise teams to design experiences users love and businesses measure.',
          items: [
            {
              title: 'Product Redesigns & Revamps',
              description:
                'Transform outdated product interfaces into modern, conversion-driven experiences without disrupting existing users.',
            },
            {
              title: 'Mobile App UX Overhauls',
              description:
                'Redesign mobile apps with improved onboarding flows, reduced friction, and platform-native interaction patterns.',
            },
            {
              title: 'E-Commerce Experience Design',
              description:
                'Design product discovery, cart, and checkout flows that reduce drop-off and increase average order value.',
            },
            {
              title: 'Enterprise Dashboard Design',
              description:
                'Create data-dense dashboards with clear visual hierarchy for operations, analytics, and executive reporting tools.',
            },
            {
              title: 'Design System Creation',
              description:
                'Build scalable Figma component libraries and Storybook implementations that give product teams a single source of truth.',
            },
            {
              title: 'Digital Brand Identity',
              description:
                'Develop cohesive digital brand identities, logos, typography, color systems, and motion design that stand out.',
            },
            {
              title: 'Accessibility Remediation',
              description:
                'Audit existing products against WCAG 2.2 standards and implement systematic fixes for keyboard, screen-reader, and color contrast compliance.',
            },
            {
              title: 'Onboarding Experience Design',
              description:
                'Design activation flows that guide new users to their "aha moment" faster, reducing churn in the critical first 30 days.',
            },
          ],
        },
        expertise: {
          badge: 'Why Choose Us',
          title:
            'Precision, Expertise & Tools That Future-Proof Your Digital Experience',
          description:
            'Our research-led, outcome-obsessed design practice combines creative excellence with engineering rigour to deliver experiences that perform.',
          items: [
            {
              title: 'Research-Led Design',
              description:
                'Every design decision is anchored in real user data, interviews, usability tests, heatmaps, and analytics inform everything we create.',
            },
            {
              title: 'Conversion Rate Optimization',
              description:
                'We design with measurable business outcomes in mind, A/B testing, funnel analysis, and iterative optimization drive 2x+ conversion lifts.',
            },
            {
              title: 'Design-to-Code Precision',
              description:
                'Our designers work hand-in-hand with frontend engineers to ensure pixel-perfect, performant implementation with clean handoff.',
            },
            {
              title: 'Performance-First Web Design',
              description:
                'We optimize designs for Core Web Vitals, LCP, CLS, FID, ensuring beautiful pages that also rank well and load fast.',
            },
            {
              title: 'Accessibility as Standard',
              description:
                'WCAG 2.2 compliance is built into every project, color contrast, keyboard navigation, ARIA roles, and screen-reader testing.',
            },
            {
              title: 'Scalable Design Systems',
              description:
                'We build token-driven Figma libraries and Storybook components that scale across multiple products, teams, and platforms.',
            },
          ],
        },
        technologies: {
          badge: 'Design Stack',
          title: 'Modern Design & Development Tools',
          description:
            'We use industry leading tools to create and deliver exceptional designs.',
          categories: [
            'Design Tools',
            'Prototyping',
            'User Research',
            'Web Tech',
            'Frontend Frameworks',
            'Collaboration',
          ],
        },
      },
    },
  },
  es: {
    nav: {
      company: 'Empresa',
      services: 'Servicios',
      engineering: 'Ingenieria',
      industries: 'Industrias',
      partners: 'Socios',
      insights: 'Insights',
      careers: 'Carreras',
      aboutUs: 'Sobre Nosotros',
      contactUs: 'Contactanos',
      howWeWork: 'Como Trabajamos',
      ai: 'IA',
      dataAnalytics: 'Datos y Analitica',
      cloud: 'Nube',
      microsoftTechnologies: 'Tecnologias Microsoft',
      experienceDesign: 'Diseno de Experiencia',
      cmsDevelopment: 'Desarrollo CMS',
      digitalMarketing: 'Marketing Digital',
      qualityAssurance: 'Aseguramiento de Calidad',
      financialServices: 'Servicios Financieros',
      healthcareLifeSciences: 'Salud y Ciencias de la Vida',
      retailEcommerce: 'Comercio Minorista y Electrónico',
      supplyChainLogistics: 'Cadena de Suministro y Logística',
      hiTechDigitalNatives: 'Alta Tecnología y Nativos Digitales',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Casos de Exito',
      blogs: 'Blogs',
      hireTalent: 'Contratar talento',
      aiEngineering: 'Ingenieria IA/ML',
      cloudDevOpsEngineering: 'Ingenieria Cloud y DevOps',
      dataEngineering: 'Ingenieria de Datos',
      digitalExperienceEngineering: 'Ingenieria de Experiencia Digital',
      enterpriseServices: 'Servicios Empresariales',
    },
    common: {
      contactUs: 'Contactanos',
      getStarted: 'Comenzar',
      language: 'Idioma',
      quickContact: 'Contacto Rapido',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy:
        'Con la confianza de empresas con visión de futuro en todo el mundo',
      title: 'Construya Sistemas Inteligentes que Scalen',
      titleHighlight: 'Su Negocio',
      subtitle:
        'Soluciones de software a medida diseñadas para simplificar problemas complejos e impulsar el crecimiento empresarial global.',
      scheduleMeeting: 'Agendar Reunión',
      viewCaseStudies: 'Ver Casos de Éxito',
      projectsDelivered: 'Proyectos Entregados',
      happyClients: 'Clientes Satisfechos',
      globalOffices: 'Oficinas Globales',
      expertDevelopers: 'Desarrolladores Expertos',
      featureAiTitle: 'Impulsado por IA',
      featureAiDesc: 'Automatización Inteligente',
      featureMicrosoftTitle: 'Experiencia en Microsoft',
      featureMicrosoftDesc: 'Nube, Datos, Seguridad',
      featureCustomTitle: 'Soluciones a Medida',
      featureCustomDesc: 'Creado para su Negocio',
    },
    services: {
      badge: 'Que Hacemos',
      title: 'Servicios que Ofrecemos',
      subtitle: 'Servicios de desarrollo integral adaptados a su negocio.',
      learnMore: 'Mas informacion',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Industrias',
      title: 'Industrias que Atendemos',
      subtitle: 'Experiencia profunda para generar impacto real.',
    },
    technologies: {
      badge: 'Tecnologias',
      title: 'Tecnologias con las que Creamos Soluciones',
      subtitle: 'Usamos tecnologia moderna para soluciones escalables.',
    },
    whyChooseUs: {
      badge: 'POR QUÉ ELEGIR COGTIX',
      title: 'Experiencia en la que Puede Confiar',
      titleHighlight: 'Experiencia',
      subtitle:
        'Aportamos una gran experiencia y un profundo conocimiento en soluciones tecnológicas modernas, combinados con un compromiso con la transparencia y la fiabilidad.',
      trackRecord: 'Historial Comprobado',
      certifiedExperts: 'Expertos Certificados',
      clientCentric: 'Enfoque Centrado en el Cliente',
      innovativeSolutions: 'Soluciones Innovadoras',
      endToEndSupport: 'Soporte de Extremo a Extremo',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Ponte en Contacto',
      heroSubtitle:
        '¿Tienes un proyecto en mente? Hablemos de cómo podemos ayudar a que tu negocio crezca con nuestras soluciones tecnológicas personalizadas.',
      badge: 'Ponte en Contacto',
      title: 'Construyamos Algo Genial Juntos',
      subtitle: 'Completa el formulario y responderemos en 24 horas.',
      infoTitle: 'Informacion de Contacto',
      infoSubtitle: 'Conversemos sobre como transformar su negocio.',
      locationSummary: 'EE. UU. • India • Australia • Reino Unido',
      avgResponsePrefix: 'Tiempo promedio de respuesta:',
      avgResponseValue: 'menos de 2 horas',
      firstName: 'Nombre *',
      lastName: 'Apellido *',
      emailAddress: 'Correo Electronico *',
      phoneNumber: 'Numero de Movil *',
      message: 'Mensaje *',
      sendMessage: 'Enviar Mensaje',
      sending: 'Enviando…',
      submitSuccess:
        'Gracias. Su mensaje se envió correctamente. Nos pondremos en contacto pronto.',
      submitError:
        'Algo salió mal. Inténtelo de nuevo o escríbanos directamente.',
      scheduleTitle: 'Agendar una reunión',
      scheduleSubtitle:
        'Elija un horario conveniente. Confirmaremos su cita y le enviaremos una invitación de calendario.',
    },
    aboutUs: {
      badge: 'Nuestra Empresa',
      title: 'De la Idea al Impacto',
      subtitle:
        'Establecido por un equipo de innovadores dedicados, Cogtix Solutions nació de un concepto fundamental: ayudar a las empresas a aprovechar las capacidades de la tecnología moderna para su evolución digital.',
      heroTitle: 'Impulsando la Innovación a través de la Tecnología',
      heroSubtitle:
        'Cogtix Solutions es un socio tecnológico de primer nivel que ayuda a empresas de todo el mundo a transformar su panorama digital mediante ingeniería de software inteligente.',
      whoWeAreTitle: 'Quiénes Somos',
      whoWeAreContent:
        'Fundada con la visión de simplificar la tecnología compleja para las empresas, Cogtix Solutions se ha convertido en un equipo multidisciplinario de expertos dedicados a crear productos digitales preparados para el futuro.',
      missionTitle: 'Nuestra Misión',
      missionContent:
        'Empoderar a las empresas de todo el mundo mediante la entrega de soluciones tecnológicas de vanguardia, escalables y seguras que impulsen el crecimiento, la eficiencia y la transformación digital.',
      visionTitle: 'Nuestra Visión',
      visionContent:
        'Convertirnos en el líder mundial en ingeniería digital, reconocido por nuestro compromiso con la excelencia, la innovación y la creación de un impacto positivo a través de la tecnología.',
      valuesTitle: 'Nuestros Valores Fundamentales',
      valuesSubtitle:
        'Los principios que guían todo lo que hacemos, desde nuestro código hasta nuestras relaciones con los clientes.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Reconocimiento',
      title: 'Excelencia Premiada',
      subtitle: 'Reconocidos globalmente por excelencia e innovacion.',
    },
    offices: {
      badge: 'Nuestras Oficinas',
      title: 'Presentes en Todo el Mundo',
      subtitle:
        'Estamos cerca de nuestros clientes en multiples zonas horarias.',
    },
    clients: {
      trustedBy: 'Con la confianza de empresas lideres',
    },
    footer: {
      company: 'Empresa',
      engineering: 'Ingenieria',
      contactUs: 'Contactanos',
      chatWithUs: 'Chatea con nosotros',
      privacyPolicy: 'Politica de Privacidad',
      designedBy: 'Disenado por',
      rightsReserved: 'Todos los derechos reservados.',
      description: 'Empresa lider en desarrollo de software con enfoque agil.',
      home: 'Inicio',
      aboutUs: 'Sobre Nosotros',
      caseStudies: 'Casos de Exito',
      blog: 'Blog',
      careers: 'Carreras',
      contactUsLink: 'Contactanos',
      aiEngineering: 'Ingenieria IA/ML',
      digitalProductEngineering: 'Ingenieria de Producto Digital',
      cloudDevOpsEngineering: 'Ingenieria Cloud y DevOps',
      dataEngineering: 'Ingenieria de Datos',
      experienceEngineering: 'Ingenieria de Experiencia Digital',
      enterpriseServices: 'Servicios Empresariales',
      status: 'Estado',
    },
    testimonials: {
      badge: 'Testimonios',
      title: 'Lo que dicen de nosotros',
      subtitle: 'Historias de clientes',
      description:
        'Inicie dinámicamente el posicionamiento en el mercado, el vínculo total con la tecnología de clics y mortero, datos convincentes para mercados de vanguardia.',
      stats: {
        implementations: '12+',
        implementationsLabel: 'Implementación Exitosa',
        minds: '21+',
        mindsLabel: 'Mentes Brillantes',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project/s timelines and requirements, and internal stakeholders were impressed with the service provider/s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'Lo que dicen nuestros clientes',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'IA y Aprendizaje Automático',
          title:
            'Lleva la inteligencia a los flujos de trabajo centrales del negocio',
          highlight: 'inteligencia',
          description:
            'Te ayudamos a pasar de los experimentos de IA a sistemas listos para producción con bases de datos sólidas, evaluación clara y una operación fiable.',
          cta: 'Inicia tu proyecto de IA',
          statLabels: [
            'Modelos de IA entregados',
            'Proyectos GenAI',
            'Disponibilidad del pipeline',
          ],
        },
        features: {
          badge: 'Capacidades principales',
          title: 'Nuestros servicios de IA/ML',
          description:
            'Desde GenAI y ciencia de datos hasta ingeniería ML y MLOps: cubrimos el ciclo de vida completo de la IA.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'IA Generativa',
              description:
                'Integración personalizada de GPT y LLM y aplicaciones de IA generativa creadas con Claude, GPT-4 y modelos open source.',
              details:
                'Diseñamos y desplegamos sistemas de IA generativa a nivel de producción, incluyendo pipelines RAG, arquitecturas multi-agente y modelos ajustados a dominios específicos para automatizar la creación de contenido, la generación de código y el procesamiento inteligente de documentos a escala.',
              outcomes: [
                'Arquitectura RAG de referencia con búsqueda vectorial',
                'LLM de dominio ajustado con harness de evaluación',
                'Guardrails de producción y filtros de contenido',
                'Dashboards de tokens, latencia y grounding',
                'Checklist de IA responsable firmado por legal',
              ],
            },
            {
              title: 'Ciencia de datos',
              description:
                'Modelos de analítica predictiva, clasificación, regresión y clustering entrenados sobre tus datos.',
              details:
                'Nuestra práctica de ciencia de datos entrega insights accionables mediante modelado estadístico avanzado, ingeniería de features y análisis exploratorio, transformando datos en dashboards, predicciones y sistemas de apoyo a la decisión que generan resultados medibles.',
              outcomes: [
                'Dataset analítico limpio con features creadas',
                'Modelo predictivo con evaluación documentada',
                'Dashboards interactivos en Power BI o Looker',
                'API de apoyo a la decisión para apps internas',
                'Transferencia de conocimiento al equipo analítico',
              ],
            },
            {
              title: 'Aprendizaje Automático',
              description:
                'Reconocimiento de imágenes, detección de objetos, OCR y procesamiento visual para aplicaciones empresariales.',
              details:
                'Construimos y desplegamos modelos ML personalizados para visión por computador, NLP, detección de anomalías y series temporales, con pipelines rigurosos de evaluación, mitigación de sesgos y reentrenamiento continuo para una precisión sostenida en producción.',
              outcomes: [
                'Datasets de entrenamiento y evaluación etiquetados',
                'Modelo ML en producción con artefactos versionados',
                'Revisión de sesgo y equidad con plan de mitigación',
                'Workflow de reentrenamiento continuo con quality gates',
                'API de inferencia endurecida para tráfico real',
              ],
            },
            {
              title: 'MLOps',
              description:
                'Prácticas MLOps automatizadas que optimizan todo el ciclo de vida ML y mantienen los modelos fiables en producción.',
              details:
                'Nuestro framework MLOps cubre seguimiento de experimentos y CI/CD para ML, monitoreo automatizado, detección de drift y gobierno, manteniendo tus modelos eficaces, conformes y rentables en producción.',
              outcomes: [
                'Tracking de experimentos en MLflow o Weights & Biases',
                'Pipeline CI/CD para entrenamiento y despliegue',
                'Monitoreo de drift, skew y features con alertas',
                'Registro de modelos con aprobaciones y linaje',
                'Runbook de rollback y respuesta a incidentes',
              ],
            },
            {
              title: 'Integración de IA',
              description:
                'Integración fluida de capacidades de IA en sistemas existentes, ERPs, CRMs y plataformas SaaS.',
              details:
                'Diseñamos soluciones de IA API-first que se integran directamente en tus flujos de negocio, incorporando inferencia en tiempo real, automatización inteligente y capacidades predictivas en sistemas ERP, CRM y operativos sin reescrituras disruptivas.',
              outcomes: [
                'Arquitectura de integración con contratos de API',
                'Plugins de IA para ERP, CRM y plataformas SaaS',
                'Endpoints de inferencia en tiempo real con SLAs',
                'Autenticación, rate limiting y auditoría',
                'Entornos sandbox y producción configurados',
              ],
            },
            {
              title: 'Despliegue de modelos',
              description:
                'Operaciones ML listas para producción, servido de modelos, monitoreo y mejora continua de sistemas de IA.',
              details:
                'Gestionamos el servido de modelos en Kubernetes, pruebas A/B, despliegues en sombra, asignación optimizada de GPU y estrategias automatizadas de rollback para sistemas de IA fiables, escalables y rentables.',
              outcomes: [
                'Servido de modelos contenedorizado en Kubernetes',
                'Patrones de despliegue A/B y shadow mode',
                'Optimización de coste y dimensionamiento de GPU',
                'Rollback automático ante regresión de calidad',
                'Plan de capacidad validado con pruebas de carga',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title: 'Casos de uso que atendemos con servicios de IA/ML',
          description:
            'Aportamos experiencia profunda en diversas industrias, entregando soluciones de IA que resuelven problemas de negocio reales y medibles.',
          items: [
            {
              title: 'Sistemas de recomendación',
              description:
                'Motores de personalización impulsados por IA para ecommerce, contenido y plataformas educativas con precios dinámicos y journeys de usuario.',
            },
            {
              title: 'Flujos de IA agéntica',
              description:
                'Sistemas basados en agentes que automatizan tareas multi-paso usando razonamiento, memoria y comportamiento orientado a objetivos.',
            },
            {
              title: 'Asesores de compra',
              description:
                'Asistentes virtuales de compra que usan IA conversacional y personalización en tiempo real para impulsar la conversión en ecommerce.',
            },
            {
              title: 'Moderación de contenido',
              description:
                'Modelos de IA escalables para moderar imágenes, texto y vídeo: detección de contenido nocivo y aplicación de políticas.',
            },
            {
              title: 'Búsqueda cognitiva empresarial',
              description:
                'Búsqueda inteligente más allá de palabras clave: comprensión semántica, análisis documental y autoetiquetado de repositorios de contenido.',
            },
            {
              title: 'Gestión de riesgo inteligente',
              description:
                'Detección de fraude, riesgo crediticio, monitoreo de amenazas y señales de incumplimiento, todo impulsado por IA.',
            },
            {
              title: 'Inteligencia operacional',
              description:
                'Mantenimiento predictivo, automatización del control de calidad, planificación de turnos y asignación de recursos a escala.',
            },
            {
              title: 'Previsión de demanda',
              description:
                'Modelos precisos de predicción para cadena de suministro, inventario y planificación financiera usando datos históricos y en tiempo real.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas que aseguran tus soluciones de IA/ML',
          description:
            'Nuestros frameworks probados, experiencia técnica y enfoque orientado a producción garantizan que tu inversión en IA genere valor duradero.',
          items: [
            {
              title: 'Ventaja temprana en GenAI',
              description:
                'Como pioneros en tecnologías de IA generativa, ayudamos a las empresas a pasar de PoCs a soluciones listas para producción con impacto real.',
            },
            {
              title: 'Acelerador GenAI empresarial',
              description:
                'Nuestro framework GenAI acelera el desarrollo con capacidades integradas para dataOps, gobierno, seguridad, integración de LLM, RAG y monitoreo.',
            },
            {
              title: 'Preparación de datos para IA a gran escala',
              description:
                'Las iniciativas exitosas de IA dependen de datos de alta calidad y bien estructurados. Aseguramos que tus datos estén listos para implementaciones de gran alcance.',
            },
            {
              title: 'Toolkit MLOps integral',
              description:
                'Nuestro toolkit MLOps optimiza todo el ciclo de vida ML: entrenamiento, etiquetado, control de calidad, asegurando altos estándares en el despliegue y la gestión.',
            },
            {
              title: 'Competencias en Azure Data & AI',
              description:
                'Con especialización en Azure Data y AI, aprovechamos los últimos avances para crear arquitecturas de datos eficientes para despliegues y analítica.',
            },
            {
              title: 'AI/ML de espectro completo',
              description:
                'Soluciones AI/ML de extremo a extremo: desde IA generativa y extracción documental hasta visión por computador, con aplicaciones precisas en cada dominio.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnológico',
          title: 'Las últimas tecnologías de IA y ML',
          description:
            'Aprovechamos las herramientas y frameworks líderes de la industria para obtener resultados óptimos.',
          categories: [
            'LLMs y Frameworks',
            'Librerías ML',
            'Plataformas Cloud',
            'Procesamiento de datos',
            'Despliegue',
            'Herramientas y utilidades',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud y DevOps',
          title: 'Ingeniería moderna de Cloud y DevOps',
          highlight: 'DevOps',
          description:
            'Construye, despliega y gestiona infraestructura cloud con confianza. Nuestros expertos en DevOps diseñan soluciones escalables con automatización, seguridad y excelencia operativa.',
          cta: 'Inicia tu travesía cloud',
          statLabels: [
            'Migraciones cloud',
            'SLA de disponibilidad',
            'Ahorro promedio',
          ],
        },
        features: {
          badge: 'Capacidades principales',
          title: 'Servicios integrales de Cloud y DevOps',
          description:
            'Desde la arquitectura hasta las operaciones: cubrimos cada capa de tu infraestructura cloud.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'Diseño de arquitectura cloud',
              description:
                'Diseñamos infraestructura cloud escalable, fiable y segura en AWS, Azure o Google Cloud adaptada a tu negocio.',
              details:
                'Realizamos revisiones bien arquitectadas, diseñamos topologías multirregión e implementamos estrategias de autoescalado que garantizan 99,99% de disponibilidad y optimizan tu gasto cloud mensual hasta en un 40%.',
              outcomes: [
                'Revisión Well-Architected con backlog de mejoras',
                'Diagrama de topología multirregión de referencia',
                'Políticas de autoescalado por capa de carga',
                'Baseline de costes con recomendaciones de ahorro',
                'Starter IaC reutilizable para nuevos entornos',
              ],
            },
            {
              title: 'Orquestación con Kubernetes',
              description:
                'Despliega, gestiona y escala aplicaciones contenedorizadas con Kubernetes a escala empresarial con observabilidad completa.',
              details:
                'Desde EKS/AKS/GKE hasta la gestión de Helm charts, service mesh y autoescalado de pods, construimos plataformas de orquestación de contenedores de nivel productivo con monitoreo integral.',
              outcomes: [
                'Cluster EKS, AKS o GKE de producción entregado',
                'Repositorio de Helm charts con pipelines de release',
                'Service mesh configurado con mTLS y observabilidad',
                'Políticas de autoescalado de cluster, nodos y pods',
                'Runbook de actualización y recuperación ante desastres',
              ],
            },
            {
              title: 'Implementación de pipelines CI/CD',
              description:
                'Build, test y deploy automatizados para entregas rápidas y fiables sin tiempo de inactividad.',
              details:
                'Nuestras implementaciones CI/CD incluyen flujos GitOps, quality gates automatizados, estrategias blue-green y canary y rollback automatizado, reduciendo fallos de despliegue en un 90% y ciclos de release de semanas a horas.',
              outcomes: [
                'Entrega GitOps con Argo CD o Flux',
                'Quality gates automatizados de tests y seguridad',
                'Plantillas blue-green y canary listas para usar',
                'Rollback automático de un clic por servicio',
                'Dashboard de releases para ingeniería y SRE',
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automatiza el aprovisionamiento de infraestructura usando Terraform, CloudFormation y Ansible para entornos repetibles.',
              details:
                'Construimos módulos IaC modulares y reutilizables con detección de drift, aplicación de políticas y testing automatizado para entornos reproducibles, auditables y conformes.',
              outcomes: [
                'Librería modular de Terraform o CloudFormation',
                'Detección de drift con reportes diarios',
                'Policy-as-code aplicado a cada cambio',
                'Tests unitarios y de integración para IaC',
                'Plantillas de pipeline para nuevos repositorios',
              ],
            },
            {
              title: 'Monitoreo y observabilidad',
              description:
                'Monitoreo, logging y alertas completos con Datadog, Prometheus y ELK para visibilidad operativa total.',
              details:
                'Implementamos los tres pilares de la observabilidad (métricas, logs, traces) con definición de SLI/SLO, trazas distribuidas, dashboards de detección de anomalías y runbooks automatizados.',
              outcomes: [
                'SLIs, SLOs y error budgets por servicio',
                'Trazas distribuidas en flujos críticos',
                'Logs centralizados con búsqueda estructurada',
                'Alertas de anomalías conectadas a on-call',
                'Runbooks de incidentes probados en game days',
              ],
            },
            {
              title: 'Seguridad y cumplimiento',
              description:
                'Implementa mejores prácticas de seguridad, frameworks de cumplimiento y estrategias de recuperación ante desastres para cargas reguladas.',
              details:
                'Nuestra práctica de seguridad cubre arquitecturas zero-trust, gestión de secretos con Vault, comprobaciones automatizadas SOC 2/HIPAA/PCI-DSS y planificación DR con objetivos RTO/RPO definidos.',
              outcomes: [
                'Arquitectura zero-trust de referencia',
                'Gestión de secretos vía Vault o KMS',
                'Controles automatizados SOC 2, HIPAA y PCI-DSS',
                'Baseline de IAM y RBAC con revisiones',
                'Plan DR con RTO y RPO documentados',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title: 'Casos de uso que atendemos con ingeniería Cloud y DevOps',
          description:
            'Entregamos soluciones cloud y DevOps de migración, modernización, seguridad y optimización de costos para empresas en cualquier etapa.',
          items: [
            {
              title: 'Migración cloud y lift-and-shift',
              description:
                'Mueve cargas on-premises a la nube con mínima disrupción usando frameworks y herramientas de migración probados.',
            },
            {
              title: 'Modernización de aplicaciones',
              description:
                'Contenedoriza y rearquitecta aplicaciones monolíticas en microservicios para escalabilidad y mantenibilidad cloud-native.',
            },
            {
              title: 'Gestión multicloud',
              description:
                'Diseña y gobierna cargas a través de AWS, Azure y GCP con políticas unificadas, control de costos y seguridad.',
            },
            {
              title: 'Ingeniería de recuperación ante desastres',
              description:
                'Diseña y automatiza estrategias DR con objetivos RTO/RPO, pruebas de failover y backups georredundantes.',
            },
            {
              title: 'Ingeniería de rendimiento',
              description:
                'Optimiza el uso de recursos cloud, reduce la latencia y ajusta la infraestructura para cargas de alto rendimiento y eficiencia en costos.',
            },
            {
              title: 'Automatización de cumplimiento',
              description:
                'Automatiza checks de cumplimiento para HIPAA, PCI-DSS, SOC 2 y GDPR con aplicación continua de políticas y trazas de auditoría.',
            },
            {
              title: 'Integración DevSecOps',
              description:
                'Integra escaneos de seguridad, SAST/DAST y gestión de vulnerabilidades directamente en los pipelines CI/CD.',
            },
            {
              title: 'FinOps y optimización de costos',
              description:
                'Analiza continuamente el gasto cloud, ajusta el tamaño de los recursos e implementa gobierno de tagging para reducir la factura entre 30 y 60%.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas para asegurar tu infraestructura cloud',
          description:
            'Nuestras metodologías cloud-native, prácticas SRE y cultura de seguridad-primero garantizan una infraestructura escalable, segura y asequible.',
          items: [
            {
              title: 'Enfoque cloud-native desde el primer día',
              description:
                'Diseñamos cada solución para la nube desde el inicio, aprovechando servicios gestionados, serverless y contenedores para minimizar la carga operativa.',
            },
            {
              title: 'Seguridad por diseño',
              description:
                'La seguridad se integra en cada capa: políticas IAM, gestión de secretos, segmentación de red y monitoreo automatizado de cumplimiento.',
            },
            {
              title: 'Entrega impulsada por GitOps',
              description:
                'Cada cambio de infraestructura y aplicación fluye por pipelines versionados y revisados, permitiendo auditabilidad, rollbacks y velocidad.',
            },
            {
              title: 'SRE e ingeniería de fiabilidad',
              description:
                'Definimos SLIs, SLOs y presupuestos de error y construimos automatización que mantiene los sistemas fiables, observables y auto-reparables.',
            },
            {
              title: 'Escalabilidad multirregión',
              description:
                'Diseñamos sistemas globalmente distribuidos con topologías activo-activo o activo-pasivo para máxima disponibilidad y cumplimiento de residencia de datos.',
            },
            {
              title: 'Ingeniería de costos',
              description:
                'Prácticas FinOps sistemáticas: instancias reservadas, spot fleets, autoescalado y gobierno de tagging reducen los costos cloud un 40% en promedio.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnológico',
          title: 'Herramientas líderes de Cloud y DevOps',
          description:
            'Aprovechamos tecnologías probadas para despliegues fiables y escalables.',
          categories: [
            'Plataformas Cloud',
            'Contenedores y orquestación',
            'Infrastructure as Code',
            'Herramientas CI/CD',
            'Monitoreo y logging',
            'Servicios Cloud',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: 'Centro de Excelencia Microsoft',
          title: 'Innovación empresarial con tecnologías Microsoft',
          highlight: 'Innovación',
          description:
            'Aprovechamos el ecosistema Microsoft: .NET, Azure y Power Platform, para construir soluciones empresariales escalables, seguras y preparadas para el futuro.',
          cta: 'Habla con un experto en Microsoft',
          statLabels: [
            'Proyectos .NET',
            'Años de experiencia',
            'Certificaciones Azure',
          ],
        },
        features: {
          badge: 'Nuestra experiencia',
          title: 'Servicios integrales de tecnologías Microsoft',
          description:
            'Soluciones a medida en todo el stack Microsoft para impulsar la eficiencia de tu negocio.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'Desarrollo Full-Stack .NET',
              description:
                'Construye aplicaciones web y de escritorio robustas y de alto rendimiento usando .NET, ASP.NET y Entity Framework.',
              details:
                'Diseñamos soluciones .NET con patrones de microservicios, capacidades en tiempo real con SignalR, SPAs en Blazor WebAssembly y diseño API-first, entregando aplicaciones empresariales con tiempos de respuesta inferiores a 100 ms.',
              outcomes: [
                'Arquitectura de microservicios .NET de referencia',
                'Diseño API-first con contratos OpenAPI',
                'Canales en tiempo real usando SignalR',
                'Pipelines CI/CD en GitHub Actions o Azure DevOps',
                'Observabilidad con Application Insights por servicio',
              ],
            },
            {
              title: 'Soluciones Azure Cloud',
              description:
                'Diseña y despliega aplicaciones cloud-native escalables aprovechando todo el ecosistema Microsoft Azure.',
              details:
                'Nuestra práctica Azure cubre App Services, Functions serverless, orquestación con AKS, Cosmos DB para datos globalmente distribuidos y Azure SQL, todo bajo el Azure Well-Architected Framework.',
              outcomes: [
                'Landing zone de Azure con políticas y guardrails',
                'Workload de referencia desplegado en dos regiones',
                'Capa de datos Cosmos DB o Azure SQL con PITR',
                'Repositorio de infraestructura en Bicep entregado',
                'Baseline de coste con revisión Well-Architected',
              ],
            },
            {
              title: 'Power Platform y aplicaciones de negocio',
              description:
                'Empodera a tu organización con soluciones low-code, flujos automatizados e inteligencia de negocio basada en datos.',
              details:
                'Diseñamos y desplegamos Power Apps (Canvas y Model-driven), flujos de Power Automate, dashboards de Power BI con seguridad por filas e integraciones con Dataverse, manteniendo gobierno y seguridad empresariales.',
              outcomes: [
                'Centro de Excelencia (CoE) de Power Platform',
                'De dos a cuatro Power Apps en producción',
                'Flujos de Power Automate sustituyendo procesos manuales',
                'Dashboards Power BI con seguridad por filas',
                'Modelo Dataverse gobernado por tu equipo de IT',
              ],
            },
            {
              title: 'Modernización y migración',
              description:
                'Transforma aplicaciones legacy de .NET en soluciones modernas optimizadas para la nube.',
              details:
                'Nuestra metodología cubre refactorización de .NET, migración on-prem a Azure con Azure Migrate, descomposición de monolitos en microservicios y optimización de rendimiento.',
              outcomes: [
                'Evaluación del portafolio y plan de las 6 R',
                'Roadmap strangler-fig con hitos trimestrales',
                'Servicios nuevos en .NET en AKS o App Service',
                'Baseline de rendimiento y reporte post-migración',
                'Transferencia de conocimiento al equipo de ingeniería',
              ],
            },
            {
              title: 'Microsoft 365 y SharePoint',
              description:
                'Soluciones de colaboración a medida y gestión documental empresarial sobre Microsoft 365 y SharePoint Online.',
              details:
                'Construimos soluciones SPFx, integraciones de Teams, flujos de automatización de Microsoft 365 e intranets modernas que mejoran la colaboración y la experiencia del trabajador digital.',
              outcomes: [
                'Intranet SharePoint Online con Viva Connections',
                'Apps Teams Toolkit integradas en flujos diarios',
                'Automatizaciones de Microsoft Graph',
                'Revisión de seguridad con plan de Secure Score',
                'Políticas de gobierno y ciclo de vida del contenido',
              ],
            },
            {
              title: 'Data y AI en Azure',
              description:
                'Aprovecha Azure Machine Learning y Cognitive Services para crear aplicaciones inteligentes con insights avanzados.',
              details:
                'Integramos Azure OpenAI Service, Cognitive Services (visión, voz, lenguaje), Synapse Analytics para data warehousing y Databricks para flujos ML avanzados.',
              outcomes: [
                'Arquitectura de referencia con Azure OpenAI y AI Search',
                'Cognitive Services integrados en apps existentes',
                'Lakehouse Synapse o Fabric con modelos semánticos',
                'Workflows Databricks para pipelines ML avanzados',
                'Dashboards Application Insights para cargas IA',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title: 'Casos de uso que atendemos con servicios Microsoft',
          description:
            'Desde migraciones a Azure y modernización .NET hasta automatización con Power Platform: resolvemos retos reales del stack Microsoft para empresas de todos los tamaños.',
          items: [
            {
              title: 'Migración empresarial a Azure',
              description:
                'Mueve cargas complejas on-premises a Azure con mínima disrupción usando Azure Migrate, ASR y patrones de migración probados.',
            },
            {
              title: 'Modernización de legacy .NET',
              description:
                'Moderniza aplicaciones .NET legacy y contenedorízalas en Azure AKS para escalabilidad cloud-native.',
            },
            {
              title: 'Soluciones low-code Power Platform',
              description:
                'Construye aplicaciones departamentales, flujos de aprobación automatizados e informes de Power BI sin el costo del desarrollo a medida.',
            },
            {
              title: 'Plataformas de datos y analítica Azure',
              description:
                'Diseña plataformas Azure end-to-end con Synapse, Data Factory y Power BI para analítica y reporting unificados.',
            },
            {
              title: 'Portales intranet Microsoft 365',
              description:
                'Construye intranets modernas basadas en SharePoint e integraciones de Teams que mejoran la participación y el conocimiento de los empleados.',
            },
            {
              title: 'Aplicaciones cognitivas Azure AI',
              description:
                'Incorpora Azure OpenAI, Form Recognizer, Speech y Computer Vision en aplicaciones empresariales para automatización inteligente.',
            },
            {
              title: 'Seguridad y cumplimiento Azure',
              description:
                'Implementa Azure Security Center, Defender, Key Vault y Sentinel para entornos cloud robustos en sectores regulados.',
            },
            {
              title: 'Soluciones Dynamics 365 a medida',
              description:
                'Extiende y personaliza Dynamics 365 Sales, Customer Service y Finance con plugins, controles PCF e integraciones.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas que aseguran tu inversión en Microsoft',
          description:
            'Nuestros ingenieros certificados, frameworks de adopción estructurados y acceso al ecosistema de partners garantizan el máximo ROI en cada proyecto Microsoft.',
          items: [
            {
              title: 'Equipo de ingeniería certificado Microsoft',
              description:
                'Nuestros ingenieros cuentan con más de 50 certificaciones activas en Azure, .NET, Power Platform y Dynamics 365, asegurando implementaciones actualizadas y conformes.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                'Estructuramos cada proyecto Azure usando el CAF de Microsoft, asegurando que la adopción cloud siga las mejores prácticas de seguridad, gobierno y costos.',
            },
            {
              title: 'Revisiones Azure Well-Architected',
              description:
                'Realizamos revisiones estructuradas Azure Well-Architected a través de fiabilidad, seguridad, optimización de costos, rendimiento y excelencia operativa.',
            },
            {
              title: 'Ecosistema de partners Microsoft',
              description:
                'Como Microsoft Partner reconocido, tenemos acceso a previews técnicos, canales de soporte dedicados y capacidades de co-sell para negocios empresariales.',
            },
            {
              title: 'Power Platform Center of Excellence',
              description:
                'Implantamos toolkits CoE de Power Platform que gobiernan el desarrollo ciudadano, aplican políticas de seguridad y miden la adopción.',
            },
            {
              title: 'Especialización en Azure Data',
              description:
                'Experiencia profunda en Azure Synapse Analytics, Data Factory, Databricks y Cosmos DB para plataformas de datos a escala empresarial.',
            },
          ],
        },
        technologies: {
          badge: 'Stack Microsoft',
          title: 'Ecosistema y herramientas Microsoft',
          description:
            'Nuestra experiencia profunda en tecnologías Microsoft garantiza que elegimos las herramientas adecuadas para tus necesidades específicas.',
          categories: [
            '.NET',
            'Servicios Azure',
            'Datos y almacenamiento',
            'Power Platform',
            'DevOps y herramientas',
            'Colaboración',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Servicios Empresariales',
          title: 'Soluciones de software de nivel empresarial',
          highlight: 'nivel empresarial',
          description:
            'Potencia tu empresa con soluciones a medida y escalables capaces de manejar requisitos complejos. Desde implementaciones ERP hasta modernización legacy.',
          cta: 'Hablemos de tus necesidades empresariales',
          statLabels: [
            'Clientes empresariales',
            'Transacciones / día',
            'Listo para cumplimiento',
          ],
        },
        features: {
          badge: 'Capacidades principales',
          title: 'Servicios empresariales completos',
          description:
            'Servicios integrales para la transformación empresarial y la modernización digital.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'Aplicaciones empresariales a medida',
              description:
                'Aplicaciones críticas y escalables construidas para manejar requisitos complejos y altos volúmenes transaccionales.',
              details:
                'Diseñamos sistemas empresariales usando domain-driven design, patrones event-driven y escalabilidad horizontal, manejando millones de transacciones diarias con aislamiento multi-tenant, auditoría y SLA del 99,99%.',
              outcomes: [
                'Modelo de dominio con bounded contexts documentados',
                'Arquitectura event-driven de referencia y contratos',
                'Patrón de aislamiento multi-tenant y SDK',
                'Auditoría y reporting de cumplimiento incorporados',
                'Dashboard de SLA vinculado a error budgets',
              ],
            },
            {
              title: 'Soluciones ERP y CRM',
              description:
                'Implementaciones SAP, Oracle, Salesforce y Dynamics con personalización profunda e integración fluida.',
              details:
                'Nuestra práctica ERP y CRM cubre implementaciones de ciclo completo: mapeo de requisitos, migración de datos, desarrollo de módulos a medida, integraciones de terceros, formación de usuarios y soporte hypercare.',
              outcomes: [
                'Requisitos funcionales y técnicos firmados',
                'Plan de migración de datos con limpieza y validación',
                'Módulos personalizados e integraciones entregadas',
                'Plan de formación de usuarios y adopción',
                'Ventana de hypercare y soporte post-go-live',
              ],
            },
            {
              title: 'Automatización de procesos de negocio',
              description:
                'Optimiza operaciones con RPA, automatización de flujos y optimización digital que reduce el esfuerzo manual.',
              details:
                'Implementamos estrategias de hiperautomatización combinando bots UiPath o Power Automate, flujos de aprobación inteligentes, process mining y digital twins, generando ganancias de productividad del 40 al 70%.',
              outcomes: [
                'Inventario de procesos con candidatos priorizados',
                'Top tres bots RPA en producción con monitoreo',
                'Flujos de aprobación sustituyendo papel y correo',
                'Dashboards de process mining para mejora continua',
                'Baseline de productividad y reporte de mejora',
              ],
            },
            {
              title: 'Modernización legacy',
              description:
                'Transforma sistemas legacy en arquitecturas modernas cloud-native preservando la funcionalidad crítica.',
              details:
                'Nuestro playbook de modernización usa el patrón strangler fig, API wrapping y migraciones por fases, asegurando cero disrupción mientras reemplazamos sistemas COBOL, Delphi o monolitos Java.',
              outcomes: [
                'Evaluación de portafolio con scoring de riesgo',
                'Roadmap strangler-fig con plan de fases',
                'API gateway frente al sistema legacy',
                'Servicios nuevos en runtimes cloud-native',
                'Checklist de retiro de componentes legacy',
              ],
            },
            {
              title: 'Integración empresarial',
              description:
                'Integra sistemas y fuentes de datos heterogéneas con arquitectura API-first, microservicios y buses de eventos.',
              details:
                'Diseñamos hubs de integración empresarial con MuleSoft, Apache Kafka y plataformas iPaaS cloud-native, permitiendo sincronización en tiempo real entre ERP, CRM, HRMS, finanzas y aplicaciones SaaS.',
              outcomes: [
                'Arquitectura de integración con contratos de API y eventos',
                'Plataforma MuleSoft, Kafka o iPaaS desplegada',
                'Conectores reutilizables para los sistemas top',
                'Sincronización en tiempo real reemplazando batch',
                'Observabilidad end-to-end de flujos de integración',
              ],
            },
            {
              title: 'Seguridad y cumplimiento',
              description:
                'Seguridad de nivel empresarial, frameworks de cumplimiento y gobierno para industrias reguladas y sistemas críticos.',
              details:
                'Nuestra práctica implementa SOC 2, ISO 27001 y controles específicos del sector con arquitectura zero-trust, gestión de acceso por roles, pen testing automatizado y auditoría integral.',
              outcomes: [
                'Arquitectura de red zero-trust de referencia',
                'Modelo RBAC e identidad documentado',
                'Mapeo de controles SOC 2 e ISO 27001',
                'Pruebas de penetración automatizadas en CI/CD',
                'Auditoría e integración SIEM habilitadas',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title:
            'Casos de uso que atendemos con servicios de software empresarial',
          description:
            'Colaboramos con equipos empresariales en BFSI, sanidad, manufactura y administración pública para resolver retos críticos de software.',
          items: [
            {
              title: 'Despliegues empresariales globales',
              description:
                'Diseña y despliega aplicaciones multi-región y multi-idioma que sirven a miles de usuarios internos y externos.',
            },
            {
              title: 'Reemplazo de sistemas legacy',
              description:
                'Retira de forma segura monolitos antiguos COBOL, Delphi o Java y reemplázalos con plataformas modernas y mantenibles.',
            },
            {
              title: 'Automatización de flujos y aprobaciones',
              description:
                'Automatiza aprobaciones multi-paso, enrutamiento documental y flujos auditables entre departamentos y filiales.',
            },
            {
              title: 'Analítica y reporting empresarial',
              description:
                'Construye analítica embebida, dashboards en tiempo real y BI de autoservicio para operaciones, finanzas y dirección.',
            },
            {
              title: 'Descomposición en microservicios',
              description:
                'Descompón aplicaciones monolíticas en microservicios desplegables independientemente y alineados al negocio.',
            },
            {
              title: 'Hubs de integración de sistemas',
              description:
                'Construye hubs de integración que conectan ERP, CRM, HRMS, finanzas y SaaS de terceros con sincronización en tiempo real.',
            },
            {
              title: 'Cumplimiento en industrias reguladas',
              description:
                'Soluciones de cumplimiento a medida para BFSI, sanidad y administración que cumplen estrictos estándares de auditoría, datos y seguridad.',
            },
            {
              title: 'Aplicaciones empresariales con IA',
              description:
                'Incorpora IA en aplicaciones empresariales: búsqueda inteligente, procesamiento documental, alertas predictivas y módulos de decisión.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas para asegurar tus sistemas empresariales',
          description:
            'Nuestro enfoque domain-driven, playbook de modernización probado y cultura security-first entregan soluciones que perduran décadas.',
          items: [
            {
              title: 'Experiencia en Domain-Driven Design',
              description:
                'Modelamos dominios empresariales complejos con principios DDD: bounded contexts, agregados y lenguaje ubicuo aseguran que el software refleje la realidad del negocio.',
            },
            {
              title: 'Seguridad y gobierno empresarial',
              description:
                'La seguridad no es opcional: implementamos arquitecturas zero-trust, RBAC, gestión de secretos y cumplimiento automatizado desde el día uno.',
            },
            {
              title: 'Metodología de modernización probada',
              description:
                'Nuestro playbook minimiza el riesgo de negocio usando strangler fig, testing de paridad de features y migraciones por fases.',
            },
            {
              title: 'Experiencia profunda en integración',
              description:
                'Experiencia certificada en MuleSoft, Apache Kafka y las principales plataformas iPaaS para conectar paisajes empresariales complejos.',
            },
            {
              title: 'Hiperautomatización y RPA',
              description:
                'Combinamos RPA, IA y automatización de flujos para eliminar procesos manuales, generando ganancias de productividad medibles en toda la empresa.',
            },
            {
              title: 'Entrega centrada en resultados',
              description:
                'Cada proyecto se vincula a resultados de negocio: definimos KPIs medibles desde el inicio y reportamos contra ellos a lo largo de la entrega.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnológico',
          title: 'Plataforma tecnológica empresarial',
          description:
            'Tecnologías empresariales probadas para sistemas críticos.',
          categories: [
            'Plataformas empresariales',
            'Procesos de negocio',
            'Backend y APIs',
            'Bases de datos',
            'Integración',
            'Herramientas empresariales',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Ingeniería de Datos',
          title: 'Construye soluciones de datos a escala empresarial',
          highlight: 'escala empresarial',
          description:
            'Libera el valor de tus datos con pipelines, data warehouses y plataformas de analítica escalables. Diseñamos e implementamos soluciones que gestionan requisitos complejos y volúmenes masivos.',
          cta: 'Inicia tu proyecto de datos',
          statLabels: [
            'Datos procesados',
            'Latencia de stream',
            'SLO de pipeline',
          ],
        },
        features: {
          badge: 'Capacidades principales',
          title: 'Servicios completos de ingeniería de datos',
          description:
            'Desde la arquitectura hasta el despliegue y mantenimiento de soluciones de datos empresariales.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'Arquitectura de pipelines de datos',
              description:
                'Pipelines ETL y ELT escalables que manejan volúmenes masivos con alta fiabilidad y cero pérdida de datos.',
              details:
                'Diseñamos pipelines idempotentes y orientados a SLA con soporte para evolución de esquema, dead-letter queues y reintentos automatizados, procesando miles de millones de registros diarios con observabilidad completa.',
              outcomes: [
                'Framework de pipeline de referencia con retry y DLQ',
                'Schema registry con versionado y contratos',
                'Dashboards de SLA y monitoreo de freshness',
                'Tooling de backfill y replay de históricos',
                'Pipeline CI/CD para transformaciones',
              ],
            },
            {
              title: 'Soluciones de data warehouse',
              description:
                'Data warehouses modernos construidos con tecnologías cloud-native para analítica, reporting y BI.',
              details:
                'Desde modelado dimensional con esquemas star y snowflake hasta optimización columnar, vistas materializadas incrementales y conectividad BI, construimos warehouses que sirven analítica rápida a escala petabyte.',
              outcomes: [
                'Modelo dimensional con grano documentado',
                'Layout de particiones y clusters optimizado',
                'Vistas materializadas incrementales para top queries',
                'Capa semántica certificada en Looker o Power BI',
                'Modelo de coste y estrategia de slots o capacidad',
              ],
            },
            {
              title: 'Procesamiento de datos en tiempo real',
              description:
                'Procesamiento de streams y analítica en tiempo real sobre Apache Kafka, Flink y Spark Streaming para insights subsegundo.',
              details:
                'Diseñamos arquitecturas event-driven con semántica exactly-once, change data capture (CDC) y latencia inferior a 5 ms, habilitando dashboards en vivo, detección de fraude y alertas operativas.',
              outcomes: [
                'Tópicos Kafka con contratos de schema registry',
                'Jobs Flink o Spark Streaming en producción',
                'Conectores CDC desde bases operativas',
                'Patrones exactly-once documentados',
                'Dashboards en vivo con freshness subsegundo',
              ],
            },
            {
              title: 'Gestión de data lakes',
              description:
                'Data lakes empresariales con gobierno, calidad y gestión de metadatos sobre formatos de tabla abiertos.',
              details:
                'Implementamos lakehouses basados en Delta Lake, Apache Iceberg y Hudi con catalogación automatizada, control de acceso granular y políticas de almacenamiento por niveles para optimizar el TCO.',
              outcomes: [
                'Lakehouse abierto en Delta, Iceberg o Hudi',
                'Catálogo de datos automatizado con metadatos ricos',
                'Políticas de acceso granular aplicadas en consultas',
                'Reglas de ciclo de vida y tiering de almacenamiento',
                'Compactación y gestión de small files automatizada',
              ],
            },
            {
              title: 'Integración de datos',
              description:
                'Conecta y armoniza datos de múltiples fuentes con aseguramiento de calidad robusto y trazabilidad de lineage.',
              details:
                'Construimos conectores API, pipelines CDC y flujos reverse ETL con scoring automatizado de calidad y trazabilidad completa, asegurando datos confiables en toda la organización.',
              outcomes: [
                'Librería reutilizable de conectores API y CDC',
                'Flujos reverse ETL hacia sistemas operativos',
                'Data quality scoring en cada dataset',
                'Lineage end-to-end visible para el negocio',
                'Runbooks de respuesta a incidentes de datos',
              ],
            },
            {
              title: 'Seguridad y gobierno de datos',
              description:
                'Frameworks de gobierno con cumplimiento, seguridad, privacidad y aplicación automática de políticas.',
              details:
                'Nuestros frameworks cubren cumplimiento GDPR, HIPAA y CCPA, detección y enmascaramiento automático de PII, control de acceso por roles, encriptación en reposo y en tránsito y logging exhaustivo.',
              outcomes: [
                'Reglas de detección y enmascaramiento de PII',
                'Políticas RBAC y ABAC aplicadas',
                'Encriptación en reposo y en tránsito verificada',
                'Logs de auditoría enviados al SIEM',
                'Mapeo regulatorio para GDPR, HIPAA y CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title:
            'Casos de uso que atendemos con servicios de ingeniería de datos',
          description:
            'Servimos a organizaciones intensivas en datos en finanzas, retail, sanidad y SaaS, entregando infraestructura de datos fiable, gobernada y escalable.',
          items: [
            {
              title: 'Plataformas Customer 360',
              description:
                'Unifica datos de cliente de CRM, web, móvil y soporte en una vista única en tiempo real que impulsa la personalización.',
            },
            {
              title: 'Dashboards de analítica en tiempo real',
              description:
                'Stream de datos operativos hacia dashboards en vivo para reporting ejecutivo, ventas y customer success.',
            },
            {
              title: 'Integración de datos multi-fuente',
              description:
                'Armoniza datos de ERP, CRM, marketing e IoT en una capa de datos limpia y gobernada lista para analítica.',
            },
            {
              title: 'Pipelines de datos financieros',
              description:
                'Construye pipelines auditables y conformes para reporting financiero, envíos regulatorios y datos de modelos de riesgo.',
            },
            {
              title: 'Modernización de plataformas de datos',
              description:
                'Migra Hadoop legacy o warehouses on-premises a plataformas cloud-native como Snowflake, BigQuery o Synapse.',
            },
            {
              title: 'Ingesta y procesamiento IoT',
              description:
                'Ingesta y procesa millones de eventos IoT por segundo desde dispositivos, sensores y edge nodes para inteligencia operativa.',
            },
            {
              title: 'Gestión de datos de cumplimiento',
              description:
                'Automatiza clasificación de datos, seguimiento de consentimiento y políticas de retención para cumplir GDPR, HIPAA y CCPA.',
            },
            {
              title: 'Feature Stores para ML',
              description:
                'Construye feature stores centralizados que sirven features ML consistentes y precalculadas en entrenamiento e inferencia.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas para asegurar tu plataforma de datos',
          description:
            'Nuestra cultura DataOps-first, experiencia cloud profunda y compromiso con la calidad convierten tu plataforma de datos en un activo competitivo genuino.',
          items: [
            {
              title: 'Arquitectura de datos moderna',
              description:
                'Diseñamos arquitecturas usando patrones lakehouse que combinan la flexibilidad de los data lakes con el rendimiento de los warehouses.',
            },
            {
              title: 'DataOps y automatización',
              description:
                'Nuestras prácticas DataOps traen CI/CD, testing y monitoreo a los pipelines, reduciendo el tiempo hasta el insight y asegurando calidad.',
            },
            {
              title: 'Experiencia en streaming en tiempo real',
              description:
                'Experiencia hands-on profunda en Kafka, Flink y Spark Streaming para arquitecturas event-driven de baja latencia y tolerantes a fallos.',
            },
            {
              title: 'Gobierno y calidad de datos',
              description:
                'Incorporamos checks automatizados de calidad, registros de esquema y trazabilidad para que tus datos sean siempre confiables y auditables.',
            },
            {
              title: 'Especialistas en data warehouses cloud',
              description:
                'Experiencia certificada en Snowflake, BigQuery, Redshift y Azure Synapse: desde arquitectura hasta optimización de consultas y control de costos.',
            },
            {
              title: 'Cumplimiento regulatorio integrado',
              description:
                'Todos nuestros pipelines se diseñan con cumplimiento desde el día uno: enmascaramiento, encriptación en reposo/tránsito y auditoría.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnológico',
          title: 'Stack moderno de ingeniería de datos',
          description:
            'Usamos las mejores herramientas y plataformas para soluciones fiables y escalables.',
          categories: [
            'Data Warehouses Cloud',
            'Procesamiento de streams',
            'Herramientas ETL/ELT',
            'Data Lakes',
            'Almacenamiento y procesamiento',
            'Monitoreo y herramientas',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Ingeniería Digital y de Experiencia',
          title: 'Crea experiencias digitales conectadas que convierten',
          highlight: 'experiencias',
          description:
            'Diseñamos e ingeniamos experiencias digitales end-to-end con foco profundo en usabilidad, accesibilidad y resultados de negocio en web y mobile.',
          cta: 'Inicia tu proyecto de diseño',
          statLabels: [
            'Conversión promedio',
            'Accesibilidad',
            'Sistemas de diseño',
          ],
        },
        features: {
          badge: 'Capacidades principales',
          title: 'Servicios completos de ingeniería digital y de experiencia',
          description:
            'Desde investigación de usuario hasta sistemas de diseño e implementación en producción.',
          outcomesTitle: 'Lo que entregamos',
          items: [
            {
              title: 'Diseño de experiencia de usuario',
              description:
                'Diseño UX basado en investigación que crea experiencias intuitivas, accesibles y memorables en todos los puntos de contacto.',
              details:
                'Realizamos journey mapping, auditorías competitivas y sesiones de usabilidad para validar cada interacción. Nuestros diseños cumplen WCAG y reducen el tiempo de finalización de tareas entre un 30 y un 50%.',
              outcomes: [
                'Mapas de journey de los flujos clave',
                'Reportes de usabilidad con prioridades de mejora',
                'Patrones de interacción conformes con WCAG',
                'Arquitectura de información y sitemap',
                'Prototipos de alta fidelidad listos para ingeniería',
              ],
            },
            {
              title: 'Diseño de interfaz de usuario',
              description:
                'Diseño UI moderno y bello alineado con tu identidad de marca, sistema de diseño y expectativas de usuario.',
              details:
                'Nuestra práctica UI entrega interfaces alineadas a marca con micro-interacciones, temas adaptativos claro y oscuro, layouts responsivos fluidos y motion design, respaldado por un sistema de diseño basado en tokens.',
              outcomes: [
                'Kit de UI alineado a marca con estados',
                'Tokens de tema claro y oscuro definidos',
                'Guías de micro-interacciones y motion',
                'Sistema responsivo con grid y breakpoints',
                'Librería Figma con docs de uso entregada',
              ],
            },
            {
              title: 'Diseño web',
              description:
                'Diseño web responsivo y optimizado para rendimiento que convierte usuarios en clientes con jerarquía visual sólida.',
              details:
                'Diseñamos experiencias web orientadas a conversión optimizadas para Core Web Vitals como LCP, CLS y FID, combinando jerarquía persuasiva, ubicación estratégica de CTAs y animaciones eficientes.',
              outcomes: [
                'Landing pages orientadas a conversión',
                'Objetivos de Core Web Vitals acordados',
                'Specs de animación con presupuesto de rendimiento',
                'Variantes A/B para los funnels top',
                'Paquete de handoff con assets para ingeniería',
              ],
            },
            {
              title: 'Diseño de aplicaciones móviles',
              description:
                'Experiencias móviles intuitivas para iOS y Android que los usuarios aman, construidas según los estándares HIG.',
              details:
                'Diseñamos experiencias mobile con sensación nativa que cumplen Apple HIG y Material Design 3, con interacciones por gestos, navegación específica de plataforma y paridad cross-platform.',
              outcomes: [
                'Especificaciones nativas iOS y Android',
                'Navegación y patrones por plataforma',
                'Guías de gestos e interacciones hápticas',
                'Diseño de onboarding y first-run',
                'Assets creativos para App Store y Play Store',
              ],
            },
            {
              title: 'Investigación de usuario',
              description:
                'Investigación, testing y analítica integrales para validar decisiones de diseño con datos reales.',
              details:
                'Nuestra práctica incluye estudios etnográficos, usabilidad moderada, experimentación A/B, análisis de heatmaps, card sorting y analítica cuantitativa, asegurando que cada decisión se base en evidencia.',
              outcomes: [
                'Plan de investigación con criterios de éxito',
                'Reportes moderados y no moderados',
                'Documentación de personas y JTBD',
                'Revisión de analítica cuantitativa con hallazgos',
                'Backlog priorizado de mejoras',
              ],
            },
            {
              title: 'Sistemas de diseño',
              description:
                'Sistemas de diseño y librerías de componentes escalables que aceleran a los equipos de producto.',
              details:
                'Diseñamos sistemas token-driven en Figma con componentes auto-layout, estructuras de variantes y documentación, junto a implementaciones Storybook y workflows versionados que sirven a múltiples equipos.',
              outcomes: [
                'Tokens de diseño de color, espaciado y tipografía',
                'Librería de componentes Figma con variantes',
                'Storybook implementado en tu stack tecnológico',
                'Proceso de versionado y release documentado',
                'Playbook de adopción y modelo de gobierno',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Casos de uso',
          title:
            'Casos de uso que atendemos con servicios de diseño de experiencia',
          description:
            'Trabajamos con equipos SaaS, ecommerce, fintech y empresariales para diseñar experiencias que los usuarios aman y los negocios miden.',
          items: [
            {
              title: 'Rediseños y revamps de producto',
              description:
                'Transforma interfaces obsoletas en experiencias modernas orientadas a conversión sin disrumpir a los usuarios existentes.',
            },
            {
              title: 'Renovación UX de apps móviles',
              description:
                'Rediseña apps móviles con flujos de onboarding mejorados, menos fricción y patrones de interacción nativos de plataforma.',
            },
            {
              title: 'Diseño de experiencia ecommerce',
              description:
                'Diseña flujos de descubrimiento, carrito y checkout que reducen el drop-off y aumentan el ticket promedio.',
            },
            {
              title: 'Diseño de dashboards empresariales',
              description:
                'Crea dashboards densos en datos con jerarquía visual clara para operaciones, analítica y reporting ejecutivo.',
            },
            {
              title: 'Creación de sistemas de diseño',
              description:
                'Construye librerías Figma escalables e implementaciones Storybook que dan a los equipos una fuente única de verdad.',
            },
            {
              title: 'Identidad digital de marca',
              description:
                'Desarrolla identidades digitales cohesivas: logos, tipografía, sistemas de color y motion design que destacan.',
            },
            {
              title: 'Remediación de accesibilidad',
              description:
                'Audita productos existentes contra WCAG 2.2 e implementa correcciones sistemáticas para teclado, lectores de pantalla y contraste.',
            },
            {
              title: 'Diseño de onboarding',
              description:
                'Diseña flujos de activación que guían a los nuevos usuarios al "momento aha" más rápido, reduciendo churn en los primeros 30 días.',
            },
          ],
        },
        expertise: {
          badge: 'Por qué elegirnos',
          title:
            'Precisión, experiencia y herramientas para asegurar tu experiencia digital',
          description:
            'Nuestra práctica de diseño basada en investigación combina excelencia creativa con rigor de ingeniería para entregar experiencias que rinden.',
          items: [
            {
              title: 'Diseño basado en investigación',
              description:
                'Cada decisión de diseño se ancla en datos reales: entrevistas, pruebas de usabilidad, heatmaps y analítica informan todo lo que creamos.',
            },
            {
              title: 'Optimización de conversión',
              description:
                'Diseñamos pensando en resultados medibles: A/B testing, análisis de funnel y optimización iterativa generan saltos de conversión 2x+.',
            },
            {
              title: 'Precisión diseño-código',
              description:
                'Nuestros diseñadores trabajan codo a codo con frontend para asegurar implementación pixel-perfect, performante y con handoff limpio.',
            },
            {
              title: 'Diseño web orientado a rendimiento',
              description:
                'Optimizamos diseños para Core Web Vitals (LCP, CLS, FID), asegurando páginas bellas que también rankean y cargan rápido.',
            },
            {
              title: 'Accesibilidad como estándar',
              description:
                'WCAG 2.2 está integrado en cada proyecto: contraste, navegación por teclado, roles ARIA y testing con lectores de pantalla.',
            },
            {
              title: 'Sistemas de diseño escalables',
              description:
                'Construimos librerías Figma token-driven y componentes Storybook que escalan entre múltiples productos, equipos y plataformas.',
            },
          ],
        },
        technologies: {
          badge: 'Stack de diseño',
          title: 'Herramientas modernas de diseño y desarrollo',
          description:
            'Usamos herramientas líderes para crear y entregar diseños excepcionales.',
          categories: [
            'Herramientas de diseño',
            'Prototipado',
            'Investigación de usuario',
            'Tecnologías web',
            'Frameworks frontend',
            'Colaboración',
          ],
        },
      },
    },
  },
  fr: {
    nav: {
      company: 'Entreprise',
      services: 'Services',
      engineering: 'Ingenierie',
      industries: 'Secteurs',
      partners: 'Partenaires',
      insights: 'Insights',
      careers: 'Carrieres',
      aboutUs: 'A Propos',
      contactUs: 'Contactez-nous',
      howWeWork: 'Notre Methode',
      ai: 'IA',
      dataAnalytics: 'Data et Analytique',
      cloud: 'Cloud',
      microsoftTechnologies: 'Technologies Microsoft',
      experienceDesign: "Design d'Experience",
      cmsDevelopment: 'Developpement CMS',
      digitalMarketing: 'Marketing Digital',
      qualityAssurance: 'Assurance Qualite',
      financialServices: 'Services Financiers',
      healthcareLifeSciences: 'Santé et Sciences de la Vie',
      retailEcommerce: 'Vente au Détail et E-commerce',
      supplyChainLogistics: "Chaîne d'Approvisionnement et Logistique",
      hiTechDigitalNatives: 'Haute Technologie et Natifs Numériques',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Etudes de Cas',
      blogs: 'Blogs',
      hireTalent: 'Recruter des talents',
      aiEngineering: 'Ingenierie IA/ML',
      cloudDevOpsEngineering: 'Ingenierie Cloud et DevOps',
      dataEngineering: 'Ingenierie des Donnees',
      digitalExperienceEngineering: 'Ingenierie Experience Numerique',
      enterpriseServices: 'Services Entreprise',
    },
    common: {
      contactUs: 'Contactez-nous',
      getStarted: 'Commencer',
      language: 'Langue',
      quickContact: 'Contact Rapide',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy: 'Reconnu par les entreprises innovantes du monde entier',
      title: "Construisez des Systèmes Intelligents à l'Échelle",
      titleHighlight: 'Votre Entreprise',
      subtitle:
        'Des solutions logicielles sur mesure conçues pour simplifier les problèmes complexes et stimuler la croissance des entreprises mondiales.',
      scheduleMeeting: 'Planifier un Rendez-vous',
      viewCaseStudies: 'Voir les Études de Cas',
      projectsDelivered: 'Projets Livrés',
      happyClients: 'Clients Satisfaits',
      globalOffices: 'Bureaux Mondiaux',
      expertDevelopers: 'Développeurs Experts',
      featureAiTitle: "Propulsé par l'IA",
      featureAiDesc: 'Automatisation Intelligente',
      featureMicrosoftTitle: 'Expertise Microsoft',
      featureMicrosoftDesc: 'Cloud, Données, Sécurité',
      featureCustomTitle: 'Solutions sur Mesure',
      featureCustomDesc: 'Conçu pour Votre Entreprise',
    },
    services: {
      badge: 'Ce Que Nous Faisons',
      title: 'Nos Services',
      subtitle:
        'Des services de developpement de bout en bout adaptes a votre entreprise.',
      learnMore: 'En savoir plus',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Secteurs',
      title: 'Secteurs que Nous Servons',
      subtitle: 'Une expertise metier pour un impact concret.',
    },
    technologies: {
      badge: 'Technologies',
      title: 'Technologies que Nous Utilisons',
      subtitle: 'Des technologies de pointe pour des solutions performantes.',
    },
    whyChooseUs: {
      badge: 'POURQUOI CHOISIR COGTIX',
      title: 'Une Expertise en laquelle Vous Pouvez Avoir Confiance',
      titleHighlight: 'Expertise',
      subtitle:
        'Nous apportons une vaste expérience et une expertise approfondie dans les solutions technologiques modernes, combinées à un engagement envers la transparence et la fiabilité.',
      trackRecord: 'Fidélité Établie',
      certifiedExperts: 'Experts Certifiés',
      clientCentric: 'Approche Centrée sur le Client',
      innovativeSolutions: 'Solutions Innovantes',
      endToEndSupport: 'Support de Bout en Bout',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Contactez-nous',
      heroSubtitle:
        'Vous avez un projet en tête ? Discutons de la manière dont nous pouvons aider votre entreprise à se développer grâce à nos solutions technologiques sur mesure.',
      badge: 'Contact',
      title: 'Construisons Quelque Chose de Grand Ensemble',
      subtitle: 'Remplissez le formulaire et nous reviendrons sous 24 heures.',
      infoTitle: 'Informations de Contact',
      infoSubtitle: 'Parlons de la transformation de votre entreprise.',
      locationSummary: 'USA • Inde • Australie • Royaume-Uni',
      avgResponsePrefix: 'Temps de reponse moyen :',
      avgResponseValue: 'moins de 2 heures',
      firstName: 'Prenom *',
      lastName: 'Nom *',
      emailAddress: 'Adresse E-mail *',
      phoneNumber: 'Numero de Mobile *',
      message: 'Message *',
      sendMessage: 'Envoyer le Message',
      sending: 'Envoi en cours…',
      submitSuccess:
        'Merci. Votre message a bien été envoyé. Nous vous répondrons bientôt.',
      submitError:
        'Une erreur est survenue. Réessayez ou contactez-nous par e-mail.',
      scheduleTitle: 'Planifier un rendez-vous',
      scheduleSubtitle:
        'Choisissez un créneau qui vous convient. Nous confirmerons et vous enverrons une invitation.',
    },
    aboutUs: {
      badge: 'Notre Entreprise',
      title: "De l'Idée à l'Impact",
      subtitle:
        "Établie par une équipe d'innovateurs dévoués, Cogtix Solutions est née d'un concept fondamental : aider les entreprises à exploiter les capacités de la technologie moderne pour leur évolution numérique.",
      heroTitle: "Propulser l'Innovation par la Technologie",
      heroSubtitle:
        'Cogtix Solutions est un partenaire technologique de premier plan qui aide les entreprises du monde entier à transformer leur paysage numérique grâce à une ingénierie logicielle intelligente.',
      whoWeAreTitle: 'Qui Sommes-Nous',
      whoWeAreContent:
        "Fondée avec la vision de simplifier les technologies complexes pour les entreprises, Cogtix Solutions est devenue une équipe multidisciplinaire d'experts dédiés à la création de produits numériques prêts pour l'avenir.",
      missionTitle: 'Notre Mission',
      missionContent:
        "Donner aux entreprises du monde entier les moyens d'agir en leur proposant des solutions technologiques de pointe, évolutives et sécurisées qui stimulent la croissance, l'efficacité et la transformation numérique.",
      visionTitle: 'Notre Vision',
      visionContent:
        "Devenir le leader mondial de l'ingénierie numérique, reconnu pour notre engagement envers l\'excellence, l\'innovation et la création d'un impact positif grâce à la technologie.",
      valuesTitle: 'Nos Valeurs Fondamentales',
      valuesSubtitle:
        'Les principes qui guident tout ce que nous faisons, de notre code à nos relations avec nos clients.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Reconnaissance',
      title: 'Excellence Primee',
      subtitle: "Reconnus mondialement pour l'innovation et la qualite.",
    },
    offices: {
      badge: 'Nos Bureaux',
      title: 'Implantes dans le Monde',
      subtitle:
        'Toujours proches de nos clients a travers les fuseaux horaires.',
    },
    clients: {
      trustedBy: 'Fait confiance par des entreprises de premier plan',
    },
    footer: {
      company: 'Entreprise',
      engineering: 'Ingenierie',
      contactUs: 'Contactez-nous',
      chatWithUs: 'Discutez avec nous',
      privacyPolicy: 'Politique de Confidentialite',
      designedBy: 'Concu par',
      rightsReserved: 'Tous droits reserves.',
      description:
        'Entreprise leader du developpement logiciel agile et sur mesure.',
      home: 'Accueil',
      aboutUs: 'A Propos',
      caseStudies: 'Etudes de Cas',
      blog: 'Blog',
      careers: 'Carrieres',
      contactUsLink: 'Contactez-nous',
      aiEngineering: 'Ingenierie IA/ML',
      digitalProductEngineering: 'Ingenierie Produit Numerique',
      cloudDevOpsEngineering: 'Ingenierie Cloud et DevOps',
      dataEngineering: 'Ingenierie des Donnees',
      experienceEngineering: "Ingenierie d'Experience Numerique",
      enterpriseServices: 'Services Entreprise',
      status: 'Statut',
    },
    testimonials: {
      badge: 'Témoignages',
      title: "Ce qu'ils disent de nous",
      subtitle: 'Histoires de clients',
      description:
        'Initiez dynamiquement le positionnement sur le marché, liaison totale avec la technologie du clic et du mortier, données convaincantes pour les marchés de pointe.',
      stats: {
        implementations: '12+',
        implementationsLabel: 'Mise en œuvre Réussie',
        minds: '21+',
        mindsLabel: 'Esprits Brillants',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project\'s timelines and requirements, and internal stakeholders were impressed with the service provider/s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'Ce que disent nos clients',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'IA et Machine Learning',
          title: "Apportez l'intelligence aux processus métiers essentiels",
          highlight: 'intelligence',
          description:
            'Nous vous aidons à passer des expérimentations IA à des systèmes prêts pour la production, avec des bases de données solides, une évaluation claire et une exploitation fiable.',
          cta: 'Démarrer votre projet IA',
          statLabels: [
            'Modèles IA livrés',
            'Projets GenAI',
            'Disponibilité des pipelines',
          ],
        },
        features: {
          badge: 'Capacités principales',
          title: 'Nos services IA / ML',
          description:
            "De la GenAI et la data science à l'ingénierie ML et au MLOps : nous couvrons l\'ensemble du cycle de vie de l'IA.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: 'IA Générative',
              description:
                "Intégration GPT sur mesure, LLM et applications d'IA générative construites avec Claude, GPT-4 et des modèles open source.",
              details:
                "Nous concevons et déployons des systèmes d'IA générative de niveau production : pipelines RAG, architectures multi-agents et modèles fine-tunés par domaine, pour automatiser la création de contenu, la génération de code et le traitement intelligent de documents à grande échelle.",
              outcomes: [
                'Architecture RAG de référence avec recherche vectorielle',
                "LLM de domaine fine-tuné avec harness d'évaluation",
                'Guardrails de production et filtres de contenu',
                'Tableaux de bord tokens, latence et grounding',
                "Checklist d'IA responsable validée avec le juridique",
              ],
            },
            {
              title: 'Data Science',
              description:
                'Analytique prédictive, classification, régression et clustering entraînés sur vos données.',
              details:
                "Notre pratique de data science livre des insights exploitables grâce au modélisation statistique avancée, au feature engineering et à l'analyse exploratoire, transformant les données brutes en tableaux de bord, prévisions et systèmes d'aide à la décision.",
              outcomes: [
                'Jeu de données analytique nettoyé et enrichi',
                'Modèle prédictif avec évaluation documentée',
                'Tableaux de bord interactifs sur Power BI ou Looker',
                "API d'aide à la décision pour applications internes",
                'Transfert de compétences à votre équipe analytique',
              ],
            },
            {
              title: 'Machine Learning',
              description:
                "Reconnaissance d'image, détection d\'objets, OCR et traitement visuel pour les applications d'entreprise.",
              details:
                "Nous construisons et déployons des modèles ML pour la vision par ordinateur, le NLP, la détection d'anomalies et la prévision de séries temporelles, avec pipelines d'évaluation rigoureux, atténuation des biais et ré-entraînement continu.",
              outcomes: [
                "Datasets d'entraînement et d'évaluation annotés",
                'Modèle ML en production avec artefacts versionnés',
                'Revue de biais et équité avec plan de mitigation',
                'Workflow de réentraînement continu avec quality gates',
                "API d'inférence durcie pour le trafic réel",
              ],
            },
            {
              title: 'MLOps',
              description:
                'Pratiques MLOps automatisées qui rationalisent tout votre cycle de vie ML et fiabilisent les modèles en production.',
              details:
                "Notre framework MLOps couvre le suivi d'expériences et CI/CD pour ML, le monitoring automatisé, la détection de drift et la gouvernance, garantissant des modèles performants et conformes en production.",
              outcomes: [
                "Suivi d'expériences sur MLflow ou Weights & Biases",
                'Pipeline CI/CD pour entraînement et déploiement',
                'Monitoring de drift, skew et features avec alertes',
                'Registre de modèles avec approbations et lignage',
                'Runbook de rollback et réponse aux incidents',
              ],
            },
            {
              title: 'Intégration IA',
              description:
                'Intégration fluide des capacités IA dans vos systèmes existants, ERP, CRM et plateformes SaaS.',
              details:
                "Nous concevons des solutions IA API-first qui s'intègrent directement dans vos workflows, embarquant inférence temps réel, automatisation intelligente et capacités prédictives sans réécriture disruptive.",
              outcomes: [
                "Architecture d'intégration avec contrats API",
                'Plugins IA pour ERP, CRM et plateformes SaaS',
                "Endpoints d'inférence temps réel avec SLA",
                'Authentification, rate limiting et audit logging',
                'Environnements sandbox et production configurés',
              ],
            },
            {
              title: 'Déploiement de modèles',
              description:
                'Opérations ML prêtes pour la production : serving, monitoring et amélioration continue des systèmes IA.',
              details:
                "Nous gérons le serving sur Kubernetes, les tests A/B, les déploiements en shadow mode, l'allocation GPU optimisée et le rollback automatisé, pour des systèmes IA fiables, évolutifs et économes.",
              outcomes: [
                'Serving conteneurisé sur Kubernetes',
                'Patterns de déploiement A/B et shadow mode',
                'Optimisation et right-sizing des coûts GPU',
                'Rollback automatique en cas de régression qualité',
                'Plan de capacité validé par tests de charge',
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title: "Cas d'usage traités avec nos services d'ingénierie IA / ML",
          description:
            'Nous apportons une expertise sectorielle approfondie : des solutions IA qui résolvent de vrais problèmes métier mesurables.',
          items: [
            {
              title: 'Systèmes de recommandation',
              description:
                "Moteurs de personnalisation pilotés par IA pour l'e-commerce, le contenu et les plateformes d'apprentissage avec tarification dynamique.",
            },
            {
              title: 'Workflows IA agentiques',
              description:
                'Systèmes basés sur agents qui automatisent des tâches multi-étapes via raisonnement, mémoire et comportement orienté objectif.',
            },
            {
              title: "Assistants d'achat virtuels",
              description:
                'Assistants virtuels alimentés par IA conversationnelle et personnalisation temps réel pour la conversion e-commerce.',
            },
            {
              title: 'Modération de contenu',
              description:
                "Modèles IA évolutifs pour la modération d'images, de textes et de vidéos : détection de contenu nuisible et application des politiques.",
            },
            {
              title: "Recherche cognitive d'entreprise",
              description:
                'Recherche intelligente au-delà des mots-clés : compréhension sémantique, parsing de documents et auto-tagging.',
            },
            {
              title: 'Gestion intelligente des risques',
              description:
                'Détection de fraude, risque de crédit, surveillance des cybermenaces et signalement des violations de conformité.',
            },
            {
              title: 'Intelligence opérationnelle',
              description:
                'Maintenance prédictive, automatisation du contrôle qualité, planification des effectifs et allocation de ressources à grande échelle.',
            },
            {
              title: 'Prévision de la demande',
              description:
                "Modèles précis de prévision pour la supply chain, l'inventaire et la planification financière.",
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            'Précision, expertise et outils qui pérennisent vos solutions IA / ML',
          description:
            'Nos frameworks éprouvés, notre maîtrise des outils et notre approche orientée production garantissent une valeur durable.',
          items: [
            {
              title: 'Avantage early-mover GenAI',
              description:
                "En tant qu'adopteurs précoces des technologies GenAI, nous aidons les entreprises à dépasser les PoCs pour des solutions production à fort impact.",
            },
            {
              title: 'Accélérateur GenAI entreprise',
              description:
                'Notre framework GenAI accélère le développement avec des capacités intégrées de dataOps, gouvernance, sécurité, intégration LLM, RAG et monitoring.',
            },
            {
              title: "Données prêtes pour l'IA à grande échelle",
              description:
                'Les initiatives IA réussies reposent sur des données de qualité. Nous garantissons que vos données soient prêtes pour des implémentations à fort impact.',
            },
            {
              title: 'Toolkit MLOps complet',
              description:
                'Notre toolkit MLOps rationalise le cycle de vie ML complet : entraînement, étiquetage, contrôle qualité, garantissant des standards élevés.',
            },
            {
              title: 'Compétences Azure Data & AI',
              description:
                'Avec une spécialisation Azure Data et AI, nous exploitons les dernières avancées pour créer des architectures de données efficaces.',
            },
            {
              title: 'AI/ML spectre complet',
              description:
                "Solutions AI/ML de bout en bout : de l'IA générative à l'extraction documentaire, en passant par la vision par ordinateur.",
            },
          ],
        },
        technologies: {
          badge: 'Stack technologique',
          title: 'Dernières technologies IA et ML',
          description:
            'Nous exploitons les outils et frameworks leaders du marché pour des résultats optimaux.',
          categories: [
            'LLM et Frameworks',
            'Bibliothèques ML',
            'Plateformes Cloud',
            'Traitement des données',
            'Déploiement',
            'Outils et utilitaires',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud et DevOps',
          title: 'Ingénierie moderne Cloud et DevOps',
          highlight: 'DevOps',
          description:
            'Construisez, déployez et gérez votre infrastructure cloud en toute confiance. Nos experts DevOps conçoivent des solutions évolutives avec automatisation, sécurité et excellence opérationnelle.',
          cta: 'Démarrer votre voyage cloud',
          statLabels: [
            'Migrations cloud',
            'Disponibilité SLA',
            'Économies moyennes',
          ],
        },
        features: {
          badge: 'Capacités principales',
          title: 'Services Cloud et DevOps complets',
          description:
            "De l'architecture aux opérations : nous couvrons chaque couche de votre infrastructure cloud.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: "Conception d'architecture cloud",
              description:
                'Infrastructure cloud évolutive, fiable et sécurisée sur AWS, Azure ou Google Cloud, adaptée à votre métier.',
              details:
                "Nous réalisons des revues Well-Architected, concevons des topologies multi-régions et implémentons des stratégies d'autoscaling garantissant 99,99% de disponibilité tout en optimisant jusqu'à 40% les coûts.",
              outcomes: [
                'Revue Well-Architected avec backlog de remédiation',
                'Schéma de topologie multi-régions de référence',
                "Politiques d'autoscaling par couche applicative",
                "Baseline de coûts avec recommandations d'économies",
                'Starter IaC réutilisable pour nouveaux environnements',
              ],
            },
            {
              title: 'Orchestration Kubernetes',
              description:
                "Déployez, gérez et faites évoluer des applications conteneurisées à l'échelle de l'entreprise avec une observabilité complète.",
              details:
                "De la mise en place de clusters EKS, AKS ou GKE à la gestion Helm, la configuration de service mesh et l'autoscaling, nous bâtissons des plateformes d'orchestration de niveau production.",
              outcomes: [
                'Cluster EKS, AKS ou GKE de production livré',
                'Référentiel Helm avec pipelines de release',
                'Service mesh configuré avec mTLS et observabilité',
                "Politiques d'autoscaling cluster, nœuds et pods",
                'Runbook de mise à niveau et de DR',
              ],
            },
            {
              title: 'Mise en place de pipelines CI/CD',
              description:
                'Pipelines de build, test et déploiement automatisés pour des livraisons rapides et fiables sans interruption.',
              details:
                'Nos implémentations CI/CD incluent workflows GitOps, quality gates, stratégies blue-green et canary et rollback automatisé, réduisant les échecs de déploiement de 90%.',
              outcomes: [
                'Livraison GitOps via Argo CD ou Flux',
                'Quality gates automatiques pour tests et sécurité',
                "Templates blue-green et canary prêts à l'emploi",
                'Rollback automatique en un clic par service',
                "Tableau de bord releases pour l'ingénierie et la SRE",
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automatisez le provisionnement avec Terraform, CloudFormation et Ansible pour des environnements reproductibles.',
              details:
                'Nous construisons des modules IaC modulaires et réutilisables avec détection de drift, application des politiques et tests automatisés.',
              outcomes: [
                'Bibliothèque modulaire Terraform ou CloudFormation',
                'Détection de drift avec rapports quotidiens',
                'Policy-as-code appliquée à chaque changement',
                "Tests unitaires et d'intégration pour l'IaC",
                'Templates de pipeline pour nouveaux dépôts',
              ],
            },
            {
              title: 'Monitoring et observabilité',
              description:
                'Monitoring, logging et alerting complets avec Datadog, Prometheus et ELK pour une visibilité opérationnelle totale.',
              details:
                "Nous implémentons les trois piliers de l'observabilité (métriques, logs, traces) avec SLI et SLO, traçage distribué, tableaux de bord d'anomalies et runbooks automatisés.",
              outcomes: [
                'SLI, SLO et error budgets par service',
                'Traçage distribué sur les parcours critiques',
                'Logs centralisés avec recherche structurée',
                "Alertes d'anomalies connectées à l'astreinte",
                "Runbooks d'incidents éprouvés en game days",
              ],
            },
            {
              title: 'Sécurité et conformité',
              description:
                'Bonnes pratiques de sécurité, frameworks de conformité et stratégies DR pour les charges régulées.',
              details:
                'Notre pratique couvre les architectures zero-trust, la gestion des secrets avec Vault, les contrôles SOC 2, HIPAA et PCI-DSS et la planification DR avec objectifs RTO et RPO.',
              outcomes: [
                'Architecture réseau zero-trust de référence',
                'Gestion des secrets via Vault ou KMS',
                'Contrôles automatisés SOC 2, HIPAA et PCI-DSS',
                'Baseline IAM et RBAC avec revues régulières',
                'Plan DR avec RTO et RPO documentés',
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title: "Cas d'usage traités avec notre ingénierie Cloud et DevOps",
          description:
            'Nous livrons des solutions cloud et DevOps de migration, modernisation, sécurité et optimisation des coûts pour toutes les entreprises.',
          items: [
            {
              title: 'Migration cloud et lift-and-shift',
              description:
                'Déplacez les charges on-premises vers le cloud avec un minimum de perturbation grâce à des frameworks éprouvés.',
            },
            {
              title: 'Modernisation applicative',
              description:
                'Conteneurisez et réarchitecturez les applications monolithiques en microservices pour une scalabilité cloud-native.',
            },
            {
              title: 'Gestion multi-cloud',
              description:
                'Concevez et gouvernez les charges sur AWS, Azure et GCP avec politiques unifiées, contrôle des coûts et sécurité.',
            },
            {
              title: 'Ingénierie de reprise après sinistre',
              description:
                'Stratégies DR avec objectifs RTO/RPO, tests de failover et sauvegardes géo-redondantes.',
            },
            {
              title: 'Ingénierie de performance',
              description:
                "Optimisez l'usage des ressources cloud, réduisez la latence et adaptez l'infrastructure pour de hauts débits.",
            },
            {
              title: 'Automatisation de la conformité',
              description:
                'Automatisez les contrôles pour HIPAA, PCI-DSS, SOC 2 et RGPD avec application continue des politiques.',
            },
            {
              title: 'Intégration DevSecOps',
              description:
                'Embarquez le scan de sécurité, SAST/DAST et la gestion des vulnérabilités directement dans les pipelines CI/CD.',
            },
            {
              title: 'FinOps et optimisation des coûts',
              description:
                'Analysez continuellement les dépenses cloud, redimensionnez les ressources et réduisez la facture de 30 à 60%.',
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            'Précision, expertise et outils qui pérennisent votre infrastructure cloud',
          description:
            'Nos méthodologies cloud-native, nos pratiques SRE et notre culture sécurité-first garantissent une infrastructure évolutive, sécurisée et économique.',
          items: [
            {
              title: 'Approche cloud-native dès le départ',
              description:
                'Nous concevons chaque solution pour le cloud dès le premier jour : services managés, serverless et conteneurs minimisent la charge opérationnelle.',
            },
            {
              title: 'Sécurité dès la conception',
              description:
                'La sécurité est intégrée à chaque couche : politiques IAM, gestion des secrets, segmentation réseau et monitoring automatisé de la conformité.',
            },
            {
              title: 'Livraison pilotée par GitOps',
              description:
                'Tous les changements passent par des pipelines versionnés et revus, permettant auditabilité, rollback et rapidité.',
            },
            {
              title: 'SRE et ingénierie de fiabilité',
              description:
                "Nous définissons SLI, SLO et budgets d'erreur, puis bâtissons l'automatisation pour des systèmes fiables, observables et auto-réparants.",
            },
            {
              title: 'Scalabilité multi-région',
              description:
                'Architectures globalement distribuées en topologies actif-actif ou actif-passif pour disponibilité et conformité.',
            },
            {
              title: 'Ingénierie des coûts',
              description:
                'Pratiques FinOps systématiques : instances réservées, spot, autoscaling et gouvernance des tags réduisent les coûts cloud de 40% en moyenne.',
            },
          ],
        },
        technologies: {
          badge: 'Stack technologique',
          title: 'Outils Cloud et DevOps de référence',
          description:
            'Nous exploitons des technologies éprouvées pour des déploiements fiables et évolutifs.',
          categories: [
            'Plateformes Cloud',
            'Conteneurs et orchestration',
            'Infrastructure as Code',
            'Outils CI/CD',
            'Monitoring et logging',
            'Services Cloud',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: "Centre d'Excellence Microsoft",
          title: "Innovation d'entreprise avec les technologies Microsoft",
          highlight: 'Innovation',
          description:
            "Nous exploitons l'écosystème Microsoft (.NET, Azure et Power Platform) pour construire des solutions d\'entreprise évolutives, sécurisées et tournées vers l'avenir.",
          cta: 'Parler à un expert Microsoft',
          statLabels: [
            'Projets .NET',
            "Ans d'expérience",
            'Certifications Azure',
          ],
        },
        features: {
          badge: 'Notre expertise',
          title: 'Services complets de technologies Microsoft',
          description:
            "Des solutions sur mesure sur tout le stack Microsoft pour booster l'efficacité de votre entreprise.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: 'Développement Full-Stack .NET',
              description:
                'Applications web et bureautiques robustes et performantes avec .NET, ASP.NET et Entity Framework.',
              details:
                'Nous architecturons des solutions .NET avec microservices, temps réel via SignalR, SPAs Blazor WebAssembly et conception API-first, livrant des applications avec des temps de réponse inférieurs à 100 ms.',
              outcomes: [
                'Architecture microservices .NET de référence',
                'Conception API-first avec contrats OpenAPI',
                'Canaux temps réel via SignalR',
                'Pipelines CI/CD sur GitHub Actions ou Azure DevOps',
                'Observabilité Application Insights par service',
              ],
            },
            {
              title: 'Solutions Azure Cloud',
              description:
                "Concevez et déployez des applications cloud-native évolutives en exploitant tout l'écosystème Microsoft Azure.",
              details:
                "Notre pratique Azure couvre App Services, Functions serverless, orchestration AKS, Cosmos DB et Azure SQL, conçus selon l'Azure Well-Architected Framework.",
              outcomes: [
                'Landing zone Azure avec garde-fous de politique',
                'Workload de référence déployé sur deux régions',
                'Couche de données Cosmos DB ou Azure SQL avec PITR',
                "Référentiel d'infrastructure Bicep livré",
                'Baseline de coûts avec revue Well-Architected',
              ],
            },
            {
              title: 'Power Platform et applications métier',
              description:
                'Donnez du pouvoir à votre organisation avec des solutions low-code, des workflows automatisés et de la BI orientée données.',
              details:
                'Nous déployons Power Apps (Canvas et Model-driven), Power Automate, dashboards Power BI avec sécurité par ligne, et intégrations Dataverse.',
              outcomes: [
                "Centre d'Excellence (CoE) Power Platform en place",
                'De deux à quatre Power Apps en production',
                'Workflows Power Automate remplaçant le manuel',
                'Dashboards Power BI avec sécurité par ligne',
                'Modèle Dataverse géré par votre équipe IT',
              ],
            },
            {
              title: 'Modernisation et migration',
              description:
                'Transformez des applications .NET legacy en solutions modernes et cloud-optimisées.',
              details:
                "Notre méthodologie couvre la refactorisation, la migration on-prem vers Azure avec Azure Migrate, la décomposition de monolithes en microservices et l'optimisation des performances.",
              outcomes: [
                'Évaluation du portefeuille et plan en 6 R',
                'Roadmap strangler-fig avec jalons trimestriels',
                'Services neufs sur .NET dans AKS ou App Service',
                'Baseline de performance et rapport post-migration',
                'Transfert de compétences à votre équipe',
              ],
            },
            {
              title: 'Microsoft 365 et SharePoint',
              description:
                "Solutions de collaboration sur mesure et gestion documentaire d'entreprise sur Microsoft 365 et SharePoint Online.",
              details:
                'Nous construisons des solutions SPFx, intégrations Teams, automatisations Microsoft 365 et portails intranet modernes.',
              outcomes: [
                'Intranet SharePoint Online avec Viva Connections',
                'Applications Teams Toolkit dans les workflows',
                'Automatisations Microsoft Graph remplaçant les handoffs',
                'Revue de sécurité avec plan Secure Score',
                'Politiques de gouvernance et cycle de vie du contenu',
              ],
            },
            {
              title: 'Data et IA sur Azure',
              description:
                'Exploitez Azure Machine Learning et Cognitive Services pour des applications intelligentes avec insights avancés.',
              details:
                'Nous intégrons Azure OpenAI Service, Cognitive Services (vision, parole, langue), Synapse Analytics et Databricks pour des workflows ML avancés.',
              outcomes: [
                'Architecture de référence Azure OpenAI et AI Search',
                'Cognitive Services intégrés aux apps existantes',
                'Lakehouse Synapse ou Fabric avec modèles sémantiques',
                'Workflows Databricks pour pipelines ML avancés',
                "Tableaux de bord Application Insights pour l'IA",
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title: "Cas d'usage traités avec nos services Microsoft",
          description:
            "Des migrations Azure et modernisations .NET à l'automatisation Power Platform : nous résolvons les défis du stack Microsoft pour les entreprises de toutes tailles.",
          items: [
            {
              title: 'Migration Azure entreprise',
              description:
                'Déplacez des charges complexes on-premises vers Azure avec Azure Migrate, ASR et des patterns éprouvés.',
            },
            {
              title: 'Modernisation .NET legacy',
              description:
                'Modernisez les applications .NET legacy et conteneurisez sur Azure AKS pour la scalabilité cloud-native.',
            },
            {
              title: 'Solutions low-code Power Platform',
              description:
                "Construisez des applications départementales, workflows d'approbation automatisés et rapports Power BI sans surcoût de développement sur mesure.",
            },
            {
              title: 'Plateformes Data et Analytics Azure',
              description:
                "Concevez des plateformes Azure end-to-end avec Synapse, Data Factory et Power BI pour de l'analytique unifiée.",
            },
            {
              title: 'Portails intranet Microsoft 365',
              description:
                "Construisez des intranets modernes SharePoint et intégrations Teams qui améliorent l'engagement des employés.",
            },
            {
              title: 'Applications cognitives Azure AI',
              description:
                "Intégrez Azure OpenAI, Form Recognizer, Speech et Computer Vision dans les applications d'entreprise.",
            },
            {
              title: 'Sécurité et conformité Azure',
              description:
                'Implémentez Azure Security Center, Defender, Key Vault et Sentinel pour les environnements régulés.',
            },
            {
              title: 'Solutions Dynamics 365 sur mesure',
              description:
                'Étendez et personnalisez Dynamics 365 Sales, Customer Service et Finance avec plugins, contrôles PCF et intégrations.',
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            'Précision, expertise et outils qui pérennisent vos investissements Microsoft',
          description:
            "Nos ingénieurs certifiés, frameworks d'adoption structurés et accès à l'écosystème partenaires garantissent un ROI maximal.",
          items: [
            {
              title: "Équipe d'ingénierie certifiée Microsoft",
              description:
                'Nos ingénieurs détiennent plus de 50 certifications Microsoft actives sur Azure, .NET, Power Platform et Dynamics 365.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                'Nous structurons chaque mission Azure avec le CAF de Microsoft, garantissant les bonnes pratiques de sécurité, gouvernance et coûts.',
            },
            {
              title: 'Revues Azure Well-Architected',
              description:
                'Revues structurées sur les piliers fiabilité, sécurité, optimisation des coûts, performance et excellence opérationnelle.',
            },
            {
              title: 'Écosystème de partenaires Microsoft',
              description:
                'En tant que Microsoft Partner reconnu, nous accédons aux previews techniques, au support dédié et au co-sell entreprise.',
            },
            {
              title: "Centre d'Excellence Power Platform",
              description:
                "Nous mettons en place des toolkits CoE Power Platform qui gouvernent le citizen development et mesurent l'adoption.",
            },
            {
              title: 'Spécialisation Azure Data',
              description:
                'Expertise approfondie en Azure Synapse Analytics, Data Factory, Databricks et Cosmos DB pour les plateformes de données.',
            },
          ],
        },
        technologies: {
          badge: 'Stack Microsoft',
          title: 'Écosystème et outillage Microsoft',
          description:
            'Notre expertise approfondie en technologies Microsoft garantit le choix des bons outils pour vos besoins spécifiques.',
          categories: [
            '.NET',
            'Services Azure',
            'Données et stockage',
            'Power Platform',
            'DevOps et outillage',
            'Collaboration',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Services Entreprise',
          title: 'Solutions logicielles de niveau entreprise',
          highlight: 'niveau entreprise',
          description:
            'Boostez votre entreprise avec des solutions sur mesure et évolutives capables de gérer des exigences complexes. Des implémentations ERP à la modernisation legacy.',
          cta: 'Discutons de vos besoins entreprise',
          statLabels: [
            'Clients entreprise',
            'Transactions / jour',
            'Conformité prête',
          ],
        },
        features: {
          badge: 'Capacités principales',
          title: 'Services entreprise complets',
          description:
            "Services complets pour la transformation d'entreprise et la modernisation numérique.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: "Applications d'entreprise sur mesure",
              description:
                'Applications évolutives et critiques pour gérer des exigences complexes et de gros volumes transactionnels.',
              details:
                "Nous architecturons des systèmes d'entreprise avec domain-driven design, patterns event-driven et scalabilité horizontale, gérant des millions de transactions quotidiennes avec isolation multi-tenant et SLA 99,99%.",
              outcomes: [
                'Modèle de domaine avec bounded contexts documenté',
                'Architecture event-driven de référence et contrats',
                "Pattern d'isolation multi-tenant et SDK",
                'Audit et reporting de conformité intégrés',
                'Tableau de bord SLA lié aux error budgets',
              ],
            },
            {
              title: 'Solutions ERP et CRM',
              description:
                'Implémentations SAP, Oracle, Salesforce et Dynamics avec personnalisation profonde et intégration fluide.',
              details:
                'Notre pratique ERP et CRM couvre les implémentations cycle de vie complet : cartographie des exigences, migration des données, développement de modules sur mesure, intégrations tierces et support hypercare.',
              outcomes: [
                'Exigences fonctionnelles et techniques validées',
                'Plan de migration des données avec nettoyage',
                'Modules personnalisés et intégrations livrés',
                "Programme de formation et d'adoption utilisateurs",
                "Fenêtre d'hypercare et de support post-mise en production",
              ],
            },
            {
              title: 'Automatisation des processus métier',
              description:
                'Optimisez les opérations avec RPA, automatisation de workflows et optimisation digitale.',
              details:
                "Nous mettons en œuvre des stratégies d'hyperautomatisation combinant bots UiPath ou Power Automate, workflows d'approbation intelligents, process mining et digital twins, générant des gains de productivité de 40 à 70%.",
              outcomes: [
                'Inventaire de processus avec candidats priorisés',
                'Top trois bots RPA en production avec monitoring',
                "Workflows d'approbation remplaçant le papier",
                'Tableaux de bord process mining pour amélioration continue',
                'Baseline de productivité et rapport post-automatisation',
              ],
            },
            {
              title: 'Modernisation legacy',
              description:
                'Transformez les systèmes legacy en architectures cloud-native modernes tout en préservant la fonctionnalité critique.',
              details:
                "Notre playbook utilise le pattern strangler fig, l'API wrapping et les migrations par phases, assurant zéro disruption métier lors du remplacement de systèmes COBOL, Delphi ou monolithes Java.",
              outcomes: [
                'Évaluation du portefeuille avec scoring de risque',
                'Roadmap strangler-fig avec plan en phases',
                'API gateway devant le système legacy',
                'Services neufs sur runtimes cloud-native',
                'Checklist de retrait des composants legacy',
              ],
            },
            {
              title: "Intégration d'entreprise",
              description:
                "Intégrez des systèmes disparates avec architecture API-first, microservices et bus d'événements.",
              details:
                "Nous concevons des hubs d'intégration avec MuleSoft, Apache Kafka et plateformes iPaaS cloud-native, permettant la synchronisation temps réel entre ERP, CRM, HRMS, finance et SaaS tiers.",
              outcomes: [
                "Architecture d'intégration avec contrats API et événements",
                'Plateforme MuleSoft, Kafka ou iPaaS déployée',
                'Connecteurs réutilisables pour les systèmes clés',
                'Synchronisation temps réel remplaçant les batchs',
                "Observabilité de bout en bout des flux d'intégration",
              ],
            },
            {
              title: 'Sécurité et conformité',
              description:
                'Sécurité de niveau entreprise, frameworks de conformité et gouvernance pour les industries régulées.',
              details:
                "Notre pratique implémente SOC 2, ISO 27001 et contrôles sectoriels avec architecture zero-trust, gestion d'accès basée sur les rôles, pen testing automatisé et journalisation d'audit.",
              outcomes: [
                'Architecture réseau zero-trust de référence',
                "Modèle RBAC et d'identité documenté",
                'Cartographie des contrôles SOC 2 et ISO 27001',
                'Pen testing automatisé dans le CI/CD',
                'Audit logging et intégration SIEM activés',
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title: "Cas d'usage traités avec nos services logiciels d'entreprise",
          description:
            'Nous accompagnons les équipes entreprise BFSI, santé, industrie et secteur public pour résoudre les défis logiciels critiques.',
          items: [
            {
              title: 'Déploiements entreprise mondiaux',
              description:
                "Concevez et déployez des applications multi-régions et multi-langues servant des milliers d'utilisateurs.",
            },
            {
              title: 'Remplacement de systèmes legacy',
              description:
                'Retirez en toute sécurité les monolithes COBOL, Delphi ou Java pour les remplacer par des plateformes modernes.',
            },
            {
              title: 'Automatisation des workflows et approbations',
              description:
                'Automatisez les approbations multi-étapes, le routage de documents et les workflows auditables entre départements.',
            },
            {
              title: 'Analytique et reporting entreprise',
              description:
                "Construisez de l'analytique embarquée, des dashboards temps réel et de la BI self-service pour les opérations et les dirigeants.",
            },
            {
              title: 'Décomposition en microservices',
              description:
                'Décomposez les applications monolithiques en microservices déployables indépendamment et alignés métier.',
            },
            {
              title: "Hubs d'intégration systèmes",
              description:
                "Construisez des hubs d'intégration connectant ERP, CRM, HRMS, finance et SaaS tiers avec synchronisation temps réel.",
            },
            {
              title: 'Conformité en industrie régulée',
              description:
                'Solutions de conformité sur mesure pour BFSI, santé et secteur public qui répondent à des standards stricts.',
            },
            {
              title: 'Applications entreprise avec IA',
              description:
                "Infusez l'IA dans les applications : recherche intelligente, traitement documentaire, alertes prédictives et modules de décision.",
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            "Précision, expertise et outils qui pérennisent vos systèmes d'entreprise",
          description:
            'Notre approche domain-driven, notre playbook de modernisation et notre culture sécurité-first livrent des solutions qui durent des décennies.',
          items: [
            {
              title: 'Expertise Domain-Driven Design',
              description:
                'Nous modélisons les domaines complexes avec les principes DDD : bounded contexts, agrégats et langage ubiquitaire alignent le logiciel sur la réalité métier.',
            },
            {
              title: "Sécurité et gouvernance d'entreprise",
              description:
                "La sécurité n'est pas une option : architectures zero-trust, RBAC, gestion des secrets et conformité automatisée dès le départ.",
            },
            {
              title: 'Méthodologie de modernisation éprouvée',
              description:
                'Notre playbook minimise les risques métier avec strangler fig, tests de parité de features et migrations par phases.',
            },
            {
              title: "Expertise d'intégration approfondie",
              description:
                'Expertise certifiée en MuleSoft, Apache Kafka et grandes plateformes iPaaS pour connecter des paysages applicatifs complexes.',
            },
            {
              title: 'Hyperautomatisation et RPA',
              description:
                'Nous combinons RPA, IA et automatisation pour éliminer les processus manuels et générer des gains de productivité mesurables.',
            },
            {
              title: 'Livraison orientée résultats',
              description:
                'Chaque mission est liée à des résultats métier : nous définissons des KPIs mesurables et rendons compte tout au long de la livraison.',
            },
          ],
        },
        technologies: {
          badge: 'Stack technologique',
          title: 'Plateforme technologique entreprise',
          description:
            "Technologies éprouvées pour les systèmes d'entreprise critiques.",
          categories: [
            'Plateformes entreprise',
            'Processus métier',
            'Backend et APIs',
            'Bases de données',
            'Intégration',
            'Outils entreprise',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Ingénierie des Données',
          title: "Construisez des solutions de données à l'échelle entreprise",
          highlight: "à l'échelle entreprise",
          description:
            'Libérez la valeur de vos données avec des pipelines, data warehouses et plateformes analytiques évolutifs. Des solutions qui gèrent des exigences complexes et des volumes massifs.',
          cta: 'Démarrer votre projet data',
          statLabels: ['Données traitées', 'Latence stream', 'SLO pipeline'],
        },
        features: {
          badge: 'Capacités principales',
          title: "Services complets d'ingénierie des données",
          description:
            "De l'architecture au déploiement et à la maintenance des solutions data d'entreprise.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: 'Architecture de pipelines de données',
              description:
                'Pipelines ETL et ELT évolutifs qui gèrent des volumes massifs avec haute fiabilité et zéro perte de données.',
              details:
                "Nous architecturons des pipelines idempotents et SLA-driven avec support d'évolution de schéma, dead-letter queues et retries automatisés, traitant des milliards d'enregistrements quotidiens.",
              outcomes: [
                'Framework de pipeline de référence avec retry et DLQ',
                'Schema registry avec versioning et contrats',
                'Tableaux de bord SLA et monitoring de fraîcheur',
                'Outils de backfill et replay des historiques',
                'Pipeline CI/CD pour les transformations',
              ],
            },
            {
              title: 'Solutions de data warehouse',
              description:
                "Data warehouses modernes construits sur des technologies cloud-native pour l'analytique, le reporting et la BI.",
              details:
                "De la modélisation dimensionnelle avec schémas star et snowflake à l'optimisation columnaire, vues matérialisées incrémentales et connectivité BI, nous bâtissons des warehouses servant l\'analytique rapide à l'échelle pétaoctet.",
              outcomes: [
                'Modèle dimensionnel avec grain documenté',
                'Layout de partitions et clustering optimisé',
                'Vues matérialisées incrémentales pour top requêtes',
                'Couche sémantique certifiée Looker ou Power BI',
                'Modèle de coûts et stratégie slots ou capacité',
              ],
            },
            {
              title: 'Traitement de données en temps réel',
              description:
                'Stream processing et analytique temps réel sur Apache Kafka, Flink et Spark Streaming pour des insights sub-secondes.',
              details:
                'Architectures event-driven avec sémantique exactly-once, change data capture (CDC) et latence inférieure à 5 ms, pour dashboards live, détection de fraude et alertes opérationnelles.',
              outcomes: [
                'Topics Kafka avec contrats schema registry',
                'Jobs Flink ou Spark Streaming en production',
                'Connecteurs CDC depuis les bases opérationnelles',
                'Patterns exactly-once documentés',
                'Tableaux de bord live avec fraîcheur sub-seconde',
              ],
            },
            {
              title: 'Gestion de data lakes',
              description:
                "Data lakes d'entreprise avec gouvernance, qualité et gestion des métadonnées sur des formats de table ouverts.",
              details:
                "Lakehouses basés sur Delta Lake, Apache Iceberg et Hudi avec catalogage automatisé, contrôle d'accès granulaire et politiques de stockage par paliers de coûts.",
              outcomes: [
                'Lakehouse ouvert sur Delta, Iceberg ou Hudi',
                'Catalogue de données automatisé avec métadonnées riches',
                "Politiques d'accès granulaire à la requête",
                'Règles de cycle de vie et tiering du stockage',
                'Compaction et gestion des small files automatisée',
              ],
            },
            {
              title: 'Intégration de données',
              description:
                'Connectez et harmonisez les données de multiples sources avec assurance qualité et suivi de lineage.',
              details:
                'Nous construisons des connecteurs API, pipelines CDC et flux reverse ETL avec scoring qualité automatisé et lineage complet.',
              outcomes: [
                'Bibliothèque réutilisable de connecteurs API et CDC',
                'Flux reverse ETL vers les systèmes opérationnels',
                'Scoring de qualité sur chaque dataset',
                'Lineage de bout en bout visible côté métier',
                'Runbooks de réponse aux incidents data',
              ],
            },
            {
              title: 'Sécurité et gouvernance des données',
              description:
                'Frameworks de gouvernance avec conformité, sécurité, vie privée et application automatique des politiques.',
              details:
                "Nos frameworks couvrent la conformité RGPD, HIPAA et CCPA, l'auto-détection et le masquage PII, le contrôle d\'accès par rôles, le chiffrement et la journalisation d'audit.",
              outcomes: [
                'Règles de détection et de masquage PII',
                'Politiques RBAC et ABAC appliquées',
                'Chiffrement au repos et en transit vérifié',
                "Logs d'audit envoyés au SIEM",
                'Cartographie réglementaire RGPD, HIPAA et CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title:
            "Cas d'usage traités avec nos services d'ingénierie des données",
          description:
            'Nous servons des organisations data-intensives en finance, retail, santé et SaaS, livrant une infrastructure fiable, gouvernée et évolutive.',
          items: [
            {
              title: 'Plateformes Customer 360',
              description:
                'Unifiez les données client de CRM, web, mobile et support en une vue unique temps réel.',
            },
            {
              title: 'Dashboards analytiques temps réel',
              description:
                'Streamez les données opérationnelles vers des dashboards live pour le reporting, les ventes et le customer success.',
            },
            {
              title: 'Intégration de données multi-sources',
              description:
                'Harmonisez les données ERP, CRM, marketing et IoT dans une couche propre et gouvernée.',
            },
            {
              title: 'Pipelines de données financières',
              description:
                'Pipelines conformes et auditables pour le reporting financier, soumissions réglementaires et modèles de risque.',
            },
            {
              title: 'Modernisation de plateformes data',
              description:
                'Migrez Hadoop legacy ou entrepôts on-premises vers Snowflake, BigQuery ou Synapse.',
            },
            {
              title: 'Ingestion et traitement IoT',
              description:
                "Ingestion et traitement de millions d'événements IoT par seconde depuis dispositifs, capteurs et edge nodes.",
            },
            {
              title: 'Gestion des données de conformité',
              description:
                'Automatisez la classification, le suivi du consentement et la rétention pour RGPD, HIPAA et CCPA.',
            },
            {
              title: 'Feature Stores ML',
              description:
                "Feature stores centralisés qui servent des features ML cohérentes à l'entraînement et à l'inférence.",
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            'Précision, expertise et outils qui pérennisent votre plateforme data',
          description:
            'Notre culture DataOps-first, notre expertise cloud et notre engagement qualité font de votre plateforme un véritable atout compétitif.',
          items: [
            {
              title: 'Architecture de données moderne',
              description:
                'Nous concevons des architectures lakehouse combinant la flexibilité des data lakes et la performance des warehouses.',
            },
            {
              title: 'DataOps et automatisation',
              description:
                'Nos pratiques DataOps apportent CI/CD, tests et monitoring aux pipelines, réduisant le time-to-insight.',
            },
            {
              title: 'Expertise en streaming temps réel',
              description:
                'Expertise hands-on en Kafka, Flink et Spark Streaming pour architectures event-driven à faible latence.',
            },
            {
              title: 'Gouvernance et qualité des données',
              description:
                'Nous intégrons des checks qualité automatisés, registres de schémas et lineage pour des données toujours fiables.',
            },
            {
              title: 'Spécialistes des data warehouses cloud',
              description:
                "Expertise certifiée en Snowflake, BigQuery, Redshift et Azure Synapse, de l'architecture à l'optimisation des coûts.",
            },
            {
              title: 'Conformité réglementaire intégrée',
              description:
                "Tous nos pipelines sont conçus avec conformité dès le départ : masquage, chiffrement et journalisation d'audit.",
            },
          ],
        },
        technologies: {
          badge: 'Stack technologique',
          title: "Stack moderne d'ingénierie des données",
          description:
            'Nous utilisons les meilleurs outils et plateformes pour des solutions fiables et évolutives.',
          categories: [
            'Data Warehouses Cloud',
            'Stream Processing',
            'Outils ETL/ELT',
            'Data Lakes',
            'Stockage et traitement',
            'Monitoring et outils',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Ingénierie Digital et Expérience',
          title: 'Créez des expériences digitales connectées qui convertissent',
          highlight: 'expériences',
          description:
            "Nous concevons et ingénions des expériences digitales end-to-end avec un focus profond sur l'utilisabilité, l'accessibilité et les résultats métier sur web et mobile.",
          cta: 'Démarrer votre projet design',
          statLabels: [
            'Hausse de conversion moyenne',
            'Accessibilité',
            'Design Systems',
          ],
        },
        features: {
          badge: 'Capacités principales',
          title: "Services complets d'ingénierie digital et expérience",
          description:
            "De la recherche utilisateur aux design systems et à l'implémentation production.",
          outcomesTitle: 'Ce que nous livrons',
          items: [
            {
              title: 'Design UX',
              description:
                'Design UX basé sur la recherche qui crée des expériences intuitives, accessibles et marquantes.',
              details:
                "Nous menons du journey mapping, des audits concurrentiels et des tests d'utilisabilité pour valider chaque interaction. Nos designs conformes WCAG réduisent le temps de complétion de tâches de 30 à 50%.",
              outcomes: [
                'Cartes de journey des parcours clés',
                "Rapports de tests d'utilisabilité priorisés",
                "Patterns d'interaction conformes WCAG",
                "Architecture de l'information et sitemap",
                "Prototypes haute fidélité prêts pour l'ingénierie",
              ],
            },
            {
              title: 'Design UI',
              description:
                'Design UI moderne aligné avec votre identité de marque, design system et attentes utilisateurs.',
              details:
                'Notre pratique UI livre des interfaces alignées marque avec micro-interactions, thèmes clair et sombre adaptatifs, layouts responsifs fluides et motion design.',
              outcomes: [
                'Kit UI aligné marque avec états documentés',
                'Tokens de thème clair et sombre définis',
                'Guidelines de micro-interactions et de motion',
                'Système responsif avec grille et breakpoints',
                'Bibliothèque Figma livrée avec documentation',
              ],
            },
            {
              title: 'Design web',
              description:
                'Design web responsif et optimisé pour la performance qui convertit les utilisateurs en clients.',
              details:
                'Nous concevons des expériences web orientées conversion optimisées pour Core Web Vitals comme LCP, CLS et FID, combinant hiérarchie persuasive et placement stratégique des CTAs.',
              outcomes: [
                'Designs de landing pages orientés conversion',
                'Objectifs Core Web Vitals fixés en amont',
                "Specs d'animation respectant le budget perf",
                'Variantes A/B pour les funnels prioritaires',
                "Pack de handoff avec assets pour l'ingénierie",
              ],
            },
            {
              title: "Design d'applications mobiles",
              description:
                'Expériences mobiles intuitives pour iOS et Android conformes aux standards HIG.',
              details:
                'Designs mobiles natifs conformes Apple HIG et Material Design 3, avec interactions gestuelles, navigation spécifique plateforme et parité cross-platform.',
              outcomes: [
                'Spécifications design iOS et Android natives',
                'Navigation et patterns par plateforme',
                "Guidelines de gestes et d'interactions haptiques",
                "Design d'onboarding et de première utilisation",
                'Visuels App Store et Play Store',
              ],
            },
            {
              title: 'Recherche utilisateur',
              description:
                'Recherche, tests et analytique complets pour valider les décisions de design avec des données réelles.',
              details:
                "Notre pratique inclut études ethnographiques, tests d'utilisabilité modérés, expérimentation A/B, heatmaps, card sorting et analytique quantitative.",
              outcomes: [
                'Plan de recherche avec critères de succès',
                'Rapports de tests modérés et non modérés',
                'Documentation des personas et du JTBD',
                "Revue de l'analytique quantitative avec constats",
                "Backlog priorisé d'améliorations",
              ],
            },
            {
              title: 'Design Systems',
              description:
                'Design systems et bibliothèques de composants évolutifs qui accélèrent les équipes produit.',
              details:
                'Nous architecturons des design systems token-driven en Figma avec composants auto-layout, structures de variantes et documentation, plus implémentations Storybook.',
              outcomes: [
                'Tokens de design pour couleurs, espaces et typo',
                'Bibliothèque de composants Figma avec variantes',
                'Storybook implémenté dans votre stack',
                'Processus de versioning et de release documenté',
                "Playbook d'adoption et modèle de gouvernance",
              ],
            },
          ],
        },
        useCases: {
          badge: "Cas d'usage",
          title: "Cas d'usage traités avec nos services de design d'expérience",
          description:
            'Nous travaillons avec les équipes SaaS, e-commerce, fintech et entreprise pour concevoir des expériences mesurables.',
          items: [
            {
              title: 'Redesigns et refontes produit',
              description:
                'Transformez des interfaces obsolètes en expériences modernes orientées conversion sans perturber les utilisateurs existants.',
            },
            {
              title: "Refonte UX d'applications mobiles",
              description:
                'Redessinez les apps mobiles avec onboarding amélioré, friction réduite et patterns natifs.',
            },
            {
              title: "Design d'expérience e-commerce",
              description:
                'Concevez les flux de découverte, panier et checkout pour réduire le drop-off et augmenter le panier moyen.',
            },
            {
              title: 'Design de dashboards entreprise',
              description:
                'Créez des dashboards riches en données avec hiérarchie visuelle claire pour opérations, analytique et reporting.',
            },
            {
              title: 'Création de design systems',
              description:
                'Construisez des bibliothèques Figma et implémentations Storybook qui donnent une source de vérité unique.',
            },
            {
              title: 'Identité digitale de marque',
              description:
                'Développez des identités cohérentes : logos, typographie, systèmes de couleur et motion design.',
            },
            {
              title: "Remédiation d'accessibilité",
              description:
                'Auditez les produits contre WCAG 2.2 et implémentez des corrections systématiques pour clavier, lecteurs et contraste.',
            },
            {
              title: "Design d'onboarding",
              description:
                'Concevez des flux qui guident les nouveaux utilisateurs à leur "moment aha" plus rapidement.',
            },
          ],
        },
        expertise: {
          badge: 'Pourquoi nous choisir',
          title:
            'Précision, expertise et outils qui pérennisent votre expérience digitale',
          description:
            "Notre pratique de design basée recherche combine excellence créative et rigueur d'ingénierie pour des expériences performantes.",
          items: [
            {
              title: 'Design basé recherche',
              description:
                "Chaque décision est ancrée dans des données réelles : entretiens, tests d'utilisabilité, heatmaps et analytique.",
            },
            {
              title: 'Optimisation du taux de conversion',
              description:
                'Nous concevons avec des résultats mesurables en tête : A/B testing, analyse de funnel et optimisation itérative génèrent 2x+ de conversion.',
            },
            {
              title: 'Précision design-vers-code',
              description:
                'Nos designers travaillent main dans la main avec les ingénieurs frontend pour une implémentation pixel-perfect et performante.',
            },
            {
              title: 'Design web orienté performance',
              description:
                'Nous optimisons les designs pour Core Web Vitals (LCP, CLS, FID), garantissant des pages belles et performantes.',
            },
            {
              title: 'Accessibilité par défaut',
              description:
                "WCAG 2.2 intégré à chaque projet : contraste, navigation clavier, rôles ARIA et tests lecteur d'écran.",
            },
            {
              title: 'Design systems évolutifs',
              description:
                "Nous bâtissons des bibliothèques Figma token-driven et composants Storybook qui s'étendent à plusieurs produits.",
            },
          ],
        },
        technologies: {
          badge: 'Stack design',
          title: 'Outils modernes de design et développement',
          description:
            'Nous utilisons des outils leaders pour créer et livrer des designs exceptionnels.',
          categories: [
            'Outils de design',
            'Prototypage',
            'Recherche utilisateur',
            'Technos web',
            'Frameworks frontend',
            'Collaboration',
          ],
        },
      },
    },
  },
  de: {
    nav: {
      company: 'Unternehmen',
      services: 'Services',
      engineering: 'Engineering',
      industries: 'Branchen',
      partners: 'Partner',
      insights: 'Insights',
      careers: 'Karriere',
      aboutUs: 'Uber Uns',
      contactUs: 'Kontakt',
      howWeWork: 'So Arbeiten Wir',
      ai: 'KI',
      dataAnalytics: 'Daten und Analytik',
      cloud: 'Cloud',
      microsoftTechnologies: 'Microsoft Technologien',
      experienceDesign: 'Experience Design',
      cmsDevelopment: 'CMS Entwicklung',
      digitalMarketing: 'Digitales Marketing',
      qualityAssurance: 'Qualitatssicherung',
      financialServices: 'Finanzdienstleistungen',
      healthcareLifeSciences: 'Gesundheitswesen und Biowissenschaften',
      retailEcommerce: 'Einzelhandel und E-Commerce',
      supplyChainLogistics: 'Lieferkette und Logistik',
      hiTechDigitalNatives: 'High-Tech und Digital Natives',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Fallstudien',
      blogs: 'Blogs',
      hireTalent: 'Talent einstellen',
      aiEngineering: 'KI/ML Engineering',
      cloudDevOpsEngineering: 'Cloud und DevOps Engineering',
      dataEngineering: 'Data Engineering',
      digitalExperienceEngineering: 'Digital und Experience Engineering',
      enterpriseServices: 'Enterprise Services',
    },
    common: {
      contactUs: 'Kontakt',
      getStarted: 'Starten',
      language: 'Sprache',
      quickContact: 'Schnellkontakt',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy: 'Vertrauen von zukunftsorientierten Unternehmen weltweit',
      title: 'Bauen Sie intelligente Systeme, die skalieren',
      titleHighlight: 'Ihr Unternehmen',
      subtitle:
        'Maßgeschneiderte Softwarelösungen, die komplexe Probleme vereinfachen und das globale Geschäftswachstum fördern.',
      scheduleMeeting: 'Termin vereinbaren',
      viewCaseStudies: 'Fallstudien ansehen',
      projectsDelivered: 'Abgeschlossene Projekte',
      happyClients: 'Zufriedene Kunden',
      globalOffices: 'Globale Standorte',
      expertDevelopers: 'Experten-Entwickler',
      featureAiTitle: 'KI-gestützt',
      featureAiDesc: 'Intelligente Automatisierung',
      featureMicrosoftTitle: 'Microsoft-Expertise',
      featureMicrosoftDesc: 'Cloud, Daten, Sicherheit',
      featureCustomTitle: 'Individuelle Lösungen',
      featureCustomDesc: 'Speziell für Ihr Unternehmen',
    },
    services: {
      badge: 'Was Wir Tun',
      title: 'Unsere Services',
      subtitle: 'End-to-End-Entwicklungsservices fur Ihr Unternehmen.',
      learnMore: 'Mehr erfahren',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Branchen',
      title: 'Branchen, die wir bedienen',
      subtitle: 'Tiefe Branchenexpertise fur messbare Ergebnisse.',
    },
    technologies: {
      badge: 'Technologien',
      title: 'Technologien fur unsere Loesungen',
      subtitle: 'Moderne Technologien fur skalierbare Ergebnisse.',
    },
    whyChooseUs: {
      badge: 'WARUM COGTIX WÄHLEN',
      title: 'Expertise, der Sie vertrauen können',
      titleHighlight: 'Expertise',
      subtitle:
        'Wir bringen eine Fülle von Erfahrung und tiefes Fachwissen in modernen Technologielösungen mit, kombiniert mit einer Verpflichtung zu Transparenz und Zuverlässigkeit.',
      trackRecord: 'Bewährte Erfolgsbilanz',
      certifiedExperts: 'Zertifizierte Experten',
      clientCentric: 'Kundenorientierter Ansatz',
      innovativeSolutions: 'Innovative Lösungen',
      endToEndSupport: 'End-to-End-Unterstützung',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Kontaktieren Sie uns',
      heroSubtitle:
        'Haben Sie ein Projekt im Sinn? Lassen Sie uns besprechen, wie wir Ihr Unternehmen mit unseren maßgeschneiderten Technologielösungen unterstützen können.',
      badge: 'Kontakt',
      title: 'Lassen Sie uns gemeinsam etwas Grosses bauen',
      subtitle: 'Formular ausfullen, wir melden uns innerhalb von 24 Stunden.',
      infoTitle: 'Kontaktinformationen',
      infoSubtitle:
        'Sprechen wir daruber, wie wir Ihr Unternehmen transformieren.',
      locationSummary: 'USA • Indien • Australien • Vereinigtes Konigreich',
      avgResponsePrefix: 'Durchschnittliche Antwortzeit:',
      avgResponseValue: 'unter 2 Stunden',
      firstName: 'Vorname *',
      lastName: 'Nachname *',
      emailAddress: 'E-Mail-Adresse *',
      phoneNumber: 'Mobilnummer *',
      message: 'Nachricht *',
      sendMessage: 'Nachricht Senden',
      sending: 'Wird gesendet…',
      submitSuccess:
        'Vielen Dank. Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze.',
      submitError:
        'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt.',
      scheduleTitle: 'Termin vereinbaren',
      scheduleSubtitle:
        'Wählen Sie einen passenden Termin. Wir bestätigen die Buchung und senden eine Kalendereinladung.',
    },
    aboutUs: {
      badge: 'Unser Unternehmen',
      title: 'Von der Idee zur Wirkung',
      subtitle:
        'Gegründet von einem Team engagierter Innovatoren, entstand Cogtix Solutions aus einem grundlegenden Konzept: Unternehmen dabei zu unterstützen, die Möglichkeiten moderner Technologie für ihre digitale Entwicklung zu nutzen.',
      heroTitle: 'Innovation durch Technologie vorantreiben',
      heroSubtitle:
        'Cogtix Solutions ist ein führender Technologiepartner, der Unternehmen weltweit dabei unterstützt, ihre digitale Landschaft durch intelligentes Software-Engineering zu transformieren.',
      whoWeAreTitle: 'Wer Wir Sind',
      whoWeAreContent:
        'Gegründet mit der Vision, komplexe Technologien für Unternehmen zu vereinfachen, hat sich Cogtix Solutions zu einem multidisziplinären Team von Experten entwickelt, die sich der Entwicklung zukunftsfähiger digitaler Produkte widmen.',
      missionTitle: 'Unsere Mission',
      missionContent:
        'Unternehmen weltweit durch die Bereitstellung modernster, skalierbarer und sicherer Technologielösungen zu stärken, die Wachstum, Effizienz und digitale Transformation fördern.',
      visionTitle: 'Unsere Vision',
      visionContent:
        'Der weltweit führende Anbieter im Bereich Digital Engineering zu werden, anerkannt für unser Engagement für Exzellenz, Innovation und die Schaffung positiver Auswirkungen durch Technologie.',
      valuesTitle: 'Unsere Grundwerte',
      valuesSubtitle:
        'Die Prinzipien, die unser gesamtes Handeln leiten, von unserem Code bis hin zu unseren Kundenbeziehungen.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Auszeichnungen',
      title: 'Preisgekronte Exzellenz',
      subtitle: 'Global anerkannt fur exzellente Entwicklung und Innovation.',
    },
    offices: {
      badge: 'Unsere Buros',
      title: 'Weltweit vertreten',
      subtitle: 'Immer nah an unseren Kunden in verschiedenen Zeitzonen.',
    },
    clients: {
      trustedBy: 'Vertrauen von fuhrenden Unternehmen weltweit',
    },
    footer: {
      company: 'Unternehmen',
      engineering: 'Engineering',
      contactUs: 'Kontakt',
      chatWithUs: 'Chatten Sie mit uns',
      privacyPolicy: 'Datenschutz',
      designedBy: 'Entwickelt von',
      rightsReserved: 'Alle Rechte vorbehalten.',
      description:
        'Fuehrendes Softwareunternehmen mit agilem, individuellem Ansatz.',
      home: 'Startseite',
      aboutUs: 'Uber Uns',
      caseStudies: 'Fallstudien',
      blog: 'Blog',
      careers: 'Karriere',
      contactUsLink: 'Kontakt',
      aiEngineering: 'KI/ML Engineering',
      digitalProductEngineering: 'Digital Product Engineering',
      cloudDevOpsEngineering: 'Cloud und DevOps Engineering',
      dataEngineering: 'Data Engineering',
      experienceEngineering: 'Digital und Experience Engineering',
      enterpriseServices: 'Enterprise Services',
      status: 'Status',
    },
    testimonials: {
      badge: 'Kundenstimmen',
      title: 'Was sie über uns sagen',
      subtitle: 'Kundenberichte',
      description:
        'Dynamische Initiierung der Marktpositionierung, totale Verknüpfung mit Clicks-and-Mortar-Technologie, überzeugende Daten für innovative Märkte.',
      stats: {
        implementations: '12+',
        implementationsLabel: 'Erfolgreiche Umsetzung',
        minds: '21+',
        mindsLabel: 'Brillante Köpfe',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project\'s timelines and requirements, and internal stakeholders were impressed with the service provider/s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'Was unsere Kunden sagen',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'KI und Machine Learning',
          title: 'Bringen Sie Intelligenz in zentrale Geschäftsprozesse',
          highlight: 'Intelligenz',
          description:
            'Wir begleiten Sie von KI-Experimenten zu produktionsreifen Systemen mit soliden Datengrundlagen, klarer Evaluation und verlässlichem operativem Betrieb.',
          cta: 'KI-Projekt starten',
          statLabels: [
            'Ausgelieferte KI-Modelle',
            'GenAI-Projekte',
            'Pipeline-Verfügbarkeit',
          ],
        },
        features: {
          badge: 'Kernkompetenzen',
          title: 'Unsere KI/ML-Services',
          description:
            'Von GenAI und Data Science bis ML-Engineering und MLOps, wir decken den gesamten KI-Lebenszyklus ab.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'Generative KI',
              description:
                'Maßgeschneiderte GPT- und LLM-Integration sowie generative KI-Anwendungen mit Claude, GPT-4 und Open-Source-Modellen.',
              details:
                'Wir entwerfen und betreiben produktionsreife GenAI-Systeme, darunter RAG-Pipelines, Multi-Agent-Architekturen und domänenspezifisch feingetunte Modelle, für skalierte Content-Erstellung, Code-Generierung und intelligente Dokumentenverarbeitung.',
              outcomes: [
                'Referenz-RAG-Architektur mit Vektorsuche',
                'Domänen-LLM mit Evaluations-Harness feingetunt',
                'Produktions-Guardrails und Content-Safety-Filter',
                'Dashboards für Tokens, Latenz und Grounding',
                'Verantwortliche-KI-Checkliste mit Legal abgestimmt',
              ],
            },
            {
              title: 'Data Science',
              description:
                'Prädiktive Analytik, Klassifikation, Regression und Clustering-Modelle, trainiert auf Ihren Daten.',
              details:
                'Unsere Data-Science-Praxis liefert handlungsorientierte Insights durch fortgeschrittene statistische Modellierung, Feature Engineering und explorative Analysen, sie verwandelt Rohdaten in Dashboards, Prognosen und Entscheidungshilfen mit messbarem Geschäftsnutzen.',
              outcomes: [
                'Bereinigter Analyse-Datensatz mit Features',
                'Prädiktives Modell mit dokumentierter Evaluation',
                'Interaktive Dashboards in Power BI oder Looker',
                'Entscheidungs-API für interne Anwendungen',
                'Wissenstransfer an Ihr Analytics-Team',
              ],
            },
            {
              title: 'Machine Learning',
              description:
                'Bilderkennung, Objekterkennung, OCR und visuelle Verarbeitung für Unternehmensanwendungen.',
              details:
                'Wir entwickeln und betreiben individuelle ML-Modelle für Computer Vision, NLP, Anomalieerkennung und Zeitreihen-Forecasts, mit rigorosen Evaluationspipelines, Bias-Minderung und kontinuierlichem Retraining.',
              outcomes: [
                'Annotierte Trainings- und Evaluations-Datasets',
                'Produktions-ML-Modell mit versionierten Artefakten',
                'Bias- und Fairness-Review mit Maßnahmenplan',
                'Continuous-Retraining-Workflow mit Quality Gates',
                'Inferenz-API für Echtdaten gehärtet',
              ],
            },
            {
              title: 'MLOps',
              description:
                'Automatisierte MLOps-Praktiken, die den gesamten ML-Lebenszyklus optimieren und Modelle in Produktion zuverlässig halten.',
              details:
                'Unser MLOps-Framework umfasst Experiment-Tracking, CI/CD für ML, automatisiertes Monitoring, Drift-Erkennung und Governance, für leistungsstarke, konforme und kosteneffiziente Modelle in der Produktion.',
              outcomes: [
                'Experiment-Tracking in MLflow oder Weights & Biases',
                'CI/CD-Pipeline für Training und Deployment',
                'Drift-, Skew- und Feature-Monitoring mit Alerts',
                'Model Registry mit Approvals und Lineage',
                'Runbook für Rollback und Incident Response',
              ],
            },
            {
              title: 'KI-Integration',
              description:
                'Nahtlose Integration von KI-Funktionen in bestehende Systeme, ERPs, CRMs und SaaS-Plattformen.',
              details:
                'Wir entwerfen API-first-KI-Lösungen, die sich direkt in Geschäftsprozesse einbetten, mit Echtzeit-Inferenz, intelligenter Automatisierung und prädiktiven Funktionen in ERP-, CRM- und Betriebssystemen, ohne disruptive Umschreibungen.',
              outcomes: [
                'Integrationsarchitektur mit API-Verträgen',
                'KI-Plugins für ERP, CRM und SaaS-Plattformen',
                'Echtzeit-Inferenz-Endpunkte mit SLAs',
                'Authentifizierung, Rate-Limiting und Audit-Logging',
                'Sandbox- und Produktionsumgebungen konfiguriert',
              ],
            },
            {
              title: 'Modell-Deployment',
              description:
                'Produktionsreife ML-Operationen, Model-Serving, Monitoring und kontinuierliche Verbesserung von KI-Systemen.',
              details:
                'Wir betreiben Modelle in Kubernetes-Containern, A/B-Tests, Shadow-Mode-Rollouts, kostenoptimierte GPU-Allokation und automatisierte Rollback-Strategien, für zuverlässige, skalierbare und wirtschaftliche KI-Systeme.',
              outcomes: [
                'Containerisiertes Model-Serving auf Kubernetes',
                'A/B- und Shadow-Mode-Rollout-Patterns',
                'GPU-Kostenoptimierung und Right-Sizing',
                'Automatischer Rollback bei Qualitätsregression',
                'Kapazitätsplan mit Lasttests validiert',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title: 'Anwendungsfälle, die wir mit KI/ML-Engineering bedienen',
          description:
            'Wir bringen tiefe Branchenexpertise mit, und liefern KI-Lösungen, die echte, messbare Geschäftsprobleme lösen.',
          items: [
            {
              title: 'Empfehlungssysteme',
              description:
                'KI-getriebene Personalisierung für E-Commerce, Content und Lernplattformen mit dynamischer Preisgestaltung.',
            },
            {
              title: 'Agentic-KI-Workflows',
              description:
                'Agentenbasierte Systeme, die mehrstufige Aufgaben über Reasoning, Memory und zielgerichtetes Handeln automatisieren.',
            },
            {
              title: 'Einkaufsberater',
              description:
                'Virtuelle Shopping-Assistenten mit Conversational AI und Echtzeit-Personalisierung für E-Commerce-Conversion.',
            },
            {
              title: 'Content-Moderation',
              description:
                'Skalierbare KI-Modelle für Bild-, Text- und Video-Moderation, Erkennung schädlicher Inhalte und Policy-Durchsetzung.',
            },
            {
              title: 'Enterprise Cognitive Search',
              description:
                'Intelligente Suche jenseits von Keywords, semantisches Verständnis, Dokumenten-Parsing und Auto-Tagging.',
            },
            {
              title: 'Intelligentes Risikomanagement',
              description:
                'KI-gestützte Betrugserkennung, Kreditrisiko, Cyber-Bedrohungsüberwachung und Compliance-Verstoßmeldung.',
            },
            {
              title: 'Operative Intelligenz',
              description:
                'Predictive Maintenance, automatisierte Qualitätskontrolle, Personalplanung und Ressourcenallokation in großem Maßstab.',
            },
            {
              title: 'Bedarfsprognose',
              description:
                'Präzise Forecast-Modelle für Supply Chain, Inventar und Finanzplanung mit historischen und Echtzeitdaten.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre KI/ML-Lösungen zukunftssicher machen',
          description:
            'Unsere bewährten Frameworks, tiefe Tool-Expertise und produktionsorientierte Herangehensweise sichern nachhaltigen Wert Ihrer KI-Investitionen.',
          items: [
            {
              title: 'GenAI Early-Mover-Vorteil',
              description:
                'Als frühe Anwender generativer KI helfen wir Unternehmen, von PoCs zu produktionsreifen, skalierbaren Lösungen mit echtem Impact zu kommen.',
            },
            {
              title: 'Enterprise GenAI Accelerator',
              description:
                'Unser fundamentales GenAI-Framework beschleunigt die KI-Entwicklung mit integrierten Funktionen für DataOps, Governance, Security, LLM-Integration, RAG und Monitoring.',
            },
            {
              title: 'Datenbereitschaft für KI im großen Maßstab',
              description:
                'Erfolgreiche KI-Initiativen benötigen hochwertige, strukturierte Daten. Wir stellen sicher, dass Ihre Daten dafür optimiert sind.',
            },
            {
              title: 'Umfassendes MLOps-Toolkit',
              description:
                'Unser MLOps-Toolkit optimiert den gesamten ML-Lebenszyklus, Modelltraining, Datenlabeling, Qualitätskontrolle, und sichert hohe Standards.',
            },
            {
              title: 'Azure Data & AI-Kompetenzen',
              description:
                'Mit Spezialisierung auf Azure Data und AI nutzen wir die neuesten Fortschritte für effiziente Datenarchitekturen.',
            },
            {
              title: 'AI/ML im vollen Spektrum',
              description:
                'End-to-End-AI/ML-Lösungen, von generativer KI und Dokumentenextraktion bis Computer Vision wie Objekterkennung.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-Stack',
          title: 'Neueste KI- und ML-Technologien',
          description:
            'Wir setzen auf branchenführende Tools und Frameworks für optimale Ergebnisse.',
          categories: [
            'LLMs und Frameworks',
            'ML-Bibliotheken',
            'Cloud-Plattformen',
            'Datenverarbeitung',
            'Deployment',
            'Tools und Utilities',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud und DevOps',
          title: 'Moderne Cloud- und DevOps-Engineering',
          highlight: 'DevOps',
          description:
            'Bauen, deployen und betreiben Sie Cloud-Infrastruktur mit Vertrauen. Unsere DevOps-Experten entwerfen skalierbare Lösungen mit Automatisierung, Sicherheit und operativer Exzellenz.',
          cta: 'Ihre Cloud-Reise starten',
          statLabels: [
            'Cloud-Migrationen',
            'SLA-Verfügbarkeit',
            'Durchschnittliche Kosteneinsparung',
          ],
        },
        features: {
          badge: 'Kernkompetenzen',
          title: 'Umfassende Cloud- und DevOps-Services',
          description:
            'Von der Architektur bis zum Betrieb, wir betreuen jede Schicht Ihrer Cloud-Infrastruktur.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'Cloud-Architektur-Design',
              description:
                'Skalierbare, zuverlässige und sichere Cloud-Infrastruktur auf AWS, Azure oder Google Cloud, zugeschnitten auf Ihr Geschäft.',
              details:
                'Wir führen Well-Architected-Reviews durch, entwerfen Multi-Region-Topologien und implementieren Autoscaling-Strategien mit 99,99% Verfügbarkeit und bis zu 40% Kosteneinsparungen.',
              outcomes: [
                'Well-Architected-Review mit Maßnahmen-Backlog',
                'Referenz-Multi-Region-Topologie-Diagramm',
                'Autoscaling-Policies je Workload-Schicht',
                'Kostenbaseline mit Einsparempfehlungen',
                'Wiederverwendbares IaC-Starter-Kit',
              ],
            },
            {
              title: 'Kubernetes-Orchestrierung',
              description:
                'Deployen, verwalten und skalieren Sie containerisierte Anwendungen mit Kubernetes auf Enterprise-Niveau mit voller Observability.',
              details:
                'Von EKS-, AKS- oder GKE-Cluster-Setup über Helm-Chart-Management, Service-Mesh-Konfiguration bis Pod-Autoscaling, wir bauen produktionsreife Orchestrierungsplattformen.',
              outcomes: [
                'Produktions-EKS-, AKS- oder GKE-Cluster übergeben',
                'Helm-Chart-Repository mit Release-Pipelines',
                'Service Mesh mit mTLS und Observability konfiguriert',
                'Cluster-, Node- und Pod-Autoscaling-Policies',
                'Upgrade- und Disaster-Recovery-Runbook',
              ],
            },
            {
              title: 'CI/CD-Pipeline-Implementierung',
              description:
                'Automatisierte Build-, Test- und Deployment-Pipelines für schnellere, zuverlässige Releases ohne Ausfallzeit.',
              details:
                'Unsere CI/CD-Implementierungen umfassen GitOps-Workflows, automatisierte Quality Gates, Blue-Green- und Canary-Deployment-Strategien und Rollback-Automatisierung, mit 90% weniger Deployment-Fehlern.',
              outcomes: [
                'GitOps-Delivery via Argo CD oder Flux',
                'Automatisierte Quality Gates für Tests und Security',
                'Blue-Green- und Canary-Templates einsatzbereit',
                'Ein-Klick-Rollback-Automatisierung je Service',
                'Release-Dashboard für Engineering und SRE',
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automatisieren Sie das Provisioning mit Terraform, CloudFormation und Ansible für reproduzierbare Umgebungen.',
              details:
                'Wir bauen modulare, wiederverwendbare IaC-Module mit Drift-Erkennung, Policy-Enforcement und automatisierten Tests.',
              outcomes: [
                'Modulare Terraform- oder CloudFormation-Bibliothek',
                'Drift-Erkennung mit täglichen Reports',
                'Policy-as-Code für jede Änderung erzwungen',
                'Unit- und Integrationstests für IaC',
                'Pipeline-Templates für neue Repositories',
              ],
            },
            {
              title: 'Monitoring und Observability',
              description:
                'Umfassendes Monitoring, Logging und Alerting mit Datadog, Prometheus und ELK für volle operative Sichtbarkeit.',
              details:
                'Wir implementieren die drei Säulen der Observability, Metriken, Logs und Traces, mit SLI- und SLO-Definitionen, verteilten Traces, Anomalie-Dashboards und automatisierten Incident-Runbooks.',
              outcomes: [
                'SLIs, SLOs und Error Budgets je Service',
                'Verteilte Traces über kritische User Journeys',
                'Zentralisierte Logs mit strukturierter Suche',
                'Anomalie-Alerts an Bereitschaft angebunden',
                'Incident-Runbooks in Game Days getestet',
              ],
            },
            {
              title: 'Security und Compliance',
              description:
                'Sicherheits-Best-Practices, Compliance-Frameworks und Disaster-Recovery-Strategien für regulierte Workloads.',
              details:
                'Unsere Sicherheitspraxis umfasst Zero-Trust-Netzwerkarchitekturen, Secrets-Management mit Vault, automatisierte SOC 2, HIPAA und PCI-DSS-Checks und DR-Planung mit definierten RTO- und RPO-Zielen.',
              outcomes: [
                'Zero-Trust-Netzwerk-Referenzarchitektur',
                'Secrets-Management via Vault oder KMS',
                'Automatisierte SOC 2-, HIPAA- und PCI-DSS-Kontrollen',
                'IAM- und RBAC-Baseline mit Reviews',
                'DR-Plan mit dokumentierten RTO und RPO',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title:
            'Anwendungsfälle, die wir mit Cloud- und DevOps-Engineering bedienen',
          description:
            'Wir liefern Cloud- und DevOps-Lösungen für Migration, Modernisierung, Sicherheit und Kostenoptimierung in jeder Unternehmensphase.',
          items: [
            {
              title: 'Cloud-Migration und Lift-and-Shift',
              description:
                'Verschieben Sie Legacy-On-Premise-Workloads mit minimaler Störung in die Cloud mit bewährten Migrationsframeworks.',
            },
            {
              title: 'Anwendungsmodernisierung',
              description:
                'Containerisieren und re-architektieren Sie monolithische Anwendungen zu Microservices für cloud-native Skalierbarkeit.',
            },
            {
              title: 'Multi-Cloud-Management',
              description:
                'Entwerfen und steuern Sie Workloads über AWS, Azure und GCP mit einheitlichen Richtlinien.',
            },
            {
              title: 'Disaster-Recovery-Engineering',
              description:
                'Entwerfen und automatisieren Sie DR-Strategien mit RTO/RPO-Zielen, Failover-Tests und georedundanten Backups.',
            },
            {
              title: 'Performance-Engineering',
              description:
                'Optimieren Sie die Cloud-Ressourcennutzung, reduzieren Sie Latenzen und tunen Sie die Infrastruktur für hohe Durchsätze.',
            },
            {
              title: 'Compliance-Automatisierung',
              description:
                'Automatisieren Sie Compliance-Checks für HIPAA, PCI-DSS, SOC 2 und DSGVO mit kontinuierlicher Policy-Durchsetzung.',
            },
            {
              title: 'DevSecOps-Integration',
              description:
                'Betten Sie Security-Scans, SAST/DAST-Tests und Schwachstellen-Management direkt in CI/CD-Pipelines ein.',
            },
            {
              title: 'FinOps und Kostenoptimierung',
              description:
                'Analysieren Sie laufend Cloud-Ausgaben, dimensionieren Sie Ressourcen richtig und senken Sie die Cloud-Rechnung um 30 bis 60%.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre Cloud-Infrastruktur zukunftssicher machen',
          description:
            'Unsere cloud-nativen Methoden, SRE-Praktiken und Security-first-Kultur sichern eine skalierbare, sichere und bezahlbare Infrastruktur.',
          items: [
            {
              title: 'Cloud-Native-First-Ansatz',
              description:
                'Wir entwerfen jede Lösung vom ersten Tag an für die Cloud, mit Managed Services, Serverless und Containern zur Minimierung des Betriebsaufwands.',
            },
            {
              title: 'Security-by-Design',
              description:
                'Sicherheit ist in jeder Schicht eingebettet, von IAM-Richtlinien und Secret-Management bis Netzwerksegmentierung und automatisiertem Compliance-Monitoring.',
            },
            {
              title: 'GitOps-getriebene Auslieferung',
              description:
                'Alle Infrastruktur- und Anwendungsänderungen laufen über versionierte, geprüfte Pipelines, mit Auditierbarkeit, Rollbacks und Geschwindigkeit.',
            },
            {
              title: 'SRE und Reliability Engineering',
              description:
                'Wir definieren SLIs, SLOs und Error Budgets und bauen Automatisierung, die Ihre Systeme zuverlässig, beobachtbar und selbstheilend hält.',
            },
            {
              title: 'Multi-Region-Skalierbarkeit',
              description:
                'Architekturen global verteilter Systeme mit Active-Active- oder Active-Passive-Topologien für maximale Verfügbarkeit.',
            },
            {
              title: 'Kosten-Engineering',
              description:
                'Systematische FinOps-Praktiken, Reserved Instances, Spot-Flotten, Autoscaling und Tag-Governance, senken Cloud-Kosten im Schnitt um 40%.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-Stack',
          title: 'Branchenführende Cloud- und DevOps-Tools',
          description:
            'Wir setzen bewährte Technologien für zuverlässige, skalierbare Deployments ein.',
          categories: [
            'Cloud-Plattformen',
            'Container und Orchestrierung',
            'Infrastructure as Code',
            'CI/CD-Tools',
            'Monitoring und Logging',
            'Cloud-Services',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: 'Microsoft Center of Excellence',
          title: 'Unternehmensinnovation mit Microsoft-Technologien',
          highlight: 'Innovation',
          description:
            'Wir nutzen das Microsoft-Ökosystem, .NET, Azure und Power Platform, für skalierbare, sichere und zukunftsfähige Unternehmenslösungen.',
          cta: 'Mit Microsoft-Experten sprechen',
          statLabels: [
            '.NET-Projekte',
            'Jahre Erfahrung',
            'Azure-Zertifizierungen',
          ],
        },
        features: {
          badge: 'Unsere Expertise',
          title: 'Umfassende Microsoft-Technologieservices',
          description:
            'Maßgeschneiderte Lösungen über den gesamten Microsoft-Stack zur Steigerung Ihrer Geschäftseffizienz.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'Full-Stack .NET-Entwicklung',
              description:
                'Robuste, leistungsstarke Web- und Desktop-Anwendungen mit .NET, ASP.NET und Entity Framework.',
              details:
                'Wir entwerfen .NET-Lösungen mit Microservices, Echtzeit über SignalR, Blazor-WebAssembly-SPAs und API-first-Design, mit Antwortzeiten unter 100 ms.',
              outcomes: [
                'Referenz-.NET-Microservice-Architektur',
                'API-first-Design mit OpenAPI-Verträgen',
                'Echtzeitkanäle über SignalR',
                'CI/CD-Pipelines auf GitHub Actions oder Azure DevOps',
                'Application-Insights-Observability je Service',
              ],
            },
            {
              title: 'Azure-Cloud-Lösungen',
              description:
                'Skalierbare cloud-native Anwendungen, die das volle Microsoft Azure-Ökosystem nutzen.',
              details:
                'Unsere Azure-Praxis umfasst App Services, serverless Functions, AKS-Containerorchestrierung, Cosmos DB und Azure SQL, nach dem Azure Well-Architected Framework.',
              outcomes: [
                'Azure-Landing-Zone mit Policy-Guardrails',
                'Referenz-Workload in zwei Regionen deployed',
                'Cosmos DB- oder Azure-SQL-Datenschicht mit PITR',
                'Bicep-Infrastruktur-Repository übergeben',
                'Kostenbaseline mit Well-Architected-Review',
              ],
            },
            {
              title: 'Power Platform und Business Apps',
              description:
                'Befähigen Sie Ihre Organisation mit Low-Code-Lösungen, automatisierten Workflows und datengetriebener BI.',
              details:
                'Wir liefern Power Apps (Canvas und Model-driven), Power Automate-Flows, Power BI-Dashboards mit Row-Level-Security und Dataverse-Integrationen.',
              outcomes: [
                'Power-Platform-Center-of-Excellence aufgesetzt',
                'Zwei bis vier Power Apps in Produktion',
                'Power-Automate-Flows ersetzen manuelle Übergaben',
                'Power-BI-Dashboards mit Row-Level-Security',
                'Dataverse-Modell durch Ihre IT betreut',
              ],
            },
            {
              title: 'Modernisierung und Migration',
              description:
                'Verwandeln Sie Legacy-.NET-Anwendungen in moderne, cloud-optimierte .NET-Lösungen.',
              details:
                'Unsere Methodik umfasst .NET-Refactoring, On-Prem-zu-Azure-Migration mit Azure Migrate, Monolith-Zerlegung in Microservices und Performance-Optimierung.',
              outcomes: [
                'Portfolio-Assessment und 6-R-Plan',
                'Strangler-Fig-Roadmap mit Quartalsmeilensteinen',
                'Neue Services auf .NET in AKS oder App Service',
                'Performance-Baseline und Migrations-Report',
                'Wissenstransfer für Ihr Engineering-Team',
              ],
            },
            {
              title: 'Microsoft 365 und SharePoint',
              description:
                'Maßgeschneiderte Kollaborationslösungen und Enterprise Content Management auf Microsoft 365 und SharePoint Online.',
              details:
                'Wir bauen SPFx-Lösungen, Teams-App-Integrationen, Microsoft-365-Automatisierungen und moderne Intranet-Portale.',
              outcomes: [
                'SharePoint-Online-Intranet mit Viva Connections',
                'Teams-Toolkit-Apps in tägliche Workflows integriert',
                'Microsoft-Graph-Automatisierungen statt Handoffs',
                'Tenant-Sicherheitsreview mit Secure-Score-Boost',
                'Content-Governance- und Lifecycle-Policies dokumentiert',
              ],
            },
            {
              title: 'Data und KI auf Azure',
              description:
                'Nutzen Sie Azure Machine Learning und Cognitive Services für intelligente Anwendungen mit fortgeschrittenen Insights.',
              details:
                'Wir integrieren Azure OpenAI Service, Cognitive Services (Vision, Speech, Language), Synapse Analytics und Databricks für ML-Workflows.',
              outcomes: [
                'Referenzarchitektur mit Azure OpenAI und AI Search',
                'Cognitive Services in bestehende Apps integriert',
                'Synapse- oder Fabric-Lakehouse mit Semantikmodellen',
                'Databricks-Workflows für fortgeschrittene ML-Pipelines',
                'Application-Insights-Dashboards für KI-Workloads',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title:
            'Anwendungsfälle, die wir mit Microsoft-Technologieservices bedienen',
          description:
            'Von Azure-Migrationen und .NET-Modernisierung bis Power-Platform-Automatisierung, wir lösen reale Microsoft-Stack-Herausforderungen für Unternehmen jeder Größe.',
          items: [
            {
              title: 'Enterprise-Azure-Migration',
              description:
                'Verschieben Sie komplexe On-Premise-Workloads mit Azure Migrate, ASR und bewährten Mustern minimal-störend nach Azure.',
            },
            {
              title: '.NET-Legacy-Modernisierung',
              description:
                'Modernisieren Sie Legacy-.NET-Anwendungen und containerisieren Sie sie auf Azure AKS.',
            },
            {
              title: 'Power Platform Low-Code-Lösungen',
              description:
                'Bauen Sie Abteilungs-Apps, automatisierte Genehmigungsworkflows und Power-BI-Berichte ohne die Kosten individueller Entwicklung.',
            },
            {
              title: 'Azure Data und Analytics-Plattformen',
              description:
                'Entwerfen Sie Azure-Datenplattformen mit Synapse, Data Factory und Power BI für einheitliche Analytik und Reporting.',
            },
            {
              title: 'Microsoft 365 Intranet-Portale',
              description:
                'Bauen Sie moderne SharePoint-Intranets und Teams-Integrationen, die Mitarbeiterengagement und Wissensaustausch verbessern.',
            },
            {
              title: 'Azure-KI- und kognitive Anwendungen',
              description:
                'Betten Sie Azure OpenAI, Form Recognizer, Speech und Computer Vision in Unternehmensanwendungen ein.',
            },
            {
              title: 'Azure-Security und -Compliance',
              description:
                'Implementieren Sie Azure Security Center, Defender, Key Vault und Sentinel für regulierte Cloud-Umgebungen.',
            },
            {
              title: 'Maßgeschneiderte Dynamics 365-Lösungen',
              description:
                'Erweitern und personalisieren Sie Dynamics 365 Sales, Customer Service und Finance mit Plugins, PCF-Controls und Integrationen.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre Microsoft-Investitionen zukunftssicher machen',
          description:
            'Unsere Microsoft-zertifizierten Ingenieure, strukturierten Adoption-Frameworks und der Zugang zum Partnerökosystem sichern maximalen ROI bei jedem Microsoft-Projekt.',
          items: [
            {
              title: 'Microsoft-zertifiziertes Engineering-Team',
              description:
                'Unsere Ingenieure halten über 50 aktive Microsoft-Zertifizierungen in Azure, .NET, Power Platform und Dynamics 365.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                'Wir strukturieren alle Azure-Projekte nach Microsofts CAF, für Best Practices in Sicherheit, Governance und Kostenmanagement.',
            },
            {
              title: 'Azure Well-Architected-Reviews',
              description:
                'Strukturierte Azure Well-Architected-Reviews über Zuverlässigkeit, Sicherheit, Kostenoptimierung, Performance und operative Exzellenz.',
            },
            {
              title: 'Microsoft Partner-Ökosystem',
              description:
                'Als anerkannter Microsoft Partner haben wir Zugriff auf frühe technische Previews, dedizierten Support und Co-Sell-Fähigkeiten.',
            },
            {
              title: 'Power Platform Center of Excellence',
              description:
                'Wir richten Power Platform CoE-Toolkits ein, die Citizen Development steuern und die Adoption messen.',
            },
            {
              title: 'Azure-Data-Spezialisierung',
              description:
                'Tiefe Expertise in Azure Synapse Analytics, Data Factory, Databricks und Cosmos DB für Datenplattformen auf Enterprise-Niveau.',
            },
          ],
        },
        technologies: {
          badge: 'Microsoft-Stack',
          title: 'Microsoft-Ökosystem und Tooling',
          description:
            'Unsere tiefe Expertise in Microsoft-Technologien sichert die richtigen Werkzeuge für Ihre spezifischen Anforderungen.',
          categories: [
            '.NET',
            'Azure-Services',
            'Daten und Speicher',
            'Power Platform',
            'DevOps und Tooling',
            'Kollaboration',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Enterprise Services',
          title: 'Softwarelösungen auf Enterprise-Niveau',
          highlight: 'Enterprise-Niveau',
          description:
            'Stärken Sie Ihr Unternehmen mit maßgeschneiderten, skalierbaren Lösungen für komplexe Anforderungen. Von ERP-Implementierungen bis zur Legacy-Modernisierung.',
          cta: 'Ihre Enterprise-Anforderungen besprechen',
          statLabels: [
            'Enterprise-Kunden',
            'Transaktionen / Tag',
            'Compliance-bereit',
          ],
        },
        features: {
          badge: 'Kernkompetenzen',
          title: 'Vollständige Enterprise-Services',
          description:
            'Umfassende Services für Unternehmenstransformation und digitale Modernisierung.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'Maßgeschneiderte Unternehmensanwendungen',
              description:
                'Skalierbare, geschäftskritische Anwendungen für komplexe Anforderungen und hohe Transaktionsvolumen.',
              details:
                'Wir entwerfen Unternehmenssysteme mit Domain-Driven Design, Event-Driven-Patterns und horizontaler Skalierbarkeit, Millionen täglicher Transaktionen mit Multi-Tenant-Isolation und 99,99% SLA.',
              outcomes: [
                'Domänenmodell mit Bounded Contexts dokumentiert',
                'Event-Driven-Referenzarchitektur und Verträge',
                'Multi-Tenant-Isolation-Pattern und SDK',
                'Audit Trail und Compliance-Reporting eingebaut',
                'SLA-Dashboard mit Error Budgets verknüpft',
              ],
            },
            {
              title: 'ERP- und CRM-Lösungen',
              description:
                'SAP-, Oracle-, Salesforce- und Dynamics-Implementierungen mit tiefer Anpassung und nahtloser Integration.',
              details:
                'Unsere ERP- und CRM-Praxis deckt den gesamten Lebenszyklus ab, von Anforderungsmapping und Datenmigration bis zu individuellem Modul-Development, Drittanbieter-Integrationen, Schulungen und Hypercare-Support.',
              outcomes: [
                'Funktionale und technische Anforderungen freigegeben',
                'Datenmigrationsplan mit Bereinigung und Validierung',
                'Individuelle Module und Integrationen geliefert',
                'Endanwender-Schulung und Adoption-Playbook',
                'Hypercare- und Post-Go-Live-Support-Fenster',
              ],
            },
            {
              title: 'Geschäftsprozessautomatisierung',
              description:
                'Optimieren Sie den Betrieb mit RPA, Workflow-Automatisierung und digitaler Prozessoptimierung.',
              details:
                'Wir implementieren Hyperautomatisierungsstrategien mit UiPath- oder Power-Automate-Bots, intelligenten Genehmigungsworkflows, Process Mining und Digital Twins, mit Produktivitätsgewinnen von 40 bis 70%.',
              outcomes: [
                'Prozessinventar mit priorisierten Kandidaten',
                'Top-drei RPA-Bots in Produktion mit Monitoring',
                'Genehmigungsworkflows ersetzen E-Mail und Papier',
                'Process-Mining-Dashboards für Verbesserungen',
                'Produktivitätsbaseline und Post-Automation-Report',
              ],
            },
            {
              title: 'Legacy-Modernisierung',
              description:
                'Verwandeln Sie Legacy-Systeme in moderne, cloud-native Architekturen unter Erhalt der kritischen Funktionalität.',
              details:
                'Unser Modernisierungs-Playbook nutzt Strangler-Fig-Patterns, API-Wrapping und phasenweise Migrationen, mit null Geschäftsunterbrechung bei der Ablösung von COBOL, Delphi oder Java-Monolithen.',
              outcomes: [
                'Anwendungs-Portfolio-Assessment mit Risikoscoring',
                'Strangler-Fig-Roadmap mit Phasenplan',
                'API-Gateway vor dem Legacy-System',
                'Neue Services auf cloud-nativen Runtimes',
                'Decommissioning-Checkliste für Altkomponenten',
              ],
            },
            {
              title: 'Enterprise-Integration',
              description:
                'Integrieren Sie heterogene Systeme mit API-first-, Microservices-Architektur und Event-Bussen.',
              details:
                'Wir entwerfen Enterprise-Integrationshubs mit MuleSoft, Apache Kafka und cloud-nativen iPaaS-Plattformen für Echtzeit-Synchronisation zwischen ERP, CRM, HRMS, Finance und Drittanbieter-SaaS.',
              outcomes: [
                'Integrationsarchitektur mit API- und Event-Verträgen',
                'MuleSoft-, Kafka- oder iPaaS-Plattform aufgesetzt',
                'Wiederverwendbare Konnektoren für Top-Systeme',
                'Echtzeit-Sync statt nächtlicher Batchläufe',
                'End-to-End-Observability der Integrationsflüsse',
              ],
            },
            {
              title: 'Security und Compliance',
              description:
                'Enterprise-Sicherheit, Compliance-Frameworks und Governance für regulierte Branchen und kritische Systeme.',
              details:
                'Unsere Sicherheitspraxis implementiert SOC 2, ISO 27001 und branchenspezifische Compliance-Kontrollen mit Zero-Trust, RBAC, automatisiertem Pen-Testing und Auditing.',
              outcomes: [
                'Zero-Trust-Netzwerk-Referenzarchitektur',
                'RBAC- und Identitätsmodell dokumentiert',
                'Mapping der SOC 2- und ISO 27001-Kontrollen',
                'Automatisiertes Pen-Testing im CI/CD',
                'Audit-Logging und SIEM-Integration aktiviert',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title:
            'Anwendungsfälle, die wir mit Enterprise-Software-Services bedienen',
          description:
            'Wir arbeiten mit Enterprise-Teams in BFSI, Gesundheit, Industrie und Verwaltung an komplexen, geschäftskritischen Software-Herausforderungen.',
          items: [
            {
              title: 'Globale Enterprise-Rollouts',
              description:
                'Entwerfen und deployen Sie Multi-Region-, Multi-Sprach-Anwendungen für Tausende interner und externer Nutzer.',
            },
            {
              title: 'Ablösung von Legacy-Systemen',
              description:
                'Setzen Sie alternde COBOL-, Delphi- oder Java-Monolithen sicher außer Betrieb und ersetzen Sie sie durch moderne Plattformen.',
            },
            {
              title: 'Workflow- und Genehmigungsautomatisierung',
              description:
                'Automatisieren Sie mehrstufige Genehmigungen, Dokumenten-Routing und auditierbare Workflows über Abteilungen hinweg.',
            },
            {
              title: 'Enterprise-Analytics und Reporting',
              description:
                'Bauen Sie eingebettete Analytik, Echtzeit-Dashboards und Self-Service-BI für Operations, Finance und Management.',
            },
            {
              title: 'Microservices-Zerlegung',
              description:
                'Zerlegen Sie monolithische Enterprise-Apps in unabhängig deploybare, geschäftsorientierte Microservices.',
            },
            {
              title: 'Systemintegrations-Hubs',
              description:
                'Bauen Sie Integrationshubs, die ERP, CRM, HRMS, Finance und Drittanbieter-SaaS in Echtzeit verbinden.',
            },
            {
              title: 'Compliance in regulierten Branchen',
              description:
                'Maßgeschneiderte Compliance-Lösungen für BFSI, Gesundheit und Verwaltung mit strengen Audit-, Daten- und Sicherheitsstandards.',
            },
            {
              title: 'KI-gestützte Enterprise-Apps',
              description:
                'Integrieren Sie KI in Enterprise-Anwendungen, intelligente Suche, Dokumentverarbeitung, prädiktive Alerts und Entscheidungsunterstützung.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre Unternehmenssysteme zukunftssicher machen',
          description:
            'Unser Domain-Driven-Ansatz, das bewährte Modernisierungs-Playbook und die Security-first-Kultur liefern Lösungen, die Jahrzehnte halten.',
          items: [
            {
              title: 'Domain-Driven Design-Expertise',
              description:
                'Wir modellieren komplexe Enterprise-Domänen mit DDD-Prinzipien, Bounded Contexts, Aggregate und Ubiquitous Language richten Software an der Realität aus.',
            },
            {
              title: 'Enterprise-Sicherheit und -Governance',
              description:
                'Sicherheit ist keine Nachgedanke, wir implementieren Zero-Trust, RBAC, Secrets-Management und automatisierte Compliance vom ersten Tag.',
            },
            {
              title: 'Bewährte Modernisierungsmethodik',
              description:
                'Unser kampferprobtes Playbook minimiert Geschäftsrisiken mit Strangler Fig, Feature-Parity-Tests und phasenweisen Migrationen.',
            },
            {
              title: 'Tiefe Integrationsexpertise',
              description:
                'Zertifizierte Expertise in MuleSoft, Apache Kafka und großen iPaaS-Plattformen zur Verbindung komplexer Anwendungslandschaften.',
            },
            {
              title: 'Hyperautomatisierung und RPA',
              description:
                'Wir kombinieren RPA, KI und Workflow-Automatisierung, um manuelle Prozesse zu eliminieren und messbare Produktivität zu liefern.',
            },
            {
              title: 'Ergebnisorientierte Lieferung',
              description:
                'Jedes Projekt wird an Geschäftszielen ausgerichtet, wir definieren messbare KPIs und berichten kontinuierlich.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-Stack',
          title: 'Enterprise-Technologieplattform',
          description:
            'Bewährte Enterprise-Technologien für geschäftskritische Systeme.',
          categories: [
            'Enterprise-Plattformen',
            'Geschäftsprozesse',
            'Backend und APIs',
            'Datenbanken',
            'Integration',
            'Enterprise-Tools',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Data Engineering',
          title: 'Bauen Sie Datenlösungen auf Enterprise-Skala',
          highlight: 'Enterprise-Skala',
          description:
            'Erschließen Sie den Wert Ihrer Daten mit skalierbaren Pipelines, Warehouses und Analytics-Plattformen. Wir konzipieren und implementieren Datenlösungen für komplexe Anforderungen und massive Volumina.',
          cta: 'Ihr Datenprojekt starten',
          statLabels: ['Verarbeitete Daten', 'Stream-Latenz', 'Pipeline-SLO'],
        },
        features: {
          badge: 'Kernkompetenzen',
          title: 'Vollständige Data-Engineering-Services',
          description:
            'Von der Architektur bis zum Deployment und Betrieb von Enterprise-Datenlösungen.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'Daten-Pipeline-Architektur',
              description:
                'Skalierbare ETL- und ELT-Pipelines, die massive Datenvolumen mit hoher Zuverlässigkeit und ohne Datenverlust verarbeiten.',
              details:
                'Wir architektieren idempotente, SLA-getriebene Pipelines mit Schema-Evolution, Dead-Letter-Queues und automatisierten Retries, Milliarden Datensätze täglich mit voller Observability.',
              outcomes: [
                'Referenz-Pipeline-Framework mit Retry und DLQ',
                'Schema-Registry mit Versionierung und Verträgen',
                'SLA-Dashboards und Freshness-Monitoring',
                'Backfill- und Replay-Tooling für Historien',
                'CI/CD-Pipeline für Transformationen',
              ],
            },
            {
              title: 'Data-Warehouse-Lösungen',
              description:
                'Moderne Data Warehouses auf cloud-nativen Technologien für Analytik, Reporting und BI.',
              details:
                'Von dimensionaler Modellierung mit Star- und Snowflake-Schemas über spaltenorientierte Speicherung bis BI-Konnektivität, wir bauen Warehouses, die Analytik im Petabyte-Bereich schnell servieren.',
              outcomes: [
                'Dimensionales Modell mit dokumentierter Granularität',
                'Optimiertes Partitionierungs- und Clustering-Layout',
                'Inkrementelle Materialized Views für Top-Queries',
                'Zertifizierte Semantikschicht in Looker oder Power BI',
                'Kostenmodell und Slots- oder Kapazitätsstrategie',
              ],
            },
            {
              title: 'Echtzeit-Datenverarbeitung',
              description:
                'Stream-Verarbeitung und Echtzeit-Analytik auf Apache Kafka, Flink und Spark Streaming für Sub-Sekunden-Insights.',
              details:
                'Wir entwerfen event-getriebene Architekturen mit Exactly-once-Semantik, CDC und Latenzen unter 5 ms, für Live-Dashboards, Betrugserkennung und operative Alerts.',
              outcomes: [
                'Kafka-Topics mit Schema-Registry-Verträgen',
                'Flink- oder Spark-Streaming-Jobs in Produktion',
                'CDC-Konnektoren aus operativen Datenbanken',
                'Exactly-once-Patterns dokumentiert',
                'Live-Dashboards mit Sub-Sekunden-Frische',
              ],
            },
            {
              title: 'Data-Lake-Management',
              description:
                'Enterprise-Data-Lakes mit Governance, Qualität und Metadaten-Management auf offenen Tabellenformaten.',
              details:
                'Wir implementieren Delta Lake, Apache Iceberg und Hudi-basierte Lakehouses mit automatisiertem Katalog, feingranularer Zugriffskontrolle und kostenoptimierten Speicherrichtlinien.',
              outcomes: [
                'Offenes Lakehouse auf Delta, Iceberg oder Hudi',
                'Automatisierter Datenkatalog mit reichen Metadaten',
                'Feingranulare Zugriffsrichtlinien zur Abfragezeit',
                'Lifecycle- und Tiering-Regeln für Storage',
                'Compaction und Small-File-Management automatisiert',
              ],
            },
            {
              title: 'Datenintegration',
              description:
                'Verbinden und harmonisieren Sie Daten aus mehreren Quellen mit robuster Qualitätssicherung und Lineage-Tracking.',
              details:
                'Wir bauen API-Konnektoren, CDC-Pipelines und Reverse-ETL-Flows mit automatisiertem Quality-Scoring und vollständigem Lineage.',
              outcomes: [
                'Wiederverwendbare API- und CDC-Konnektor-Bibliothek',
                'Reverse-ETL-Flows zurück in operative Systeme',
                'Datenqualität-Scoring auf jedem Datensatz',
                'End-to-End-Lineage für Business-User sichtbar',
                'Incident-Response-Runbooks für Datenausfälle',
              ],
            },
            {
              title: 'Datensicherheit und -Governance',
              description:
                'Governance-Frameworks mit Compliance, Sicherheit, Datenschutz und automatisierter Policy-Durchsetzung.',
              details:
                'Unsere Frameworks decken DSGVO, HIPAA und CCPA-Compliance, PII-Auto-Erkennung und -Maskierung, Rollen-basierte Zugriffe, Verschlüsselung und Audit-Logging ab.',
              outcomes: [
                'PII-Erkennung und Maskierungsregeln je Datensatz',
                'RBAC- und ABAC-Policies erzwungen',
                'Verschlüsselung im Ruhezustand und Transit geprüft',
                'Audit-Logs an SIEM gestreamt',
                'Regulatorisches Mapping für DSGVO, HIPAA, CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title:
            'Anwendungsfälle, die wir mit Data-Engineering-Services bedienen',
          description:
            'Wir bedienen datenintensive Organisationen in Finance, Retail, Healthcare und SaaS, mit zuverlässiger, governte und skalierbarer Dateninfrastruktur.',
          items: [
            {
              title: 'Customer-360-Plattformen',
              description:
                'Vereinheitlichen Sie Kundendaten aus CRM, Web, Mobile und Support in einer einzigen Echtzeit-Sicht.',
            },
            {
              title: 'Echtzeit-Analytics-Dashboards',
              description:
                'Streamen Sie operative Daten in Live-Dashboards für Reporting, Sales Ops und Customer Success.',
            },
            {
              title: 'Multi-Source-Datenintegration',
              description:
                'Harmonisieren Sie Daten aus ERP, CRM, Marketing und IoT in einer sauberen, gouvernierten Datenschicht.',
            },
            {
              title: 'Pipelines für Finanzdaten',
              description:
                'Bauen Sie auditierbare Pipelines für Finanzreporting, regulatorische Einreichungen und Risikomodell-Daten.',
            },
            {
              title: 'Datenplattform-Modernisierung',
              description:
                'Migrieren Sie Legacy-Hadoop oder On-Premise-Warehouses auf Snowflake, BigQuery oder Synapse.',
            },
            {
              title: 'IoT-Datenaufnahme und -verarbeitung',
              description:
                'Verarbeiten Sie Millionen IoT-Events pro Sekunde aus Geräten, Sensoren und Edge-Knoten.',
            },
            {
              title: 'Compliance-Datenmanagement',
              description:
                'Automatisieren Sie Datenklassifikation, Einwilligungs-Tracking und Aufbewahrungsrichtlinien für DSGVO, HIPAA und CCPA.',
            },
            {
              title: 'ML-Feature-Stores',
              description:
                'Bauen Sie zentrale Feature Stores, die ML-Features beim Training und der Inferenz konsistent bereitstellen.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre Datenplattform zukunftssicher machen',
          description:
            'Unsere DataOps-first-Kultur, tiefe Cloud-Expertise und das Bekenntnis zu Datenqualität machen Ihre Datenplattform zu einem echten Wettbewerbsvorteil.',
          items: [
            {
              title: 'Moderne Datenarchitektur',
              description:
                'Wir entwerfen Architekturen mit Lakehouse-Patterns, die die Flexibilität von Data Lakes und die Performance von Warehouses verbinden.',
            },
            {
              title: 'DataOps und Automatisierung',
              description:
                'Unsere DataOps-Praktiken bringen CI/CD, Tests und Monitoring in Pipelines, mit kürzerer Time-to-Insight und sicherer Qualität.',
            },
            {
              title: 'Echtzeit-Streaming-Expertise',
              description:
                'Tiefe Hands-on-Expertise in Kafka, Flink und Spark Streaming für event-getriebene, latenzarme Architekturen.',
            },
            {
              title: 'Data-Governance und -Qualität',
              description:
                'Wir betten automatisierte Qualitätsprüfungen, Schema-Registries und Lineage-Tracking ein, für zuverlässige und auditfähige Daten.',
            },
            {
              title: 'Cloud-Data-Warehouse-Spezialisten',
              description:
                'Zertifizierte Expertise in Snowflake, BigQuery, Redshift und Azure Synapse, von Architektur bis Query-Optimierung.',
            },
            {
              title: 'Regulatorische Compliance integriert',
              description:
                'Alle Pipelines werden mit Compliance vom ersten Tag entworfen, Maskierung, Verschlüsselung und Audit-Trails.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-Stack',
          title: 'Moderner Data-Engineering-Stack',
          description:
            'Wir setzen Best-in-Class-Tools und -Plattformen für zuverlässige, skalierbare Lösungen ein.',
          categories: [
            'Cloud Data Warehouses',
            'Stream Processing',
            'ETL/ELT-Tools',
            'Data Lakes',
            'Speicher und Verarbeitung',
            'Monitoring und Tools',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Digital- und Experience-Engineering',
          title: 'Verbundene digitale Erlebnisse, die konvertieren',
          highlight: 'Erlebnisse',
          description:
            'Wir entwerfen und ingenieren end-to-end digitale Erlebnisse mit Fokus auf Usability, Barrierefreiheit und Geschäftsergebnisse über Web- und Mobile-Touchpoints.',
          cta: 'Ihr Design-Projekt starten',
          statLabels: [
            'Durchschnittliche Conversion-Steigerung',
            'Barrierefreiheit',
            'Design Systems',
          ],
        },
        features: {
          badge: 'Kernkompetenzen',
          title: 'Umfassende Digital- und Experience-Engineering-Services',
          description:
            'Von Nutzerforschung über Design Systems bis zur Produktionsimplementierung.',
          outcomesTitle: 'Was wir liefern',
          items: [
            {
              title: 'User-Experience-Design',
              description:
                'Forschungsbasiertes UX-Design, das intuitive, barrierefreie und begeisternde Erlebnisse schafft.',
              details:
                'Wir führen Journey Mapping, Wettbewerbsaudits und Usability-Tests durch. Unsere WCAG-konformen Designs verkürzen die Aufgabenerfüllung um 30 bis 50%.',
              outcomes: [
                'Journey Maps für die wichtigsten Nutzerflüsse',
                'Usability-Test-Reports mit priorisierten Fixes',
                'WCAG-konforme Interaktionsmuster',
                'Informationsarchitektur und Sitemap',
                'High-Fi-Prototypen für die Engineering-Übergabe',
              ],
            },
            {
              title: 'User-Interface-Design',
              description:
                'Modernes UI-Design im Einklang mit Markenidentität, Design System und Nutzererwartungen.',
              details:
                'Unsere UI-Praxis liefert markengerechte Interfaces mit Mikro-Interaktionen, adaptiven Hell- und Dunkelthemen, fluiden Responsive-Layouts und Motion Design, alles auf einem Token-basierten Design System.',
              outcomes: [
                'Markengerechtes UI-Kit mit dokumentierten Zuständen',
                'Tokens für Hell- und Dunkelthemen definiert',
                'Mikro-Interaktions- und Motion-Guidelines',
                'Responsives Grid- und Breakpoint-System',
                'Figma-Library mit Nutzungsdoku übergeben',
              ],
            },
            {
              title: 'Web-Design',
              description:
                'Responsives, performance-optimiertes Web-Design, das Nutzer in Kunden verwandelt.',
              details:
                'Wir entwerfen conversion-orientierte Web-Erlebnisse, optimiert für Core Web Vitals wie LCP, CLS und FID, mit überzeugender Hierarchie und strategischer CTA-Platzierung.',
              outcomes: [
                'Konversionsorientierte Landingpage-Designs',
                'Core-Web-Vitals-Ziele vorab abgestimmt',
                'Animations-Specs im Performance-Budget',
                'A/B-Varianten für Top-Funnels',
                'Handover-Paket mit Assets für die Entwicklung',
              ],
            },
            {
              title: 'Mobile-App-Design',
              description:
                'Intuitive Mobile-Erlebnisse für iOS und Android nach HIG-Standards.',
              details:
                'Wir entwerfen nativ wirkende Mobile-Erlebnisse nach Apple HIG und Material Design 3, mit Gesten-Interaktionen und plattformübergreifender Parität.',
              outcomes: [
                'Native iOS- und Android-Designspezifikationen',
                'Plattformspezifische Navigation und Patterns',
                'Gesten- und Haptik-Guidelines',
                'Onboarding- und Erstnutzer-Erlebnis',
                'App Store- und Play Store-Creative-Assets',
              ],
            },
            {
              title: 'Nutzerforschung',
              description:
                'Umfassende Forschung, Tests und Analytik zur Validierung von Designentscheidungen mit echten Nutzerdaten.',
              details:
                'Unsere Forschungspraxis umfasst ethnografische Studien, moderierte Usability-Tests, A/B-Experimente, Heatmaps, Card Sorting und quantitative Analytik.',
              outcomes: [
                'Forschungsplan mit Erfolgskriterien',
                'Moderierte und unmoderierte Testberichte',
                'Persona- und JTBD-Dokumentation',
                'Quantitative Analytik-Review mit Erkenntnissen',
                'Priorisiertes Backlog an Verbesserungen',
              ],
            },
            {
              title: 'Design Systems',
              description:
                'Skalierbare Design Systems und Komponentenbibliotheken, die Produktteams beschleunigen.',
              details:
                'Wir architektieren Token-getriebene Design Systems in Figma mit Auto-Layout-Komponenten, Variantenstrukturen, Storybook-Implementierungen und versionierten Release-Workflows.',
              outcomes: [
                'Design-Tokens für Farbe, Abstand und Typografie',
                'Figma-Komponentenbibliothek mit Varianten',
                'Storybook-Implementierung in Ihrem Tech-Stack',
                'Versionierungs- und Release-Prozess dokumentiert',
                'Adoption-Playbook und Governance-Modell',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Anwendungsfälle',
          title:
            'Anwendungsfälle, die wir mit Experience-Design-Services bedienen',
          description:
            'Wir arbeiten mit SaaS-, E-Commerce-, Fintech- und Enterprise-Teams an Erlebnissen, die Nutzer lieben und Unternehmen messen.',
          items: [
            {
              title: 'Produkt-Redesigns und Revamps',
              description:
                'Verwandeln Sie veraltete Interfaces in moderne, conversion-getriebene Erlebnisse ohne Disruption.',
            },
            {
              title: 'Mobile-App-UX-Überarbeitungen',
              description:
                'Redesignen Sie Mobile-Apps mit verbessertem Onboarding, weniger Reibung und nativen Patterns.',
            },
            {
              title: 'E-Commerce-Erlebnis-Design',
              description:
                'Entwerfen Sie Produktentdeckung, Warenkorb und Checkout, die Abbrüche reduzieren und den Warenkorbwert erhöhen.',
            },
            {
              title: 'Enterprise-Dashboard-Design',
              description:
                'Erstellen Sie datenreiche Dashboards mit klarer visueller Hierarchie für Operations, Analytics und Management.',
            },
            {
              title: 'Erstellung von Design Systems',
              description:
                'Bauen Sie skalierbare Figma-Bibliotheken und Storybook-Implementierungen als Single Source of Truth.',
            },
            {
              title: 'Digitale Markenidentität',
              description:
                'Entwickeln Sie kohärente digitale Identitäten, Logos, Typografie, Farbsysteme und Motion Design.',
            },
            {
              title: 'Barrierefreiheits-Sanierung',
              description:
                'Auditieren Sie Produkte gegen WCAG 2.2 und implementieren Sie systematische Korrekturen.',
            },
            {
              title: 'Onboarding-Design',
              description:
                'Entwerfen Sie Aktivierungsflüsse, die neue Nutzer schneller zum "Aha-Moment" führen.',
            },
          ],
        },
        expertise: {
          badge: 'Warum wir',
          title:
            'Präzision, Expertise und Tools, die Ihre digitale Erfahrung zukunftssicher machen',
          description:
            'Unsere forschungsgeführte, ergebnisorientierte Designpraxis vereint kreative Exzellenz mit ingenieurmäßiger Strenge.',
          items: [
            {
              title: 'Forschungsbasiertes Design',
              description:
                'Jede Designentscheidung beruht auf echten Nutzerdaten, Interviews, Usability-Tests, Heatmaps und Analytik.',
            },
            {
              title: 'Conversion-Rate-Optimierung',
              description:
                'Wir designen mit messbaren Geschäftsergebnissen im Blick, A/B-Tests, Funnel-Analysen und Optimierung liefern 2x+ Conversion-Steigerungen.',
            },
            {
              title: 'Design-to-Code-Präzision',
              description:
                'Unsere Designer arbeiten Hand in Hand mit Frontend-Engineers für pixelgenaue, performante Implementierung.',
            },
            {
              title: 'Performance-orientiertes Web-Design',
              description:
                'Wir optimieren Designs für Core Web Vitals, LCP, CLS, FID, für schöne und schnelle Seiten.',
            },
            {
              title: 'Barrierefreiheit als Standard',
              description:
                'WCAG 2.2-Konformität ist in jedem Projekt enthalten, Kontrast, Tastatur-Navigation, ARIA-Rollen und Screenreader-Tests.',
            },
            {
              title: 'Skalierbare Design Systems',
              description:
                'Wir bauen Token-getriebene Figma-Bibliotheken und Storybook-Komponenten, die über mehrere Produkte und Teams skalieren.',
            },
          ],
        },
        technologies: {
          badge: 'Design-Stack',
          title: 'Moderne Design- und Entwicklungswerkzeuge',
          description:
            'Wir nutzen branchenführende Tools, um außergewöhnliche Designs zu schaffen und auszuliefern.',
          categories: [
            'Design-Tools',
            'Prototyping',
            'Nutzerforschung',
            'Web-Technologien',
            'Frontend-Frameworks',
            'Kollaboration',
          ],
        },
      },
    },
  },
  nl: {
    nav: {
      company: 'Bedrijf',
      services: 'Diensten',
      engineering: 'Engineering',
      industries: 'Sectoren',
      partners: 'Partners',
      insights: 'Inzichten',
      careers: 'Carrières',
      aboutUs: 'Over Ons',
      contactUs: 'Contact Opnemen',
      howWeWork: 'Onze Werkwijze',
      ai: 'AI',
      dataAnalytics: 'Data & Analyse',
      cloud: 'Cloud',
      microsoftTechnologies: 'Microsoft Technologieën',
      experienceDesign: 'Ervaringsontwerp',
      cmsDevelopment: 'CMS Ontwikkeling',
      digitalMarketing: 'Digitale Marketing',
      qualityAssurance: 'Kwaliteitsborging',
      financialServices: 'Financiële Diensten',
      healthcareLifeSciences: 'Gezondheidszorg en Levenswetenschappen',
      retailEcommerce: 'Detailhandel en E-commerce',
      supplyChainLogistics: 'Supply Chain en Logistiek',
      hiTechDigitalNatives: 'Hi-Tech en Digital Natives',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Case Studies',
      blogs: 'Blog',
      hireTalent: 'Talent inhuren',
      aiEngineering: 'AI/ML Engineering',
      cloudDevOpsEngineering: 'Cloud & DevOps Engineering',
      dataEngineering: 'Data Engineering',
      digitalExperienceEngineering: 'Digitale & Experience Engineering',
      enterpriseServices: 'Enterprise Services',
    },
    common: {
      contactUs: 'Contact Opnemen',
      getStarted: 'Aan de Slag',
      language: 'Taal',
      quickContact: 'Snel Contact',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy: 'Vertrouwd door toekomstgerichte bedrijven wereldwijd',
      title: 'Bouw Intelligente Systemen die Schalen',
      titleHighlight: 'Uw Bedrijf',
      subtitle:
        'Softwareoplossingen op maat, ontworpen om complexe problemen te vereenvoudigen en wereldwijde bedrijfsgroei te stimuleren.',
      scheduleMeeting: 'Gesprek Inplannen',
      viewCaseStudies: 'Bekijk Case Studies',
      projectsDelivered: 'Projecten Geleverd',
      happyClients: 'Tevreden Klanten',
      globalOffices: 'Wereldwijde Kantoren',
      expertDevelopers: 'Expert Ontwikkelaars',
      featureAiTitle: 'AI-gestuurd',
      featureAiDesc: 'Intelligente Automatisering',
      featureMicrosoftTitle: 'Microsoft-expertise',
      featureMicrosoftDesc: 'Cloud, Data, Beveiliging',
      featureCustomTitle: 'Oplossingen op Maat',
      featureCustomDesc: 'Gebouwd voor Uw Bedrijf',
    },
    services: {
      badge: 'Wat We Doen',
      title: 'Diensten Die We Aanbieden',
      subtitle:
        'Van backend-architectuur tot digitale marketing, wij bieden end-to-end softwareontwikkelingsdiensten op maat voor uw bedrijf.',
      learnMore: 'Meer informatie',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Sectoren',
      title: 'Sectoren Die We Bedienen',
      subtitle:
        'We brengen diepe domeinexpertise in diverse sectoren en leveren oplossingen op maat die echte zakelijke impact maken.',
    },
    technologies: {
      badge: 'Technologieën',
      title: 'Technologieën Waarmee We Oplossingen Creëren',
      subtitle:
        'We maken gebruik van geavanceerde technologieën om hoogwaardige, schaalbare oplossingen voor uw bedrijf te bouwen.',
    },
    whyChooseUs: {
      badge: 'WAAROM KIEZEN VOOR COGTIX',
      title: 'Expertise die u kunt vertrouwen',
      titleHighlight: 'Expertise',
      subtitle:
        'Wij brengen een schat aan ervaring en diepe expertise in moderne technologische oplossingen, gecombineerd met een toewijding aan transparantie en betrouwbaarheid.',
      trackRecord: 'Bewezen Track Record',
      certifiedExperts: 'Gecertificeerde Experts',
      clientCentric: 'Klantgerichte Aanpak',
      innovativeSolutions: 'Innovatieve Oplossingen',
      endToEndSupport: 'End-to-End Ondersteuning',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Neem Contact Op',
      heroSubtitle:
        'Heeft u een project in gedachten? Laten we bespreken hoe we uw bedrijf kunnen helpen groeien met onze technologische oplossingen op maat.',
      badge: 'Neem Contact Op',
      title: 'Laten We Samen Iets Geweldigs Bouwen',
      subtitle:
        'Vul het onderstaande formulier in en ons team neemt binnen 24 uur contact met u op.',
      infoTitle: 'Contactgegevens',
      infoSubtitle:
        'Neem contact met ons op en laten we bespreken hoe we uw bedrijf kunnen helpen transformeren met technologie.',
      locationSummary: 'USA • India • Australië • UK',
      avgResponsePrefix: 'Gemiddelde reactietijd:',
      avgResponseValue: 'binnen 2 uur',
      firstName: 'Voornaam *',
      lastName: 'Achternaam *',
      emailAddress: 'E-mailadres *',
      phoneNumber: 'Mobiel Nummer *',
      message: 'Bericht *',
      sendMessage: 'Bericht Verzenden',
      sending: 'Verzenden…',
      submitSuccess:
        'Bedankt. Uw bericht is succesvol verzonden. We nemen snel contact met u op.',
      submitError:
        'Er ging iets mis. Probeer het opnieuw of mail ons rechtstreeks.',
      scheduleTitle: 'Een gesprek inplannen',
      scheduleSubtitle:
        'Kies een tijd die u uitkomt. Wij bevestigen uw afspraak en sturen een agenda-uitnodiging.',
    },
    aboutUs: {
      badge: 'Ons Bedrijf',
      title: 'Van Idee tot Impact',
      subtitle:
        'Opgericht door een team van toegewijde vernieuwers, is Cogtix Solutions ontstaan uit een fundamenteel concept: bedrijven helpen de mogelijkheden van moderne technologie te benutten voor hun digitale evolutie.',
      heroTitle: 'Innovatie Stimuleren via Technologie',
      heroSubtitle:
        'Cogtix Solutions is een toonaangevende technologiepartner die bedrijven over de hele wereld helpt hun digitale landschap te transformeren door middel van intelligente software-engineering.',
      whoWeAreTitle: 'Wie We Zijn',
      whoWeAreContent:
        'Opgericht met de visie om complexe technologie voor bedrijven te vereenvoudigen, is Cogtix Solutions uitgegroeid tot een multidisciplinair team van experts die zich toeleggen op het bouwen van toekomstbestendige digitale producten.',
      missionTitle: 'Onze Missie',
      missionContent:
        'Bedrijven wereldwijd versterken door het leveren van geavanceerde, schaalbare en veilige technologische oplossingen die groei, efficiëntie en digitale transformatie stimuleren.',
      visionTitle: 'Onze Visie',
      visionContent:
        'De wereldwijde leider worden in digital engineering, erkend voor onze toewijding aan uitmuntendheid, innovatie en het creëren van positieve impact door middel van technologie.',
      valuesTitle: 'Onze Kernwaarden',
      valuesSubtitle:
        'De principes die alles wat we doen leiden, van onze code tot onze klantrelaties.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Erkenning',
      title: 'Bekroonde Uitmuntendheid',
      subtitle:
        'Wereldwijd erkend voor uitmuntendheid in ontwikkeling en innovatieve oplossingen.',
    },
    offices: {
      badge: 'Onze Kantoren',
      title: 'Gevestigd Over de Hele Wereld',
      subtitle:
        'Met kantoren op vier continenten zijn we altijd dicht bij onze klanten.',
    },
    clients: {
      trustedBy: 'Vertrouwd door toonaangevende bedrijven wereldwijd',
    },
    footer: {
      company: 'Bedrijf',
      engineering: 'Engineering',
      contactUs: 'Contact Opnemen',
      chatWithUs: 'Chat met ons',
      privacyPolicy: 'Privacybeleid',
      designedBy: 'Ontworpen door',
      rightsReserved: 'Alle rechten voorbehouden.',
      description:
        'Een toonaangevend softwareontwikkelingsbedrijf dat bekend staat om agile en op maat gemaakte methodologieën.',
      home: 'Home',
      aboutUs: 'Over Ons',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      careers: 'Carrières',
      contactUsLink: 'Contact',
      aiEngineering: 'AI/ML Engineering',
      digitalProductEngineering: 'Digitale Product Engineering',
      cloudDevOpsEngineering: 'Cloud & DevOps Engineering',
      dataEngineering: 'Data Engineering',
      experienceEngineering: 'Digitale & Experience Engineering',
      enterpriseServices: 'Enterprise Services',
      status: 'Status',
    },
    testimonials: {
      badge: 'Getuigenissen',
      title: 'Wat ze over ons zeggen',
      subtitle: 'Klantverhalen',
      description:
        'Dynamisch initiëren van marktpositionering, totale koppeling met clicks-and-mortar technologie, overtuigende data voor geavanceerde markten.',
      stats: {
        implementations: '12+',
        implementationsLabel: 'Succesvolle Implementatie',
        minds: '21+',
        mindsLabel: 'Briljante Geesten',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project\'s timelines and requirements, and internal stakeholders were impressed with the service provider/s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'Wat onze klanten zeggen',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'AI en Machine Learning',
          title: 'Breng intelligentie naar uw kernbedrijfsprocessen',
          highlight: 'intelligentie',
          description:
            'Wij helpen u om van AI-experimenten naar productieklare systemen te gaan, met sterke datafundamenten, duidelijke evaluatie en betrouwbare operationele eigenaarschap.',
          cta: 'Start uw AI-project',
          statLabels: [
            'Geleverde AI-modellen',
            'GenAI-trajecten',
            'Pipeline-beschikbaarheid',
          ],
        },
        features: {
          badge: 'Kerncompetenties',
          title: 'Onze AI/ML-diensten',
          description:
            'Van GenAI en data science tot ML-engineering en MLOps, wij dekken de volledige AI-levenscyclus af.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'Generatieve AI',
              description:
                'Custom GPT, LLM-integratie en generatieve AI-applicaties gebouwd met Claude, GPT-4 en open-source modellen.',
              details:
                'We ontwerpen en deployen productiewaardige GenAI-systemen, inclusief RAG-pipelines, multi-agent architecturen en domeinspecifieke fine-tuned modellen, voor geautomatiseerde contentcreatie, codegeneratie en intelligente documentverwerking op schaal.',
              outcomes: [
                'Referentie-RAG-architectuur met vector search',
                'Domein-LLM fine-tuned met evaluatie-harness',
                'Productie-guardrails en content-safety-filters',
                'Dashboards voor tokens, latency en grounding',
                'Responsible-AI-checklist afgestemd met legal',
              ],
            },
            {
              title: 'Data Science',
              description:
                'Predictieve analytics, classificatie-, regressie- en clusteringmodellen getraind op uw data.',
              details:
                'Onze data science-praktijk levert actiegerichte inzichten via geavanceerde statistische modellering, feature engineering en verkennende analyse, en transformeert ruwe data naar dashboards, voorspellingen en beslissingsondersteuning.',
              outcomes: [
                'Opgeschoonde analytische dataset met features',
                'Predictief model met gedocumenteerde evaluatie',
                'Interactieve dashboards in Power BI of Looker',
                'Beslissings-API voor interne apps',
                'Kennisoverdracht aan uw analytics-team',
              ],
            },
            {
              title: 'Machine Learning',
              description:
                'Beeldherkenning, objectdetectie, OCR en visuele verwerking voor enterprise applicaties.',
              details:
                'We bouwen en deployen custom ML-modellen voor computer vision, NLP, anomaliedetectie en time-series forecasting, met rigoureuze evaluatie, bias-mitigatie en continue retraining.',
              outcomes: [
                'Gecureerde, gelabelde trainings- en evaluatiedatasets',
                'Productie-ML-model met versioned artefacten',
                'Bias- en fairness-review met mitigatieplan',
                'Continue retraining-workflow met quality gates',
                'Inference-API gehard voor productieverkeer',
              ],
            },
            {
              title: 'MLOps',
              description:
                'Geautomatiseerde MLOps-praktijken die uw volledige ML-levenscyclus stroomlijnen en modellen betrouwbaar in productie houden.',
              details:
                'Ons MLOps-framework dekt experiment tracking, CI/CD voor ML, geautomatiseerde monitoring, drift-detectie en governance, voor presterende, conforme en kostenefficiënte modellen.',
              outcomes: [
                'Experiment tracking op MLflow of Weights & Biases',
                'CI/CD-pipeline voor training en deployment',
                'Drift-, skew- en feature-monitoring met alerts',
                'Model registry met goedkeuringen en lineage',
                'Runbook voor rollback en incident response',
              ],
            },
            {
              title: 'AI-integratie',
              description:
                'Naadloze integratie van AI-mogelijkheden in bestaande systemen, ERPs, CRMs en SaaS-platformen.',
              details:
                'We ontwerpen API-first AI-oplossingen die direct integreren in uw workflows, met real-time inference, intelligente automatisering en predictieve mogelijkheden zonder verstorende herschrijvingen.',
              outcomes: [
                'Integratiearchitectuur met API-contracten',
                'AI-plug-ins voor ERP, CRM en SaaS-platformen',
                "Real-time inference-endpoints met SLA's",
                'Authenticatie, rate limiting en audit logging',
                'Sandbox- en productieomgevingen ingericht',
              ],
            },
            {
              title: 'Modeldeployment',
              description:
                'Productieklare ML-operaties, model serving, monitoring en continue verbetering van AI-systemen.',
              details:
                'We verzorgen containerized model serving op Kubernetes, A/B-tests, shadow-mode rollouts, geoptimaliseerde GPU-toewijzing en automatische rollback-strategieën.',
              outcomes: [
                'Gecontaineriseerd model serving op Kubernetes',
                'A/B- en shadow-mode rollout-patronen',
                'GPU-kostenoptimalisatie en right-sizing',
                'Automatische rollback bij kwaliteitsregressie',
                'Capaciteitsplan gevalideerd met loadtests',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title: 'Gebruikscases die wij bedienen met AI/ML-engineering',
          description:
            'We brengen diepgaande domeinexpertise en leveren AI-oplossingen voor echte, meetbare zakelijke problemen.',
          items: [
            {
              title: 'Aanbevelingssystemen',
              description:
                'AI-gedreven personalisatie voor e-commerce, content en leerplatforms met dynamische prijsstelling en user journeys.',
            },
            {
              title: 'Agentic AI-workflows',
              description:
                'Agent-gebaseerde systemen die multi-step taken automatiseren via redenering, geheugen en doelgericht gedrag.',
            },
            {
              title: 'Winkeladviseurs',
              description:
                'Virtuele winkelassistenten met conversational AI en real-time personalisatie voor e-commerce conversie.',
            },
            {
              title: 'Contentmoderatie',
              description:
                'Schaalbare AI-modellen voor beeld-, tekst- en videomoderatie, detectie van schadelijke content en policy-handhaving.',
            },
            {
              title: 'Enterprise cognitive search',
              description:
                'Intelligente zoekfunctie verder dan keywords, semantisch begrip, documentparsing en auto-tagging.',
            },
            {
              title: 'Intelligent risicomanagement',
              description:
                'AI-gestuurde fraudedetectie, kredietrisico, cyber threat monitoring en compliance-overtredingen signaleren.',
            },
            {
              title: 'Operationele intelligentie',
              description:
                'Predictief onderhoud, geautomatiseerde kwaliteitscontrole, personeelsplanning en resource-allocatie op schaal.',
            },
            {
              title: 'Vraagvoorspelling',
              description:
                'Nauwkeurige forecastmodellen voor supply chain, voorraad en financiële planning met historische en real-time data.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw AI/ML-oplossingen toekomstbestendig maken',
          description:
            'Onze bewezen frameworks, diepgaande tool-expertise en productie-first aanpak zorgen voor blijvende waarde uit uw AI-investeringen.',
          items: [
            {
              title: 'GenAI early-mover voordeel',
              description:
                'Als vroege adopters van GenAI helpen we bedrijven verder dan PoCs naar productieklare oplossingen met echte impact.',
            },
            {
              title: 'Enterprise GenAI Accelerator',
              description:
                'Ons GenAI-framework versnelt de ontwikkeling met ingebouwde mogelijkheden voor dataOps, governance, security, LLM-integratie, RAG en monitoring.',
            },
            {
              title: 'Datagereedheid voor grootschalige AI',
              description:
                'Succesvolle AI-initiatieven steunen op kwalitatieve, gestructureerde data. Wij zorgen dat uw data klaar is voor impactvolle implementaties.',
            },
            {
              title: 'Volledige MLOps-toolkit',
              description:
                'Onze MLOps-toolkit stroomlijnt de hele ML-levenscyclus, training, datalabeling, kwaliteitscontrole, met hoge standaarden.',
            },
            {
              title: 'Azure Data & AI-competenties',
              description:
                'Met specialisatie in Azure Data en AI benutten we de laatste vooruitgang voor efficiënte data-architecturen.',
            },
            {
              title: 'AI/ML volledig spectrum',
              description:
                'End-to-end AI/ML-oplossingen, van GenAI en documentextractie tot computer vision zoals objectdetectie.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-stack',
          title: 'Nieuwste AI- en ML-technologieën',
          description:
            'Wij gebruiken toonaangevende tools en frameworks voor optimale resultaten.',
          categories: [
            'LLMs en frameworks',
            'ML-bibliotheken',
            'Cloud-platformen',
            'Dataverwerking',
            'Deployment',
            'Tools en utilities',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud en DevOps',
          title: 'Moderne Cloud- en DevOps-engineering',
          highlight: 'DevOps',
          description:
            'Bouw, deploy en beheer cloud-infrastructuur met vertrouwen. Onze DevOps-experts ontwerpen schaalbare oplossingen met automatisering, beveiliging en operationele uitmuntendheid.',
          cta: 'Start uw cloudreis',
          statLabels: [
            'Cloud-migraties',
            'SLA-beschikbaarheid',
            'Gemiddelde kostenbesparing',
          ],
        },
        features: {
          badge: 'Kerncompetenties',
          title: 'Uitgebreide Cloud- en DevOps-diensten',
          description:
            'Van architectuur tot operations, wij verzorgen elke laag van uw cloudinfrastructuur.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'Cloud-architectuurontwerp',
              description:
                'Schaalbare, betrouwbare en veilige cloudinfrastructuur op AWS, Azure of Google Cloud op maat van uw business.',
              details:
                'We voeren Well-Architected reviews uit, ontwerpen multi-region topologieën en implementeren autoscaling-strategieën met 99,99% beschikbaarheid en tot 40% kostenbesparing.',
              outcomes: [
                'Well-Architected-review met remediatie-backlog',
                'Referentie multi-region topologie-diagram',
                'Autoscaling-policies per workload-laag',
                'Kostenbaseline met besparingsadvies',
                'Herbruikbare IaC-starter voor nieuwe omgevingen',
              ],
            },
            {
              title: 'Kubernetes-orchestratie',
              description:
                'Deploy, beheer en schaal gecontaineriseerde applicaties met Kubernetes op enterprise-schaal met volledige observability.',
              details:
                'Van EKS-, AKS- of GKE-clusters tot Helm chart management, service mesh en pod autoscaling, wij bouwen productieklare orchestratieplatforms met monitoring en self-healing.',
              outcomes: [
                'Productie EKS-, AKS- of GKE-cluster opgeleverd',
                'Helm-chart-repository met release-pipelines',
                'Service mesh met mTLS en observability',
                'Cluster-, node- en pod-autoscaling policies',
                'Upgrade- en disaster-recovery-runbook',
              ],
            },
            {
              title: 'CI/CD-pipeline-implementatie',
              description:
                'Geautomatiseerde build-, test- en deploymentpipelines voor snellere, betrouwbare releases zonder downtime.',
              details:
                'Onze CI/CD-implementaties omvatten GitOps-workflows, geautomatiseerde quality gates, blue-green en canary deployment en rollback-automatisering, 90% minder deployment-failures.',
              outcomes: [
                'GitOps-delivery via Argo CD of Flux',
                'Geautomatiseerde quality gates voor tests en security',
                'Blue-green- en canary-templates klaar voor gebruik',
                'One-click rollback-automatisering per service',
                'Release-dashboard voor engineering en SRE',
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automatiseer provisioning met Terraform, CloudFormation en Ansible voor reproduceerbare omgevingen.',
              details:
                'We bouwen modulaire, herbruikbare IaC-modules met drift-detectie, policy enforcement en geautomatiseerde tests.',
              outcomes: [
                'Modulaire Terraform- of CloudFormation-bibliotheek',
                'Drift-detectie met dagelijkse rapportages',
                'Policy-as-code afgedwongen op elke wijziging',
                'Unit- en integratietests voor IaC',
                'Pipeline-templates voor nieuwe repositories',
              ],
            },
            {
              title: 'Monitoring en observability',
              description:
                'Uitgebreide monitoring, logging en alerting met Datadog, Prometheus en ELK voor volledige operationele zichtbaarheid.',
              details:
                'Wij implementeren de drie pijlers van observability (metrics, logs, traces) met SLI- en SLO-definities, distributed tracing en geautomatiseerde incident runbooks.',
              outcomes: [
                "SLI's, SLO's en error budgets per service",
                'Distributed tracing over kritieke user journeys',
                'Gecentraliseerde logs met gestructureerd zoeken',
                'Anomalie-alerts gekoppeld aan on-call',
                'Incident runbooks getest in game days',
              ],
            },
            {
              title: 'Security en compliance',
              description:
                'Security best practices, compliance frameworks en disaster recovery-strategieën voor gereguleerde workloads.',
              details:
                'Onze security-praktijk dekt zero-trust netwerkarchitecturen, secrets management met Vault, geautomatiseerde SOC 2-, HIPAA- en PCI-DSS-checks en DR-planning met gedefinieerde RTO en RPO.',
              outcomes: [
                'Zero-trust netwerk-referentiearchitectuur',
                'Secrets management via Vault of KMS',
                'Geautomatiseerde SOC 2-, HIPAA- en PCI-DSS-controles',
                'IAM- en RBAC-baseline met reviews',
                'DR-plan met gedocumenteerde RTO en RPO',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title:
            'Gebruikscases die wij bedienen met Cloud- en DevOps-engineering',
          description:
            'Wij leveren cloud- en DevOps-oplossingen voor migratie, modernisering, security en kostenoptimalisatie voor elke fase.',
          items: [
            {
              title: 'Cloud-migratie en lift-and-shift',
              description:
                'Verplaats legacy on-premises workloads met minimale verstoring naar de cloud met bewezen frameworks.',
            },
            {
              title: 'Applicatiemodernisering',
              description:
                'Containerize en herarchitect monolithische applicaties naar microservices voor cloud-native schaalbaarheid.',
            },
            {
              title: 'Multi-cloud management',
              description:
                'Ontwerp en bestuur workloads over AWS, Azure en GCP met uniforme policies, kostenbeheersing en security.',
            },
            {
              title: 'Disaster recovery engineering',
              description:
                'Ontwerp en automatiseer DR-strategieën met RTO/RPO-doelen, failover-tests en geo-redundante backups.',
            },
            {
              title: 'Performance engineering',
              description:
                'Optimaliseer cloudresourcegebruik, verlaag latency en tune infrastructuur voor hoge doorvoer en kostenefficiëntie.',
            },
            {
              title: 'Compliance-automatisering',
              description:
                'Automatiseer compliance-checks voor HIPAA, PCI-DSS, SOC 2 en AVG met continue policy enforcement.',
            },
            {
              title: 'DevSecOps-integratie',
              description:
                'Integreer security scans, SAST/DAST en vulnerability management direct in CI/CD-pipelines.',
            },
            {
              title: 'FinOps en kostenoptimalisatie',
              description:
                'Analyseer continu cloudbestedingen en verlaag de cloudrekening met 30 tot 60%.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw cloudinfrastructuur toekomstbestendig maken',
          description:
            'Onze cloud-native methodologieën, SRE-praktijken en security-first cultuur zorgen voor een schaalbare, veilige en betaalbare infrastructuur.',
          items: [
            {
              title: 'Cloud-native vanaf dag één',
              description:
                'We ontwerpen elke oplossing van dag één voor de cloud, managed services, serverless en containers minimaliseren operationele overhead.',
            },
            {
              title: 'Security-by-design',
              description:
                'Security is in elke laag ingebed, IAM-policies, secrets management, netwerksegmentatie en geautomatiseerde compliance.',
            },
            {
              title: 'GitOps-gedreven oplevering',
              description:
                'Alle infrastructuur- en applicatiewijzigingen lopen via versiebeheerde, beoordeelde pipelines, auditbaar, met rollback en snelheid.',
            },
            {
              title: 'SRE en reliability engineering',
              description:
                "We definiëren SLI's, SLO's en error budgets en bouwen automatisering voor betrouwbare, observeerbare en zelfherstellende systemen.",
            },
            {
              title: 'Multi-region schaalbaarheid',
              description:
                'Architecturen voor wereldwijd verspreide systemen met actief-actief of actief-passief topologieën.',
            },
            {
              title: 'Cost engineering',
              description:
                'Systematische FinOps, reserved instances, spot fleets, autoscaling en tag-governance, verlagen cloudkosten gemiddeld met 40%.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-stack',
          title: 'Toonaangevende Cloud- en DevOps-tools',
          description:
            'Wij gebruiken bewezen technologieën voor betrouwbare, schaalbare deployments.',
          categories: [
            'Cloud-platformen',
            'Container en orchestratie',
            'Infrastructure as Code',
            'CI/CD-tools',
            'Monitoring en logging',
            'Cloud-diensten',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: 'Microsoft Center of Excellence',
          title: 'Innovatie op enterprise-niveau met Microsoft-technologieën',
          highlight: 'Innovatie',
          description:
            'Wij benutten het Microsoft-ecosysteem (.NET, Azure en Power Platform) om schaalbare, veilige en toekomstbestendige enterprise-oplossingen te bouwen.',
          cta: 'Praat met een Microsoft-expert',
          statLabels: [
            '.NET-projecten',
            'Jaar ervaring',
            'Azure-certificeringen',
          ],
        },
        features: {
          badge: 'Onze expertise',
          title: 'Uitgebreide Microsoft-technologiediensten',
          description:
            'Op maat gemaakte oplossingen over de hele Microsoft-stack om uw bedrijfsefficiëntie te verhogen.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'Full-Stack .NET-ontwikkeling',
              description:
                'Robuuste, hoogwaardige web- en desktopapplicaties met .NET, ASP.NET en Entity Framework.',
              details:
                'We architecten .NET-oplossingen met microservices, realtime via SignalR, Blazor WebAssembly SPAs en API-first design, met responsetijden onder 100 ms.',
              outcomes: [
                'Referentie-microservicearchitectuur op .NET',
                'API-first ontwerp met OpenAPI-contracten',
                'Realtime-kanalen via SignalR',
                'CI/CD-pipelines op GitHub Actions of Azure DevOps',
                'Application Insights observability per service',
              ],
            },
            {
              title: 'Azure-cloudoplossingen',
              description:
                'Schaalbare cloud-native applicaties die de volle kracht van het Microsoft Azure-ecosysteem benutten.',
              details:
                'Onze Azure-praktijk dekt App Services, serverless Functions, AKS-containerorchestratie, Cosmos DB en Azure SQL volgens het Azure Well-Architected Framework.',
              outcomes: [
                'Azure landing zone met policy-guardrails',
                "Referentie-workload in twee regio's gedeployed",
                'Cosmos DB- of Azure SQL-datalaag met PITR',
                'Bicep-infrastructuurrepository opgeleverd',
                'Kostenbaseline met Well-Architected-review',
              ],
            },
            {
              title: 'Power Platform en business apps',
              description:
                'Empower uw organisatie met low-code oplossingen, geautomatiseerde workflows en datagedreven BI.',
              details:
                'We leveren Power Apps (Canvas en Model-driven), Power Automate-flows, Power BI-dashboards met row-level security en Dataverse-integraties.',
              outcomes: [
                'Power Platform Center of Excellence ingericht',
                'Twee tot vier Power Apps in productie',
                'Power Automate-flows vervangen handmatige stappen',
                'Power BI-dashboards met row-level security',
                'Dataverse-model in beheer bij uw IT',
              ],
            },
            {
              title: 'Modernisering en migratie',
              description:
                'Transformeer legacy .NET-applicaties naar moderne, cloud-geoptimaliseerde .NET-oplossingen.',
              details:
                'Onze methodiek dekt .NET refactoring, on-prem naar Azure migratie met Azure Migrate, monoliet-splitsing en performance-optimalisatie.',
              outcomes: [
                'Portfolio-assessment en 6 R-plan',
                'Strangler-fig roadmap met kwartaalmijlpalen',
                'Nieuwe services op .NET in AKS of App Service',
                'Performance-baseline en post-migratierapport',
                'Kennisoverdracht aan uw engineeringteam',
              ],
            },
            {
              title: 'Microsoft 365 en SharePoint',
              description:
                'Custom samenwerkingsoplossingen en enterprise content management op Microsoft 365 en SharePoint Online.',
              details:
                'We bouwen SPFx-oplossingen, Teams-app-integraties, Microsoft 365-automatiseringen en moderne intranetportalen.',
              outcomes: [
                'SharePoint Online-intranet met Viva Connections',
                'Teams Toolkit-apps in dagelijkse workflows',
                'Microsoft Graph-automatiseringen vervangen handoffs',
                'Tenant-security-review met Secure Score-uplift',
                'Content-governance en lifecycle-beleid gedocumenteerd',
              ],
            },
            {
              title: 'Data en AI op Azure',
              description:
                'Benut Azure Machine Learning en Cognitive Services voor intelligente applicaties met diepgaande inzichten.',
              details:
                'Wij integreren Azure OpenAI Service, Cognitive Services (vision, speech, language), Synapse Analytics en Databricks voor ML-workflows.',
              outcomes: [
                'Referentiearchitectuur op Azure OpenAI en AI Search',
                'Cognitive Services geïntegreerd in bestaande apps',
                'Synapse- of Fabric-lakehouse met semantische modellen',
                'Databricks-workflows voor geavanceerde ML-pipelines',
                'Application Insights-dashboards voor AI-workloads',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title: 'Gebruikscases die wij bedienen met Microsoft-technologie',
          description:
            'Van Azure-migraties en .NET-modernisering tot Power Platform-automatisering, we lossen echte Microsoft-stack uitdagingen op.',
          items: [
            {
              title: 'Enterprise Azure-migratie',
              description:
                'Verplaats complexe on-premises workloads met Azure Migrate, ASR en bewezen migratiepatronen naar Azure.',
            },
            {
              title: '.NET legacy modernisering',
              description:
                'Moderniseer legacy .NET-applicaties en containerize op Azure AKS voor cloud-native schaalbaarheid.',
            },
            {
              title: 'Power Platform low-code oplossingen',
              description:
                'Bouw afdelingsapps, geautomatiseerde goedkeuringsflows en Power BI-rapporten zonder de kosten van custom ontwikkeling.',
            },
            {
              title: 'Azure data- en analyticsplatforms',
              description:
                'Ontwerp Azure-dataplatforms met Synapse, Data Factory en Power BI voor geünificeerde analytics en rapportage.',
            },
            {
              title: 'Microsoft 365 intranetportalen',
              description:
                'Bouw moderne SharePoint-intranetten en Teams-integraties die de medewerkersbetrokkenheid verhogen.',
            },
            {
              title: 'Azure AI- en cognitieve applicaties',
              description:
                'Integreer Azure OpenAI, Form Recognizer, Speech en Computer Vision in enterprise-applicaties.',
            },
            {
              title: 'Azure security en compliance',
              description:
                'Implementeer Azure Security Center, Defender, Key Vault en Sentinel voor gereguleerde cloudomgevingen.',
            },
            {
              title: 'Custom Dynamics 365-oplossingen',
              description:
                'Breid Dynamics 365 Sales, Customer Service en Finance uit met plugins, PCF-controls en integraties.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw Microsoft-investeringen toekomstbestendig maken',
          description:
            'Onze Microsoft-gecertificeerde engineers en gestructureerde frameworks garanderen maximale ROI op elke Microsoft-opdracht.',
          items: [
            {
              title: 'Microsoft-gecertificeerd engineeringteam',
              description:
                'Onze engineers hebben meer dan 50 actieve Microsoft-certificeringen op Azure, .NET, Power Platform en Dynamics 365.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                "We structureren elke Azure-opdracht met Microsoft's CAF, best practices voor security, governance en kosten.",
            },
            {
              title: 'Azure Well-Architected reviews',
              description:
                'Gestructureerde reviews over de pijlers reliability, security, kostenoptimalisatie, performance en operationele excellence.',
            },
            {
              title: 'Microsoft Partner-ecosysteem',
              description:
                'Als erkende Microsoft Partner krijgen we toegang tot technische previews, dedicated support en co-sell mogelijkheden.',
            },
            {
              title: 'Power Platform Center of Excellence',
              description:
                'We zetten Power Platform CoE-toolkits op die citizen development governen en adoptie meten.',
            },
            {
              title: 'Azure Data-specialisatie',
              description:
                'Diepe expertise in Azure Synapse Analytics, Data Factory, Databricks en Cosmos DB voor enterprise dataplatforms.',
            },
          ],
        },
        technologies: {
          badge: 'Microsoft-stack',
          title: 'Microsoft-ecosysteem en tooling',
          description:
            'Onze diepe expertise in Microsoft-technologieën zorgt ervoor dat we de juiste tools kiezen voor uw behoeften.',
          categories: [
            '.NET-frameworks',
            'Azure-services',
            'Data en opslag',
            'Power Platform',
            'DevOps en tooling',
            'Samenwerking',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Enterprise-diensten',
          title: 'Softwareoplossingen op enterprise-niveau',
          highlight: 'enterprise-niveau',
          description:
            'Versterk uw onderneming met op maat gemaakte, schaalbare oplossingen voor complexe vereisten. Van ERP-implementaties tot legacy-modernisering.',
          cta: 'Bespreek uw enterprise-behoeften',
          statLabels: [
            'Enterprise-klanten',
            'Transacties per dag',
            'Klaar voor compliance',
          ],
        },
        features: {
          badge: 'Kerncompetenties',
          title: 'Volledige enterprise-diensten',
          description:
            'Uitgebreide diensten voor enterprise-transformatie en digitale modernisering.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'Custom enterprise-applicaties',
              description:
                'Schaalbare, business-kritische applicaties voor complexe vereisten en hoge transactievolumes.',
              details:
                'We architecten enterprise-systemen met domain-driven design, event-driven patronen en horizontale schaalbaarheid, miljoenen dagelijkse transacties met multi-tenant isolatie en 99,99% SLA.',
              outcomes: [
                'Domeinmodel met bounded contexts gedocumenteerd',
                'Event-driven referentiearchitectuur en contracten',
                'Multi-tenant isolatiepatroon en SDK',
                'Audit trail en compliance-rapportage ingebakken',
                'SLA-dashboard gekoppeld aan error budgets',
              ],
            },
            {
              title: 'ERP- en CRM-oplossingen',
              description:
                'SAP-, Oracle-, Salesforce- en Dynamics-implementaties met diepe maatwerk en naadloze integratie.',
              details:
                'Onze ERP- en CRM-praktijk dekt de volledige levenscyclus, van vereistenmapping en datamigratie tot custom moduleontwikkeling, third-party integraties en hypercare-support.',
              outcomes: [
                'Functionele en technische requirements afgetekend',
                'Datamigratieplan met opschoning en validatie',
                'Custom modules en integraties opgeleverd',
                'Trainingsprogramma en adoptie-playbook',
                'Hypercare- en post-go-live supportperiode',
              ],
            },
            {
              title: 'Bedrijfsprocesautomatisering',
              description:
                'Stroomlijn operaties met RPA, workflow-automatisering en digitale procesoptimalisatie.',
              details:
                'Wij implementeren hyperautomatisering met UiPath- of Power Automate-bots, intelligente goedkeuringsworkflows, process mining en digital twins, met 40 tot 70% productiviteitswinst.',
              outcomes: [
                'Processinventaris met geprioriteerde kandidaten',
                'Top-drie RPA-bots in productie met monitoring',
                'Goedkeuringsworkflows vervangen papier en mail',
                'Process mining-dashboards voor continue verbetering',
                'Productiviteitsbaseline en post-automation-rapport',
              ],
            },
            {
              title: 'Legacy-modernisering',
              description:
                'Transformeer legacy-systemen naar moderne cloud-native architecturen met behoud van kritische functionaliteit.',
              details:
                'Ons playbook gebruikt strangler fig patterns, API wrapping en gefaseerde migraties, nul disruptie bij vervanging van COBOL, Delphi of Java monolieten.',
              outcomes: [
                'Portfolio-assessment met risicoscoring',
                'Strangler-fig roadmap met gefaseerd plan',
                'API gateway voor het legacy-systeem',
                'Nieuwe services op cloud-native runtimes',
                'Decommissioning-checklist voor oude componenten',
              ],
            },
            {
              title: 'Enterprise-integratie',
              description:
                'Integreer heterogene systemen met API-first, microservices-architectuur en event buses.',
              details:
                'We ontwerpen integratiehubs met MuleSoft, Apache Kafka en cloud-native iPaaS-platforms voor real-time synchronisatie tussen ERP, CRM, HRMS, finance en SaaS.',
              outcomes: [
                'Integratiearchitectuur met API- en event-contracten',
                'MuleSoft-, Kafka- of iPaaS-platform opgezet',
                'Herbruikbare connectors voor topsystemen',
                'Real-time sync vervangt nachtelijke batches',
                'End-to-end observability over integratieflows',
              ],
            },
            {
              title: 'Security en compliance',
              description:
                'Security op enterprise-niveau, compliance frameworks en governance voor gereguleerde industrieën en kritische systemen.',
              details:
                'Onze praktijk implementeert SOC 2, ISO 27001 en sectorspecifieke compliance-controls met zero-trust, RBAC, geautomatiseerde pentests en auditlogging.',
              outcomes: [
                'Zero-trust netwerk-referentiearchitectuur',
                'RBAC- en identiteitsmodel gedocumenteerd',
                'Mapping van SOC 2- en ISO 27001-controles',
                'Geautomatiseerde pentests in CI/CD',
                'Audit logging en SIEM-integratie geactiveerd',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title: 'Gebruikscases die wij bedienen met enterprise-software',
          description:
            'We werken samen met enterprise-teams in BFSI, healthcare, manufacturing en overheid aan complexe, business-kritische software.',
          items: [
            {
              title: 'Wereldwijde enterprise-rollouts',
              description:
                'Ontwerp en deploy multi-regio en meertalige applicaties voor duizenden interne en externe gebruikers.',
            },
            {
              title: 'Vervanging van legacy-systemen',
              description:
                'Pensioneer oude COBOL-, Delphi- of Java-monolieten veilig en vervang door moderne, onderhoudbare platforms.',
            },
            {
              title: 'Workflow- en goedkeuringsautomatisering',
              description:
                'Automatiseer multi-step goedkeuringen, documentroutering en audit-klare workflows over afdelingen heen.',
            },
            {
              title: 'Enterprise analytics en rapportage',
              description:
                'Bouw embedded analytics, real-time dashboards en self-service BI voor operations, finance en bestuur.',
            },
            {
              title: 'Microservices-decompositie',
              description:
                'Breek monolithische enterprise-apps op in onafhankelijk deploybare, business-uitgelijnde microservices.',
            },
            {
              title: 'Systeemintegratiehubs',
              description:
                'Bouw integratiehubs die ERP, CRM, HRMS, finance en third-party SaaS verbinden met real-time sync.',
            },
            {
              title: 'Compliance in gereguleerde industrieën',
              description:
                'Op maat gemaakte compliance-oplossingen voor BFSI, healthcare en overheid die strenge audits aan kunnen.',
            },
            {
              title: 'AI-aangedreven enterprise-apps',
              description:
                'Voeg AI toe aan enterprise-apps, intelligente zoekfunctie, documentverwerking, predictieve alerts en beslissingsondersteuning.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw enterprise-systemen toekomstbestendig maken',
          description:
            'Onze domain-driven aanpak, bewezen moderniseringsplaybook en security-first cultuur leveren oplossingen die decennia meegaan.',
          items: [
            {
              title: 'Domain-Driven Design-expertise',
              description:
                'Wij modelleren complexe enterprise-domeinen met DDD-principes, bounded contexts en ubiquitous language stemmen software af op de realiteit.',
            },
            {
              title: 'Enterprise security en governance',
              description:
                'Security is geen bijzaak, we implementeren zero-trust, RBAC, secrets management en geautomatiseerde compliance vanaf dag één.',
            },
            {
              title: 'Bewezen moderniseringsmethodiek',
              description:
                'Ons playbook minimaliseert risico met strangler fig patterns, feature-pariteitstests en gefaseerde migraties.',
            },
            {
              title: 'Diepe integratie-expertise',
              description:
                'Gecertificeerde expertise in MuleSoft, Apache Kafka en grote iPaaS-platforms voor complexe applicatielandschappen.',
            },
            {
              title: 'Hyperautomatisering en RPA',
              description:
                'We combineren RPA, AI en workflow-automatisering om handmatige processen te elimineren en meetbare productiviteitswinst te leveren.',
            },
            {
              title: 'Resultaatgerichte oplevering',
              description:
                "Elke opdracht is gekoppeld aan businessresultaten, we definiëren meetbare KPI's en rapporteren erop tijdens de oplevering.",
            },
          ],
        },
        technologies: {
          badge: 'Technologie-stack',
          title: 'Enterprise-technologieplatform',
          description:
            'Bewezen enterprise-technologieën voor business-kritische systemen.',
          categories: [
            'Enterprise-platformen',
            'Bedrijfsprocessen',
            'Backend en APIs',
            'Database',
            'Integratie',
            'Enterprise-tools',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Data Engineering',
          title: 'Bouw dataoplossingen op enterprise-schaal',
          highlight: 'enterprise-schaal',
          description:
            'Ontsluit de waarde van uw data met schaalbare datapipelines, warehouses en analyticsplatforms. We ontwerpen en implementeren oplossingen voor complexe vereisten en enorme volumes.',
          cta: 'Start uw dataproject',
          statLabels: ['Verwerkte data', 'Streamlatency', 'Pipeline-SLO'],
        },
        features: {
          badge: 'Kerncompetenties',
          title: 'Volledige data-engineering diensten',
          description:
            'Van architectuur tot deployment en onderhoud van enterprise-dataoplossingen.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'Datapipeline-architectuur',
              description:
                'Schaalbare ETL- en ELT-pipelines die enorme datavolumes verwerken met hoge betrouwbaarheid en zonder gegevensverlies.',
              details:
                'We architecten idempotente, SLA-gedreven pipelines met schema-evolutie, dead-letter queues en geautomatiseerde retries, miljarden records per dag.',
              outcomes: [
                'Referentie-pipeline framework met retry en DLQ',
                'Schema registry met versionering en contracten',
                'SLA-dashboards en freshness-monitoring',
                'Backfill- en replay-tooling voor historische data',
                'CI/CD-pipeline voor transformaties',
              ],
            },
            {
              title: 'Datawarehouse-oplossingen',
              description:
                'Moderne datawarehouses op cloud-native technologie voor analytics, rapportage en BI.',
              details:
                "Van dimensionele modellering met star- en snowflake-schema's tot columnar storage, incrementele materialized views en BI-connectiviteit, we bouwen warehouses op petabyte-schaal.",
              outcomes: [
                'Dimensioneel model met gedocumenteerde granulariteit',
                'Geoptimaliseerde partitionering en clustering-layout',
                'Incrementele materialized views voor top-queries',
                'Gecertificeerde semantische laag in Looker of Power BI',
                'Kostenmodel en slots- of capaciteitsstrategie',
              ],
            },
            {
              title: 'Real-time dataverwerking',
              description:
                'Stream processing en real-time analytics op Apache Kafka, Flink en Spark Streaming voor sub-seconde inzichten.',
              details:
                'Wij ontwerpen event-driven architecturen met exactly-once semantiek, change data capture (CDC) en verwerkingslatency onder 5 ms.',
              outcomes: [
                'Kafka-topics met schema registry-contracten',
                'Flink- of Spark Streaming-jobs in productie',
                'CDC-connectors uit operationele databases',
                'Exactly-once patronen gedocumenteerd',
                'Live dashboards met sub-seconde freshness',
              ],
            },
            {
              title: 'Data lake management',
              description:
                'Enterprise data lakes met governance, kwaliteit en metadatabeheer op open tabelformaten.',
              details:
                'Wij implementeren Delta Lake, Apache Iceberg en Hudi-gebaseerde lakehouses met geautomatiseerde catalogisering en fijne toegangscontrole.',
              outcomes: [
                'Open lakehouse op Delta, Iceberg of Hudi',
                'Geautomatiseerde datacatalogus met rijke metadata',
                'Fijne toegangsregels afgedwongen bij queries',
                'Storage-lifecycle en tiering-regels actief',
                'Compactie en small-file-management geautomatiseerd',
              ],
            },
            {
              title: 'Data-integratie',
              description:
                'Verbind en harmoniseer data uit meerdere bronnen met robuuste kwaliteit en lineage-tracking.',
              details:
                'We bouwen API-connectoren, CDC-pipelines en reverse ETL-flows met geautomatiseerde kwaliteitsscoring en complete lineage.',
              outcomes: [
                'Herbruikbare API- en CDC-connectorbibliotheek',
                'Reverse ETL-flows naar operationele systemen',
                'Datakwaliteit-scoring op elke dataset',
                'End-to-end lineage zichtbaar voor business',
                'Incident response-runbooks voor data-uitval',
              ],
            },
            {
              title: 'Datasecurity en governance',
              description:
                'Governance-frameworks met compliance, security, privacy en geautomatiseerde policy-handhaving.',
              details:
                'Onze frameworks dekken AVG, HIPAA en CCPA, PII auto-detectie en maskering, role-based access, encryptie en uitgebreid auditlogging.',
              outcomes: [
                'PII-detectie en maskeerregels per dataset',
                'RBAC- en ABAC-policies afgedwongen',
                'Encryptie at rest en in transit geverifieerd',
                'Audit logs gestreamd naar SIEM',
                'Regulatorische mapping voor AVG, HIPAA, CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title: 'Gebruikscases die wij bedienen met data-engineering diensten',
          description:
            'We bedienen data-intensieve organisaties in finance, retail, healthcare en SaaS met betrouwbare, gegoverneerde en schaalbare data-infrastructuur.',
          items: [
            {
              title: 'Customer 360-platforms',
              description:
                'Verenig klantdata uit CRM, web, mobile en support in één real-time view die personalisatie stuurt.',
            },
            {
              title: 'Real-time analytics dashboards',
              description:
                'Stream operationele data naar live dashboards voor rapportage, sales ops en customer success.',
            },
            {
              title: 'Multi-source data-integratie',
              description:
                'Harmoniseer data uit ERP, CRM, marketing en IoT in een schone, gegoverneerde datalaag.',
            },
            {
              title: 'Financiële datapipelines',
              description:
                'Bouw auditbare pipelines voor financiële rapportage, regelgevende inzendingen en risicomodelfeeds.',
            },
            {
              title: 'Modernisering van dataplatforms',
              description:
                'Migreer legacy Hadoop of on-premises warehouses naar moderne platforms zoals Snowflake, BigQuery of Synapse.',
            },
            {
              title: 'IoT data-ingestie en verwerking',
              description:
                'Ingesteer en verwerk miljoenen IoT-events per seconde vanuit apparaten, sensoren en edge-knooppunten.',
            },
            {
              title: 'Compliance data management',
              description:
                'Automatiseer dataclassificatie, toestemmingstracking en bewaartermijnen voor AVG, HIPAA en CCPA.',
            },
            {
              title: 'ML feature stores',
              description:
                'Bouw centrale feature stores die consistente, voorberekende ML-features serveren bij training en inference.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw dataplatform toekomstbestendig maken',
          description:
            'Onze DataOps-first cultuur, diepe cloud-expertise en toewijding aan datakwaliteit maken uw dataplatform een echte competitieve asset.',
          items: [
            {
              title: 'Moderne data-architectuur',
              description:
                'We ontwerpen architecturen met lakehouse-patronen die de flexibiliteit van data lakes combineren met de performance van warehouses.',
            },
            {
              title: 'DataOps en automatisering',
              description:
                'Onze DataOps-praktijken brengen CI/CD, testing en monitoring naar pipelines, kortere time-to-insight en gegarandeerde kwaliteit.',
            },
            {
              title: 'Real-time streaming-expertise',
              description:
                'Diepe hands-on expertise in Kafka, Flink en Spark Streaming voor event-driven architecturen met lage latency.',
            },
            {
              title: 'Datagovernance en kwaliteit',
              description:
                'We embedden geautomatiseerde kwaliteitschecks, schema-registers en lineage-tracking voor altijd betrouwbare data.',
            },
            {
              title: 'Cloud-datawarehouse specialisten',
              description:
                'Gecertificeerde expertise in Snowflake, BigQuery, Redshift en Azure Synapse, van architectuur tot query-optimalisatie.',
            },
            {
              title: 'Regelgeving ingebouwd',
              description:
                'Al onze pipelines worden vanaf dag één met compliance ontworpen, maskering, encryptie en audit trails.',
            },
          ],
        },
        technologies: {
          badge: 'Technologie-stack',
          title: 'Moderne data-engineering stack',
          description:
            'Wij gebruiken de beste tools en platforms voor betrouwbare, schaalbare oplossingen.',
          categories: [
            'Cloud data warehouses',
            'Stream processing',
            'ETL/ELT-tools',
            'Data lakes',
            'Opslag en verwerking',
            'Monitoring en tools',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Digital & Experience Engineering',
          title: 'Bouw verbonden digitale ervaringen die converteren',
          highlight: 'ervaringen',
          description:
            'Wij ontwerpen en engineeren end-to-end digitale ervaringen met diepe focus op bruikbaarheid, toegankelijkheid en business-uitkomsten op web en mobile.',
          cta: 'Start uw designproject',
          statLabels: [
            'Gemiddelde conversielift',
            'Toegankelijkheid',
            'Designsystemen',
          ],
        },
        features: {
          badge: 'Kerncompetenties',
          title: 'Volledige Digital & Experience Engineering diensten',
          description:
            'Van gebruikersonderzoek tot designsystemen en productie-implementatie.',
          outcomesTitle: 'Wat wij leveren',
          items: [
            {
              title: 'User Experience Design',
              description:
                'Onderzoeksgedreven UX-design dat intuïtieve, toegankelijke en verrukkelijke ervaringen creëert.',
              details:
                'We voeren user journey mapping, concurrentieaudits en usability-tests uit. Onze WCAG-conforme designs verkorten task completion times met 30 tot 50%.',
              outcomes: [
                'Journey maps voor de belangrijkste flows',
                'Usability-testrapporten met geprioriteerde fixes',
                'Interactiepatronen conform WCAG',
                'Informatie-architectuur en sitemap',
                'Hi-fi prototypes klaar voor engineering-overdracht',
              ],
            },
            {
              title: 'User Interface Design',
              description:
                'Modern UI-design afgestemd op uw merkidentiteit, designsysteem en gebruikersverwachtingen.',
              details:
                "Onze UI-praktijk levert merkconforme interfaces met micro-interacties, adaptieve donker- en licht-thema's, vloeiende responsive layouts en motion design.",
              outcomes: [
                'Merkconforme UI-kit met gedocumenteerde states',
                'Tokens voor donker en licht thema gedefinieerd',
                'Richtlijnen voor micro-interacties en motion',
                'Responsive grid- en breakpoint-systeem',
                'Figma-bibliotheek opgeleverd met gebruiksdoc',
              ],
            },
            {
              title: 'Webdesign',
              description:
                'Responsief, performance-geoptimaliseerd webdesign dat bezoekers omzet in klanten.',
              details:
                'We ontwerpen conversie-gerichte web-ervaringen geoptimaliseerd voor Core Web Vitals zoals LCP, CLS en FID, met overtuigende hiërarchie en strategische CTA-plaatsing.',
              outcomes: [
                'Conversiegerichte landingpage-designs',
                'Core Web Vitals-doelen vooraf afgestemd',
                'Animatie-specs binnen het performance-budget',
                'A/B-varianten voor topfunnels',
                'Handover-pakket met assets voor engineering',
              ],
            },
            {
              title: 'Mobile app design',
              description:
                'Intuïtieve mobile-ervaringen voor iOS en Android volgens HIG-standaarden.',
              details:
                'Wij ontwerpen natief aanvoelende mobile-ervaringen conform Apple HIG en Material Design 3, met gebaarsinteracties en cross-platform pariteit.',
              outcomes: [
                'Native iOS- en Android-designspecs',
                'Platform-specifieke navigatie en patronen',
                'Gebaars- en haptische interactierichtlijnen',
                'Onboarding- en first-run experience-design',
                'Creatives voor App Store en Play Store',
              ],
            },
            {
              title: 'Gebruikersonderzoek',
              description:
                'Uitgebreid onderzoek, testing en analytics om designbeslissingen met echte data te valideren.',
              details:
                'Onze praktijk omvat etnografische studies, gemodereerde usability-tests, A/B-experimentering, heatmaps, card sorting en kwantitatieve analytics.',
              outcomes: [
                'Onderzoeksplan met succescriteria',
                'Gemodereerde en niet-gemodereerde testrapporten',
                'Persona- en JTBD-documentatie',
                'Kwantitatieve analytics-review met bevindingen',
                'Geprioriteerde backlog aan verbeteringen',
              ],
            },
            {
              title: 'Designsystemen',
              description:
                'Schaalbare designsystemen en componentbibliotheken die productteams versnellen.',
              details:
                'We architecten token-gedreven designsystemen in Figma met auto-layout componenten, varianten en documentatie, plus Storybook-implementaties.',
              outcomes: [
                'Design tokens voor kleur, spacing en typografie',
                'Figma-componentenbibliotheek met varianten',
                'Storybook-implementatie in uw tech-stack',
                'Versionering- en releaseproces gedocumenteerd',
                'Adoptie-playbook en governance-model',
              ],
            },
          ],
        },
        useCases: {
          badge: 'Gebruikscases',
          title: 'Gebruikscases die wij bedienen met experience design',
          description:
            'We werken met SaaS-, e-commerce-, fintech- en enterprise-teams aan ervaringen die gebruikers waarderen en bedrijven meten.',
          items: [
            {
              title: 'Productredesigns en revamps',
              description:
                'Transformeer verouderde productinterfaces naar moderne, conversie-gerichte ervaringen zonder gebruikers te verstoren.',
            },
            {
              title: 'Mobile UX overhauls',
              description:
                'Herontwerp mobile apps met verbeterde onboarding, minder frictie en platform-natieve interactiepatronen.',
            },
            {
              title: 'E-commerce experience design',
              description:
                'Ontwerp ontdekkings-, winkelmand- en checkoutflows die afhakers verminderen en gemiddeld orderbedrag verhogen.',
            },
            {
              title: 'Enterprise dashboard design',
              description:
                'Creëer datarijke dashboards met heldere hiërarchie voor operations, analytics en bestuursrapportages.',
            },
            {
              title: 'Designsysteem-opbouw',
              description:
                'Bouw schaalbare Figma-componentbibliotheken en Storybook-implementaties die teams een single source of truth bieden.',
            },
            {
              title: 'Digitale merkidentiteit',
              description:
                "Ontwikkel coherente digitale identiteiten, logo's, typografie, kleursystemen en motion design.",
            },
            {
              title: 'Toegankelijkheidsverbetering',
              description:
                'Audit producten tegen WCAG 2.2 en implementeer systematische fixes voor toetsenbord, schermlezers en contrast.',
            },
            {
              title: 'Onboarding design',
              description:
                'Ontwerp activatieflows die nieuwe gebruikers sneller naar hun "aha-moment" leiden.',
            },
          ],
        },
        expertise: {
          badge: 'Waarom voor ons kiezen',
          title:
            'Precisie, expertise en tools die uw digitale ervaring toekomstbestendig maken',
          description:
            'Onze onderzoekgeleide, uitkomstgerichte designpraktijk combineert creatieve excellentie met engineering-rigor.',
          items: [
            {
              title: 'Onderzoeksgeleid design',
              description:
                'Elke designbeslissing is verankerd in echte gebruikersdata, interviews, usability-tests, heatmaps en analytics.',
            },
            {
              title: 'Conversieratio-optimalisatie',
              description:
                'We ontwerpen met meetbare uitkomsten, A/B-testing, funnelanalyse en iteratieve optimalisatie leveren 2x+ conversiestijgingen.',
            },
            {
              title: 'Design-naar-code precisie',
              description:
                'Onze designers werken hand in hand met frontend-engineers voor pixel-perfecte, performante implementatie.',
            },
            {
              title: 'Performance-first webdesign',
              description:
                "We optimaliseren designs voor Core Web Vitals, LCP, CLS, FID, voor mooie en snelle pagina's.",
            },
            {
              title: 'Toegankelijkheid als standaard',
              description:
                'WCAG 2.2 zit in elk project, contrast, toetsenbordnavigatie, ARIA-rollen en schermlezer-testing.',
            },
            {
              title: 'Schaalbare designsystemen',
              description:
                'We bouwen token-gedreven Figma-bibliotheken en Storybook-componenten die over producten en teams schalen.',
            },
          ],
        },
        technologies: {
          badge: 'Design-stack',
          title: 'Moderne design- en ontwikkeltools',
          description:
            'We gebruiken toonaangevende tools om uitstekende designs te maken en op te leveren.',
          categories: [
            'Designtools',
            'Prototyping',
            'Gebruikersonderzoek',
            'Webtechnologie',
            'Frontend-frameworks',
            'Samenwerking',
          ],
        },
      },
    },
  },
  it: {
    nav: {
      company: 'Azienda',
      services: 'Servizi',
      engineering: 'Ingegneria',
      industries: 'Settori',
      partners: 'Partner',
      insights: 'Approfondimenti',
      careers: 'Carriere',
      aboutUs: 'Chi Siamo',
      contactUs: 'Contattaci',
      howWeWork: 'Come Lavoriamo',
      ai: 'IA',
      dataAnalytics: 'Dati e Analisi',
      cloud: 'Cloud',
      microsoftTechnologies: 'Tecnologie Microsoft',
      experienceDesign: 'Experience Design',
      cmsDevelopment: 'Sviluppo CMS',
      digitalMarketing: 'Marketing Digitale',
      qualityAssurance: 'Assicurazione Qualità',
      financialServices: 'Servizi Finanziari',
      healthcareLifeSciences: 'Sanità e Scienze della Vita',
      retailEcommerce: 'Vendita al Dettaglio ed E-commerce',
      supplyChainLogistics: 'Catena di Approvvigionamento e Logistica',
      hiTechDigitalNatives: 'High-Tech e Nativi Digitali',
      microsoft: 'Microsoft',
      aws: 'AWS',
      googleCloud: 'Google Cloud',
      caseStudies: 'Casi di Studio',
      blogs: 'Blog',
      hireTalent: 'Assumi talento',
      aiEngineering: 'Ingegneria AI/ML',
      cloudDevOpsEngineering: 'Ingegneria Cloud & DevOps',
      dataEngineering: 'Ingegneria Dati',
      digitalExperienceEngineering: 'Ingegneria Esperienza Digitale',
      enterpriseServices: 'Servizi Enterprise',
    },
    common: {
      contactUs: 'Contattaci',
      getStarted: 'Inizia Ora',
      language: 'Lingua',
      quickContact: 'Contatto Rapido',
    },
    siteCtas: siteCtasContent,
    hero: {
      trustedBy: 'Scelto da aziende lungimiranti in tutto il mondo',
      title: 'Costruisci Sistemi Intelligenti che Scalano',
      titleHighlight: 'La Tua Azienda',
      subtitle:
        'Soluzioni software su misura progettate per semplificare problemi complessi e alimentare la crescita del business globale.',
      scheduleMeeting: 'Prenota un Incontro',
      viewCaseStudies: 'Vedi Casi di Studio',
      projectsDelivered: 'Progetti Consegnati',
      happyClients: 'Clienti Soddisfatti',
      globalOffices: 'Uffici Globali',
      expertDevelopers: 'Sviluppatori Esperti',
      featureAiTitle: 'Basato su IA',
      featureAiDesc: 'Automazione Intelligente',
      featureMicrosoftTitle: 'Esperienza Microsoft',
      featureMicrosoftDesc: 'Cloud, Dati, Sicurezza',
      featureCustomTitle: 'Soluzioni su Misura',
      featureCustomDesc: 'Costruito per la Tua Azienda',
    },
    services: {
      badge: 'Cosa Facciamo',
      title: 'Servizi Che Offriamo',
      subtitle:
        "Dall'architettura backend al marketing digitale, forniamo servizi di sviluppo software end-to-end su misura per le tue esigenze aziendali.",
      learnMore: 'Scopri di più',
    },
    engineeringServices: engineeringServicesContent,
    whoWeWorkWith: whoWeWorkWithContent,
    homeCaseStudies: homeCaseStudiesContent,
    industries: {
      badge: 'Settori',
      title: 'Settori Che Serviamo',
      subtitle:
        'Portiamo una profonda competenza di dominio in diversi settori, offrendo soluzioni su misura che guidano un reale impatto aziendale.',
    },
    technologies: {
      badge: 'Tecnologie',
      title: 'Tecnologie Con Cui Creiamo Soluzioni',
      subtitle:
        "Sfruttiamo tecnologie all'avanguardia per costruire soluzioni ad alte prestazioni e scalabili per la tua azienda.",
    },
    whyChooseUs: {
      badge: 'PERCHÉ SCEGLIERE COGTIX',
      title: 'Esperienza di cui ti puoi Fidare',
      titleHighlight: 'Esperienza',
      subtitle:
        'Portiamo un patrimonio di esperienza e una profonda competenza nelle moderne soluzioni tecnologiche, combinata con un impegno per la trasparenza e l’affidabilità.',
      trackRecord: 'Comprovata Esperienza',
      certifiedExperts: 'Esperti Certificati',
      clientCentric: 'Approccio Centrato sul Cliente',
      innovativeSolutions: 'Soluzioni Innovative',
      endToEndSupport: 'Supporto End-to-End',
    },
    whyCogtixPillars: whyCogtixPillarsContent,
    contact: {
      heroTitle: 'Mettiti in Contatto',
      heroSubtitle:
        'Hai un progetto in mente? Parliamo di come possiamo aiutare la tua azienda a crescere con le nostre soluzioni tecnologiche su misura.',
      badge: 'Mettiti in Contatto',
      title: 'Costruiamo Qualcosa di Grande Insieme',
      subtitle:
        'Compila il modulo sottostante e il nostro team ti ricontatterà entro 24 ore.',
      infoTitle: 'Informazioni di Contatto',
      infoSubtitle:
        'Contattaci e discutiamo di come possiamo aiutare a trasformare la tua azienda con la tecnologia.',
      locationSummary: 'USA • India • Australia • UK',
      avgResponsePrefix: 'Tempo medio di risposta:',
      avgResponseValue: 'entro 2 ore',
      firstName: 'Nome *',
      lastName: 'Cognome *',
      emailAddress: 'Indirizzo Email *',
      phoneNumber: 'Numero di Cellulare *',
      message: 'Messaggio *',
      sendMessage: 'Invia Messaggio',
      sending: 'Invio in corso…',
      submitSuccess:
        'Grazie. Il messaggio è stato inviato con successo. Ti risponderemo presto.',
      submitError: 'Qualcosa è andato storto. Riprova o scrivici direttamente.',
      scheduleTitle: 'Prenota un incontro',
      scheduleSubtitle:
        'Scegli un orario comodo. Confermeremo l’appuntamento e invieremo un invito di calendario.',
    },
    aboutUs: {
      badge: 'La Nostra Azienda',
      title: "Dall'Idea all'Impatto",
      subtitle:
        'Fondata da un team di innovatori dedicati, Cogtix Solutions è nata da un concetto fondamentale: aiutare le aziende a sfruttare le capacità della tecnologia moderna per la loro evoluzione digitale.',
      heroTitle: "Guidare l'Innovazione Attraverso la Tecnologia",
      heroSubtitle:
        "Cogtix Solutions è un partner tecnologico leader che aiuta le aziende di tutto il mondo a trasformare il loro panorama digitale attraverso l'ingegneria software intelligente.",
      whoWeAreTitle: 'Chi Siamo',
      whoWeAreContent:
        'Fondata con la visione di semplificare la tecnologia complessa per le aziende, Cogtix Solutions è cresciuta fino a diventare un team multidisciplinare di esperti dedicati alla creazione di prodotti digitali pronti per il futuro.',
      missionTitle: 'La Nostra Missione',
      missionContent:
        "Potenziare le aziende in tutto il mondo fornendo soluzioni tecnologiche all'avanguardia, scalabili e sicure che guidano la crescita, l'efficienza e la trasformazione digitale.",
      visionTitle: 'La Nostra Visione',
      visionContent:
        "Diventare il leader globale nell'ingegneria digitale, riconosciuto per il nostro impegno verso l\'eccellenza, l'innovazione e la creazione di un impatto positivo attraverso la tecnologia.",
      valuesTitle: 'I Nostri Valori Fondamentali',
      valuesSubtitle:
        'I principi che guidano tutto ciò che facciamo, dal nostro codice alle nostre relazioni con i clienti.',
    },
    founderProfile: founderProfileContent,
    awards: {
      badge: 'Riconoscimento',
      title: 'Eccellenza Premiata',
      subtitle:
        "Riconosciuti a livello globale per l'eccellenza nello sviluppo e le soluzioni innovative.",
    },
    offices: {
      badge: 'I Nostri Uffici',
      title: 'Presenti in Tutto il Mondo',
      subtitle:
        'Con uffici in quattro continenti, siamo sempre vicini ai nostri clienti.',
    },
    clients: {
      trustedBy: 'Scelto dalle principali aziende in tutto il mondo',
    },
    footer: {
      company: 'Azienda',
      engineering: 'Ingegneria',
      contactUs: 'Contattaci',
      chatWithUs: 'Chatta con noi',
      privacyPolicy: 'Informativa sulla Privacy',
      designedBy: 'Progettato da',
      rightsReserved: 'Tutti i diritti riservati.',
      description:
        "Un'azienda leader nello sviluppo software rinomata per metodologie agili e personalizzate.",
      home: 'Home',
      aboutUs: 'Chi Siamo',
      caseStudies: 'Casi di Studio',
      blog: 'Blog',
      careers: 'Carriere',
      contactUsLink: 'Contattaci',
      aiEngineering: 'Ingegneria AI/ML',
      digitalProductEngineering: 'Ingegneria Prodotto Digitale',
      cloudDevOpsEngineering: 'Ingegneria Cloud & DevOps',
      dataEngineering: 'Ingegneria Dati',
      experienceEngineering: 'Ingegneria Esperienza Digitale',
      enterpriseServices: 'Servizi Enterprise',
      status: 'Stato',
    },
    testimonials: {
      badge: 'Testimonianze',
      title: 'Cosa dicono di noi',
      subtitle: 'Storie di clienti',
      description:
        "Iniziare dinamicamente il posizionamento sul mercato, collegamento totale con la tecnologia clicks-and-mortar, dati convincenti per mercati all'avanguardia.",
      stats: {
        implementations: '12+',
        implementationsLabel: 'Implementazione di Successo',
        minds: '21+',
        mindsLabel: 'Menti Brillanti',
      },
      items: [
        {
          name: 'Mr. Adrian',
          title: 'Founder at Lexik App',
          quoteTitle: 'The Best Template You Got to Have it!',
          description:
            'Cogtix Solutions delivered a functional solution that aligned with the client\'s requirements. The efficient team delivered on time and swiftly responded to requests, issues, and concerns, allowing for a smooth workflow. Their remarkable flexibility and ability to adapt to scope changes stood out.',
        },
        {
          name: 'Mr. Henry Kamya',
          title: 'Founder at Thrive Unity',
          quoteTitle:
            'It\'s evident that the team is committed and ready to help.',
          description:
            'The client has been satisfied with Cogtix Solutions work and performance. The team is highly professional and communicative; they maintain weekly alignment meetings and deliver everything they promise in each sprint. Overall, their quality and attention to detail are outstanding.',
        },
        {
          name: 'Mr. Steve',
          title: 'Founder at Reinss Works',
          quoteTitle:
            'The team was very punctual about the deadline and timeline of the project.',
          description:
            'Cogtix Solutions efforts have been met with positive acclaim, thanks to their technical and development prowess. The team strictly adhered to the project\'s timelines and requirements, and internal stakeholders were impressed with the service provider/s solutions-focused approach.',
        },
        {
          name: 'Mr. Chetan',
          title: 'Founder at Reinss Works',
          quoteTitle: 'Everything was perfect.',
          description:
            'Cogtix Solutions work received positive feedback from the client. Their communicative approach resulted in a smooth partnership; the team delivered on time and managed all tasks seamlessly. Moreover, they stood out for their skills and professionalism. Customers can expect a great service.',
        },
        {
          name: 'Mrs. Antonia',
          title: 'Founder and Partner at Lexik',
          quoteTitle:
            'They delivered the project on time and maintained excellent communication.',
          description:
            'Cogtix Solutions successfully delivered the project on time and to the client\'s requirements. They also ensured exceptional communication via email and virtual meetings. Their intelligent team was a key element of their work.',
        },
        {
          name: 'Mr. Forest',
          title: 'Founder at Software Development Company',
          quoteTitle: 'I was happy with the entire partnership.',
          description:
            'Cogtix Solutions efficiently delivered their tasks, much to the client\'s delight. The team was highly receptive from a workflow standpoint, and internal stakeholders were particularly impressed with the service provider\'s technical expertise.',
        },
      ],
    },
    home: {
      clientSay: 'Cosa dicono i nostri clienti',
    },
    serviceContent: {
      ai: {
        hero: {
          badge: 'IA e Machine Learning',
          title:
            "Porta l'intelligenza nei flussi di lavoro aziendali principali",
          highlight: 'intelligenza',
          description:
            'Ti aiutiamo a passare dagli esperimenti IA a sistemi pronti per la produzione, con solide basi di dati, valutazione chiara e gestione operativa affidabile.',
          cta: 'Avvia il tuo progetto IA',
          statLabels: [
            'Modelli IA consegnati',
            'Progetti GenAI',
            'Disponibilità della pipeline',
          ],
        },
        features: {
          badge: 'Capacità principali',
          title: 'I nostri servizi di IA/ML',
          description:
            "Da GenAI e data science a ML engineering e MLOps, copriamo l'intero ciclo di vita dell'IA.",
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'IA Generativa',
              description:
                'Integrazione personalizzata GPT, LLM e applicazioni di IA generativa costruite con Claude, GPT-4 e modelli open source.',
              details:
                "Progettiamo e implementiamo sistemi GenAI di livello produttivo, comprese pipeline RAG, architetture multi-agente e modelli specifici di dominio fine-tuned, per automatizzare la creazione di contenuti, la generazione di codice e l'elaborazione documentale su larga scala.",
              outcomes: [
                'Architettura RAG di riferimento con ricerca vettoriale',
                'LLM di dominio fine-tuned con harness di valutazione',
                'Guardrail di produzione e filtri di content safety',
                'Dashboard token, latenza e tasso di grounding',
                'Checklist di IA responsabile validata con il legale',
              ],
            },
            {
              title: 'Data Science',
              description:
                'Analisi predittiva, classificazione, regressione e modelli di clustering addestrati sui tuoi dati.',
              details:
                'La nostra pratica di data science offre insight azionabili attraverso modellazione statistica avanzata, feature engineering e analisi esplorativa, trasformando dati grezzi in dashboard, previsioni e sistemi di supporto decisionale.',
              outcomes: [
                'Dataset analitico pulito con feature ingegnerizzate',
                'Modello predittivo con valutazione documentata',
                'Dashboard interattive in Power BI o Looker',
                'API di supporto decisionale per app interne',
                'Trasferimento di competenze al team di analytics',
              ],
            },
            {
              title: 'Machine Learning',
              description:
                'Riconoscimento di immagini, rilevamento di oggetti, OCR ed elaborazione visiva per applicazioni enterprise.',
              details:
                'Costruiamo e implementiamo modelli ML personalizzati per computer vision, NLP, rilevamento anomalie e previsione di serie temporali, con valutazione rigorosa, mitigazione dei bias e retraining continuo.',
              outcomes: [
                'Dataset di training e valutazione etichettati',
                'Modello ML in produzione con artefatti versionati',
                'Revisione bias e fairness con piano di mitigazione',
                'Workflow di retraining continuo con quality gate',
                'API di inferenza irrobustita per traffico reale',
              ],
            },
            {
              title: 'MLOps',
              description:
                "Pratiche MLOps automatizzate che ottimizzano l'intero ciclo di vita ML e mantengono affidabili i modelli in produzione.",
              details:
                'Il nostro framework MLOps copre tracciamento degli esperimenti, CI/CD per ML, monitoraggio automatizzato, drift detection e governance, per modelli efficienti, conformi e produttivi.',
              outcomes: [
                'Tracciamento esperimenti su MLflow o Weights & Biases',
                'Pipeline CI/CD per training e deployment',
                'Monitoraggio drift, skew e feature con alert',
                'Model registry con approvazioni e lineage',
                'Runbook di rollback e risposta agli incidenti',
              ],
            },
            {
              title: 'Integrazione IA',
              description:
                'Integrazione fluida delle capacità IA in sistemi esistenti, ERP, CRM e piattaforme SaaS.',
              details:
                'Progettiamo soluzioni IA API-first che si integrano direttamente nei flussi di business, con inferenza in tempo reale, automazione intelligente e capacità predittive senza riscritture disruptive.',
              outcomes: [
                'Architettura di integrazione con contratti API',
                'Plugin IA per ERP, CRM e piattaforme SaaS',
                'Endpoint di inferenza in tempo reale con SLA',
                'Autenticazione, rate limiting e audit logging',
                'Ambienti sandbox e produzione configurati',
              ],
            },
            {
              title: 'Deployment di modelli',
              description:
                'Operazioni ML pronte per la produzione, model serving, monitoraggio e miglioramento continuo dei sistemi IA.',
              details:
                'Gestiamo il serving di modelli containerizzati su Kubernetes, test A/B, rollout in shadow mode, allocazione GPU ottimizzata e strategie di rollback automatizzate.',
              outcomes: [
                'Model serving containerizzato su Kubernetes',
                'Pattern di rollout A/B e shadow mode',
                'Ottimizzazione e right-sizing dei costi GPU',
                'Rollback automatico in caso di regressione qualità',
                'Piano di capacità validato con test di carico',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title: "Casi d'uso che gestiamo con i servizi di IA/ML engineering",
          description:
            'Portiamo competenza approfondita in molti settori, con soluzioni IA che risolvono problemi di business reali e misurabili.',
          items: [
            {
              title: 'Sistemi di raccomandazione',
              description:
                'Motori di personalizzazione IA per e-commerce, contenuti e piattaforme di apprendimento con pricing dinamico.',
            },
            {
              title: 'Workflow IA agentici',
              description:
                'Sistemi agent-based che automatizzano attività multi-step usando ragionamento, memoria e comportamento orientato agli obiettivi.',
            },
            {
              title: 'Assistenti per lo shopping',
              description:
                'Assistenti virtuali alimentati da IA conversazionale e personalizzazione in tempo reale per la conversione e-commerce.',
            },
            {
              title: 'Moderazione di contenuti',
              description:
                'Modelli IA scalabili per la moderazione di immagini, testi e video, rilevamento di contenuti dannosi e applicazione delle policy.',
            },
            {
              title: 'Ricerca cognitiva enterprise',
              description:
                'Ricerca intelligente oltre le parole chiave, comprensione semantica, parsing documentale e auto-tagging.',
            },
            {
              title: 'Gestione intelligente del rischio',
              description:
                'Rilevamento frodi, rischio creditizio, monitoraggio di minacce cyber e segnalazione delle violazioni di compliance.',
            },
            {
              title: 'Intelligenza operativa',
              description:
                'Manutenzione predittiva, controllo qualità automatizzato, pianificazione del personale e allocazione delle risorse su larga scala.',
            },
            {
              title: 'Previsione della domanda',
              description:
                'Modelli di forecast accurati per supply chain, inventario e pianificazione finanziaria con dati storici e in tempo reale.',
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono le soluzioni IA/ML a prova di futuro',
          description:
            "I nostri framework consolidati, la profonda competenza sugli strumenti e l'approccio orientato alla produzione assicurano valore duraturo dagli investimenti in IA.",
          items: [
            {
              title: 'Vantaggio early-mover su GenAI',
              description:
                'Come adopter iniziali delle tecnologie GenAI, aiutiamo le aziende ad andare oltre i PoC per soluzioni pronte per la produzione con impatto reale.',
            },
            {
              title: 'Acceleratore GenAI enterprise',
              description:
                'Il nostro framework GenAI accelera lo sviluppo con capacità integrate per dataOps, governance, sicurezza, integrazione LLM, RAG e monitoraggio.',
            },
            {
              title: "Pronti per l'IA su larga scala",
              description:
                'Le iniziative IA di successo si basano su dati di alta qualità ben strutturati. Assicuriamo che i tuoi dati siano pronti per implementazioni ad alto impatto.',
            },
            {
              title: 'Toolkit MLOps completo',
              description:
                "Il nostro toolkit MLOps ottimizza l'intero ciclo di vita ML, training, etichettatura, controllo qualità, garantendo elevati standard.",
            },
            {
              title: 'Competenze Azure Data & AI',
              description:
                'Con specializzazione su Azure Data e AI, sfruttiamo gli ultimi progressi per creare architetture dati efficienti.',
            },
            {
              title: 'AI/ML a spettro completo',
              description:
                "Soluzioni AI/ML end-to-end, da IA generativa ed estrazione documentale a computer vision come l'object detection.",
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnologico',
          title: 'Le ultime tecnologie IA e ML',
          description:
            'Sfruttiamo strumenti e framework leader di settore per risultati ottimali.',
          categories: [
            'LLM e Framework',
            'Librerie ML',
            'Piattaforme Cloud',
            'Elaborazione dati',
            'Deployment',
            'Strumenti e utility',
          ],
        },
      },
      cloud: {
        hero: {
          badge: 'Cloud e DevOps',
          title: 'Moderna ingegneria Cloud e DevOps',
          highlight: 'DevOps',
          description:
            "Costruisci, distribuisci e gestisci l'infrastruttura cloud con fiducia. I nostri esperti DevOps progettano soluzioni scalabili con automazione, sicurezza ed eccellenza operativa.",
          cta: 'Inizia il tuo viaggio cloud',
          statLabels: [
            'Migrazioni cloud',
            'SLA di disponibilità',
            'Risparmio medio',
          ],
        },
        features: {
          badge: 'Capacità principali',
          title: 'Servizi completi Cloud e DevOps',
          description:
            "Dall'architettura alle operazioni, copriamo ogni livello della tua infrastruttura cloud.",
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'Progettazione di architetture cloud',
              description:
                'Infrastruttura cloud scalabile, affidabile e sicura su AWS, Azure o Google Cloud, su misura per il tuo business.',
              details:
                'Eseguiamo well-architected review, progettiamo topologie multi-regione e implementiamo strategie di autoscaling con 99,99% di disponibilità e fino al 40% di risparmio mensile.',
              outcomes: [
                'Well-Architected review con backlog di rimedi',
                'Schema di topologia multi-regione di riferimento',
                'Policy di autoscaling per livello di workload',
                'Baseline dei costi con raccomandazioni di risparmio',
                'Starter IaC riutilizzabile per nuovi ambienti',
              ],
            },
            {
              title: 'Orchestrazione Kubernetes',
              description:
                'Distribuisci, gestisci e scala applicazioni containerizzate con Kubernetes a livello enterprise con piena osservabilità.',
              details:
                'Da setup di cluster EKS, AKS o GKE a gestione di Helm chart, service mesh e pod autoscaling, costruiamo piattaforme di orchestrazione di livello produttivo.',
              outcomes: [
                'Cluster EKS, AKS o GKE di produzione consegnato',
                'Repository di Helm chart con pipeline di release',
                'Service mesh configurato con mTLS e osservabilità',
                'Policy di autoscaling cluster, nodi e pod',
                'Runbook di upgrade e disaster recovery',
              ],
            },
            {
              title: 'Implementazione pipeline CI/CD',
              description:
                'Pipeline automatizzate di build, test e deployment per rilasci più rapidi e affidabili senza downtime.',
              details:
                'Le nostre implementazioni CI/CD includono workflow GitOps, quality gates automatizzati, strategie blue-green e canary e automazione del rollback, con il 90% in meno di fallimenti.',
              outcomes: [
                'Delivery GitOps via Argo CD o Flux',
                'Quality gate automatici per test e sicurezza',
                "Template blue-green e canary pronti all'uso",
                'Rollback automatico one-click per servizio',
                'Dashboard delle release per ingegneria e SRE',
              ],
            },
            {
              title: 'Infrastructure as Code',
              description:
                'Automatizza il provisioning con Terraform, CloudFormation e Ansible per ambienti riproducibili.',
              details:
                'Costruiamo moduli IaC modulari e riutilizzabili con drift detection, policy enforcement e test automatizzati.',
              outcomes: [
                'Libreria modulare Terraform o CloudFormation',
                'Drift detection con report giornalieri',
                'Policy-as-code applicata a ogni modifica',
                'Test unitari e di integrazione per IaC',
                'Template di pipeline per nuovi repository',
              ],
            },
            {
              title: 'Monitoraggio e osservabilità',
              description:
                'Monitoraggio, logging e alerting completi con Datadog, Prometheus ed ELK per piena visibilità operativa.',
              details:
                "Implementiamo i tre pilastri dell'osservabilità (metriche, log, trace) con definizioni SLI e SLO, distributed tracing e runbook automatizzati.",
              outcomes: [
                'SLI, SLO ed error budget per servizio',
                'Distributed tracing sui percorsi critici',
                'Log centralizzati con ricerca strutturata',
                'Alert di anomalia collegati alla reperibilità',
                'Runbook degli incidenti testati nei game day',
              ],
            },
            {
              title: 'Sicurezza e conformità',
              description:
                'Best practice di sicurezza, framework di conformità e strategie DR per carichi regolamentati.',
              details:
                'La nostra pratica copre architetture zero-trust, gestione dei segreti con Vault, controlli automatizzati SOC 2, HIPAA e PCI-DSS e pianificazione DR con RTO e RPO definiti.',
              outcomes: [
                'Architettura di rete zero-trust di riferimento',
                'Gestione dei segreti via Vault o KMS',
                'Controlli automatizzati SOC 2, HIPAA e PCI-DSS',
                'Baseline IAM e RBAC con revisioni',
                'Piano DR con RTO e RPO documentati',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title: "Casi d'uso che gestiamo con l'ingegneria Cloud e DevOps",
          description:
            'Forniamo soluzioni cloud e DevOps per migrazione, modernizzazione, sicurezza e ottimizzazione dei costi a ogni fase aziendale.',
          items: [
            {
              title: 'Migrazione cloud e lift-and-shift',
              description:
                'Sposta i carichi on-premises legacy in cloud con la minima interruzione utilizzando framework e tooling consolidati.',
            },
            {
              title: 'Modernizzazione delle applicazioni',
              description:
                'Containerizza e ri-architetta applicazioni monolitiche in microservizi per scalabilità e manutenibilità cloud-native.',
            },
            {
              title: 'Gestione multi-cloud',
              description:
                'Progetta e governa carichi su AWS, Azure e GCP con policy unificate, controllo dei costi e sicurezza.',
            },
            {
              title: 'Ingegneria di disaster recovery',
              description:
                'Progetta e automatizza strategie DR con obiettivi RTO/RPO, test di failover e backup geo-ridondanti.',
            },
            {
              title: 'Ingegneria delle prestazioni',
              description:
                "Ottimizza l'uso delle risorse cloud, riduce la latenza e regola l'infrastruttura per carichi ad alto throughput.",
            },
            {
              title: 'Automazione della conformità',
              description:
                'Automatizza i controlli di conformità per HIPAA, PCI-DSS, SOC 2 e GDPR con applicazione continua delle policy.',
            },
            {
              title: 'Integrazione DevSecOps',
              description:
                'Integra scansioni di sicurezza, test SAST/DAST e gestione delle vulnerabilità direttamente nelle pipeline CI/CD.',
            },
            {
              title: 'FinOps e ottimizzazione dei costi',
              description:
                'Analizza continuamente la spesa cloud e riduci la bolletta del 30-60%.',
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono la tua infrastruttura cloud a prova di futuro',
          description:
            "Le nostre metodologie cloud-native, le pratiche SRE e la cultura security-first garantiscono un'infrastruttura scalabile, sicura ed economica.",
          items: [
            {
              title: 'Approccio cloud-native dal giorno uno',
              description:
                "Progettiamo ogni soluzione per il cloud dal primo giorno, managed services, serverless e container minimizzano l'overhead operativo.",
            },
            {
              title: 'Sicurezza by-design',
              description:
                'La sicurezza è integrata in ogni layer, policy IAM, gestione dei segreti, segmentazione di rete e monitoraggio automatizzato della conformità.',
            },
            {
              title: 'Consegna guidata da GitOps',
              description:
                'Tutti i cambiamenti di infrastruttura e applicazione passano attraverso pipeline versionate e revisionate, auditabili, con rollback e velocità.',
            },
            {
              title: 'SRE e ingegneria di affidabilità',
              description:
                'Definiamo SLI, SLO ed error budget e costruiamo automazione che mantiene i sistemi affidabili, osservabili e auto-riparanti.',
            },
            {
              title: 'Scalabilità multi-regione',
              description:
                'Architetture di sistemi globalmente distribuiti in topologie attivo-attivo o attivo-passivo per massima disponibilità.',
            },
            {
              title: 'Ingegneria dei costi',
              description:
                'Pratiche FinOps sistematiche, reserved instances, spot fleet, autoscaling e governance dei tag, riducono i costi cloud del 40% in media.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnologico',
          title: 'Strumenti Cloud e DevOps leader del settore',
          description:
            'Sfruttiamo tecnologie consolidate per deployment affidabili e scalabili.',
          categories: [
            'Piattaforme Cloud',
            'Container e orchestrazione',
            'Infrastructure as Code',
            'Strumenti CI/CD',
            'Monitoraggio e logging',
            'Servizi Cloud',
          ],
        },
      },
      microsoft: {
        hero: {
          badge: 'Centro di Eccellenza Microsoft',
          title: 'Innovazione enterprise con tecnologie Microsoft',
          highlight: 'Innovazione',
          description:
            "Sfruttiamo l'ecosistema Microsoft (.NET, Azure e Power Platform) per costruire soluzioni enterprise scalabili, sicure e pronte per il futuro.",
          cta: 'Parla con un esperto Microsoft',
          statLabels: [
            'Progetti .NET',
            'Anni di esperienza',
            'Certificazioni Azure',
          ],
        },
        features: {
          badge: 'La nostra esperienza',
          title: 'Servizi completi di tecnologie Microsoft',
          description:
            "Soluzioni su misura sull'intero stack Microsoft per aumentare l'efficienza aziendale.",
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'Sviluppo Full-Stack .NET',
              description:
                'Applicazioni web e desktop robuste e ad alte prestazioni con .NET, ASP.NET ed Entity Framework.',
              details:
                'Architettiamo soluzioni .NET con microservizi, capacità in tempo reale via SignalR, SPA Blazor WebAssembly e design API-first, con tempi di risposta sotto i 100 ms.',
              outcomes: [
                'Architettura microservizi .NET di riferimento',
                'Progettazione API-first con contratti OpenAPI',
                'Canali real-time tramite SignalR',
                'Pipeline CI/CD su GitHub Actions o Azure DevOps',
                'Osservabilità Application Insights per servizio',
              ],
            },
            {
              title: 'Soluzioni Azure Cloud',
              description:
                "Architetta e implementa applicazioni cloud-native scalabili sfruttando l'intero ecosistema Microsoft Azure.",
              details:
                'La nostra pratica Azure copre App Services, Functions serverless, orchestrazione AKS, Cosmos DB e Azure SQL secondo il Well-Architected Framework.',
              outcomes: [
                'Landing zone Azure con guardrail di policy',
                'Workload di riferimento distribuito su due regioni',
                'Layer dati Cosmos DB o Azure SQL con PITR',
                'Repository di infrastruttura Bicep consegnato',
                'Baseline dei costi con Well-Architected review',
              ],
            },
            {
              title: 'Power Platform e business app',
              description:
                'Potenzia la tua organizzazione con soluzioni low-code, workflow automatizzati e business intelligence data-driven.',
              details:
                'Implementiamo Power Apps (Canvas e Model-driven), workflow Power Automate, dashboard Power BI con sicurezza row-level e integrazioni Dataverse.',
              outcomes: [
                'Power Platform Center of Excellence (CoE) operativo',
                'Da due a quattro Power Apps in produzione',
                'Workflow Power Automate al posto del manuale',
                'Dashboard Power BI con sicurezza row-level',
                'Modello Dataverse gestito dal team IT',
              ],
            },
            {
              title: 'Modernizzazione e migrazione',
              description:
                'Trasforma le applicazioni legacy .NET in soluzioni moderne e ottimizzate per il cloud.',
              details:
                'La nostra metodologia copre refactoring di .NET, migrazione on-prem ad Azure con Azure Migrate, decomposizione di monoliti e ottimizzazione delle prestazioni.',
              outcomes: [
                'Assessment del portafoglio e piano in 6 R',
                'Roadmap strangler-fig con milestone trimestrali',
                'Nuovi servizi su .NET in AKS o App Service',
                'Baseline di performance e report post-migrazione',
                'Trasferimento di competenze al team di ingegneria',
              ],
            },
            {
              title: 'Microsoft 365 e SharePoint',
              description:
                'Soluzioni di collaborazione su misura e gestione dei contenuti enterprise su Microsoft 365 e SharePoint Online.',
              details:
                'Costruiamo soluzioni SPFx, integrazioni Teams, automazioni Microsoft 365 e portali intranet moderni.',
              outcomes: [
                'Intranet SharePoint Online con Viva Connections',
                'App Teams Toolkit nei workflow quotidiani',
                'Automazioni Microsoft Graph al posto degli handoff',
                'Revisione di sicurezza con piano Secure Score',
                'Policy di governance e ciclo di vita dei contenuti',
              ],
            },
            {
              title: 'Data e IA su Azure',
              description:
                'Sfrutta Azure Machine Learning e Cognitive Services per applicazioni intelligenti con insight avanzati.',
              details:
                'Integriamo Azure OpenAI Service, Cognitive Services (vision, speech, language), Synapse Analytics e Databricks per workflow ML avanzati.',
              outcomes: [
                'Architettura di riferimento Azure OpenAI e AI Search',
                'Cognitive Services integrati nelle app esistenti',
                'Lakehouse Synapse o Fabric con modelli semantici',
                'Workflow Databricks per pipeline ML avanzate',
                'Dashboard Application Insights per workload IA',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title:
            "Casi d'uso che gestiamo con i servizi di tecnologia Microsoft",
          description:
            "Dalle migrazioni ad Azure e modernizzazione .NET all'automazione con Power Platform, risolviamo sfide reali dello stack Microsoft.",
          items: [
            {
              title: 'Migrazione Azure enterprise',
              description:
                'Sposta carichi on-premises complessi su Azure con Azure Migrate, ASR e pattern di migrazione consolidati.',
            },
            {
              title: 'Modernizzazione legacy .NET',
              description:
                'Moderna applicazioni .NET legacy e containerizzale su Azure AKS per scalabilità cloud-native.',
            },
            {
              title: 'Soluzioni low-code Power Platform',
              description:
                'Costruisci applicazioni dipartimentali, workflow di approvazione automatizzati e report Power BI senza costi di sviluppo custom.',
            },
            {
              title: 'Piattaforme dati e analytics Azure',
              description:
                'Progetta piattaforme dati Azure end-to-end con Synapse, Data Factory e Power BI per analytics unificata.',
            },
            {
              title: 'Portali intranet Microsoft 365',
              description:
                "Costruisci intranet moderne basate su SharePoint e integrazioni Teams che migliorano l'engagement dei dipendenti.",
            },
            {
              title: 'Applicazioni cognitive Azure AI',
              description:
                'Integra Azure OpenAI, Form Recognizer, Speech e Computer Vision nelle applicazioni enterprise.',
            },
            {
              title: 'Sicurezza e conformità Azure',
              description:
                'Implementa Azure Security Center, Defender, Key Vault e Sentinel per ambienti cloud regolamentati.',
            },
            {
              title: 'Soluzioni Dynamics 365 personalizzate',
              description:
                'Estendi e personalizza Dynamics 365 Sales, Customer Service e Finance con plugin, control PCF e integrazioni.',
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono i tuoi investimenti Microsoft a prova di futuro',
          description:
            "I nostri ingegneri certificati, i framework di adozione strutturati e l'accesso all'ecosistema di partner garantiscono il massimo ROI per ogni progetto Microsoft.",
          items: [
            {
              title: 'Team di engineering certificato Microsoft',
              description:
                'I nostri ingegneri detengono oltre 50 certificazioni Microsoft attive su Azure, .NET, Power Platform e Dynamics 365.',
            },
            {
              title: 'Cloud Adoption Framework (CAF)',
              description:
                'Strutturiamo ogni impegno Azure con il CAF di Microsoft, garantendo best practice per sicurezza, governance e costi.',
            },
            {
              title: 'Review Azure Well-Architected',
              description:
                'Conduciamo review strutturate sui pilastri di affidabilità, sicurezza, ottimizzazione dei costi, prestazioni ed eccellenza operativa.',
            },
            {
              title: 'Ecosistema di partner Microsoft',
              description:
                'Come Microsoft Partner riconosciuto, abbiamo accesso a preview tecniche, canali di supporto dedicati e funzionalità di co-sell.',
            },
            {
              title: 'Power Platform Center of Excellence',
              description:
                "Configuriamo toolkit CoE Power Platform che governano lo sviluppo cittadino e misurano l'adozione.",
            },
            {
              title: 'Specializzazione Azure Data',
              description:
                'Profonda competenza in Azure Synapse Analytics, Data Factory, Databricks e Cosmos DB per piattaforme dati enterprise.',
            },
          ],
        },
        technologies: {
          badge: 'Stack Microsoft',
          title: 'Ecosistema e tooling Microsoft',
          description:
            'La nostra esperienza approfondita sulle tecnologie Microsoft garantisce la scelta degli strumenti giusti per le tue esigenze.',
          categories: [
            '.NET',
            'Servizi Azure',
            'Dati e archiviazione',
            'Power Platform',
            'DevOps e tooling',
            'Collaborazione',
          ],
        },
      },
      enterprise: {
        hero: {
          badge: 'Servizi Enterprise',
          title: 'Soluzioni software di livello enterprise',
          highlight: 'livello enterprise',
          description:
            'Potenzia la tua azienda con soluzioni su misura e scalabili in grado di gestire requisiti complessi. Dalle implementazioni ERP alla modernizzazione legacy.',
          cta: 'Discutiamo le tue esigenze enterprise',
          statLabels: [
            'Clienti enterprise',
            'Transazioni / giorno',
            'Pronti per la conformità',
          ],
        },
        features: {
          badge: 'Capacità principali',
          title: 'Servizi enterprise completi',
          description:
            'Servizi completi per la trasformazione aziendale e la modernizzazione digitale.',
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'Applicazioni enterprise su misura',
              description:
                'Applicazioni scalabili e mission-critical per requisiti complessi e alti volumi di transazioni.',
              details:
                'Architettiamo sistemi enterprise con domain-driven design, pattern event-driven e scalabilità orizzontale, milioni di transazioni giornaliere con isolamento multi-tenant e SLA del 99,99%.',
              outcomes: [
                'Modello di dominio con bounded context documentati',
                'Architettura event-driven di riferimento e contratti',
                'Pattern di isolamento multi-tenant e SDK',
                'Audit trail e reporting di conformità integrati',
                'Dashboard SLA collegato agli error budget',
              ],
            },
            {
              title: 'Soluzioni ERP e CRM',
              description:
                'Implementazioni SAP, Oracle, Salesforce e Dynamics con personalizzazione profonda e integrazione fluida.',
              details:
                "La nostra pratica ERP e CRM copre l'intero ciclo di vita, dal mapping dei requisiti alla migrazione dati, sviluppo di moduli custom, integrazioni di terze parti, formazione utenti e supporto hypercare.",
              outcomes: [
                'Requisiti funzionali e tecnici approvati',
                'Piano di migrazione dati con pulizia e validazione',
                'Moduli custom e integrazioni consegnate',
                'Programma di formazione e adoption per gli utenti',
                'Finestra di hypercare e supporto post-go-live',
              ],
            },
            {
              title: 'Automazione dei processi aziendali',
              description:
                'Ottimizza le operazioni con RPA, automazione dei workflow e ottimizzazione dei processi digitali.',
              details:
                'Implementiamo strategie di iperautomazione combinando bot UiPath o Power Automate, workflow di approvazione intelligenti, process mining e digital twin, con guadagni di produttività dal 40 al 70%.',
              outcomes: [
                'Inventario di processi con candidati prioritizzati',
                'Tre bot RPA principali in produzione con monitoring',
                'Workflow di approvazione al posto di mail e carta',
                'Dashboard di process mining per il miglioramento',
                'Baseline di produttività e report post-automazione',
              ],
            },
            {
              title: 'Modernizzazione legacy',
              description:
                'Trasforma i sistemi legacy in architetture cloud-native moderne preservando le funzionalità critiche.',
              details:
                'Il nostro playbook usa pattern strangler fig, API wrapping e migrazioni in fasi, garantendo zero disruzione nel rimpiazzo di sistemi COBOL, Delphi o monoliti Java.',
              outcomes: [
                'Assessment del portafoglio con scoring del rischio',
                'Roadmap strangler-fig con piano a fasi',
                'API gateway davanti al sistema legacy',
                'Nuovi servizi su runtime cloud-native',
                'Checklist di dismissione dei componenti legacy',
              ],
            },
            {
              title: 'Integrazione enterprise',
              description:
                'Integra sistemi eterogenei con architettura API-first, microservizi e event bus.',
              details:
                'Progettiamo hub di integrazione con MuleSoft, Apache Kafka e piattaforme iPaaS cloud-native per sincronizzazione in tempo reale tra ERP, CRM, HRMS, finance e SaaS.',
              outcomes: [
                'Architettura di integrazione con contratti API e eventi',
                'Piattaforma MuleSoft, Kafka o iPaaS attivata',
                'Connettori riutilizzabili per i sistemi principali',
                'Sync in tempo reale al posto dei batch notturni',
                'Osservabilità end-to-end dei flussi di integrazione',
              ],
            },
            {
              title: 'Sicurezza e conformità',
              description:
                'Sicurezza di livello enterprise, framework di conformità e governance per industrie regolamentate.',
              details:
                'La nostra pratica implementa SOC 2, ISO 27001 e controlli specifici di settore con architettura zero-trust, gestione accessi basata sui ruoli e audit logging.',
              outcomes: [
                'Architettura di rete zero-trust di riferimento',
                "Modello RBAC e d'identità documentato",
                'Mappatura dei controlli SOC 2 e ISO 27001',
                'Penetration test automatizzati nella CI/CD',
                'Audit logging e integrazione SIEM attivati',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title: "Casi d'uso che gestiamo con servizi software enterprise",
          description:
            'Collaboriamo con team enterprise di BFSI, sanità, manifatturiero e PA per risolvere sfide software complesse e mission-critical.',
          items: [
            {
              title: 'Rollout enterprise globali',
              description:
                'Progetta e implementa applicazioni multi-regione e multilingua per migliaia di utenti.',
            },
            {
              title: 'Sostituzione di sistemi legacy',
              description:
                'Ritira in sicurezza i monoliti COBOL, Delphi o Java e sostituiscili con piattaforme moderne.',
            },
            {
              title: 'Automazione di workflow e approvazioni',
              description:
                'Automatizza approvazioni multi-step, routing documentale e workflow auditabili tra dipartimenti.',
            },
            {
              title: 'Analytics e reporting enterprise',
              description:
                'Costruisci analytics embedded, dashboard in tempo reale e BI self-service per operations, finance e dirigenza.',
            },
            {
              title: 'Decomposizione in microservizi',
              description:
                'Scomponi le applicazioni enterprise monolitiche in microservizi distribuibili indipendentemente e allineati al business.',
            },
            {
              title: 'Hub di integrazione di sistemi',
              description:
                'Costruisci hub di integrazione che connettono ERP, CRM, HRMS, finance e SaaS in tempo reale.',
            },
            {
              title: 'Conformità nelle industrie regolamentate',
              description:
                'Soluzioni di conformità su misura per BFSI, sanità e PA che soddisfano rigorosi standard di audit, dati e sicurezza.',
            },
            {
              title: "Applicazioni enterprise potenziate dall'IA",
              description:
                "Integra l'IA nelle applicazioni enterprise, ricerca intelligente, elaborazione documentale, alert predittivi e moduli decisionali.",
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono i tuoi sistemi enterprise a prova di futuro',
          description:
            'Il nostro approccio domain-driven, il playbook di modernizzazione consolidato e la cultura security-first offrono soluzioni che durano decenni.',
          items: [
            {
              title: 'Competenza Domain-Driven Design',
              description:
                'Modelliamo domini enterprise complessi con principi DDD, bounded context, aggregati e linguaggio ubiquo allineano il software alla realtà.',
            },
            {
              title: 'Sicurezza e governance enterprise',
              description:
                'La sicurezza non è un afterthought, implementiamo zero-trust, RBAC, gestione dei segreti e conformità automatizzata dal giorno uno.',
            },
            {
              title: 'Metodologia di modernizzazione consolidata',
              description:
                'Il nostro playbook minimizza il rischio business con strangler fig, test di parità delle feature e migrazioni in fasi.',
            },
            {
              title: 'Profonda competenza di integrazione',
              description:
                'Esperienza certificata in MuleSoft, Apache Kafka e principali piattaforme iPaaS per connettere paesaggi enterprise complessi.',
            },
            {
              title: 'Iperautomazione e RPA',
              description:
                'Combiniamo RPA, IA e automazione dei workflow per eliminare processi manuali e generare guadagni di produttività misurabili.',
            },
            {
              title: 'Consegna orientata ai risultati',
              description:
                'Ogni impegno è legato a risultati di business, definiamo KPI misurabili in anticipo e rendicontiamo lungo la consegna.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnologico',
          title: 'Piattaforma tecnologica enterprise',
          description:
            'Tecnologie enterprise consolidate per sistemi mission-critical.',
          categories: [
            'Piattaforme enterprise',
            'Processi di business',
            'Backend e API',
            'Database',
            'Integrazione',
            'Strumenti enterprise',
          ],
        },
      },
      data: {
        hero: {
          badge: 'Data Engineering',
          title: 'Costruisci soluzioni dati su scala enterprise',
          highlight: 'scala enterprise',
          description:
            'Sblocca il valore dei tuoi dati con pipeline, warehouse e piattaforme di analytics scalabili. Progettiamo e implementiamo soluzioni per requisiti complessi e volumi enormi.',
          cta: 'Avvia il tuo progetto dati',
          statLabels: ['Dati processati', 'Latenza stream', 'SLO pipeline'],
        },
        features: {
          badge: 'Capacità principali',
          title: 'Servizi completi di data engineering',
          description:
            "Dall'architettura al deployment e alla manutenzione delle soluzioni dati enterprise.",
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'Architettura di pipeline dati',
              description:
                'Pipeline ETL ed ELT scalabili in grado di gestire volumi enormi con alta affidabilità e zero perdita di dati.',
              details:
                'Architettiamo pipeline idempotenti, SLA-driven con supporto per evoluzione di schema, dead-letter queue e retry automatizzati, miliardi di record giornalieri con piena osservabilità.',
              outcomes: [
                'Framework di pipeline di riferimento con retry e DLQ',
                'Schema registry con versioning e contratti',
                'Dashboard SLA e monitoraggio della freshness',
                'Tooling di backfill e replay degli storici',
                'Pipeline CI/CD per le trasformazioni',
              ],
            },
            {
              title: 'Soluzioni di data warehouse',
              description:
                'Data warehouse moderni su tecnologie cloud-native per analytics, reporting e BI.',
              details:
                "Dalla modellazione dimensionale con schemi star e snowflake all'ottimizzazione columnar, viste materializzate incrementali e connettività BI, warehouse che servono analytics su scala petabyte.",
              outcomes: [
                'Modello dimensionale con grano documentato',
                'Layout di partizioni e clustering ottimizzato',
                'Viste materializzate incrementali per le top query',
                'Layer semantico certificato in Looker o Power BI',
                'Modello di costo e strategia di slot o capacità',
              ],
            },
            {
              title: 'Elaborazione dati in tempo reale',
              description:
                'Stream processing e analytics in tempo reale su Apache Kafka, Flink e Spark Streaming per insight sub-secondo.',
              details:
                'Progettiamo architetture event-driven con semantica exactly-once, change data capture (CDC) e latenza inferiore a 5 ms.',
              outcomes: [
                'Topic Kafka con contratti schema registry',
                'Job Flink o Spark Streaming in produzione',
                'Connettori CDC dai database operativi',
                'Pattern exactly-once documentati',
                'Dashboard live con freshness sub-secondo',
              ],
            },
            {
              title: 'Gestione di data lake',
              description:
                'Data lake enterprise con governance, qualità e gestione dei metadati su formati di tabella aperti.',
              details:
                'Implementiamo lakehouse basati su Delta Lake, Apache Iceberg e Hudi con cataloging automatizzato e controllo degli accessi granulare.',
              outcomes: [
                'Lakehouse aperto su Delta, Iceberg o Hudi',
                'Catalogo dati automatizzato con metadati ricchi',
                'Policy di accesso granulari applicate al query time',
                'Regole di lifecycle e tiering dello storage',
                'Compaction e gestione degli small file automatizzate',
              ],
            },
            {
              title: 'Integrazione dati',
              description:
                'Connetti e armonizza dati da molteplici sorgenti con qualità robusta e tracciamento del lineage.',
              details:
                'Costruiamo connettori API, pipeline CDC e flussi reverse ETL con scoring qualità automatizzato e lineage completo.',
              outcomes: [
                'Libreria riutilizzabile di connettori API e CDC',
                'Flussi reverse ETL verso i sistemi operativi',
                'Scoring di data quality su ogni dataset',
                'Lineage end-to-end visibile al business',
                'Runbook di risposta agli incidenti dei dati',
              ],
            },
            {
              title: 'Sicurezza e governance dei dati',
              description:
                'Framework di governance con conformità, sicurezza, privacy e applicazione automatica delle policy.',
              details:
                'I nostri framework coprono conformità GDPR, HIPAA e CCPA, auto-rilevamento e mascheramento PII, controllo accessi basato sui ruoli, crittografia e audit logging.',
              outcomes: [
                'Regole di rilevamento e mascheramento PII',
                'Policy RBAC e ABAC applicate',
                'Crittografia at rest e in transit verificata',
                'Audit log inviati al SIEM',
                'Mappatura regolatoria per GDPR, HIPAA e CCPA',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title: "Casi d'uso che gestiamo con i servizi di data engineering",
          description:
            'Serviamo organizzazioni data-intensive in finance, retail, sanità e SaaS, con infrastruttura dati affidabile, governata e scalabile.',
          items: [
            {
              title: 'Piattaforme Customer 360',
              description:
                'Unifica i dati cliente da CRM, web, mobile e supporto in una vista unica in tempo reale.',
            },
            {
              title: 'Dashboard di analytics in tempo reale',
              description:
                'Streaming dati operativi verso dashboard live per reporting esecutivo, sales ops e customer success.',
            },
            {
              title: 'Integrazione dati multi-sorgente',
              description:
                "Armonizza dati da ERP, CRM, marketing e IoT in un layer dati pulito e governato pronto per l'analytics.",
            },
            {
              title: 'Pipeline di dati finanziari',
              description:
                'Costruisci pipeline conformi e auditabili per reporting finanziario, invii regolatori e modelli di rischio.',
            },
            {
              title: 'Modernizzazione di piattaforme dati',
              description:
                'Migra Hadoop legacy o warehouse on-premises verso Snowflake, BigQuery o Synapse.',
            },
            {
              title: 'Ingestion e elaborazione IoT',
              description:
                'Ingerisce e processa milioni di eventi IoT al secondo da dispositivi, sensori e nodi edge.',
            },
            {
              title: 'Gestione dei dati di conformità',
              description:
                'Automatizza classificazione, tracciamento del consenso e politiche di retention per GDPR, HIPAA e CCPA.',
            },
            {
              title: 'Feature store ML',
              description:
                'Costruisci feature store centralizzati che servono feature ML coerenti in training e inference.',
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono la tua piattaforma dati a prova di futuro',
          description:
            "La nostra cultura DataOps-first, la profonda competenza cloud e l'impegno per la qualità rendono la tua piattaforma dati un asset competitivo reale.",
          items: [
            {
              title: 'Architettura dati moderna',
              description:
                'Progettiamo architetture lakehouse che combinano la flessibilità dei data lake con le prestazioni dei warehouse.',
            },
            {
              title: 'DataOps e automazione',
              description:
                'Le nostre pratiche DataOps portano CI/CD, test e monitoraggio alle pipeline, riducendo il time-to-insight.',
            },
            {
              title: 'Competenza nello streaming in tempo reale',
              description:
                'Profonda esperienza hands-on su Kafka, Flink e Spark Streaming per architetture event-driven a bassa latenza.',
            },
            {
              title: 'Governance e qualità dei dati',
              description:
                'Integriamo controlli di qualità automatizzati, schema registry e lineage per dati sempre affidabili.',
            },
            {
              title: 'Specialisti di data warehouse cloud',
              description:
                "Esperienza certificata in Snowflake, BigQuery, Redshift e Azure Synapse, dall'architettura all'ottimizzazione delle query.",
            },
            {
              title: 'Conformità regolatoria integrata',
              description:
                'Tutte le nostre pipeline sono progettate con conformità dal giorno uno, mascheramento, crittografia e audit trail.',
            },
          ],
        },
        technologies: {
          badge: 'Stack tecnologico',
          title: 'Stack moderno di data engineering',
          description:
            'Usiamo strumenti e piattaforme best-in-class per soluzioni affidabili e scalabili.',
          categories: [
            'Data warehouse cloud',
            'Stream processing',
            'Strumenti ETL/ELT',
            'Data lake',
            'Archiviazione ed elaborazione',
            'Monitoraggio e strumenti',
          ],
        },
      },
      experience: {
        hero: {
          badge: 'Ingegneria Digital ed Experience',
          title: 'Crea esperienze digitali connesse che convertono',
          highlight: 'esperienze',
          description:
            'Progettiamo e ingegnerizziamo esperienze digitali end-to-end con un focus profondo su usabilità, accessibilità e risultati di business su web e mobile.',
          cta: 'Avvia il tuo progetto di design',
          statLabels: [
            'Aumento medio conversione',
            'Accessibilità',
            'Design System',
          ],
        },
        features: {
          badge: 'Capacità principali',
          title: 'Servizi completi di Digital ed Experience Engineering',
          description:
            "Dalla ricerca utente ai design system e all'implementazione in produzione.",
          outcomesTitle: 'Cosa offriamo',
          items: [
            {
              title: 'Design UX',
              description:
                'Design UX basato sulla ricerca che crea esperienze intuitive, accessibili e memorabili.',
              details:
                'Conduciamo journey mapping, audit competitivi e sessioni di usability per validare ogni interazione. I nostri design conformi WCAG riducono il tempo di completamento dei task dal 30 al 50%.',
              outcomes: [
                'Mappe di journey per i flussi principali',
                'Report di usability con fix prioritizzati',
                'Pattern di interazione conformi WCAG',
                "Architettura dell'informazione e sitemap",
                "Prototipi hi-fi pronti per l'handover",
              ],
            },
            {
              title: 'Design UI',
              description:
                'Design UI moderno allineato con identità di marca, design system e aspettative utente.',
              details:
                'La nostra pratica UI consegna interfacce allineate al brand con micro-interazioni, temi chiari e scuri adattivi, layout responsive fluidi e motion design.',
              outcomes: [
                'Kit UI allineato al brand con stati documentati',
                'Token per tema chiaro e scuro definiti',
                'Linee guida per micro-interazioni e motion',
                'Sistema responsive con griglia e breakpoint',
                'Libreria Figma consegnata con documentazione',
              ],
            },
            {
              title: 'Web design',
              description:
                'Design web responsive ottimizzato per le prestazioni che converte utenti in clienti.',
              details:
                'Progettiamo esperienze web orientate alla conversione ottimizzate per Core Web Vitals come LCP, CLS e FID, combinando gerarchia persuasiva e posizionamento strategico delle CTA.',
              outcomes: [
                'Design di landing page orientati alla conversione',
                'Obiettivi Core Web Vitals concordati a monte',
                'Spec di animazione nel performance budget',
                'Varianti A/B per i funnel principali',
                "Pacchetto di handoff con asset per l'ingegneria",
              ],
            },
            {
              title: 'Design di app mobili',
              description:
                'Esperienze mobili intuitive per iOS e Android secondo gli standard HIG.',
              details:
                'Progettiamo esperienze mobili con feeling nativo conformi ad Apple HIG e Material Design 3, con interazioni gestuali e parità cross-platform.',
              outcomes: [
                'Specifiche di design native iOS e Android',
                'Navigazione e pattern specifici per piattaforma',
                'Linee guida di gesti e interazioni aptiche',
                'Design di onboarding e first-run experience',
                'Creatività per App Store e Play Store',
              ],
            },
            {
              title: 'Ricerca utente',
              description:
                'Ricerca, test e analytics completi per validare decisioni di design con dati reali.',
              details:
                'La nostra pratica include studi etnografici, usability moderata, sperimentazione A/B, analisi heatmap, card sorting e analytics quantitativa.',
              outcomes: [
                'Piano di ricerca con criteri di successo',
                'Report di test moderati e non moderati',
                'Documentazione di persona e JTBD',
                'Revisione di analytics quantitativa con findings',
                'Backlog prioritizzato di miglioramenti',
              ],
            },
            {
              title: 'Design system',
              description:
                'Design system e librerie di componenti scalabili che accelerano i team di prodotto.',
              details:
                'Architettiamo design system token-driven in Figma con componenti auto-layout, strutture varianti e documentazione, insieme a implementazioni Storybook.',
              outcomes: [
                'Token di design per colore, spaziatura e tipografia',
                'Libreria di componenti Figma con varianti',
                'Storybook implementato nel vostro stack',
                'Processo di versioning e release documentato',
                'Playbook di adozione e modello di governance',
              ],
            },
          ],
        },
        useCases: {
          badge: "Casi d'uso",
          title: "Casi d'uso che gestiamo con i servizi di experience design",
          description:
            'Lavoriamo con team SaaS, e-commerce, fintech ed enterprise per progettare esperienze che gli utenti amano e le aziende misurano.',
          items: [
            {
              title: 'Redesign e revamp di prodotto',
              description:
                'Trasforma interfacce obsolete in esperienze moderne orientate alla conversione senza disturbare gli utenti esistenti.',
            },
            {
              title: 'Revisione UX di app mobili',
              description:
                'Ridisegna app mobili con onboarding migliorato, minor attrito e pattern di interazione nativi.',
            },
            {
              title: 'Design di esperienze e-commerce',
              description:
                "Progetta flussi di scoperta, carrello e checkout che riducono il drop-off e aumentano il valore medio dell'ordine.",
            },
            {
              title: 'Design di dashboard enterprise',
              description:
                'Crea dashboard ricche di dati con gerarchia visiva chiara per operations, analytics e reporting esecutivo.',
            },
            {
              title: 'Creazione di design system',
              description:
                "Costruisci librerie Figma scalabili e implementazioni Storybook che danno ai team un'unica fonte di verità.",
            },
            {
              title: 'Identità digitale di marca',
              description:
                'Sviluppa identità digitali coerenti, loghi, tipografia, sistemi di colore e motion design.',
            },
            {
              title: "Rimedio dell'accessibilità",
              description:
                'Audita prodotti esistenti contro WCAG 2.2 e implementa correzioni sistematiche per tastiera, lettori e contrasto.',
            },
            {
              title: "Design dell'onboarding",
              description:
                'Progetta flussi di attivazione che guidano i nuovi utenti al loro "momento aha" più velocemente.',
            },
          ],
        },
        expertise: {
          badge: 'Perché sceglierci',
          title:
            'Precisione, competenza e strumenti che rendono la tua esperienza digitale a prova di futuro',
          description:
            'La nostra pratica di design guidata dalla ricerca combina eccellenza creativa con rigore ingegneristico per esperienze che performano.',
          items: [
            {
              title: 'Design basato sulla ricerca',
              description:
                'Ogni decisione di design è ancorata a dati reali, interviste, test di usabilità, heatmap e analytics.',
            },
            {
              title: 'Ottimizzazione del tasso di conversione',
              description:
                'Progettiamo con risultati di business misurabili in mente, A/B testing e ottimizzazione iterativa generano +2x di conversione.',
            },
            {
              title: 'Precisione design-to-code',
              description:
                'I nostri designer lavorano mano nella mano con i frontend engineer per implementazioni pixel-perfect e performanti.',
            },
            {
              title: 'Web design orientato alle prestazioni',
              description:
                'Ottimizziamo i design per Core Web Vitals, LCP, CLS, FID, per pagine belle e veloci.',
            },
            {
              title: 'Accessibilità come standard',
              description:
                'La conformità WCAG 2.2 è integrata in ogni progetto, contrasto, navigazione da tastiera, ruoli ARIA e test con screen reader.',
            },
            {
              title: 'Design system scalabili',
              description:
                'Costruiamo librerie Figma token-driven e componenti Storybook che scalano su più prodotti e team.',
            },
          ],
        },
        technologies: {
          badge: 'Stack di design',
          title: 'Strumenti moderni di design e sviluppo',
          description:
            'Usiamo strumenti leader del settore per creare e consegnare design eccezionali.',
          categories: [
            'Strumenti di design',
            'Prototipazione',
            'Ricerca utente',
            'Tecnologie web',
            'Framework frontend',
            'Collaborazione',
          ],
        },
      },
    },
  },
}
