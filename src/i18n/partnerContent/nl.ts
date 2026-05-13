import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const nlPartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Microsoft-partner | Azure, .NET, Power Platform & Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix is Microsoft Solutions Partner en levert Azure-migraties, .NET-modernisering, Power Platform-automatisering, Microsoft 365-samenwerking en Dynamics 365-aanpassingen in gereguleerde sectoren.',
    },
    hero: {
      eyebrow: 'Microsoft-partnerschap',
      title: 'Ontworpen met Microsoft, geleverd voor de onderneming',
      highlight: 'Microsoft',
      description:
        'Als Microsoft Solutions Partner helpen we organisaties moderniseren op Azure, Power Platform veilig opschalen en governance-conforme Copilot-ervaringen uitleveren die echte business-metrics verzetten, niet alleen roadmaps.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Designaties voor Azure, Data & AI en Business Applications',
      cta: 'Spreek een partnership-expert',
      exploreCapabilities: 'Verken capaciteiten',
      activePartnerBadge: 'Actieve Partner',
      highlights: [
        'Microsoft Solutions Partner voor Azure, Data & AI en Business Applications',
        'Migraties geleid door het Cloud Adoption Framework (CAF) met Azure Well-Architected reviews',
        'Power Platform Center of Excellence (CoE) voor governance-conforme citizen development',
        'Dedicated Microsoft co-sell motion en transactable aanbiedingen via Marketplace',
      ],
      statLabels: ['Microsoft-projecten', 'MS-certificeringen', 'Microsoft-ervaring'],
    },
    credentials: {
      badge: 'Partnerschaps-credentials',
      title:
        'Credentials, competenties en leverkracht gebouwd op Microsoft',
      description:
        'Een multidisciplinaire praktijk van architecten, engineers, dataspecialisten en consultants, opgezet rondom de Microsoft Cloud en elk kwartaal vernieuwd tegen nieuwe certificeringen.',
      certificationsTitle:
        'Actieve certificeringen in onze leverteams',
      certificationsDescription:
        'Een momentopname van de rol-gebaseerde credentials die onze engineers, architecten en consultants momenteel houden.',
      competencies: [
        {
          title: 'Azure-infrastructuur',
          description:
            'Landing zones, hub-and-spoke-netwerken, hybride identiteit en FinOps-vangrails volgens het Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work en M365',
          description:
            'Microsoft 365, SharePoint Online, Teams-app-ontwikkeling, Viva en moderne intranet-portalen die werknemerservaring en adoptie verhogen.',
        },
        {
          title: 'Data en AI op Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service en Cognitive Services: data-estates en copilots die beslissingen ontgrendelen.',
        },
        {
          title: 'Business Applications',
          description:
            'Aanpassingen van Dynamics 365 Sales, Customer Service en Finance met PCF-controls, plugins, Power Pages en Dataverse-integraties.',
        },
        {
          title: 'Power Platform',
          description:
            'Canvas- en model-driven Power Apps, Power Automate-flows, Power BI-dashboards en AI Builder binnen een governance-conform CoE-toolkit.',
        },
        {
          title: 'Beveiliging en compliance',
          description:
            'Uitrol van Defender XDR, Sentinel, Purview, Intune en Entra ID die zero trust, conditional access en dataclassificatie inrichten.',
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
      badge: 'Wat we leveren',
      title: 'Een complete leverpraktijk op de Microsoft Cloud',
      description:
        'Zes engineering-motions die we herhaaldelijk uitvoeren voor klanten in BFSI, healthcare, productie en tech.',
      outcomesTitle: 'Wat we leveren',
      items: [
        {
          title: 'Azure-migratie en -modernisering',
          description:
            'Een voorspelbare route weg van verouderde datacenters en legacy-hosting, met elke golf afgerekend tegen een meetbare baseline voor kosten, resilience en security.',
          details:
            'We starten met een portfolio-assessment in Azure Migrate en delen het estate in 6 tot 8 migratiegolven, zodat het bedrijf nooit een big-bang voelt. Elke golf krijgt een Bicep-landing-zone, een SLO-doel, een DR-pattern en een FinOps-tagging-policy voordat ook maar één workload verhuist. Onze migratie-squad combineert een enterprise-architect met deliveryt-engineers, design-beslissingen worden één keer genomen en overal hergebruikt.',
          outcomes: [
            'Azure landing zone afgestemd op het Cloud Adoption Framework',
            'Migratiegolven afgebakend tegen de Well-Architected-pijlers',
            'Bicep- of Terraform-infrastructuur-repositories overgedragen',
            'FinOps-baseline met tagging, budgetten en maandelijkse rapportage',
            'Productie-DR-runbook getest in een live-failover-oefening',
            'Kennisoverdracht-sessies voor jullie platform-engineers',
          ],
        },
        {
          title: '.NET-applicatie-modernisering',
          description:
            'Een werkbaar moderniseringsplan voor de .NET Framework-apps die nog de rekeningen betalen, zonder big-bang-herschrijving en zonder bevroren feature-roadmap.',
          details:
            'We gebruiken het strangler-fig-patroon om functionaliteit per bounded context van legacy ASP.NET-monolieten af te pellen, terwijl de productie-app nieuwe features blijft leveren. Nieuwe services draaien op .NET 8 in containers op AKS of Container Apps, een API gateway ervoor en OpenTelemetry richting Application Insights. Eindstaat: één runtime, één CI/CD-pipeline, één security-posture.',
          outcomes: [
            '.NET Framework-codebase in bounded contexts gemapt',
            'Strangler-fig-roadmap met kwartaal-leveringsmijlpalen',
            'Nieuwe services op .NET 8 in AKS of Container Apps',
            'OpenTelemetry-traces in Application Insights',
            'CI/CD-pipelines op GitHub Actions of Azure DevOps geconfigureerd',
            'Defender for Cloud en Key Vault in elke workload',
          ],
        },
        {
          title: 'Power Platform en Copilot Studio',
          description:
            'Citizen development zonder chaos. Een governance-conforme Power Platform-praktijk met Copilot Studio-agents geaard op jullie echte data.',
          details:
            'We zetten een Power Platform Center of Excellence op met de officiële CoE Starter Kit en vullen aan wat klanten echt nodig hebben: een omgevingsstrategie, een DLP-policy waar het bedrijf mee instemt, een Dataverse-datamodel in eigendom van IT en een ALM-pipeline op Power Platform Pipelines. Copilot Studio-agents worden geaard op SharePoint, Dataverse en Azure OpenAI, zodat antwoorden accuraat en auditeerbaar blijven.',
          outcomes: [
            'CoE Starter Kit uitgerold met omgevings- en DLP-strategie',
            'Dataverse-domeinmodel in eigendom van jullie IT-team',
            'ALM-pipeline op Power Platform Pipelines',
            'Maker-onboarding-playbook en trainingsprogramma',
            'Twee productie-Copilot-Studio-agents geaard op enterprise-data',
            'Capaciteits- en licentie-rightsizing-dashboards',
          ],
        },
        {
          title: 'Microsoft 365 en SharePoint',
          description:
            'Een moderne employee experience op Microsoft 365 met een echt intranet, Teams-apps die gebruikt worden en Graph-automatiseringen die handmatig werk laten verdwijnen.',
          details:
            'We ontwerpen en bouwen SharePoint Framework-oplossingen, Teams Toolkit-apps, custom Outlook-add-ins en Viva Connections-dashboards, en koppelen ze via Microsoft Graph en Logic Apps aan jullie systemen. Elk project bevat een content-governance-plan, een tenant-security-review tegen Microsoft Secure Score en een adoptie-playbook zodat de uitrol bij medewerkers landt.',
          outcomes: [
            'SharePoint Online-intranet met Viva Connections-cards',
            'Twee tot vier Teams Toolkit-apps in de dagelijkse workflow',
            'Microsoft Graph-automatiseringen vervangen handmatige overdrachten',
            'Tenant-security-review met Secure Score-verbeterplan',
            'Content-governance- en lifecycle-policies gedocumenteerd',
            'Change-management- en adoptie-toolkit voor HR en Comms',
          ],
        },
        {
          title: 'Azure Data Platform en Fabric',
          description:
            'Eén betrouwbaar analytics-estate op Microsoft Fabric, met semantische Power BI-modellen, gouverneerde lineage en versheid in minuten, niet dagen.',
          details:
            'We bouwen medallion-lakehouses op OneLake, draaien pipelines op Synapse of Fabric Data Factory en modelleren transformaties in dbt of Dataform. Elk Power BI-dataset doorloopt een semantic-model-review met row-level security, parameter-gedreven calculation groups en een gedocumenteerd certified-dataset-beleid. Microsoft Purview bindt het samen met lineage, classificatie en data-kwaliteit-scorecards.',
          outcomes: [
            'Lakehouse-indeling Bronze tot Gold op OneLake',
            'Synapse- of Fabric Data Factory-ingestion-pipelines',
            'dbt-project met gedocumenteerde tests en CI-checks',
            'Gecertificeerde Power BI-semantische modellen met row-level security',
            'Purview-ondersteunde lineage en dataclassificatie',
            'Data-kwaliteit-scorecards in een maandelijkse cadans',
          ],
        },
        {
          title: 'Azure AI en OpenAI-oplossingen',
          description:
            'Productie-waardige Azure OpenAI-assistenten die geaard blijven op jullie data, vóór elke release worden geëvalueerd en binnen enterprise-vangrails opereren.',
          details:
            'We ontwerpen de retrieval-architectuur rond Azure AI Search, aarden prompts op documenten in SharePoint, OneLake of Cosmos DB en evalueren antwoorden met Prompt Flow op golden datasets die meegroeien. Netwerk loopt over private endpoints, content-safety-filters worden afgestemd met jullie Trust & Safety-team en Application Insights levert vanaf dag één token-, latency- en grounding-rate-dashboards.',
          outcomes: [
            'Referentie-RAG-architectuur op Azure OpenAI en AI Search',
            'Prompt Flow-evaluatie-harness met golden datasets',
            'Private endpoints, managed identity en content-filters',
            'Application Insights-dashboards voor tokens en latency',
            'Responsible AI-checklist afgetekend met jullie juridisch team',
            'Production-rollout-playbook met gefaseerde adoptie',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Waarom klanten ons kiezen',
      title: 'Lastige problemen die we oplossen op de Microsoft-stack',
      description:
        'De terugkerende patronen die we in het Microsoft-ecosysteem ontwarren en hoe we elk aanpakken.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Stilgevallen of partiële Azure-migraties',
          solution:
            'We starten cloud-reizen opnieuw met een CAF-aligned landing zone, replatform- en refactor-golven en een heldere FinOps-baseline die vanaf dag één run-rate beheerst.',
        },
        {
          challenge: 'Verouderde .NET Framework-estate',
          solution:
            'Strangler-fig-migratie naar .NET 8, containerisatie op AKS en CI/CD op Azure DevOps of GitHub, zonder jullie feature-roadmap te bevriezen.',
        },
        {
          challenge: 'Power Platform-wildgroei zonder governance',
          solution:
            'We zetten een Power Platform CoE op met omgevingsstrategie, DLP-policies, ALM, capaciteits-monitoring en een veilig schaalbare maker-community.',
        },
        {
          challenge: 'AI-initiatieven blijven in PoC-fase steken',
          solution:
            'We productiveren Azure OpenAI-assistenten met RAG, evaluatie-gates, observability en Responsible AI-vangrails, zodat PoCs enterprise-schaal bereiken.',
        },
        {
          challenge: 'Hiaten in identiteit, data en compliance',
          solution:
            'Zero-trust-uitrol met Entra ID conditional access, Purview-classificatie, Defender XDR en Sentinel-runbooks om SOC 2, HIPAA en AVG te halen.',
        },
        {
          challenge: 'Gefragmenteerde analytics en rapportage',
          solution:
            'Een uniforme Fabric- en Synapse-dataplatform met semantische Power BI-modellen en Purview-governance: één betrouwbare bron voor elke business-vraag.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Echte projecten in het Microsoft-ecosysteem',
      description:
        'Representatieve implementaties die onze Microsoft-praktijk heeft geleverd voor gereguleerde sectoren en digital-native teams.',
      items: [
        {
          title: 'Banking-core naar Azure',
          description:
            'Mid-office-workloads van een Tier-2-bank gemigreerd en replatformed naar Azure met private DNS, ExpressRoute en Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE voor verzekeringen',
          description:
            'Maatwerk schade- en underwriting-flows op Dynamics 365 met PCF-controls, custom plugins en Power Pages-portalen.',
        },
        {
          title: 'Manufacturing Copilot',
          description:
            'Azure OpenAI-shopfloor-copilot geaard op SharePoint-SOPs en IoT-telemetrie, vermindert first-call escalaties.',
        },
        {
          title: 'Microsoft 365-intranet-refresh',
          description:
            'Modernisering van een intranet voor 12.000 medewerkers op SharePoint Online met Viva Connections, Teams-integratie en Graph-automatiseringen.',
        },
        {
          title: 'Power Platform CoE',
          description:
            'Governance-conform Power Platform CoE opgezet met omgevingsstrategie, ALM via Power Platform Pipelines en DLP-policies.',
        },
        {
          title: 'Fabric-lakehouse voor retail',
          description:
            'Microsoft Fabric-lakehouse met medallion-architectuur, OneLake en Power BI-semantische modellen voor dagelijkse insights.',
        },
        {
          title: 'Healthcare HL7 op Azure',
          description:
            'HL7- en FHIR-dataflows geïntegreerd in Azure Health Data Services met Purview-classificatie en HIPAA-ready security.',
        },
        {
          title: '.NET SaaS-platform',
          description:
            'Een legacy ASP.NET MVC-SaaS herbouwd naar een multi-tenant .NET-platform op AKS met OpenTelemetry en zero-downtime CI/CD.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschap-impact',
      title: 'De resultaten die ons Microsoft-werk consistent oplevert',
      description:
        'Een momentopname van de operationele en financiële verbeteringen waarvoor we in elk Microsoft-engagement verantwoordelijkheid nemen.',
      metrics: [
        {
          label: 'Run-rate-besparing',
          description:
            'Gemiddelde verlaging van de maandelijkse Azure-uitgaven na onze FinOps- en Well-Architected-reviews op gemigreerde estates.',
        },
        {
          label: 'Workload-beschikbaarheid',
          description:
            'Doel-SLA voor onze productie-Azure-landing-zones met multi-regio active-passive patronen en geteste DR-runbooks.',
        },
        {
          label: 'PoC naar productie',
          description:
            'Typische doorlooptijd van een Azure OpenAI-proof-of-concept naar een gouverneerde, geëvalueerde, productie-klare copilot-rollout.',
        },
        {
          label: 'Maker-adoptie-stijging',
          description:
            'Toename van actieve Power Platform-makers binnen 90 dagen na het opzetten van ons gouverneerde Center of Excellence.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'AWS-partner | Cloud-architectuur, migraties & DevOps op AWS | Cogtix Solutions',
      description:
        'Cogtix is lid van het AWS Partner Network en bouwt Well-Architected-workloads op Amazon Web Services, waaronder EKS, Lambda, Aurora en SageMaker, met FinOps, security en SRE-praktijken ingebakken.',
    },
    hero: {
      eyebrow: 'AWS-partnerschap',
      title: 'Gebouwd op AWS, ontworpen voor resultaten die stapelen',
      highlight: 'AWS',
      description:
        'Als lid van het AWS Partner Network leveren we Well-Architected-workloads op Amazon Web Services: van landing zones en EKS-platformen tot Bedrock-copilots, met FinOps en security ingebakken in onze manier van leveren.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Solutions- en Services-paden met Well-Architected-aligned delivery',
      cta: 'Spreek een partnership-expert',
      exploreCapabilities: 'Verken capaciteiten',
      activePartnerBadge: 'Actieve Partner',
      highlights: [
        'APN-lid met Solutions-, Services- en Software-paden',
        'Well-Architected-reviews op alle zes pijlers in elk engagement',
        'AWS Migration Acceleration Program (MAP)-gerichte discovery en uitvoering',
        'AWS Marketplace-transactable aanbiedingen en co-sell met onze account-teams',
      ],
      statLabels: ['AWS-migraties', 'AWS-certificeringen', 'Gem. besparing'],
    },
    credentials: {
      badge: 'Partnerschaps-credentials',
      title:
        'Een leverpraktijk die binnen het AWS Well-Architected Framework leeft',
      description:
        'Een architectuur-geleid team met diepe certificeringsdekking, MAP-playbooks en een FinOps-first lever-cultuur ontworpen rondom AWS.',
      certificationsTitle:
        'Actieve certificeringen in onze leverteams',
      certificationsDescription:
        'Een momentopname van de rol-gebaseerde credentials die onze engineers, architecten en consultants momenteel houden.',
      competencies: [
        {
          title: 'Cloud Foundations',
          description:
            'Multi-account landing zones met AWS Control Tower, Organizations, SCPs en Identity Center: veilig, auditeerbaar en vanaf dag één schaalbaar.',
        },
        {
          title: 'Containers en Kubernetes',
          description:
            'Productieve EKS-clusters met Karpenter-autoscaling, service mesh (App Mesh of Istio), GitOps via Argo CD en policy-as-code.',
        },
        {
          title: 'Serverless',
          description:
            'Event-gedreven systemen op Lambda, EventBridge, SQS en Step Functions ontworpen voor idempotentie, latencies onder 100 ms en strakke kostencontrole.',
        },
        {
          title: 'Data en analytics',
          description:
            'Lakehouses op Amazon S3 met Glue, Athena, Redshift Serverless, Iceberg-tables en Quicksight, gebouwd voor kostenbewuste analytics.',
        },
        {
          title: 'AI / ML op AWS',
          description:
            'Amazon Bedrock, SageMaker-pipelines, Kendra-retrieval en fijngetunede foundation models met private VPC-endpoints en observability.',
        },
        {
          title: 'Beveiliging en compliance',
          description:
            'AWS Security Hub, GuardDuty, Config, IAM Access Analyzer en KMS-patronen afgestemd op SOC 2, HIPAA, PCI-DSS en ISO 27001.',
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
      badge: 'Wat we leveren',
      title: 'Een complete engineering-praktijk op Amazon Web Services',
      description:
        'Zes engineering-motions die we herhaaldelijk uitvoeren voor klanten die op AWS moderniseren: van migraties tot GenAI in productie.',
      outcomesTitle: 'Wat we leveren',
      items: [
        {
          title: 'AWS-cloudmigratie (MAP)',
          description:
            'Een senior-geleide migratie naar AWS die het Migration Acceleration Program-playbook volgt, elke golf gereviewd tegen de zes Well-Architected-pijlers.',
          details:
            'We voeren een portfolio-assessment uit in AWS Migration Hub, classificeren elke workload in de juiste 6 R (rehost, replatform, refactor, repurchase, retire, retain) en ontwerpen daarna een Control Tower-landing zone met netwerk, identiteit, logging en SCP-vangrails vanaf dag één. Migratiegolven zijn in tweewekelijkse sprints, en onze architecten tekenen de Well-Architected-review per golf af vóór de productiecutover.',
          outcomes: [
            'AWS Migration Hub-portfolio-assessment met kostenprognoses',
            'AWS Control Tower-landing zone met OUs en SCPs',
            'Referentiepatronen voor netwerk, identiteit, logging en KMS',
            'Golf-per-golf Well-Architected-reviews en remediation-backlog',
            'CI/CD-pipelines voor IaC op Terraform of CDK',
            'Productie-cutover-plan met rollback en DR-oefening',
          ],
        },
        {
          title: 'EKS en containers',
          description:
            'Een productie Amazon EKS-platform waarop jullie teams vanaf dag één veilig kunnen deployen, met autoscaling, GitOps en identiteit door ons bedraad.',
          details:
            'We bouwen private EKS-clusters met IRSA-IAM, OPA Gatekeeper-policies, AWS Load Balancer Controller voor ingress, Argo CD voor GitOps-delivery en Karpenter voor snelle, kostenbewuste autoscaling. We voegen KEDA toe voor event-gedreven schaling, External Secrets Operator voor Secrets Manager en een getest upgrade-runbook zodat versie-upgrades geen kwartaal-brandje meer zijn.',
          outcomes: [
            'Privaat EKS-cluster met IRSA-IAM-rollen',
            'Karpenter-autoscaling met juist-gedimensioneerde node-pools',
            'Argo CD GitOps-delivery vanuit jullie app-repositories',
            'OPA Gatekeeper-vangrails die org-policy afdwingen',
            'External Secrets Operator gekoppeld aan AWS Secrets Manager',
            'Upgrade-runbook voor EKS, add-ons en Karpenter',
          ],
        },
        {
          title: 'Serverless-modernisering',
          description:
            'Een event-gedreven backend die elastisch met de business meeschaalt, met sterke idempotentie, traceability en kosten-telemetrie ingebakken vanaf de eerste commit.',
          details:
            'We ontwerpen Lambda-functies idempotent en kort, routen werk via EventBridge-bussen met schema-registry-contracten, orkestreren lange flows in Step Functions en bewaren data in DynamoDB single-table of Aurora Serverless v2. X-Ray-traces stromen naar CloudWatch en we exposen een per-feature kostendashboard zodat engineering en finance dezelfde cijfers zien.',
          outcomes: [
            'EventBridge-bus met schema-registry-contracten',
            'Lambda-functies ontworpen voor idempotentie en retries',
            'Step Functions-orkestraties voor lange workflows',
            'DynamoDB single-table-datamodel of Aurora Serverless v2',
            'X-Ray-traces en CloudWatch-dashboards per workflow',
            'Per-feature kosten-telemetrie voor engineering en finance',
          ],
        },
        {
          title: 'Data Lakehouse op AWS',
          description:
            'Een open-table-lakehouse op Amazon S3 dat analisten, data scientists en producteams dezelfde gouverneerde bron van waarheid geeft, zonder vendor-lock-in.',
          details:
            'We ontwerpen medallion-lakehouses op S3 met Apache Iceberg, bouwen ingestion in AWS Glue of Kinesis Firehose en draaien transformaties met dbt op Athena of EMR. Glue Data Quality dwingt rij- en tabel-regels af, Lake Formation verleent kolom-permissies en downstream-serving gaat naar Redshift Serverless voor BI en Quicksight voor self-service.',
          outcomes: [
            'Iceberg-tables op Amazon S3 met medallion-architectuur',
            'Glue- of Kinesis-ingestion voor batch en streaming',
            'dbt-project met gedocumenteerde tests en CI-checks',
            'Glue Data Quality-regels gekoppeld aan alerts',
            'Lake Formation-kolomtoegangsbeleid',
            'Redshift Serverless- en Quicksight-serveringslagen',
          ],
        },
        {
          title: 'GenAI op Amazon Bedrock',
          description:
            'Retrieval-augmented assistenten op Amazon Bedrock die geaard blijven op jullie enterprise-context, vóór elke release gemeten worden en je VPC nooit verlaten.',
          details:
            'We kiezen het juiste Bedrock-model (Claude, Llama of Titan), bouwen retrieval over Amazon Kendra of OpenSearch Serverless en aarden antwoorden op documenten die jullie al in S3, SharePoint of Confluence hebben. Bedrock Guardrails regelt content-safety, evaluatie draait op een meegroeiend golden dataset en observability zit in CloudWatch en OpenTelemetry.',
          outcomes: [
            'Referentie-RAG-architectuur op Amazon Bedrock en Kendra',
            'Bedrock Guardrails geconfigureerd voor content- en PII-policies',
            'PrivateLink-endpoints houden traffic binnen de VPC',
            'Evaluatie-harness met een geversionneerd golden dataset',
            'CloudWatch-dashboards voor tokens, latency en grounding',
            'Productie-rollout-plan met gefaseerde adoptie',
          ],
        },
        {
          title: 'FinOps en kosten-engineering',
          description:
            'Een doorlopend AWS-kostenprogramma, geen eenmalige audit. Tagging-governance, commitment-strategie en een maandelijks executive-kosten-narratief.',
          details:
            'We baselinen uitgaven met Cost and Usage Reports, bouwen dashboards in Cost Explorer en QuickSight en zetten Compute Optimizer-aanbevelingen om in pull requests, niet in slides. Savings Plans-dekking wordt gedimensioneerd op voorspelde workload, S3 lifecycle en Intelligent-Tiering komen op top-buckets en een maandelijkse FinOps-review levert een executive-narratief.',
          outcomes: [
            'CUR opgenomen in een opvraagbare kosten-analyselaag',
            'Tagging-policy afgedwongen via SCPs en CI-checks',
            'Compute Optimizer-aanbevelingen omgezet naar PRs',
            'Savings Plans- en Reserved Instances-dekkingsplan',
            'S3 lifecycle en Intelligent-Tiering op top-buckets',
            'Maandelijkse FinOps-review met executive-narratief',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Waarom klanten ons kiezen',
      title: 'Lastige problemen die we oplossen op AWS',
      description:
        'De terugkerende patronen die we op Amazon Web Services ontwarren en hoe we elk aanpakken.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Ongestructureerde AWS-account-wildgroei',
          solution:
            'We consolideren accounts in een Control Tower-landing zone met Organizations, SCPs, centrale logging en Identity Center: schoon, auditeerbaar, schaalbaar.',
        },
        {
          challenge: 'Verrassingen in performance en kosten in productie',
          solution:
            'CloudWatch met OpenTelemetry-observability, Compute Optimizer-gedreven rightsizing en een maandelijkse FinOps-cadans zetten verrassingen achter je.',
        },
        {
          challenge: 'Vastlopende monoliet-modernisering',
          solution:
            'We her-architecten naar microservices op EKS, ontkoppelen via SQS en EventBridge en containerizen met Karpenter voor snelle schaal zonder uitlopende kosten.',
        },
        {
          challenge: 'Losgekoppelde data lakes en warehouses',
          solution:
            'Een Iceberg-lakehouse op S3 verenigt analytics: Athena, Redshift en Quicksight delen dezelfde gouverneerde bron met Glue Data Quality-gates.',
        },
        {
          challenge: 'Security-posture onder auditor-verwachtingen',
          solution:
            'We harden AWS-estates met GuardDuty, Security Hub, Config-regels, IAM Access Analyzer en KMS-patronen afgestemd op SOC 2, HIPAA en PCI-DSS.',
        },
        {
          challenge: 'AI-pilots die nooit productie halen',
          solution:
            'We promoveren Bedrock- en SageMaker-PoCs naar productie met evaluatie-harness, PrivateLink-netwerk, vangrails en CI/CD-gestuurde releases.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Echte projecten in het AWS-ecosysteem',
      description:
        'Representatieve implementaties die onze AWS-praktijk heeft geleverd voor SaaS-, gereguleerde en digital-native teams.',
      items: [
        {
          title: 'Fintech-VMware-exit naar AWS',
          description:
            'Een payments-fintech replatformed van VMware naar AWS met Control Tower, EKS en Aurora Postgres in 14 weken zonder downtime voor klanten.',
        },
        {
          title: 'Multi-tenant SaaS op EKS',
          description:
            'Multi-tenant SaaS-isolatiemodel op EKS met Karpenter-autoscaling, Argo CD en per-tenant kostentoewijzing.',
        },
        {
          title: 'Logistiek serverless-platform',
          description:
            'Event-gedreven logistiek platform op Lambda + EventBridge + DynamoDB met 4 miljoen verzend-events per dag onder 100 ms latency.',
        },
        {
          title: 'Bedrock support-copilot',
          description:
            'Klanten-support-copilot op Amazon Bedrock met Kendra-retrieval en volledige audit-trail voor een verzekeraar.',
        },
        {
          title: 'Iceberg-lakehouse voor retail',
          description:
            'Iceberg-op-S3-lakehouse met dbt + Athena en Redshift Serverless verlaagde de analytics-uitgaven 55% ten opzichte van het legacy warehouse.',
        },
        {
          title: 'HIPAA-ready healthcare-estate',
          description:
            'Een AWS-omgeving gehard naar HIPAA-controles met Macie, KMS, GuardDuty en een getest BCDR-plan over twee regio’s.',
        },
        {
          title: 'IoT-data-ingestie',
          description:
            'IoT Core + Kinesis Firehose-pipeline die maandelijks 1B+ telemetrie-events opneemt met low-latency-dashboards op Timestream.',
        },
        {
          title: 'AWS FinOps-programma',
          description:
            'Doorlopend FinOps-programma opgezet met Savings Plans-dekking, tagging-governance en een maandelijks executive-kosten-narratief.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschap-impact',
      title: 'De resultaten die ons AWS-werk consistent oplevert',
      description:
        'Een momentopname van de operationele en financiële verbeteringen waarvoor we in elk AWS-engagement verantwoordelijkheid nemen.',
      metrics: [
        {
          label: 'Gem. AWS-factuur-knip',
          description:
            'Typische run-rate-verlaging binnen 90 dagen wanneer ons FinOps-programma over een gemigreerd AWS-estate wordt gelegd.',
        },
        {
          label: 'Mediane migratie',
          description:
            'Mediane duur van MAP-discovery tot de eerste productiegolf voor mid-market-migraties naar Control Tower-landing zones.',
        },
        {
          label: 'Doel-SLA',
          description:
            'Standaard beschikbaarheidsdoel voor onze multi-AZ-productiearchitecturen, gevalideerd met chaos- en DR-game-days.',
        },
        {
          label: 'API-latency',
          description:
            'Typische p99-latency voor serverless- en EKS-gebaseerde public API’s na onze performance-engineering-pass.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Google Cloud-partner | BigQuery, Vertex AI, GKE & Anthos | Cogtix Solutions',
      description:
        'Cogtix is Google Cloud Partner en levert BigQuery-dataplatformen, Vertex AI-productivering, GKE-containerplatformen en Anthos-modernisering voor data-gedreven organisaties.',
    },
    hero: {
      eyebrow: 'Google Cloud-partnerschap',
      title: 'Data-gedreven innovatie op Google Cloud',
      highlight: 'Google Cloud',
      description:
        'Als Google Cloud Partner helpen we data-gedreven organisaties hun analytics-estate op BigQuery te bouwen, AI te productiveren op Vertex AI en containers te moderniseren op GKE, alles onder één gouverneerd, FinOps-bewust platform.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Focus op Data & Analytics en Cloud Infrastructure',
      cta: 'Spreek een partnership-expert',
      exploreCapabilities: 'Verken capaciteiten',
      activePartnerBadge: 'Actieve Partner',
      highlights: [
        'Google Cloud Partner met focus op Data & Analytics en Cloud Infrastructure',
        'BigQuery-first dataplatformen met dbt, Dataform en Looker-semantische modellen',
        'Productie-klare Vertex AI-workflows met model-monitoring en governance',
        'GKE- en Anthos-modernisering met zero-trust-netwerken en policy-as-code',
      ],
      statLabels: ['GCP-projecten', 'GCP-certificeringen', 'Pipeline-SLO'],
    },
    credentials: {
      badge: 'Partnerschaps-credentials',
      title: 'Een Google Cloud-praktijk verankerd in data en productivering',
      description:
        'Een engineering- en analytics-team gebouwd rondom BigQuery, Vertex AI, GKE en de Google Cloud-securitystack, met rol-gebaseerde certificeringen in elke discipline.',
      certificationsTitle:
        'Actieve certificeringen in onze leverteams',
      certificationsDescription:
        'Een momentopname van de rol-gebaseerde credentials die onze engineers, architecten en consultants momenteel houden.',
      competencies: [
        {
          title: 'Data-analytics op BigQuery',
          description:
            'BigQuery-warehouses met partitionering, clustering en BI Engine gekoppeld aan dbt- of Dataform-transformaties en Looker-semantische lagen.',
        },
        {
          title: 'Vertex AI en GenAI',
          description:
            'End-to-end Vertex AI Pipelines, Model Garden-deployments, Gemini-geaarde copilots en feature-store-ondersteunde productivering.',
        },
        {
          title: 'GKE en Anthos',
          description:
            'Geharde GKE-clusters met Autopilot, Workload Identity, Config Sync, Anthos Service Mesh en Binary Authorization voor compliant workloads.',
        },
        {
          title: 'Serverless en Cloud Run',
          description:
            'Event-gedreven services op Cloud Run, Cloud Functions, Workflows en Eventarc met Pub/Sub-fan-out en idempotente patronen.',
        },
        {
          title: 'Streaming data',
          description:
            'Realtime pipelines op Pub/Sub en Dataflow met Apache Beam, exactly-once-semantiek en sub-seconde latency naar BigQuery en Bigtable.',
        },
        {
          title: 'Beveiliging en governance',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK en DLP voor SOC 2-, HIPAA- en AVG-ready estates.',
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
      badge: 'Wat we leveren',
      title: 'Een complete leverpraktijk op Google Cloud',
      description:
        'Zes engineering-motions die we herhaaldelijk uitvoeren voor klanten die op Google Cloud moderniseren: van BigQuery-platformen tot Vertex AI in productie.',
      outcomesTitle: 'Wat we leveren',
      items: [
        {
          title: 'BigQuery-dataplatform',
          description:
            'Eén BigQuery-analytics-estate dat elk team vertrouwt. Gecureerde tabellen, in Looker gecertificeerde semantische modellen en een echt kostenverhaal naast elke query.',
          details:
            'We ontwerpen gepartitioneerde en geclusterde BigQuery-tabellen, zetten BI Engine aan voor de queries die ertoe doen en gebruiken BigLake of Iceberg-external tables voor open storage. Transformaties worden in dbt gemodelleerd met CI-gates en unit-tests, semantische logica leeft in Looker (of Looker Modeler) met row-level security en een slot-reserveringsstrategie houdt de performance voorspelbaar.',
          outcomes: [
            'Gepartitioneerde en geclusterde BigQuery-tabellen voor topqueries',
            'BI Engine-versnelling ingeschakeld op kritische dashboards',
            'BigLake- of Iceberg-external tables voor open storage',
            'dbt-project met CI-gates, tests en lineage',
            'Looker-semantisch model met row-level security-policies',
            'Slot-reserverings- en autoscaling-strategie met vangrails',
          ],
        },
        {
          title: 'Vertex AI-productivering',
          description:
            'Een Vertex AI-praktijk die notebooks omzet in gouverneerde productie-workloads, met feature stores, monitoring en op jullie data geaard Gemini.',
          details:
            'We ontwerpen Vertex AI Pipelines voor training, evaluatie en deployment, bouwen een Feature Store-ondersteunde serving-laag voor low-latency online voorspellingen en zetten Model Monitoring aan voor drift- en skew-alerts. Voor GenAI aarden we Gemini via Vertex AI Search en Document AI, evalueren met golden datasets en leveren een release-proces dat jullie platform-team zelf kan draaien.',
          outcomes: [
            'Vertex AI Pipelines voor training, eval en deployment',
            'Feature Store met online en offline serving-paden',
            'Model Monitoring voor drift, skew en feature-attribution',
            'Vertex AI Search-retrieval geaard op enterprise-documenten',
            'Evaluatie-harness met geversionneerde golden datasets',
            'Release-runbook dat jullie MLOps-team zelfstandig draait',
          ],
        },
        {
          title: 'GKE- en Anthos-platformen',
          description:
            'Een compliance-ready GKE Autopilot-platform waarop jullie engineers veilig kunnen deployen. Identiteit, policy en supply-chain-integriteit door ons bedraad.',
          details:
            'We bouwen private GKE Autopilot-clusters met Workload Identity Federation, Binary Authorization voor image-signing en Config Sync met Policy Controller voor GitOps-policy. Oost-west-verkeer wordt geregisseerd door Anthos Service Mesh, de edge door Cloud Armor en Cloud Load Balancing, en secrets stromen uit Secret Manager via External Secrets Operator.',
          outcomes: [
            'Private GKE Autopilot-cluster met Workload Identity',
            'Binary Authorization dwingt gesigneerde images bij deploy af',
            'Config Sync en Policy Controller voor GitOps-policy',
            'Anthos Service Mesh voor oost-west-verkeer en mTLS',
            'Cloud Armor en load balancing aan de edge',
            'External Secrets Operator gekoppeld aan Secret Manager',
          ],
        },
        {
          title: 'Streaming en realtime data',
          description:
            'Sub-seconde pipelines op Pub/Sub en Dataflow die nachtbatch vervangen door altijd verse data, met exactly-once-semantiek en late-arrival-afhandeling opgelost.',
          details:
            'We ontwerpen Apache Beam-pipelines op Dataflow met exactly-once-processing, late-arrival-vensters en schema-evolutie beheerd via Schema Registry-contracten. Hot data landt in Bigtable voor serving en BigQuery voor analytics, dead-letter queues vangen poison messages en operationele dashboards in Cloud Monitoring volgen doorvoer, latency en versheid end-to-end.',
          outcomes: [
            'Pub/Sub-topics met geversionneerde schema-registry-contracten',
            'Apache Beam-pipelines op Dataflow met exactly-once',
            'Late-arrival-windowing en dead-letter queues',
            'Bigtable hot-serving plus BigQuery-analytics-sink',
            'Cloud Monitoring-dashboards voor versheid en lag',
            'Replay-tooling voor back-fills en schema-migraties',
          ],
        },
        {
          title: 'Cloud Run en serverless',
          description:
            'Volledig managed services op Cloud Run die naar nul schalen, vanuit jullie repo deployen en observable blijven via Cloud Trace, Cloud Profiler en Cloud Logging.',
          details:
            'We bouwen Cloud Run-services afgestemd op concurrency, met API Gateway of Load Balancing ervoor, georkestreerd via Workflows voor multi-step processen en gerouteerd via Eventarc voor event-patronen. Persistente state leeft in Cloud SQL of Spanner met PITR en read-replicas, en elke service levert Cloud Trace, Cloud Profiler en CI/CD via Cloud Deploy.',
          outcomes: [
            'Cloud Run-services met concurrency-getunede configuraties',
            'Workflows-orkestraties voor multi-step processen',
            'Eventarc-routing voor event-gedreven patronen',
            'Cloud SQL- of Spanner-datalaag met PITR en replicas',
            'Cloud Trace en Cloud Profiler standaard aan',
            'CI/CD via Cloud Deploy met progressieve rollout',
          ],
        },
        {
          title: 'GCP-FinOps en kosten-engineering',
          description:
            'Een doorlopend Google Cloud-kostenprogramma rond BigQuery-economie, CUD-strategie en een tagging-policy waar finance en engineering op vertrouwen.',
          details:
            'We baselinen uitgaven via Billing Export naar BigQuery, dimensioneren BigQuery-slot-reserveringen en autoscaling op forecast-workload, passen Committed-Use Discounts toe waar dekking veilig is en draaien GCS-lifecycle en storage-class-transities op top-buckets. Een maandelijkse FinOps-review levert een executive-narratief en een backlog voor de volgende sprint.',
          outcomes: [
            'Billing Export opgenomen in een opvraagbare kosten-laag',
            'BigQuery-slot-reserveringen gedimensioneerd op forecast-workload',
            'CUD-dekkingsplan elk kwartaal gereviewd',
            'GCS-lifecycle en storage-class-transities op top-buckets',
            'Label- en tagging-policy via org policies afgedwongen',
            'Maandelijkse FinOps-review met executive-narratief',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Waarom klanten ons kiezen',
      title: 'Lastige problemen die we oplossen op Google Cloud',
      description:
        'Terugkerende patronen die we op Google Cloud ontwarren en hoe we elk aanpakken.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Onbetrouwbare analytics tussen veel teams',
          solution:
            'BigQuery, Dataform en Looker vestigen één semantische laag met dbt-achtige tests en lineage, zodat elk dashboard antwoordt vanaf dezelfde bron.',
        },
        {
          challenge: 'ML-experimenten die nooit productie halen',
          solution:
            'Vertex AI Pipelines, Feature Store en Model Monitoring promoveren notebooks naar gouverneerde, observable productie met evaluatie-gates.',
        },
        {
          challenge: 'Trage, alleen-batch datapipelines',
          solution:
            'Pub/Sub met Dataflow en Bigtable vervangt nachtbatch door exactly-once streaming en versheid op minuutniveau in het warehouse.',
        },
        {
          challenge: 'Containerplatformen met policy-drift',
          solution:
            'Anthos Config Sync en Policy Controller dwingen GitOps-policy af over GKE-fleets; Binary Authorization stopt unsigned images bij deploy.',
        },
        {
          challenge: 'Blootstelling van gevoelige data en compliance-hiaten',
          solution:
            'VPC Service Controls, DLP, CMEK en Security Command Center creëren een verdedigbare perimeter afgestemd op SOC 2, HIPAA en AVG.',
        },
        {
          challenge: 'Onvoorspelbare BigQuery- en GCP-kosten',
          solution:
            'BigQuery-reserveringen met slot-autoscaling, CUDs, GCS-lifecycle en een tagging-gedreven FinOps-cadans gladstrijken GCP-uitgaven maand na maand.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Echte projecten in het Google Cloud-ecosysteem',
      description:
        'Representatieve implementaties die onze Google Cloud-praktijk heeft geleverd voor data-gedreven, gereguleerde en digital-native teams.',
      items: [
        {
          title: 'Retail-BigQuery-lakehouse',
          description:
            'Retail-data verenigd in een BigQuery-lakehouse met BigLake, dbt-transformaties en Looker-dashboards voor 2.000+ winkels.',
        },
        {
          title: 'Healthcare-Vertex AI-rollout',
          description:
            'Klinische predictive modellen op Vertex AI geproductiveerd met HIPAA-aligned VPC Service Controls en CMEK-versleutelde dataflows.',
        },
        {
          title: 'SaaS GKE Autopilot-platform',
          description:
            'Multi-tenant SaaS-platform op GKE Autopilot met Workload Identity, Anthos Service Mesh en Argo CD GitOps.',
        },
        {
          title: 'Streaming-personalisatie',
          description:
            'Pub/Sub-naar-Dataflow-naar-Bigtable-pipeline die personalisatie-aanbevelingen onder 100 ms op web en mobile bedient.',
        },
        {
          title: 'Gemini-geaarde copilot',
          description:
            'Gemini-support-copilot geleverd, geaard op Cloud Storage en BigQuery-kennisbronnen met evaluatie-harness.',
        },
        {
          title: 'Media-transcoding op Cloud Run',
          description:
            'Cloud Run- en Workflows-mediatranscoding-pipeline die zonder over-provisioning naar 10x piekbelasting schaalde.',
        },
        {
          title: 'FinTech-Looker-enablement',
          description:
            'LookML-semantisch model voor een FinTech-platform, dat 40+ legacy Tableau-workbooks vervangt door gouverneerde dashboards.',
        },
        {
          title: 'Anthos-hybride modernisering',
          description:
            'Een hybride manufacturing-estate gemoderniseerd met Anthos-clusters on-prem en GKE in GCP onder één policy-vlak.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschap-impact',
      title: 'De resultaten die ons Google Cloud-werk consistent oplevert',
      description:
        'Een momentopname van de operationele en financiële verbeteringen waarvoor we in elk Google Cloud-engagement verantwoordelijkheid nemen.',
      metrics: [
        {
          label: 'Query-performance',
          description:
            'Typische BigQuery-query-versnelling na onze partitionerings-, clustering-, materialized view- en BI Engine-optimalisatie-pass.',
        },
        {
          label: 'GCP-kostenreductie',
          description:
            'Gemiddelde run-rate-besparing binnen 90 dagen na het opleggen van ons FinOps-programma: reserveringen, CUDs, lifecycle en tagging.',
        },
        {
          label: 'Data-versheid',
          description:
            'Typische end-to-end-latency in onze Pub/Sub-naar-Dataflow-naar-BigQuery streaming-pipelines, ter vervanging van legacy nachtjobs.',
        },
        {
          label: 'ML PoC naar Prod',
          description:
            'Mediane tijd waarin we een Vertex AI-proof-of-concept naar een gouverneerde, geëvalueerde, gemonitorde productie-rollout brengen.',
        },
      ],
    },
  },
}

export const nlPartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Strategische cloud-partnerschappen | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix levert gecertificeerde cloud-partnerschappen op Microsoft, AWS en Google Cloud. Ontdek onze Azure-, AWS- en GCP-praktijken met FinOps, beveiliging en SRE.',
  },
  hero: {
    eyebrow: 'Strategische allianties',
    title: 'Bouwen op de meest vertrouwde cloud-platformen ter wereld',
    highlight: 'cloud-platformen',
    description:
      'Onze engineers, architecten en consultants zijn diep gecertificeerd op Microsoft, AWS en Google Cloud. Kies je platform en wij brengen het playbook, de certificeringen en de leverkracht mee.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Data & AI · Business Applications',
      description:
        'Moderniseer op Azure, schaal Power Platform veilig en lever gouverneerde Copilot-ervaringen over .NET, Microsoft 365 en Dynamics 365.',
      highlights: [
        'Azure-migraties geleid door het Cloud Adoption Framework',
        'Power Platform Center of Excellence',
        'Productieve Azure OpenAI-assistenten',
      ],
      statLabels: ['MS-projecten', 'Certificeringen', 'Ervaring'],
      cta: 'Verken onze Microsoft-praktijk',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migraties · EKS · Serverless · Bedrock',
      description:
        'Bouw Well-Architected-workloads op Amazon Web Services. We zetten landing zones, EKS-platformen, Bedrock-copilots en FinOps-kostenmodellen op.',
      highlights: [
        'MAP-aligned migratiegolven',
        'EKS- en Argo CD GitOps-platformen',
        'Bedrock-retrieval-augmented copilots',
      ],
      statLabels: ['AWS-migraties', 'Certificeringen', 'Gem. besparing'],
      cta: 'Verken onze AWS-praktijk',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Data-gedreven innovatie op Google Cloud. We bouwen BigQuery-lakehouses, productiveerde Vertex AI-workloads en moderniseerde containerplatformen op GKE Autopilot.',
      highlights: [
        'Semantische platformen op BigQuery en Looker',
        'Vertex AI Pipelines in productie',
        'GKE Autopilot met GitOps-policy',
      ],
      statLabels: ['GCP-projecten', 'Certificeringen', 'Pipeline-SLO'],
      cta: 'Verken onze Google Cloud-praktijk',
    },
  },
  whyUs: {
    eyebrow: 'Waarom Cogtix',
    title: 'Een multi-cloud leverteam met echte engineering-diepte',
    description:
      'We verzamelen niet alleen certificaten. We draaien de platformen die we aanraden elke dag, in productie, bij gereguleerde en digital-native klanten.',
    items: [
      {
        title: 'Architecten in elk engagement',
        description:
          'Elk partner-project koppelt een principal architect aan een delivery-squad, zodat design-beslissingen senior-geleid en overal hergebruikt worden.',
      },
      {
        title: 'Framework-aligned delivery',
        description:
          'We leveren tegen Azure CAF, AWS Well-Architected Framework en Google Cloud Architecture Framework, pijler voor pijler, review voor review.',
      },
      {
        title: 'FinOps vanaf dag één',
        description:
          'Kostenmodellering, tagging-governance en een maandelijks executive-kostennarratief zijn onderdeel van het engagement, geen bijzaak.',
      },
      {
        title: 'Beveiliging en compliance ingebouwd',
        description:
          'SOC 2, HIPAA, PCI-DSS en AVG zijn referentiearchitecturen die we toepassen, geen boilerplate-documenten.',
      },
      {
        title: 'Herbruikbare accelerators',
        description:
          'Landing zones, GenAI-evaluatie-harnesses, Power Platform CoE-kits en IaC-modules versnellen delivery zonder lock-in.',
      },
      {
        title: 'Co-sell-klaar',
        description:
          'Actieve partner-account-teams bij Microsoft, AWS en Google Cloud, om via marketplaces te transacten en inkoop te versnellen.',
      },
    ],
  },
}
