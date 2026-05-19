export interface HireTalentTechItem {
  name: string
  note?: string
}

export interface HireTalentTechCategory {
  title: string
  items: HireTalentTechItem[]
}

export type HireTalentTechStack = HireTalentTechCategory[]

type Items = HireTalentTechItem[]

function cat(title: string, items: Items): HireTalentTechCategory {
  return { title, items }
}

const WEB_FUNDAMENTALS: Items = [
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'REST APIs' },
  { name: 'Accessibility' },
]

const FRONTEND_TESTING: Items = [
  { name: 'Jest' },
  { name: 'Cypress' },
  { name: 'Playwright' },
  { name: 'Unit testing' },
]

const BACKEND_APIS: Items = [
  { name: 'REST APIs' },
  { name: 'GraphQL' },
  { name: 'OAuth 2.0' },
  { name: 'JWT' },
]

const BACKEND_DATABASES: Items = [
  { name: 'PostgreSQL' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
  { name: 'Redis' },
  { name: 'SQL Server' },
]

const BACKEND_CLOUD: Items = [
  { name: 'Docker' },
  { name: 'Kubernetes' },
  { name: 'Microsoft Azure' },
  { name: 'AWS' },
]

const BACKEND_DEVOPS: Items = [
  { name: 'GitHub Actions' },
  { name: 'Azure DevOps' },
  { name: 'CI/CD Pipelines' },
  { name: 'Terraform' },
]

/** Shared .NET web stack (role-specific frontends added per slug). */
function dotnetWebStack(frontend: Items): HireTalentTechStack {
  return [
    cat('Backend & .NET', [
      { name: 'C#' },
      { name: '.NET' },
      { name: 'ASP.NET' },
      { name: 'Web API' },
      { name: 'SignalR' },
      { name: 'Entity Framework' },
      { name: 'LINQ' },
    ]),
    cat('Frontend', frontend),
    cat('Data & Storage', [
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
      { name: 'Azure SQL Database' },
      { name: 'Azure Cosmos DB' },
      { name: 'Redis' },
    ]),
    cat('Cloud & DevOps', [
      { name: 'Microsoft Azure' },
      { name: 'Azure DevOps' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'GitHub Actions' },
    ]),
    cat('Testing', [
      { name: 'xUnit' },
      { name: 'Selenium' },
      { name: 'Azure Application Insights' },
    ]),
  ]
}

const ROLE_STACKS: Record<string, HireTalentTechStack> = {
  // ── Frontend ──────────────────────────────────────────────────────────────
  'angular-developer': [
    cat('Angular ecosystem', [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'RxJS' },
      { name: 'NgRx' },
      { name: 'Angular Material' },
    ]),
    cat('Web fundamentals', WEB_FUNDAMENTALS),
    cat('APIs & tooling', [{ name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'Webpack' }, { name: 'Jest' }]),
    cat('Quality & delivery', [...FRONTEND_TESTING, { name: 'CI/CD' }]),
  ],
  'react-developer': [
    cat('React ecosystem', [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
      { name: 'Redux' },
      { name: 'React Query' },
    ]),
    cat('UI & styling', [
      { name: 'Tailwind CSS' },
      { name: 'Material UI' },
      { name: 'CSS3' },
      { name: 'HTML5' },
    ]),
    cat('APIs & tooling', [{ name: 'REST APIs' }, { name: 'GraphQL' }, { name: 'Jest' }, { name: 'Webpack' }]),
    cat('Quality & delivery', [...FRONTEND_TESTING, { name: 'CI/CD' }]),
  ],
  'vue-developer': [
    cat('Vue ecosystem', [
      { name: 'Vue' },
      { name: 'Nuxt.js' },
      { name: 'TypeScript' },
      { name: 'Pinia' },
      { name: 'Vuex' },
    ]),
    cat('Web fundamentals', [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'REST APIs' },
    ]),
    cat('UI libraries', [{ name: 'Tailwind CSS' }, { name: 'Bootstrap' }, { name: 'Vuetify' }]),
    cat('Quality & delivery', [...FRONTEND_TESTING, { name: 'CI/CD' }]),
  ],
  'javascript-developer': [
    cat('Core JavaScript', [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'ES6+' },
      { name: 'Node.js' },
    ]),
    cat('Web fundamentals', [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'REST APIs' },
      { name: 'Webpack' },
    ]),
    cat('Frameworks', [{ name: 'React' }, { name: 'Vue' }, { name: 'Angular' }]),
    cat('Quality & delivery', [...FRONTEND_TESTING, { name: 'CI/CD' }]),
  ],
  'ui-ux-developer': [
    cat('Design tools', [
      { name: 'Figma' },
      { name: 'Adobe XD' },
      { name: 'Sketch' },
      { name: 'InVision' },
    ]),
    cat('Prototyping & research', [
      { name: 'Framer' },
      { name: 'Maze' },
      { name: 'Hotjar' },
      { name: 'UserTesting' },
    ]),
    cat('Design systems', [
      { name: 'Accessibility' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Tailwind CSS' },
    ]),
    cat('Collaboration', [{ name: 'Miro' }, { name: 'Jira' }, { name: 'Confluence' }, { name: 'Slack' }]),
  ],
  'html-css-developer': [
    cat('Markup & styling', [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Sass' },
      { name: 'Bootstrap' },
      { name: 'Tailwind CSS' },
    ]),
    cat('Responsive & accessible UI', [
      { name: 'Accessibility' },
      { name: 'JavaScript' },
      { name: 'REST APIs' },
    ]),
    cat('Quality', [{ name: 'Jest' }, { name: 'Cypress' }, { name: 'Playwright' }]),
  ],
  'tailwind-css-developer': [
    cat('Tailwind & CSS', [
      { name: 'Tailwind CSS' },
      { name: 'CSS3' },
      { name: 'HTML5' },
      { name: 'PostCSS' },
    ]),
    cat('Frontend integration', [
      { name: 'React' },
      { name: 'Vue' },
      { name: 'Next.js' },
      { name: 'TypeScript' },
    ]),
    cat('Quality & delivery', [...FRONTEND_TESTING, { name: 'CI/CD' }]),
  ],

  // ── Backend ───────────────────────────────────────────────────────────────
  'python-developer': [
    cat('Python backend', [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: 'Flask' },
    ]),
    cat('APIs & architecture', [...BACKEND_APIS, { name: 'Microservices' }]),
    cat('Databases', BACKEND_DATABASES),
    cat('Cloud & DevOps', [...BACKEND_CLOUD, ...BACKEND_DEVOPS]),
  ],
  'node-developer': [
    cat('Node.js backend', [
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'TypeScript' },
      { name: 'NestJS' },
    ]),
    cat('APIs & architecture', [...BACKEND_APIS, { name: 'Microservices' }]),
    cat('Databases', BACKEND_DATABASES),
    cat('Cloud & DevOps', [...BACKEND_CLOUD, ...BACKEND_DEVOPS]),
  ],
  'django-developer': [
    cat('Django stack', [
      { name: 'Django' },
      { name: 'Python' },
      { name: 'Django REST Framework' },
      { name: 'Celery' },
    ]),
    cat('APIs & data', [...BACKEND_APIS, { name: 'PostgreSQL' }, { name: 'Redis' }]),
    cat('Cloud & deployment', [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'GitHub Actions' },
    ]),
    cat('Testing', [{ name: 'pytest' }, { name: 'Unit testing' }]),
  ],
  'java-developer': [
    cat('Java backend', [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Maven' },
      { name: 'Gradle' },
    ]),
    cat('APIs & architecture', [...BACKEND_APIS, { name: 'Microservices' }]),
    cat('Databases', BACKEND_DATABASES),
    cat('Cloud & DevOps', [...BACKEND_CLOUD, ...BACKEND_DEVOPS]),
  ],
  'spring-boot-developer': [
    cat('Spring ecosystem', [
      { name: 'Spring Boot' },
      { name: 'Java' },
      { name: 'Spring Security' },
      { name: 'Spring Data' },
    ]),
    cat('APIs & architecture', [...BACKEND_APIS, { name: 'Microservices' }]),
    cat('Databases', BACKEND_DATABASES),
    cat('Cloud & DevOps', [...BACKEND_CLOUD, ...BACKEND_DEVOPS]),
  ],
  'dotnet-developer': dotnetWebStack([
    { name: 'Blazor' },
    { name: 'React' },
    { name: 'Angular' },
    { name: 'TypeScript' },
    { name: 'HTML5' },
    { name: 'CSS3' },
  ]),
  'dotnet-core-developer': dotnetWebStack([
    { name: 'Blazor' },
    { name: 'TypeScript' },
    { name: 'HTML5' },
    { name: 'CSS3' },
  ]),
  'csharp-developer': [
    cat('C# & .NET', [
      { name: 'C#' },
      { name: '.NET' },
      { name: 'ASP.NET' },
      { name: 'Entity Framework' },
      { name: 'LINQ' },
    ]),
    cat('Application types', [
      { name: 'Web API' },
      { name: 'Windows Services' },
      { name: 'WPF' },
      { name: '.NET MAUI' },
    ]),
    cat('Data & cloud', [
      { name: 'SQL Server' },
      { name: 'Azure SQL Database' },
      { name: 'Microsoft Azure' },
      { name: 'Azure DevOps' },
    ]),
    cat('Testing', [{ name: 'xUnit' }, { name: 'Unit testing' }]),
  ],

  // ── Software ──────────────────────────────────────────────────────────────
  'offshore-developer': [
    cat('Full-stack delivery', [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Python' },
      { name: '.NET' },
    ]),
    cat('Cloud & DevOps', [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'Microsoft Azure' },
      { name: 'GitHub Actions' },
    ]),
    cat('Practices', [
      { name: 'Agile' },
      { name: 'Scrum' },
      { name: 'Code review' },
      { name: 'Remote collaboration' },
    ]),
    cat('Databases', BACKEND_DATABASES.slice(0, 4)),
  ],

  // ── Mobile ────────────────────────────────────────────────────────────────
  'flutter-developer': [
    cat('Flutter & Dart', [
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Provider' },
      { name: 'Bloc' },
    ]),
    cat('Platforms', [{ name: 'iOS' }, { name: 'Android' }]),
    cat('Backend integration', [
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Firebase' },
      { name: 'Push notifications' },
    ]),
    cat('Release', [{ name: 'App Store release' }, { name: 'Google Play' }, { name: 'CI/CD' }]),
  ],
  'ios-developer': [
    cat('iOS native', [
      { name: 'iOS' },
      { name: 'Swift' },
      { name: 'SwiftUI' },
      { name: 'UIKit' },
      { name: 'Xcode' },
    ]),
    cat('Architecture & APIs', [
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Core Data' },
      { name: 'Push notifications' },
    ]),
    cat('Quality & release', [
      { name: 'Unit testing' },
      { name: 'App Store release' },
      { name: 'CI/CD' },
    ]),
  ],
  'android-developer': [
    cat('Android native', [
      { name: 'Android' },
      { name: 'Kotlin' },
      { name: 'Jetpack Compose' },
      { name: 'Android Studio' },
    ]),
    cat('Architecture & APIs', [
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Room' },
      { name: 'Push notifications' },
    ]),
    cat('Quality & release', [
      { name: 'Unit testing' },
      { name: 'Google Play' },
      { name: 'CI/CD' },
    ]),
  ],

  // ── Data Science ──────────────────────────────────────────────────────────
  'data-scientist': [
    cat('Analytics & ML', [
      { name: 'Python' },
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Jupyter' },
    ]),
    cat('Data wrangling', [
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'SQL' },
    ]),
    cat('Visualization', [
      { name: 'Power BI' },
      { name: 'Tableau' },
      { name: 'Matplotlib' },
    ]),
    cat('Cloud ML', [
      { name: 'AWS SageMaker' },
      { name: 'Azure ML' },
      { name: 'Google Vertex AI' },
    ]),
  ],
  'data-engineer': [
    cat('Data pipelines', [
      { name: 'Apache Airflow' },
      { name: 'Apache Spark' },
      { name: 'ETL' },
      { name: 'Python' },
      { name: 'SQL' },
    ]),
    cat('Warehouses & lakes', [
      { name: 'Snowflake' },
      { name: 'Databricks' },
      { name: 'BigQuery' },
      { name: 'Azure Synapse' },
    ]),
    cat('Streaming', [{ name: 'Apache Kafka' }, { name: 'Apache Flink' }]),
    cat('Cloud', [{ name: 'AWS' }, { name: 'Microsoft Azure' }, { name: 'Google Cloud' }]),
  ],
  'data-visualization-expert': [
    cat('BI & visualization', [
      { name: 'Power BI' },
      { name: 'Tableau' },
      { name: 'Qlik' },
      { name: 'D3.js' },
    ]),
    cat('Data foundations', [{ name: 'SQL' }, { name: 'Python' }, { name: 'Pandas' }]),
    cat('Cloud reporting', [
      { name: 'Azure Synapse' },
      { name: 'BigQuery' },
      { name: 'Redshift' },
    ]),
  ],
  'data-analyst': [
    cat('Analysis & reporting', [
      { name: 'SQL' },
      { name: 'Power BI' },
      { name: 'Excel' },
      { name: 'Python' },
    ]),
    cat('Data sources', [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'Snowflake' },
    ]),
    cat('Visualization', [{ name: 'Tableau' }, { name: 'D3.js' }]),
  ],
  'power-bi-developer': [
    cat('Power BI', [
      { name: 'Power BI' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Microsoft Dataverse' },
    ]),
    cat('Microsoft data platform', [
      { name: 'Azure Synapse' },
      { name: 'SQL Server' },
      { name: 'Microsoft Azure' },
    ]),
    cat('Integration', [{ name: 'REST APIs' }, { name: 'SharePoint Online' }]),
  ],
  'tableau-developer': [
    cat('Tableau', [
      { name: 'Tableau' },
      { name: 'Tableau Prep' },
      { name: 'LOD expressions' },
    ]),
    cat('Data & SQL', [{ name: 'SQL' }, { name: 'PostgreSQL' }, { name: 'Snowflake' }]),
    cat('Cloud warehouses', [{ name: 'Redshift' }, { name: 'BigQuery' }, { name: 'Snowflake' }]),
  ],
  'etl-developer': [
    cat('ETL & orchestration', [
      { name: 'ETL' },
      { name: 'Apache Airflow' },
      { name: 'dbt' },
      { name: 'Talend' },
    ]),
    cat('Processing', [
      { name: 'Apache Spark' },
      { name: 'Python' },
      { name: 'SQL' },
    ]),
    cat('Warehouses', [
      { name: 'Snowflake' },
      { name: 'Redshift' },
      { name: 'Azure Synapse' },
    ]),
  ],
  'pandas-developer': [
    cat('Python data stack', [
      { name: 'Pandas' },
      { name: 'Python' },
      { name: 'NumPy' },
      { name: 'Jupyter' },
    ]),
    cat('Analysis & viz', [{ name: 'Matplotlib' }, { name: 'SQL' }, { name: 'Scikit-learn' }]),
    cat('Pipelines', [{ name: 'Apache Airflow' }, { name: 'ETL' }]),
  ],
  'qlik-developer': [
    cat('Qlik platform', [
      { name: 'Qlik' },
      { name: 'Qlik Sense' },
      { name: 'QlikView' },
    ]),
    cat('Data & SQL', [{ name: 'SQL' }, { name: 'PostgreSQL' }, { name: 'ETL' }]),
    cat('Integration', [{ name: 'REST APIs' }, { name: 'Microsoft Azure' }]),
  ],
  'powerbi-consultant': [
    cat('Power BI consulting', [
      { name: 'Power BI' },
      { name: 'DAX' },
      { name: 'Power Query' },
      { name: 'Governance' },
    ]),
    cat('Microsoft ecosystem', [
      { name: 'Microsoft Azure' },
      { name: 'SharePoint Online' },
      { name: 'Microsoft Dataverse' },
    ]),
    cat('Delivery', [{ name: 'Agile' }, { name: 'Documentation' }, { name: 'Training' }]),
  ],
  'tableau-consultant': [
    cat('Tableau consulting', [
      { name: 'Tableau' },
      { name: 'Tableau Server' },
      { name: 'Dashboard design' },
    ]),
    cat('Data strategy', [{ name: 'SQL' }, { name: 'Snowflake' }, { name: 'Redshift' }]),
    cat('Delivery', [{ name: 'Agile' }, { name: 'Documentation' }, { name: 'Training' }]),
  ],

  // ── Automation ────────────────────────────────────────────────────────────
  'automation-anywhere-developer': [
    cat('Automation Anywhere', [
      { name: 'Automation Anywhere' },
      { name: 'Bot Insight' },
      { name: 'Control Room' },
    ]),
    cat('Integrations', [
      { name: 'REST APIs' },
      { name: 'Excel' },
      { name: 'SAP' },
      { name: 'Salesforce' },
    ]),
    cat('Governance', [{ name: 'Workflow design' }, { name: 'Monitoring' }, { name: 'Documentation' }]),
  ],
  'rpa-developer': [
    cat('RPA platforms', [
      { name: 'UiPath' },
      { name: 'Automation Anywhere' },
      { name: 'Blue Prism' },
    ]),
    cat('Integrations', [
      { name: 'REST APIs' },
      { name: 'Microsoft Graph API' },
      { name: 'SharePoint Online' },
      { name: 'Salesforce' },
    ]),
    cat('Operations', [{ name: 'Workflow design' }, { name: 'Monitoring' }, { name: 'Agile' }]),
  ],
  'uipath-developer': [
    cat('UiPath', [
      { name: 'UiPath' },
      { name: 'UiPath Orchestrator' },
      { name: 'REFramework' },
    ]),
    cat('Integrations', [
      { name: 'REST APIs' },
      { name: 'Excel' },
      { name: 'SAP' },
      { name: 'Salesforce' },
    ]),
    cat('Governance', [{ name: 'Workflow design' }, { name: 'Monitoring' }, { name: 'Documentation' }]),
  ],
  'n8n-developer': [
    cat('n8n automation', [
      { name: 'n8n' },
      { name: 'Workflow design' },
      { name: 'Webhooks' },
    ]),
    cat('Integrations', [
      { name: 'REST APIs' },
      { name: 'Slack' },
      { name: 'Salesforce' },
      { name: 'PostgreSQL' },
    ]),
    cat('Deployment', [{ name: 'Docker' }, { name: 'Self-hosted' }, { name: 'CI/CD' }]),
  ],
  'power-automate-developer': [
    cat('Power Automate', [
      { name: 'Power Automate' },
      { name: 'Power Apps' },
      { name: 'Microsoft Dataverse' },
    ]),
    cat('Microsoft 365', [
      { name: 'SharePoint Online' },
      { name: 'Microsoft Graph API' },
      { name: 'Microsoft Teams SDK' },
    ]),
    cat('Governance', [{ name: 'Workflow design' }, { name: 'Documentation' }, { name: 'Monitoring' }]),
  ],
  'power-automate-consultant': [
    cat('Power Platform', [
      { name: 'Power Automate' },
      { name: 'Power Apps' },
      { name: 'Power BI' },
    ]),
    cat('Microsoft ecosystem', [
      { name: 'SharePoint Online' },
      { name: 'Microsoft Graph API' },
      { name: 'Dynamics 365' },
    ]),
    cat('Advisory', [{ name: 'Agile' }, { name: 'Documentation' }, { name: 'Training' }]),
  ],

  // ── Machine Learning ──────────────────────────────────────────────────────
  'ml-developer': [
    cat('ML frameworks', [
      { name: 'TensorFlow' },
      { name: 'PyTorch' },
      { name: 'Scikit-learn' },
      { name: 'Python' },
    ]),
    cat('MLOps', [
      { name: 'MLflow' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'FastAPI' },
    ]),
    cat('Data pipelines', [
      { name: 'Pandas' },
      { name: 'Apache Airflow' },
      { name: 'Apache Kafka' },
    ]),
    cat('Cloud ML', [
      { name: 'AWS SageMaker' },
      { name: 'Azure ML' },
      { name: 'Google Vertex AI' },
    ]),
  ],
  'pytorch-developer': [
    cat('PyTorch stack', [
      { name: 'PyTorch' },
      { name: 'Python' },
      { name: 'CUDA' },
      { name: 'Jupyter' },
    ]),
    cat('Model development', [
      { name: 'Hugging Face' },
      { name: 'NumPy' },
      { name: 'Pandas' },
    ]),
    cat('Serving & MLOps', [
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'MLflow' },
    ]),
  ],
  'keras-developer': [
    cat('Keras & TensorFlow', [
      { name: 'Keras' },
      { name: 'TensorFlow' },
      { name: 'Python' },
    ]),
    cat('Data & training', [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Jupyter' },
    ]),
    cat('Deployment', [{ name: 'Docker' }, { name: 'FastAPI' }, { name: 'AWS SageMaker' }]),
  ],
  'neural-network-developer': [
    cat('Deep learning', [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'Python' },
    ]),
    cat('Specializations', [
      { name: 'Computer Vision' },
      { name: 'NLP' },
      { name: 'CUDA' },
    ]),
    cat('Experimentation', [
      { name: 'Jupyter' },
      { name: 'MLflow' },
      { name: 'Weights & Biases' },
    ]),
  ],
  'mlops-engineer': [
    cat('MLOps platforms', [
      { name: 'MLflow' },
      { name: 'Kubeflow' },
      { name: 'Kubernetes' },
      { name: 'Docker' },
    ]),
    cat('CI/CD & IaC', [
      { name: 'GitHub Actions' },
      { name: 'Terraform' },
      { name: 'Azure DevOps' },
    ]),
    cat('Monitoring', [
      { name: 'Prometheus' },
      { name: 'Datadog' },
      { name: 'Application Insights' },
    ]),
    cat('Cloud ML', [
      { name: 'AWS SageMaker' },
      { name: 'Azure ML' },
      { name: 'Google Vertex AI' },
    ]),
  ],

  // ── Cloud ─────────────────────────────────────────────────────────────────
  'aws-developer': [
    cat('AWS core', [
      { name: 'AWS' },
      { name: 'AWS Lambda' },
      { name: 'ECS/EKS' },
      { name: 'AWS S3' },
      { name: 'RDS/Databases' },
    ]),
    cat('Infrastructure as Code', [
      { name: 'CloudFormation' },
      { name: 'Terraform' },
    ]),
    cat('Security', [{ name: 'IAM' }, { name: 'AWS Secrets Manager' }]),
    cat('Observability', [{ name: 'CloudWatch' }, { name: 'Datadog' }]),
  ],
  'azure-developer': [
    cat('Azure services', [
      { name: 'Azure' },
      { name: 'Azure App Service' },
      { name: 'Azure Functions' },
      { name: 'Azure Kubernetes (AKS)' },
      { name: 'Azure Cosmos DB' },
    ]),
    cat('Infrastructure as Code', [
      { name: 'Bicep / ARM Templates' },
      { name: 'Terraform' },
    ]),
    cat('Identity & security', [
      { name: 'Azure Active Directory' },
      { name: 'Azure Key Vault' },
    ]),
    cat('DevOps', [{ name: 'Azure DevOps' }, { name: 'GitHub Actions' }]),
  ],
  'google-cloud-developer': [
    cat('Google Cloud', [
      { name: 'Google Cloud' },
      { name: 'BigQuery' },
      { name: 'Cloud Run' },
      { name: 'Google Kubernetes Engine' },
    ]),
    cat('Infrastructure as Code', [{ name: 'Terraform' }, { name: 'Deployment Manager' }]),
    cat('Data & AI', [{ name: 'Google Vertex AI' }, { name: 'Dataflow' }]),
    cat('Observability', [{ name: 'Cloud Monitoring' }, { name: 'Datadog' }]),
  ],
  'cloud-developer': [
    cat('Multi-cloud', [
      { name: 'AWS' },
      { name: 'Microsoft Azure' },
      { name: 'Google Cloud' },
    ]),
    cat('Containers', [
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Terraform' },
    ]),
    cat('Architecture', [
      { name: 'Microservices' },
      { name: 'Serverless' },
      { name: 'IAM' },
    ]),
    cat('Observability', [
      { name: 'Datadog' },
      { name: 'Prometheus' },
      { name: 'Application Insights' },
    ]),
  ],

  // ── DevOps ────────────────────────────────────────────────────────────────
  'devops-developer': [
    cat('CI/CD', [
      { name: 'CI/CD Pipelines' },
      { name: 'Jenkins' },
      { name: 'GitHub Actions' },
      { name: 'GitLab CI' },
      { name: 'Azure DevOps' },
    ]),
    cat('Containers', [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Helm' }]),
    cat('Infrastructure as Code', [
      { name: 'Terraform' },
      { name: 'Ansible' },
    ]),
    cat('Observability', [
      { name: 'Datadog' },
      { name: 'Prometheus' },
      { name: 'ELK Stack' },
    ]),
  ],
  'devsecops-developer': [
    cat('DevSecOps', [
      { name: 'DevSecOps' },
      { name: 'SAST' },
      { name: 'DAST' },
      { name: 'Secrets scanning' },
    ]),
    cat('CI/CD & IaC', [
      { name: 'GitHub Actions' },
      { name: 'Terraform' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
    ]),
    cat('Compliance', [{ name: 'SOC 2' }, { name: 'IAM' }, { name: 'Azure Key Vault' }]),
  ],
  'kubernetes-developer': [
    cat('Kubernetes', [
      { name: 'Kubernetes' },
      { name: 'Helm' },
      { name: 'Azure Kubernetes (AKS)' },
      { name: 'ECS/EKS' },
    ]),
    cat('Platform tooling', [
      { name: 'Docker' },
      { name: 'Terraform' },
      { name: 'Prometheus' },
    ]),
    cat('Networking & security', [{ name: 'Ingress' }, { name: 'IAM' }, { name: 'Service mesh' }]),
  ],
  'terraform-developer': [
    cat('Infrastructure as Code', [
      { name: 'Terraform' },
      { name: 'Bicep / ARM Templates' },
      { name: 'CloudFormation' },
    ]),
    cat('Cloud targets', [
      { name: 'AWS' },
      { name: 'Microsoft Azure' },
      { name: 'Google Cloud' },
    ]),
    cat('Automation', [
      { name: 'GitHub Actions' },
      { name: 'Azure DevOps' },
      { name: 'Ansible' },
    ]),
  ],
  'docker-developer': [
    cat('Containers', [
      { name: 'Docker' },
      { name: 'Docker Compose' },
      { name: 'Container registries' },
    ]),
    cat('Orchestration', [
      { name: 'Kubernetes' },
      { name: 'Helm' },
    ]),
    cat('CI/CD', [
      { name: 'GitHub Actions' },
      { name: 'Jenkins' },
    ]),
    cat('Cloud', [{ name: 'AWS' }, { name: 'Microsoft Azure' }]),
  ],
}

/** Category fallbacks when a slug has no explicit stack (should not happen for listed roles). */
function categoryFallback(category: string, primary: Items): HireTalentTechStack {
  switch (category) {
    case 'Frontend':
      return [
        cat('Core skills', primary),
        cat('Web fundamentals', WEB_FUNDAMENTALS),
        cat('Quality', FRONTEND_TESTING),
      ]
    case 'Backend':
      return [
        cat('Backend', primary),
        cat('APIs', BACKEND_APIS),
        cat('Databases', BACKEND_DATABASES),
        cat('Cloud & DevOps', [...BACKEND_CLOUD, ...BACKEND_DEVOPS]),
      ]
    case 'Mobile App':
      return [
        cat('Mobile', primary),
        cat('APIs', [{ name: 'REST APIs' }, { name: 'Firebase' }]),
        cat('Release', [{ name: 'App Store release' }, { name: 'Google Play' }]),
      ]
    case 'Data Science':
      return [
        cat('Core skills', primary),
        cat('Data tools', [{ name: 'Python' }, { name: 'SQL' }, { name: 'Pandas' }]),
        cat('Cloud', [{ name: 'Snowflake' }, { name: 'BigQuery' }]),
      ]
    case 'Automation':
      return [
        cat('Automation', primary),
        cat('Integrations', [{ name: 'REST APIs' }, { name: 'Workflow design' }]),
      ]
    case 'Machine Learning':
      return [
        cat('ML', primary),
        cat('MLOps', [{ name: 'MLflow' }, { name: 'Docker' }, { name: 'Kubernetes' }]),
      ]
    case 'Cloud':
      return [
        cat('Cloud', primary),
        cat('IaC', [{ name: 'Terraform' }]),
        cat('Containers', [{ name: 'Docker' }, { name: 'Kubernetes' }]),
      ]
    case 'DevOps':
      return [
        cat('DevOps', primary),
        cat('CI/CD', BACKEND_DEVOPS),
        cat('Observability', [{ name: 'Datadog' }, { name: 'Prometheus' }]),
      ]
    default:
      return [
        cat('Delivery', [
          { name: 'Agile' },
          { name: 'Scrum' },
          { name: 'Code review' },
        ]),
        cat('Technologies', primary),
      ]
  }
}

export function getHireTalentTechStack(slug: string, category: string): HireTalentTechStack {
  if (ROLE_STACKS[slug]) {
    return ROLE_STACKS[slug]
  }

  const primary: Items = [{ name: category }]
  return categoryFallback(category, primary)
}
