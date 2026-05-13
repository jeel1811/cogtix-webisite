import type { IndustryContentByVariant } from './types'

export const itIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Servizi finanziari',
      title: 'Software di nuova generazione per il BFSI',
      highlight: 'Servizi finanziari',
      description:
        'Aiutiamo banche, assicurazioni e fintech a rilasciare prodotti digitali sicuri, conformi e scalabili. Dalla modernizzazione del core banking al trading algoritmico, i nostri team costruiscono i sistemi che muovono denaro in sicurezza su larga scala.',
      cta: 'Parliamo del tuo progetto FinTech',
      statLabels: ['Piattaforme FinTech', 'Uptime garantito', 'Conforme'],
    },
    features: {
      badge: 'Capacità chiave',
      title: 'Soluzioni finanziarie complete',
      description:
        'Uno spettro completo di servizi di ingegneria per banca retail e corporate, pagamenti, wealth, assicurazione e mercati dei capitali.',
      outcomesTitle: 'Cosa rilasciamo',
      items: [
        {
          title: 'Piattaforme di banca digitale',
          description:
            'Esperienze bancarie native su ogni dispositivo con la resilienza e la sicurezza che richiedono i carichi regolati.',
          details:
            'Ingegnerizziamo piattaforme omnicanale con dashboard unificate, journey mobile-first, processing transazionale in tempo reale e integrazioni modulari al core banking. Le nostre architetture di riferimento gestiscono già milioni di login mensili.',
          outcomes: [
            'Architettura omnicanale di riferimento web, mobile, filiale',
            'Baseline di autenticazione con biometria, step-up e FIDO2',
            'API ledger e transazionali in real time con SLA',
            'Dashboard operative per frodi, support e prodotto',
            'Runbook di hand-off per SRE, compliance e ops',
          ],
        },
        {
          title: 'Soluzioni di pagamento',
          description:
            'Gateway, wallet e rail cross-border allineati PCI-DSS progettati per alto throughput e settlement prevedibile.',
          details:
            'La nostra pratica di pagamenti copre carte, EMV, A2A, wallet e settlement blockchain con retry idempotenti, contabilità exactly-once e tooling di riconciliazione che allinea finance, ops e ingegneria.',
          outcomes: [
            'Strategia di tokenizzazione e vault allineata PCI-DSS',
            'API di pagamento idempotenti con eventi di riconciliazione',
            'Connettori wallet, EMV e bancari con sandbox',
            'Reporting di settlement integrato con il ledger finance',
            'Workflow chargeback e dispute con audit trail',
          ],
        },
        {
          title: 'WealthTech e robo-advisor',
          description:
            'Piattaforme di wealth e advisory che combinano modelli quantitativi con esperienze cliente intuitive per retail e HNW.',
          details:
            'Costruiamo motori di ribilanciamento, modelli di profilazione del rischio, copilot AI per consulenti e dashboard che aggregano custodian, broker e dati alternativi. Compliance, suitability e audit fin dal primo sprint.',
          outcomes: [
            'Flussi suitability e KYC mappati ai regolatori',
            'Motore di ribilanciamento con strategie documentate',
            'Integrazioni custodian e broker con riconciliazione',
            'Dashboard di reporting cliente in web e PDF',
            'Tooling copilot consulente con audit completo',
          ],
        },
        {
          title: 'Soluzioni InsurTech',
          description:
            'Esperienze assicurative end-to-end dalla quotazione al sinistro, con automazione che riduce i tempi senza cedere sulla governance.',
          details:
            'Modernizziamo underwriting, gestione polizze e sinistri con scoring AI, RPA, OCR e portali self-service per assicurati e broker, riducendo i cicli di claim del 40-60%.',
          outcomes: [
            'API quote e bind con motore di regole',
            'Underwriting assistito da AI con human-in-the-loop',
            'Workflow FNOL con OCR e triage',
            'Portali self-service per assicurati, broker e periti',
            'Dashboard operative loss ratio e SLA',
          ],
        },
        {
          title: 'Compliance e RegTech',
          description:
            'Piattaforme automatizzate KYC, AML e reporting che trasformano la compliance in un piano di controllo continuo.',
          details:
            'Integriamo verifica biometrica, screening sanzioni e PEP, monitoring transazionale, case management e pipeline di reporting regolatorio per GDPR, PSD2, FATCA e regimi KYC e AML multi-giurisdizione.',
          outcomes: [
            'Onboarding KYC e AML con check biometrici',
            'Pipeline di screening sanzioni, PEP e adverse media',
            'Regole di transaction monitoring con triage di alert',
            'Case management per analisti con catena di prove',
            'Export di reporting per supervisori locali',
          ],
        },
        {
          title: 'Blockchain e smart contract',
          description:
            'Soluzioni su catene permissioned e pubbliche per tokenizzazione, settlement e audit trail inalterabili su infrastruttura enterprise.',
          details:
            'I nostri team blockchain progettano prodotti tipo DeFi, piattaforme di tokenizzazione e audit trail su Ethereum, Polygon e Hyperledger Fabric, con custody, ottimizzazione del gas e hook di compliance pronti per uso istituzionale.',
          outcomes: [
            'Modello di token e suite di smart contract peer reviewed',
            'Pattern di custody integrato con HSM o MPC',
            'Riconciliazione tra on-chain e core',
            'Tooling per ops, compliance e treasury',
            'Security review su bridge, oracle e upgradability',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Sfide del settore',
      title: 'Risolvere i problemi più duri della FinTech',
      description:
        'Eliminiamo l’attrito tecnologico che frena le istituzioni finanziarie, così i tuoi team si concentrano su clienti, prodotto e crescita.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Quadro regolatorio in evoluzione',
          solution:
            'Integriamo motori di compliance automatizzati, audit trail robusti e librerie modulari di controlli per KYC, AML, GDPR e PSD2 direttamente in piattaforma, trasformando i nuovi obblighi in configurazione invece che in rebuild rischiosi.',
        },
        {
          challenge: 'Crescita di cyber-minacce e frodi',
          solution:
            'Progettiamo architetture zero-trust, cifratura end-to-end e detection AI che proteggono le transazioni e fanno emergere comportamenti sospetti in tempo reale senza rallentare i clienti veri.',
        },
        {
          challenge: 'Vincoli dei sistemi legacy',
          solution:
            'Con un approccio strangler fig avvolgiamo i core legacy in API moderne, estraiamo funzionalità in microservizi e migriamo i dati in modo progressivo senza congelare la roadmap.',
        },
        {
          challenge: 'Dati cliente frammentati',
          solution:
            'Mettiamo in produzione data lake, customer 360 e pipeline analitiche che consolidano banca, assicurazione e digitale per esperienze omnicanale personalizzate e coerenti.',
        },
        {
          challenge: 'Processi manuali inefficienti',
          solution:
            'Integriamo RPA, IDP e workflow automation in originazione, underwriting e claim per togliere il lavoro ripetitivo e liberare gli esperti per attività di alto valore.',
        },
        {
          challenge: 'Settlement lenti',
          solution:
            'Costruiamo gateway high-throughput a bassa latenza e layer di settlement tokenizzati con smart contract per rimesse cross-border quasi istantanee con costi prevedibili.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Casi d’uso che gestiamo nei Servizi finanziari',
      description:
        'Lavoriamo con banche, fintech e assicurazioni per risolvere sfide tecnologiche concrete sull’intera catena BFSI.',
      items: [
        { title: 'Modernizzazione core banking', description: 'Migrazione di monoliti bancari a microservizi cloud-native per maggiore flessibilità e release più rapide.' },
        { title: 'Portali Open Banking', description: 'API gateway sicuri ed esperienze developer per condividere dati con terzi regolati.' },
        { title: 'Sistemi di rilevazione frodi', description: 'Modelli ML che valutano le transazioni in tempo reale e tarano le soglie senza saturare gli analisti.' },
        { title: 'Personal finance management', description: 'Esperienze mobile che aggregano conti, categorizzano spese e propongono nudge personalizzati.' },
        { title: 'Origination prestiti automatizzata', description: 'Piattaforme digitali end-to-end con dati alternativi, scoring AI e disbursement in pochi minuti.' },
        { title: 'Trading algoritmico', description: 'Architetture HFT a latenza ultra bassa con CEP e backtesting riproducibile.' },
        { title: 'Telematica assicurativa', description: 'Assicurazione usage-based con dati IoT da veicoli connessi e motori di pricing dinamici.' },
        { title: 'Onboarding (eKYC)', description: 'Flussi digitali senza attrito con OCR, liveness e step-up basato sul rischio.' },
      ],
    },
    impact: {
      badge: 'Impatto sul business',
      title: 'Impatto finanziario misurabile',
      description:
        'Il nostro lavoro di ingegneria si traduce direttamente in efficienza operativa, postura di sicurezza e metriche di crescita difendibili.',
      metrics: [
        { label: 'Onboarding più rapido', description: 'Riduzione del tempo di onboarding tramite eKYC automatizzato, OCR e decisioni risk-based.' },
        { label: 'Prevenzione frodi', description: 'Accuratezza nella detection e blocco di transazioni fraudolente con modelli ML dedicati.' },
        { label: 'Riduzione costi', description: 'Minori costi di processing manuale grazie a RPA e automazione intelligente nel back-office.' },
        { label: 'Volume transazioni', description: 'Maggiore capacità di picco grazie a microservizi cloud-native e infrastruttura elastica.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Salute e Life Sciences',
      title: 'Trasformare la cura del paziente con la tecnologia',
      highlight: 'Salute',
      description:
        'Aiutiamo provider, payer e aziende life science a fornire risultati migliori con soluzioni digitali sicure, interoperabili e centrate sull’umano, allineate a HIPAA, FDA e regolamenti sanitari globali.',
      cta: 'Parliamo della tua app sanitaria',
      statLabels: ['App HealthTech', 'Conforme', 'Pazienti gestiti'],
    },
    features: {
      badge: 'Capacità chiave',
      title: 'Soluzioni sanitarie complete',
      description:
        'Servizi di ingegneria per ospedali, cliniche, payer, healthtech e life sciences, progettati attorno a clinici e pazienti.',
      outcomesTitle: 'Cosa rilasciamo',
      items: [
        {
          title: 'Piattaforme di telemedicina',
          description:
            'Esperienze di videoconsulto sicure e di alta qualità con agenda, cartella, prescrizione e pagamenti integrati.',
          details:
            'Costruiamo applicazioni di telemedicina allineate HIPAA con WebRTC, messaging sicuro, e-prescription e pagamenti, con fallback per banda bassa per raggiungere anche aree rurali.',
          outcomes: [
            'Pipeline WebRTC tarata per reti a bassa banda',
            'Agenda e intake integrati con l’EHR',
            'Messaging sicuro e condivisione documentale con consenso',
            'Workflow e-prescription e refill con audit log',
            'Hand-off di pagamenti e claim al revenue cycle',
          ],
        },
        {
          title: 'Integrazione EHR ed EMR',
          description:
            'Sistemi EHR o EMR su misura e integrazione standard-based per una cartella paziente unificata.',
          details:
            'La nostra pratica di interoperabilità usa HL7 v2, FHIR R4 e CDA per collegare ospedali, cliniche, laboratori, imaging e registri. Migriamo i dati e rilasciamo API developer-friendly.',
          outcomes: [
            'Façade FHIR R4 sopra interfacce HL7 v2 legacy',
            'Strategia di patient matching e riconciliazione',
            'Export bulk per analytics e population health',
            'Provider directory e gestione del consenso',
            'Portale developer con esempi SMART on FHIR',
          ],
        },
        {
          title: 'Integrazione IoMT e wearable',
          description:
            'Connessione sicura di device medici e wearable a piattaforme cliniche per monitoraggio remoto e alert.',
          details:
            'Costruiamo pipeline di ingestion sicure per IoMT e wearable con filtraggio edge, traduzione di protocolli e alert clinici che rispettano workflow e turni.',
          outcomes: [
            'Gateway di device con Bluetooth, LTE-M e NB-IoT',
            'Regole edge per ridurre il rumore prima dell’alert',
            'Time series store con retention conforme',
            'Alerting di team con politiche di escalation',
            'App paziente con prompt di self-care',
          ],
        },
        {
          title: 'AI e analytics sanitari',
          description:
            'Modelli predittivi, analisi di imaging e supporto decisionale clinico che potenziano i clinici senza rompere il flusso.',
          details:
            'Coprono stratificazione del rischio, durata della degenza, no-show, triage di imaging e CDS con model card, monitoring di bias e feedback dei clinici.',
          outcomes: [
            'Model card e documentazione d’uso per modello',
            'Dashboard di bias e performance',
            'Integrazione EHR con UX a clic minimi',
            'Loop di feedback per miglioramento continuo',
            'Audit trail per ogni predizione mostrata',
          ],
        },
        {
          title: 'Gestione farmaceutica',
          description:
            'Automazione di farmacia, inventario e distribuzione di prescrizioni per farmacia di comunità, ospedaliera e mail order.',
          details:
            'Costruiamo sistemi completi: e-prescribing, riordino automatico, workflow di galenica, audit trail per sostanze controllate e integrazioni last-mile.',
          outcomes: [
            'Integrazione e-prescribing con Surescripts o equivalenti',
            'Modello di inventario con suggerimenti di riordino',
            'Workflow galenica e verifica con sign-off',
            'Audit trail di sostanze controllate',
            'Integrazione last-mile con aggiornamenti al paziente',
          ],
        },
        {
          title: 'Gestione studi clinici',
          description:
            'Piattaforme di ricerca che accelerano reclutamento, EDC e conformità regolatoria.',
          details:
            'I nostri CTMS coprono protocollo, reclutamento, EDC, monitoraggio dei siti, AE e audit 21 CFR Part 11, accelerando gli studi per sponsor e CRO.',
          outcomes: [
            'Libreria di protocolli con emendamenti versionati',
            'Funnel di reclutamento con prescreen',
            'Form EDC con edit check e workflow di review',
            'Cattura di AE collegata al safety monitoring',
            'Audit log e firme elettroniche 21 CFR Part 11',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Sfide del settore',
      title: 'Superare gli ostacoli sanitari',
      description:
        'Risolviamo le complessità tecniche che distraggono i team clinici, così possono concentrarsi sui risultati.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Compliance HIPAA e FDA stringente',
          solution:
            'Progettiamo piattaforme con cifratura, audit log dettagliati e controlli di accesso conformi a HIPAA, GDPR e FDA, senza rallentare i flussi quotidiani.',
        },
        {
          challenge: 'Dati paziente in silos',
          solution:
            'Con HL7 e FHIR realizziamo livelli interoperabili che collegano EHR legacy, laboratori, imaging e cliniche partner in una vista paziente longitudinale.',
        },
        {
          challenge: 'Engagement paziente debole',
          solution:
            'Disegniamo portali e app intuitive con agenda semplice, messaging sicuro e insight personalizzati per aumentare retention e aderenza.',
        },
        {
          challenge: 'Burnout dei medici',
          solution:
            'Dettatura AI, ambient documentation e fatturazione automatizzata riducono il carico amministrativo, lasciando più tempo al paziente.',
        },
        {
          challenge: 'Diagnostica ritardata',
          solution:
            'Sovrapponiamo ML e computer vision a PACS e laboratori per il triage dei casi critici e la priorità nella coda del radiologo.',
        },
        {
          challenge: 'Gestione delle malattie croniche',
          solution:
            'Integriamo wearable IoMT e remote monitoring nei dashboard clinici con alert per interventi proattivi.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Casi d’uso che gestiamo nella Salute',
      description:
        'Affrontiamo sfide critiche lungo l’intero percorso di cura con tecnologia che rispetta clinica e paziente.',
      items: [
        { title: 'Remote patient monitoring', description: 'Sincronizzazione dei dati wearable nei dashboard clinici con alert e analisi di trend per croniche.' },
        { title: 'Chatbot di triage digitale', description: 'Conversazioni AI che valutano i sintomi e indirizzano i pazienti al livello di cura adeguato.' },
        { title: 'Automazione operations ospedaliere', description: 'Letti, sale operatorie, turni e supplies ottimizzati con sistemi unificati.' },
        { title: 'Elaborazione dati genomici', description: 'Pipeline cloud per sequencing, analisi di varianti e archiviazione sicura a lungo termine.' },
        { title: 'Applicazioni di salute mentale', description: 'App mobili sicure con esercizi CBT, mood tracking e accesso a counselor.' },
        { title: 'Pianificazione chirurgica AR/VR', description: 'Rendering AR/VR di anatomia 3D per pianificazione preoperatoria e formazione.' },
        { title: 'Supply chain medicale', description: 'Tracciabilità blockchain per farmaci e device con telemetria di cold chain.' },
        { title: 'Fatturazione e codifica automatizzate', description: 'RPA e NLP che estraggono dati strutturati dalle note cliniche per generare codici accurati.' },
      ],
    },
    impact: {
      badge: 'Impatto sul business',
      title: 'Impatto clinico quantificabile',
      description:
        'Le nostre soluzioni si vedono in dashboard operative, report ai regolatori e outcome dei pazienti.',
      metrics: [
        { label: 'Meno riammissioni', description: 'Calo dei tassi di riammissione grazie a remote monitoring e workflow proattivi.' },
        { label: 'Triage più rapido', description: 'Migliore routing dei pazienti con triage NLP e intake intelligente.' },
        { label: 'Tempo amministrativo risparmiato', description: 'Meno data entry e burocrazia tramite RPA e ambient documentation.' },
        { label: 'Audit ready', description: 'Audit-readiness continua per HIPAA e 21 CFR Part 11 con evidenze automatiche.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail ed e-commerce',
      title: 'Eleva il tuo storefront digitale',
      highlight: 'E-commerce',
      description:
        'Aiutiamo brand DTC, grossisti B2B e marketplace globali a guidare vendite e fidelizzazione con esperienze omnicanale veloci, personalizzate e affidabili.',
      cta: 'Avvia il tuo progetto commerce',
      statLabels: ['Store lanciati', 'GMV processato', 'Tempi di caricamento'],
    },
    features: {
      badge: 'Capacità chiave',
      title: 'Soluzioni retail complete',
      description:
        'Ingegneria commerce end-to-end per storefront digitali, fisici e B2B con focus su conversione, retention ed efficienza operativa.',
      outcomesTitle: 'Cosa rilasciamo',
      items: [
        {
          title: 'Piattaforme commerce omnicanale',
          description:
            'Esperienze unificate su web, mobile, social e store su architetture composable e flessibili.',
          details:
            'Progettiamo piattaforme headless e composable che disaccoppiano storefront ed engine commerce per lanciare canali, geografie e brand senza re-platforming.',
          outcomes: [
            'Diagramma di architettura composable con note vendor',
            'Carrello e profilo cliente unificati tra canali',
            'Performance budget dello storefront in CI',
            'Piano di integrazione del motore promo e pricing',
            'Tooling operativo per merchandising e CX',
          ],
        },
        {
          title: 'Sistemi POS',
          description:
            'POS cloud che unisce online e store con resilienza offline e integrazione di inventario e loyalty.',
          details:
            'I nostri POS sincronizzano l’inventario in tempo reale, funzionano offline, integrano hardware e alimentano analytics e loyalty per reporting unificato.',
          outcomes: [
            'App POS offline-first con risoluzione conflitti',
            'Integrazione hardware scanner e stampanti',
            'Sync inventario in tempo reale con commerce engine',
            'Riconoscimento loyalty al checkout',
            'Dashboard operativo per store manager',
          ],
        },
        {
          title: 'Personalizzazione e raccomandazioni',
          description:
            'Engine di raccomandazione AI che mostrano il prodotto giusto al cliente giusto per aumentare conversione e AOV.',
          details:
            'Costruiamo stack di personalizzazione con eventi, profili e attributi serviti via API real time, con pricing dinamico e orchestration che il marketing può tarare senza ticket.',
          outcomes: [
            'Schema eventi e modello profilo documentati',
            'API di raccomandazione per home, PDP e carrello',
            'Regole di pricing dinamico con guardrail e approvazioni',
            'Piattaforma di esperimenti per offerte e layout',
            'UI self-serve per campagne e audience',
          ],
        },
        {
          title: 'Supply chain e inventario',
          description:
            'Backend che mantiene allineati stock, fulfillment e logistica multi-magazzino anche quando cambiano domanda o sourcing.',
          details:
            'Integriamo ERP, OMS, WMS e API 3PL in un layer coerente con order routing, inventario in tempo reale, returns ed exception handling che ops può fidare nei picchi.',
          outcomes: [
            'Regole di routing per costo, velocità e stock',
            'Inventario in tempo reale tra DC, store e 3PL',
            'Workflow returns e refund con automazione',
            'Dashboard exception con alert azionabili',
            'Reporting di fill rate, on-time e shrinkage',
          ],
        },
        {
          title: 'Loyalty e rewards',
          description:
            'Piattaforme loyalty che spingono i riacquisti, premiano l’advocacy e producono dati utili.',
          details:
            'Costruiamo programmi modulari con punti, tier, gamification, mobile wallet e integrazioni con partner, con analytics che mostrano cosa muove CLV e retention.',
          outcomes: [
            'Engine di regole loyalty con tier e earn o burn',
            'Integrazione mobile wallet Apple e Google',
            'Esperienza membro su web, app e store',
            'Analytics su retention, CLV e riacquisti',
            'Tooling operativo per promo ed eccezioni',
          ],
        },
        {
          title: 'Portali B2B per il wholesale',
          description:
            'Piattaforme sicure e scalabili adatte alle realtà B2B con cataloghi custom, pricing complesso e integrazioni di procurement.',
          details:
            'I nostri portali B2B gestiscono gerarchie account, listini custom, contratti, ordini bulk, quote-to-cash e integrazioni PunchOut con Ariba, Coupa e altri.',
          outcomes: [
            'Modello di gerarchia account e permessi per ruolo',
            'Engine di catalogo e pricing per contratto',
            'Workflow quote-to-cash con approvazioni e credit check',
            'Integrazione PunchOut con le maggiori piattaforme di procurement',
            'Self-service di storico ordini, riordine e fatturazione',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Sfide del settore',
      title: 'Superare i colli di bottiglia retail',
      description:
        'Eliminiamo l’attrito tecnico tra brand, shopper e store of record così il fatturato digitale scala in modo prevedibile.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Alto cart abandonment',
          solution:
            'Disegniamo checkout senza attrito e accessibili, integriamo wallet e credenziali memorizzate e aggiungiamo retargeting personalizzato che recupera carrelli senza essere invadente.',
        },
        {
          challenge: 'Caricamenti lenti',
          solution:
            'Migrazione a architetture headless su edge con lavoro di performance basato su budget per mantenere caricamenti sotto il secondo.',
        },
        {
          challenge: 'Discoverability di prodotto debole',
          solution:
            'Integriamo search e merchandising AI, tariamo la rilevanza con i tuoi dati ed esponiamo pattern di scoperta guidata.',
        },
        {
          challenge: 'Discrepanze di inventario',
          solution:
            'Middleware robusto sincronizza l’inventario tra POS, magazzini e digitale, con job di riconciliazione contro gli oversell.',
        },
        {
          challenge: 'Customer journey scollegati',
          solution:
            'Mettiamo in produzione CDP e programmi di loyalty che ricuciono identità e comportamento tra web, app e store.',
        },
        {
          challenge: 'Picchi di traffico e downtime',
          solution:
            'Progettiamo infrastruttura cloud auto-scalabile con caching multi-layer e load test, così flash sale e Black Friday diventano momenti di pianificazione.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Casi d’uso che gestiamo nel Retail',
      description:
        'Lavoriamo con brand DTC, grossisti B2B e grandi marketplace per portare esperienze commerce che muovono il business.',
      items: [
        { title: 'Migrazione a storefront headless', description: 'Upgrade da monoliti rigidi ad architetture headless veloci con Next.js o Nuxt.' },
        { title: 'App mobile commerce', description: 'App native iOS e Android con AR, biometria e checkout one-tap pensate per la retention.' },
        { title: 'Marketplace', description: 'Marketplace multi-vendor con commission routing, dashboard vendor e qualità del catalogo.' },
        { title: 'Subscription box', description: 'Recurring billing, box personalizzati e fulfillment per modelli ad abbonamento.' },
        { title: 'Chioschi digitali in store', description: 'Chioschi touch per endless aisle, vendita assistita e self-checkout in negozio.' },
        { title: 'Voice commerce', description: 'Shopping assistito da voce con Alexa e Google Assistant per riordini.' },
        { title: 'Pianificazione predittiva dell’inventario', description: 'Forecast AI che combina stagionalità, promo e segnali esterni per ottimizzare gli acquisti.' },
        { title: 'Customer service automatizzato', description: 'Chatbot AI che gestiscono tracking, returns e FAQ 24/7 ed escalano in modo pulito.' },
      ],
    },
    impact: {
      badge: 'Impatto sul business',
      title: 'Crescita e-commerce misurabile',
      description:
        'Le nostre architetture commerce sono progettate per una sola cosa: spingere il fatturato attribuibile alle scelte tecnologiche del tuo team.',
      metrics: [
        { label: 'Aumento conversione', description: 'Spinta media del completamento checkout grazie a UX senza attrito e migrazioni headless.' },
        { label: 'Velocità pagina', description: 'Rendering ultra rapido che riduce il bounce e migliora la SEO.' },
        { label: 'LTV più alto', description: 'Customer lifetime value in crescita grazie a personalizzazione AI e loyalty gamificata.' },
        { label: 'Precisione inventario', description: 'Sincronizzazione real time tra canali che elimina virtualmente gli oversell.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply chain e logistica',
      title: 'Software logistico intelligente',
      highlight: 'Supply chain',
      description:
        'Aiutiamo shipper, vettori, 3PL e produttori a digitalizzare le operazioni end-to-end, dal piazzale e magazzino alla flotta e al last mile, con software che alza la visibilità e riduce i costi.',
      cta: 'Ottimizza la tua supply chain',
      statLabels: ['Piattaforme logistiche', 'Spedizioni tracciate', 'Guadagno medio di efficienza'],
    },
    features: {
      badge: 'Capacità chiave',
      title: 'Soluzioni logistiche complete',
      description:
        'Ingegneria per operatori di flotta, magazzini, spedizionieri e 3PL con deliverable che cambiano i KPI operativi in pochi mesi.',
      outcomesTitle: 'Cosa rilasciamo',
      items: [
        {
          title: 'Sistemi di gestione flotta',
          description:
            'Piattaforme telematiche che monitorano la salute del veicolo, tracciano le rotte in tempo reale e fanno emergere insight su carburante e guida.',
          details:
            'Integriamo GPS, OBD-II e dashcam con app driver e console dispatch. Le ops vedono flotta, rotte, carburante e comportamento in un unico cruscotto, con alert su eccezioni reali.',
          outcomes: [
            'Pipeline telematica con buffering edge',
            'Dashboard live mappa e aderenza alla rotta',
            'Reporting carburante e idle con benchmark',
            'Driver scoring di sicurezza ed efficienza',
            'Alert manutenzione collegati al ticketing officina',
          ],
        },
        {
          title: 'Automazione di magazzino (WMS)',
          description:
            'WMS intelligenti per inventario, picking automatizzato e ottimizzazione dello stoccaggio per DC ad alto volume.',
          details:
            'Le nostre implementazioni WMS sfruttano barcode e RFID, integrazioni robotiche e slotting. Ricezione, putaway, picking, packing e shipping operano come flusso coordinato.',
          outcomes: [
            'Flussi inbound e outbound configurati sul tuo DC',
            'Strategia di slotting con rivalutazione periodica',
            'Workflow di scanning mobile per pick, pack e ship',
            'Dashboard di produttività della manodopera',
            'Exception handling per danni, returns e ammanchi',
          ],
        },
        {
          title: 'Piattaforme di visibility real time',
          description:
            'Tracking end-to-end tra carrier, sensori ed ERP per una vista predittiva condivisa di ogni spedizione.',
          details:
            'Aggreghiamo dati di carrier, IoT ed ERP in una control tower con ETA predittivi, detection di eccezioni e notifiche automatiche.',
          outcomes: [
            'Framework multi-carrier con failover',
            'Modello ETA predittivo tarato sulle tue lane',
            'Notifiche via email, SMS e webhook',
            'Cockpit eccezioni per ops con workflow',
            'Tracking customer-facing brandizzato',
          ],
        },
        {
          title: 'Motori di ottimizzazione rotte',
          description:
            'Routing AI che calcola la rotta più efficiente considerando traffico, meteo, capacità e finestre.',
          details:
            'I nostri engine combinano ML, mapping dinamico e solver per multi-stop, multi-vehicle e fleet miste, aumentando i drop per route nel rispetto delle ore guida.',
          outcomes: [
            'Modello di routing documentato con vincoli',
            'Integrazione con app driver e sequenze di stop',
            'Dashboard KPI stop per route e on-time',
            'Riottimizzazione su disruption live',
            'Banco di backtesting per euristiche o provider',
          ],
        },
        {
          title: 'App last mile',
          description:
            'Esperienze mobile per driver e clienti che trasformano l’ultimo miglio in un’interazione trasparente e affidabile.',
          details:
            'Rilasciamo app driver con turn-by-turn, proof of delivery, firme e cattura eccezioni, con portali clienti che riducono le chiamate WISMO.',
          outcomes: [
            'App driver nativa con comportamento offline-first',
            'Proof of delivery con foto, firme e note',
            'Portale tracking cliente con ETA live e chat',
            'Cattura eccezioni per consegne fallite',
            'Dashboard operativo di delivery performance',
          ],
        },
        {
          title: 'Forecast inventario',
          description:
            'Analytics predittivi che mantengono lo stock nel nodo giusto al livello giusto senza immobilizzare capitale.',
          details:
            'Mescoliamo storico, promo, stagionalità e segnali esterni in forecast che alimentano replenishment e safety stock con esplicabilità per i pianificatori.',
          outcomes: [
            'Modello di forecast valutato sui tuoi storici',
            'Replenishment integrato con l’ERP',
            'Safety stock e reorder point per SKU e nodo',
            'Workbench planner con scenari',
            'Reporting di accuratezza con tuning continuo',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Sfide del settore',
      title: 'Risolvere la complessità della supply chain',
      description:
        'Disegniamo soluzioni che sciolgono nodi operativi e avvicinano dati, decisioni ed esecuzione sul campo.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Mancanza di visibility real time',
          solution:
            'Integriamo sensori IoT e API multi-carrier in una control tower centrale eliminando i punti ciechi.',
        },
        {
          challenge: 'Routing inefficiente e costi carburante alti',
          solution:
            'Implementiamo ottimizzazione AI che si adatta a traffico, meteo e capacità, riducendo carburante, chilometri e ore guida.',
        },
        {
          challenge: 'Colli di bottiglia ed errori in magazzino',
          solution:
            'Piattaforme WMS smart con RFID, barcode e pick-to-light o voice picking accelerano il throughput ed eliminano gli errori in picco.',
        },
        {
          challenge: 'Sistemi legacy frammentati',
          solution:
            'Realizziamo middleware e API gateway che collegano ERP, TMS e 3PL così i dati fluiscono puliti tra i team.',
        },
        {
          challenge: 'Spreco in cold chain',
          solution:
            'Monitoraggio IoT continuo della temperatura con alert previene perdite e protegge la conformità.',
        },
        {
          challenge: 'Attrito nel last mile',
          solution:
            'App driver con PoD e navigazione, insieme a tracking brandizzato per il cliente, garantiscono consegne trasparenti.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Casi d’uso che gestiamo nella Logistica',
      description:
        'Risolviamo sfide logistiche concrete con tecnologia data-driven che rispetta la realtà di magazzini, driver e clienti.',
      items: [
        { title: 'Cold chain monitoring', description: 'Sensori IoT e ledger tamper-evident proteggono deperibili e farmaci end-to-end.' },
        { title: 'Portali freight forwarding', description: 'Portali sicuri per quote, booking e dogane con accesso role-based.' },
        { title: 'Yard management', description: 'Soluzioni digitali per il tracking dei rimorchi e l’ottimizzazione dei dock.' },
        { title: 'Reverse logistics', description: 'Returns automation con RMA, etichette, refurbishment e analisi costi.' },
        { title: 'Portali 3PL', description: 'Dashboard multi-tenant che permettono ai 3PL di offrire visibilità ai propri clienti.' },
        { title: 'Integrazione veicoli autonomi', description: 'API e control tower per veicoli autonomi, droni e robotica.' },
        { title: 'Portali di collaborazione fornitori', description: 'Piattaforme che velocizzano comunicazione, PO e fatturazione.' },
        { title: 'Replenishment demand-driven', description: 'Sistemi che lanciano PO sulla base di POS e forecast invece che minimi statici.' },
      ],
    },
    impact: {
      badge: 'Impatto sul business',
      title: 'Impatto logistico misurabile',
      description:
        'La nostra tecnologia colpisce direttamente il bottom line eliminando sprechi e dando alle ops fiducia per impegnarsi su SLA migliori.',
      metrics: [
        { label: 'Riduzione carburante', description: 'Calo medio della spesa carburante tramite ottimizzazione AI e telematica.' },
        { label: 'Accuratezza fulfillment', description: 'Meno errori di spedizione grazie a barcode, RFID e WMS automatizzato.' },
        { label: 'Dispatch più rapido', description: 'Maggiore efficienza yard e dock con minori attese.' },
        { label: 'Visibility supply chain', description: 'Trasparenza completa dal sourcing al last mile via dashboard centralizzati.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-tech e digital natives',
      title: 'Ingegneria per innovatori',
      highlight: 'Digital Natives',
      description:
        'Diamo a startup, scale-up e aziende digital native la capacità senior di engineering per spedire più in fretta, scalare in sicurezza e trasformare l’ingegneria in un vantaggio duraturo.',
      cta: 'Accelera la tua roadmap',
      statLabels: ['Startup supportate', 'Utenti attivi', 'Tempo medio MVP'],
    },
    features: {
      badge: 'Capacità chiave',
      title: 'Ingegneria digitale completa',
      description:
        'Engineering senior per aziende tech che si muovono in fretta, dal MVP a piattaforme multi-region.',
      outcomesTitle: 'Cosa rilasciamo',
      items: [
        {
          title: 'Sviluppo piattaforme SaaS',
          description:
            'Engineering end-to-end per SaaS multi-tenant: isolamento dati, billing, tooling e onboarding.',
          details:
            'Progettiamo isolamento dei tenant, integriamo Stripe e altri billing, rilasciamo tooling e onboarding che attivano gli utenti.',
          outcomes: [
            'Pattern di isolamento documentato e revisionato',
            'Subscription billing integrato con il reporting',
            'Tooling admin per ops e support',
            'Funnel di onboarding con analytics di attivazione',
            'Baseline SLO con error budget e on-call',
          ],
        },
        {
          title: 'Architettura cloud-native',
          description:
            'Sistemi cloud-native pensati per elasticità, resilienza e costi prevedibili.',
          details:
            'Usiamo microservizi, serverless e Kubernetes dove conviene, con FinOps che mantengono lo spend cloud spiegabile.',
          outcomes: [
            'Architettura di riferimento allineata al profilo di crescita',
            'Policy di autoscaling tarate sui pattern di traffico',
            'Resilienza multi-AZ con failure mode documentati',
            'Dashboard FinOps per prodotto o team',
            'Runbook per incidenti comuni e recovery',
          ],
        },
        {
          title: 'Sviluppo MVP rapido',
          description:
            'Sprint focalizzati che portano un prodotto da concept a MVP live in poche settimane.',
          details:
            'Combiniamo product thinking con starter kit per consegnare MVP che dimostrano il mercato e evitano il rebuild post-launch.',
          outcomes: [
            'Documento di scope con metriche di successo',
            'Prodotto live nel tempo concordato',
            'Libreria di componenti per le iterazioni successive',
            'Analytics e feedback loop dal giorno uno',
            'Roadmap per scale post-MVP e crescita team',
          ],
        },
        {
          title: 'API economy e integrazioni',
          description:
            'API REST e GraphQL sicure e developer-friendly che aprono il prodotto a ecosistemi e partner.',
          details:
            'Progettiamo API con versioning, rate limiting e OAuth 2.0, rilasciamo developer portal e SDK nei linguaggi più usati dai tuoi clienti.',
          outcomes: [
            'Style guide API e politica di versioning',
            'Developer portal con docs, sandbox e quickstart',
            'SDK nei linguaggi principali',
            'Baseline rate limiting, auth e audit',
            'Analytics di adozione per prodotto e partnership',
          ],
        },
        {
          title: 'Data engineering e pipeline AI',
          description:
            'La fondazione data e ML per evolvere da feature flag a intelligenza difendibile.',
          details:
            'Costruiamo event tracking, ingestion, warehouse e lakehouse e poi feature store, deployment di modelli e monitoring.',
          outcomes: [
            'Tassonomia eventi e baseline di tracking',
            'Warehouse o lakehouse allineato alla roadmap',
            'Pattern feature store e model serving',
            'Monitoring di qualità e bias sui modelli live',
            'Modello di costo per storage, compute e ML',
          ],
        },
        {
          title: 'DevOps e CI/CD',
          description:
            'Una pipeline che trasforma i commit in deploy sicuri più volte al giorno con metriche per dimostrarlo.',
          details:
            'Implementiamo CI/CD, IaC, test automatizzati e progressive delivery per ridurre lead time e change failure rate.',
          outcomes: [
            'Template CI/CD con gate di qualità e sicurezza',
            'Libreria IaC per i servizi core',
            'Strategia di test unit, integration ed e2e',
            'Progressive delivery con feature flag',
            'Dashboard DORA per la leadership',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Sfide del settore',
      title: 'Sbloccare le startup tech',
      description:
        'Eliminiamo l’attrito tecnico che impedisce ai digital native di scalare.',
      challengeLabel: 'La sfida',
      solutionLabel: 'La nostra soluzione',
      items: [
        {
          challenge: 'Time to market lento',
          solution:
            'Team agile senior e starter kit comprovati comprimono i tempi di MVP per validare, vincere clienti e raccogliere fondi più velocemente.',
        },
        {
          challenge: 'Instabilità di piattaforma a scala',
          solution:
            'Migriamo monoliti fragili a servizi cloud-native resilienti con failure mode chiari.',
        },
        {
          challenge: 'Costi cloud elevati',
          solution:
            'Ottimizziamo query, dimensioniamo i workload e adottiamo serverless o container dove serve.',
        },
        {
          challenge: 'Debito tecnico crescente',
          solution:
            'Pod dedicati refactorano legacy, scrivono test mancanti e introducono CI/CD senza fermare il prodotto.',
        },
        {
          challenge: 'Carenza di talento ingegneristico',
          solution:
            'Aumentiamo il team con full-stack engineer senior che producono dalla prima settimana.',
        },
        {
          challenge: 'Multi-tenancy complessa',
          solution:
            'Architettiamo isolamento sicuro, RBAC e provisioning dinamico per scalare il B2B SaaS dal primo cliente al centesimo.',
        },
      ],
    },
    useCases: {
      badge: 'Casi d’uso',
      title: 'Casi d’uso che gestiamo in Hi-tech',
      description:
        'Lavoriamo con founder, CTO ed engineering lead per costruire prodotti scalabili e dirompenti senza il burn-out abituale.',
      items: [
        { title: 'Modernizzazione di piattaforma', description: 'Refactor di monoliti early stage in microservizi robusti durante la crescita.' },
        { title: 'Portali B2B SaaS', description: 'App SaaS enterprise con RBAC, gerarchie custom e tooling admin di cui IT si fida.' },
        { title: 'App mobile consumer', description: 'App cross-platform performanti con React Native o Flutter.' },
        { title: 'Prodotti potenziati da AI', description: 'Integrazione di gen AI, vision e NLP per differenziatori difendibili.' },
        { title: 'Marketplace', description: 'Marketplace multi-sided con routing, escrow e trust.' },
        { title: 'Tooling per developer', description: 'SDK, CLI e portali di docs per prodotti tecnici.' },
        { title: 'Ottimizzazione costi cloud', description: 'Audit e re-architecture dei deployment cloud con risparmi misurabili.' },
        { title: 'Salvataggio startup', description: 'Stabilizzazione, refactor e scale di codebase ereditate.' },
      ],
    },
    impact: {
      badge: 'Impatto sul business',
      title: 'Velocità e scala',
      description:
        'Non scriviamo solo codice, acceleriamo crescita e migliorano gli unit economics rendendo l’ingegneria una ragione forte per investire in te.',
      metrics: [
        { label: 'MVP più rapido', description: 'Accelerazione vs hiring tradizionale per portare il core a mercato.' },
        { label: 'Risparmio cloud', description: 'Riduzione media dello spend mensile dopo audit di architettura e FinOps.' },
        { label: 'Deploy senza downtime', description: 'CI/CD totalmente automatizzato e test rigorosi con progressive delivery.' },
        { label: 'Deploy al mese', description: 'Iterazione rapida e delivery continua guidata dal feedback reale.' },
      ],
    },
  },
}
