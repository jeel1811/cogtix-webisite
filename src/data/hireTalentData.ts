type RoleDef = { slug: string; label: string }

type CatDef = { label: string; roles: RoleDef[] }

/** Source of truth for navbar tree and static routes under /hire-talent/[slug] */
const HIRE_TALENT_RAW: CatDef[] = [
  {
    label: 'Frontend',
    roles: [
      { slug: 'angular-developer', label: 'Angular Developer' },
      { slug: 'react-developer', label: 'React Developer' },
      { slug: 'vue-developer', label: 'Vue Developer' },
      { slug: 'javascript-developer', label: 'JavaScript Developer' },
      { slug: 'ui-ux-developer', label: 'UI/UX Developer' },
      { slug: 'html-css-developer', label: 'HTML/CSS Developer' },
      { slug: 'tailwind-css-developer', label: 'Tailwind CSS Developer' },
    ],
  },
  {
    label: 'Backend',
    roles: [
      { slug: 'python-developer', label: 'Python Developer' },
      { slug: 'node-developer', label: 'Node Developer' },
      { slug: 'dotnet-developer', label: '.NET Developer' },
      { slug: 'dotnet-core-developer', label: '.NET Core Developer' },
      { slug: 'java-developer', label: 'Java Developer' },
      { slug: 'spring-boot-developer', label: 'Spring Boot Developer' },
      { slug: 'django-developer', label: 'Django Developer' },
      { slug: 'csharp-developer', label: 'C# Developer' },
    ],
  },
  {
    label: 'Software',
    roles: [{ slug: 'offshore-developer', label: 'Offshore Developer' }],
  },
  {
    label: 'Mobile App',
    roles: [
      { slug: 'flutter-developer', label: 'Flutter Developer' },
      { slug: 'ios-developer', label: 'iOS Developer' },
      { slug: 'android-developer', label: 'Android Developer' },
    ],
  },
  {
    label: 'Data Science',
    roles: [
      { slug: 'data-scientist', label: 'Data Scientist' },
      { slug: 'data-engineer', label: 'Data Engineer' },
      { slug: 'data-visualization-expert', label: 'Data Visualization Expert' },
      { slug: 'data-analyst', label: 'Data Analyst' },
      { slug: 'power-bi-developer', label: 'Power BI Developer' },
      { slug: 'tableau-developer', label: 'Tableau Developer' },
      { slug: 'etl-developer', label: 'ETL Developer' },
      { slug: 'pandas-developer', label: 'Pandas Developer' },
      { slug: 'qlik-developer', label: 'Qlik Developer' },
      { slug: 'powerbi-consultant', label: 'PowerBI Consultant' },
      { slug: 'tableau-consultant', label: 'Tableau Consultant' },
    ],
  },
  {
    label: 'Automation',
    roles: [
      { slug: 'automation-anywhere-developer', label: 'Automation Anywhere Developer' },
      { slug: 'rpa-developer', label: 'RPA Developer' },
      { slug: 'n8n-developer', label: 'n8n Developer' },
      { slug: 'uipath-developer', label: 'UiPath Developer' },
      { slug: 'power-automate-consultant', label: 'Power Automate Consultant' },
      { slug: 'power-automate-developer', label: 'Power Automate Developer' },
    ],
  },
  {
    label: 'Machine Learning',
    roles: [
      { slug: 'ml-developer', label: 'ML Developer' },
      { slug: 'neural-network-developer', label: 'Neural Network Developer' },
      { slug: 'keras-developer', label: 'Keras Developer' },
      { slug: 'pytorch-developer', label: 'Pytorch Developer' },
      { slug: 'mlops-engineer', label: 'MLOps Engineer' },
    ],
  },
  {
    label: 'Cloud',
    roles: [
      { slug: 'cloud-developer', label: 'Cloud Developer' },
      { slug: 'aws-developer', label: 'AWS Developer' },
      { slug: 'azure-developer', label: 'Azure Developer' },
      { slug: 'google-cloud-developer', label: 'Google Cloud Developer' },
    ],
  },
  {
    label: 'DevOps',
    roles: [
      { slug: 'devops-developer', label: 'DevOps Developer' },
      { slug: 'devsecops-developer', label: 'DevsecOps Developer' },
      { slug: 'kubernetes-developer', label: 'Kubernetes Developer' },
      { slug: 'terraform-developer', label: 'Terraform Developer' },
      { slug: 'docker-developer', label: 'Docker Developer' },
    ],
  },
]

export const ALL_HIRE_TALENT_SLUGS: string[] = HIRE_TALENT_RAW.flatMap((c) =>
  c.roles.map((r) => r.slug),
)

/** Short copy for landing role cards (category + role label). */
export function getHireTalentRoleCardBlurb(category: string, roleLabel: string): string {
  const role = roleLabel.replace(/\s+Developer$/i, '').replace(/\s+Engineer$/i, '').replace(/\s+Expert$/i, '').replace(/\s+Consultant$/i, '')
  const byCat: Record<string, string> = {
    Frontend: `Ship accessible, performant interfaces with ${role} expertise and your design system.`,
    Backend: `Reliable APIs, data layers, and services with ${role} depth and production discipline.`,
    Software: `Experienced engineers who plug into your delivery rhythm and communication style.`,
    'Mobile App': `Native-quality mobile experiences with ${role} specialists across platforms.`,
    'Data Science': `Insights, pipelines, and dashboards with ${role} skills aligned to your stack.`,
    Automation: `Process automation and integrations using ${role} patterns your ops team can own.`,
    'Machine Learning': `Modeling, evaluation, and delivery paths with ${role} practitioners.`,
    Cloud: `Secure, scalable cloud foundations with ${role} engineers across major providers.`,
    DevOps: `CI/CD, platforms, and reliability with ${role} engineers who treat security as default.`,
  }
  return byCat[category] ?? `Vetted ${roleLabel}s embedded with your team on flexible terms.`
}

/** Lucide icon name per role slug (fallback by category in getHireTalentRoleIconName). */
const HIRE_ROLE_LUCIDE_ICON: Record<string, string> = {
  'angular-developer': 'Triangle',
  'react-developer': 'Atom',
  'vue-developer': 'Layers',
  'javascript-developer': 'FileCode2',
  'ui-ux-developer': 'Palette',
  'html-css-developer': 'Code',
  'tailwind-css-developer': 'Wind',
  'python-developer': 'Braces',
  'node-developer': 'Server',
  'dotnet-developer': 'Box',
  'dotnet-core-developer': 'Boxes',
  'java-developer': 'Coffee',
  'spring-boot-developer': 'Leaf',
  'django-developer': 'Database',
  'csharp-developer': 'Hash',
  'offshore-developer': 'Globe2',
  'flutter-developer': 'Smartphone',
  'ios-developer': 'Smartphone',
  'android-developer': 'TabletSmartphone',
  'data-scientist': 'LineChart',
  'data-engineer': 'Database',
  'data-visualization-expert': 'BarChart3',
  'data-analyst': 'PieChart',
  'power-bi-developer': 'Presentation',
  'tableau-developer': 'LayoutGrid',
  'etl-developer': 'ArrowLeftRight',
  'pandas-developer': 'FileSpreadsheet',
  'qlik-developer': 'Gauge',
  'powerbi-consultant': 'Presentation',
  'tableau-consultant': 'LayoutGrid',
  'automation-anywhere-developer': 'Bot',
  'rpa-developer': 'Workflow',
  'n8n-developer': 'GitBranch',
  'uipath-developer': 'Route',
  'power-automate-consultant': 'Zap',
  'power-automate-developer': 'Zap',
  'ml-developer': 'Brain',
  'neural-network-developer': 'Network',
  'keras-developer': 'CircuitBoard',
  'pytorch-developer': 'Flame',
  'mlops-engineer': 'Cpu',
  'cloud-developer': 'Cloud',
  'aws-developer': 'Cloud',
  'azure-developer': 'CloudCog',
  'google-cloud-developer': 'Cloud',
  'devops-developer': 'Terminal',
  'devsecops-developer': 'Shield',
  'kubernetes-developer': 'Boxes',
  'terraform-developer': 'Package',
  'docker-developer': 'Container',
}

const CATEGORY_DEFAULT_LUCIDE_ICON: Record<string, string> = {
  Frontend: 'Layout',
  Backend: 'Server',
  Software: 'Code2',
  'Mobile App': 'Smartphone',
  'Data Science': 'LineChart',
  Automation: 'Workflow',
  'Machine Learning': 'Brain',
  Cloud: 'Cloud',
  DevOps: 'Terminal',
}

export function getHireTalentRoleIconName(slug: string, category: string): string {
  return HIRE_ROLE_LUCIDE_ICON[slug] ?? CATEGORY_DEFAULT_LUCIDE_ICON[category] ?? 'CircleDot'
}

/** Long intro shown beside the category sidebar on /hire-talent. */
export const HIRE_TALENT_CATEGORY_OVERVIEW: Record<string, string> = {
  Frontend:
    'Frontend talent at Cogtix focuses on clarity, accessibility, and maintainable component architecture. We staff engineers who pair well with design, own performance budgets, and keep releases predictable through testing and CI.',
  Backend:
    'Backend engineers we place think in contracts, observability, and safe change. From monoliths to microservices, they align on your API style, data model, and operational standards so features ship without surprises.',
  Software:
    'When you need versatile engineers who adapt across stacks and time zones, this profile fits product teams that value communication, documentation, and steady throughput over narrow specialization.',
  'Mobile App':
    'Mobile specialists ship store-ready builds, handle device fragmentation, and integrate analytics, auth, and offline behavior thoughtfully, whether you target iOS, Android, or cross-platform with Flutter.',
  'Data Science':
    'Data science and analytics talent helps you turn raw signals into decisions: modeling where it matters, ETL where it is messy, and storytelling where stakeholders need confidence.',
  Automation:
    'Automation talent reduces manual work with governed workflows, resilient integrations, and playbooks your business users can trust, not brittle scripts that break on the next UI change.',
  'Machine Learning':
    'ML practitioners we match care about reproducibility, evaluation, and production constraints. From experimentation to serving and monitoring, they work with your stack and risk posture.',
  Cloud:
    'Cloud engineers design for identity, networking, cost, and resilience. They implement IaC-friendly foundations and partner with security so every environment stays auditable.',
  DevOps:
    'DevOps and platform talent tightens feedback loops: pipelines, environments, secrets, and runbooks that keep teams shipping. Security and reliability are treated as shared defaults, not afterthoughts.',
}

export function getHireTalentCategoryOverview(categoryLabel: string): string {
  return (
    HIRE_TALENT_CATEGORY_OVERVIEW[categoryLabel] ??
    'Explore roles below. Each profile page explains how we engage, what we screen for, and how we de-risk staffing with Cogtix delivery standards.'
  )
}

const CATEGORY_SKILL_TAGS: Record<string, string[]> = {
  Frontend: [
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'REST APIs',
    'Unit testing',
    'CI/CD',
    'Accessibility',
  ],
  Backend: [
    'REST & GraphQL',
    'Microservices',
    'SQL & NoSQL',
    'Docker',
    'API design',
    'Security',
    'Performance',
    'Observability',
  ],
  Software: ['Agile delivery', 'Remote collaboration', 'Documentation', 'Code review', 'SLAs'],
  'Mobile App': [
    'iOS & Android',
    'App Store release',
    'Offline-first',
    'Push notifications',
    'Analytics',
    'Security',
  ],
  'Data Science': [
    'Python',
    'SQL',
    'ETL',
    'Visualization',
    'Statistics',
    'Cloud warehouses',
    'Dashboards',
  ],
  Automation: [
    'Workflow design',
    'Integrations',
    'Governance',
    'Monitoring',
    'Documentation',
    'Citizen dev enablement',
  ],
  'Machine Learning': [
    'Model training',
    'Feature pipelines',
    'Experiment tracking',
    'GPU workloads',
    'Serving APIs',
    'Monitoring',
  ],
  Cloud: ['IaC', 'Networking', 'Identity', 'Cost optimization', 'Security', 'Multi-region'],
  DevOps: ['CI/CD', 'Kubernetes', 'GitOps', 'Secrets', 'SRE practices', 'Infrastructure as code'],
}

export interface HireTalentRoleContent {
  slug: string
  label: string
  category: string
  metaTitle: string
  metaDescription: string
  heroBadge: string
  heroTitle: string
  heroHighlight: string
  heroDescription: string
  introTitle: string
  introBody: string
  whyTitle: string
  whyPoints: string[]
  skillTags: string[]
  engagementTitle: string
  engagementCards: { title: string; body: string }[]
  faqTitle: string
  faqs: { q: string; a: string }[]
}

function buildRoleContent(cat: CatDef, role: RoleDef): HireTalentRoleContent {
  const { label, slug } = role
  const skills = CATEGORY_SKILL_TAGS[cat.label] ?? CATEGORY_SKILL_TAGS['Software']

  return {
    slug,
    label,
    category: cat.label,
    metaTitle: `Hire ${label} | Cogtix Solutions`,
    metaDescription: `Hire vetted ${label}s from Cogtix Solutions. ${cat.label} specialists for product teams, staff augmentation, and dedicated squads. Flexible engagement, global delivery, quality you can measure.`,
    heroBadge: `${cat.label} talent`,
    heroTitle: `Hire ${label}s`,
    heroHighlight: '',
    heroDescription: `Add senior ${label}s who align to your roadmap, engineering standards, and ways of working. We screen for depth, ownership, and communication, and we stay engaged so the match stays strong as priorities shift.`,
    introTitle: `Why teams hire ${label}s through Cogtix`,
    introBody: `Whether you are shipping a new product, modernizing a legacy system, or need surge capacity, we provide engineers who own outcomes, not just tickets. You get clear communication, transparent reporting, and engineering practices aligned to enterprise standards.`,
    whyTitle: 'What you get',
    whyPoints: [
      'Pre-vetted engineers interviewed for communication, depth, and ownership.',
      'Flexible models: dedicated resources, discovery-led engagements, or fixed-scope delivery.',
      'Global presence with overlap-friendly hours across USA, UK, India, and Australia.',
    ],
    skillTags: skills,
    engagementTitle: 'Engagement options',
    engagementCards: [
      {
        title: 'Dedicated resource',
        body: 'Engineers embedded with your team, following your ceremonies and tools.',
      },
      {
        title: 'Discovery-led',
        body: 'Short discovery to de-risk scope, then iterative delivery with clear milestones.',
      },
      {
        title: 'Fixed scope',
        body: 'Defined deliverables and timeline when requirements are stable enough to estimate.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faqs: [
      {
        q: `How fast can a ${label} start?`,
        a: 'Most roles begin within two to four weeks after fit confirmation, depending on notice periods and security onboarding.',
      },
      {
        q: 'Can engineers work in our time zone?',
        a: 'Yes. We staff for overlap with your core hours and set expectations up front in the statement of work.',
      },
      {
        q: 'What if the match is not right?',
        a: 'We work with you on feedback and replacement options so delivery stays on track.',
      },
      {
        q: 'Do you sign NDAs and follow our security policies?',
        a: 'We routinely work under customer MSAs, NDAs, and background checks where required.',
      },
    ],
  }
}

const ROLE_MAP = new Map<string, HireTalentRoleContent>()
for (const cat of HIRE_TALENT_RAW) {
  for (const role of cat.roles) {
    ROLE_MAP.set(role.slug, buildRoleContent(cat, role))
  }
}

export function getHireTalentRole(slug: string): HireTalentRoleContent | null {
  return ROLE_MAP.get(slug) ?? null
}

export function getHireTalentCategoriesForLanding(): CatDef[] {
  return HIRE_TALENT_RAW
}
