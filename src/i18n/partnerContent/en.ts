import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const enPartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Microsoft Partner | Azure, .NET, Power Platform & Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix is a Microsoft Solutions Partner delivering Azure migrations, .NET modernization, Power Platform automation, Microsoft 365 collaboration, and Dynamics 365 customizations across regulated industries.',
    },
    hero: {
      eyebrow: 'Microsoft Partnership',
      title: 'Engineered with Microsoft, delivered for the enterprise',
      highlight: 'Microsoft',
      description:
        'As a Microsoft Solutions Partner, we help organizations modernize on Azure, scale Power Platform safely, and ship governed Copilot experiences that move real business metrics not just roadmaps.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Designations across Azure, Data & AI, and Business Applications',
      cta: 'Discuss Your Project',
      exploreCapabilities: 'Explore capabilities',
      activePartnerBadge: 'Active Partner',
      highlights: [
        'Microsoft Solutions Partner across Azure, Data & AI, and Business Applications',
        'Cloud Adoption Framework (CAF) led migrations with Azure Well-Architected reviews',
        'Power Platform Center of Excellence (CoE) for governed citizen development',
        'Dedicated Microsoft co-sell motion and Marketplace transactable offerings',
      ],
      statLabels: ['Microsoft Projects', 'MS Certifications', 'Microsoft Experience'],
    },
    credentials: {
      badge: 'Partnership Credentials',
      title:
        'Credentials, competencies, and a delivery muscle built on Microsoft',
      description:
        'A multi-disciplinary practice of architects, engineers, data specialists, and consultants purpose-built around the Microsoft Cloud and refreshed every quarter against new certifications.',
      certificationsTitle:
        'Active certifications across our delivery teams',
      certificationsDescription:
        'A snapshot of the role-based credentials our engineers, architects and consultants currently hold.',
      competencies: [
        {
          title: 'Azure Infrastructure',
          description:
            'Landing zones, hub-and-spoke networking, hybrid identity, and FinOps guardrails engineered to the Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work & M365',
          description:
            'Microsoft 365, SharePoint Online, Teams app development, Viva, and modern intranet portals that lift employee experience and adoption.',
        },
        {
          title: 'Data & AI on Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service, and Cognitive Services purpose built data estates and copilots that unlock decisions.',
        },
        {
          title: 'Business Applications',
          description:
            'Dynamics 365 Sales, Customer Service, and Finance customizations with PCF controls, plugins, Power Pages, and Dataverse integrations.',
        },
        {
          title: 'Power Platform',
          description:
            'Canvas and model-driven Power Apps, Power Automate flows, Power BI dashboards, and AI Builder wrapped in a governed CoE toolkit.',
        },
        {
          title: 'Security & Compliance',
          description:
            'Defender XDR, Sentinel, Purview, Intune, and Entra ID rollouts that put zero trust, conditional access, and data classification in place.',
        },
      ],
      certifications: [
        { name: 'Azure Solutions Architect Expert' },
        { name: 'Azure Administrator Associate' },
        { name: 'Azure Developer Associate' },
        { name: 'Azure DevOps Engineer Expert' },
        { name: 'Power Platform Solution Architect' },
        { name: 'Power Platform Developer Associate' },
        { name: 'Azure Data Engineer Associate' },
        { name: 'Azure AI Engineer Associate' },
        { name: 'Security, Compliance & Identity Fundamentals' },
      ],
    },
    features: {
      badge: 'What We Deliver',
      title: 'A complete delivery practice on the Microsoft Cloud',
      description:
        'Six engineering motions we run repeatedly for clients across BFSI, healthcare, manufacturing, and technology.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'Azure Migration & Modernization',
          description:
            'A predictable path off ageing data centres and legacy hosting providers, with every wave tracked against a measurable cost, resilience, and security baseline.',
          details:
            'We start with a portfolio assessment in Azure Migrate, then break the estate into 6 to 8 migration waves so the business never feels a big-bang event. Each wave gets a Bicep landing zone, an SLO target, a DR pattern, and a FinOps tagging policy before a single workload moves. Our migration squad pairs an enterprise architect with delivery engineers, so design decisions are made once and reused everywhere.',
          outcomes: [
            'Azure landing zone aligned to the Cloud Adoption Framework',
            'Migration waves scoped against the Well-Architected pillars',
            'Bicep or Terraform infrastructure repositories handed over',
            'FinOps baseline with tagging, budgets, and monthly reporting',
            'Production DR runbook tested in a live failover drill',
            'Knowledge transfer sessions for your platform engineers',
          ],
        },
        {
          title: '.NET Application Modernization',
          description:
            'A working modernization plan for the .NET Framework apps that still pay the bills, with no big-bang rewrite and no frozen feature roadmap.',
          details:
            'We use the strangler-fig pattern to peel functionality off legacy ASP.NET monoliths one bounded context at a time, while keeping the production app shipping new features for the business. New services run on .NET 8 with containers on AKS or Container Apps, an API gateway out front, and OpenTelemetry wiring into Application Insights. The end state is one runtime, one CI/CD pipeline, and one security posture.',
          outcomes: [
            '.NET Framework codebase mapped into bounded contexts',
            'Strangler-fig roadmap with quarterly delivery milestones',
            'New services running on .NET 8 in AKS or Container Apps',
            'OpenTelemetry traces flowing into Application Insights',
            'GitHub Actions or Azure DevOps CI/CD pipelines configured',
            'Defender for Cloud and Key Vault wired into every workload',
          ],
        },
        {
          title: 'Power Platform & Copilot Studio',
          description:
            'Citizen development without the chaos. A governed Power Platform practice with Copilot Studio agents grounded on your real data.',
          details:
            'We stand up a Power Platform Center of Excellence using the official CoE Starter Kit, then layer in the things real customers actually need: an environment strategy, a DLP policy that the business agrees with, a Dataverse data model owned by IT, and an ALM pipeline built on Power Platform Pipelines. Copilot Studio agents get grounded on SharePoint, Dataverse, and Azure OpenAI so answers stay accurate and auditable.',
          outcomes: [
            'CoE Starter Kit deployed with environment and DLP strategy',
            'Dataverse domain model owned by your IT team',
            'ALM pipeline built on Power Platform Pipelines',
            'Maker onboarding playbook and training program',
            'Two production Copilot Studio agents grounded on enterprise data',
            'Capacity monitoring and license rightsizing dashboards',
          ],
        },
        {
          title: 'Microsoft 365 & SharePoint',
          description:
            'A modern employee experience on Microsoft 365 with a real intranet, Teams apps that get used, and Graph automations that quietly remove busywork.',
          details:
            'We design and build SharePoint Framework solutions, Teams Toolkit apps, custom Outlook add-ins, and Viva Connections dashboards, and we connect them to your business systems through Microsoft Graph and Logic Apps. Every project includes a content governance plan, a tenant security review against Microsoft Secure Score, and an adoption playbook so the rollout actually lands with employees.',
          outcomes: [
            'SharePoint Online intranet with Viva Connections card framework',
            'Two to four Teams Toolkit apps integrated into daily workflows',
            'Microsoft Graph automations replacing manual handoffs',
            'Tenant security review with Secure Score uplift plan',
            'Content governance and lifecycle policies documented',
            'Change management and adoption toolkit for HR and Comms',
          ],
        },
        {
          title: 'Azure Data Platform & Fabric',
          description:
            'One trusted analytics estate on Microsoft Fabric, with semantic Power BI models, governed lineage, and freshness measured in minutes, not days.',
          details:
            'We build medallion lakehouses on OneLake, run pipelines on Synapse or Fabric Data Factory, and model transformations in dbt or Dataform. Every Power BI dataset goes through a semantic-model review with row-level security, parameter-driven calculation groups, and a documented certified-dataset policy. Microsoft Purview ties it together with lineage, classification, and data-quality scorecards.',
          outcomes: [
            'Bronze to Gold lakehouse layout on OneLake',
            'Synapse or Fabric Data Factory ingestion pipelines',
            'dbt project with documented tests and CI checks',
            'Certified Power BI semantic models with row-level security',
            'Purview-backed lineage and data classification',
            'Data-quality scorecards reviewed in a monthly cadence',
          ],
        },
        {
          title: 'Azure AI & OpenAI Solutions',
          description:
            'Production-grade Azure OpenAI assistants that stay grounded on your data, get evaluated before every release, and behave inside enterprise guardrails.',
          details:
            'We design the retrieval architecture around Azure AI Search, ground prompts on documents stored in SharePoint, OneLake, or Cosmos DB, and evaluate responses using Prompt Flow with golden test sets that grow over time. Networking goes through private endpoints, content safety filters are tuned with your trust and safety team, and Application Insights gives you token, latency, and grounding-rate dashboards on day one.',
          outcomes: [
            'Reference RAG architecture on Azure OpenAI plus AI Search',
            'Prompt Flow evaluation harness with golden datasets',
            'Private endpoints, managed identity, and content filters',
            'Application Insights dashboards for tokens and latency',
            'Responsible-AI checklist signed off with your legal team',
            'Production rollout playbook with phased adoption',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Why Customers Choose Us',
      title: 'Hard problems we solve on the Microsoft stack',
      description:
        'The recurring patterns we untangle inside the Microsoft ecosystem and the way we approach each one.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Stalled or partial Azure migrations',
          solution:
            'We restart cloud journeys with a CAF aligned landing zone, replatform and refactor waves, and a clear FinOps baseline that controls run-rate from day one.',
        },
        {
          challenge: 'Aging .NET Framework estate',
          solution:
            'Strangler-fig migration to .NET 8, containerization on AKS, and CI/CD on Azure DevOps or GitHub without freezing your feature roadmap.',
        },
        {
          challenge: 'Power Platform sprawl with no governance',
          solution:
            'We stand up a Power Platform CoE with environment strategy, DLP policies, ALM, capacity monitoring, and a maker community that scales safely.',
        },
        {
          challenge: 'AI initiatives stuck in PoC',
          solution:
            'We productionize Azure OpenAI assistants with RAG, evaluation gates, observability, and responsible-AI guardrails so PoCs graduate to enterprise scale.',
        },
        {
          challenge: 'Identity, data, and compliance gaps',
          solution:
            'Zero-trust rollouts using Entra ID conditional access, Purview classification, Defender XDR, and Sentinel runbooks to meet SOC 2, HIPAA, and GDPR.',
        },
        {
          challenge: 'Fragmented analytics and reporting',
          solution:
            'A unified Fabric and Synapse data platform with semantic Power BI models and Purview governance: one trusted source for every business question.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Real engagements across the Microsoft ecosystem',
      description:
        'Representative implementations our Microsoft practice has shipped for regulated industries and digital-native teams.',
      items: [
        {
          title: 'Banking core to Azure',
          description:
            'Migrated and re-platformed a Tier-2 bank’s mid-office workloads to Azure with private DNS, ExpressRoute, and Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE for insurance',
          description:
            'Built tailored claims and underwriting workflows on Dynamics 365 with PCF controls, custom plugins, and Power Pages portals.',
        },
        {
          title: 'Manufacturing Copilot',
          description:
            'Delivered an Azure OpenAI shop-floor copilot grounded on SharePoint SOPs and IoT telemetry, reducing first-call escalations.',
        },
        {
          title: 'Microsoft 365 intranet refresh',
          description:
            'Modernized a 12,000-employee intranet on SharePoint Online with Viva Connections, Teams integration, and Graph automations.',
        },
        {
          title: 'Power Platform CoE',
          description:
            'Stood up a governed Power Platform CoE with environment strategy, ALM via Power Platform Pipelines, and DLP policies.',
        },
        {
          title: 'Fabric lakehouse for retail',
          description:
            'Engineered a Microsoft Fabric lakehouse with medallion architecture, OneLake, and Power BI semantic models for daily insights.',
        },
        {
          title: 'Healthcare HL7 on Azure',
          description:
            'Integrated HL7 and FHIR data flows into Azure Health Data Services with Purview classification and HIPAA-ready security.',
        },
        {
          title: '.NET SaaS platform',
          description:
            'Rebuilt a legacy ASP.NET MVC SaaS into a multi-tenant .NET platform on AKS with OpenTelemetry and zero-downtime CI/CD.',
        },
      ],
    },
    impact: {
      badge: 'Partnership Impact',
      title: 'The outcomes our Microsoft work consistently drives',
      description:
        'A snapshot of the operational and financial improvements we are accountable for in every Microsoft engagement.',
      metrics: [
        {
          label: 'Run-rate Savings',
          description:
            'Average reduction in Azure monthly spend after our FinOps and Well-Architected reviews on migrated estates.',
        },
        {
          label: 'Workload Availability',
          description:
            'Target SLA for our production Azure landing zones with multi-region active-passive patterns and tested DR runbooks.',
        },
        {
          label: 'PoC to Production',
          description:
            'Typical timeline from Azure OpenAI proof-of-concept to a governed, evaluated, production-ready copilot rollout.',
        },
        {
          label: 'Maker Adoption Lift',
          description:
            'Increase in active Power Platform makers within 90 days of standing up our governed Center of Excellence.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'AWS Partner | Cloud Architecture, Migrations & DevOps on AWS | Cogtix Solutions',
      description:
        'Cogtix is an AWS Partner Network member building Well-Architected workloads on Amazon Web Services, including EKS, Lambda, Aurora, and SageMaker, with FinOps, security, and SRE practices baked into how we ship.',
    },
    hero: {
      eyebrow: 'AWS Partnership',
      title: 'Built on AWS, engineered for outcomes that compound',
      highlight: 'AWS',
      description:
        'As an AWS Partner Network member, we deliver Well Architected workloads on Amazon Web Services from landing zones and EKS platforms to Bedrock-backed copilots with FinOps and security baked into the way we ship.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Solutions and Services paths with Well-Architected aligned delivery',
      cta: 'Discuss Your Project',
      exploreCapabilities: 'Explore capabilities',
      activePartnerBadge: 'Active Partner',
      highlights: [
        'AWS Partner Network (APN) member with Solutions, Services, and Software paths',
        'Well-Architected Framework reviews across all six pillars on every engagement',
        'AWS Migration Acceleration Program (MAP) aligned discovery and execution',
        'AWS Marketplace transactable offers and co-sell motions with our account teams',
      ],
      statLabels: ['AWS Migrations', 'AWS Certifications', 'Avg Cost Saved'],
    },
    credentials: {
      badge: 'Partnership Credentials',
      title:
        'A delivery practice that lives inside the AWS Well-Architected Framework',
      description:
        'An architecture-led team with deep certification coverage, MAP playbooks, and a FinOps-first delivery culture purpose-built around AWS.',
      certificationsTitle:
        'Active certifications across our delivery teams',
      certificationsDescription:
        'A snapshot of the role-based credentials our engineers, architects and consultants currently hold.',
      competencies: [
        {
          title: 'Cloud Foundations',
          description:
            'Multi-account landing zones with AWS Control Tower, Organizations, SCPs, and Identity Center secure, auditable, and ready for scale on day one.',
        },
        {
          title: 'Containers & Kubernetes',
          description:
            'Production EKS clusters with Karpenter autoscaling, service mesh (App Mesh or Istio), GitOps via Argo CD, and policy-as-code controls.',
        },
        {
          title: 'Serverless',
          description:
            'Event-driven systems on Lambda, EventBridge, SQS, and Step Functions engineered for idempotency, sub-100ms latencies, and tight cost control.',
        },
        {
          title: 'Data & Analytics',
          description:
            'Lakehouses on Amazon S3 with Glue, Athena, Redshift Serverless, Iceberg tables, and Quicksight purpose-built for cost-aware analytics.',
        },
        {
          title: 'AI / ML on AWS',
          description:
            'Amazon Bedrock, SageMaker pipelines, Kendra retrieval, and fine-tuned foundation models with private VPC endpoints and observability.',
        },
        {
          title: 'Security & Compliance',
          description:
            'AWS Security Hub, GuardDuty, Config, IAM Access Analyzer, and KMS-led patterns that map to SOC 2, HIPAA, PCI-DSS, and ISO 27001 controls.',
        },
      ],
      certifications: [
        { name: 'AWS Solutions Architect Professional' },
        { name: 'AWS Solutions Architect Associate' },
        { name: 'AWS DevOps Engineer Professional' },
        { name: 'AWS Developer Associate' },
        { name: 'AWS SysOps Administrator Associate' },
        { name: 'AWS Security Specialty' },
        { name: 'AWS Data Engineer Associate' },
        { name: 'AWS Machine Learning Specialty' },
        { name: 'AWS Cloud Practitioner' },
      ],
    },
    features: {
      badge: 'What We Deliver',
      title: 'A complete engineering practice on Amazon Web Services',
      description:
        'Six engineering motions we run repeatedly for clients modernizing on AWS from migrations to GenAI in production.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'AWS Cloud Migration (MAP)',
          description:
            'A senior-led migration onto AWS that follows the Migration Acceleration Program playbook, with every wave reviewed against the six Well-Architected pillars.',
          details:
            'We run a portfolio assessment in AWS Migration Hub, classify each workload into the right 6 R (rehost, replatform, refactor, repurchase, retire, retain), and then design a Control Tower landing zone with networking, identity, logging, and SCP guardrails set on day one. Migration waves are sized in two-week sprints, and our architects sign off the Well-Architected review for every wave before workloads cut over to production.',
          outcomes: [
            'AWS Migration Hub portfolio assessment with cost projections',
            'AWS Control Tower landing zone with org units and SCPs',
            'Network, identity, logging, and KMS reference patterns',
            'Wave-by-wave Well-Architected reviews and remediation backlog',
            'CI/CD pipelines for IaC built on Terraform or CDK',
            'Production cutover plan with rollback and DR drill',
          ],
        },
        {
          title: 'EKS & Containers',
          description:
            'A production Amazon EKS platform that your delivery teams can deploy to safely on day one, with autoscaling, GitOps, and identity wired in by us, not by tutorials.',
          details:
            'We build private EKS clusters with IRSA-scoped IAM, OPA Gatekeeper policies for guardrails, AWS Load Balancer Controller for ingress, Argo CD for GitOps delivery, and Karpenter for fast, cost-aware autoscaling. We add KEDA for event-driven scaling, External Secrets Operator for Secrets Manager, and a tested upgrade runbook so version upgrades stop being a quarterly fire drill.',
          outcomes: [
            'Private EKS cluster with IRSA-scoped IAM roles',
            'Karpenter autoscaling with right-sized node pools',
            'Argo CD GitOps delivery from your application repositories',
            'OPA Gatekeeper guardrails enforcing org policy',
            'External Secrets Operator wired to AWS Secrets Manager',
            'Upgrade runbook for EKS, add-ons, and Karpenter versions',
          ],
        },
        {
          title: 'Serverless Modernization',
          description:
            'An event-driven backend that scales elastically with the business, with strong idempotency, traceability, and cost telemetry baked in from the first commit.',
          details:
            'We design Lambda functions to be idempotent and short-lived, route work through EventBridge buses with schema registry contracts, orchestrate long-running flows in Step Functions, and store data in DynamoDB single-table designs or Aurora Serverless v2. X-Ray traces flow into CloudWatch and we expose a per-feature cost dashboard so engineering and finance see the same numbers.',
          outcomes: [
            'EventBridge bus with schema registry contracts',
            'Lambda functions designed for idempotency and retries',
            'Step Functions orchestrations for long-running workflows',
            'DynamoDB single-table data model or Aurora Serverless v2',
            'X-Ray traces and CloudWatch dashboards per workflow',
            'Per-feature cost telemetry for engineering and finance',
          ],
        },
        {
          title: 'Data Lakehouse on AWS',
          description:
            'An open-table lakehouse on Amazon S3 that gives analysts, data scientists, and product teams the same governed source of truth, without vendor lock-in.',
          details:
            'We design medallion lakehouses on S3 with Apache Iceberg, build ingestion in AWS Glue or Kinesis Firehose, and run transformations through dbt on Athena or EMR. Glue Data Quality enforces row and table-level rules, Lake Formation grants column-level permissions, and downstream serving goes to Redshift Serverless for BI and Quicksight for self-service.',
          outcomes: [
            'Iceberg tables on Amazon S3 with medallion architecture',
            'Glue or Kinesis ingestion for batch and streaming sources',
            'dbt project with documented tests and CI checks',
            'Glue Data Quality rules wired to alerts',
            'Lake Formation column-level access policies',
            'Redshift Serverless and Quicksight serving layers',
          ],
        },
        {
          title: 'GenAI on Amazon Bedrock',
          description:
            'Retrieval-augmented assistants on Amazon Bedrock that stay grounded on your enterprise context, get measured before each release, and never leave your VPC.',
          details:
            'We pick the right Bedrock model for the job (Claude, Llama, or Titan), build retrieval over Amazon Kendra or OpenSearch Serverless, and ground responses on documents you already own in S3, SharePoint, or Confluence. Bedrock Guardrails handle content safety, evaluation runs on a golden dataset that grows over time, and observability is wired into CloudWatch and OpenTelemetry.',
          outcomes: [
            'Reference RAG architecture on Amazon Bedrock plus Kendra',
            'Bedrock Guardrails configured for content and PII policies',
            'PrivateLink endpoints keeping traffic inside the VPC',
            'Evaluation harness with a versioned golden dataset',
            'CloudWatch dashboards for tokens, latency, and grounding',
            'Production rollout plan with phased adoption and feedback loop',
          ],
        },
        {
          title: 'FinOps & Cost Engineering',
          description:
            'A continuous AWS cost program, not a one-off audit. Tagging governance, commitment strategy, and an executive cost narrative that runs every month.',
          details:
            'We baseline spend using Cost and Usage Reports, build dashboards in Cost Explorer and QuickSight, and turn Compute Optimizer recommendations into pull requests, not slide decks. Savings Plans coverage is sized against forecasted workload, S3 lifecycle and Intelligent-Tiering go live on top buckets, and a monthly FinOps review meeting produces an executive narrative on what changed and why.',
          outcomes: [
            'CUR ingested into a queryable cost analytics layer',
            'Tagging policy enforced through SCPs and CI checks',
            'Compute Optimizer recommendations turned into PRs',
            'Savings Plans and Reserved Instances coverage plan',
            'S3 lifecycle and Intelligent-Tiering across top buckets',
            'Monthly FinOps review with executive cost narrative',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Why Customers Choose Us',
      title: 'Hard problems we solve on AWS',
      description:
        'The recurring patterns we untangle on Amazon Web Services and the way we approach each one.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Unstructured AWS account sprawl',
          solution:
            'We consolidate accounts into a Control Tower landing zone with Organizations, SCPs, centralized logging, and Identity Center: clean, auditable, scalable.',
        },
        {
          challenge: 'Performance and cost surprises in production',
          solution:
            'CloudWatch with OpenTelemetry observability, Compute Optimizer-driven right-sizing, and a monthly FinOps cadence put surprises behind you.',
        },
        {
          challenge: 'Stuck modernizing monoliths',
          solution:
            'We re-architect to microservices on EKS, decouple via SQS and EventBridge, and containerize with Karpenter to scale fast without runaway cost.',
        },
        {
          challenge: 'Disconnected data lakes and warehouses',
          solution:
            'Iceberg lakehouse on S3 unifies analytics so Athena, Redshift, and Quicksight share the same governed source of truth with Glue Data Quality gates.',
        },
        {
          challenge: 'Security posture below auditor expectations',
          solution:
            'We harden AWS estates with GuardDuty, Security Hub, Config rules, IAM Access Analyzer, and KMS patterns aligned to SOC 2, HIPAA, and PCI-DSS.',
        },
        {
          challenge: 'Pilot AI projects that never reach production',
          solution:
            'We graduate Bedrock and SageMaker PoCs to production with evaluation harnesses, PrivateLink networking, guardrails, and CI/CD-controlled releases.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Real engagements across the AWS ecosystem',
      description:
        'Representative implementations our AWS practice has shipped for SaaS, regulated, and digital-native teams.',
      items: [
        {
          title: 'Fintech VMware exit to AWS',
          description:
            'Replatformed a payments fintech from VMware to AWS with Control Tower, EKS, and Aurora Postgres in 14 weeks with zero customer downtime.',
        },
        {
          title: 'SaaS multi-tenant on EKS',
          description:
            'Designed a multi-tenant SaaS isolation model on EKS with Karpenter autoscaling, Argo CD, and per-tenant cost attribution.',
        },
        {
          title: 'Logistics serverless platform',
          description:
            'Built an event-driven logistics platform on Lambda + EventBridge + DynamoDB serving 4M daily shipment events at sub-100ms latency.',
        },
        {
          title: 'Bedrock support copilot',
          description:
            'Delivered a customer support copilot on Amazon Bedrock with Kendra retrieval and full audit trail for an insurance client.',
        },
        {
          title: 'Iceberg lakehouse for retail',
          description:
            'Engineered an Iceberg-on-S3 lakehouse with dbt + Athena and Redshift Serverless, reducing analytics spend by 55% versus legacy warehouse.',
        },
        {
          title: 'HIPAA-ready healthcare estate',
          description:
            'Hardened an AWS environment to HIPAA controls with Macie, KMS, GuardDuty, and a tested BCDR plan across two regions.',
        },
        {
          title: 'IoT data ingestion',
          description:
            'Stood up an IoT Core + Kinesis Firehose pipeline ingesting 1B+ telemetry events monthly with low-latency dashboards on Timestream.',
        },
        {
          title: 'AWS FinOps program',
          description:
            'Stood up a continuous FinOps program with Savings Plans coverage, tagging governance, and a monthly executive cost narrative.',
        },
      ],
    },
    impact: {
      badge: 'Partnership Impact',
      title: 'The outcomes our AWS work consistently drives',
      description:
        'A snapshot of the operational and financial improvements we are accountable for in every AWS engagement.',
      metrics: [
        {
          label: 'Avg AWS Bill Cut',
          description:
            'Typical run-rate reduction within 90 days when our FinOps program is layered on top of a migrated AWS estate.',
        },
        {
          label: 'Median Migration',
          description:
            'Median duration from MAP discovery to first production wave for mid-market migrations onto Control Tower landing zones.',
        },
        {
          label: 'Target SLA',
          description:
            'Default availability target for our multi-AZ production architectures, validated with chaos and DR game-day exercises.',
        },
        {
          label: 'API Latency',
          description:
            'Typical p99 latency we deliver for serverless and EKS-based public APIs after our performance engineering pass.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Google Cloud Partner | BigQuery, Vertex AI, GKE & Anthos | Cogtix Solutions',
      description:
        'Cogtix is a Google Cloud Partner delivering BigQuery data platforms, Vertex AI productionization, GKE container platforms, and Anthos modernization for data-led organizations.',
    },
    hero: {
      eyebrow: 'Google Cloud Partnership',
      title: 'Data-led innovation on Google Cloud',
      highlight: 'Google Cloud',
      description:
        'As a Google Cloud Partner, we help data-led organizations build their analytics estate on BigQuery, productionize AI on Vertex AI, and modernize containers on GKE all under one governed, FinOps-aware platform.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Data & Analytics and Cloud Infrastructure focus areas',
      cta: 'Discuss Your Project',
      exploreCapabilities: 'Explore capabilities',
      activePartnerBadge: 'Active Partner',
      highlights: [
        'Google Cloud Partner with Data & Analytics and Cloud Infrastructure focus',
        'BigQuery-first data platforms with dbt, Dataform, and Looker semantic models',
        'Production-ready Vertex AI workflows with model monitoring and governance',
        'GKE and Anthos modernization with zero-trust networking and policy-as-code',
      ],
      statLabels: ['GCP Projects', 'GCP Certifications', 'Pipeline SLO'],
    },
    credentials: {
      badge: 'Partnership Credentials',
      title: 'A Google Cloud practice anchored in data and productionization',
      description:
        'An engineering and analytics team built around BigQuery, Vertex AI, GKE, and the Google Cloud security stack with role-based certifications across every discipline.',
      certificationsTitle:
        'Active certifications across our delivery teams',
      certificationsDescription:
        'A snapshot of the role-based credentials our engineers, architects and consultants currently hold.',
      competencies: [
        {
          title: 'Data Analytics on BigQuery',
          description:
            'BigQuery warehouses with partitioning, clustering, and BI Engine paired with dbt or Dataform transformations and Looker semantic layers.',
        },
        {
          title: 'Vertex AI & GenAI',
          description:
            'End-to-end Vertex AI Pipelines, Model Garden deployments, Gemini-grounded copilots, and feature store-backed productionization.',
        },
        {
          title: 'GKE & Anthos',
          description:
            'Hardened GKE clusters with Autopilot, Workload Identity, Config Sync, Anthos Service Mesh, and Binary Authorization for compliant workloads.',
        },
        {
          title: 'Serverless & Cloud Run',
          description:
            'Event-driven services on Cloud Run, Cloud Functions, Workflows, and Eventarc with Pub/Sub fan-out and idempotent processing patterns.',
        },
        {
          title: 'Streaming Data',
          description:
            'Real-time pipelines on Pub/Sub and Dataflow with Apache Beam, exactly-once semantics, and sub-second latency into BigQuery and Bigtable.',
        },
        {
          title: 'Security & Governance',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK, and DLP engineered for SOC 2, HIPAA, and GDPR-ready estates.',
        },
      ],
      certifications: [
        { name: 'Professional Cloud Architect' },
        { name: 'Professional Cloud Developer' },
        { name: 'Professional Data Engineer' },
        { name: 'Professional Machine Learning Engineer' },
        { name: 'Professional Cloud DevOps Engineer' },
        { name: 'Professional Cloud Security Engineer' },
        { name: 'Professional Cloud Network Engineer' },
        { name: 'Professional Workspace Administrator' },
        { name: 'Associate Cloud Engineer' },
      ],
    },
    features: {
      badge: 'What We Deliver',
      title: 'A complete delivery practice on Google Cloud',
      description:
        'Six engineering motions we run repeatedly for clients modernizing on Google Cloud from BigQuery platforms to Vertex AI in production.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'BigQuery Data Platform',
          description:
            'One BigQuery analytics estate that every team trusts. Curated tables, certified semantic models in Looker, and a real cost story alongside every query.',
          details:
            'We design partitioned and clustered BigQuery tables, turn on BI Engine for the queries that matter, and use BigLake or Iceberg external tables to keep storage open. Transformations are modelled in dbt with CI gates and unit tests, semantic logic lives in Looker (or Looker Modeler) with row-level security, and a slot reservation strategy keeps performance predictable for everyone.',
          outcomes: [
            'Partitioned and clustered BigQuery tables for top queries',
            'BI Engine acceleration enabled on critical dashboards',
            'BigLake or Iceberg external tables for open storage',
            'dbt project with CI gates, tests, and lineage',
            'Looker semantic model with row-level security policies',
            'Slot reservation and autoscaling strategy with cost guardrails',
          ],
        },
        {
          title: 'Vertex AI Productionization',
          description:
            'A Vertex AI practice that turns notebooks into governed production workloads, with feature stores, monitoring, and Gemini grounded on your data.',
          details:
            'We design Vertex AI Pipelines for training, evaluation, and deployment, build a Feature Store-backed serving layer for low-latency online predictions, and turn on Model Monitoring for drift and prediction-skew alerts. For GenAI use cases, we ground Gemini through Vertex AI Search and Document AI, evaluate with golden datasets, and ship with a release process your platform team can run.',
          outcomes: [
            'Vertex AI Pipelines for training, eval, and deployment',
            'Feature Store with online and offline serving paths',
            'Model Monitoring for drift, skew, and feature attribution',
            'Vertex AI Search retrieval grounded on enterprise documents',
            'Evaluation harness with versioned golden datasets',
            'Release runbook your MLOps team can run independently',
          ],
        },
        {
          title: 'GKE & Anthos Platforms',
          description:
            'A compliance-ready GKE Autopilot platform that your engineers can deploy to safely. Workload identity, policy, and supply-chain integrity wired in by us.',
          details:
            'We build private GKE Autopilot clusters with Workload Identity Federation, Binary Authorization for image signing, and Config Sync with Policy Controller for GitOps policy enforcement. East-west traffic is governed by Anthos Service Mesh, edge by Cloud Armor and Cloud Load Balancing, and secrets flow from Secret Manager through External Secrets Operator.',
          outcomes: [
            'Private GKE Autopilot cluster with Workload Identity',
            'Binary Authorization enforcing signed images at deploy',
            'Config Sync and Policy Controller for GitOps policy',
            'Anthos Service Mesh for east-west traffic and mTLS',
            'Cloud Armor and load balancing at the edge',
            'External Secrets Operator wired to Secret Manager',
          ],
        },
        {
          title: 'Streaming & Real-time Data',
          description:
            'Sub-second pipelines on Pub/Sub and Dataflow that replace nightly batch with always-fresh data, with exactly-once semantics and late-arrival handling solved.',
          details:
            'We engineer Apache Beam pipelines on Dataflow with exactly-once processing, late-arrival windows, and schema evolution managed through Schema Registry contracts. Hot data lands in Bigtable for serving and BigQuery for analytics, dead-letter queues capture poison messages, and operational dashboards in Cloud Monitoring track throughput, latency, and freshness end to end.',
          outcomes: [
            'Pub/Sub topics with versioned schema registry contracts',
            'Apache Beam pipelines on Dataflow with exactly-once',
            'Late-arrival windowing and dead-letter queues',
            'Bigtable hot-serving layer plus BigQuery analytics sink',
            'Cloud Monitoring dashboards for freshness and lag',
            'Replay tooling for back-fills and schema migrations',
          ],
        },
        {
          title: 'Cloud Run & Serverless',
          description:
            'Fully managed services on Cloud Run that scale to zero, deploy from your repo, and stay observable through Cloud Trace, Cloud Profiler, and Cloud Logging.',
          details:
            'We build Cloud Run services tuned for concurrency, fronted by API Gateway or Load Balancing, orchestrated through Workflows for multi-step business processes, and routed through Eventarc for event-driven patterns. Persistent state lives in Cloud SQL or Spanner with PITR and read replicas, and every service ships with Cloud Trace, Cloud Profiler, and CI/CD wired into Cloud Deploy.',
          outcomes: [
            'Cloud Run services with concurrency-tuned configurations',
            'Workflows orchestrations for multi-step business processes',
            'Eventarc routing for event-driven patterns',
            'Cloud SQL or Spanner data layer with PITR and replicas',
            'Cloud Trace and Cloud Profiler enabled by default',
            'CI/CD via Cloud Deploy with progressive rollout',
          ],
        },
        {
          title: 'GCP FinOps & Cost Engineering',
          description:
            'A continuous Google Cloud cost program built around BigQuery economics, committed-use discount strategy, and a tagging policy that finance and engineering both trust.',
          details:
            'We baseline spend through Billing Export into BigQuery, size BigQuery slot reservations and autoscaling against forecast workload, apply Committed-Use Discounts where coverage is safe, and run GCS lifecycle and storage-class transitions on top buckets. A monthly FinOps review produces an executive cost narrative and a backlog of fixes engineering can ship next sprint.',
          outcomes: [
            'Billing Export ingested into a queryable cost layer',
            'BigQuery slot reservations sized to forecast workload',
            'CUD coverage plan reviewed quarterly',
            'GCS lifecycle and storage class transitions on top buckets',
            'Label and tagging policy enforced through org policies',
            'Monthly FinOps review with executive cost narrative',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Why Customers Choose Us',
      title: 'Hard problems we solve on Google Cloud',
      description:
        'Recurring patterns we untangle on Google Cloud and the way we approach each one.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Untrusted analytics across many teams',
          solution:
            'BigQuery, Dataform, and Looker establish a single semantic layer with dbt-style tests and lineage so every dashboard answers from the same source of truth.',
        },
        {
          challenge: 'ML experiments that never reach production',
          solution:
            'Vertex AI Pipelines, Feature Store, and Model Monitoring graduate notebooks to governed, observable production with evaluation gates.',
        },
        {
          challenge: 'Slow, batch-only data pipelines',
          solution:
            'Pub/Sub with Dataflow and Bigtable replaces nightly batch with exactly-once streaming and minute-level freshness across the warehouse.',
        },
        {
          challenge: 'Container platforms with policy drift',
          solution:
            'Anthos Config Sync and Policy Controller enforce GitOps policy across GKE fleets; Binary Authorization stops unsigned images at deploy time.',
        },
        {
          challenge: 'Sensitive data exposure and compliance gaps',
          solution:
            'VPC Service Controls, DLP, CMEK, and Security Command Center create a defensible perimeter aligned with SOC 2, HIPAA, and GDPR controls.',
        },
        {
          challenge: 'Unpredictable BigQuery and GCP costs',
          solution:
            'BigQuery reservations with slot autoscaling, CUDs, GCS lifecycle, and a tagging-driven FinOps cadence smooth GCP spend month after month.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Real engagements across the Google Cloud ecosystem',
      description:
        'Representative implementations our Google Cloud practice has shipped for data-led, regulated, and digital-native teams.',
      items: [
        {
          title: 'Retail BigQuery lakehouse',
          description:
            'Unified retail data into a BigQuery lakehouse with BigLake, dbt transformations, and Looker dashboards for 2,000+ stores.',
        },
        {
          title: 'Healthcare Vertex AI rollout',
          description:
            'Productionized clinical predictive models on Vertex AI with HIPAA-aligned VPC Service Controls and CMEK-encrypted data flows.',
        },
        {
          title: 'SaaS GKE Autopilot platform',
          description:
            'Designed a multi-tenant SaaS platform on GKE Autopilot with Workload Identity, Anthos Service Mesh, and Argo CD GitOps.',
        },
        {
          title: 'Streaming personalization',
          description:
            'Engineered a Pub/Sub to Dataflow to Bigtable pipeline serving sub-100ms personalization recommendations across web and mobile.',
        },
        {
          title: 'Gemini-grounded copilot',
          description:
            'Shipped a Gemini-powered support copilot grounded on Cloud Storage and BigQuery knowledge sources with eval harnesses.',
        },
        {
          title: 'Media transcoding on Cloud Run',
          description:
            'Built a Cloud Run and Workflows media transcoding pipeline that scaled to 10x peak load without provisioning overhead.',
        },
        {
          title: 'FinTech Looker enablement',
          description:
            'Designed a LookML semantic model for a FinTech platform, replacing 40+ legacy Tableau workbooks with governed dashboards.',
        },
        {
          title: 'Anthos hybrid modernization',
          description:
            'Modernized a hybrid manufacturing estate with Anthos clusters on-prem and GKE in GCP under a single policy plane.',
        },
      ],
    },
    impact: {
      badge: 'Partnership Impact',
      title: 'The outcomes our Google Cloud work consistently drives',
      description:
        'A snapshot of the operational and financial improvements we are accountable for in every Google Cloud engagement.',
      metrics: [
        {
          label: 'Query Performance',
          description:
            'Typical BigQuery query speed-up after our partitioning, clustering, materialized view, and BI Engine optimization pass.',
        },
        {
          label: 'GCP Cost Reduction',
          description:
            'Average run-rate savings within 90 days of layering our FinOps program: reservations, CUDs, lifecycle, and tagging governance.',
        },
        {
          label: 'Data Freshness',
          description:
            'Typical end-to-end latency in our Pub/Sub to Dataflow to BigQuery streaming pipelines, replacing legacy nightly batch jobs.',
        },
        {
          label: 'ML PoC to Prod',
          description:
            'Median time we move a Vertex AI proof-of-concept to a governed, evaluated, monitored production rollout.',
        },
      ],
    },
  },
}

export const enPartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Strategic Cloud Partnerships | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix delivers credentialed cloud partnerships across Microsoft, AWS, and Google Cloud. Explore our Azure, AWS, and GCP practices with FinOps, security, and SRE baked in.',
  },
  hero: {
    eyebrow: 'Strategic Alliances',
    title: 'Building on the world’s most trusted cloud platforms',
    highlight: 'cloud platforms',
    description:
      'Our engineers, architects, and consultants are deeply credentialed across Microsoft, AWS, and Google Cloud. Pick your platform and we’ll bring the playbook, the certifications, and the delivery muscle to match.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Data & AI · Business Applications',
      description:
        'Modernize on Azure, scale Power Platform safely, and ship governed Copilot experiences across .NET, Microsoft 365, and Dynamics 365.',
      highlights: [
        'Cloud Adoption Framework led Azure migrations',
        'Power Platform Center of Excellence',
        'Production Azure OpenAI assistants',
      ],
      statLabels: ['MS Projects', 'Certifications', 'Experience'],
      cta: 'Explore our Microsoft practice',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migrations · EKS · Serverless · Bedrock',
      description:
        'Build Well-Architected workloads on Amazon Web Services. We stand up landing zones, EKS platforms, Bedrock copilots, and FinOps engineered cost models that scale.',
      highlights: [
        'MAP-aligned migration waves',
        'EKS and Argo CD GitOps platforms',
        'Bedrock retrieval-augmented copilots',
      ],
      statLabels: ['AWS Migrations', 'Certifications', 'Avg Cost Saved'],
      cta: 'Explore our AWS practice',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Data-led innovation on Google Cloud. We build BigQuery lakehouses, productionized Vertex AI workloads, and modernized container platforms on GKE Autopilot.',
      highlights: [
        'BigQuery and Looker semantic platforms',
        'Vertex AI Pipelines in production',
        'GKE Autopilot with GitOps policy',
      ],
      statLabels: ['GCP Projects', 'Certifications', 'Pipeline SLO'],
      cta: 'Explore our Google Cloud practice',
    },
  },
  whyUs: {
    eyebrow: 'Why Cogtix',
    title: 'A multi-cloud delivery team backed by real engineering depth',
    description:
      'We don’t just hold certifications. We run the platforms we recommend every day, in production, across regulated and digital-native customers.',
    items: [
      {
        title: 'Architects on every engagement',
        description:
          'Every partner project pairs a principal architect with a delivery squad, so design decisions are senior-led and reused across the engagement.',
      },
      {
        title: 'Framework-aligned delivery',
        description:
          'We execute against the Azure CAF, AWS Well-Architected Framework, and Google Cloud Architecture Framework, pillar by pillar, review by review.',
      },
      {
        title: 'FinOps-aware from day one',
        description:
          'Cost modelling, tagging governance, and a monthly executive cost narrative are part of the engagement, not an afterthought.',
      },
      {
        title: 'Security & compliance built in',
        description:
          'SOC 2, HIPAA, PCI-DSS, and GDPR controls are reference architectures we apply, not boilerplate documents we hand over.',
      },
      {
        title: 'Reusable accelerators',
        description:
          'Landing zones, GenAI eval harnesses, Power Platform CoE kits, and IaC modules speed up delivery without locking you in.',
      },
      {
        title: 'Co-sell ready',
        description:
          'Active partner account teams on Microsoft, AWS, and Google Cloud, so we can transact through marketplaces and accelerate procurement.',
      },
    ],
  },
}
