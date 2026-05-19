import { getHireTalentTechStack, type HireTalentTechStack } from './hireTalentTechStacks'

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
  introLead: string
  introParagraphs: string[]
  whyTitle: string
  whyPoints: string[]
  skillTags: string[]
  techStack: HireTalentTechStack
  engagementTitle: string
  engagementCards: { title: string; body: string }[]
  faqTitle: string
  faqs: { q: string; paragraphs: string[] }[]
}

export type HireTalentFaqItem = HireTalentRoleContent['faqs'][number]

function getIntroLead(label: string, category: string): string {
  const role = label
    .replace(/\s+Developer$/i, '')
    .replace(/\s+Engineer$/i, '')
    .replace(/\s+Expert$/i, '')
    .replace(/\s+Consultant$/i, '')
  const byCat: Record<string, string> = {
    Frontend: `We match ${label}s who care about performance, accessibility, and maintainable UI architecture, not just pixel-perfect screens. Before anyone joins your sprint, we align on design systems, testing expectations, and how ${role} work integrates with your backend and release process.`,
    Backend: `Our ${label}s are screened for API design, data modeling, security, and operational discipline. We clarify ownership boundaries, deployment standards, and how your ${role} stack fits your roadmap so engineers contribute from week one without slowing the team down.`,
    Software: `Offshore and distributed engineers succeed when communication is explicit. We set cadence, documentation norms, and delivery checkpoints up front so your extended team feels embedded, not disconnected from product decisions.`,
    'Mobile App': `Mobile delivery needs store readiness, device coverage, and reliable releases. We place ${label}s who understand release trains, analytics, offline behavior, and the trade-offs between native and cross-platform approaches for your product goals.`,
    'Data Science': `Analytics and data roles fail when stakeholders cannot trust the numbers. We staff ${label}s who pair technical depth with clear storytelling, reproducible pipelines, and governance your business teams can rely on.`,
    Automation: `Automation only pays off when workflows are stable and owned. We match ${label}s who design for exceptions, monitoring, and handoff to operations, not one-off scripts that break on the next UI change.`,
    'Machine Learning': `ML in production requires more than notebooks. We provide ${label}s who think in evaluation, deployment, monitoring, and cost, so models move from experiment to value without surprises in production.`,
    Cloud: `Cloud work is never just provisioning. We align ${label}s on identity, networking, cost, resilience, and IaC practices before they touch your environments, so every change stays auditable and reversible.`,
    DevOps: `Platform and DevOps talent should shorten feedback loops, not add process. We place ${label}s who improve pipelines, environments, and runbooks while keeping security and reliability as shared defaults.`,
  }
  return (
    byCat[category] ??
    `We help you hire ${label}s with clear expectations on skills, communication, and delivery standards, so your team gains capacity without taking on hidden coordination overhead.`
  )
}

function getIntroParagraphs(label: string, category: string): string[] {
  const role = label.replace(/\s+Developer$/i, '').replace(/\s+Engineer$/i, '')
  return [
    `Whether you are launching a new product, modernizing a legacy platform, or need experienced ${label.toLowerCase()}s for a time-bound initiative, Cogtix focuses on outcomes, not ticket volume. We shortlist engineers who have shipped in comparable stacks, can explain trade-offs clearly, and are comfortable working inside your ceremonies, tools, and definition of done.`,
    `Every engagement starts with alignment: scope boundaries, tech standards, code review expectations, and how progress is reported to stakeholders. That means your ${role} contributors integrate with product and engineering leads instead of working in isolation. You get predictable velocity, transparent status, and practices aligned to enterprise-grade quality: documentation, testing, security awareness, and maintainable code.`,
    `From staff augmentation to dedicated squads, we stay involved after onboarding. If priorities shift or the fit needs adjustment, we respond quickly so delivery momentum is protected. That is how teams across the USA, UK, India, and Australia scale ${category.toLowerCase()} capability without compromising on communication or accountability.`,
  ]
}

function getRoleFaqs(label: string, category: string): { q: string; paragraphs: string[] }[] {
  return [
    {
      q: `How fast can a ${label} start on my project?`,
      paragraphs: [
        `Most ${label.toLowerCase()}s can begin within two to four weeks after you approve a profile. Timing depends on notice periods, security clearance, and how quickly your onboarding checklist is completed. We confirm realistic start dates before you commit.`,
        `We coordinate repository access, environment setup, and communication channels ahead of day one so your engineer can join standups, pick up the first ticket, and align with your tech lead without a long ramp-up period.`,
      ],
    },
    {
      q: 'Can engineers work in our time zone and overlap with our core hours?',
      paragraphs: [
        `Yes. We routinely staff for overlap with teams in North America, Europe, APAC, and Australia. During discovery we document your preferred working window, ceremony schedule, and escalation paths in the statement of work.`,
        `Engineers are expected to attend agreed meetings, respond within defined SLAs, and surface blockers early. That keeps distributed collaboration predictable for product owners and engineering managers who need reliable touchpoints.`,
      ],
    },
    {
      q: 'What if the engineer is not the right fit after we start?',
      paragraphs: [
        `We treat fit as a shared responsibility. If communication, pace, or technical depth is not meeting expectations, we review specific feedback with you and agree on next steps: additional context, pairing, or a replacement profile.`,
        `Our priority is delivery continuity. Replacement timelines depend on role rarity and notice periods, but we act quickly on critical workstreams so your roadmap does not stall while a better match is onboarded.`,
      ],
    },
    {
      q: 'Do you sign NDAs, follow our security policies, and work under our agreements?',
      paragraphs: [
        `Yes. We regularly work under customer MSAs, NDAs, data-processing terms, and security questionnaires. Engineers can use your SSO, VPN, and approved tooling where required.`,
        `We support background checks and compliance steps when your industry requires them. Intellectual property, source code access, and confidentiality expectations are agreed in writing before work begins so legal and security teams have clear guardrails.`,
      ],
    },
    {
      q: `What ${category.toLowerCase()} skills and experience do you screen for?`,
      paragraphs: [
        `We evaluate hands-on experience with the technologies on this page, production delivery history, code quality habits, and how candidates explain trade-offs in technical interviews.`,
        `For ${label.toLowerCase()} roles we also assess ownership: tests, code review participation, documentation, and collaboration with product and design. You receive profiles matched to your stack and seniority, not generic resumes sent without vetting.`,
      ],
    },
    {
      q: 'How do you price engagements and what models are available?',
      paragraphs: [
        `We offer dedicated resources (typically monthly), time-and-materials hourly arrangements, and fixed-scope delivery when requirements are stable enough to estimate. Pricing reflects seniority, stack, and engagement length.`,
        `After a short discovery call we share a transparent proposal with scope assumptions, reporting cadence, and change-management approach so finance and engineering leads can plan with confidence.`,
      ],
    },
  ]
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
    introLead: getIntroLead(label, cat.label),
    introParagraphs: getIntroParagraphs(label, cat.label),
    whyTitle: 'What you get',
    whyPoints: [
      'Pre-vetted engineers interviewed for communication, depth, and ownership.',
      'Flexible models: dedicated resources, discovery-led engagements, or fixed-scope delivery.',
      'Global presence with overlap-friendly hours across USA, UK, India, and Australia.',
    ],
    skillTags: skills,
    techStack: getHireTalentTechStack(slug, cat.label),
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
    faqs: getRoleFaqs(label, cat.label),
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
