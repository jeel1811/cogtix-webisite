/**
 * Service page tech data - kept here (not in messages.ts) because the values
 * are mostly brand and product names that should NOT be translated per locale
 * (e.g. "GPT-4", "TensorFlow", "Power BI", "99.9%", "5 PB+").
 *
 * The translatable prose (titles, descriptions, category names) lives in
 * `src/i18n/messages.ts` under `serviceContent.<variant>`.
 */

import type { ServiceVariant } from '@/components/sections/service-themes'

interface FeatureExtras {
  highlights: [string, string, string, string]
}

interface PillarExtras {
  tags: string[]
}

interface TechCategoryExtras {
  items: string[]
}

export interface ServicePageData {
  stats: [{ value: string }, { value: string }, { value: string }]
  features: FeatureExtras[]      // 6 entries, aligned to messages.features.items
  pillars: PillarExtras[]        // 6 entries, aligned to messages.expertise.items
  technologies: TechCategoryExtras[] // 6 entries, aligned to messages.technologies.categories
}

export const serviceData: Record<ServiceVariant, ServicePageData> = {
  ai: {
    stats: [{ value: '40+' }, { value: '12' }, { value: '99.9%' }],
    features: [
      { highlights: ['LLM fine-tuning', 'RAG pipelines', 'Custom chatbots', 'Prompt engineering'] },
      { highlights: ['Predictive modeling', 'Data visualization', 'Statistical analysis', 'BI integration'] },
      { highlights: ['Computer vision', 'NLP & text mining', 'Anomaly detection', 'Time-series models'] },
      { highlights: ['CI/CD for ML', 'Model monitoring', 'Drift detection', 'Experiment tracking'] },
      { highlights: ['API-first AI', 'ERP/CRM plugins', 'Real-time inference', 'Edge deployment'] },
      { highlights: ['Kubernetes serving', 'A/B model testing', 'Shadow mode rollout', 'Cost optimization'] },
    ],
    pillars: [
      { tags: ['GPT-4', 'Claude', 'Gemini', 'Llama'] },
      { tags: ['RAG', 'LangChain', 'LlamaIndex', 'Vector DBs'] },
      { tags: ['Feature Stores', 'Data Lakes', 'ETL/ELT', 'dbt'] },
      { tags: ['MLflow', 'Kubeflow', 'Airflow', 'SageMaker'] },
      { tags: ['Azure ML', 'Cognitive Services', 'OpenAI Service', 'Synapse'] },
      { tags: ['Computer Vision', 'NLP', 'GenAI', 'AutoML'] },
    ],
    technologies: [
      { items: ['Claude API', 'GPT-4', 'LangChain', 'LlamaIndex', 'Hugging Face'] },
      { items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Keras'] },
      { items: ['AWS SageMaker', 'Google Vertex AI', 'Azure ML', 'Hugging Face Hub'] },
      { items: ['Pandas', 'NumPy', 'Apache Spark', 'Dask'] },
      { items: ['Docker', 'Kubernetes', 'MLflow', 'FastAPI'] },
      { items: ['Jupyter', 'Vector DBs', 'Redis'] },
    ],
  },

  cloud: {
    stats: [{ value: '120+' }, { value: '99.99%' }, { value: '60%' }],
    features: [
      { highlights: ['Multi-cloud strategy', 'High availability design', 'Cost-optimized architecture', 'Well-Architected Review'] },
      { highlights: ['EKS / AKS / GKE', 'Helm chart management', 'Auto-scaling policies', 'Service mesh setup'] },
      { highlights: ['GitOps workflows', 'Blue-green deploys', 'Canary releases', 'Quality gates'] },
      { highlights: ['Terraform modules', 'Drift detection', 'Policy as code', 'GitOps IaC'] },
      { highlights: ['SLI/SLO definition', 'Distributed tracing', 'Log aggregation', 'Alerting runbooks'] },
      { highlights: ['SOC 2 readiness', 'Zero-trust networks', 'Secrets management', 'DR planning'] },
    ],
    pillars: [
      { tags: ['Serverless', 'Containers', 'Managed Services'] },
      { tags: ['Zero Trust', 'RBAC', 'SIEM', 'Vault'] },
      { tags: ['ArgoCD', 'Flux', 'GitHub Actions', 'Helm'] },
      { tags: ['SLO/SLI', 'Chaos Engineering', 'PagerDuty', 'Grafana'] },
      { tags: ['CDN', 'Global Load Balancing', 'Edge Computing'] },
      { tags: ['FinOps', 'Spot Instances', 'Auto Scaling', 'Cost Dashboards'] },
    ],
    technologies: [
      { items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Alibaba Cloud'] },
      { items: ['Docker', 'Kubernetes', 'Docker Swarm', 'ECS/EKS'] },
      { items: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet'] },
      { items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'CircleCI'] },
      { items: ['Datadog', 'Prometheus', 'ELK Stack', 'Splunk'] },
      { items: ['Lambda/Functions', 'RDS/Databases', 'S3/Storage', 'CDN Services'] },
    ],
  },

  microsoft: {
    stats: [{ value: '150+' }, { value: '15 yrs' }, { value: '50+' }],
    features: [
      { highlights: ['Microservices architecture', 'Blazor & WebAssembly', 'API First development', 'Real-time apps with SignalR'] },
      { highlights: ['Azure App Services', 'Azure Functions (Serverless)', 'Azure Kubernetes Service (AKS)', 'Cosmos DB & Azure SQL'] },
      { highlights: ['Power Apps development', 'Power Automate flows', 'Power BI dashboards', 'Dataverse integration'] },
      { highlights: ['Legacy code refactoring', 'On-prem to Azure migration', 'Monolith to Microservices', 'Performance optimization'] },
      { highlights: ['SharePoint Framework (SPFx)', 'Teams App development', 'M365 automation', 'Intranet portals'] },
      { highlights: ['Azure OpenAI Service', 'Cognitive Services integration', 'Synapse Analytics', 'Databricks workflows'] },
    ],
    pillars: [
      { tags: ['Azure Expert', 'MS-900', 'PL-400', 'DP-203'] },
      { tags: ['CAF', 'Landing Zones', 'Azure Policy', 'Blueprints'] },
      { tags: ['WAF', 'Reliability', 'Security', 'Cost Optimization'] },
      { tags: ['MSFT Partner', 'ISV', 'Co-Sell', 'Azure Marketplace'] },
      { tags: ['CoE Toolkit', 'ALM', 'Power Automate', 'Dataverse'] },
      { tags: ['Synapse', 'Data Factory', 'Databricks', 'Cosmos DB'] },
    ],
    technologies: [
      { items: ['.NET 8 / .NET Core', 'ASP.NET Core MVC', 'Entity Framework Core', 'Blazor / WebAssembly', 'WPF / WinForms', 'MAUI (Mobile & Desktop)'] },
      { items: ['Azure App Service', 'Azure Functions', 'Azure Kubernetes (AKS)', 'Azure Service Bus', 'Azure Key Vault', 'Azure Active Directory'] },
      { items: ['SQL Server / Azure SQL', 'Azure Cosmos DB', 'Azure Blob Storage', 'Redis Cache', 'Synapse Analytics', 'Data Factory'] },
      { items: ['Power Apps (Canvas & Model)', 'Power Automate', 'Power BI', 'Power Pages', 'Microsoft Dataverse', 'AI Builder'] },
      { items: ['Azure DevOps', 'GitHub Actions', 'Visual Studio / VS Code', 'NuGet / MSBuild', 'Bicep / ARM Templates', 'Application Insights'] },
      { items: ['SharePoint Online', 'Microsoft Teams SDK', 'Microsoft Graph API', 'SPFx Development', 'Outlook Add-ins', 'Dynamics 365'] },
    ],
  },

  enterprise: {
    stats: [{ value: '50+' }, { value: '100M+' }, { value: 'SOC 2' }],
    features: [
      { highlights: ['Domain-driven design', 'Event-driven architecture', 'Horizontal scalability', 'Multi-tenant ready'] },
      { highlights: ['SAP S/4HANA', 'Salesforce CRM', 'Dynamics 365', 'Custom ERP builds'] },
      { highlights: ['RPA bots (UiPath)', 'Approval workflows', 'Process mining', 'Digital twins'] },
      { highlights: ['Strangler fig pattern', 'API wrapping', 'Data migration', 'Risk-free rollout'] },
      { highlights: ['API gateway design', 'Event bus patterns', 'iPaaS integration', 'Real-time sync'] },
      { highlights: ['SOC 2 / ISO 27001', 'Role-based access', 'Audit trails', 'Pen testing'] },
    ],
    pillars: [
      { tags: ['DDD', 'Event Storming', 'CQRS', 'Event Sourcing'] },
      { tags: ['SOC 2', 'ISO 27001', 'RBAC', 'Zero Trust'] },
      { tags: ['Strangler Fig', 'Blue-Green', 'Dark Launch', 'Feature Flags'] },
      { tags: ['MuleSoft', 'Kafka', 'Spring Integration', 'Azure Logic Apps'] },
      { tags: ['UiPath', 'Power Automate', 'Blue Prism', 'Process Mining'] },
      { tags: ['OKR Alignment', 'Value Streams', 'Agile@Scale', 'SAFe'] },
    ],
    technologies: [
      { items: ['SAP', 'Oracle', 'Salesforce', 'Dynamics 365'] },
      { items: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'WorkflowAI'] },
      { items: ['Java Enterprise', '.NET Core', 'Node.js', 'Python'] },
      { items: ['Oracle DB', 'SQL Server', 'PostgreSQL', 'Cassandra'] },
      { items: ['MuleSoft', 'Apache Kafka', 'Spring Cloud', 'AWS Lambda'] },
      { items: ['Jira', 'Confluence', 'Azure DevOps', 'ServiceNow'] },
    ],
  },

  data: {
    stats: [{ value: '5 PB+' }, { value: '<5ms' }, { value: '99.95%' }],
    features: [
      { highlights: ['Batch & stream pipelines', 'Schema evolution', 'Idempotent processing', 'SLA-driven SLOs'] },
      { highlights: ['Star/snowflake schemas', 'Columnar storage', 'Query optimization', 'BI connectivity'] },
      { highlights: ['Event-driven design', 'Sub-5ms latency', 'Exactly-once semantics', 'Change data capture'] },
      { highlights: ['Delta Lake / Iceberg', 'Data cataloging', 'Access control', 'Cost-tiered storage'] },
      { highlights: ['API connectors', 'CDC pipelines', 'Data lineage', 'Quality scoring'] },
      { highlights: ['GDPR / HIPAA', 'PII masking', 'Role-based access', 'Audit logging'] },
    ],
    pillars: [
      { tags: ['Lakehouse', 'Delta Lake', 'Iceberg', 'Hudi'] },
      { tags: ['Great Expectations', 'dbt', 'Airflow', 'Monte Carlo'] },
      { tags: ['Kafka', 'Apache Flink', 'Spark Streaming', 'Kinesis'] },
      { tags: ['Apache Atlas', 'Collibra', 'Data Contracts', 'PII Masking'] },
      { tags: ['Snowflake', 'BigQuery', 'Redshift', 'Synapse Analytics'] },
      { tags: ['GDPR', 'HIPAA', 'SOC 2', 'CCPA'] },
    ],
    technologies: [
      { items: ['Snowflake', 'BigQuery', 'Redshift', 'Azure Synapse'] },
      { items: ['Apache Kafka', 'Apache Flink', 'Spark Streaming', 'Kafka Streams'] },
      { items: ['Apache Airflow', 'dbt', 'Talend', 'Informatica'] },
      { items: ['Delta Lake', 'Apache Iceberg', 'Apache Hudi', 'AWS S3'] },
      { items: ['Apache Spark', 'Hadoop', 'PostgreSQL', 'MongoDB'] },
      { items: ['Great Expectations', 'Datadog', 'Prometheus', 'ELK Stack'] },
    ],
  },

  experience: {
    stats: [{ value: '2.4x' }, { value: 'WCAG 2.2' }, { value: '40+' }],
    features: [
      { highlights: ['User journey mapping', 'Usability testing', 'Accessibility (WCAG)', 'Heuristic evaluation'] },
      { highlights: ['Brand-aligned UI', 'Micro-interactions', 'Dark/light modes', 'Responsive layouts'] },
      { highlights: ['CRO-focused design', 'Core Web Vitals', 'Animation design', 'Landing pages'] },
      { highlights: ['iOS HIG compliance', 'Material Design 3', 'Gesture interactions', 'Cross-platform parity'] },
      { highlights: ['Ethnographic research', 'A/B testing', 'Heatmaps & analytics', 'Card sorting'] },
      { highlights: ['Token-based design', 'Figma components', 'Storybook', 'Versioned releases'] },
    ],
    pillars: [
      { tags: ['User Interviews', 'Usability Testing', 'Maze', 'Hotjar'] },
      { tags: ['A/B Testing', 'Funnel Analysis', 'Heatmaps', 'Amplitude'] },
      { tags: ['Figma Dev Mode', 'Storybook', 'Design Tokens', 'CSS Systems'] },
      { tags: ['LCP', 'CLS', 'FID', 'Next.js'] },
      { tags: ['WCAG 2.2', 'ARIA', 'VoiceOver', 'NVDA'] },
      { tags: ['Design Tokens', 'Figma Components', 'Storybook', 'Chromatic'] },
    ],
    technologies: [
      { items: ['Figma', 'Adobe XD', 'Sketch', 'InVision'] },
      { items: ['Framer', 'Protopie', 'Axure', 'Marvel'] },
      { items: ['Maze', 'UserTesting', 'Hotjar', 'Amplitude'] },
      { items: ['HTML/CSS', 'JavaScript', 'React', 'Next.js'] },
      { items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Ant Design'] },
      { items: ['Miro', 'Confluence', 'Jira', 'Slack'] },
    ],
  },
}
