import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const frTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'Nous associons les modèles de point à des frameworks d’orchestration afin que prompts, outils et retrieval se comportent de façon prévisible en production. Avant toute exposition client, nous alignons budgets de latence, garde-fous et batteries d’évaluation sur votre profil de risque.',
        outcomes: four(
          'Note de choix de modèles avec arbitrages coût, latence et qualité',
          'Patterns production pour RAG, appels d’outils et sorties structurées',
          'Régressions et red team intégrés à votre processus de release',
          'Gestion et rotation des clés alignées sur votre référentiel IAM',
        ),
      },
      {
        overview:
          'Les bibliothèques ML classiques et le deep learning couvrent le scoring tabulaire, la vision par ordinateur et les jobs d’entraînement massifs. Nous standardisons les environnements pour que les expériences deviennent proprement des pipelines planifiés avec traçabilité.',
        outcomes: four(
          'Modèles d’entraînement réutilisables avec dépendances épinglées',
          'Pipelines de features compatibles avec votre entrepôt ou lac',
          'Suivi d’expériences et fiches modèle pour chaque candidat prod',
          'Profils CPU et GPU dimensionnés sur vos fenêtres batch réelles',
        ),
      },
      {
        overview:
          'Les plateformes ML managées sur AWS, Azure et Google Cloud offrent entraînement et serving élastiques sans charge inutile. Nous concevons landing zones, réseau et quotas pour que les équipes avancent vite sans briser la gouvernance.',
        outcomes: four(
          'Patterns de landing zone pour notebooks, entraînement et endpoints',
          'Connectivité privée entre stockages de données et jobs d’entraînement',
          'Quotas, alertes budget et autoscaling calés sur vos courbes d’usage',
          'Runbooks de passation pour propriétaires plateforme et ingénieurs ML',
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark et Dask couvrent l’exploration ad hoc jusqu’aux transformations pétaoctet. Nous visons des jobs idempotents, une évolution de schéma maîtrisée et des replays reproductibles pour garder la confiance analytique quand les sources changent.',
        outcomes: four(
          'Guide partitionnement et layout fichiers pour grosses tables',
          'Contrats de schéma avec règles d’évolution documentées',
          'Outils de backfill et replay pour données en retard',
          'Plans de jobs soucieux des coûts avec observabilité à chaque étape',
        ),
      },
      {
        overview:
          'Conteneurs, Kubernetes, MLflow et FastAPI transforment les modèles en services fiables. Nous intégrons health checks, signaux d’autoscaling et chemins de rollback pour que les mises en production restent sereines même sous pic ou changement de modèle.',
        outcomes: four(
          'Images conteneur avec bases durcies et scan',
          'Manifestes Kubernetes ou Helm avec limites de ressources',
          'Patterns canary ou shadow pour mises à jour de modèles',
          'SLO latence, erreurs et fraîcheur avec routage d’alertes',
        ),
      },
      {
        overview:
          'Notebooks, magasins vectoriels et Redis soutiennent itération rapide et retrieval basse latence. Nous gardons la parité dev et prod pour éviter les surprises après promotion.',
        outcomes: four(
          'Checklist de promotion notebook vers pipeline',
          'Stratégie de taille et d’index vectoriel documentée',
          'Politiques Redis ou cache avec eviction et TTL guidés',
          'Kit d’onboarding pour bacs à sable locaux et partagés',
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'Nous concevons des fondations multi comptes sur AWS, Azure et Google Cloud avec propriété claire, garde-fous et visibilité des coûts. Les landing zones font hériter les nouvelles charges des socles de sécurité plutôt que de les recréer.',
        outcomes: four(
          'Topologie comptes ou abonnements avec responsabilités cartographiées',
          'Garde-fous réseau, chiffrement et journalisation de base',
          'Modèle de tagging et chargeback validé avec la finance',
          'Tableau de bord exécutif coût et risque',
        ),
      },
      {
        overview:
          'Kubernetes et les plateformes conteneur portent vos services critiques. Nous traitons upgrades, capacité et opérations jour deux pour des clusters patchés, observables et prêts pour des déploiements sans interruption.',
        outcomes: four(
          'Baseline cluster prod avec pools de nœuds et limites',
          'Livraison Helm ou GitOps avec chemins de promotion revus',
          'Pattern ingress, service mesh ou API gateway choisi et documenté',
          'Exercices upgrade et rollback capturés dans des runbooks',
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible et Puppet gardent l’infra reproductible et relue. Les modules sont testés comme le code applicatif pour détecter le drift tôt et garder des changements auditables.',
        outcomes: four(
          'Bibliothèque IaC modulaire avec exemples pour stacks courants',
          'Contrôles de politique sur chaque plan selon vos règles',
          'Tests automatisés des modules et parité d’environnements',
          'Backend d’état, verrouillage et modèle d’accès documentés',
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions et CircleCI raccourcissent le chemin du commit à la production. Les quality gates, validations et promotion d’artefacts sont explicites pour garder vitesse et contrôle.',
        outcomes: four(
          'Modèles de pipeline avec tests, scans et signature',
          'Matrice de promotion des environnements du dev à la prod',
          'Injection de secrets sans identifiants longue durée dans les dépôts',
          'Métriques de release comme lead time et taux d’échec des changements',
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK et Splunk donnent une vision partagée de la santé. Tableaux de bord, SLO et tracing sont liés aux parcours utilisateur réels, pas seulement aux métriques d’infra.',
        outcomes: four(
          'Tableaux signaux dorés par service critique',
          'Tracing distribué sur les parcours utilisateur principaux',
          'Structure des logs et rétention alignées conformité',
          'Runbooks astreinte reliés aux alertes à forte valeur',
        ),
      },
      {
        overview:
          'Fonctions managées, bases, stockage objet et CDN réduisent le travail non différenciant. Nous choisissons des primitives adaptées à votre trafic et vos contraintes de conformité, puis documentons failover et sauvegarde.',
        outcomes: four(
          'Matrice de choix de services avec arbitrages coût et ops',
          'Cibles sauvegarde, restauration et RPO ou RTO par datastore',
          'Stratégie CDN et cache edge pour assets statiques et dynamiques',
          'Revue FinOps avec right sizing et conseils de réservations',
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'Le .NET moderne offre des APIs haute performance, du temps réel et des clients multi plateformes sans renoncer aux patterns enterprise. Nous alignons structure de solution, tests et déploiement sur vos pratiques ALM.',
        outcomes: four(
          'Structure de solution de référence pour APIs, workers et fronts',
          'Contrats OpenAPI et tests d’intégration en CI',
          'Baseline performance et profil de charge sur chemins chauds',
          'Pipeline de déploiement vers Azure ou cibles hybrides',
        ),
      },
      {
        overview:
          'Les services Azure compute, intégration et identité connectent les applications à l’écosystème en sécurité. Nous insistons sur le réseau moindre privilège, identités managées et construction répétable des environnements.',
        outcomes: four(
          'Schéma d’architecture avec sous réseaux et private endpoints',
          'Usage d’identités managées plutôt que secrets statiques quand c’est possible',
          'Patterns autoscale et résilience pour App Service ou Functions',
          'Garde-fous coût avec budgets et alertes d’anomalies',
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse et Data Factory ancrent analytique et charges transactionnelles. Nous concevons pour reprise, chiffrement et coût de requête prévisible avant que les jeux de données ne deviennent difficiles à corriger.',
        outcomes: four(
          'Modèle de données et stratégion d’indexation revus par les pairs',
          'Preuves sauvegarde, redondance géo et tests de restore',
          'Pipelines d’ingestion avec supervision et chemins de quarantaine',
          'Modèle d’accès avec sécurité au niveau ligne si nécessaire',
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI et Dataverse laissent les directions avancer vite avec gouvernance. Nous posons des garde-fous pour que le développement citoyen innove sans risque à côté du code pro.',
        outcomes: four(
          'Stratégie d’environnements séparant dev, test et production',
          'Politiques DLP et connecteurs alignées revue sécurité',
          'Bibliothèque de composants réutilisables pour patterns fréquents',
          'Playbook opérationnel pour support et propriété',
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep et Application Insights ferment la boucle de l’idée à la prod observable. La télémétrie relie releases aux résultats business et fiabilité.',
        outcomes: four(
          'Modèles CI et CD avec validations et gestion des secrets',
          'Infrastructure as code pour ressources Azure critiques',
          'Tableaux de bord santé des builds, déploiements et erreurs live',
          'Stratégie de tagging des releases pour audits et rollbacks',
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph et Dynamics étendent les flux là où les équipes travaillent déjà. Les intégrations respectent consentement, quotas et cycles de vie pour rester stables.',
        outcomes: four(
          'Conception d’intégration avec permissions Graph moindre privilège',
          'Manifestes d’apps Teams ou SharePoint et guide de déploiement',
          'Supports de conduite du changement pour admins et utilisateurs',
          'Supervision consommation webhooks et quotas API',
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce et Dynamics ancrent de nombreux cœurs métier. Nous traitons les capacités package comme première classe et n’étendons que là où la différenciation compte, pour garder des upgrades réalistes.',
        outcomes: four(
          'Analyse fit gap avec configuration avant code sur mesure',
          'Stratégie de release alignée sur le rythme éditeur et fenêtres noires',
          'Contrats d’intégration pour systèmes satellites documentés',
          'Bibliothèque de tests couvrant chemins financiers ou opérationnels critiques',
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism et moteurs de workflow retirent le travail répétitif à l’échelle. Les bots ont propriété, supervision et gestion d’exceptions comme tout autre service prod.',
        outcomes: four(
          'Carte des processus avec candidats automation priorisés par ROI',
          'Pattern coffre d’identifiants et séparation des fonctions',
          'Supervision santé bots, files et exceptions métier',
          'Backlog d’amélioration continue alimenté par métriques ops',
        ),
      },
      {
        overview:
          'Java, .NET, Node et Python alimentent services sur mesure et couches d’intégration. Nous standardisons style d’API, gestion d’erreurs et observabilité pour que les stacks mixtes se comportent comme une plateforme.',
        outcomes: four(
          'Modèle de service avec auth, logs et métriques intégrés',
          'Catalogue d’API avec versioning et politique de dépréciation',
          'Banc de tests performance pour scénarios transactionnels de pic',
          'Scan sécurité en CI pour dépendances et conteneurs',
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres et Cassandra correspondent à des profils de cohérence et d’échelle différents. Nous documentons rétention, partitionnement et reprise pour garder les données disponibles sous charge.',
        outcomes: four(
          'Conception de schéma avec stratégie de croissance et archivage',
          'Calendrier de vérification des sauvegardes avec preuves stockées',
          'Plan de tuning pour les dix requêtes les plus coûteuses',
          'Revues d’accès pour rôles base de données privilégiés',
        ),
      },
      {
        overview:
          'Les intégrations type MuleSoft, Kafka, Spring Cloud et Lambda déplacent événements et charges de façon fiable. Idempotence, ordre et dead letter sont explicites dès le premier jour.',
        outcomes: four(
          'Catalogue de topics avec propriétaires et schémas',
          'Procédures de replay pour messages toxiques ou mauvais déploiements',
          'SLO latence et débit par chemin d’intégration',
          'Playbook multi équipes pour triage incident',
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps et ServiceNow alignent delivery et opérations. La traçabilité exigence vers release soutient audit et analyse de cause plus rapides.',
        outcomes: four(
          'Configuration des flux mappée sur votre SDLC',
          'Tableaux prédictibilité delivery et qualité',
          'Liens CMDB ou actifs pour items de configuration critiques',
          'Modèle de revue post incident relié au suivi des actions',
        ),
      },
    ],
  },
  data: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift et Synapse portent une analytique gouvernée à l’échelle. Nous concevons l’entrepôt autour des patterns de requête, de l’accès par rôle et du contrôle des dépenses pour que l’insight ne dépasse pas le budget.',
        outcomes: four(
          'Modèle logique avec marts certifiés et propriétaires',
          'Modèle d’accès par rôle et ligne revu avec la sécurité',
          'Gestion des charges ou dimensionnement warehouse calé sur les pics',
          'Supervision des coûts avec alertes sur croissance inattendue',
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming et Kinesis transforment les événements en décisions quasi temps réel. Nous ingénierie backpressure, replay et compatibilité de schéma pour des flux fiables.',
        outcomes: four(
          'Conception topics avec décisions rétention et compaction',
          'Jobs stream avec récupération d’état et checkpoints vérifiés',
          'Lag consommateurs et fraîcheur visibles sur tableaux de bord',
          'Chemin DR testé pour perte broker ou région',
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend et Informatica orchestrent charges batch et incrémentales avec tests. Les dépendances sont explicites pour faire remonter les échecs tôt et montrer l’impact downstream.',
        outcomes: four(
          'Catalogue DAG ou jobs avec SLA et propriété par pipeline',
          'Tests de données sur fraîcheur, volume et relations clés',
          'Flux de promotion dev vers prod avec revue par les pairs',
          'Linéage des tables sources vers métriques publiées',
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg et Hudi sur stockage objet offrent formats ouverts avec garanties ACID. Compaction, partitionnement et accès sont réglés pour garder des tables rapides quand les données grossissent.',
        outcomes: four(
          'Choix de format de table documenté avec notes de migration',
          'Stratégie partition et Z order pour scans lourds',
          'Politiques d’accès intégrées au catalogue',
          'Jobs housekeeping petits fichiers et snapshots',
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres et MongoDB couvrent grosses transformations, documents flexibles et charges mixtes. Nous alignons calcul et localité stockage et comportement spill pour des jobs dans des fenêtres prévisibles.',
        outcomes: four(
          'Dimensionnement cluster ou pools basé sur profils mesurés',
          'Layout stockage pour tiers chaud, tiède et froid',
          'Chiffrement et rotation des clés validés par magasin',
          'Plan de capacité avec jalons de revue trimestrielle',
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus et ELK ferment la boucle qualité de données et santé des pipelines. Les alertes sont liées à l’impact business, pas seulement au bruit infra.',
        outcomes: four(
          'Règles qualité sur jeux critiques avec escalade propriétaires',
          'Logs et métriques unifiés pour échecs pipeline',
          'Contrôles synthétiques sur tableaux de bord ou APIs publiées',
          'Rétros incidents qui nourrissent règles et documentation',
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'Ce que nous livrons avec cette stack',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch et InVision gardent les livrables design structurés et partageables. Bibliothèques, nommage et versioning réduisent la dérive entre designers et ingénierie.',
        outcomes: four(
          'Bibliothèque de composants avec notes d’usage et exemples à faire ou éviter',
          'Organisation des fichiers qui scale entre squads et produits',
          'Conventions d’export et handoff convenues avec l’ingénierie',
          'Annotations accessibilité sur les patterns sensibles',
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure et Marvel valident les parcours avant que le code ne coûte cher. Nous lions prototypes à plans de test et métriques de succès pour montrer des preuves, pas seulement des maquettes.',
        outcomes: four(
          'Parcours cliquables couvrant cas principaux et limites',
          'Scripts de tests utilisateur liés aux versions de prototype',
          'Notes motion et micro interaction pour implémentation',
          'Journal de décisions sur ce qui change après retours',
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar et Amplitude relient signaux qualitatifs et comportement quantitatif. Le rythme de recherche est planifié pour que les insights arrivent quand les choix roadmap restent ouverts.',
        outcomes: four(
          'Plan de recherche avec objectifs, audience et calendrier',
          'Dépôt d’insights consultable sans interroger l’équipe',
          'Tableaux entonnoirs, rétention et adoption de fonctionnalités',
          'Backlog priorisé de correctifs lié à la sévérité des preuves',
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React et Next.js livrent des surfaces rapides et accessibles. Structure sémantique, budgets de performance et amélioration progressive gardent des expériences résilientes.',
        outcomes: four(
          'Structure sémantique et ordre des titres validés',
          'Budget performance avec CI sur régressions',
          'Comportement responsive testé sur matrice d’appareils réels',
          'Métadonnées SEO et partage revues sur modèles clés',
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap et Ant Design accélèrent l’UI quand les équipes veulent des systèmes opinionated. Nous alignons tokens, thèmes et APIs de composants sur marque et accessibilité.',
        outcomes: four(
          'Package d’extension de thème avec tokens marque appliqués',
          'Catalogue Storybook ou équivalent pour UI réutilisable',
          'Contrôles clavier et lecteur d’écran sur composants partagés',
          'Notes de migration lors des montées de version majeures',
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira et Slack gardent discovery et delivery visibles. Rituels et documentation vivent là où les équipes travaillent déjà, ce qui bat des decks de process lourds pour l’adoption.',
        outcomes: four(
          'Modèles d’espaces pour ateliers et revues design',
          'Traçabilité des insights discovery vers épics Jira',
          'Canaux Slack ou Teams avec escalades claires',
          'Gouvernance légère que les équipes suivent vraiment',
        ),
      },
    ],
  },
}
