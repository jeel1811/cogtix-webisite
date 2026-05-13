import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const frPartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Partenaire Microsoft | Azure, .NET, Power Platform et Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix est Microsoft Solutions Partner et livre des migrations Azure, des modernisations .NET, des automatisations Power Platform, des collaborations Microsoft 365 et des personnalisations Dynamics 365 dans des secteurs régulés.',
    },
    hero: {
      eyebrow: 'Partenariat Microsoft',
      title: 'Conçu avec Microsoft, livré pour l’entreprise',
      highlight: 'Microsoft',
      description:
        'En tant que Microsoft Solutions Partner, nous aidons les organisations à se moderniser sur Azure, à passer Power Platform à l’échelle en toute sécurité et à livrer des expériences Copilot gouvernées qui déplacent de vraies métriques business, pas seulement des feuilles de route.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Désignations sur Azure, Data & AI et Business Applications',
      cta: 'Parler à un expert de l’alliance',
      exploreCapabilities: 'Explorer les capacités',
      activePartnerBadge: 'Partenaire Actif',
      highlights: [
        'Microsoft Solutions Partner sur Azure, Data & AI et Business Applications',
        'Migrations conduites par le Cloud Adoption Framework avec revues Azure Well-Architected',
        'Centre d’Excellence Power Platform pour un citizen development gouverné',
        'Co-sell Microsoft dédié et offres transactables sur le Marketplace',
      ],
      statLabels: ['Projets Microsoft', 'Certifications MS', 'Expérience Microsoft'],
    },
    credentials: {
      badge: 'Crédibilité du partenariat',
      title:
        'Crédibilité, compétences et muscle de livraison construits sur Microsoft',
      description:
        'Une pratique pluridisciplinaire d’architectes, ingénieurs, spécialistes data et consultants conçue autour du Microsoft Cloud et rafraîchie chaque trimestre face aux nouvelles certifications.',
      certificationsTitle:
        'Certifications actives dans nos équipes de livraison',
      certificationsDescription:
        'Un instantané des certifications par rôle que nos ingénieurs, architectes et consultants détiennent actuellement.',
      competencies: [
        {
          title: 'Infrastructure Azure',
          description:
            'Landing zones, réseaux hub-and-spoke, identité hybride et garde-fous FinOps conçus selon l’Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work et M365',
          description:
            'Microsoft 365, SharePoint Online, développement d’apps Teams, Viva et portails d’intranet modernes qui élèvent l’expérience employé et l’adoption.',
        },
        {
          title: 'Data et IA sur Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service et Cognitive Services : domaines de données et copilotes conçus pour débloquer les décisions.',
        },
        {
          title: 'Business Applications',
          description:
            'Personnalisations de Dynamics 365 Sales, Customer Service et Finance avec contrôles PCF, plugins, Power Pages et intégrations Dataverse.',
        },
        {
          title: 'Power Platform',
          description:
            'Power Apps canvas et model-driven, flux Power Automate, tableaux de bord Power BI et AI Builder dans un kit CoE gouverné.',
        },
        {
          title: 'Sécurité et conformité',
          description:
            'Déploiements Defender XDR, Sentinel, Purview, Intune et Entra ID qui mettent en place zero trust, accès conditionnel et classification des données.',
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
      badge: 'Ce que nous livrons',
      title: 'Une pratique de livraison complète sur le Microsoft Cloud',
      description:
        'Six mouvements d’ingénierie que nous exécutons en boucle pour des clients en BFSI, santé, industrie et tech.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Migration et modernisation Azure',
          description:
            'Une trajectoire prévisible pour sortir des centres de données vieillissants et de l’hébergement legacy, chaque vague étant suivie sur un baseline mesurable de coût, de résilience et de sécurité.',
          details:
            'Nous commençons par une évaluation de portefeuille dans Azure Migrate, puis découpons le parc en 6 à 8 vagues de migration pour que le business ne subisse jamais d’événement big-bang. Chaque vague reçoit une landing zone Bicep, un SLO, un pattern DR et une politique de tagging FinOps avant qu’une seule charge ne bouge. Notre squad de migration associe un architecte d’entreprise à des ingénieurs de livraison, les décisions de conception sont prises une fois et réutilisées partout.',
          outcomes: [
            'Landing zone Azure alignée avec le Cloud Adoption Framework',
            'Vagues de migration cadrées sur les piliers Well-Architected',
            'Dépôts d’infrastructure Bicep ou Terraform livrés',
            'Baseline FinOps avec tagging, budgets et reporting mensuel',
            'Runbook DR de production éprouvé en bascule réelle',
            'Sessions de transfert de connaissance pour vos ingénieurs plateforme',
          ],
        },
        {
          title: 'Modernisation d’applications .NET',
          description:
            'Un plan de modernisation opérationnel pour les apps .NET Framework qui font tourner le business, sans réécriture big-bang et sans gel de la roadmap.',
          details:
            'Nous utilisons le pattern strangler-fig pour décoller la fonctionnalité de monolithes ASP.NET legacy par contexte borné, tout en gardant l’app de prod livrant de nouvelles fonctionnalités. Les nouveaux services tournent sur .NET 8 dans des conteneurs AKS ou Container Apps, une API gateway en façade et OpenTelemetry vers Application Insights. L’état cible : un runtime, un pipeline CI/CD et une posture de sécurité unique.',
          outcomes: [
            'Base .NET Framework cartographiée en contextes bornés',
            'Roadmap strangler-fig avec jalons trimestriels',
            'Nouveaux services sur .NET 8 dans AKS ou Container Apps',
            'Traces OpenTelemetry vers Application Insights',
            'Pipelines CI/CD GitHub Actions ou Azure DevOps configurés',
            'Defender for Cloud et Key Vault câblés sur chaque charge',
          ],
        },
        {
          title: 'Power Platform et Copilot Studio',
          description:
            'Citizen development sans chaos. Une pratique Power Platform gouvernée avec des agents Copilot Studio ancrés sur vos vraies données.',
          details:
            'Nous mettons en place un Centre d’Excellence Power Platform avec le CoE Starter Kit officiel et y ajoutons ce dont les clients ont vraiment besoin : stratégie d’environnements, politique DLP négociée avec le business, modèle de données Dataverse possédé par l’IT et pipeline ALM sur Power Platform Pipelines. Les agents Copilot Studio sont ancrés sur SharePoint, Dataverse et Azure OpenAI pour des réponses précises et auditables.',
          outcomes: [
            'CoE Starter Kit déployé avec stratégie d’environnements et DLP',
            'Modèle de domaine Dataverse possédé par votre équipe IT',
            'Pipeline ALM sur Power Platform Pipelines',
            'Playbook d’onboarding et programme de formation des makers',
            'Deux agents Copilot Studio en production ancrés sur des données d’entreprise',
            'Tableaux de bord de capacité et de dimensionnement de licences',
          ],
        },
        {
          title: 'Microsoft 365 et SharePoint',
          description:
            'Une expérience employé moderne sur Microsoft 365 avec un vrai intranet, des apps Teams réellement utilisées et des automatisations Graph qui éliminent les tâches manuelles.',
          details:
            'Nous concevons et livrons des solutions SharePoint Framework, des apps Teams Toolkit, des add-ins Outlook sur mesure et des tableaux Viva Connections, et nous les relions à vos systèmes via Microsoft Graph et Logic Apps. Chaque projet inclut un plan de gouvernance de contenu, une revue de sécurité du tenant face au Microsoft Secure Score et un playbook d’adoption pour que le déploiement prenne auprès des employés.',
          outcomes: [
            'Intranet SharePoint Online avec cartes Viva Connections',
            'Deux à quatre apps Teams Toolkit intégrées au quotidien',
            'Automatisations Microsoft Graph remplaçant les transferts manuels',
            'Revue de sécurité du tenant avec plan d’élévation Secure Score',
            'Politiques de gouvernance et de cycle de vie documentées',
            'Kit de conduite du changement pour RH et Comms',
          ],
        },
        {
          title: 'Plateforme de données Azure et Fabric',
          description:
            'Un domaine analytique de confiance unique sur Microsoft Fabric, avec modèles sémantiques Power BI, lineage gouverné et fraîcheur en minutes, pas en jours.',
          details:
            'Nous construisons des lakehouses medallion sur OneLake, exécutons les pipelines sur Synapse ou Fabric Data Factory et modélisons les transformations dans dbt ou Dataform. Chaque dataset Power BI passe par une revue de modèle sémantique avec row-level security, calculation groups paramétrés et politique de datasets certifiés documentée. Microsoft Purview relie le tout via le lineage, la classification et des scorecards de qualité.',
          outcomes: [
            'Disposition lakehouse Bronze à Gold sur OneLake',
            'Pipelines d’ingestion Synapse ou Fabric Data Factory',
            'Projet dbt avec tests documentés et checks CI',
            'Modèles sémantiques Power BI certifiés avec row-level security',
            'Lineage et classification soutenus par Purview',
            'Scorecards de qualité revus dans une cadence mensuelle',
          ],
        },
        {
          title: 'Solutions Azure AI et OpenAI',
          description:
            'Des assistants Azure OpenAI de qualité production qui restent ancrés sur vos données, évalués avant chaque release et opérant dans des garde-fous d’entreprise.',
          details:
            'Nous concevons l’architecture de retrieval autour d’Azure AI Search, ancrons les prompts sur des documents stockés dans SharePoint, OneLake ou Cosmos DB et évaluons les réponses avec Prompt Flow sur des golden datasets qui grandissent dans le temps. Le réseau passe par des endpoints privés, les filtres de safety sont ajustés avec votre équipe Trust & Safety et Application Insights livre les tableaux de bord de tokens, latence et grounding dès le premier jour.',
          outcomes: [
            'Architecture RAG de référence sur Azure OpenAI et AI Search',
            'Harness d’évaluation Prompt Flow avec golden datasets',
            'Endpoints privés, identité managée et filtres de contenu',
            'Tableaux Application Insights de tokens et latence',
            'Checklist IA responsable signée avec votre équipe juridique',
            'Playbook de rollout production avec adoption par phases',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Pourquoi nos clients nous choisissent',
      title: 'Les problèmes difficiles que nous résolvons sur la stack Microsoft',
      description:
        'Les patterns récurrents que nous démêlons dans l’écosystème Microsoft et la façon dont nous abordons chacun.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Migrations Azure bloquées ou partielles',
          solution:
            'Nous relançons les trajectoires cloud avec une landing zone alignée CAF, des vagues replatform et refactor et un baseline FinOps qui maîtrise le run-rate dès le premier jour.',
        },
        {
          challenge: 'Parc .NET Framework vieillissant',
          solution:
            'Migration strangler-fig vers .NET 8, conteneurisation sur AKS et CI/CD sur Azure DevOps ou GitHub sans geler votre roadmap de fonctionnalités.',
        },
        {
          challenge: 'Power Platform en sprawl sans gouvernance',
          solution:
            'Nous mettons en place un CoE Power Platform avec stratégie d’environnements, politiques DLP, ALM, monitoring de capacité et une communauté de makers qui passe à l’échelle en sécurité.',
        },
        {
          challenge: 'Initiatives IA coincées au stade PoC',
          solution:
            'Nous industrialisons des assistants Azure OpenAI avec RAG, portes d’évaluation, observabilité et garde-fous d’IA responsable, pour que les PoCs atteignent l’échelle entreprise.',
        },
        {
          challenge: 'Écarts d’identité, de données et de conformité',
          solution:
            'Déploiements zero-trust avec accès conditionnel Entra ID, classification Purview, Defender XDR et runbooks Sentinel pour couvrir SOC 2, HIPAA et RGPD.',
        },
        {
          challenge: 'Analytique et reporting fragmentés',
          solution:
            'Une plateforme de données unifiée Fabric et Synapse avec modèles sémantiques Power BI et gouvernance Purview : une source de vérité pour chaque question business.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Engagements réels dans l’écosystème Microsoft',
      description:
        'Implémentations représentatives livrées par notre pratique Microsoft pour des industries régulées et des équipes digital-native.',
      items: [
        {
          title: 'Cœur bancaire vers Azure',
          description:
            'Migration et replatform des charges mid-office d’une banque Tier-2 vers Azure avec DNS privé, ExpressRoute et Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE pour l’assurance',
          description:
            'Flux sur mesure de sinistres et de souscription sur Dynamics 365 avec contrôles PCF, plugins personnalisés et portails Power Pages.',
        },
        {
          title: 'Copilot industrie',
          description:
            'Copilot Azure OpenAI d’atelier ancré sur SOP SharePoint et télémétrie IoT, réduisant les escalades au premier appel.',
        },
        {
          title: 'Refonte d’intranet Microsoft 365',
          description:
            'Modernisation d’un intranet de 12 000 collaborateurs sur SharePoint Online avec Viva Connections, intégration Teams et automatisations Graph.',
        },
        {
          title: 'CoE Power Platform',
          description:
            'Mise en place d’un CoE Power Platform gouverné avec stratégie d’environnements, ALM via Power Platform Pipelines et politiques DLP.',
        },
        {
          title: 'Lakehouse Fabric pour le retail',
          description:
            'Lakehouse Microsoft Fabric avec architecture medallion, OneLake et modèles sémantiques Power BI pour des insights quotidiens.',
        },
        {
          title: 'HL7 santé sur Azure',
          description:
            'Intégration des flux HL7 et FHIR dans Azure Health Data Services avec classification Purview et sécurité HIPAA-ready.',
        },
        {
          title: 'Plateforme SaaS .NET',
          description:
            'Reconstruction d’un SaaS ASP.NET MVC legacy en plateforme .NET multi-tenant sur AKS avec OpenTelemetry et CI/CD sans downtime.',
        },
      ],
    },
    impact: {
      badge: 'Impact du partenariat',
      title: 'Les résultats que notre travail Microsoft génère de façon constante',
      description:
        'Un instantané des améliorations opérationnelles et financières dont nous prenons la responsabilité dans chaque engagement Microsoft.',
      metrics: [
        {
          label: 'Économies de run-rate',
          description:
            'Réduction moyenne du coût mensuel Azure après nos revues FinOps et Well-Architected sur les parcs migrés.',
        },
        {
          label: 'Disponibilité',
          description:
            'SLA cible pour nos landing zones Azure de production avec patterns actif-passif multi-régions et runbooks DR éprouvés.',
        },
        {
          label: 'PoC vers production',
          description:
            'Délai typique d’une preuve de concept Azure OpenAI à un rollout copilot gouverné, évalué et prêt pour la production.',
        },
        {
          label: 'Adoption des makers',
          description:
            'Hausse des makers actifs Power Platform sous 90 jours après la mise en place de notre Centre d’Excellence gouverné.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'Partenaire AWS | Architecture Cloud, Migrations et DevOps sur AWS | Cogtix Solutions',
      description:
        'Cogtix est membre du AWS Partner Network et construit des charges Well-Architected sur Amazon Web Services, dont EKS, Lambda, Aurora et SageMaker, avec FinOps, sécurité et SRE intégrés à notre façon de livrer.',
    },
    hero: {
      eyebrow: 'Partenariat AWS',
      title: 'Construit sur AWS, conçu pour des résultats qui se cumulent',
      highlight: 'AWS',
      description:
        'En tant que membre du AWS Partner Network, nous livrons des charges Well-Architected sur Amazon Web Services : des landing zones et plateformes EKS aux copilotes adossés à Bedrock, avec FinOps et sécurité intégrés.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Parcours Solutions et Services avec livraison alignée Well-Architected',
      cta: 'Parler à un expert de l’alliance',
      exploreCapabilities: 'Explorer les capacités',
      activePartnerBadge: 'Partenaire Actif',
      highlights: [
        'Membre APN avec parcours Solutions, Services et Software',
        'Revues Well-Architected sur les six piliers à chaque engagement',
        'Découverte et exécution alignées AWS Migration Acceleration Program (MAP)',
        'Offres transactables sur AWS Marketplace et motion co-sell avec nos équipes',
      ],
      statLabels: ['Migrations AWS', 'Certifications AWS', 'Économie Moyenne'],
    },
    credentials: {
      badge: 'Crédibilité du partenariat',
      title:
        'Une pratique de livraison qui vit dans l’AWS Well-Architected Framework',
      description:
        'Une équipe pilotée par l’architecture, fortement certifiée, avec playbooks MAP et une culture de livraison FinOps-first conçue autour d’AWS.',
      certificationsTitle:
        'Certifications actives dans nos équipes de livraison',
      certificationsDescription:
        'Un instantané des certifications par rôle que nos ingénieurs, architectes et consultants détiennent actuellement.',
      competencies: [
        {
          title: 'Fondations Cloud',
          description:
            'Landing zones multi-comptes avec AWS Control Tower, Organizations, SCP et Identity Center : sûres, auditables et prêtes à l’échelle dès le premier jour.',
        },
        {
          title: 'Conteneurs et Kubernetes',
          description:
            'Clusters EKS en production avec autoscaling Karpenter, service mesh (App Mesh ou Istio), GitOps via Argo CD et policy-as-code.',
        },
        {
          title: 'Serverless',
          description:
            'Systèmes événementiels sur Lambda, EventBridge, SQS et Step Functions conçus pour l’idempotence, latence < 100 ms et coût maîtrisé.',
        },
        {
          title: 'Data et analytique',
          description:
            'Lakehouses sur Amazon S3 avec Glue, Athena, Redshift Serverless, tables Iceberg et Quicksight pour une analytique consciente du coût.',
        },
        {
          title: 'IA / ML sur AWS',
          description:
            'Amazon Bedrock, pipelines SageMaker, retrieval Kendra et foundation models fine-tunés avec endpoints VPC privés et observabilité.',
        },
        {
          title: 'Sécurité et conformité',
          description:
            'Patterns AWS Security Hub, GuardDuty, Config, IAM Access Analyzer et KMS alignés sur les contrôles SOC 2, HIPAA, PCI-DSS et ISO 27001.',
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
      badge: 'Ce que nous livrons',
      title: 'Une pratique d’ingénierie complète sur Amazon Web Services',
      description:
        'Six mouvements d’ingénierie que nous exécutons en boucle pour des clients modernisant sur AWS : des migrations à la GenAI en production.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Migration AWS Cloud (MAP)',
          description:
            'Une migration vers AWS pilotée par des seniors qui suit le playbook du Migration Acceleration Program, chaque vague étant revue contre les six piliers Well-Architected.',
          details:
            'Nous menons une évaluation de portefeuille dans AWS Migration Hub, classons chaque charge dans les bons 6 R (rehost, replatform, refactor, repurchase, retire, retain), puis concevons une landing zone Control Tower avec réseau, identité, logging et garde-fous SCP dès le premier jour. Les vagues sont calibrées en sprints de deux semaines et nos architectes valident la revue Well-Architected de chaque vague avant la bascule en production.',
          outcomes: [
            'Évaluation de portefeuille AWS Migration Hub avec projections de coût',
            'Landing zone AWS Control Tower avec OU et SCP',
            'Patterns de référence réseau, identité, logging et KMS',
            'Revues Well-Architected et backlog de remédiation par vague',
            'Pipelines CI/CD IaC sur Terraform ou CDK',
            'Plan de bascule production avec rollback et exercice DR',
          ],
        },
        {
          title: 'EKS et conteneurs',
          description:
            'Une plateforme Amazon EKS de production sur laquelle vos équipes peuvent déployer en sécurité dès le premier jour, avec autoscaling, GitOps et identité câblés par nous.',
          details:
            'Nous construisons des clusters EKS privés avec IAM IRSA, politiques OPA Gatekeeper, AWS Load Balancer Controller pour l’ingress, Argo CD pour la livraison GitOps et Karpenter pour un autoscaling rapide et conscient du coût. Nous ajoutons KEDA pour le scaling événementiel, External Secrets Operator pour Secrets Manager et un runbook d’upgrade testé pour que les montées de version cessent d’être un incendie trimestriel.',
          outcomes: [
            'Cluster EKS privé avec rôles IAM en IRSA',
            'Autoscaling Karpenter avec node pools bien dimensionnés',
            'Livraison Argo CD GitOps depuis vos dépôts applicatifs',
            'Garde-fous OPA Gatekeeper appliquant la politique org',
            'External Secrets Operator branché sur AWS Secrets Manager',
            'Runbook d’upgrade EKS, add-ons et Karpenter',
          ],
        },
        {
          title: 'Modernisation serverless',
          description:
            'Un back-end événementiel qui passe à l’échelle élastiquement avec le business, avec idempotence, traçabilité et télémétrie de coût intégrées dès le premier commit.',
          details:
            'Nous concevons des fonctions Lambda idempotentes et courtes, routons le travail via des bus EventBridge avec contrats en schema registry, orchestrons les flux longs en Step Functions et stockons en DynamoDB single-table ou Aurora Serverless v2. Les traces X-Ray remontent dans CloudWatch et nous exposons un tableau de coût par feature, pour qu’ingénierie et finance voient les mêmes chiffres.',
          outcomes: [
            'Bus EventBridge avec contrats schema registry',
            'Fonctions Lambda conçues pour l’idempotence et les retries',
            'Orchestrations Step Functions pour les flux longs',
            'Modèle single-table DynamoDB ou Aurora Serverless v2',
            'Traces X-Ray et dashboards CloudWatch par workflow',
            'Télémétrie de coût par feature pour l’ingénierie et la finance',
          ],
        },
        {
          title: 'Data Lakehouse sur AWS',
          description:
            'Un lakehouse à tables ouvertes sur Amazon S3 qui donne aux analystes, data scientists et équipes produit la même source de vérité gouvernée, sans lock-in fournisseur.',
          details:
            'Nous concevons des lakehouses medallion sur S3 avec Apache Iceberg, construisons l’ingestion via AWS Glue ou Kinesis Firehose et exécutons les transformations en dbt sur Athena ou EMR. Glue Data Quality applique des règles ligne et table, Lake Formation accorde des permissions par colonne et le serving en aval va vers Redshift Serverless pour le BI et Quicksight pour le self-service.',
          outcomes: [
            'Tables Iceberg sur Amazon S3 avec architecture medallion',
            'Ingestion Glue ou Kinesis pour batch et streaming',
            'Projet dbt avec tests documentés et checks CI',
            'Règles Glue Data Quality reliées aux alertes',
            'Politiques Lake Formation d’accès par colonne',
            'Couches de serving Redshift Serverless et Quicksight',
          ],
        },
        {
          title: 'GenAI sur Amazon Bedrock',
          description:
            'Des assistants RAG sur Amazon Bedrock qui restent ancrés sur votre contexte d’entreprise, sont mesurés avant chaque release et ne sortent pas de votre VPC.',
          details:
            'Nous choisissons le bon modèle Bedrock (Claude, Llama ou Titan), construisons le retrieval sur Amazon Kendra ou OpenSearch Serverless et ancrons les réponses sur des documents que vous possédez déjà dans S3, SharePoint ou Confluence. Bedrock Guardrails gère la safety, l’évaluation tourne sur un dataset golden qui s’enrichit et l’observabilité est câblée à CloudWatch et OpenTelemetry.',
          outcomes: [
            'Architecture RAG de référence sur Amazon Bedrock et Kendra',
            'Bedrock Guardrails configuré pour contenu et PII',
            'Endpoints PrivateLink maintenant le trafic dans la VPC',
            'Harness d’évaluation avec golden dataset versionné',
            'Dashboards CloudWatch de tokens, latence et grounding',
            'Plan de rollout production avec adoption par phases',
          ],
        },
        {
          title: 'FinOps et ingénierie de coût',
          description:
            'Un programme continu de coût AWS, pas un audit ponctuel. Gouvernance de tagging, stratégie de commitments et narratif exécutif mensuel.',
          details:
            'Nous établissons le baseline avec Cost and Usage Reports, construisons des dashboards dans Cost Explorer et QuickSight et transformons les recommandations Compute Optimizer en pull requests, pas en slides. La couverture Savings Plans est calibrée sur la charge prévue, S3 lifecycle et Intelligent-Tiering passent sur les buckets principaux et une revue FinOps mensuelle produit un narratif exécutif.',
          outcomes: [
            'CUR ingéré dans une couche d’analytique de coût',
            'Politique de tagging appliquée via SCP et checks CI',
            'Recommandations Compute Optimizer transformées en PR',
            'Plan de couverture Savings Plans et Reserved Instances',
            'S3 lifecycle et Intelligent-Tiering sur les principaux buckets',
            'Revue FinOps mensuelle avec narratif exécutif',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Pourquoi nos clients nous choisissent',
      title: 'Les problèmes difficiles que nous résolvons sur AWS',
      description:
        'Les patterns récurrents que nous démêlons sur Amazon Web Services et la façon dont nous abordons chacun.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Comptes AWS en sprawl sans structure',
          solution:
            'Nous consolidons les comptes dans une landing zone Control Tower avec Organizations, SCP, logging centralisé et Identity Center : propre, auditable, scalable.',
        },
        {
          challenge: 'Surprises de performance et de coût en production',
          solution:
            'Observabilité CloudWatch avec OpenTelemetry, right-sizing piloté par Compute Optimizer et cadence FinOps mensuelle mettent les surprises derrière vous.',
        },
        {
          challenge: 'Modernisation de monolithes en panne',
          solution:
            'Re-architecture en microservices sur EKS, découplage via SQS et EventBridge et conteneurisation avec Karpenter pour scaler vite sans coût qui dérape.',
        },
        {
          challenge: 'Data lakes et entrepôts déconnectés',
          solution:
            'Lakehouse Iceberg sur S3 : Athena, Redshift et Quicksight partagent la même source gouvernée avec portes Glue Data Quality.',
        },
        {
          challenge: 'Posture de sécurité en deçà des attentes auditeur',
          solution:
            'Nous durcissons les parcs AWS avec GuardDuty, Security Hub, règles Config, IAM Access Analyzer et patterns KMS alignés sur SOC 2, HIPAA et PCI-DSS.',
        },
        {
          challenge: 'PoC IA qui n’atteignent jamais la production',
          solution:
            'Nous diplômons les PoC Bedrock et SageMaker en production avec harness d’évaluation, réseau PrivateLink, garde-fous et releases pilotées par CI/CD.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Engagements réels dans l’écosystème AWS',
      description:
        'Implémentations représentatives livrées par notre pratique AWS pour des équipes SaaS, régulées et digital-native.',
      items: [
        {
          title: 'Sortie VMware d’une Fintech vers AWS',
          description:
            'Replatform d’une fintech paiements de VMware vers AWS avec Control Tower, EKS et Aurora Postgres en 14 semaines, sans downtime client.',
        },
        {
          title: 'SaaS multi-tenant sur EKS',
          description:
            'Modèle d’isolement SaaS multi-tenant sur EKS avec autoscaling Karpenter, Argo CD et attribution de coût par tenant.',
        },
        {
          title: 'Plateforme logistique serverless',
          description:
            'Plateforme logistique événementielle sur Lambda + EventBridge + DynamoDB servant 4 M d’événements quotidiens en moins de 100 ms.',
        },
        {
          title: 'Copilote support sur Bedrock',
          description:
            'Copilote support client sur Amazon Bedrock avec retrieval Kendra et audit complet pour un assureur.',
        },
        {
          title: 'Lakehouse Iceberg pour le retail',
          description:
            'Lakehouse Iceberg sur S3 avec dbt + Athena et Redshift Serverless réduisant la dépense analytique de 55 % vs entrepôt legacy.',
        },
        {
          title: 'Parc santé HIPAA-ready',
          description:
            'Durcissement d’un environnement AWS aux contrôles HIPAA avec Macie, KMS, GuardDuty et plan BCDR éprouvé sur deux régions.',
        },
        {
          title: 'Ingestion de données IoT',
          description:
            'Pipeline IoT Core + Kinesis Firehose ingérant plus d’1 milliard d’événements de télémétrie par mois avec dashboards basse latence sur Timestream.',
        },
        {
          title: 'Programme FinOps AWS',
          description:
            'Programme FinOps continu avec couverture Savings Plans, gouvernance de tagging et narratif exécutif mensuel de coût.',
        },
      ],
    },
    impact: {
      badge: 'Impact du partenariat',
      title: 'Les résultats que notre travail AWS génère de façon constante',
      description:
        'Un instantané des améliorations opérationnelles et financières dont nous prenons la responsabilité dans chaque engagement AWS.',
      metrics: [
        {
          label: 'Baisse de facture AWS',
          description:
            'Réduction typique de run-rate sous 90 jours quand notre programme FinOps est posé sur un parc AWS migré.',
        },
        {
          label: 'Migration médiane',
          description:
            'Durée médiane de la découverte MAP à la première vague de production pour des migrations mid-market vers Control Tower.',
        },
        {
          label: 'SLA cible',
          description:
            'Cible de disponibilité par défaut pour nos architectures multi-AZ de production, validée par chaos et game-days DR.',
        },
        {
          label: 'Latence API',
          description:
            'Latence p99 typique livrée sur des API publiques serverless ou EKS après notre passe d’ingénierie de performance.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Partenaire Google Cloud | BigQuery, Vertex AI, GKE et Anthos | Cogtix Solutions',
      description:
        'Cogtix est Google Cloud Partner et livre des plateformes de données BigQuery, l’industrialisation Vertex AI, des plateformes de conteneurs GKE et la modernisation Anthos pour des organisations data-led.',
    },
    hero: {
      eyebrow: 'Partenariat Google Cloud',
      title: 'Innovation pilotée par la donnée sur Google Cloud',
      highlight: 'Google Cloud',
      description:
        'En tant que Google Cloud Partner, nous aidons les organisations data-led à bâtir leur domaine analytique sur BigQuery, industrialiser l’IA sur Vertex AI et moderniser les conteneurs sur GKE, le tout sur une plateforme gouvernée et FinOps-aware.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Focus Data & Analytics et Cloud Infrastructure',
      cta: 'Parler à un expert de l’alliance',
      exploreCapabilities: 'Explorer les capacités',
      activePartnerBadge: 'Partenaire Actif',
      highlights: [
        'Google Cloud Partner avec focus Data & Analytics et Cloud Infrastructure',
        'Plateformes de données BigQuery-first avec dbt, Dataform et modèles sémantiques Looker',
        'Workflows Vertex AI prêts pour la prod avec monitoring de modèles et gouvernance',
        'Modernisation GKE et Anthos avec réseau zero-trust et policy-as-code',
      ],
      statLabels: ['Projets GCP', 'Certifications GCP', 'SLO de Pipeline'],
    },
    credentials: {
      badge: 'Crédibilité du partenariat',
      title: 'Une pratique Google Cloud ancrée sur la donnée et l’industrialisation',
      description:
        'Une équipe d’ingénierie et d’analytique construite autour de BigQuery, Vertex AI, GKE et de la stack sécurité Google Cloud, avec des certifications par rôle dans chaque discipline.',
      certificationsTitle:
        'Certifications actives dans nos équipes de livraison',
      certificationsDescription:
        'Un instantané des certifications par rôle que nos ingénieurs, architectes et consultants détiennent actuellement.',
      competencies: [
        {
          title: 'Analytique de données sur BigQuery',
          description:
            'Entrepôts BigQuery avec partitionnement, clustering et BI Engine couplés à dbt ou Dataform et à des couches sémantiques Looker.',
        },
        {
          title: 'Vertex AI et GenAI',
          description:
            'Pipelines Vertex AI de bout en bout, déploiements Model Garden, copilotes ancrés sur Gemini et industrialisation soutenue par Feature Store.',
        },
        {
          title: 'GKE et Anthos',
          description:
            'Clusters GKE durcis avec Autopilot, Workload Identity, Config Sync, Anthos Service Mesh et Binary Authorization pour charges compliant.',
        },
        {
          title: 'Serverless et Cloud Run',
          description:
            'Services événementiels sur Cloud Run, Cloud Functions, Workflows et Eventarc avec fan-out Pub/Sub et patterns idempotents.',
        },
        {
          title: 'Données en streaming',
          description:
            'Pipelines temps réel sur Pub/Sub et Dataflow avec Apache Beam, sémantique exactly-once et latence sub-seconde vers BigQuery et Bigtable.',
        },
        {
          title: 'Sécurité et gouvernance',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK et DLP conçus pour des parcs SOC 2, HIPAA et RGPD-ready.',
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
      badge: 'Ce que nous livrons',
      title: 'Une pratique de livraison complète sur Google Cloud',
      description:
        'Six mouvements d’ingénierie que nous exécutons en boucle pour des clients modernisant sur Google Cloud : des plateformes BigQuery à Vertex AI en production.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Plateforme de données BigQuery',
          description:
            'Un domaine analytique BigQuery unique en lequel chaque équipe a confiance. Tables curées, modèles sémantiques certifiés dans Looker et une vraie histoire de coût pour chaque requête.',
          details:
            'Nous concevons des tables BigQuery partitionnées et clusterisées, activons BI Engine pour les requêtes critiques et utilisons BigLake ou tables externes Iceberg pour garder le stockage ouvert. Les transformations sont modélisées dans dbt avec portes CI et tests, la logique sémantique vit dans Looker (ou Looker Modeler) avec row-level security et une stratégie de réservation de slots maintient la performance prévisible pour tous.',
          outcomes: [
            'Tables BigQuery partitionnées et clusterisées pour les requêtes clés',
            'Accélération BI Engine activée sur les dashboards critiques',
            'Tables externes BigLake ou Iceberg pour stockage ouvert',
            'Projet dbt avec portes CI, tests et lineage',
            'Modèle sémantique Looker avec row-level security',
            'Stratégie de réservation et d’autoscaling de slots avec garde-fous',
          ],
        },
        {
          title: 'Industrialisation Vertex AI',
          description:
            'Une pratique Vertex AI qui transforme les notebooks en charges de production gouvernées, avec feature stores, monitoring et Gemini ancré sur vos données.',
          details:
            'Nous concevons des pipelines Vertex AI pour l’entraînement, l’évaluation et le déploiement, construisons une couche de serving adossée à Feature Store pour des prédictions online basse latence et activons Model Monitoring pour les alertes de drift et de skew. Pour la GenAI, nous ancrons Gemini via Vertex AI Search et Document AI, évaluons avec des datasets golden et livrons un processus de release que votre équipe plateforme peut exécuter.',
          outcomes: [
            'Pipelines Vertex AI pour entraînement, eval et déploiement',
            'Feature Store avec serving online et offline',
            'Model Monitoring pour drift, skew et attribution',
            'Retrieval Vertex AI Search ancré sur des documents d’entreprise',
            'Harness d’évaluation avec datasets golden versionnés',
            'Runbook de release exécutable en autonomie par votre MLOps',
          ],
        },
        {
          title: 'Plateformes GKE et Anthos',
          description:
            'Une plateforme GKE Autopilot compliance-ready sur laquelle vos ingénieurs peuvent déployer en sécurité. Identité, politique et intégrité supply-chain câblées par nous.',
          details:
            'Nous construisons des clusters GKE Autopilot privés avec Workload Identity Federation, Binary Authorization pour la signature d’images et Config Sync avec Policy Controller pour l’application de politique GitOps. Le trafic est-ouest est gouverné par Anthos Service Mesh, l’edge par Cloud Armor et Cloud Load Balancing et les secrets sortent de Secret Manager via External Secrets Operator.',
          outcomes: [
            'Cluster GKE Autopilot privé avec Workload Identity',
            'Binary Authorization imposant des images signées',
            'Config Sync et Policy Controller pour la politique GitOps',
            'Anthos Service Mesh pour le trafic est-ouest et mTLS',
            'Cloud Armor et load balancing à l’edge',
            'External Secrets Operator branché sur Secret Manager',
          ],
        },
        {
          title: 'Streaming et données temps réel',
          description:
            'Pipelines sub-seconde sur Pub/Sub et Dataflow qui remplacent le batch nocturne par de la donnée toujours fraîche, avec sémantique exactly-once et gestion des arrivées tardives.',
          details:
            'Nous concevons des pipelines Apache Beam sur Dataflow avec processing exactly-once, fenêtres d’arrivée tardive et évolution de schéma gérée par contrats Schema Registry. Les données chaudes atterrissent dans Bigtable pour le serving et dans BigQuery pour l’analytique, les dead-letter queues capturent les messages corrompus et les dashboards Cloud Monitoring suivent débit, latence et fraîcheur de bout en bout.',
          outcomes: [
            'Topics Pub/Sub avec contrats schema registry versionnés',
            'Pipelines Apache Beam sur Dataflow avec exactly-once',
            'Fenêtres d’arrivée tardive et dead-letter queues',
            'Couche chaude Bigtable plus sink analytique BigQuery',
            'Dashboards Cloud Monitoring de fraîcheur et lag',
            'Outillage de replay pour back-fills et migrations de schéma',
          ],
        },
        {
          title: 'Cloud Run et serverless',
          description:
            'Services entièrement managés sur Cloud Run qui scalent à zéro, se déploient depuis votre repo et restent observables via Cloud Trace, Cloud Profiler et Cloud Logging.',
          details:
            'Nous construisons des services Cloud Run réglés pour la concurrence, en façade d’API Gateway ou Load Balancing, orchestrés par Workflows pour les process multi-étapes et routés par Eventarc pour les patterns événementiels. L’état persistant vit dans Cloud SQL ou Spanner avec PITR et réplicas, et chaque service livre Cloud Trace, Cloud Profiler et CI/CD via Cloud Deploy.',
          outcomes: [
            'Services Cloud Run avec configurations réglées pour la concurrence',
            'Orchestrations Workflows pour process multi-étapes',
            'Routage Eventarc pour les patterns événementiels',
            'Couche de données Cloud SQL ou Spanner avec PITR et réplicas',
            'Cloud Trace et Cloud Profiler activés par défaut',
            'CI/CD via Cloud Deploy avec rollout progressif',
          ],
        },
        {
          title: 'FinOps et ingénierie de coût GCP',
          description:
            'Un programme continu de coût Google Cloud bâti sur l’économie BigQuery, la stratégie CUD et une politique de tagging à laquelle finance et ingénierie font confiance.',
          details:
            'Nous établissons le baseline via Billing Export vers BigQuery, calibrons les réservations de slots BigQuery et l’autoscaling sur la charge prévue, appliquons les Committed-Use Discounts là où la couverture est sûre et déclenchons lifecycle GCS et transitions de classe sur les buckets clés. Une revue FinOps mensuelle produit un narratif exécutif et un backlog de fixes pour le sprint suivant.',
          outcomes: [
            'Billing Export ingéré dans une couche de coût requêtable',
            'Réservations de slots BigQuery calibrées sur la charge prévue',
            'Plan de couverture CUD revu chaque trimestre',
            'Lifecycle GCS et transitions de classe sur les buckets clés',
            'Politique de labels et tagging appliquée via org policies',
            'Revue FinOps mensuelle avec narratif exécutif',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Pourquoi nos clients nous choisissent',
      title: 'Les problèmes difficiles que nous résolvons sur Google Cloud',
      description:
        'Patterns récurrents que nous démêlons sur Google Cloud et la façon dont nous abordons chacun.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Analytique sans confiance entre les équipes',
          solution:
            'BigQuery, Dataform et Looker établissent une couche sémantique unique avec tests style dbt et lineage, pour que chaque dashboard réponde depuis la même source.',
        },
        {
          challenge: 'Expériences ML qui ne passent jamais en production',
          solution:
            'Vertex AI Pipelines, Feature Store et Model Monitoring diplôment les notebooks en production gouvernée et observable avec portes d’évaluation.',
        },
        {
          challenge: 'Pipelines de données lents et seulement batch',
          solution:
            'Pub/Sub avec Dataflow et Bigtable remplace le batch nocturne par du streaming exactly-once et une fraîcheur à la minute dans l’entrepôt.',
        },
        {
          challenge: 'Plateformes de conteneurs avec drift de politique',
          solution:
            'Anthos Config Sync et Policy Controller appliquent la politique GitOps sur les flottes GKE ; Binary Authorization stoppe les images non signées au déploiement.',
        },
        {
          challenge: 'Exposition de données sensibles et écarts de conformité',
          solution:
            'VPC Service Controls, DLP, CMEK et Security Command Center créent un périmètre défendable aligné sur SOC 2, HIPAA et RGPD.',
        },
        {
          challenge: 'Coûts BigQuery et GCP imprévisibles',
          solution:
            'Réservations BigQuery avec autoscaling de slots, CUD, lifecycle GCS et cadence FinOps pilotée par tagging lissent la dépense mois après mois.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Engagements réels dans l’écosystème Google Cloud',
      description:
        'Implémentations représentatives livrées par notre pratique Google Cloud pour des équipes data-led, régulées et digital-native.',
      items: [
        {
          title: 'Lakehouse BigQuery retail',
          description:
            'Unification des données retail dans un lakehouse BigQuery avec BigLake, transformations dbt et dashboards Looker pour 2 000+ magasins.',
        },
        {
          title: 'Rollout Vertex AI santé',
          description:
            'Industrialisation de modèles cliniques prédictifs sur Vertex AI avec VPC Service Controls HIPAA-aligned et flux CMEK.',
        },
        {
          title: 'Plateforme SaaS GKE Autopilot',
          description:
            'Plateforme SaaS multi-tenant sur GKE Autopilot avec Workload Identity, Anthos Service Mesh et Argo CD GitOps.',
        },
        {
          title: 'Personnalisation en streaming',
          description:
            'Pipeline Pub/Sub vers Dataflow vers Bigtable servant des recommandations de personnalisation sous 100 ms sur web et mobile.',
        },
        {
          title: 'Copilote ancré Gemini',
          description:
            'Copilote de support propulsé par Gemini ancré sur Cloud Storage et BigQuery avec harness d’évaluation.',
        },
        {
          title: 'Transcodage média sur Cloud Run',
          description:
            'Pipeline de transcodage média sur Cloud Run et Workflows scalant 10x en pic sans sur-provisionnement.',
        },
        {
          title: 'Activation Looker FinTech',
          description:
            'Modèle sémantique LookML pour une plateforme FinTech, remplaçant 40+ workbooks Tableau legacy par des dashboards gouvernés.',
        },
        {
          title: 'Modernisation hybride Anthos',
          description:
            'Modernisation d’un parc industriel hybride avec clusters Anthos on-prem et GKE dans GCP sous un plan de politique unique.',
        },
      ],
    },
    impact: {
      badge: 'Impact du partenariat',
      title: 'Les résultats que notre travail Google Cloud génère de façon constante',
      description:
        'Un instantané des améliorations opérationnelles et financières dont nous prenons la responsabilité dans chaque engagement Google Cloud.',
      metrics: [
        {
          label: 'Performance des requêtes',
          description:
            'Accélération typique des requêtes BigQuery après notre passe de partitionnement, clustering, vues matérialisées et BI Engine.',
        },
        {
          label: 'Réduction coût GCP',
          description:
            'Économies typiques de run-rate sous 90 jours après la mise en place de notre programme FinOps : réservations, CUD, lifecycle et tagging.',
        },
        {
          label: 'Fraîcheur des données',
          description:
            'Latence typique de bout en bout sur nos pipelines streaming Pub/Sub vers Dataflow vers BigQuery, en remplacement des jobs nocturnes legacy.',
        },
        {
          label: 'PoC ML à la production',
          description:
            'Délai médian pour faire passer une preuve de concept Vertex AI à un rollout production gouverné, évalué et monitoré.',
        },
      ],
    },
  },
}

export const frPartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Alliances cloud stratégiques | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix opère des partenariats cloud certifiés sur Microsoft, AWS et Google Cloud. Découvrez nos pratiques Azure, AWS et GCP avec FinOps, sécurité et SRE intégrés.',
  },
  hero: {
    eyebrow: 'Alliances stratégiques',
    title: 'Bâtir sur les plateformes cloud les plus fiables du monde',
    highlight: 'plateformes cloud',
    description:
      'Nos ingénieurs, architectes et consultants sont profondément certifiés sur Microsoft, AWS et Google Cloud. Choisissez votre plateforme : nous apporterons le playbook, les certifications et le muscle de livraison.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Data & AI · Business Applications',
      description:
        'Modernisez sur Azure, passez Power Platform à l’échelle en sécurité et livrez des expériences Copilot gouvernées sur .NET, Microsoft 365 et Dynamics 365.',
      highlights: [
        'Migrations Azure pilotées par le Cloud Adoption Framework',
        'Centre d’Excellence Power Platform',
        'Assistants Azure OpenAI en production',
      ],
      statLabels: ['Projets MS', 'Certifications', 'Expérience'],
      cta: 'Découvrir notre pratique Microsoft',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migrations · EKS · Serverless · Bedrock',
      description:
        'Construisez des charges Well-Architected sur Amazon Web Services. Nous montons des landing zones, plateformes EKS, copilotes Bedrock et modèles de coût FinOps qui scalent.',
      highlights: [
        'Vagues de migration alignées MAP',
        'Plateformes GitOps EKS et Argo CD',
        'Copilotes RAG sur Bedrock',
      ],
      statLabels: ['Migrations AWS', 'Certifications', 'Économie Moyenne'],
      cta: 'Découvrir notre pratique AWS',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Innovation pilotée par la donnée sur Google Cloud. Nous bâtissons des lakehouses BigQuery, des charges Vertex AI industrialisées et des plateformes de conteneurs modernisées sur GKE Autopilot.',
      highlights: [
        'Plateformes sémantiques BigQuery et Looker',
        'Pipelines Vertex AI en production',
        'GKE Autopilot avec politique GitOps',
      ],
      statLabels: ['Projets GCP', 'Certifications', 'SLO de Pipeline'],
      cta: 'Découvrir notre pratique Google Cloud',
    },
  },
  whyUs: {
    eyebrow: 'Pourquoi Cogtix',
    title: 'Une équipe multi-cloud appuyée par une vraie profondeur d’ingénierie',
    description:
      'Nous ne nous contentons pas d’aligner des certifications. Nous opérons chaque jour, en production, les plateformes que nous recommandons, chez des clients régulés et digital-native.',
    items: [
      {
        title: 'Architectes sur chaque engagement',
        description:
          'Chaque projet partenaire associe un architecte principal à un squad de livraison : les décisions de conception sont seniors et réutilisées partout.',
      },
      {
        title: 'Livraison alignée aux frameworks',
        description:
          'Nous exécutons contre Azure CAF, AWS Well-Architected et le Google Cloud Architecture Framework, pilier par pilier, revue par revue.',
      },
      {
        title: 'FinOps dès le premier jour',
        description:
          'Modélisation de coût, gouvernance de tagging et narratif exécutif mensuel font partie de l’engagement, pas d’un add-on.',
      },
      {
        title: 'Sécurité et conformité intégrées',
        description:
          'Les contrôles SOC 2, HIPAA, PCI-DSS et RGPD sont des architectures de référence que nous appliquons, pas des documents boilerplate.',
      },
      {
        title: 'Accélérateurs réutilisables',
        description:
          'Landing zones, harness d’évaluation GenAI, kits CoE Power Platform et modules IaC accélèrent la livraison sans lock-in.',
      },
      {
        title: 'Prêts pour le co-sell',
        description:
          'Équipes partenaires actives chez Microsoft, AWS et Google Cloud, pour transacter via les marketplaces et accélérer l’achat.',
      },
    ],
  },
}
