import { ReactElement } from 'react'

// react-icons - comprehensive brand icon coverage
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras,
  SiGooglecloud, SiDocker, SiKubernetes,
  SiTerraform, SiAnsible, SiPuppet,
  SiJenkins, SiGitlab, SiGithubactions, SiCircleci,
  SiDatadog, SiPrometheus, SiElasticsearch, SiSplunk, SiCloudflare,
  SiApachekafka, SiApacheflink, SiApachespark, SiApacheairflow,
  SiApache, SiApachecassandra,
  SiSnowflake, SiDatabricks,
  SiPostgresql, SiMongodb, SiMysql,
  SiRedis, SiFastapi, SiMlflow,
  SiPandas, SiNumpy, SiDask,
  SiJupyter,
  SiFigma, SiSketch, SiFramer,
  SiReact, SiVuedotjs, SiAngular, SiNextdotjs, SiSvelte,
  SiTailwindcss, SiBootstrap, SiMui, SiAntdesign,
  SiHtml5, SiJavascript,
  SiNodedotjs, SiExpress, SiPython, SiGo, SiRuby,
  SiDotnet, SiOpenjdk,
  SiMiro, SiConfluence, SiJira,
  SiHuggingface, SiMeta,
  SiAlibabacloud,
} from 'react-icons/si'

import {
  FaAws, FaMicrosoft, FaSalesforce, FaSlack,
  FaDocker, FaJava,
} from 'react-icons/fa'

import {
  VscAzure, VscAzureDevops,
} from 'react-icons/vsc'

import {
  DiDatabase, DiVisualstudio, DiCode,
} from 'react-icons/di'

import {
  TbBrandOpenai, TbBrandAzure, TbBrandSlack,
  TbBrandMysql, TbBrandDocker,
} from 'react-icons/tb'

import {
  BiLogoVisualStudio,
} from 'react-icons/bi'

export interface TechLogo {
  name: string
  icon: ReactElement
  color: string
}

// ─── Technology → React Icon mapping ───────────────────────────────────────
export const techLogoMap: Record<string, TechLogo> = {

  // ── LLMs & AI ─────────────────────────────────────────────────────────────
  'Claude API':       { name: 'Anthropic',    icon: <TbBrandOpenai />,   color: '#D97706' },
  'GPT-4':            { name: 'OpenAI',       icon: <TbBrandOpenai />,   color: '#10a37f' },
  'GPT-3.5':          { name: 'OpenAI',       icon: <TbBrandOpenai />,   color: '#10a37f' },
  'LangChain':        { name: 'LangChain',    icon: <DiCode />,          color: '#1C3C3C' },
  'LlamaIndex':       { name: 'Meta',         icon: <SiMeta />,          color: '#0467DF' },
  'Hugging Face':     { name: 'Hugging Face', icon: <SiHuggingface />,   color: '#FFD21E' },
  'Hugging Face Hub': { name: 'Hugging Face', icon: <SiHuggingface />,   color: '#FFD21E' },

  // ── ML Libraries ──────────────────────────────────────────────────────────
  'TensorFlow':   { name: 'TensorFlow',   icon: <SiTensorflow />,   color: '#FF6F00' },
  'PyTorch':      { name: 'PyTorch',      icon: <SiPytorch />,      color: '#EE4C2C' },
  'Scikit-learn': { name: 'Scikit-learn', icon: <SiScikitlearn />,  color: '#F7931E' },
  'XGBoost':      { name: 'XGBoost',      icon: <SiNumpy />,        color: '#189ABB' },
  'Keras':        { name: 'Keras',        icon: <SiKeras />,        color: '#D00000' },

  // ── Cloud Platforms ───────────────────────────────────────────────────────
  'AWS':              { name: 'AWS',        icon: <FaAws />,           color: '#FF9900' },
  'AWS SageMaker':    { name: 'AWS',        icon: <FaAws />,           color: '#FF9900' },
  'Lambda/Functions': { name: 'AWS Lambda', icon: <FaAws />,           color: '#FF9900' },
  'AWS Lambda':       { name: 'AWS Lambda', icon: <FaAws />,           color: '#FF9900' },
  'ECS/EKS':          { name: 'AWS',        icon: <FaAws />,           color: '#FF9900' },
  'AWS S3':           { name: 'AWS S3',     icon: <FaAws />,           color: '#569A31' },
  'S3/Storage':       { name: 'AWS S3',     icon: <FaAws />,           color: '#569A31' },
  'RDS/Databases':    { name: 'AWS RDS',    icon: <FaAws />,           color: '#527FFF' },
  'CloudFormation':   { name: 'AWS',        icon: <FaAws />,           color: '#FF9900' },
  'Redshift':         { name: 'Redshift',   icon: <FaAws />,           color: '#8C4FFF' },

  'Google Cloud':    { name: 'Google Cloud', icon: <SiGooglecloud />,  color: '#4285F4' },
  'GCP':             { name: 'Google Cloud', icon: <SiGooglecloud />,  color: '#4285F4' },
  'Google Vertex AI':{ name: 'Google Cloud', icon: <SiGooglecloud />,  color: '#4285F4' },
  'BigQuery':        { name: 'BigQuery',     icon: <SiGooglecloud />,  color: '#4285F4' },

  'Microsoft Azure':   { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure':             { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure ML':          { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure App Service': { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Functions':   { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Service Bus': { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Key Vault':   { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Active Directory': { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'Azure Cosmos DB':   { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Blob Storage':{ name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Synapse Analytics': { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Azure Synapse':     { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Data Factory':      { name: 'Azure', icon: <FaMicrosoft />,  color: '#0078D4' },
  'Bicep / ARM Templates': { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'Application Insights':  { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'Microsoft Graph API':   { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'Microsoft Dataverse':   { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'AI Builder':            { name: 'Azure', icon: <FaMicrosoft />, color: '#0078D4' },
  'Dynamics 365':          { name: 'Dynamics', icon: <FaMicrosoft />, color: '#0078D4' },
  'Azure DevOps':          { name: 'Azure DevOps', icon: <FaMicrosoft />, color: '#0078D4' },
  'Azure Kubernetes (AKS)':{ name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },

  'Alibaba Cloud': { name: 'Alibaba Cloud', icon: <SiAlibabacloud />, color: '#FF6A00' },

  // ── Power Platform ────────────────────────────────────────────────────────
  'Power Apps (Canvas & Model)': { name: 'Power Apps',    icon: <FaMicrosoft />, color: '#742774' },
  'Power Automate':  { name: 'Power Automate', icon: <FaMicrosoft />,  color: '#0066FF' },
  'Power BI':        { name: 'Power BI',       icon: <FaMicrosoft />,  color: '#F2C811' },
  'Power Pages':     { name: 'Power Pages',    icon: <FaMicrosoft />,  color: '#0078D4' },

  // ── Microsoft Collab ──────────────────────────────────────────────────────
  'SharePoint Online':  { name: 'SharePoint', icon: <FaMicrosoft />,        color: '#0078D4' },
  'SPFx Development':   { name: 'SharePoint', icon: <FaMicrosoft />,        color: '#0078D4' },
  'Microsoft Teams SDK':{ name: 'Teams',      icon: <FaMicrosoft />,        color: '#6264A7' },
  'Outlook Add-ins':    { name: 'Outlook',    icon: <FaMicrosoft />,        color: '#0078D4' },
  'Visual Studio / VS Code': { name: 'VS Code', icon: <BiLogoVisualStudio />, color: '#007ACC' },

  // ── Databases ─────────────────────────────────────────────────────────────
  'SQL Server / Azure SQL': { name: 'SQL Server', icon: <DiDatabase />,    color: '#CC2927' },
  'SQL Server':             { name: 'SQL Server', icon: <DiDatabase />,    color: '#CC2927' },
  'PostgreSQL':  { name: 'PostgreSQL',  icon: <SiPostgresql />,      color: '#336791' },
  'MongoDB':     { name: 'MongoDB',     icon: <SiMongodb />,         color: '#13AA52' },
  'MySQL':       { name: 'MySQL',       icon: <SiMysql />,           color: '#4479A1' },
  'Oracle DB':   { name: 'Oracle',      icon: <DiDatabase />,        color: '#F80000' },
  'Oracle':      { name: 'Oracle',      icon: <DiDatabase />,        color: '#F80000' },
  'Cassandra':   { name: 'Cassandra',   icon: <SiApachecassandra />, color: '#1287B1' },
  'Redis':       { name: 'Redis',       icon: <SiRedis />,           color: '#DC382D' },
  'Redis Cache': { name: 'Redis',       icon: <SiRedis />,           color: '#DC382D' },

  // ── .NET ──────────────────────────────────────────────────────────────────
  '.NET 8 / .NET Core':    { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'ASP.NET Core MVC':      { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'Entity Framework Core': { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'Blazor / WebAssembly':  { name: 'Blazor',    icon: <SiDotnet />, color: '#512BD4' },
  'WPF / WinForms':        { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'MAUI (Mobile & Desktop)':{ name: '.NET MAUI',icon: <SiDotnet />, color: '#512BD4' },
  '.NET Core':             { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  '.NET':                  { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  '.NET Framework':        { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'ASP.NET Core':          { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },
  'NuGet / MSBuild':       { name: '.NET',      icon: <SiDotnet />, color: '#512BD4' },

  // ── Containers & Orchestration ────────────────────────────────────────────
  'Docker':       { name: 'Docker',      icon: <SiDocker />,     color: '#2496ED' },
  'Docker Swarm': { name: 'Docker',      icon: <SiDocker />,     color: '#2496ED' },
  'Kubernetes':   { name: 'Kubernetes',  icon: <SiKubernetes />, color: '#326CE5' },
  'MLflow':       { name: 'MLflow',      icon: <SiMlflow />,     color: '#0194E2' },
  'FastAPI':      { name: 'FastAPI',     icon: <SiFastapi />,    color: '#009688' },

  // ── Data Processing ───────────────────────────────────────────────────────
  'Pandas':         { name: 'Pandas',       icon: <SiPandas />,      color: '#150458' },
  'NumPy':          { name: 'NumPy',        icon: <SiNumpy />,       color: '#013243' },
  'Apache Spark':   { name: 'Apache Spark', icon: <SiApachespark />, color: '#E25A1C' },
  'Spark Streaming':{ name: 'Apache Spark', icon: <SiApachespark />, color: '#E25A1C' },
  'Dask':           { name: 'Dask',         icon: <SiDask />,        color: '#F59832' },

  // ── Dev Tools ─────────────────────────────────────────────────────────────
  'Jupyter':    { name: 'Jupyter',       icon: <SiJupyter />,       color: '#F37726' },
  'Vector DBs': { name: 'Elasticsearch', icon: <SiElasticsearch />, color: '#005571' },

  // ── IaC ───────────────────────────────────────────────────────────────────
  'Terraform': { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
  'Ansible':   { name: 'Ansible',   icon: <SiAnsible />,   color: '#EE0000' },
  'Puppet':    { name: 'Puppet',    icon: <SiPuppet />,    color: '#FFAE33' },

  // ── CI/CD ─────────────────────────────────────────────────────────────────
  'Jenkins':       { name: 'Jenkins',        icon: <SiJenkins />,       color: '#D24939' },
  'GitLab CI':     { name: 'GitLab',         icon: <SiGitlab />,        color: '#FCA121' },
  'GitHub Actions':{ name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
  'CircleCI':      { name: 'CircleCI',       icon: <SiCircleci />,      color: '#343434' },

  // ── Monitoring ────────────────────────────────────────────────────────────
  'Datadog':      { name: 'Datadog',    icon: <SiDatadog />,       color: '#632CA6' },
  'Prometheus':   { name: 'Prometheus', icon: <SiPrometheus />,    color: '#E6522C' },
  'ELK Stack':    { name: 'Elastic',    icon: <SiElasticsearch />, color: '#005571' },
  'Splunk':       { name: 'Splunk',     icon: <SiSplunk />,        color: '#65A637' },
  'CDN Services': { name: 'Cloudflare', icon: <SiCloudflare />,    color: '#F38020' },

  // ── Stream Processing ─────────────────────────────────────────────────────
  'Apache Kafka':  { name: 'Apache Kafka', icon: <SiApachekafka />, color: '#231F20' },
  'Kafka Streams': { name: 'Apache Kafka', icon: <SiApachekafka />, color: '#231F20' },
  'Apache Flink':  { name: 'Apache Flink', icon: <SiApacheflink />, color: '#E6526F' },

  // ── ETL/ELT ───────────────────────────────────────────────────────────────
  'Apache Airflow': { name: 'Apache Airflow', icon: <SiApacheairflow />, color: '#017CEE' },
  'dbt':            { name: 'dbt',            icon: <DiCode />,          color: '#FF694B' },
  'Talend':         { name: 'Talend',         icon: <DiCode />,          color: '#FF6D00' },
  'Informatica':    { name: 'Informatica',    icon: <DiCode />,          color: '#006EB4' },

  // ── Data Lakes & Warehouses ───────────────────────────────────────────────
  'Snowflake':      { name: 'Snowflake',  icon: <SiSnowflake />,  color: '#29B5E8' },
  'Delta Lake':     { name: 'Databricks', icon: <SiDatabricks />, color: '#FF3621' },
  'Databricks':     { name: 'Databricks', icon: <SiDatabricks />, color: '#FF3621' },
  'Apache Iceberg': { name: 'Apache',     icon: <SiApache />,     color: '#D70015' },
  'Apache Hudi':    { name: 'Apache',     icon: <SiApache />,     color: '#D70015' },
  'Hadoop':         { name: 'Hadoop',     icon: <SiApache />,     color: '#D70015' },

  // ── Data Quality ──────────────────────────────────────────────────────────
  'Great Expectations': { name: 'Data Quality', icon: <DiCode />, color: '#12A1FA' },

  // ── Design Tools ──────────────────────────────────────────────────────────
  'Figma':    { name: 'Figma',    icon: <SiFigma />,  color: '#F24E1E' },
  'Sketch':   { name: 'Sketch',   icon: <SiSketch />, color: '#F7B500' },
  'Adobe XD': { name: 'Adobe XD', icon: <DiCode />,   color: '#FF61F6' },
  'InVision': { name: 'InVision', icon: <DiCode />,   color: '#FF3366' },

  // ── Prototyping ───────────────────────────────────────────────────────────
  'Framer':   { name: 'Framer',   icon: <SiFramer />, color: '#05F' },
  'Protopie': { name: 'Protopie', icon: <DiCode />,   color: '#00C3FF' },
  'Axure':    { name: 'Axure',    icon: <DiCode />,   color: '#FF6F5E' },
  'Marvel':   { name: 'Marvel',   icon: <DiCode />,   color: '#EC1C24' },

  // ── User Research ─────────────────────────────────────────────────────────
  'Maze':        { name: 'Maze',        icon: <DiCode />, color: '#F97A5C' },
  'UserTesting': { name: 'UserTesting', icon: <DiCode />, color: '#F5C623' },
  'Hotjar':      { name: 'Hotjar',      icon: <DiCode />, color: '#FD3A5C' },
  'Amplitude':   { name: 'Amplitude',   icon: <DiCode />, color: '#2B6DEF' },

  // ── Frontend ──────────────────────────────────────────────────────────────
  'React':        { name: 'React',        icon: <SiReact />,       color: '#61DAFB' },
  'Vue':          { name: 'Vue.js',       icon: <SiVuedotjs />,    color: '#4FC08D' },
  'Angular':      { name: 'Angular',      icon: <SiAngular />,     color: '#DD0031' },
  'Next.js':      { name: 'Next.js',      icon: <SiNextdotjs />,   color: '#000000' },
  'Svelte':       { name: 'Svelte',       icon: <SiSvelte />,      color: '#FF3E00' },
  'Tailwind CSS': { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  'Material UI':  { name: 'MUI',          icon: <SiMui />,         color: '#007FFF' },
  'Bootstrap':    { name: 'Bootstrap',    icon: <SiBootstrap />,   color: '#7952B3' },
  'Ant Design':   { name: 'Ant Design',   icon: <SiAntdesign />,  color: '#0170FE' },
  'HTML/CSS':     { name: 'HTML5',        icon: <SiHtml5 />,       color: '#E34F26' },
  'JavaScript':   { name: 'JavaScript',   icon: <SiJavascript />,  color: '#F7DF1E' },

  // ── Backend ───────────────────────────────────────────────────────────────
  'Node.js':         { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  'Express':         { name: 'Express', icon: <SiExpress />,   color: '#000000' },
  'Java Enterprise': { name: 'Java',    icon: <FaJava />,      color: '#007396' },
  'Java':            { name: 'Java',    icon: <FaJava />,      color: '#007396' },
  'Python':          { name: 'Python',  icon: <SiPython />,    color: '#3776AB' },
  'Go':              { name: 'Go',      icon: <SiGo />,        color: '#00ADD8' },
  'Ruby':            { name: 'Ruby',    icon: <SiRuby />,      color: '#CC342D' },

  // ── Enterprise ────────────────────────────────────────────────────────────
  'SAP':                 { name: 'SAP',                 icon: <DiCode />,         color: '#0070F0' },
  'Salesforce':          { name: 'Salesforce',          icon: <FaSalesforce />,   color: '#00A1E0' },
  'UiPath':              { name: 'UiPath',              icon: <DiCode />,         color: '#FA4616' },
  'Automation Anywhere': { name: 'Automation Anywhere', icon: <DiCode />,         color: '#FF7900' },
  'Blue Prism':          { name: 'Blue Prism',          icon: <DiCode />,         color: '#00338D' },
  'WorkflowAI':          { name: 'AI Workflow',         icon: <TbBrandOpenai />,  color: '#10a37f' },
  'MuleSoft':            { name: 'MuleSoft',            icon: <DiCode />,         color: '#00A2DF' },
  'Spring Cloud':        { name: 'Spring',              icon: <SiOpenjdk />,      color: '#6DB33F' },
  'ServiceNow':          { name: 'ServiceNow',          icon: <DiCode />,         color: '#62D84E' },

  // ── Collab Tools ──────────────────────────────────────────────────────────
  'Miro':       { name: 'Miro',       icon: <SiMiro />,       color: '#FFD200' },
  'Confluence': { name: 'Confluence', icon: <SiConfluence />, color: '#172B4D' },
  'Jira':       { name: 'Jira',       icon: <SiJira />,       color: '#0052CC' },
  'Slack':      { name: 'Slack',      icon: <FaSlack />,      color: '#E01E5A' },
}

export function getTechLogo(techName: string): TechLogo | null {
  return techLogoMap[techName] || null
}
