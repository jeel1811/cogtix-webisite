import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const dePartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Microsoft-Partner | Azure, .NET, Power Platform & Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix ist Microsoft Solutions Partner und liefert Azure-Migrationen, .NET-Modernisierungen, Power-Platform-Automatisierung, Microsoft-365-Kollaboration und Dynamics-365-Anpassungen in regulierten Branchen.',
    },
    hero: {
      eyebrow: 'Microsoft-Partnerschaft',
      title: 'Mit Microsoft entwickelt, für das Unternehmen geliefert',
      highlight: 'Microsoft',
      description:
        'Als Microsoft Solutions Partner unterstützen wir Unternehmen, auf Azure zu modernisieren, Power Platform sicher zu skalieren und governance-konforme Copilot-Erlebnisse auszuliefern, die echte Business-Metriken bewegen, nicht nur Roadmaps.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Designationen für Azure, Data & AI und Business Applications',
      cta: 'Mit einem Partnership-Experten sprechen',
      exploreCapabilities: 'Fähigkeiten entdecken',
      activePartnerBadge: 'Aktiver Partner',
      highlights: [
        'Microsoft Solutions Partner für Azure, Data & AI und Business Applications',
        'Migrationen geführt vom Cloud Adoption Framework (CAF) mit Azure Well-Architected Reviews',
        'Power Platform Center of Excellence (CoE) für governance-konforme Citizen Development',
        'Dedizierte Microsoft Co-Sell Motion und Marketplace-fähige Angebote',
      ],
      statLabels: ['Microsoft-Projekte', 'MS-Zertifizierungen', 'Microsoft-Erfahrung'],
    },
    credentials: {
      badge: 'Partnerschafts-Credentials',
      title:
        'Credentials, Kompetenzen und ein Lieferungs-Muskel auf Microsoft aufgebaut',
      description:
        'Eine interdisziplinäre Praxis aus Architekten, Engineers, Daten-Spezialisten und Beratern, gebaut um die Microsoft Cloud und quartalsweise gegen neue Zertifizierungen aufgefrischt.',
      certificationsTitle:
        'Aktive Zertifizierungen in unseren Liefer-Teams',
      certificationsDescription:
        'Ein Snapshot der rollenbasierten Credentials, die unsere Engineers, Architekten und Berater aktuell halten.',
      competencies: [
        {
          title: 'Azure-Infrastruktur',
          description:
            'Landing Zones, Hub-and-Spoke-Netzwerke, hybride Identität und FinOps-Leitplanken nach dem Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work und M365',
          description:
            'Microsoft 365, SharePoint Online, Teams-App-Entwicklung, Viva und moderne Intranet-Portale, die Mitarbeitererfahrung und Adoption steigern.',
        },
        {
          title: 'Data und AI auf Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service und Cognitive Services: maßgeschneiderte Datenbestände und Copiloten, die Entscheidungen freisetzen.',
        },
        {
          title: 'Business Applications',
          description:
            'Anpassungen von Dynamics 365 Sales, Customer Service und Finance mit PCF-Controls, Plugins, Power Pages und Dataverse-Integrationen.',
        },
        {
          title: 'Power Platform',
          description:
            'Canvas- und modellgetriebene Power Apps, Power-Automate-Flows, Power-BI-Dashboards und AI Builder in einem governance-konformen CoE-Toolkit.',
        },
        {
          title: 'Sicherheit und Compliance',
          description:
            'Rollouts von Defender XDR, Sentinel, Purview, Intune und Entra ID, die Zero Trust, Conditional Access und Datenklassifizierung umsetzen.',
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
      badge: 'Was wir liefern',
      title: 'Eine vollständige Lieferpraxis auf der Microsoft Cloud',
      description:
        'Sechs Engineering-Motions, die wir wiederholt für Kunden aus BFSI, Healthcare, Manufacturing und Tech ausführen.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'Azure-Migration und -Modernisierung',
          description:
            'Ein planbarer Weg aus alternden Rechenzentren und Legacy-Hosting, mit jeder Welle gemessen an einer messbaren Baseline für Kosten, Resilienz und Sicherheit.',
          details:
            'Wir starten mit einer Portfolio-Bewertung in Azure Migrate und teilen das Estate in 6 bis 8 Migrationswellen, damit das Geschäft nie ein Big-Bang-Event spürt. Jede Welle erhält eine Bicep-Landing-Zone, ein SLO-Ziel, ein DR-Pattern und eine FinOps-Tagging-Policy, bevor eine einzige Workload bewegt wird. Unser Squad kombiniert einen Enterprise-Architekten mit Delivery-Engineers, Design-Entscheidungen werden einmal getroffen und überall wiederverwendet.',
          outcomes: [
            'Azure Landing Zone, ausgerichtet auf das Cloud Adoption Framework',
            'Migrationswellen gegen die Well-Architected-Säulen geschnitten',
            'Bicep- oder Terraform-Infrastruktur-Repositories übergeben',
            'FinOps-Baseline mit Tagging, Budgets und monatlichem Reporting',
            'Produktions-DR-Runbook in einem Live-Failover-Drill getestet',
            'Knowledge-Transfer-Sitzungen für eure Plattform-Engineers',
          ],
        },
        {
          title: '.NET-Anwendungsmodernisierung',
          description:
            'Ein funktionierender Modernisierungsplan für die .NET-Framework-Apps, die noch die Rechnungen bezahlen, ohne Big-Bang-Rewrite und ohne eingefrorene Feature-Roadmap.',
          details:
            'Wir nutzen das Strangler-Fig-Pattern, um Funktionalität nach Bounded Context aus Legacy-ASP.NET-Monolithen herauszulösen, während die Produktions-App weiter neue Features liefert. Neue Services laufen auf .NET 8 in Containern auf AKS oder Container Apps, mit API Gateway davor und OpenTelemetry in Application Insights. Endzustand: eine Runtime, eine CI/CD-Pipeline, eine Security-Posture.',
          outcomes: [
            '.NET-Framework-Codebase nach Bounded Contexts gemappt',
            'Strangler-Fig-Roadmap mit quartalsweisen Liefer-Meilensteinen',
            'Neue Services auf .NET 8 in AKS oder Container Apps',
            'OpenTelemetry-Traces in Application Insights',
            'GitHub Actions oder Azure DevOps CI/CD-Pipelines konfiguriert',
            'Defender for Cloud und Key Vault in jeder Workload verdrahtet',
          ],
        },
        {
          title: 'Power Platform und Copilot Studio',
          description:
            'Citizen Development ohne Chaos. Eine governance-konforme Power-Platform-Praxis mit Copilot-Studio-Agenten, geerdet auf euren echten Daten.',
          details:
            'Wir bauen ein Power Platform Center of Excellence mit dem offiziellen CoE Starter Kit auf und ergänzen, was Kunden wirklich brauchen: eine Umgebungs-Strategie, eine vom Business akzeptierte DLP-Policy, ein von der IT verantwortetes Dataverse-Datenmodell und eine ALM-Pipeline auf Power Platform Pipelines. Copilot-Studio-Agenten werden auf SharePoint, Dataverse und Azure OpenAI geerdet, damit Antworten präzise und auditierbar bleiben.',
          outcomes: [
            'CoE Starter Kit mit Umgebungs- und DLP-Strategie deployed',
            'Dataverse-Domänenmodell im Eigentum eures IT-Teams',
            'ALM-Pipeline auf Power Platform Pipelines',
            'Maker-Onboarding-Playbook und Trainingsprogramm',
            'Zwei produktive Copilot-Studio-Agenten, geerdet auf Enterprise-Daten',
            'Capacity- und Lizenz-Rightsizing-Dashboards',
          ],
        },
        {
          title: 'Microsoft 365 und SharePoint',
          description:
            'Eine moderne Employee Experience auf Microsoft 365 mit einem echten Intranet, Teams-Apps, die genutzt werden, und Graph-Automationen, die Busywork verschwinden lassen.',
          details:
            'Wir designen und bauen SharePoint-Framework-Lösungen, Teams-Toolkit-Apps, eigene Outlook-Add-ins und Viva-Connections-Dashboards und verbinden sie via Microsoft Graph und Logic Apps mit euren Business-Systemen. Jedes Projekt enthält einen Content-Governance-Plan, ein Tenant-Security-Review gegen Microsoft Secure Score und ein Adoption-Playbook, damit das Rollout bei den Mitarbeitenden ankommt.',
          outcomes: [
            'SharePoint-Online-Intranet mit Viva-Connections-Card-Framework',
            'Zwei bis vier Teams-Toolkit-Apps im täglichen Workflow',
            'Microsoft-Graph-Automationen ersetzen manuelle Übergaben',
            'Tenant-Security-Review mit Secure-Score-Verbesserungsplan',
            'Content-Governance- und Lifecycle-Policies dokumentiert',
            'Change-Management- und Adoption-Toolkit für HR und Comms',
          ],
        },
        {
          title: 'Azure Data Platform und Fabric',
          description:
            'Ein verlässliches Analytics-Estate auf Microsoft Fabric, mit semantischen Power-BI-Modellen, governance-fähiger Lineage und Aktualität in Minuten, nicht Tagen.',
          details:
            'Wir bauen Medallion-Lakehouses auf OneLake, betreiben Pipelines auf Synapse oder Fabric Data Factory und modellieren Transformationen in dbt oder Dataform. Jedes Power-BI-Dataset durchläuft ein Semantic-Model-Review mit Row-Level Security, parameterisierten Calculation Groups und einer dokumentierten Certified-Dataset-Policy. Microsoft Purview verbindet das Ganze mit Lineage, Klassifizierung und Data-Quality-Scorecards.',
          outcomes: [
            'Lakehouse-Aufbau Bronze bis Gold auf OneLake',
            'Synapse- oder Fabric-Data-Factory-Ingestions-Pipelines',
            'dbt-Projekt mit dokumentierten Tests und CI-Checks',
            'Zertifizierte Power-BI-Semantic-Modelle mit Row-Level Security',
            'Purview-gestützte Lineage und Datenklassifizierung',
            'Data-Quality-Scorecards in monatlicher Kadenz reviewed',
          ],
        },
        {
          title: 'Azure AI und OpenAI-Lösungen',
          description:
            'Production-grade Azure-OpenAI-Assistenten, die auf euren Daten geerdet bleiben, vor jedem Release evaluiert werden und innerhalb von Enterprise-Leitplanken agieren.',
          details:
            'Wir designen die Retrieval-Architektur um Azure AI Search, erden Prompts auf Dokumenten in SharePoint, OneLake oder Cosmos DB und bewerten Antworten mit Prompt Flow auf wachsenden Golden Datasets. Networking läuft über private Endpoints, Content-Safety-Filter werden mit eurem Trust-&-Safety-Team feinjustiert und Application Insights liefert Token-, Latency- und Grounding-Rate-Dashboards ab Tag eins.',
          outcomes: [
            'Referenz-RAG-Architektur auf Azure OpenAI plus AI Search',
            'Prompt-Flow-Evaluations-Harness mit Golden Datasets',
            'Private Endpoints, Managed Identity und Content-Filter',
            'Application-Insights-Dashboards für Tokens und Latenz',
            'Responsible-AI-Checkliste, abgesegnet mit eurem Legal-Team',
            'Production-Rollout-Playbook mit phasenweiser Adoption',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Warum Kunden uns wählen',
      title: 'Schwierige Probleme, die wir auf dem Microsoft-Stack lösen',
      description:
        'Die wiederkehrenden Muster, die wir im Microsoft-Ökosystem entwirren und wie wir jedes einzeln angehen.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Stockende oder partielle Azure-Migrationen',
          solution:
            'Wir starten Cloud-Reisen neu mit einer CAF-konformen Landing Zone, Replatform- und Refactor-Wellen und einer klaren FinOps-Baseline, die ab Tag eins die Run-Rate kontrolliert.',
        },
        {
          challenge: 'Alterndes .NET-Framework-Estate',
          solution:
            'Strangler-Fig-Migration zu .NET 8, Containerisierung auf AKS und CI/CD auf Azure DevOps oder GitHub, ohne eure Feature-Roadmap einzufrieren.',
        },
        {
          challenge: 'Power Platform ohne Governance',
          solution:
            'Wir bauen einen Power-Platform-CoE mit Umgebungs-Strategie, DLP-Policies, ALM, Capacity-Monitoring und einer Maker-Community, die sicher skaliert.',
        },
        {
          challenge: 'KI-Initiativen im PoC-Stadium festgefahren',
          solution:
            'Wir produktivieren Azure-OpenAI-Assistenten mit RAG, Evaluations-Gates, Observability und Responsible-AI-Leitplanken, damit PoCs Enterprise-Skala erreichen.',
        },
        {
          challenge: 'Lücken in Identität, Daten und Compliance',
          solution:
            'Zero-Trust-Rollouts mit Entra-ID-Conditional-Access, Purview-Klassifizierung, Defender XDR und Sentinel-Runbooks für SOC 2, HIPAA und DSGVO.',
        },
        {
          challenge: 'Fragmentierte Analytik und Reports',
          solution:
            'Eine vereinheitlichte Fabric-und-Synapse-Datenplattform mit semantischen Power-BI-Modellen und Purview-Governance: eine vertrauenswürdige Quelle für jede Business-Frage.',
        },
      ],
    },
    useCases: {
      badge: 'Anwendungsfälle',
      title: 'Echte Engagements im Microsoft-Ökosystem',
      description:
        'Repräsentative Implementierungen, die unsere Microsoft-Praxis für regulierte Branchen und Digital-Native-Teams ausgeliefert hat.',
      items: [
        {
          title: 'Banken-Core nach Azure',
          description:
            'Mid-Office-Workloads einer Tier-2-Bank nach Azure migriert und re-platformed mit Private DNS, ExpressRoute und Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE für Versicherungen',
          description:
            'Maßgeschneiderte Schaden- und Underwriting-Flows auf Dynamics 365 mit PCF-Controls, eigenen Plugins und Power-Pages-Portalen.',
        },
        {
          title: 'Manufacturing Copilot',
          description:
            'Azure-OpenAI-Shopfloor-Copilot geerdet auf SharePoint-SOPs und IoT-Telemetrie, reduziert First-Call-Eskalationen.',
        },
        {
          title: 'Microsoft 365 Intranet-Refresh',
          description:
            'Modernisierung eines Intranets für 12.000 Mitarbeitende auf SharePoint Online mit Viva Connections, Teams-Integration und Graph-Automationen.',
        },
        {
          title: 'Power Platform CoE',
          description:
            'Governance-konformer Power-Platform-CoE mit Umgebungs-Strategie, ALM via Power Platform Pipelines und DLP-Policies.',
        },
        {
          title: 'Fabric-Lakehouse für Retail',
          description:
            'Microsoft-Fabric-Lakehouse mit Medallion-Architektur, OneLake und Power-BI-Semantic-Modellen für tägliche Insights.',
        },
        {
          title: 'Healthcare HL7 auf Azure',
          description:
            'HL7- und FHIR-Datenflüsse in Azure Health Data Services integriert, mit Purview-Klassifizierung und HIPAA-Ready Security.',
        },
        {
          title: '.NET SaaS-Plattform',
          description:
            'Ein Legacy-ASP.NET-MVC-SaaS in eine Multi-Tenant-.NET-Plattform auf AKS umgebaut mit OpenTelemetry und Zero-Downtime CI/CD.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschafts-Impact',
      title: 'Die Ergebnisse, die unsere Microsoft-Arbeit konsistent erzielt',
      description:
        'Ein Snapshot der operativen und finanziellen Verbesserungen, für die wir in jedem Microsoft-Engagement Verantwortung übernehmen.',
      metrics: [
        {
          label: 'Run-Rate-Einsparung',
          description:
            'Durchschnittliche Senkung der monatlichen Azure-Ausgaben nach unseren FinOps- und Well-Architected-Reviews auf migrierten Estates.',
        },
        {
          label: 'Workload-Verfügbarkeit',
          description:
            'Ziel-SLA für unsere produktiven Azure-Landing-Zones mit multi-regionalen Active-Passive-Patterns und getesteten DR-Runbooks.',
        },
        {
          label: 'PoC zu Produktion',
          description:
            'Typische Dauer von einem Azure-OpenAI-Proof-of-Concept bis zu einem governance-konformen, evaluierten, produktionsreifen Copilot-Rollout.',
        },
        {
          label: 'Maker-Adoption-Lift',
          description:
            'Anstieg aktiver Power-Platform-Maker innerhalb von 90 Tagen nach Aufbau unseres governance-konformen Center of Excellence.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'AWS-Partner | Cloud-Architektur, Migrationen & DevOps auf AWS | Cogtix Solutions',
      description:
        'Cogtix ist Mitglied im AWS Partner Network und baut Well-Architected-Workloads auf Amazon Web Services, darunter EKS, Lambda, Aurora und SageMaker, mit FinOps, Sicherheit und SRE-Praktiken eingebaut in unsere Lieferweise.',
    },
    hero: {
      eyebrow: 'AWS-Partnerschaft',
      title: 'Gebaut auf AWS, designt für Ergebnisse, die sich verstärken',
      highlight: 'AWS',
      description:
        'Als Mitglied im AWS Partner Network liefern wir Well-Architected-Workloads auf Amazon Web Services: von Landing Zones und EKS-Plattformen bis zu Bedrock-gestützten Copiloten, mit FinOps und Sicherheit fest in unserer Lieferweise.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Solutions- und Services-Pfade mit Well-Architected-aligned Delivery',
      cta: 'Mit einem Partnership-Experten sprechen',
      exploreCapabilities: 'Fähigkeiten entdecken',
      activePartnerBadge: 'Aktiver Partner',
      highlights: [
        'AWS-Partner-Network-Mitglied mit Solutions-, Services- und Software-Pfaden',
        'Well-Architected-Reviews über alle sechs Säulen in jedem Engagement',
        'AWS Migration Acceleration Program (MAP) konforme Discovery und Execution',
        'AWS-Marketplace-fähige Angebote und Co-Sell mit unseren Account-Teams',
      ],
      statLabels: ['AWS-Migrationen', 'AWS-Zertifizierungen', 'Ø Kosteneinsparung'],
    },
    credentials: {
      badge: 'Partnerschafts-Credentials',
      title:
        'Eine Lieferpraxis, die innerhalb des AWS Well-Architected Framework lebt',
      description:
        'Ein Architektur-geführtes Team mit tiefer Zertifizierungs-Abdeckung, MAP-Playbooks und einer FinOps-first-Lieferkultur, gebaut um AWS.',
      certificationsTitle:
        'Aktive Zertifizierungen in unseren Liefer-Teams',
      certificationsDescription:
        'Ein Snapshot der rollenbasierten Credentials, die unsere Engineers, Architekten und Berater aktuell halten.',
      competencies: [
        {
          title: 'Cloud Foundations',
          description:
            'Multi-Account-Landing-Zones mit AWS Control Tower, Organizations, SCPs und Identity Center: sicher, auditierbar und ab Tag eins skalierbar.',
        },
        {
          title: 'Container und Kubernetes',
          description:
            'Produktive EKS-Cluster mit Karpenter-Autoscaling, Service Mesh (App Mesh oder Istio), GitOps via Argo CD und Policy-as-Code.',
        },
        {
          title: 'Serverless',
          description:
            'Event-getriebene Systeme auf Lambda, EventBridge, SQS und Step Functions, designt für Idempotenz, Latenzen unter 100 ms und enge Kostenkontrolle.',
        },
        {
          title: 'Data und Analytics',
          description:
            'Lakehouses auf Amazon S3 mit Glue, Athena, Redshift Serverless, Iceberg-Tables und Quicksight für kostenbewusste Analytik.',
        },
        {
          title: 'AI / ML auf AWS',
          description:
            'Amazon Bedrock, SageMaker-Pipelines, Kendra-Retrieval und feingetunte Foundation Models mit privaten VPC-Endpoints und Observability.',
        },
        {
          title: 'Sicherheit und Compliance',
          description:
            'AWS Security Hub, GuardDuty, Config, IAM Access Analyzer und KMS-Patterns, ausgerichtet auf SOC 2, HIPAA, PCI-DSS und ISO-27001-Kontrollen.',
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
      badge: 'Was wir liefern',
      title: 'Eine vollständige Engineering-Praxis auf Amazon Web Services',
      description:
        'Sechs Engineering-Motions, die wir wiederholt für Kunden ausführen, die auf AWS modernisieren: von Migrationen bis zu GenAI in der Produktion.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'AWS-Cloud-Migration (MAP)',
          description:
            'Eine senior-geführte Migration nach AWS, die dem Migration-Acceleration-Program-Playbook folgt, jede Welle gegen die sechs Well-Architected-Säulen reviewt.',
          details:
            'Wir machen eine Portfolio-Bewertung in AWS Migration Hub, klassifizieren jede Workload in die richtigen 6 R (Rehost, Replatform, Refactor, Repurchase, Retire, Retain) und designen dann eine Control-Tower-Landing-Zone mit Netzwerk, Identität, Logging und SCP-Leitplanken ab Tag eins. Migrationswellen sind in Zwei-Wochen-Sprints geschnitten und unsere Architekten zeichnen das Well-Architected-Review jeder Welle vor dem Produktions-Cutover ab.',
          outcomes: [
            'AWS-Migration-Hub-Portfolio-Bewertung mit Kostenprognosen',
            'AWS-Control-Tower-Landing-Zone mit OUs und SCPs',
            'Netzwerk-, Identitäts-, Logging- und KMS-Referenz-Patterns',
            'Welle-für-Welle Well-Architected-Reviews und Remediation-Backlog',
            'CI/CD-Pipelines für IaC auf Terraform oder CDK',
            'Produktions-Cutover-Plan mit Rollback und DR-Drill',
          ],
        },
        {
          title: 'EKS und Container',
          description:
            'Eine produktive Amazon-EKS-Plattform, auf die eure Liefer-Teams ab Tag eins sicher deployen können, mit Autoscaling, GitOps und Identität von uns verdrahtet.',
          details:
            'Wir bauen private EKS-Cluster mit IRSA-IAM, OPA-Gatekeeper-Policies, AWS Load Balancer Controller für Ingress, Argo CD für GitOps und Karpenter für schnelles, kostenbewusstes Autoscaling. Wir ergänzen KEDA für Event-Skalierung, External Secrets Operator für Secrets Manager und ein getestetes Upgrade-Runbook, damit Versions-Upgrades aufhören, ein vierteljährliches Feuer zu sein.',
          outcomes: [
            'Privates EKS-Cluster mit IRSA-IAM-Rollen',
            'Karpenter-Autoscaling mit rightsized Node Pools',
            'Argo-CD-GitOps-Delivery aus euren App-Repositories',
            'OPA-Gatekeeper-Leitplanken setzen Org-Policy um',
            'External Secrets Operator gegen AWS Secrets Manager',
            'Upgrade-Runbook für EKS, Add-ons und Karpenter',
          ],
        },
        {
          title: 'Serverless-Modernisierung',
          description:
            'Ein event-getriebenes Backend, das elastisch mit dem Business skaliert, mit starker Idempotenz, Traceability und Kosten-Telemetrie ab dem ersten Commit.',
          details:
            'Wir designen Lambda-Funktionen idempotent und kurz, routen Arbeit über EventBridge-Busse mit Schema-Registry-Verträgen, orchestrieren lange Flows in Step Functions und speichern Daten in DynamoDB Single-Table oder Aurora Serverless v2. X-Ray-Traces fließen in CloudWatch und wir liefern ein per-Feature-Kosten-Dashboard, damit Engineering und Finance dieselben Zahlen sehen.',
          outcomes: [
            'EventBridge-Bus mit Schema-Registry-Verträgen',
            'Lambda-Funktionen designt für Idempotenz und Retries',
            'Step-Functions-Orchestrierungen für lange Workflows',
            'DynamoDB-Single-Table-Modell oder Aurora Serverless v2',
            'X-Ray-Traces und CloudWatch-Dashboards je Workflow',
            'Per-Feature-Kosten-Telemetrie für Engineering und Finance',
          ],
        },
        {
          title: 'Data Lakehouse auf AWS',
          description:
            'Ein Open-Table-Lakehouse auf Amazon S3, das Analysten, Data Scientists und Produkt-Teams dieselbe governance-fähige Source of Truth gibt, ohne Vendor-Lock-in.',
          details:
            'Wir designen Medallion-Lakehouses auf S3 mit Apache Iceberg, bauen Ingestion in AWS Glue oder Kinesis Firehose und führen Transformationen mit dbt auf Athena oder EMR aus. Glue Data Quality erzwingt Zeilen- und Tabellen-Regeln, Lake Formation gewährt Spalten-Permissions und Downstream-Serving geht an Redshift Serverless für BI und Quicksight für Self-Service.',
          outcomes: [
            'Iceberg-Tables auf Amazon S3 mit Medallion-Architektur',
            'Glue- oder Kinesis-Ingestion für Batch und Streaming',
            'dbt-Projekt mit dokumentierten Tests und CI-Checks',
            'Glue-Data-Quality-Regeln mit Alerts verdrahtet',
            'Lake-Formation-Zugriff auf Spaltenebene',
            'Redshift-Serverless- und Quicksight-Serving-Schichten',
          ],
        },
        {
          title: 'GenAI auf Amazon Bedrock',
          description:
            'Retrieval-augmented-Assistenten auf Amazon Bedrock, die auf eurem Enterprise-Kontext geerdet bleiben, vor jedem Release gemessen werden und nie eure VPC verlassen.',
          details:
            'Wir wählen das richtige Bedrock-Modell (Claude, Llama oder Titan), bauen Retrieval über Amazon Kendra oder OpenSearch Serverless und erden Antworten auf Dokumenten in S3, SharePoint oder Confluence. Bedrock Guardrails übernimmt Content-Safety, Evaluation läuft auf einem Golden Dataset, das wächst, und Observability ist auf CloudWatch und OpenTelemetry verdrahtet.',
          outcomes: [
            'Referenz-RAG-Architektur auf Amazon Bedrock plus Kendra',
            'Bedrock Guardrails für Content- und PII-Policies konfiguriert',
            'PrivateLink-Endpoints halten Traffic in der VPC',
            'Evaluations-Harness mit versioniertem Golden Dataset',
            'CloudWatch-Dashboards für Tokens, Latenz und Grounding',
            'Production-Rollout-Plan mit phasenweiser Adoption',
          ],
        },
        {
          title: 'FinOps und Kosten-Engineering',
          description:
            'Ein kontinuierliches AWS-Kosten-Programm, kein einmaliger Audit. Tagging-Governance, Commitment-Strategie und ein monatliches Executive-Kosten-Narrativ.',
          details:
            'Wir baselinen die Ausgaben mit Cost and Usage Reports, bauen Dashboards in Cost Explorer und QuickSight und wandeln Compute-Optimizer-Empfehlungen in Pull Requests, nicht in Slides. Savings-Plans-Abdeckung wird gegen prognostizierte Workload dimensioniert, S3 Lifecycle und Intelligent-Tiering gehen auf Top-Buckets live und ein monatliches FinOps-Review produziert ein Executive-Narrativ.',
          outcomes: [
            'CUR in eine abfragbare Kosten-Analyseschicht ingestiert',
            'Tagging-Policy via SCPs und CI-Checks erzwungen',
            'Compute-Optimizer-Empfehlungen als PRs umgesetzt',
            'Savings-Plans- und Reserved-Instances-Deckungsplan',
            'S3 Lifecycle und Intelligent-Tiering auf Top-Buckets',
            'Monatliches FinOps-Review mit Executive-Kosten-Narrativ',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Warum Kunden uns wählen',
      title: 'Schwierige Probleme, die wir auf AWS lösen',
      description:
        'Die wiederkehrenden Muster, die wir auf Amazon Web Services entwirren, und wie wir jedes einzeln angehen.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Unstrukturierter AWS-Account-Wildwuchs',
          solution:
            'Wir konsolidieren Accounts in eine Control-Tower-Landing-Zone mit Organizations, SCPs, zentralem Logging und Identity Center: sauber, auditierbar, skalierbar.',
        },
        {
          challenge: 'Performance- und Kosten-Überraschungen in Produktion',
          solution:
            'CloudWatch mit OpenTelemetry-Observability, Compute-Optimizer-gestütztes Rightsizing und eine monatliche FinOps-Kadenz legen die Überraschungen ab.',
        },
        {
          challenge: 'Monolithen-Modernisierung steckt fest',
          solution:
            'Wir re-architekten zu Microservices auf EKS, entkoppeln via SQS und EventBridge und containerisieren mit Karpenter, um schnell ohne ausufernde Kosten zu skalieren.',
        },
        {
          challenge: 'Getrennte Data Lakes und Warehouses',
          solution:
            'Ein Iceberg-Lakehouse auf S3 vereinigt Analytik: Athena, Redshift und Quicksight teilen dieselbe governance-fähige Source of Truth mit Glue-Data-Quality-Gates.',
        },
        {
          challenge: 'Sicherheits-Posture unter Auditor-Erwartungen',
          solution:
            'Wir härten AWS-Estates mit GuardDuty, Security Hub, Config-Regeln, IAM Access Analyzer und KMS-Patterns für SOC 2, HIPAA und PCI-DSS.',
        },
        {
          challenge: 'KI-Pilotprojekte, die nie in Produktion kommen',
          solution:
            'Wir graduieren Bedrock- und SageMaker-PoCs in Produktion mit Evaluations-Harness, PrivateLink-Netzwerk, Leitplanken und CI/CD-kontrollierten Releases.',
        },
      ],
    },
    useCases: {
      badge: 'Anwendungsfälle',
      title: 'Echte Engagements im AWS-Ökosystem',
      description:
        'Repräsentative Implementierungen, die unsere AWS-Praxis für SaaS-, regulierte und Digital-Native-Teams ausgeliefert hat.',
      items: [
        {
          title: 'Fintech: VMware-Exit nach AWS',
          description:
            'Replatform einer Payments-Fintech von VMware nach AWS mit Control Tower, EKS und Aurora Postgres in 14 Wochen ohne Kunden-Downtime.',
        },
        {
          title: 'Multi-Tenant-SaaS auf EKS',
          description:
            'Multi-Tenant-SaaS-Isolations-Modell auf EKS mit Karpenter-Autoscaling, Argo CD und pro-Tenant-Kostenzuordnung.',
        },
        {
          title: 'Logistik-Serverless-Plattform',
          description:
            'Event-getriebene Logistikplattform auf Lambda + EventBridge + DynamoDB, die 4 Mio. Versand-Events täglich unter 100 ms Latenz bedient.',
        },
        {
          title: 'Bedrock-Support-Copilot',
          description:
            'Kundensupport-Copilot auf Amazon Bedrock mit Kendra-Retrieval und vollem Audit-Trail für einen Versicherer.',
        },
        {
          title: 'Iceberg-Lakehouse für Retail',
          description:
            'Iceberg-on-S3-Lakehouse mit dbt + Athena und Redshift Serverless, das die Analytik-Ausgaben um 55 % gegenüber dem Legacy-Warehouse senkte.',
        },
        {
          title: 'HIPAA-Ready Healthcare-Estate',
          description:
            'AWS-Umgebung gehärtet auf HIPAA-Kontrollen mit Macie, KMS, GuardDuty und getestetem BCDR-Plan über zwei Regionen.',
        },
        {
          title: 'IoT-Daten-Ingestion',
          description:
            'IoT-Core- und Kinesis-Firehose-Pipeline, die monatlich 1 Mrd.+ Telemetrie-Events ingestiert, mit Low-Latency-Dashboards auf Timestream.',
        },
        {
          title: 'AWS-FinOps-Programm',
          description:
            'Kontinuierliches FinOps-Programm mit Savings-Plans-Abdeckung, Tagging-Governance und monatlichem Executive-Kosten-Narrativ.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschafts-Impact',
      title: 'Die Ergebnisse, die unsere AWS-Arbeit konsistent erzielt',
      description:
        'Ein Snapshot der operativen und finanziellen Verbesserungen, für die wir in jedem AWS-Engagement Verantwortung übernehmen.',
      metrics: [
        {
          label: 'Ø AWS-Rechnungs-Kürzung',
          description:
            'Typische Run-Rate-Senkung innerhalb von 90 Tagen, wenn unser FinOps-Programm auf ein migriertes AWS-Estate gelegt wird.',
        },
        {
          label: 'Median-Migration',
          description:
            'Median-Dauer von der MAP-Discovery bis zur ersten Produktionswelle für Mid-Market-Migrationen auf Control-Tower-Landing-Zones.',
        },
        {
          label: 'Ziel-SLA',
          description:
            'Default-Verfügbarkeitsziel für unsere Multi-AZ-Produktionsarchitekturen, validiert mit Chaos- und DR-Game-Days.',
        },
        {
          label: 'API-Latenz',
          description:
            'Typische p99-Latenz, die wir für Serverless- und EKS-basierte Public-APIs nach unserem Performance-Engineering-Pass liefern.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Google-Cloud-Partner | BigQuery, Vertex AI, GKE & Anthos | Cogtix Solutions',
      description:
        'Cogtix ist Google Cloud Partner und liefert BigQuery-Datenplattformen, Vertex-AI-Produktivierung, GKE-Container-Plattformen und Anthos-Modernisierung für daten-getriebene Organisationen.',
    },
    hero: {
      eyebrow: 'Google-Cloud-Partnerschaft',
      title: 'Daten-getriebene Innovation auf Google Cloud',
      highlight: 'Google Cloud',
      description:
        'Als Google Cloud Partner helfen wir daten-getriebenen Organisationen, ihr Analytics-Estate auf BigQuery aufzubauen, KI auf Vertex AI zu produktivieren und Container auf GKE zu modernisieren, alles unter einer governance-konformen, FinOps-bewussten Plattform.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Fokus auf Data & Analytics und Cloud Infrastructure',
      cta: 'Mit einem Partnership-Experten sprechen',
      exploreCapabilities: 'Fähigkeiten entdecken',
      activePartnerBadge: 'Aktiver Partner',
      highlights: [
        'Google Cloud Partner mit Fokus auf Data & Analytics und Cloud Infrastructure',
        'BigQuery-first-Datenplattformen mit dbt, Dataform und Looker-Semantic-Modellen',
        'Produktive Vertex-AI-Workflows mit Model-Monitoring und Governance',
        'GKE- und Anthos-Modernisierung mit Zero-Trust-Networking und Policy-as-Code',
      ],
      statLabels: ['GCP-Projekte', 'GCP-Zertifizierungen', 'Pipeline-SLO'],
    },
    credentials: {
      badge: 'Partnerschafts-Credentials',
      title: 'Eine Google-Cloud-Praxis verankert in Daten und Produktivierung',
      description:
        'Ein Engineering- und Analytics-Team, gebaut um BigQuery, Vertex AI, GKE und den Google-Cloud-Security-Stack, mit rollenbasierten Zertifizierungen in jeder Disziplin.',
      certificationsTitle:
        'Aktive Zertifizierungen in unseren Liefer-Teams',
      certificationsDescription:
        'Ein Snapshot der rollenbasierten Credentials, die unsere Engineers, Architekten und Berater aktuell halten.',
      competencies: [
        {
          title: 'Daten-Analytik auf BigQuery',
          description:
            'BigQuery-Warehouses mit Partitionierung, Clustering und BI Engine gepaart mit dbt- oder Dataform-Transformationen und Looker-Semantic-Layers.',
        },
        {
          title: 'Vertex AI und GenAI',
          description:
            'End-to-End-Vertex-AI-Pipelines, Model-Garden-Deployments, Gemini-geerdete Copiloten und Feature-Store-gestützte Produktivierung.',
        },
        {
          title: 'GKE und Anthos',
          description:
            'Gehärtete GKE-Cluster mit Autopilot, Workload Identity, Config Sync, Anthos Service Mesh und Binary Authorization für compliant Workloads.',
        },
        {
          title: 'Serverless und Cloud Run',
          description:
            'Event-getriebene Services auf Cloud Run, Cloud Functions, Workflows und Eventarc mit Pub/Sub-Fan-out und idempotenten Patterns.',
        },
        {
          title: 'Streaming-Daten',
          description:
            'Realtime-Pipelines auf Pub/Sub und Dataflow mit Apache Beam, Exactly-Once-Semantik und Sub-Sekunden-Latenz in BigQuery und Bigtable.',
        },
        {
          title: 'Sicherheit und Governance',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK und DLP für SOC-2-, HIPAA- und DSGVO-Ready Estates.',
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
      badge: 'Was wir liefern',
      title: 'Eine vollständige Lieferpraxis auf Google Cloud',
      description:
        'Sechs Engineering-Motions, die wir wiederholt für Kunden auf Google Cloud ausführen: von BigQuery-Plattformen bis Vertex AI in der Produktion.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'BigQuery-Datenplattform',
          description:
            'Ein BigQuery-Analytics-Estate, dem jedes Team vertraut. Kuratierte Tables, in Looker zertifizierte Semantic-Modelle und eine echte Kosten-Geschichte neben jeder Query.',
          details:
            'Wir designen partitionierte und geclusterte BigQuery-Tables, schalten BI Engine für die wichtigen Queries ein und nutzen BigLake oder Iceberg-External-Tables für offenen Storage. Transformationen werden in dbt mit CI-Gates und Unit-Tests modelliert, Semantic-Logik lebt in Looker (oder Looker Modeler) mit Row-Level Security und eine Slot-Reservierungs-Strategie hält die Performance vorhersehbar.',
          outcomes: [
            'Partitionierte und geclusterte BigQuery-Tables für Top-Queries',
            'BI-Engine-Beschleunigung auf kritischen Dashboards aktiviert',
            'BigLake- oder Iceberg-External-Tables für offenen Storage',
            'dbt-Projekt mit CI-Gates, Tests und Lineage',
            'Looker-Semantic-Modell mit Row-Level-Security-Policies',
            'Slot-Reservierungs- und Autoscaling-Strategie mit Leitplanken',
          ],
        },
        {
          title: 'Vertex-AI-Produktivierung',
          description:
            'Eine Vertex-AI-Praxis, die Notebooks in governance-konforme Produktions-Workloads verwandelt, mit Feature Stores, Monitoring und auf euren Daten geerdetem Gemini.',
          details:
            'Wir designen Vertex-AI-Pipelines für Training, Evaluation und Deployment, bauen eine Feature-Store-gestützte Serving-Schicht für Low-Latency-Online-Predictions und aktivieren Model Monitoring für Drift- und Skew-Alerts. Für GenAI erden wir Gemini über Vertex AI Search und Document AI, evaluieren mit Golden Datasets und liefern einen Release-Prozess, den euer Plattform-Team selbst ausführen kann.',
          outcomes: [
            'Vertex-AI-Pipelines für Training, Eval und Deployment',
            'Feature Store mit Online- und Offline-Serving-Pfaden',
            'Model Monitoring für Drift, Skew und Feature Attribution',
            'Vertex-AI-Search-Retrieval, geerdet auf Enterprise-Dokumente',
            'Evaluations-Harness mit versionierten Golden Datasets',
            'Release-Runbook, das euer MLOps-Team eigenständig ausführen kann',
          ],
        },
        {
          title: 'GKE- und Anthos-Plattformen',
          description:
            'Eine compliance-fähige GKE-Autopilot-Plattform, auf die eure Engineers sicher deployen können. Identität, Policy und Supply-Chain-Integrität von uns verdrahtet.',
          details:
            'Wir bauen private GKE-Autopilot-Cluster mit Workload Identity Federation, Binary Authorization für Image-Signing und Config Sync mit Policy Controller für GitOps-Policy. Ost-West-Traffic wird von Anthos Service Mesh, der Edge von Cloud Armor und Cloud Load Balancing gesteuert, Secrets fließen aus Secret Manager über External Secrets Operator.',
          outcomes: [
            'Privates GKE-Autopilot-Cluster mit Workload Identity',
            'Binary Authorization erzwingt signierte Images beim Deploy',
            'Config Sync und Policy Controller für GitOps-Policy',
            'Anthos Service Mesh für Ost-West-Traffic und mTLS',
            'Cloud Armor und Load Balancing an der Edge',
            'External Secrets Operator mit Secret Manager verdrahtet',
          ],
        },
        {
          title: 'Streaming und Realtime-Daten',
          description:
            'Sub-Sekunden-Pipelines auf Pub/Sub und Dataflow, die nächtliches Batch durch immer frische Daten ersetzen, mit Exactly-Once-Semantik und Spätankunfts-Handling.',
          details:
            'Wir entwickeln Apache-Beam-Pipelines auf Dataflow mit Exactly-Once-Processing, Spätankunfts-Fenstern und Schema-Evolution über Schema-Registry-Verträge. Heiße Daten landen in Bigtable zum Serving und in BigQuery zur Analytik, Dead-Letter-Queues fangen Poison-Messages ab und Cloud-Monitoring-Dashboards verfolgen Durchsatz, Latenz und Aktualität ganzheitlich.',
          outcomes: [
            'Pub/Sub-Topics mit versionierten Schema-Registry-Verträgen',
            'Apache-Beam-Pipelines auf Dataflow mit Exactly-Once',
            'Spätankunfts-Windowing und Dead-Letter-Queues',
            'Bigtable-Hot-Serving plus BigQuery-Analytics-Sink',
            'Cloud-Monitoring-Dashboards für Aktualität und Lag',
            'Replay-Tooling für Back-Fills und Schema-Migrationen',
          ],
        },
        {
          title: 'Cloud Run und Serverless',
          description:
            'Voll-Managed-Services auf Cloud Run, die auf null skalieren, aus eurem Repo deployen und über Cloud Trace, Cloud Profiler und Cloud Logging observability liefern.',
          details:
            'Wir bauen Cloud-Run-Services für Concurrency optimiert, frontiert mit API Gateway oder Load Balancing, orchestriert über Workflows für Multi-Step-Prozesse und geroutet über Eventarc für Event-Patterns. Persistenter State liegt in Cloud SQL oder Spanner mit PITR und Replicas, und jeder Service liefert Cloud Trace, Cloud Profiler und CI/CD via Cloud Deploy.',
          outcomes: [
            'Cloud-Run-Services mit Concurrency-getunten Konfigurationen',
            'Workflows-Orchestrierungen für Multi-Step-Prozesse',
            'Eventarc-Routing für Event-getriebene Patterns',
            'Cloud-SQL- oder Spanner-Datenschicht mit PITR und Replicas',
            'Cloud Trace und Cloud Profiler standardmäßig aktiv',
            'CI/CD via Cloud Deploy mit progressivem Rollout',
          ],
        },
        {
          title: 'GCP-FinOps und Kosten-Engineering',
          description:
            'Ein kontinuierliches Google-Cloud-Kosten-Programm um BigQuery-Ökonomie, CUD-Strategie und eine Tagging-Policy, der Finance und Engineering vertrauen.',
          details:
            'Wir baselinen die Ausgaben mit Billing Export nach BigQuery, dimensionieren BigQuery-Slot-Reservierungen und Autoscaling gegen Forecast-Workload, applizieren Committed-Use-Discounts, wo die Abdeckung sicher ist, und schalten GCS-Lifecycle und Storage-Class-Übergänge auf Top-Buckets. Ein monatliches FinOps-Review produziert ein Executive-Narrativ und ein Backlog für den nächsten Sprint.',
          outcomes: [
            'Billing Export in eine abfragbare Kosten-Schicht ingestiert',
            'BigQuery-Slot-Reservierungen auf Forecast-Workload dimensioniert',
            'Quartalsweise reviewter CUD-Abdeckungsplan',
            'GCS-Lifecycle und Storage-Class-Übergänge auf Top-Buckets',
            'Label- und Tagging-Policy via Org Policies erzwungen',
            'Monatliches FinOps-Review mit Executive-Kosten-Narrativ',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Warum Kunden uns wählen',
      title: 'Schwierige Probleme, die wir auf Google Cloud lösen',
      description:
        'Wiederkehrende Muster, die wir auf Google Cloud entwirren, und wie wir jedes einzeln angehen.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Vertrauenslose Analytik über viele Teams',
          solution:
            'BigQuery, Dataform und Looker etablieren eine einzige Semantic-Schicht mit dbt-artigen Tests und Lineage, damit jedes Dashboard aus derselben Quelle antwortet.',
        },
        {
          challenge: 'ML-Experimente, die nie in Produktion gehen',
          solution:
            'Vertex AI Pipelines, Feature Store und Model Monitoring graduieren Notebooks in governance-konforme, observierbare Produktion mit Evaluations-Gates.',
        },
        {
          challenge: 'Langsame, reine Batch-Datenpipelines',
          solution:
            'Pub/Sub mit Dataflow und Bigtable ersetzt nächtliches Batch durch Exactly-Once-Streaming und Minuten-Aktualität im Warehouse.',
        },
        {
          challenge: 'Container-Plattformen mit Policy-Drift',
          solution:
            'Anthos Config Sync und Policy Controller erzwingen GitOps-Policy über GKE-Flotten; Binary Authorization stoppt unsignierte Images beim Deploy.',
        },
        {
          challenge: 'Exponierte sensible Daten und Compliance-Lücken',
          solution:
            'VPC Service Controls, DLP, CMEK und Security Command Center schaffen einen verteidigbaren Perimeter für SOC 2, HIPAA und DSGVO.',
        },
        {
          challenge: 'Unvorhersagbare BigQuery- und GCP-Kosten',
          solution:
            'BigQuery-Reservierungen mit Slot-Autoscaling, CUDs, GCS-Lifecycle und eine tagging-getriebene FinOps-Kadenz glätten die GCP-Ausgaben Monat für Monat.',
        },
      ],
    },
    useCases: {
      badge: 'Anwendungsfälle',
      title: 'Echte Engagements im Google-Cloud-Ökosystem',
      description:
        'Repräsentative Implementierungen, die unsere Google-Cloud-Praxis für daten-getriebene, regulierte und Digital-Native-Teams ausgeliefert hat.',
      items: [
        {
          title: 'Retail-BigQuery-Lakehouse',
          description:
            'Retail-Daten in ein BigQuery-Lakehouse mit BigLake, dbt-Transformationen und Looker-Dashboards für 2.000+ Stores vereint.',
        },
        {
          title: 'Healthcare-Vertex-AI-Rollout',
          description:
            'Klinische prädiktive Modelle auf Vertex AI mit HIPAA-konformen VPC Service Controls und CMEK-verschlüsselten Datenflüssen produktiviert.',
        },
        {
          title: 'SaaS-GKE-Autopilot-Plattform',
          description:
            'Multi-Tenant-SaaS-Plattform auf GKE Autopilot mit Workload Identity, Anthos Service Mesh und Argo CD GitOps.',
        },
        {
          title: 'Streaming-Personalisierung',
          description:
            'Pub/Sub-zu-Dataflow-zu-Bigtable-Pipeline, die Personalisierungs-Empfehlungen unter 100 ms auf Web und Mobile bedient.',
        },
        {
          title: 'Gemini-geerdeter Copilot',
          description:
            'Gemini-Support-Copilot, geerdet auf Cloud Storage und BigQuery, mit Evaluations-Harness ausgeliefert.',
        },
        {
          title: 'Medien-Transcoding auf Cloud Run',
          description:
            'Medien-Transcoding-Pipeline auf Cloud Run und Workflows, die ohne Over-Provisioning auf 10x Spitzenlast skaliert.',
        },
        {
          title: 'FinTech-Looker-Enablement',
          description:
            'LookML-Semantic-Modell für eine FinTech-Plattform, das 40+ Legacy-Tableau-Workbooks durch governance-konforme Dashboards ersetzt.',
        },
        {
          title: 'Anthos-Hybrid-Modernisierung',
          description:
            'Ein hybrides Manufacturing-Estate mit Anthos-Clustern on-prem und GKE in GCP unter einer Policy-Ebene modernisiert.',
        },
      ],
    },
    impact: {
      badge: 'Partnerschafts-Impact',
      title: 'Die Ergebnisse, die unsere Google-Cloud-Arbeit konsistent erzielt',
      description:
        'Ein Snapshot der operativen und finanziellen Verbesserungen, für die wir in jedem Google-Cloud-Engagement Verantwortung übernehmen.',
      metrics: [
        {
          label: 'Query-Performance',
          description:
            'Typischer BigQuery-Query-Speed-up nach unserem Partitionierungs-, Clustering-, Materialized-View- und BI-Engine-Optimierungs-Pass.',
        },
        {
          label: 'GCP-Kostenreduktion',
          description:
            'Durchschnittliche Run-Rate-Einsparung innerhalb von 90 Tagen nach Auflegen unseres FinOps-Programms: Reservierungen, CUDs, Lifecycle und Tagging.',
        },
        {
          label: 'Daten-Aktualität',
          description:
            'Typische End-to-End-Latenz in unseren Pub/Sub-zu-Dataflow-zu-BigQuery-Streaming-Pipelines, die nächtliche Batch-Jobs ablösen.',
        },
        {
          label: 'ML PoC zu Prod',
          description:
            'Median-Zeit, in der wir einen Vertex-AI-Proof-of-Concept in ein governance-konformes, evaluiertes, überwachtes Produktions-Rollout bringen.',
        },
      ],
    },
  },
}

export const dePartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Strategische Cloud-Partnerschaften | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix liefert zertifizierte Cloud-Partnerschaften für Microsoft, AWS und Google Cloud. Entdeckt unsere Azure-, AWS- und GCP-Praxis mit FinOps, Sicherheit und SRE.',
  },
  hero: {
    eyebrow: 'Strategische Allianzen',
    title: 'Bauen auf den vertrauenswürdigsten Cloud-Plattformen der Welt',
    highlight: 'Cloud-Plattformen',
    description:
      'Unsere Engineers, Architekten und Berater sind tief zertifiziert auf Microsoft, AWS und Google Cloud. Wählt eure Plattform und wir bringen Playbook, Zertifizierungen und Lieferungs-Muskel mit.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Data & AI · Business Applications',
      description:
        'Auf Azure modernisieren, Power Platform sicher skalieren und governance-konforme Copilot-Erlebnisse über .NET, Microsoft 365 und Dynamics 365 ausliefern.',
      highlights: [
        'Azure-Migrationen geführt vom Cloud Adoption Framework',
        'Power Platform Center of Excellence',
        'Produktive Azure-OpenAI-Assistenten',
      ],
      statLabels: ['MS-Projekte', 'Zertifizierungen', 'Erfahrung'],
      cta: 'Unsere Microsoft-Praxis entdecken',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migrationen · EKS · Serverless · Bedrock',
      description:
        'Well-Architected-Workloads auf Amazon Web Services bauen. Wir stellen Landing Zones, EKS-Plattformen, Bedrock-Copiloten und FinOps-Kostenmodelle bereit.',
      highlights: [
        'MAP-konforme Migrationswellen',
        'EKS- und Argo-CD-GitOps-Plattformen',
        'Bedrock-Retrieval-augmented-Copiloten',
      ],
      statLabels: ['AWS-Migrationen', 'Zertifizierungen', 'Ø Kosteneinsparung'],
      cta: 'Unsere AWS-Praxis entdecken',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Daten-getriebene Innovation auf Google Cloud. Wir bauen BigQuery-Lakehouses, produktivierte Vertex-AI-Workloads und modernisierte Container-Plattformen auf GKE Autopilot.',
      highlights: [
        'Semantische Plattformen mit BigQuery und Looker',
        'Vertex-AI-Pipelines in Produktion',
        'GKE Autopilot mit GitOps-Policy',
      ],
      statLabels: ['GCP-Projekte', 'Zertifizierungen', 'Pipeline-SLO'],
      cta: 'Unsere Google-Cloud-Praxis entdecken',
    },
  },
  whyUs: {
    eyebrow: 'Warum Cogtix',
    title: 'Ein Multi-Cloud-Liefer-Team mit echter Engineering-Tiefe',
    description:
      'Wir sammeln nicht nur Zertifikate. Wir betreiben die Plattformen, die wir empfehlen, jeden Tag in Produktion bei regulierten und Digital-Native-Kunden.',
    items: [
      {
        title: 'Architekten in jedem Engagement',
        description:
          'Jedes Partner-Projekt kombiniert einen Principal Architect mit einem Delivery-Squad, damit Design-Entscheidungen senior geführt und überall wiederverwendet werden.',
      },
      {
        title: 'Framework-aligned Delivery',
        description:
          'Wir liefern gegen Azure CAF, AWS Well-Architected Framework und Google Cloud Architecture Framework, Säule für Säule, Review für Review.',
      },
      {
        title: 'FinOps von Tag eins',
        description:
          'Kostenmodellierung, Tagging-Governance und ein monatliches Executive-Kosten-Narrativ sind Teil des Engagements, kein Nachtrag.',
      },
      {
        title: 'Sicherheit und Compliance eingebaut',
        description:
          'SOC 2, HIPAA, PCI-DSS und DSGVO sind Referenzarchitekturen, die wir anwenden, keine Boilerplate-Dokumente, die wir übergeben.',
      },
      {
        title: 'Wiederverwendbare Accelerator',
        description:
          'Landing Zones, GenAI-Evaluations-Harnesses, Power-Platform-CoE-Kits und IaC-Module beschleunigen Delivery ohne Lock-in.',
      },
      {
        title: 'Co-Sell-ready',
        description:
          'Aktive Partner-Account-Teams bei Microsoft, AWS und Google Cloud: Marketplace-Transaktionen und schnellere Beschaffung sind möglich.',
      },
    ],
  },
}
