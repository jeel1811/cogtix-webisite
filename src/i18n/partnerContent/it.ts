import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const itPartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Partner Microsoft | Azure, .NET, Power Platform e Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix è Microsoft Solutions Partner e consegna migrazioni Azure, modernizzazione .NET, automazione Power Platform, collaborazione Microsoft 365 e personalizzazioni Dynamics 365 in settori regolamentati.',
    },
    hero: {
      eyebrow: 'Partnership Microsoft',
      title: 'Progettato con Microsoft, consegnato per l’azienda',
      highlight: 'Microsoft',
      description:
        'Come Microsoft Solutions Partner, aiutiamo le organizzazioni a modernizzarsi su Azure, scalare Power Platform in modo sicuro e rilasciare esperienze Copilot governate che muovono vere metriche di business, non solo roadmap.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Designazioni su Azure, Data & AI e Business Applications',
      cta: 'Parla con un esperto della partnership',
      exploreCapabilities: 'Esplora le capacità',
      activePartnerBadge: 'Partner Attivo',
      highlights: [
        'Microsoft Solutions Partner su Azure, Data & AI e Business Applications',
        'Migrazioni guidate dal Cloud Adoption Framework (CAF) con review Azure Well-Architected',
        'Centro di Eccellenza (CoE) Power Platform per citizen development governato',
        'Co-sell Microsoft dedicato e offerte transazionali su Marketplace',
      ],
      statLabels: ['Progetti Microsoft', 'Certificazioni MS', 'Esperienza Microsoft'],
    },
    credentials: {
      badge: 'Credenziali della partnership',
      title:
        'Credenziali, competenze e muscolo di delivery costruito su Microsoft',
      description:
        'Una pratica multidisciplinare di architetti, ingegneri, specialisti data e consulenti progettata attorno al Microsoft Cloud e rinnovata ogni trimestre rispetto a nuove certificazioni.',
      certificationsTitle:
        'Certificazioni attive nei nostri team di delivery',
      certificationsDescription:
        'Una panoramica delle credenziali per ruolo attualmente in mano ai nostri ingegneri, architetti e consulenti.',
      competencies: [
        {
          title: 'Infrastruttura Azure',
          description:
            'Landing zone, reti hub-and-spoke, identità ibrida e guardrail FinOps progettati secondo l’Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work e M365',
          description:
            'Microsoft 365, SharePoint Online, sviluppo app Teams, Viva e portali intranet moderni che elevano employee experience e adozione.',
        },
        {
          title: 'Data e AI su Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service e Cognitive Services: estate dati e copiloti su misura che sbloccano decisioni.',
        },
        {
          title: 'Business Applications',
          description:
            'Personalizzazioni di Dynamics 365 Sales, Customer Service e Finance con controlli PCF, plugin, Power Pages e integrazioni Dataverse.',
        },
        {
          title: 'Power Platform',
          description:
            'Power Apps canvas e model-driven, flussi Power Automate, dashboard Power BI e AI Builder dentro un kit CoE governato.',
        },
        {
          title: 'Sicurezza e compliance',
          description:
            'Rollout di Defender XDR, Sentinel, Purview, Intune ed Entra ID che mettono in opera zero trust, conditional access e classificazione dati.',
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
      badge: 'Cosa consegniamo',
      title: 'Una pratica di delivery completa sul Microsoft Cloud',
      description:
        'Sei motion di ingegneria che eseguiamo in modo ricorrente per clienti in BFSI, healthcare, manifattura e tech.',
      outcomesTitle: 'Cosa consegniamo',
      items: [
        {
          title: 'Migrazione e modernizzazione Azure',
          description:
            'Un percorso prevedibile per uscire da datacenter vetusti e hosting legacy, con ogni ondata misurata su una baseline chiara di costo, resilienza e sicurezza.',
          details:
            'Iniziamo con un assessment di portfolio in Azure Migrate e dividiamo l’estate in 6-8 ondate di migrazione, perché il business non senta mai un evento big-bang. Ogni ondata riceve una landing zone Bicep, un target SLO, un pattern DR e una policy di tagging FinOps prima che si muova un singolo workload. Il nostro squad combina un enterprise architect con delivery engineer, decisioni prese una volta e riusate ovunque.',
          outcomes: [
            'Landing zone Azure allineata al Cloud Adoption Framework',
            'Ondate di migrazione mappate sui pilastri Well-Architected',
            'Repository di infrastruttura Bicep o Terraform consegnati',
            'Baseline FinOps con tagging, budget e reporting mensile',
            'Runbook DR di produzione collaudato in un failover reale',
            'Sessioni di knowledge transfer per i vostri platform engineer',
          ],
        },
        {
          title: 'Modernizzazione applicazioni .NET',
          description:
            'Un piano di modernizzazione concreto per le app .NET Framework che ancora pagano il conto, senza riscrittura big-bang e senza roadmap congelata.',
          details:
            'Usiamo il pattern strangler-fig per scorporare funzionalità dai monoliti ASP.NET legacy per bounded context, mantenendo l’app di produzione che continua a rilasciare nuove feature. I nuovi servizi girano su .NET 8 con container su AKS o Container Apps, API gateway davanti e OpenTelemetry verso Application Insights. Stato finale: un solo runtime, una sola pipeline CI/CD, una sola postura di sicurezza.',
          outcomes: [
            'Codebase .NET Framework mappata in bounded context',
            'Roadmap strangler-fig con milestone trimestrali',
            'Nuovi servizi su .NET 8 in AKS o Container Apps',
            'Tracce OpenTelemetry verso Application Insights',
            'Pipeline CI/CD GitHub Actions o Azure DevOps configurate',
            'Defender for Cloud e Key Vault cablati in ogni workload',
          ],
        },
        {
          title: 'Power Platform e Copilot Studio',
          description:
            'Citizen development senza caos. Una pratica Power Platform governata con agenti Copilot Studio ancorati ai vostri dati reali.',
          details:
            'Mettiamo in piedi un Centro di Eccellenza Power Platform con il CoE Starter Kit ufficiale e aggiungiamo ciò che i clienti chiedono davvero: strategia di ambienti, una policy DLP condivisa con il business, un modello dati Dataverse gestito dall’IT e una pipeline ALM su Power Platform Pipelines. Gli agenti Copilot Studio si ancorano a SharePoint, Dataverse e Azure OpenAI per risposte accurate e auditabili.',
          outcomes: [
            'CoE Starter Kit con strategia di ambienti e DLP',
            'Modello di dominio Dataverse posseduto dal vostro team IT',
            'Pipeline ALM su Power Platform Pipelines',
            'Playbook di onboarding maker e programma di training',
            'Due agenti Copilot Studio in produzione ancorati ai dati aziendali',
            'Dashboard di capacità e rightsizing delle licenze',
          ],
        },
        {
          title: 'Microsoft 365 e SharePoint',
          description:
            'Una employee experience moderna su Microsoft 365 con una vera intranet, app Teams che vengono usate e automazioni Graph che rimuovono il lavoro manuale.',
          details:
            'Progettiamo e realizziamo soluzioni SharePoint Framework, app Teams Toolkit, add-in Outlook personalizzati e dashboard Viva Connections, collegandoli ai vostri sistemi tramite Microsoft Graph e Logic Apps. Ogni progetto include un piano di content governance, una review di sicurezza del tenant rispetto a Microsoft Secure Score e un playbook di adozione perché il rollout attecchisca tra i dipendenti.',
          outcomes: [
            'Intranet SharePoint Online con card Viva Connections',
            'Da due a quattro app Teams Toolkit nel workflow quotidiano',
            'Automazioni Microsoft Graph al posto dei passaggi manuali',
            'Review di sicurezza del tenant con piano di crescita Secure Score',
            'Policy di content governance e lifecycle documentate',
            'Kit di change management e adozione per HR e Comms',
          ],
        },
        {
          title: 'Piattaforma dati Azure e Fabric',
          description:
            'Un unico estate analitico affidabile su Microsoft Fabric, con modelli semantici Power BI, lineage governata e freschezza in minuti, non giorni.',
          details:
            'Costruiamo lakehouse medallion su OneLake, eseguiamo pipeline su Synapse o Fabric Data Factory e modelliamo trasformazioni in dbt o Dataform. Ogni dataset Power BI passa una review semantica con row-level security, calculation group parametrici e policy di dataset certificati documentata. Microsoft Purview lega il tutto con lineage, classificazione e scorecard di qualità.',
          outcomes: [
            'Layout lakehouse Bronze-Gold su OneLake',
            'Pipeline di ingestion Synapse o Fabric Data Factory',
            'Progetto dbt con test documentati e check CI',
            'Modelli semantici Power BI certificati con row-level security',
            'Lineage e classificazione supportati da Purview',
            'Scorecard di qualità dati riviste con cadenza mensile',
          ],
        },
        {
          title: 'Soluzioni Azure AI e OpenAI',
          description:
            'Assistenti Azure OpenAI di livello produzione ancorati ai vostri dati, valutati prima di ogni release e operativi dentro guardrail enterprise.',
          details:
            'Progettiamo l’architettura di retrieval intorno ad Azure AI Search, ancoriamo i prompt a documenti su SharePoint, OneLake o Cosmos DB e valutiamo le risposte con Prompt Flow su golden dataset che crescono nel tempo. Il networking passa per endpoint privati, i filtri di safety si tarano con il team Trust & Safety e Application Insights fornisce dashboard di token, latenza e grounding rate dal giorno uno.',
          outcomes: [
            'Architettura RAG di riferimento su Azure OpenAI e AI Search',
            'Harness di valutazione Prompt Flow con golden dataset',
            'Endpoint privati, managed identity e filtri di contenuto',
            'Dashboard Application Insights per token e latenza',
            'Checklist Responsible AI firmata con il vostro team legale',
            'Playbook di rollout in produzione con adozione per fasi',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Perché i clienti ci scelgono',
      title: 'Problemi difficili che risolviamo sullo stack Microsoft',
      description:
        'I pattern ricorrenti che sciogliamo nell’ecosistema Microsoft e come affrontiamo ciascuno.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Migrazioni Azure ferme o parziali',
          solution:
            'Rilanciamo i percorsi cloud con una landing zone CAF-aligned, ondate di replatform e refactor e una baseline FinOps che controlla il run-rate dal giorno uno.',
        },
        {
          challenge: 'Estate .NET Framework invecchiato',
          solution:
            'Migrazione strangler-fig a .NET 8, containerizzazione su AKS e CI/CD su Azure DevOps o GitHub senza congelare la vostra roadmap.',
        },
        {
          challenge: 'Power Platform proliferato senza governance',
          solution:
            'Allestiamo un CoE Power Platform con strategia di ambienti, policy DLP, ALM, monitoring di capacità e una community di maker che scala in sicurezza.',
        },
        {
          challenge: 'Iniziative AI bloccate in PoC',
          solution:
            'Produttivizziamo assistenti Azure OpenAI con RAG, gate di valutazione, observability e guardrail Responsible AI, perché i PoC raggiungano la scala enterprise.',
        },
        {
          challenge: 'Lacune in identità, dati e compliance',
          solution:
            'Rollout zero-trust con accesso condizionale Entra ID, classificazione Purview, Defender XDR e runbook Sentinel per soddisfare SOC 2, HIPAA e GDPR.',
        },
        {
          challenge: 'Analitica e reporting frammentati',
          solution:
            'Una piattaforma dati unificata Fabric e Synapse con modelli semantici Power BI e governance Purview: una fonte affidabile per ogni domanda di business.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Engagement reali nell’ecosistema Microsoft',
      description:
        'Implementazioni rappresentative consegnate dalla nostra pratica Microsoft per settori regolamentati e team digital-native.',
      items: [
        {
          title: 'Core bancario verso Azure',
          description:
            'Workload mid-office di una banca Tier-2 migrati e replatformed su Azure con DNS privato, ExpressRoute e Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE per assicurazioni',
          description:
            'Flussi su misura di claims e underwriting su Dynamics 365 con controlli PCF, plugin personalizzati e portali Power Pages.',
        },
        {
          title: 'Copilot per manifattura',
          description:
            'Copilot Azure OpenAI di reparto ancorato su SOP SharePoint e telemetria IoT, riduce le escalation al primo contatto.',
        },
        {
          title: 'Refresh intranet Microsoft 365',
          description:
            'Modernizzazione di un’intranet da 12.000 dipendenti su SharePoint Online con Viva Connections, integrazione Teams e automazioni Graph.',
        },
        {
          title: 'CoE Power Platform',
          description:
            'CoE Power Platform governato con strategia di ambienti, ALM via Power Platform Pipelines e policy DLP.',
        },
        {
          title: 'Lakehouse Fabric per retail',
          description:
            'Lakehouse Microsoft Fabric con architettura medallion, OneLake e modelli semantici Power BI per insight giornalieri.',
        },
        {
          title: 'HL7 in sanità su Azure',
          description:
            'Flussi HL7 e FHIR integrati in Azure Health Data Services con classificazione Purview e sicurezza HIPAA-ready.',
        },
        {
          title: 'Piattaforma SaaS .NET',
          description:
            'Un SaaS ASP.NET MVC legacy ricostruito in una piattaforma .NET multi-tenant su AKS con OpenTelemetry e CI/CD senza downtime.',
        },
      ],
    },
    impact: {
      badge: 'Impatto della partnership',
      title: 'I risultati che il nostro lavoro Microsoft genera in modo costante',
      description:
        'Una panoramica dei miglioramenti operativi e finanziari di cui ci rendiamo responsabili in ogni engagement Microsoft.',
      metrics: [
        {
          label: 'Risparmio sul run-rate',
          description:
            'Riduzione media della spesa Azure mensile dopo le nostre review FinOps e Well-Architected su estate migrate.',
        },
        {
          label: 'Disponibilità del workload',
          description:
            'SLA target per le nostre landing zone Azure di produzione con pattern attivo-passivo multi-regione e runbook DR collaudati.',
        },
        {
          label: 'PoC verso produzione',
          description:
            'Tempistica tipica da un PoC Azure OpenAI a un rollout copilot governato, valutato e pronto per la produzione.',
        },
        {
          label: 'Aumento adozione maker',
          description:
            'Aumento dei maker Power Platform attivi entro 90 giorni dall’avvio del nostro Centro di Eccellenza governato.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'Partner AWS | Architettura Cloud, Migrazioni e DevOps su AWS | Cogtix Solutions',
      description:
        'Cogtix è membro dell’AWS Partner Network e costruisce workload Well-Architected su Amazon Web Services, inclusi EKS, Lambda, Aurora e SageMaker, con FinOps, sicurezza e pratiche SRE integrate.',
    },
    hero: {
      eyebrow: 'Partnership AWS',
      title: 'Costruito su AWS, progettato per risultati che si compongono',
      highlight: 'AWS',
      description:
        'Come membro AWS Partner Network, consegniamo workload Well-Architected su Amazon Web Services: dalle landing zone alle piattaforme EKS, fino ai copiloti su Bedrock, con FinOps e sicurezza integrate nel modo in cui consegniamo.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Percorsi Solutions e Services con delivery Well-Architected',
      cta: 'Parla con un esperto della partnership',
      exploreCapabilities: 'Esplora le capacità',
      activePartnerBadge: 'Partner Attivo',
      highlights: [
        'Membro APN con percorsi Solutions, Services e Software',
        'Review Well-Architected sui sei pilastri in ogni engagement',
        'Discovery ed esecuzione allineate ad AWS Migration Acceleration Program (MAP)',
        'Offerte transazionali su AWS Marketplace e motion co-sell con i nostri account team',
      ],
      statLabels: ['Migrazioni AWS', 'Certificazioni AWS', 'Risparmio medio'],
    },
    credentials: {
      badge: 'Credenziali della partnership',
      title:
        'Una pratica di delivery che vive dentro l’AWS Well-Architected Framework',
      description:
        'Un team guidato dall’architettura con copertura profonda di certificazioni, playbook MAP e cultura di delivery FinOps-first costruita attorno ad AWS.',
      certificationsTitle:
        'Certificazioni attive nei nostri team di delivery',
      certificationsDescription:
        'Una panoramica delle credenziali per ruolo attualmente in mano ai nostri ingegneri, architetti e consulenti.',
      competencies: [
        {
          title: 'Cloud Foundations',
          description:
            'Landing zone multi-account con AWS Control Tower, Organizations, SCP e Identity Center: sicure, auditabili e pronte a scalare dal giorno uno.',
        },
        {
          title: 'Container e Kubernetes',
          description:
            'Cluster EKS in produzione con autoscaling Karpenter, service mesh (App Mesh o Istio), GitOps via Argo CD e policy-as-code.',
        },
        {
          title: 'Serverless',
          description:
            'Sistemi event-driven su Lambda, EventBridge, SQS e Step Functions progettati per idempotenza, latenze sotto i 100 ms e controllo dei costi.',
        },
        {
          title: 'Data e analytics',
          description:
            'Lakehouse su Amazon S3 con Glue, Athena, Redshift Serverless, tabelle Iceberg e Quicksight, costruiti per analytics cost-aware.',
        },
        {
          title: 'AI / ML su AWS',
          description:
            'Amazon Bedrock, pipeline SageMaker, retrieval Kendra e foundation model fine-tuned con endpoint VPC privati e observability.',
        },
        {
          title: 'Sicurezza e compliance',
          description:
            'Pattern AWS Security Hub, GuardDuty, Config, IAM Access Analyzer e KMS allineati ai controlli SOC 2, HIPAA, PCI-DSS e ISO 27001.',
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
      badge: 'Cosa consegniamo',
      title: 'Una pratica di ingegneria completa su Amazon Web Services',
      description:
        'Sei motion di ingegneria che eseguiamo in modo ricorrente per clienti che si modernizzano su AWS: dalle migrazioni alla GenAI in produzione.',
      outcomesTitle: 'Cosa consegniamo',
      items: [
        {
          title: 'Migrazione AWS Cloud (MAP)',
          description:
            'Una migrazione su AWS guidata da senior che segue il playbook del Migration Acceleration Program, con ogni ondata rivista contro i sei pilastri Well-Architected.',
          details:
            'Eseguiamo un assessment di portfolio in AWS Migration Hub, classifichiamo ogni workload nelle 6 R giuste (rehost, replatform, refactor, repurchase, retire, retain) e poi progettiamo una landing zone Control Tower con rete, identità, logging e guardrail SCP attivi dal giorno uno. Le ondate sono in sprint da due settimane e i nostri architetti firmano la review Well-Architected di ogni ondata prima del cutover in produzione.',
          outcomes: [
            'Assessment AWS Migration Hub con proiezioni di costo',
            'Landing zone AWS Control Tower con OU e SCP',
            'Pattern di riferimento per rete, identità, logging e KMS',
            'Review Well-Architected per ondata e backlog di remediation',
            'Pipeline CI/CD per IaC su Terraform o CDK',
            'Piano di cutover di produzione con rollback ed esercitazione DR',
          ],
        },
        {
          title: 'EKS e container',
          description:
            'Una piattaforma Amazon EKS di produzione su cui i vostri team possono deployare in sicurezza dal giorno uno, con autoscaling, GitOps e identità cablati da noi.',
          details:
            'Costruiamo cluster EKS privati con IAM IRSA, policy OPA Gatekeeper, AWS Load Balancer Controller per l’ingress, Argo CD per GitOps e Karpenter per autoscaling veloce e cost-aware. Aggiungiamo KEDA per lo scaling a eventi, External Secrets Operator per Secrets Manager e un runbook di upgrade testato perché gli aggiornamenti smettano di essere un incendio trimestrale.',
          outcomes: [
            'Cluster EKS privato con ruoli IAM IRSA',
            'Autoscaling Karpenter con node pool dimensionati',
            'Delivery Argo CD GitOps dai vostri repository',
            'Guardrail OPA Gatekeeper che applicano la policy organizzativa',
            'External Secrets Operator collegato ad AWS Secrets Manager',
            'Runbook di upgrade per EKS, add-on e Karpenter',
          ],
        },
        {
          title: 'Modernizzazione serverless',
          description:
            'Un backend event-driven che scala elasticamente con il business, con idempotenza, tracciabilità e telemetria di costo dal primo commit.',
          details:
            'Progettiamo funzioni Lambda idempotenti e brevi, instradiamo il lavoro su bus EventBridge con contratti di schema registry, orchestriamo flussi lunghi in Step Functions e archiviamo dati in DynamoDB single-table o Aurora Serverless v2. Le tracce X-Ray finiscono in CloudWatch ed esponiamo una dashboard di costo per feature, perché engineering e finance vedano gli stessi numeri.',
          outcomes: [
            'Bus EventBridge con contratti di schema registry',
            'Funzioni Lambda progettate per idempotenza e retry',
            'Orchestrazioni Step Functions per workflow lunghi',
            'Modello DynamoDB single-table o Aurora Serverless v2',
            'Tracce X-Ray e dashboard CloudWatch per workflow',
            'Telemetria di costo per feature per engineering e finance',
          ],
        },
        {
          title: 'Data Lakehouse su AWS',
          description:
            'Un lakehouse open-table su Amazon S3 che dà ad analisti, data scientist e team di prodotto la stessa fonte governata, senza vendor lock-in.',
          details:
            'Progettiamo lakehouse medallion su S3 con Apache Iceberg, costruiamo l’ingestion con AWS Glue o Kinesis Firehose e gestiamo trasformazioni con dbt su Athena o EMR. Glue Data Quality applica regole a livello riga e tabella, Lake Formation concede permessi per colonna e il serving va a Redshift Serverless per BI e Quicksight per self-service.',
          outcomes: [
            'Tabelle Iceberg su Amazon S3 con architettura medallion',
            'Ingestion Glue o Kinesis per batch e streaming',
            'Progetto dbt con test documentati e check CI',
            'Regole Glue Data Quality collegate ad alert',
            'Policy Lake Formation di accesso per colonna',
            'Serving Redshift Serverless e Quicksight',
          ],
        },
        {
          title: 'GenAI su Amazon Bedrock',
          description:
            'Assistenti RAG su Amazon Bedrock ancorati al vostro contesto enterprise, misurati prima di ogni release e mai fuori dalla vostra VPC.',
          details:
            'Scegliamo il modello Bedrock giusto (Claude, Llama o Titan), costruiamo il retrieval su Amazon Kendra o OpenSearch Serverless e ancoriamo le risposte ai documenti che già possedete in S3, SharePoint o Confluence. Bedrock Guardrails gestisce la safety, la valutazione gira su un golden dataset che cresce e l’observability è cablata in CloudWatch e OpenTelemetry.',
          outcomes: [
            'Architettura RAG di riferimento su Amazon Bedrock e Kendra',
            'Bedrock Guardrails configurato per policy di contenuto e PII',
            'Endpoint PrivateLink che mantengono il traffico nella VPC',
            'Harness di valutazione con golden dataset versionato',
            'Dashboard CloudWatch per token, latenza e grounding',
            'Piano di rollout in produzione con adozione per fasi',
          ],
        },
        {
          title: 'FinOps e ingegneria dei costi',
          description:
            'Un programma continuo di costo AWS, non un audit una tantum. Governance del tagging, strategia di commitment e narrativa esecutiva mensile.',
          details:
            'Stabiliamo la baseline tramite Cost and Usage Reports, costruiamo dashboard in Cost Explorer e QuickSight e trasformiamo le raccomandazioni di Compute Optimizer in pull request, non in slide. La copertura Savings Plans è dimensionata sul carico previsto, S3 lifecycle e Intelligent-Tiering vanno sui bucket principali e una review FinOps mensile produce una narrativa esecutiva.',
          outcomes: [
            'CUR ingerito in un layer di analytics dei costi',
            'Policy di tagging applicata via SCP e check CI',
            'Raccomandazioni Compute Optimizer convertite in PR',
            'Piano di copertura Savings Plans e Reserved Instances',
            'S3 lifecycle e Intelligent-Tiering sui bucket principali',
            'Review FinOps mensile con narrativa esecutiva',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Perché i clienti ci scelgono',
      title: 'Problemi difficili che risolviamo su AWS',
      description:
        'I pattern ricorrenti che sciogliamo su Amazon Web Services e come affrontiamo ciascuno.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Account AWS proliferati senza struttura',
          solution:
            'Consolidiamo gli account in una landing zone Control Tower con Organizations, SCP, logging centralizzato e Identity Center: pulito, auditabile, scalabile.',
        },
        {
          challenge: 'Sorprese di performance e costi in produzione',
          solution:
            'Observability CloudWatch con OpenTelemetry, rightsizing guidato da Compute Optimizer e cadenza FinOps mensile mettono le sorprese alle spalle.',
        },
        {
          challenge: 'Modernizzazione di monoliti in stallo',
          solution:
            'Ri-architettiamo a microservizi su EKS, disaccoppiamo con SQS ed EventBridge e containerizziamo con Karpenter per scalare in fretta senza costi fuori controllo.',
        },
        {
          challenge: 'Data lake e warehouse disconnessi',
          solution:
            'Un lakehouse Iceberg su S3 unifica l’analitica: Athena, Redshift e Quicksight condividono la stessa fonte governata con gate Glue Data Quality.',
        },
        {
          challenge: 'Postura di sicurezza sotto le aspettative dell’auditor',
          solution:
            'Induriamo gli estate AWS con GuardDuty, Security Hub, regole Config, IAM Access Analyzer e pattern KMS allineati a SOC 2, HIPAA e PCI-DSS.',
        },
        {
          challenge: 'Progetti AI pilota che non arrivano in produzione',
          solution:
            'Diplomiamo i PoC Bedrock e SageMaker in produzione con harness di valutazione, rete PrivateLink, guardrail e release controllate via CI/CD.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Engagement reali nell’ecosistema AWS',
      description:
        'Implementazioni rappresentative consegnate dalla nostra pratica AWS per team SaaS, regolamentati e digital-native.',
      items: [
        {
          title: 'Uscita VMware di una fintech verso AWS',
          description:
            'Replatform di una fintech di pagamenti da VMware ad AWS con Control Tower, EKS e Aurora Postgres in 14 settimane senza downtime cliente.',
        },
        {
          title: 'SaaS multi-tenant su EKS',
          description:
            'Modello di isolamento SaaS multi-tenant su EKS con autoscaling Karpenter, Argo CD e attribuzione costi per tenant.',
        },
        {
          title: 'Piattaforma serverless per la logistica',
          description:
            'Piattaforma logistica event-driven su Lambda + EventBridge + DynamoDB che serve 4M di eventi giornalieri con latenza sotto 100 ms.',
        },
        {
          title: 'Copilot di supporto su Bedrock',
          description:
            'Copilot di supporto clienti su Amazon Bedrock con retrieval Kendra e audit trail completo per un’assicurazione.',
        },
        {
          title: 'Lakehouse Iceberg per il retail',
          description:
            'Lakehouse Iceberg su S3 con dbt + Athena e Redshift Serverless che ha ridotto la spesa analytics del 55% rispetto al warehouse legacy.',
        },
        {
          title: 'Estate healthcare HIPAA-ready',
          description:
            'Ambiente AWS irrobustito sui controlli HIPAA con Macie, KMS, GuardDuty e piano BCDR collaudato su due regioni.',
        },
        {
          title: 'Ingestion dati IoT',
          description:
            'Pipeline IoT Core + Kinesis Firehose che ingerisce oltre 1 miliardo di eventi di telemetria al mese con dashboard a bassa latenza su Timestream.',
        },
        {
          title: 'Programma FinOps AWS',
          description:
            'Programma FinOps continuo con copertura Savings Plans, governance del tagging e narrativa esecutiva mensile dei costi.',
        },
      ],
    },
    impact: {
      badge: 'Impatto della partnership',
      title: 'I risultati che il nostro lavoro AWS genera in modo costante',
      description:
        'Una panoramica dei miglioramenti operativi e finanziari di cui ci rendiamo responsabili in ogni engagement AWS.',
      metrics: [
        {
          label: 'Taglio medio fattura AWS',
          description:
            'Riduzione tipica del run-rate entro 90 giorni quando il nostro programma FinOps viene posato su un estate AWS migrato.',
        },
        {
          label: 'Migrazione mediana',
          description:
            'Durata mediana dalla discovery MAP alla prima ondata in produzione per migrazioni mid-market su landing zone Control Tower.',
        },
        {
          label: 'SLA target',
          description:
            'Obiettivo di disponibilità di default per le nostre architetture multi-AZ di produzione, validato con esercizi di chaos e DR game-day.',
        },
        {
          label: 'Latenza API',
          description:
            'Latenza p99 tipica per API pubbliche serverless o EKS dopo il nostro passaggio di performance engineering.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Partner Google Cloud | BigQuery, Vertex AI, GKE e Anthos | Cogtix Solutions',
      description:
        'Cogtix è Google Cloud Partner e consegna piattaforme dati BigQuery, produttivizzazione Vertex AI, piattaforme container GKE e modernizzazione Anthos per organizzazioni data-led.',
    },
    hero: {
      eyebrow: 'Partnership Google Cloud',
      title: 'Innovazione guidata dai dati su Google Cloud',
      highlight: 'Google Cloud',
      description:
        'Come Google Cloud Partner aiutiamo le organizzazioni data-led a costruire il loro estate analitico su BigQuery, produttivizzare l’AI su Vertex AI e modernizzare i container su GKE, tutto sotto un’unica piattaforma governata e FinOps-aware.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Focus su Data & Analytics e Cloud Infrastructure',
      cta: 'Parla con un esperto della partnership',
      exploreCapabilities: 'Esplora le capacità',
      activePartnerBadge: 'Partner Attivo',
      highlights: [
        'Google Cloud Partner con focus Data & Analytics e Cloud Infrastructure',
        'Piattaforme dati BigQuery-first con dbt, Dataform e modelli semantici Looker',
        'Workflow Vertex AI pronti per la produzione con monitoring di modelli e governance',
        'Modernizzazione GKE e Anthos con rete zero-trust e policy-as-code',
      ],
      statLabels: ['Progetti GCP', 'Certificazioni GCP', 'SLO Pipeline'],
    },
    credentials: {
      badge: 'Credenziali della partnership',
      title: 'Una pratica Google Cloud ancorata su dati e produttivizzazione',
      description:
        'Un team di engineering e analytics costruito attorno a BigQuery, Vertex AI, GKE e allo stack di sicurezza Google Cloud, con certificazioni per ruolo in ogni disciplina.',
      certificationsTitle:
        'Certificazioni attive nei nostri team di delivery',
      certificationsDescription:
        'Una panoramica delle credenziali per ruolo attualmente in mano ai nostri ingegneri, architetti e consulenti.',
      competencies: [
        {
          title: 'Analytics su BigQuery',
          description:
            'Warehouse BigQuery con partitioning, clustering e BI Engine, abbinati a trasformazioni dbt o Dataform e layer semantici Looker.',
        },
        {
          title: 'Vertex AI e GenAI',
          description:
            'Pipeline Vertex AI end-to-end, deployment Model Garden, copiloti ancorati su Gemini e produttivizzazione supportata dal Feature Store.',
        },
        {
          title: 'GKE e Anthos',
          description:
            'Cluster GKE induriti con Autopilot, Workload Identity, Config Sync, Anthos Service Mesh e Binary Authorization per workload compliant.',
        },
        {
          title: 'Serverless e Cloud Run',
          description:
            'Servizi event-driven su Cloud Run, Cloud Functions, Workflows ed Eventarc con fan-out Pub/Sub e pattern idempotenti.',
        },
        {
          title: 'Dati in streaming',
          description:
            'Pipeline in tempo reale su Pub/Sub e Dataflow con Apache Beam, semantica exactly-once e latenza sotto il secondo verso BigQuery e Bigtable.',
        },
        {
          title: 'Sicurezza e governance',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK e DLP per estate pronti a SOC 2, HIPAA e GDPR.',
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
      badge: 'Cosa consegniamo',
      title: 'Una pratica di delivery completa su Google Cloud',
      description:
        'Sei motion di ingegneria eseguite in modo ricorrente per clienti che si modernizzano su Google Cloud: dalle piattaforme BigQuery a Vertex AI in produzione.',
      outcomesTitle: 'Cosa consegniamo',
      items: [
        {
          title: 'Piattaforma dati BigQuery',
          description:
            'Un estate analitico BigQuery di cui ogni team si fida. Tabelle curate, modelli semantici certificati in Looker e una vera storia di costo accanto a ogni query.',
          details:
            'Progettiamo tabelle BigQuery partizionate e clusterizzate, attiviamo BI Engine sulle query che contano e usiamo BigLake o tabelle esterne Iceberg per mantenere lo storage aperto. Le trasformazioni sono modellate in dbt con gate CI e unit test, la logica semantica vive in Looker (o Looker Modeler) con row-level security e una strategia di slot reservation tiene la performance prevedibile.',
          outcomes: [
            'Tabelle BigQuery partizionate e clusterizzate per query top',
            'Accelerazione BI Engine attiva sulle dashboard critiche',
            'Tabelle esterne BigLake o Iceberg per storage aperto',
            'Progetto dbt con gate CI, test e lineage',
            'Modello semantico Looker con policy row-level security',
            'Strategia di slot reservation e autoscaling con guardrail',
          ],
        },
        {
          title: 'Produttivizzazione su Vertex AI',
          description:
            'Una pratica Vertex AI che trasforma i notebook in workload di produzione governati, con feature store, monitoring e Gemini ancorato sui vostri dati.',
          details:
            'Progettiamo pipeline Vertex AI per training, valutazione e deployment, costruiamo un layer di serving supportato da Feature Store per predizioni online a bassa latenza e attiviamo Model Monitoring per alert su drift e skew. Per la GenAI ancoriamo Gemini con Vertex AI Search e Document AI, valutiamo con golden dataset e consegniamo un processo di release che il vostro team di piattaforma può eseguire.',
          outcomes: [
            'Pipeline Vertex AI per training, eval e deployment',
            'Feature Store con percorsi di serving online e offline',
            'Model Monitoring per drift, skew e feature attribution',
            'Retrieval Vertex AI Search ancorato a documenti aziendali',
            'Harness di valutazione con golden dataset versionati',
            'Runbook di release che il vostro MLOps esegue in autonomia',
          ],
        },
        {
          title: 'Piattaforme GKE e Anthos',
          description:
            'Una piattaforma GKE Autopilot compliance-ready su cui i vostri ingegneri possono deployare in sicurezza. Identità, policy e integrità della supply chain cablate da noi.',
          details:
            'Costruiamo cluster GKE Autopilot privati con Workload Identity Federation, Binary Authorization per la firma delle immagini e Config Sync con Policy Controller per l’enforcement GitOps. Il traffico est-ovest è governato da Anthos Service Mesh, l’edge da Cloud Armor e Cloud Load Balancing, e i segreti escono da Secret Manager via External Secrets Operator.',
          outcomes: [
            'Cluster GKE Autopilot privato con Workload Identity',
            'Binary Authorization impone immagini firmate al deploy',
            'Config Sync e Policy Controller per policy GitOps',
            'Anthos Service Mesh per traffico est-ovest e mTLS',
            'Cloud Armor e load balancing all’edge',
            'External Secrets Operator collegato a Secret Manager',
          ],
        },
        {
          title: 'Streaming e dati real-time',
          description:
            'Pipeline sotto il secondo su Pub/Sub e Dataflow che sostituiscono il batch notturno con dati sempre freschi, con exactly-once e gestione degli arrivi tardivi risolta.',
          details:
            'Progettiamo pipeline Apache Beam su Dataflow con processing exactly-once, finestre per arrivi tardivi ed evoluzione dello schema gestita tramite contratti Schema Registry. I dati caldi atterrano in Bigtable per il serving e in BigQuery per l’analytics, le dead-letter queue catturano i messaggi corrotti e le dashboard Cloud Monitoring seguono throughput, latenza e freschezza end-to-end.',
          outcomes: [
            'Topic Pub/Sub con contratti schema registry versionati',
            'Pipeline Apache Beam su Dataflow con exactly-once',
            'Finestre per arrivi tardivi e dead-letter queue',
            'Layer caldo Bigtable più sink analitico BigQuery',
            'Dashboard Cloud Monitoring per freschezza e lag',
            'Tooling di replay per back-fill e migrazioni di schema',
          ],
        },
        {
          title: 'Cloud Run e serverless',
          description:
            'Servizi completamente gestiti su Cloud Run che scalano a zero, partono dal vostro repo e restano observable via Cloud Trace, Cloud Profiler e Cloud Logging.',
          details:
            'Costruiamo servizi Cloud Run ottimizzati per la concorrenza, con API Gateway o Load Balancing davanti, orchestrati da Workflows per processi multi-step e instradati da Eventarc per pattern event-driven. Lo stato persistente vive in Cloud SQL o Spanner con PITR e repliche e ogni servizio consegna Cloud Trace, Cloud Profiler e CI/CD via Cloud Deploy.',
          outcomes: [
            'Servizi Cloud Run con configurazioni tarate sulla concorrenza',
            'Orchestrazioni Workflows per processi multi-step',
            'Routing Eventarc per pattern event-driven',
            'Layer dati Cloud SQL o Spanner con PITR e repliche',
            'Cloud Trace e Cloud Profiler attivi di default',
            'CI/CD via Cloud Deploy con rollout progressivo',
          ],
        },
        {
          title: 'FinOps e ingegneria dei costi su GCP',
          description:
            'Un programma continuo di costo Google Cloud costruito attorno all’economia di BigQuery, alla strategia CUD e a una policy di tagging condivisa fra finance ed engineering.',
          details:
            'Stabiliamo la baseline via Billing Export verso BigQuery, dimensioniamo slot reservation e autoscaling BigQuery sul carico previsto, applichiamo i Committed-Use Discount dove la copertura è sicura ed eseguiamo lifecycle GCS e transizioni di classe sui bucket principali. Una review FinOps mensile produce una narrativa esecutiva e un backlog per lo sprint successivo.',
          outcomes: [
            'Billing Export ingerito in un layer di costo interrogabile',
            'Slot reservation BigQuery dimensionate sul carico previsto',
            'Piano di copertura CUD riviato ogni trimestre',
            'Lifecycle GCS e transizioni di classe sui bucket principali',
            'Policy di label e tagging applicata via org policies',
            'Review FinOps mensile con narrativa esecutiva',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Perché i clienti ci scelgono',
      title: 'Problemi difficili che risolviamo su Google Cloud',
      description:
        'Pattern ricorrenti che sciogliamo su Google Cloud e come affrontiamo ciascuno.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Analytics senza fiducia tra molti team',
          solution:
            'BigQuery, Dataform e Looker stabiliscono un unico layer semantico con test in stile dbt e lineage, perché ogni dashboard risponda dalla stessa fonte.',
        },
        {
          challenge: 'Esperimenti ML che non arrivano mai in produzione',
          solution:
            'Vertex AI Pipelines, Feature Store e Model Monitoring diplomano i notebook in produzione governata e observable con gate di valutazione.',
        },
        {
          challenge: 'Pipeline dati lente e solo batch',
          solution:
            'Pub/Sub con Dataflow e Bigtable sostituisce il batch notturno con streaming exactly-once e freschezza al minuto nel warehouse.',
        },
        {
          challenge: 'Piattaforme container con drift di policy',
          solution:
            'Anthos Config Sync e Policy Controller applicano la policy GitOps su flotte GKE; Binary Authorization blocca immagini non firmate al deploy.',
        },
        {
          challenge: 'Esposizione di dati sensibili e gap di compliance',
          solution:
            'VPC Service Controls, DLP, CMEK e Security Command Center creano un perimetro difendibile allineato a SOC 2, HIPAA e GDPR.',
        },
        {
          challenge: 'Costi BigQuery e GCP imprevedibili',
          solution:
            'Reservation BigQuery con slot autoscaling, CUD, lifecycle GCS e una cadenza FinOps guidata dal tagging livellano la spesa GCP mese dopo mese.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Engagement reali nell’ecosistema Google Cloud',
      description:
        'Implementazioni rappresentative consegnate dalla nostra pratica Google Cloud per team data-led, regolamentati e digital-native.',
      items: [
        {
          title: 'Lakehouse BigQuery per il retail',
          description:
            'Dati retail unificati in un lakehouse BigQuery con BigLake, trasformazioni dbt e dashboard Looker per oltre 2.000 negozi.',
        },
        {
          title: 'Rollout Vertex AI in sanità',
          description:
            'Modelli predittivi clinici produttivizzati su Vertex AI con VPC Service Controls HIPAA-aligned e flussi dati cifrati con CMEK.',
        },
        {
          title: 'Piattaforma SaaS GKE Autopilot',
          description:
            'Piattaforma SaaS multi-tenant su GKE Autopilot con Workload Identity, Anthos Service Mesh e Argo CD GitOps.',
        },
        {
          title: 'Personalizzazione in streaming',
          description:
            'Pipeline Pub/Sub verso Dataflow verso Bigtable che serve raccomandazioni di personalizzazione sotto 100 ms su web e mobile.',
        },
        {
          title: 'Copilot ancorato a Gemini',
          description:
            'Copilot di supporto basato su Gemini ancorato su Cloud Storage e BigQuery con harness di valutazione.',
        },
        {
          title: 'Transcodifica media su Cloud Run',
          description:
            'Pipeline di transcodifica media su Cloud Run e Workflows che ha scalato 10x al picco senza over-provisioning.',
        },
        {
          title: 'Enablement Looker FinTech',
          description:
            'Modello semantico LookML per una piattaforma FinTech, sostituendo oltre 40 workbook Tableau legacy con dashboard governate.',
        },
        {
          title: 'Modernizzazione ibrida Anthos',
          description:
            'Un estate manifatturiero ibrido modernizzato con cluster Anthos on-premise e GKE in GCP sotto un unico piano di policy.',
        },
      ],
    },
    impact: {
      badge: 'Impatto della partnership',
      title: 'I risultati che il nostro lavoro Google Cloud genera in modo costante',
      description:
        'Una panoramica dei miglioramenti operativi e finanziari di cui ci rendiamo responsabili in ogni engagement Google Cloud.',
      metrics: [
        {
          label: 'Performance delle query',
          description:
            'Tipico speed-up delle query BigQuery dopo il nostro passaggio di partitioning, clustering, materialized view e ottimizzazione BI Engine.',
        },
        {
          label: 'Riduzione costi GCP',
          description:
            'Risparmio medio sul run-rate entro 90 giorni dall’applicazione del nostro programma FinOps: reservation, CUD, lifecycle e tagging.',
        },
        {
          label: 'Freschezza dei dati',
          description:
            'Latenza tipica end-to-end nelle pipeline streaming Pub/Sub verso Dataflow verso BigQuery, in sostituzione di job notturni legacy.',
        },
        {
          label: 'ML PoC verso Prod',
          description:
            'Tempo mediano per portare un proof-of-concept Vertex AI a un rollout di produzione governato, valutato e monitorato.',
        },
      ],
    },
  },
}

export const itPartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Alleanze cloud strategiche | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix offre partnership cloud certificate su Microsoft, AWS e Google Cloud. Esplora le nostre pratiche Azure, AWS e GCP con FinOps, sicurezza e SRE integrati.',
  },
  hero: {
    eyebrow: 'Alleanze strategiche',
    title: 'Costruire sulle piattaforme cloud più affidabili al mondo',
    highlight: 'piattaforme cloud',
    description:
      'I nostri ingegneri, architetti e consulenti sono profondamente certificati su Microsoft, AWS e Google Cloud. Scegli la tua piattaforma e portiamo playbook, certificazioni e muscolo di delivery.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Data & AI · Business Applications',
      description:
        'Modernizza su Azure, scala Power Platform in sicurezza e consegna esperienze Copilot governate su .NET, Microsoft 365 e Dynamics 365.',
      highlights: [
        'Migrazioni Azure guidate dal Cloud Adoption Framework',
        'Centro di Eccellenza Power Platform',
        'Assistenti Azure OpenAI in produzione',
      ],
      statLabels: ['Progetti MS', 'Certificazioni', 'Esperienza'],
      cta: 'Esplora la nostra pratica Microsoft',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migrazioni · EKS · Serverless · Bedrock',
      description:
        'Costruisci workload Well-Architected su Amazon Web Services. Allestiamo landing zone, piattaforme EKS, copiloti Bedrock e modelli di costo FinOps che scalano.',
      highlights: [
        'Ondate di migrazione allineate MAP',
        'Piattaforme GitOps EKS e Argo CD',
        'Copiloti RAG su Bedrock',
      ],
      statLabels: ['Migrazioni AWS', 'Certificazioni', 'Risparmio Medio'],
      cta: 'Esplora la nostra pratica AWS',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Innovazione guidata dai dati su Google Cloud. Costruiamo lakehouse BigQuery, workload Vertex AI produttivizzati e piattaforme container modernizzate su GKE Autopilot.',
      highlights: [
        'Piattaforme semantiche BigQuery e Looker',
        'Pipeline Vertex AI in produzione',
        'GKE Autopilot con policy GitOps',
      ],
      statLabels: ['Progetti GCP', 'Certificazioni', 'SLO Pipeline'],
      cta: 'Esplora la nostra pratica Google Cloud',
    },
  },
  whyUs: {
    eyebrow: 'Perché Cogtix',
    title: 'Un team multi-cloud sostenuto da vera profondità di ingegneria',
    description:
      'Non accumuliamo solo certificazioni. Operiamo ogni giorno, in produzione, le piattaforme che consigliamo, su clienti regolamentati e digital-native.',
    items: [
      {
        title: 'Architetti in ogni engagement',
        description:
          'Ogni progetto partner abbina un principal architect a uno squad di delivery: le decisioni di design sono senior e riusate ovunque.',
      },
      {
        title: 'Delivery allineata ai framework',
        description:
          'Eseguiamo contro Azure CAF, AWS Well-Architected e Google Cloud Architecture Framework, pilastro per pilastro, review per review.',
      },
      {
        title: 'FinOps dal giorno uno',
        description:
          'Modellazione dei costi, governance del tagging e narrativa esecutiva mensile fanno parte dell’engagement, non sono un’aggiunta.',
      },
      {
        title: 'Sicurezza e compliance integrate',
        description:
          'I controlli SOC 2, HIPAA, PCI-DSS e GDPR sono architetture di riferimento che applichiamo, non documenti boilerplate.',
      },
      {
        title: 'Accelerator riutilizzabili',
        description:
          'Landing zone, harness di valutazione GenAI, kit CoE Power Platform e moduli IaC velocizzano la delivery senza lock-in.',
      },
      {
        title: 'Pronti al co-sell',
        description:
          'Account team partner attivi su Microsoft, AWS e Google Cloud per transazioni via marketplace e procurement accelerato.',
      },
    ],
  },
}
