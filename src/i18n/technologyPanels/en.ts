import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const enTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'We pair frontier models with orchestration frameworks so prompts, tools, and retrieval behave predictably in production. Before anything reaches customers, we align latency budgets, guardrails, and evaluation suites with your risk profile.',
        outcomes: four(
          'Model selection memo covering cost, latency, and quality tradeoffs',
          'Production patterns for RAG, tool calling, and structured outputs',
          'Regression and red team suites wired into your release process',
          'Key management and rotation aligned with your IAM standards',
        ),
      },
      {
        overview:
          'Classical ML and deep learning libraries power tabular scoring, computer vision, and large batch training jobs. We standardize environments so experiments graduate cleanly into scheduled pipelines with traceable lineage.',
        outcomes: four(
          'Reusable training templates with pinned dependencies',
          'Feature pipelines compatible with your warehouse or lake',
          'Experiment tracking and model cards for every production candidate',
          'CPU and GPU profiles sized to real batch windows and SLAs',
        ),
      },
      {
        overview:
          'Managed ML platforms on AWS, Azure, and Google Cloud give you elastic training and serving without undifferentiated heavy lifting. We design landing zones, networking, and quotas so data science teams move fast without breaking governance.',
        outcomes: four(
          'Landing zone patterns for notebooks, training, and endpoints',
          'Private connectivity between data stores and training jobs',
          'Quota, budget alerts, and autoscaling tuned to usage curves',
          'Handover runbooks for platform owners and ML engineers',
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark, and Dask cover everything from ad hoc exploration to petabyte scale transforms. We focus on idempotent jobs, schema evolution, and replayable backfills so analytics stay trustworthy as sources change.',
        outcomes: four(
          'Partitioning and file layout guidance for heavy tables',
          'Schema contracts with evolution rules documented',
          'Backfill and replay tooling for late arriving data',
          'Cost aware job plans with observability on every stage',
        ),
      },
      {
        overview:
          'Containers, Kubernetes, MLflow, and FastAPI turn models into reliable services. We bake in health checks, autoscaling signals, and rollback paths so releases stay boring even when traffic spikes or models change.',
        outcomes: four(
          'Container images with hardened base layers and scanning',
          'Kubernetes manifests or Helm charts with resource limits set',
          'Canary or shadow deploy patterns for model updates',
          'SLOs on latency, errors, and freshness with alert routing',
        ),
      },
      {
        overview:
          'Notebooks, vector stores, and Redis caches support rapid iteration and low latency retrieval. We keep dev and prod parity tight so experiments that work locally do not surprise you after promotion.',
        outcomes: four(
          'Notebook to pipeline promotion checklist',
          'Vector index sizing and refresh strategy documented',
          'Redis or cache policies with eviction and TTL guidance',
          'Developer onboarding kit for local and shared sandboxes',
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'We design multi account foundations on AWS, Azure, and Google Cloud with clear ownership, guardrails, and cost visibility. Landing zones are built so new workloads inherit security baselines instead of reinventing them.',
        outcomes: four(
          'Account or subscription topology with responsibilities mapped',
          'Baseline guardrails for networking, encryption, and logging',
          'Tagging and chargeback model agreed with finance',
          'Executive ready cost and risk dashboard',
        ),
      },
      {
        overview:
          'Kubernetes and container platforms carry your most critical services. We focus on upgrades, capacity, and day two operations so clusters stay patched, observable, and ready for zero downtime deploys.',
        outcomes: four(
          'Production ready cluster baseline with node pools and limits',
          'Helm or GitOps delivery with reviewed promotion paths',
          'Ingress, service mesh, or API gateway pattern selected and documented',
          'Upgrade and rollback drills captured in runbooks',
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible, and Puppet keep infrastructure repeatable and reviewable. Modules are tested like application code so drift is caught early and changes stay auditable.',
        outcomes: four(
          'Modular IaC library with examples for common stacks',
          'Policy checks on every plan using your governance rules',
          'Automated tests for modules and environment parity checks',
          'State backend, locking, and access model documented',
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions, and CircleCI shorten the path from commit to production. Quality gates, approvals, and artifact promotion are explicit so releases stay fast and controlled.',
        outcomes: four(
          'Pipeline templates with tests, scans, and signing steps',
          'Environment promotion matrix from dev through production',
          'Secrets injected without long lived credentials in repos',
          'Release metrics such as lead time and change failure rate visible',
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK, and Splunk give operators a shared picture of health. Dashboards, SLOs, and tracing are tied to real user journeys, not only infrastructure metrics.',
        outcomes: four(
          'Golden signals dashboards per critical service',
          'Distributed tracing across the main user flows',
          'Log structure and retention aligned to compliance needs',
          'On call runbooks linked from high value alerts',
        ),
      },
      {
        overview:
          'Managed functions, databases, object storage, and CDN layers reduce undifferentiated work. We pick primitives that match your traffic shape and compliance boundaries, then document failover and backup expectations.',
        outcomes: four(
          'Service selection matrix with cost and ops tradeoffs',
          'Backup, restore, and RPO or RTO targets captured per datastore',
          'CDN and edge caching strategy for static and dynamic assets',
          'FinOps review with right sizing and reservation guidance',
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'Modern .NET gives you high performance APIs, real time features, and cross platform clients without sacrificing enterprise patterns. We align solution structure, testing, and deployment with your existing ALM practices.',
        outcomes: four(
          'Reference solution layout for APIs, workers, and front ends',
          'OpenAPI contracts and integration tests in CI',
          'Performance baseline and load test profile for hot paths',
          'Deployment pipeline to Azure or hybrid targets',
        ),
      },
      {
        overview:
          'Azure compute, integration, and identity services connect applications to the broader ecosystem securely. We emphasize least privilege networking, managed identities, and repeatable environment builds.',
        outcomes: four(
          'Architecture diagram with subnets and private endpoints',
          'Managed identity usage instead of static secrets where possible',
          'Autoscale and resilience patterns for App Service or Functions',
          'Cost guardrails with budgets and anomaly alerts',
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse, and Data Factory anchor analytics and transactional workloads. We design for recovery, encryption, and predictable query cost before datasets grow past easy fixes.',
        outcomes: four(
          'Data model and indexing strategy peer reviewed',
          'Backup, geo redundancy, and restore test evidence',
          'Ingestion pipelines with monitoring and quarantine paths',
          'Access model with row level security where required',
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI, and Dataverse let departments move quickly with governance. We set guardrails so citizen developers innovate safely alongside pro code solutions.',
        outcomes: four(
          'Environment strategy separating dev, test, and production',
          'DLP and connector policies aligned to security review',
          'Reusable component library for common patterns',
          'Operational playbook for support and ownership',
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep, and Application Insights close the loop from idea to observable production. Telemetry ties releases to business and reliability outcomes.',
        outcomes: four(
          'CI and CD templates with approvals and secrets handling',
          'Infrastructure as code for Azure resources you rely on',
          'Dashboards for build health, deployments, and live errors',
          'Release tagging strategy for audits and rollbacks',
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph, and Dynamics extend workflows where people already work. Integrations respect consent, throttling, and lifecycle rules so automations stay stable.',
        outcomes: four(
          'Integration design with Graph permissions least privilege',
          'Teams or SharePoint app manifests and deployment guide',
          'Change management assets for admins and end users',
          'Monitoring for webhook and API quota consumption',
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce, and Dynamics anchor many enterprise cores. We treat package capabilities as first class, then extend only where differentiation matters, so upgrades stay feasible.',
        outcomes: four(
          'Fit gap analysis with configuration before custom code',
          'Release strategy aligned to vendor cadence and blackout windows',
          'Integration contracts for satellite systems documented',
          'Test library covering critical financial or operational paths',
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism, and workflow engines remove repetitive work at scale. Bots are owned, monitored, and exception handled like any other production service.',
        outcomes: four(
          'Process map with automation candidates prioritized by ROI',
          'Credential vault pattern and segregation of duties',
          'Monitoring for bot health, queues, and business exceptions',
          'Continuous improvement backlog fed by operations metrics',
        ),
      },
      {
        overview:
          'Java, .NET, Node, and Python power custom services and integration layers. We standardize API style, error handling, and observability so mixed stacks behave as one platform.',
        outcomes: four(
          'Service template with auth, logging, and metrics baked in',
          'API catalog with versioning and deprecation policy',
          'Performance test harness for peak transaction scenarios',
          'Security scanning in CI for dependencies and containers',
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres, and Cassandra each fit different consistency and scale profiles. We document retention, partitioning, and recovery so data stays available under load.',
        outcomes: four(
          'Schema design with growth and archival strategy',
          'Backup verification schedule with evidence stored',
          'Query tuning plan for top ten expensive statements',
          'Access reviews for privileged database roles',
        ),
      },
      {
        overview:
          'MuleSoft, Kafka, Spring Cloud, and Lambda style integrations move events and payloads reliably. Idempotency, ordering, and dead letter handling are explicit from day one.',
        outcomes: four(
          'Event topic catalog with owners and schemas',
          'Replay procedures for poison messages or bad deploys',
          'Latency and throughput SLOs per integration path',
          'Cross team playbook for incident triage',
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps, and ServiceNow keep delivery and operations aligned. Traceability from requirement to release supports audits and faster root cause analysis.',
        outcomes: four(
          'Workflow configuration mapped to your SDLC',
          'Dashboards for delivery predictability and quality',
          'CMDB or asset links for critical configuration items',
          'Post incident review template wired to action tracking',
        ),
      },
    ],
  },
  data: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift, and Synapse power governed analytics at scale. We design warehouses around query patterns, role based access, and spend controls so insights do not outrun the budget.',
        outcomes: four(
          'Logical model with certified marts and ownership',
          'Role and row access model reviewed with security',
          'Workload management or warehouse sizing tuned to peaks',
          'Cost monitoring with alerts on unexpected growth',
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming, and Kinesis turn events into decisions in near real time. We engineer for backpressure, replay, and schema compatibility so streams stay trustworthy.',
        outcomes: four(
          'Topic design with retention and compaction decisions',
          'Stream jobs with state recovery and checkpointing verified',
          'Consumer lag and data freshness visible on dashboards',
          'Disaster recovery path tested for broker or region loss',
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend, and Informatica orchestrate batch and incremental loads with tests. Dependencies are explicit so failures surface early and downstream teams see impact quickly.',
        outcomes: four(
          'DAG or job catalog with SLAs and ownership per pipeline',
          'Data tests on freshness, volume, and key relationships',
          'Promotion flow from dev to prod with peer review',
          'Lineage from source tables to published metrics',
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg, and Hudi on object storage give open formats with ACID guarantees. Compaction, partitioning, and access patterns are tuned so tables stay fast as data grows.',
        outcomes: four(
          'Table format choice documented with migration notes',
          'Partition and Z order strategy for heavy scans',
          'Access policies integrated with your catalog',
          'Housekeeping jobs for small files and snapshots',
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres, and MongoDB cover large transforms, flexible documents, and mixed workloads. We align compute to storage locality and spill behavior so jobs finish within predictable windows.',
        outcomes: four(
          'Cluster or pool sizing based on measured job profiles',
          'Storage layout for hot, warm, and cold tiers',
          'Encryption and key rotation validated for each store',
          'Capacity plan with quarterly review checkpoints',
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus, and ELK close the loop on data quality and pipeline health. Alerts tie to business impact, not only infrastructure noise.',
        outcomes: four(
          'Quality rules on critical datasets with owner escalation',
          'Unified logs and metrics for pipeline failures',
          'Synthetic checks on published dashboards or APIs',
          'Incident retros that feed rule and documentation updates',
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'What we ship with this stack',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch, and InVision keep design artifacts structured and shareable. Libraries, naming, and versioning reduce drift between designers and downstream engineering.',
        outcomes: four(
          'Component library with usage notes and do or do not examples',
          'File organization that scales across squads and products',
          'Export and handoff conventions agreed with engineering',
          'Accessibility annotations on patterns that need care',
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure, and Marvel prototypes validate flows before code gets expensive. We tie prototypes to test plans and success metrics so stakeholders see evidence, not only mockups.',
        outcomes: four(
          'Clickable flows covering primary and edge cases',
          'Usability test scripts linked to prototype versions',
          'Motion and micro interaction notes for implementation',
          'Decision log capturing what changed after feedback',
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar, and Amplitude connect qualitative signals with quantitative behavior. Research cadence is planned so insights land when roadmap decisions are still open.',
        outcomes: four(
          'Research plan with goals, audience, and timelines',
          'Insight repository others can search without asking the team',
          'Dashboards for funnels, retention, and feature adoption',
          'Prioritized backlog of fixes tied to evidence severity',
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React, and Next.js deliver fast, accessible surfaces. Semantic structure, performance budgets, and progressive enhancement keep experiences resilient.',
        outcomes: four(
          'Semantic page structure and heading order validated',
          'Performance budget with CI checks on regressions',
          'Responsive behavior tested on real device matrix',
          'SEO and sharing metadata reviewed for key templates',
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap, and Ant Design accelerate UI delivery when teams want opinionated systems. We align tokens, theming, and component APIs with your brand and accessibility targets.',
        outcomes: four(
          'Theme extension package with brand tokens applied',
          'Storybook or equivalent catalog for reusable UI',
          'Keyboard and screen reader checks on shared components',
          'Migration notes when upgrading major library versions',
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira, and Slack keep discovery and delivery visible. Rituals and documentation live where teams already work, which improves adoption more than heavyweight process decks.',
        outcomes: four(
          'Workspace templates for workshops and design critiques',
          'Traceability from discovery insights to Jira epics',
          'Slack or Teams channels with clear escalation paths',
          'Lightweight governance that teams actually follow',
        ),
      },
    ],
  },
}
