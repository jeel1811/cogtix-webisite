export interface HireTalentTechItem {
  name: string
  note?: string
}

export interface HireTalentTechCategory {
  title: string
  items: HireTalentTechItem[]
}

export type HireTalentTechStack = HireTalentTechCategory[]

const SHARED = {
  cloud: [
    { name: 'Microsoft Azure' },
    { name: 'AWS' },
    { name: 'Google Cloud' },
    { name: 'Docker' },
    { name: 'Kubernetes' },
    { name: 'Azure Functions' },
  ] as HireTalentTechItem[],
  databases: [
    { name: 'SQL Server' },
    { name: 'PostgreSQL' },
    { name: 'MySQL' },
    { name: 'MongoDB' },
    { name: 'Azure SQL Database' },
    { name: 'Redis' },
  ] as HireTalentTechItem[],
  devops: [
    { name: 'Azure DevOps' },
    { name: 'Jenkins' },
    { name: 'GitHub Actions' },
    { name: 'CI/CD Pipelines' },
    { name: 'Terraform' },
  ] as HireTalentTechItem[],
  frontendCore: [
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'REST APIs' },
    { name: 'Accessibility' },
  ] as HireTalentTechItem[],
  testing: [
    { name: 'Jest' },
    { name: 'Cypress' },
    { name: 'Playwright' },
    { name: 'Unit testing' },
    { name: 'CI/CD' },
  ] as HireTalentTechItem[],
}

/** Full .NET stack (Bacancy-style categories). */
const DOTNET_STACK: HireTalentTechStack = [
  {
    title: 'Backend & Application Frameworks',
    items: [
      { name: 'ASP.NET Core' },
      { name: 'ASP.NET MVC' },
      { name: '.NET Core' },
      { name: '.NET Framework', note: 'Legacy Support' },
      { name: 'C#' },
      { name: 'SignalR' },
      { name: 'Web API' },
      { name: 'Windows Services' },
      { name: 'WCF', note: 'Legacy Support' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Blazor' },
      { name: 'Vue' },
      { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Mobile & Desktop Development',
    items: [
      { name: '.NET MAUI' },
      { name: 'WPF' },
      { name: 'Windows Forms', note: 'Legacy Support' },
    ],
  },
  {
    title: 'Cloud Platforms & Infrastructure',
    items: SHARED.cloud,
  },
  {
    title: 'Database',
    items: [
      ...SHARED.databases,
      { name: 'Azure Cosmos DB' },
    ],
  },
  {
    title: 'Data Access & ORM',
    items: [
      { name: 'Entity Framework Core' },
      { name: 'LINQ' },
      { name: 'ADO.NET' },
      { name: 'NHibernate', note: 'Legacy Support' },
    ],
  },
  {
    title: 'DevOps & CI/CD',
    items: [
      ...SHARED.devops,
      { name: 'Infrastructure as Code' },
    ],
  },
  {
    title: 'Testing & Monitoring',
    items: [
      { name: 'Selenium' },
      { name: 'Apache JMeter' },
      { name: 'Azure Application Insights' },
      { name: 'Visual Studio Test Tools' },
    ],
  },
]

const ROLE_STACK_OVERRIDES: Record<string, HireTalentTechStack> = {
  'dotnet-developer': DOTNET_STACK,
  'dotnet-core-developer': DOTNET_STACK,
  'csharp-developer': DOTNET_STACK,
}

function frontendStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Core Frontend', items: [...primary, ...SHARED.frontendCore.filter((t) => !primary.some((p) => p.name === t.name))] },
    {
      title: 'Frameworks & Libraries',
      items: [
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Vue' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' },
        { name: 'Bootstrap' },
        { name: 'Material UI' },
      ],
    },
    { title: 'Quality & Delivery', items: SHARED.testing },
    { title: 'Cloud & APIs', items: [{ name: 'REST APIs' }, { name: 'GraphQL' }, ...SHARED.cloud.slice(0, 4)] },
  ]
}

function backendStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Backend & APIs', items: [...primary, { name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'Microservices' }] },
    { title: 'Databases', items: SHARED.databases },
    { title: 'Cloud & Infrastructure', items: SHARED.cloud },
    { title: 'DevOps & CI/CD', items: SHARED.devops },
    { title: 'Security & Observability', items: [{ name: 'OAuth 2.0' }, { name: 'JWT' }, { name: 'Datadog' }, { name: 'Prometheus' }] },
  ]
}

function mobileStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Mobile Platforms', items: primary },
    {
      title: 'Cross-Platform & Native',
      items: [
        { name: 'Flutter' },
        { name: 'React Native' },
        { name: 'iOS' },
        { name: 'Android' },
        { name: 'Swift' },
        { name: 'Kotlin' },
      ],
    },
    { title: 'Backend & APIs', items: [{ name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'Firebase' }, { name: 'Push notifications' }] },
    { title: 'Cloud & Release', items: [{ name: 'App Store release' }, { name: 'Google Play' }, ...SHARED.cloud.slice(0, 3)] },
  ]
}

function dataScienceStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Analytics & BI', items: primary },
    {
      title: 'Data Engineering',
      items: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'Apache Airflow' },
        { name: 'Apache Spark' },
        { name: 'ETL' },
        { name: 'Snowflake' },
        { name: 'Databricks' },
      ],
    },
    { title: 'Visualization', items: [{ name: 'Power BI' }, { name: 'Tableau' }, { name: 'Qlik' }, { name: 'D3.js' }] },
    { title: 'Cloud Warehouses', items: [{ name: 'BigQuery' }, { name: 'Redshift' }, { name: 'Azure Synapse' }] },
  ]
}

function automationStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Automation Platforms', items: primary },
    {
      title: 'Integrations',
      items: [
        { name: 'REST APIs' },
        { name: 'Microsoft Graph API' },
        { name: 'Power Automate' },
        { name: 'SharePoint Online' },
        { name: 'Salesforce' },
      ],
    },
    { title: 'Governance & Ops', items: [{ name: 'Workflow design' }, { name: 'Monitoring' }, { name: 'Documentation' }, { name: 'Agile' }] },
    { title: 'Cloud', items: SHARED.cloud.slice(0, 4) },
  ]
}

function mlStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'ML Frameworks', items: primary },
    {
      title: 'MLOps & Serving',
      items: [
        { name: 'MLflow' },
        { name: 'TensorFlow' },
        { name: 'PyTorch' },
        { name: 'FastAPI' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
      ],
    },
    { title: 'Data & Pipelines', items: [{ name: 'Python' }, { name: 'Pandas' }, { name: 'Apache Airflow' }, { name: 'Apache Kafka' }] },
    { title: 'Cloud ML', items: [{ name: 'AWS SageMaker' }, { name: 'Azure ML' }, { name: 'Google Vertex AI' }] },
  ]
}

function cloudStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'Cloud Platforms', items: primary },
    { title: 'Containers & Orchestration', items: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Azure Kubernetes (AKS)' }, { name: 'ECS/EKS' }] },
    { title: 'Infrastructure as Code', items: [{ name: 'Terraform' }, { name: 'Ansible' }, { name: 'CloudFormation' }, { name: 'Bicep / ARM Templates' }] },
    { title: 'Security & Identity', items: [{ name: 'Azure Active Directory' }, { name: 'Azure Key Vault' }, { name: 'IAM' }] },
    { title: 'Monitoring', items: [{ name: 'Datadog' }, { name: 'Prometheus' }, { name: 'Application Insights' }] },
  ]
}

function devopsStack(primary: HireTalentTechItem[]): HireTalentTechStack {
  return [
    { title: 'CI/CD & Automation', items: [...primary, { name: 'Jenkins' }, { name: 'GitHub Actions' }, { name: 'GitLab CI' }, { name: 'Azure DevOps' }] },
    { title: 'Containers & Orchestration', items: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Helm' }] },
    { title: 'Infrastructure as Code', items: [{ name: 'Terraform' }, { name: 'Ansible' }, { name: 'Puppet' }] },
    { title: 'Observability', items: [{ name: 'Datadog' }, { name: 'Prometheus' }, { name: 'ELK Stack' }, { name: 'Splunk' }] },
    { title: 'Cloud', items: SHARED.cloud },
  ]
}

function softwareStack(): HireTalentTechStack {
  return [
    {
      title: 'Delivery Practices',
      items: [
        { name: 'Agile' },
        { name: 'Scrum' },
        { name: 'Code review' },
        { name: 'Documentation' },
        { name: 'Remote collaboration' },
      ],
    },
    {
      title: 'Full-Stack Technologies',
      items: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Python' },
        { name: '.NET' },
      ],
    },
    { title: 'Cloud & DevOps', items: [...SHARED.cloud.slice(0, 4), ...SHARED.devops.slice(0, 3)] },
    { title: 'Databases', items: SHARED.databases.slice(0, 5) },
  ]
}

const SLUG_PRIMARY: Record<string, HireTalentTechItem[]> = {
  'angular-developer': [{ name: 'Angular' }],
  'react-developer': [{ name: 'React' }],
  'vue-developer': [{ name: 'Vue' }],
  'javascript-developer': [{ name: 'JavaScript' }],
  'ui-ux-developer': [{ name: 'Figma' }, { name: 'Adobe XD' }],
  'html-css-developer': [{ name: 'HTML5' }, { name: 'CSS3' }],
  'tailwind-css-developer': [{ name: 'Tailwind CSS' }],
  'python-developer': [{ name: 'Python' }, { name: 'FastAPI' }, { name: 'Django' }],
  'node-developer': [{ name: 'Node.js' }, { name: 'Express' }],
  'java-developer': [{ name: 'Java' }],
  'spring-boot-developer': [{ name: 'Spring Boot' }, { name: 'Java' }],
  'django-developer': [{ name: 'Django' }, { name: 'Python' }],
  'flutter-developer': [{ name: 'Flutter' }],
  'ios-developer': [{ name: 'iOS' }, { name: 'Swift' }],
  'android-developer': [{ name: 'Android' }, { name: 'Kotlin' }],
  'data-scientist': [{ name: 'Python' }, { name: 'Scikit-learn' }, { name: 'TensorFlow' }],
  'data-engineer': [{ name: 'Apache Airflow' }, { name: 'Apache Spark' }],
  'data-visualization-expert': [{ name: 'Power BI' }, { name: 'Tableau' }],
  'data-analyst': [{ name: 'SQL' }, { name: 'Power BI' }],
  'power-bi-developer': [{ name: 'Power BI' }],
  'tableau-developer': [{ name: 'Tableau' }],
  'etl-developer': [{ name: 'Apache Airflow' }, { name: 'ETL' }],
  'pandas-developer': [{ name: 'Pandas' }, { name: 'Python' }],
  'qlik-developer': [{ name: 'Qlik' }],
  'powerbi-consultant': [{ name: 'Power BI' }],
  'tableau-consultant': [{ name: 'Tableau' }],
  'automation-anywhere-developer': [{ name: 'Automation Anywhere' }],
  'rpa-developer': [{ name: 'UiPath' }, { name: 'Automation Anywhere' }],
  'n8n-developer': [{ name: 'n8n' }],
  'uipath-developer': [{ name: 'UiPath' }],
  'power-automate-consultant': [{ name: 'Power Automate' }],
  'power-automate-developer': [{ name: 'Power Automate' }],
  'ml-developer': [{ name: 'TensorFlow' }, { name: 'PyTorch' }],
  'neural-network-developer': [{ name: 'PyTorch' }, { name: 'TensorFlow' }],
  'keras-developer': [{ name: 'Keras' }],
  'pytorch-developer': [{ name: 'PyTorch' }],
  'mlops-engineer': [{ name: 'MLflow' }, { name: 'Kubernetes' }],
  'cloud-developer': [{ name: 'AWS' }, { name: 'Azure' }, { name: 'Google Cloud' }],
  'aws-developer': [{ name: 'AWS' }],
  'azure-developer': [{ name: 'Azure' }],
  'google-cloud-developer': [{ name: 'Google Cloud' }],
  'devops-developer': [{ name: 'CI/CD Pipelines' }],
  'devsecops-developer': [{ name: 'DevSecOps' }],
  'kubernetes-developer': [{ name: 'Kubernetes' }],
  'terraform-developer': [{ name: 'Terraform' }],
  'docker-developer': [{ name: 'Docker' }],
}

export function getHireTalentTechStack(slug: string, category: string): HireTalentTechStack {
  if (ROLE_STACK_OVERRIDES[slug]) {
    return ROLE_STACK_OVERRIDES[slug]
  }

  const primary = SLUG_PRIMARY[slug] ?? [{ name: category }]

  switch (category) {
    case 'Frontend':
      return frontendStack(primary)
    case 'Backend':
      return backendStack(primary)
    case 'Mobile App':
      return mobileStack(primary)
    case 'Data Science':
      return dataScienceStack(primary)
    case 'Automation':
      return automationStack(primary)
    case 'Machine Learning':
      return mlStack(primary)
    case 'Cloud':
      return cloudStack(primary)
    case 'DevOps':
      return devopsStack(primary)
    case 'Software':
    default:
      return softwareStack()
  }
}
