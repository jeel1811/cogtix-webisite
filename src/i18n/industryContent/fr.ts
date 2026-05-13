import type { IndustryContentByVariant } from './types'

export const frIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Services financiers',
      title: 'Logiciels nouvelle génération pour le BFSI',
      highlight: 'Services financiers',
      description:
        'Nous aidons banques, assureurs et fintechs à livrer des produits numériques sûrs, conformes et scalables. De la modernisation du core banking au trading algorithmique, nos équipes construisent les systèmes qui déplacent l’argent à grande échelle.',
      cta: 'Discuter de votre projet FinTech',
      statLabels: ['Plateformes FinTech', 'Disponibilité garantie', 'Conforme'],
    },
    features: {
      badge: 'Capacités principales',
      title: 'Solutions financières complètes',
      description:
        'Une offre d’ingénierie de bout en bout pour la banque retail et corporate, les paiements, la gestion de patrimoine, l’assurance et les marchés de capitaux.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Plateformes de banque digitale',
          description:
            'Expériences bancaires natives sur chaque appareil, avec la résilience et la sécurité exigées par les charges régulées.',
          details:
            'Nous concevons des plateformes omnicanales avec dashboards unifiés, parcours mobile-first, traitement temps réel et intégrations modulaires au core banking. Nos architectures de référence supportent déjà des millions de logins mensuels.',
          outcomes: [
            'Architecture omnicanale couvrant web, mobile et agence',
            'Baseline d’authentification avec biométrie, step-up et FIDO2',
            'APIs ledger et transactionnelles temps réel avec SLA',
            'Dashboards opérationnels pour fraude, support et produit',
            'Runbooks de hand-off pour SRE, conformité et ops',
          ],
        },
        {
          title: 'Solutions de traitement des paiements',
          description:
            'Passerelles, wallets et rails cross-border alignés PCI-DSS conçus pour le haut débit et un règlement prévisible.',
          details:
            'Notre pratique paiements couvre l’acceptation cartes, EMV, A2A, wallets et règlement blockchain, avec retries idempotents, comptabilité exactly-once et outils de réconciliation alignant finance, ops et engineering.',
          outcomes: [
            'Stratégie de tokenisation et coffre alignée PCI-DSS',
            'APIs de paiement idempotentes avec événements de réconciliation',
            'Connecteurs wallet, EMV et rails bancaires avec sandbox',
            'Reporting de règlement intégré au ledger financier',
            'Workflow chargeback et litiges avec piste d’audit',
          ],
        },
        {
          title: 'WealthTech et robo-advisors',
          description:
            'Plateformes de gestion patrimoniale combinant modèles quantitatifs et expériences clients intuitives pour retail et HNW.',
          details:
            'Nous construisons des moteurs de rebalancement, des modèles de profilage de risque, des copilotes IA pour conseillers et des dashboards consolidant custodians, brokers et données alternatives. Conformité, suitability et audit dès le premier sprint.',
          outcomes: [
            'Parcours suitability et KYC mappés aux régulateurs',
            'Moteur de rebalancement avec stratégies documentées',
            'Intégrations custodian et broker avec réconciliation',
            'Dashboards de reporting client web et PDF',
            'Outils copilote conseiller avec historique d’audit',
          ],
        },
        {
          title: 'Solutions InsurTech',
          description:
            'Expériences assurance de bout en bout, du devis au sinistre, avec une automatisation qui réduit les délais sans céder sur la gouvernance.',
          details:
            'Nous modernisons souscription, gestion de polices et sinistres avec scoring IA, RPA back-office, OCR et portails self-service pour assurés et courtiers, réduisant les cycles claims de 40 à 60%.',
          outcomes: [
            'APIs quote et bind intégrées au moteur de règles',
            'Souscription assistée IA avec revue humaine',
            'Workflow FNOL avec OCR et triage',
            'Portails self-service assurés, courtiers et experts',
            'Dashboards opérationnels loss ratio et SLA',
          ],
        },
        {
          title: 'Conformité et RegTech',
          description:
            'Plateformes KYC, AML et reporting automatisées qui font de la conformité un plan de contrôle continu.',
          details:
            'Nous intégrons vérification biométrique, screening sanctions et PEP, monitoring transactionnel, gestion de cas et pipelines de reporting réglementaire alignés GDPR, PSD2, FATCA et KYC/AML multi juridictions.',
          outcomes: [
            'Onboarding KYC et AML avec checks biométriques',
            'Pipelines de screening sanctions, PEP et adverse media',
            'Règles de monitoring transactionnel et triage d’alertes',
            'Gestion de cas analystes avec chaîne d’évidence',
            'Exports de reporting pour superviseurs locaux',
          ],
        },
        {
          title: 'Blockchain et smart contracts',
          description:
            'Solutions sur chaînes permissionnées et publiques pour tokenisation, règlement et pistes d’audit infalsifiables, sur infrastructure entreprise.',
          details:
            'Nos équipes blockchain conçoivent des produits DeFi, plateformes de tokenisation et pistes d’audit immuables sur Ethereum, Polygon et Hyperledger Fabric, avec custody, optimisation gas et hooks de conformité prêts pour l’usage institutionnel.',
          outcomes: [
            'Modèle de tokens et suite de smart contracts revus',
            'Pattern de custody intégré aux HSM ou MPC',
            'Réconciliation on-chain et core avec visibilité ops',
            'Outils pour ops, conformité et trésorerie',
            'Revue sécurité bridges, oracles et upgradabilité',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Défis sectoriels',
      title: 'Résoudre les problèmes les plus durs de la FinTech',
      description:
        'Nous éliminons la friction technologique qui freine les institutions financières pour que vos équipes se concentrent sur clients, produit et croissance.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Paysage réglementaire en évolution',
          solution:
            'Nous intégrons des moteurs de conformité automatisés, des pistes d’audit robustes et des bibliothèques de contrôles modulaires pour KYC, AML, GDPR et PSD2 directement dans la plateforme, transformant les nouvelles obligations en configuration plutôt qu’en refontes risquées.',
        },
        {
          challenge: 'Cyber menaces et fraude croissantes',
          solution:
            'Nous concevons architectures zero-trust, chiffrement de bout en bout et détection d’anomalies IA qui sécurisent les transactions, durcissent les APIs et remontent les comportements suspects en temps réel sans freiner les vrais clients.',
        },
        {
          challenge: 'Contraintes des systèmes legacy',
          solution:
            'Avec une approche strangler fig, nous enveloppons les cores legacy dans des APIs modernes, extrayons des fonctionnalités vers des microservices et migrons les données progressivement sans figer la roadmap.',
        },
        {
          challenge: 'Données client fragmentées',
          solution:
            'Nous déployons data lakes, plateformes client 360 et pipelines analytiques qui consolident banque, assurance et touchpoints digitaux pour des expériences omnicanales personnalisées et cohérentes.',
        },
        {
          challenge: 'Processus manuels inefficaces',
          solution:
            'Nous intégrons RPA, IDP et workflow automation dans l’origination, la souscription et les sinistres pour supprimer le travail répétitif et libérer les experts.',
        },
        {
          challenge: 'Règlements de paiement lents',
          solution:
            'Nous construisons des passerelles haut débit faible latence et des couches de règlement tokenisées qui permettent des transferts cross-border quasi instantanés, avec coûts et visibilité prévisibles.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Cas d’usage que nous traitons en services financiers',
      description:
        'Nous travaillons avec banques, fintechs et assureurs pour résoudre des défis technologiques concrets sur toute la chaîne BFSI.',
      items: [
        { title: 'Modernisation du core banking', description: 'Migration des monolithes vers des microservices cloud-native pour plus de flexibilité et des releases plus rapides.' },
        { title: 'Portails Open Banking', description: 'API gateways sécurisés et expériences développeur pour partager les données avec des tiers régulés.' },
        { title: 'Détection de fraude', description: 'Modèles ML qui scorent les transactions en temps réel et ajustent les seuils sans saturer les analystes.' },
        { title: 'Gestion de finances personnelles', description: 'Expériences mobiles agrégeant les comptes, catégorisant les dépenses et proposant des nudges personnalisés.' },
        { title: 'Origination de prêts automatisée', description: 'Plateformes de prêt digitales combinant données alternatives, scoring IA et déboursement en quelques minutes.' },
        { title: 'Plateformes de trading algorithmique', description: 'Architectures HFT à très basse latence avec CEP et backtesting reproductible.' },
        { title: 'Télématique assurance', description: 'Assurance basée sur l’usage avec données IoT et moteurs de pricing dynamiques.' },
        { title: 'Onboarding eKYC', description: 'Parcours digitaux sans friction avec OCR, liveness et step-up risque pour de hauts taux de pass.' },
      ],
    },
    impact: {
      badge: 'Impact business',
      title: 'Impact financier mesurable',
      description:
        'Notre travail d’ingénierie se traduit directement en efficacité opérationnelle, posture de sécurité et métriques de croissance défendables.',
      metrics: [
        { label: 'Onboarding plus rapide', description: 'Réduction du temps d’onboarding via eKYC automatisé, OCR et décision basée risque.' },
        { label: 'Prévention de fraude', description: 'Précision dans la détection et le blocage des transactions frauduleuses via modèles ML dédiés.' },
        { label: 'Réduction des coûts', description: 'Diminution des coûts de traitement manuel via RPA et automatisation back-office.' },
        { label: 'Volume de transactions', description: 'Augmentation de la capacité pic via microservices cloud-native et infra élastique.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Santé et sciences de la vie',
      title: 'Transformer le soin patient par la technologie',
      highlight: 'Santé',
      description:
        'Nous aidons providers, payeurs et acteurs des sciences de la vie à délivrer de meilleurs résultats grâce à des solutions sécurisées, interopérables et centrées sur l’humain, alignées HIPAA, FDA et réglementations santé.',
      cta: 'Discuter de votre application santé',
      statLabels: ['Apps HealthTech', 'Conforme', 'Patients gérés'],
    },
    features: {
      badge: 'Capacités principales',
      title: 'Solutions santé complètes',
      description:
        'Services d’ingénierie pour hôpitaux, cliniques, payeurs, healthtech et sciences de la vie, conçus autour des cliniciens et des patients.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Plateformes de télémédecine',
          description:
            'Expériences de téléconsultation sûres et de haute qualité intégrant agenda, dossier, prescription et paiement.',
          details:
            'Nous bâtissons des applications télémédecine alignées HIPAA avec WebRTC, messagerie sécurisée, e-prescription et paiements, avec fallbacks bas débit pour atteindre aussi les zones rurales.',
          outcomes: [
            'Pipeline WebRTC ajusté aux réseaux faibles',
            'Agenda et intake intégrés à l’EHR',
            'Messagerie sécurisée et partage documentaire avec consentement',
            'Workflow e-prescription et renouvellement avec audit',
            'Hand-off paiements et claims vers le revenue cycle',
          ],
        },
        {
          title: 'Intégration EHR et EMR',
          description:
            'Systèmes EHR ou EMR sur mesure et intégration standards-based pour un dossier patient unifié.',
          details:
            'Notre pratique interopérabilité utilise HL7 v2, FHIR R4 et CDA pour connecter hôpitaux, cliniques, labos, imagerie et registres. Nous migrons les données et livrons des APIs developer-friendly.',
          outcomes: [
            'Façade FHIR R4 sur interfaces HL7 v2 legacy',
            'Stratégie de patient matching et réconciliation',
            'Export bulk pour analytique et population health',
            'Annuaire des praticiens et gestion du consentement',
            'Portail développeur avec apps SMART on FHIR',
          ],
        },
        {
          title: 'Intégration IoMT et wearables',
          description:
            'Connexion sécurisée des dispositifs et wearables aux plateformes cliniques pour monitoring distant et alertes.',
          details:
            'Nous construisons des pipelines d’ingestion sécurisés pour l’IoMT et le grand public, avec filtrage edge, traduction de protocoles et alerting clinique respectant le workflow et la garde.',
          outcomes: [
            'Gateway dispositif Bluetooth, LTE-M et NB-IoT',
            'Règles edge pour réduire le bruit avant alerte',
            'Time series store avec rétention conforme',
            'Alerting équipe avec politiques d’escalade',
            'Application patient avec rappels d’auto-soin',
          ],
        },
        {
          title: 'IA et analytique santé',
          description:
            'Modèles prédictifs, analyse d’imagerie et aide à la décision augmentant le clinicien sans casser son flux.',
          details:
            'Nos travaux IA santé couvrent stratification du risque, prédiction de durée de séjour, no-shows, triage d’imagerie et CDS, avec model cards, monitoring de biais et boucles de feedback clinicien.',
          outcomes: [
            'Model card et documentation d’usage',
            'Dashboards biais et performance',
            'Intégration EHR avec UX minimaliste',
            'Boucle de feedback pour amélioration continue',
            'Audit trail de chaque prédiction présentée',
          ],
        },
        {
          title: 'Systèmes de gestion pharmacie',
          description:
            'Automatisation pharmacie, inventaire et exécution d’ordonnance pour officine, hôpital et mail order.',
          details:
            'Nous construisons des systèmes complets : e-prescribing, réapprovisionnement automatique, préparations, audit substances contrôlées et intégrations last-mile.',
          outcomes: [
            'Intégration e-prescribing Surescripts ou équivalent',
            'Modèle d’inventaire avec recommandations de réappro',
            'Workflow préparation et vérification avec sign-off',
            'Audit substances contrôlées prêt régulateur',
            'Intégration last-mile avec mises à jour patients',
          ],
        },
        {
          title: 'Gestion d’essais cliniques',
          description:
            'Plateformes recherche accélérant recrutement, EDC et conformité réglementaire.',
          details:
            'Nos déploiements CTMS couvrent design de protocole, recrutement, EDC, monitoring sites, EI et pistes alignées 21 CFR Part 11, accélérant les études pour sponsors et CROs.',
          outcomes: [
            'Bibliothèque de protocoles avec amendements',
            'Funnel de recrutement avec préscreen',
            'Formulaires EDC avec edit checks et workflow',
            'Capture d’EI connectée à la pharmacovigilance',
            'Audit log et signatures électroniques 21 CFR',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Défis sectoriels',
      title: 'Surmonter les obstacles santé',
      description:
        'Nous résolvons les complexités techniques qui distraient les équipes cliniques, pour qu’elles se concentrent sur les résultats.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Conformité HIPAA et FDA stricte',
          solution:
            'Nous concevons des plateformes avec chiffrement, audit logs détaillés et contrôles d’accès conformes HIPAA, GDPR et FDA, sans freiner les workflows quotidiens.',
        },
        {
          challenge: 'Données patient en silos',
          solution:
            'Avec HL7 et FHIR, nous bâtissons des couches interopérables connectant EHR legacy, labos, imagerie et cliniques partenaires en une vue patient longitudinale.',
        },
        {
          challenge: 'Engagement patient faible',
          solution:
            'Nous concevons des portails et apps mobiles intuitifs avec agenda facile, messagerie sécurisée et insights personnalisés pour augmenter rétention et adhérence.',
        },
        {
          challenge: 'Burn-out médical',
          solution:
            'Dictée IA, documentation ambient et facturation automatisée allègent la charge admin pour que les médecins consacrent plus de chaque visite au patient.',
        },
        {
          challenge: 'Diagnostics retardés',
          solution:
            'Nous superposons ML et vision aux PACS et labos pour trier les cas critiques et prioriser la file du radiologue.',
        },
        {
          challenge: 'Gestion des maladies chroniques',
          solution:
            'Nous intégrons IoMT et monitoring distant aux dashboards cliniques avec alertes pour des interventions proactives avant l’épisode aigu.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Cas d’usage que nous traitons en santé',
      description:
        'Nous résolvons des défis critiques sur le continuum de soin avec une technologie respectueuse des réalités cliniques et patient.',
      items: [
        { title: 'Monitoring patient distant', description: 'Synchronisation des données wearables vers les dashboards cliniques avec alertes et tendances pour les chroniques.' },
        { title: 'Chatbots de triage', description: 'Conversations IA qui évaluent les symptômes et orientent vers le bon niveau de soin.' },
        { title: 'Automatisation des opérations hospitalières', description: 'Lits, blocs, plannings et stocks optimisés par des systèmes opérationnels unifiés.' },
        { title: 'Traitement de données génomiques', description: 'Pipelines cloud haute performance pour séquençage, analyse et stockage long terme sécurisé.' },
        { title: 'Applications de santé mentale', description: 'Apps mobiles sûres avec exercices CBT, suivi d’humeur et accès à des conseillers.' },
        { title: 'Planification chirurgicale AR/VR', description: 'Rendu AR/VR de l’anatomie 3D pour planification préopératoire et formation.' },
        { title: 'Supply chain médicale', description: 'Traçabilité blockchain pour médicaments et dispositifs avec télémétrie cold chain.' },
        { title: 'Facturation et codage automatisés', description: 'RPA et NLP qui extraient les données des notes pour générer des codes facturation précis.' },
      ],
    },
    impact: {
      badge: 'Impact business',
      title: 'Impact clinique quantifiable',
      description:
        'Nos solutions se voient dans les dashboards opérationnels, les rapports régulateur et les résultats patient.',
      metrics: [
        { label: 'Moins de réadmissions', description: 'Baisse des taux de réadmission via monitoring distant et workflows proactifs.' },
        { label: 'Triage plus rapide', description: 'Amélioration du routage patient via triage NLP et intake intelligent.' },
        { label: 'Temps admin économisé', description: 'Moins de saisie et de paperasse via RPA et documentation ambient.' },
        { label: 'Audit ready', description: 'Conformité HIPAA et FDA 21 CFR Part 11 maintenue par evidence et logs automatisés.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail et e-commerce',
      title: 'Élevez votre vitrine digitale',
      highlight: 'E-commerce',
      description:
        'Nous aidons marques DTC, grossistes B2B et marketplaces mondiales à booster ventes et fidélité avec des expériences omnicanales rapides, personnalisées et fiables.',
      cta: 'Lancez votre projet commerce',
      statLabels: ['Boutiques lancées', 'GMV traité', 'Temps de chargement'],
    },
    features: {
      badge: 'Capacités principales',
      title: 'Solutions retail complètes',
      description:
        'Ingénierie commerce de bout en bout pour vitrines digitales, physiques et B2B, axée conversion, rétention et efficacité opérationnelle.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Plateformes commerce omnicanales',
          description:
            'Expériences unifiées web, mobile, social et magasin sur des architectures composables.',
          details:
            'Nous concevons des plateformes headless qui découplent vitrine et moteurs commerce pour lancer canaux, géographies et marques sans re-platforming.',
          outcomes: [
            'Architecture composable avec notes vendeurs',
            'Panier et profil unifiés entre canaux',
            'Budget performance vitrine appliqué en CI',
            'Plan d’intégration moteur promo et pricing',
            'Outils ops pour merchandising et CX',
          ],
        },
        {
          title: 'Systèmes de point de vente (POS)',
          description:
            'Logiciels POS cloud reliant online et magasin avec résilience offline et intégration inventaire et fidélité.',
          details:
            'Nos POS synchronisent l’inventaire en temps réel, fonctionnent offline et alimentent analytics et fidélité pour un reporting unifié.',
          outcomes: [
            'App POS offline-first avec résolution de conflits',
            'Intégration scanners et imprimantes',
            'Sync inventaire temps réel avec moteur commerce',
            'Enrôlement et reconnaissance fidélité au check-out',
            'Dashboard ops pour responsables magasin',
          ],
        },
        {
          title: 'Personnalisation et recommandations',
          description:
            'Moteurs de recommandation IA pour le bon produit au bon shopper et faire monter la conversion.',
          details:
            'Nous bâtissons des stacks combinant événements, profils et attributs, exposés via APIs temps réel, avec pricing dynamique et orchestration que les marketers peuvent ajuster sans tickets.',
          outcomes: [
            'Schéma événements et profil documentés',
            'APIs reco home, PDP et panier',
            'Règles de pricing dynamique avec garde-fous',
            'Plateforme d’expérimentation pour offres et layouts',
            'UI marketer pour campagnes et audiences',
          ],
        },
        {
          title: 'Supply chain et inventaire',
          description:
            'Backend qui aligne stock, fulfillment et logistique multi entrepôt, même quand la demande change.',
          details:
            'Nous intégrons ERPs, OMS, WMS et APIs 3PL en une couche cohérente, avec routing, inventaire temps réel, returns et exceptions fiables en pic.',
          outcomes: [
            'Règles de routing par coût, vitesse et stock',
            'Inventaire temps réel DCs, magasins, 3PLs',
            'Workflow returns et remboursements automatisé',
            'Dashboard exceptions avec alertes actionnables',
            'Reporting fill rate, on-time et shrinkage',
          ],
        },
        {
          title: 'Fidélité et récompenses',
          description:
            'Plateformes de fidélité qui poussent les rachats, récompensent l’advocacy et produisent des données actionnables.',
          details:
            'Nous bâtissons des programmes modulaires avec points, paliers, mécaniques gamifiées, mobile wallet et écosystème partenaires, avec analytics qui montrent ce qui fait bouger CLV et rétention.',
          outcomes: [
            'Moteur de règles avec tiers et earn/burn',
            'Intégration Apple et Google Wallet',
            'Expérience membre web, app et magasin',
            'Analytics rétention, CLV et rachats',
            'Outils ops pour promos et exceptions',
          ],
        },
        {
          title: 'Portails B2B grossistes',
          description:
            'Plateformes adaptées aux réalités B2B avec catalogues custom, pricing complexe et intégrations procurement.',
          details:
            'Nos portails B2B gèrent hiérarchies de comptes, prix custom, contrats, commandes en gros, quote-to-cash et PunchOut Ariba, Coupa et autres.',
          outcomes: [
            'Hiérarchie de comptes et permissions par rôle',
            'Moteur de catalogue et pricing par contrat',
            'Workflow quote-to-cash avec approbations',
            'Intégration PunchOut avec plateformes majeures',
            'Self-service historique, réordre et facturation',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Défis sectoriels',
      title: 'Lever les goulets d’étranglement retail',
      description:
        'Nous éliminons la friction technique entre votre marque, vos shoppers et votre store of record pour scaler le revenu digital de façon prévisible.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Taux d’abandon de panier élevé',
          solution:
            'Nous concevons des check-outs sans friction et accessibles, intégrons wallets et identifiants stockés et ajoutons un retargeting personnalisé qui récupère les paniers sans intrusion.',
        },
        {
          challenge: 'Temps de chargement lents',
          solution:
            'Migration vers des architectures headless sur edge, avec performance budgetée pour préserver les chargements sub-seconde au fur et à mesure que le catalogue et le trafic croissent.',
        },
        {
          challenge: 'Faible discoverability produit',
          solution:
            'Nous intégrons recherche et merchandising IA, ajustons la pertinence avec vos données et exposons des patterns guidés qui transforment l’intention en add to cart.',
        },
        {
          challenge: 'Écarts d’inventaire',
          solution:
            'Un middleware robuste synchronise l’inventaire entre POS, entrepôts et digital, avec jobs de réconciliation qui évitent les oversells le week-end.',
        },
        {
          challenge: 'Parcours client déconnectés',
          solution:
            'Nous déployons CDP et programmes de fidélité qui cousent identités et comportements web, app et magasin pour aligner service, marketing et merchandising.',
        },
        {
          challenge: 'Pics de trafic et indispos',
          solution:
            'Nous concevons une infra cloud auto-scalable avec caching multi-couche et load testing pour transformer flash sales et Black Friday en événement de planification.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Cas d’usage que nous traitons en retail',
      description:
        'Nous travaillons avec marques DTC, grossistes B2B et grandes marketplaces pour livrer des expériences commerce qui font bouger le business.',
      items: [
        { title: 'Migration vitrine headless', description: 'Passage de monolithes rigides à des architectures headless rapides Next.js ou Nuxt.' },
        { title: 'Apps mobile commerce', description: 'Apps iOS et Android avec AR, biométrie et check-out one-tap pensées pour la rétention.' },
        { title: 'Marketplaces multi vendor', description: 'Marketplaces avec routage commission, dashboards vendor et qualité catalogue.' },
        { title: 'Box d’abonnement', description: 'Recurring billing, box customisables et fulfillment pour le retail par abonnement.' },
        { title: 'Bornes digitales en magasin', description: 'Bornes tactiles pour rayon infini, vente assistée et self-checkout.' },
        { title: 'Voice commerce', description: 'Achats vocaux via Alexa et Google Assistant pour le réordre et l’achat rapide.' },
        { title: 'Planification d’inventaire prédictive', description: 'Prévision IA combinant saisonnalité, promos et signaux externes pour optimiser les achats.' },
        { title: 'Service client automatisé', description: 'Chatbots IA qui gèrent suivi, retours et FAQ 24/7 et escaladent proprement.' },
      ],
    },
    impact: {
      badge: 'Impact business',
      title: 'Croissance e-commerce mesurable',
      description:
        'Nos architectures commerce sont conçues pour une chose : faire croître le revenu attribuable aux investissements technologiques de votre équipe.',
      metrics: [
        { label: 'Augmentation de conversion', description: 'Boost moyen du taux de check-out via UX sans friction et migrations headless.' },
        { label: 'Vitesse de chargement', description: 'Rendu vitrine ultra rapide qui réduit le bounce et améliore le SEO.' },
        { label: 'LTV plus élevé', description: 'Valeur vie client en hausse via personnalisation IA et fidélité gamifiée.' },
        { label: 'Précision inventaire', description: 'Synchronisation temps réel entre canaux qui élimine virtuellement les oversells.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply chain et logistique',
      title: 'Logiciel logistique intelligent',
      highlight: 'Supply chain',
      description:
        'Nous aidons chargeurs, transporteurs, 3PL et fabricants à digitaliser les opérations de bout en bout, du parc et de l’entrepôt à la flotte et la livraison finale, avec un logiciel qui augmente la visibilité et baisse les coûts.',
      cta: 'Optimisez votre supply chain',
      statLabels: ['Plateformes logistiques', 'Expéditions suivies', 'Gain efficacité moyen'],
    },
    features: {
      badge: 'Capacités principales',
      title: 'Solutions logistiques complètes',
      description:
        'Ingénierie pour opérateurs de flotte, entrepôts, freight forwarders et 3PL avec des livrables qui changent les métriques opérationnelles en quelques mois.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Systèmes de gestion de flotte',
          description:
            'Plateformes télématiques qui surveillent la santé véhicule, suivent les routes en temps réel et remontent fuel et conduite.',
          details:
            'Nous intégrons GPS, OBD-II et dashcam aux apps drivers et consoles dispatch. Les ops gagnent une vue unique de la flotte, des routes, du fuel et du comportement avec alertes affinées aux exceptions réelles.',
          outcomes: [
            'Pipeline télématique avec buffering edge',
            'Dashboards live cartes et adhérence aux routes',
            'Reporting fuel et idle avec benchmarks',
            'Driver scoring sécurité et efficacité',
            'Alertes maintenance reliées au workshop',
          ],
        },
        {
          title: 'Automatisation entrepôt (WMS)',
          description:
            'WMS intelligents pour inventaire, picking automatisé et optimisation du stockage pour DC haut volume.',
          details:
            'Nos WMS exploitent barcode et RFID, intégrations robotiques et slotting. Réception, putaway, picking, emballage et expédition opèrent comme un flux coordonné avec exceptions temps réel et suivi main-d’œuvre.',
          outcomes: [
            'Flux entrants et sortants configurés à votre DC',
            'Stratégie de slotting réévaluée régulièrement',
            'Workflows mobiles pick, pack et ship',
            'Dashboards productivité et main-d’œuvre',
            'Exceptions pour casses, retours et manquants',
          ],
        },
        {
          title: 'Plateformes de visibilité temps réel',
          description:
            'Tracking de bout en bout entre carriers, capteurs et ERPs pour une vue prédictive partagée.',
          details:
            'Nous agrégeons données carriers, IoT et ERPs dans une control tower avec ETA prédictifs, détection d’exceptions et notifications automatiques.',
          outcomes: [
            'Framework multi-carrier avec failover',
            'Modèle ETA prédictif ajusté à vos lignes',
            'Notifications email, SMS et webhook',
            'Cockpit d’exceptions pour ops avec workflow',
            'Expérience tracking client brandée',
          ],
        },
        {
          title: 'Moteurs d’optimisation de routes',
          description:
            'Routing IA qui calcule la route la plus efficace face à trafic, météo, capacité et fenêtres.',
          details:
            'Nos moteurs combinent ML, mapping dynamique et solveurs pour multi-stop, multi-vehicle et flottes mixtes, en augmentant les drops par route sans casser les heures conducteur ni les engagements client.',
          outcomes: [
            'Modèle de routing documenté avec contraintes',
            'Intégration app driver et séquence de stops',
            'Dashboard stops par route et on-time',
            'Re-optimisation en cas de disruption',
            'Banc de backtesting pour heuristiques ou providers',
          ],
        },
        {
          title: 'Apps de last-mile',
          description:
            'Expériences mobiles qui transforment la livraison finale en interaction transparente et de confiance.',
          details:
            'Nous livrons des apps drivers avec navigation, preuve de livraison, signatures et capture d’exceptions, plus des portails clients qui réduisent les WISMO et augmentent le CSAT.',
          outcomes: [
            'App native driver offline-first',
            'Preuve de livraison avec photo, signature et notes',
            'Portail tracking client avec ETA et chat',
            'Exceptions livraisons échouées avec workflow',
            'Dashboard performance livraison',
          ],
        },
        {
          title: 'Prévision d’inventaire',
          description:
            'Analytique prédictive qui maintient le stock au bon niveau dans le bon nœud sans immobiliser le capital.',
          details:
            'Nous mêlons ventes historiques, promos, saisonnalité et signaux externes en prévisions qui alimentent réappro et stocks de sécurité, avec explicabilité.',
          outcomes: [
            'Modèle évalué contre votre historique',
            'Recommandations réappro intégrées à l’ERP',
            'Stocks sécurité et points de réordre par SKU et nœud',
            'Workbench planificateur avec scénarios',
            'Reporting précision avec tuning continu',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Défis sectoriels',
      title: 'Résoudre les complexités supply chain',
      description:
        'Nous concevons des solutions qui dénouent les nœuds opérationnels et rapprochent données, décisions et exécution terrain.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Manque de visibilité temps réel',
          solution:
            'Nous intégrons capteurs IoT et APIs multi-carriers en une control tower centralisée pour supprimer les angles morts.',
        },
        {
          challenge: 'Routing inefficace et fuel élevé',
          solution:
            'Nous déployons une optimisation IA qui s’adapte au trafic, à la météo et à la capacité, réduisant fuel, kilométrage et heures conducteur sans casser les SLA.',
        },
        {
          challenge: 'Goulets et erreurs entrepôt',
          solution:
            'Des plateformes WMS intelligentes avec RFID, barcode et pick-to-light ou voice picking accélèrent le throughput et suppriment les erreurs en pic.',
        },
        {
          challenge: 'Systèmes legacy fragmentés',
          solution:
            'Nous concevons middleware et API gateways qui connectent ERPs, TMS et 3PL pour des données qui circulent proprement.',
        },
        {
          challenge: 'Ruptures cold chain',
          solution:
            'Le monitoring IoT continu de température et l’alerting automatisé évitent les pertes et protègent la conformité.',
        },
        {
          challenge: 'Friction last-mile',
          solution:
            'Apps drivers avec preuve de livraison et navigation, plus tracking brandé pour le client final, livrent une expérience transparente.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Cas d’usage que nous traitons en logistique',
      description:
        'Nous résolvons des défis logistiques concrets avec une technologie data-driven qui respecte la réalité des entrepôts, des drivers et des clients.',
      items: [
        { title: 'Cold chain monitoring', description: 'Capteurs IoT et registres tamper evident pour protéger périssables et pharma.' },
        { title: 'Portails freight forwarding', description: 'Portails sécurisés pour devis, bookings et douanes avec accès par rôle.' },
        { title: 'Yard management', description: 'Solutions digitales pour suivre remorques et optimiser les portes de quai.' },
        { title: 'Logistique inverse', description: 'Automatisation des retours : RMA, étiquettes, refurbishment et coût.' },
        { title: 'Portails 3PL', description: 'Dashboards multi-tenant pour visibilité inventaire et expéditions clients.' },
        { title: 'Intégration véhicules autonomes', description: 'APIs et control towers pour véhicules autonomes, drones et robotique.' },
        { title: 'Portails fournisseurs', description: 'Plateformes accélérant communication, POs et facturation entre fabricants et fournisseurs.' },
        { title: 'Réappro à la demande', description: 'Systèmes déclenchant des POs sur POS et prévisions plutôt que minima statiques.' },
      ],
    },
    impact: {
      badge: 'Impact business',
      title: 'Impact logistique mesurable',
      description:
        'Notre technologie cible le bottom line en éliminant le gaspillage, lissant les exceptions et donnant aux ops la confiance d’engager de meilleurs SLA.',
      metrics: [
        { label: 'Réduction fuel', description: 'Baisse moyenne du fuel par flotte via optimisation IA et télématique.' },
        { label: 'Précision fulfillment', description: 'Moins d’erreurs grâce à barcode, RFID et WMS automatisé.' },
        { label: 'Dispatch plus rapide', description: 'Meilleure efficacité yard et dock, moins d’attente et de goulets.' },
        { label: 'Visibilité supply chain', description: 'Transparence totale du sourcing au last-mile via dashboards centralisés.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-Tech et digital natives',
      title: 'Ingénierie pour innovateurs',
      highlight: 'Digital Natives',
      description:
        'Nous donnons aux startups, scale-ups et entreprises digital native la capacité d’ingénierie senior pour livrer plus vite, scaler en sécurité et faire de l’ingénierie un avantage durable.',
      cta: 'Accélérez votre roadmap',
      statLabels: ['Startups soutenues', 'Utilisateurs actifs', 'Délai MVP moyen'],
    },
    features: {
      badge: 'Capacités principales',
      title: 'Ingénierie digitale complète',
      description:
        'Ingénierie senior pour entreprises tech rapides, du MVP aux plateformes multi-régions.',
      outcomesTitle: 'Ce que nous livrons',
      items: [
        {
          title: 'Développement de plateformes SaaS',
          description:
            'Ingénierie de bout en bout pour SaaS multi-tenant, de l’isolation des données au billing en passant par les outils admin.',
          details:
            'Nous concevons l’isolation tenant, intégrons Stripe et autres billings, livrons des outils back-office et bâtissons un onboarding qui active les utilisateurs.',
          outcomes: [
            'Pattern d’isolation documenté et revu',
            'Subscription billing intégré au reporting',
            'Outils admin pour ops et support',
            'Funnel d’onboarding avec analytics d’activation',
            'Baseline SLO avec error budgets et on-call',
          ],
        },
        {
          title: 'Architecture cloud-native',
          description:
            'Systèmes cloud-native conçus pour élasticité, résilience et coûts prévisibles.',
          details:
            'Nous utilisons microservices, serverless et Kubernetes là où ils paient, avec FinOps qui rendent la dépense cloud explicable et alignée aux courbes d’usage.',
          outcomes: [
            'Architecture de référence alignée à votre profil',
            'Politiques d’autoscaling ajustées au trafic',
            'Résilience multi-AZ avec modes de panne documentés',
            'Dashboards FinOps par produit ou équipe',
            'Runbooks pour incidents communs et recovery',
          ],
        },
        {
          title: 'Développement rapide de MVP',
          description:
            'Sprints focalisés qui mènent un produit du concept au MVP en quelques semaines avec des fondations solides pour scaler après.',
          details:
            'Nous combinons product thinking et starter kits pour livrer des MVPs qui prouvent le marché, satisfont les investisseurs et évitent le rebuild post-launch.',
          outcomes: [
            'Document de scope avec métriques de succès',
            'Produit en production dans le délai convenu',
            'Bibliothèque de composants pour itérations',
            'Analytics et feedback connectés dès le jour 1',
            'Roadmap pour scaler et grandir l’équipe',
          ],
        },
        {
          title: 'API economy et intégrations',
          description:
            'APIs REST et GraphQL sûres et developer-friendly qui étendent le produit aux écosystèmes et partenaires.',
          details:
            'Nous concevons APIs avec versioning, rate limiting et OAuth 2.0, livrons des portails developer et SDK dans les langages préférés de vos clients.',
          outcomes: [
            'Guide de style API et politique de versioning',
            'Portail developer avec docs, sandbox et quickstarts',
            'SDKs dans les langages principaux',
            'Baseline rate limiting, auth et audit',
            'Analytics adoption pour produit et partenariats',
          ],
        },
        {
          title: 'Data engineering et pipelines IA',
          description:
            'La fondation data et ML dont votre produit a besoin pour évoluer de feature flags à une intelligence défendable.',
          details:
            'Nous bâtissons tracking d’événements, ingestion, warehouses et lakehouses puis ajoutons feature stores, déploiement de modèles et monitoring pour traiter l’IA en first class.',
          outcomes: [
            'Taxonomie d’événements et baseline tracking',
            'Warehouse ou lakehouse aligné à la roadmap',
            'Pattern feature store et model serving',
            'Monitoring qualité et biais sur modèles live',
            'Modèle de coût stockage, calcul et ML',
          ],
        },
        {
          title: 'DevOps et CI/CD',
          description:
            'Pipeline de delivery qui transforme commits en déploiements sûrs plusieurs fois par jour, avec les métriques pour le prouver.',
          details:
            'Nous mettons en place CI/CD, IaC, tests automatisés et progressive delivery qui réduisent le lead time et la tasa d’échec.',
          outcomes: [
            'Templates CI/CD avec quality et security gates',
            'Bibliothèque IaC pour services core',
            'Stratégie de tests unit, integration et e2e',
            'Progressive delivery avec feature flags',
            'Dashboard DORA pour le leadership',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Défis sectoriels',
      title: 'Débloquer les startups tech',
      description:
        'Nous éliminons la friction technique qui empêche les digital natives de scaler.',
      challengeLabel: 'Le défi',
      solutionLabel: 'Notre solution',
      items: [
        {
          challenge: 'Time to market lent',
          solution:
            'Équipes agiles seniors et starter kits éprouvés compriment le délai MVP pour valider, gagner des clients et lever des fonds plus vite.',
        },
        {
          challenge: 'Instabilité plateforme à l’échelle',
          solution:
            'Nous migrons les monolithes fragiles vers des services cloud-native résilients qui auto-scalent face à la croissance virale.',
        },
        {
          challenge: 'Coûts cloud élevés',
          solution:
            'Nous optimisons les requêtes, ajustons la taille et appliquons serverless ou containers où ils ont du sens, baissant le burn AWS, Azure ou GCP.',
        },
        {
          challenge: 'Dette technique accumulée',
          solution:
            'Pods dédiés refactorent le legacy, écrivent les tests manquants et mettent en place CI/CD sans arrêter le produit.',
        },
        {
          challenge: 'Pénurie de talents ingénieurs',
          solution:
            'Nous augmentons votre équipe avec des full-stack seniors qui s’intègrent aux rituels et délivrent dès la semaine 1.',
        },
        {
          challenge: 'Multi-tenancy complexe',
          solution:
            'Nous architecturons l’isolation sécurisée, RBAC et provisioning dynamique pour scaler du premier client enterprise au centième.',
        },
      ],
    },
    useCases: {
      badge: 'Cas d’usage',
      title: 'Cas d’usage que nous traitons en Hi-Tech',
      description:
        'Nous travaillons avec founders, CTOs et leaders d’ingénierie pour bâtir des produits scalables et disruptifs.',
      items: [
        { title: 'Modernisation de plateforme', description: 'Refactor des monolithes vers des microservices robustes au scaling.' },
        { title: 'Portails B2B SaaS', description: 'Apps SaaS enterprise avec RBAC, hiérarchies custom et outils admin de confiance.' },
        { title: 'Apps mobiles consommateur', description: 'Apps cross-platform haute performance React Native ou Flutter.' },
        { title: 'Produits enrichis IA', description: 'Intégration de gen AI, vision et NLP pour différenciateurs défendables.' },
        { title: 'Marketplaces', description: 'Marketplaces multi-sided avec routage, escrow et trust en lesquels acheteurs et vendeurs ont confiance.' },
        { title: 'Outillage developer', description: 'SDKs, CLIs et portails de docs pour produits techniques.' },
        { title: 'Optimisation coûts cloud', description: 'Audit et rearchitecture des déploiements pour réduire le spend mensuel.' },
        { title: 'Sauvetage de startup', description: 'Stabilisation, refactor et scaling de codebases héritées.' },
      ],
    },
    impact: {
      badge: 'Impact business',
      title: 'Vélocité et scale',
      description:
        'Nous accélérons la croissance et améliorons l’unit economics pour faire de l’ingénierie une raison forte d’investir dans vous.',
      metrics: [
        { label: 'Livraison MVP plus rapide', description: 'Accélération vs hiring traditionnel pour livrer le core produit.' },
        { label: 'Économies cloud', description: 'Réduction moyenne du spend mensuel après audits architecture et FinOps.' },
        { label: 'Déploiements sans downtime', description: 'CI/CD totalement automatisé et tests rigoureux avec progressive delivery.' },
        { label: 'Déploiements / mois', description: 'Itération rapide et delivery continue guidée par le feedback réel.' },
      ],
    }, 
  },
}
