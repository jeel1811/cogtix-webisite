import type { IndustryContentByVariant } from './types'

export const nlIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Financiële diensten',
      title: 'Volgende generatie software voor BFSI',
      highlight: 'Financiële diensten',
      description:
        'Wij helpen banken, verzekeraars en fintech-innovators veilige, compliant en schaalbare digitale producten te leveren. Van core banking modernisering tot algoritmische trading bouwen onze engineering teams de systemen die geld veilig op grote schaal verplaatsen.',
      cta: 'Bespreek je FinTech project',
      statLabels: ['FinTech-platforms', 'Gegarandeerde uptime', 'Compliant'],
    },
    features: {
      badge: 'Kerncapaciteiten',
      title: 'Complete financiële oplossingen',
      description:
        'Een volledig spectrum van engineering-services voor retail- en zakelijke banking, betalingen, wealth, verzekeringen en kapitaalmarkten.',
      outcomesTitle: 'Wat wij leveren',
      items: [
        {
          title: 'Digitale banking platforms',
          description:
            'Banking ervaringen die op elk apparaat native voelen, met de veerkracht en beveiliging die gereguleerde workloads vereisen.',
          details:
            'We bouwen omnichannel platforms met geünificeerde dashboards, mobile-first journeys, real-time transactieverwerking en modulaire core banking integraties. Onze referentiearchitecturen ondersteunen al miljoenen maandelijkse logins.',
          outcomes: [
            'Referentie-omnichannel-architectuur web, mobile en filiaal',
            'Auth-baseline met biometrie, step-up en FIDO2',
            'Real-time ledger en transactie-API’s met SLA’s',
            'Operationele dashboards voor fraude, support en product',
            'Hand-off runbooks voor SRE, compliance en customer ops',
          ],
        },
        {
          title: 'Betalingsverwerking',
          description:
            'PCI-DSS aligned gateways, wallets en cross-border rails, ontworpen voor hoge throughput en voorspelbare settlement.',
          details:
            'Onze payments-praktijk omvat kaartacceptatie, EMV, A2A, wallets en blockchain-settlement, met idempotente retries, exactly-once boekhouding en reconciliation tools die finance, ops en engineering uitlijnen.',
          outcomes: [
            'PCI-DSS aligned tokenisatie- en vault-strategie',
            'Idempotente payment API’s met reconciliation events',
            'Wallet-, EMV- en bankrail-connectors met sandbox',
            'Settlement reporting gekoppeld aan finance ledger',
            'Chargeback- en dispute-workflow met audit trail',
          ],
        },
        {
          title: 'WealthTech en robo-advisors',
          description:
            'Wealth- en advisory platforms die kwantitatieve modellen combineren met intuïtieve klantervaringen voor retail en HNW.',
          details:
            'We bouwen automatische rebalancing engines, risicoprofielen, AI-copiloten voor adviseurs en dashboards die custodians, brokerages en alternatieve data aggregeren. Compliance, geschiktheid en audit zijn vanaf sprint één ingebakken.',
          outcomes: [
            'Geschiktheids- en KYC-flows in lijn met regelgevers',
            'Rebalancing engine met gedocumenteerde strategieën',
            'Custodian- en brokerage-integraties met reconciliation',
            'Client reporting in web en PDF',
            'Adviseur copilot met volledige audithistorie',
          ],
        },
        {
          title: 'InsurTech-oplossingen',
          description:
            'End-to-end verzekeringservaringen van quote tot claim met automatisering die doorlooptijden inkort zonder governance op te geven.',
          details:
            'We moderniseren onderschrijving, polisbeheer en schadeafhandeling met AI scoring, RPA, OCR en self-service portals voor verzekerden en makelaars en korten claim cycles met 40 tot 60 procent.',
          outcomes: [
            'Quote en bind API’s met regel-engine integratie',
            'AI-ondersteunde onderschrijving met human-in-the-loop',
            'FNOL-workflow met OCR en triage',
            'Self-service portals voor verzekerden, makelaars en experts',
            'Operationele dashboards loss ratio en SLA-tracking',
          ],
        },
        {
          title: 'Compliance en RegTech',
          description:
            'Geautomatiseerde KYC-, AML- en reporting-platforms die compliance veranderen van kostenpost naar continue control plane.',
          details:
            'We integreren biometrische identiteitsverificatie, sanctie- en PEP-screening, transaction monitoring, case management en regulatory reporting pipelines die GDPR, PSD2, FATCA en KYC en AML regimes meerlandelijk dekken.',
          outcomes: [
            'KYC- en AML-onboarding met biometrische checks',
            'Pipelines voor sanctie-, PEP- en adverse media-screening',
            'Transaction monitoring regels met alarm-triage',
            'Case management voor analisten met bewijsketen',
            'Regulatory exports voor lokale toezichthouders',
          ],
        },
        {
          title: 'Blockchain en smart contracts',
          description:
            'Permissioned- en public-chain-oplossingen voor tokenisatie, settlement en manipulatiebestendige audit trails op enterprise-infrastructuur.',
          details:
            'Onze blockchain-teams ontwerpen DeFi-achtige producten, tokenisatie en audit trails op Ethereum, Polygon en Hyperledger Fabric met key custody, gas-optimalisatie en compliance hooks voor institutioneel gebruik.',
          outcomes: [
            'Tokenmodel en smart contract suite peer reviewed',
            'Custody-pattern geïntegreerd met HSM of MPC',
            'Reconciliation tussen on-chain en core',
            'Operationele tools voor ops, compliance en treasury',
            'Security review bridges, oracles en upgradability',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branche-uitdagingen',
      title: 'De moeilijkste FinTech-problemen oplossen',
      description:
        'We verwijderen de technische wrijving die financiële instellingen ophoudt zodat jouw teams zich richten op klanten, product en groei.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Veranderend regelgevingslandschap',
          solution:
            'We verankeren geautomatiseerde compliance-engines, robuuste audit trails en modulaire control libraries voor KYC, AML, GDPR en PSD2 in jouw platform, zodat nieuwe verplichtingen configuratie zijn en geen risicovolle rebuild.',
        },
        {
          challenge: 'Toenemende cyber- en fraudedreiging',
          solution:
            'We ontwerpen zero-trust architecturen, end-to-end encryptie en AI-detectie die transacties beveiligen, API’s harden en verdacht gedrag in real time signaleren zonder eerlijke klanten te vertragen.',
        },
        {
          challenge: 'Beperkingen door legacy systemen',
          solution:
            'Met een strangler fig benadering omhullen we cores met moderne API’s, halen we functies in microservices en migreren we data progressief zonder de roadmap te bevriezen.',
        },
        {
          challenge: 'Gefragmenteerde klantdata',
          solution:
            'We zetten data lakes, customer 360 platforms en analytics pipelines in die banking, verzekeringen en digitale touchpoints samenbrengen voor consistente omnichannel ervaringen.',
        },
        {
          challenge: 'Inefficiënte handmatige processen',
          solution:
            'We integreren RPA, intelligente documentverwerking en workflow-automatisering in originatie, onderschrijving en claims om repetitief werk weg te halen.',
        },
        {
          challenge: 'Trage settlement van betalingen',
          solution:
            'We bouwen high-throughput, low-latency gateways en getokeniseerde settlementlagen met smart contracts voor bijna directe cross-border overschrijvingen met voorspelbare kosten.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Use cases die wij bedienen in Financiële diensten',
      description:
        'We werken met banken, fintechs en verzekeraars aan concrete tech-uitdagingen door de hele BFSI-keten.',
      items: [
        { title: 'Core banking modernisering', description: 'Migratie van banking monolieten naar agile cloud-native microservices voor flexibiliteit en snellere releases.' },
        { title: 'Open banking API portals', description: 'Veilige API gateways en developer experiences voor het delen van data met gereguleerde partijen.' },
        { title: 'Frauddetectiesystemen', description: 'ML-modellen die transacties real time scoren en thresholds bijstellen zonder analisten te overstelpen.' },
        { title: 'Personal finance management', description: 'Mobiele ervaringen die rekeningen aggregeren en gepersonaliseerde sparingsignalen geven.' },
        { title: 'Geautomatiseerde leningoorsprong', description: 'End-to-end digitale leen-platforms met alternatieve data, AI scoring en uitbetaling in minuten.' },
        { title: 'Algoritmische trading', description: 'HFT-architecturen met ultra lage latency, CEP en herhaalbare backtests.' },
        { title: 'Verzekerings-telematics', description: 'Usage-based verzekering met IoT-data van connected vehicles en pricing engines.' },
        { title: 'Onboarding (eKYC)', description: 'Wrijvingsloze digitale onboarding met OCR, liveness en risicogebaseerde step-up.' },
      ],
    },
    impact: {
      badge: 'Business impact',
      title: 'Meetbare financiële impact',
      description:
        'Onze engineering vertaalt zich direct in operationele efficiëntie, sterkere security en verdedigbare groeicijfers.',
      metrics: [
        { label: 'Snellere onboarding', description: 'Verkorting van onboarding via geautomatiseerd eKYC, OCR en risicogebaseerde besluitvorming.' },
        { label: 'Fraude preventie', description: 'Nauwkeurigheid bij detectie en blokkade van frauduleuze transacties met op maat gemaakte ML-modellen.' },
        { label: 'Kostenreductie', description: 'Lagere handmatige verwerkingskosten door RPA en intelligente automatisering in backoffice.' },
        { label: 'Transactievolume', description: 'Meer piekcapaciteit door cloud-native microservices en elastische infra.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Zorg en life sciences',
      title: 'Patiëntenzorg transformeren met technologie',
      highlight: 'Zorg',
      description:
        'We helpen aanbieders, betalers en life science organisaties betere uitkomsten te leveren met veilige, interoperabele en mensgerichte digitale oplossingen, allemaal afgestemd op HIPAA, FDA en mondiale gezondheidsdataregels.',
      cta: 'Bespreek je zorgapp',
      statLabels: ['HealthTech-apps', 'Compliant', 'Beheerde patiënten'],
    },
    features: {
      badge: 'Kerncapaciteiten',
      title: 'Volledige zorgoplossingen',
      description:
        'Engineering services voor ziekenhuizen, klinieken, betalers, healthtech en life sciences, ontworpen rond clinici en patiënten.',
      outcomesTitle: 'Wat wij leveren',
      items: [
        {
          title: 'Telemedicine platforms',
          description:
            'Veilige, hoogwaardige videoconsulten met geïntegreerde planning, dossier, recepten en betalingen.',
          details:
            'We bouwen HIPAA aligned telemedicine apps met WebRTC, veilige messaging, e-prescription en betalingen, met low-bandwidth fallbacks zodat zorg ook landelijke gebieden bereikt.',
          outcomes: [
            'WebRTC-pipeline voor low-bandwidth netwerken',
            'Planning en intake geïntegreerd met EHR',
            'Veilige messaging en document delen met consent',
            'e-Prescription en refill workflow met audit logs',
            'Hand-off van betalingen en claims naar revenue cycle',
          ],
        },
        {
          title: 'EHR en EMR integratie',
          description:
            'Maatwerk EHR of EMR systemen en standaardgebaseerde integratie voor één patiëntdossier.',
          details:
            'Onze interoperabiliteitspraktijk gebruikt HL7 v2, FHIR R4 en CDA om ziekenhuizen, klinieken, labs, beeldvorming en registers te verbinden. We migreren data en leveren developer-vriendelijke API’s.',
          outcomes: [
            'FHIR R4 façade over legacy HL7 v2 interfaces',
            'Patient matching en reconciliation strategie',
            'Bulk data export voor analytics en population health',
            'Provider directory en consent management baseline',
            'Developer portal met SMART on FHIR voorbeelden',
          ],
        },
        {
          title: 'IoMT en wearables integratie',
          description:
            'Veilige verbinding van medische devices en wearables met klinische platforms voor remote monitoring en alerts.',
          details:
            'We bouwen veilige ingestion-pipelines voor IoMT en wearables met edge filtering, protocolvertaling en klinische alerts die workflow en on-call respecteren.',
          outcomes: [
            'Device gateway met Bluetooth, LTE-M en NB-IoT',
            'Edge regels om ruis voor alerts te onderdrukken',
            'Time series store met retentie volgens compliance',
            'Care team alerting met escalatiebeleid',
            'Patient app met self-care prompts',
          ],
        },
        {
          title: 'Healthcare AI en analytics',
          description:
            'Voorspellende modellen, beeldvormingsanalyse en klinische beslissingsondersteuning die clinici aanvullen zonder workflow te verstoren.',
          details:
            'Onze healthcare AI omvat risicostratificatie, lengte-van-verblijf, no-shows, beeld triage en CDS, met model cards, bias monitoring en clinici-feedback.',
          outcomes: [
            'Model card en gebruiksdoel per model',
            'Bias en performance dashboards',
            'EHR integratie met minimum-klik UX',
            'Feedback loop voor continue verbetering',
            'Audit trail voor elke getoonde voorspelling',
          ],
        },
        {
          title: 'Apotheekmanagement',
          description:
            'Apotheekautomatisering, voorraad en receptafhandeling voor publieke, ziekenhuis en mail order.',
          details:
            'We bouwen volledige systemen die e-prescribing, automatische bijbestelling, bereidings-workflows, controlled substance audit en last-mile integraties dekken.',
          outcomes: [
            'e-Prescribing integratie met Surescripts of equivalent',
            'Voorraadmodel met automatische reorder-suggesties',
            'Bereidings- en verificatie-workflow met sign-off',
            'Audit trail voor controlled substances',
            'Last-mile integratie met patient updates',
          ],
        },
        {
          title: 'Klinische onderzoeksbeheer',
          description:
            'Onderzoeksplatformen die werving, EDC en regelgevende compliance versnellen.',
          details:
            'Onze CTMS-uitrol omvat protocolontwerp, werving, EDC, site monitoring, AE-rapportage en 21 CFR Part 11 audit, voor sponsoren en CRO’s.',
          outcomes: [
            'Protocolbibliotheek met versies en amendementen',
            'Wervingstrechter met geschiktheids-prescreen',
            'EDC-formulieren met edit checks en reviewer-flow',
            'AE-capture gekoppeld aan safety monitoring',
            'Audit log en e-handtekening 21 CFR Part 11',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branche-uitdagingen',
      title: 'Zorgbarrières overwinnen',
      description:
        'We lossen de technische complexiteit op die klinische teams afleidt zodat zij zich richten op uitkomsten.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Strikte HIPAA en FDA compliance',
          solution:
            'We ontwerpen platforms met encryptie, gedetailleerde audit logs en toegangscontroles in lijn met HIPAA, GDPR en FDA, zonder dagelijks zorgwerk te vertragen.',
        },
        {
          challenge: 'Patientendata in silo’s',
          solution:
            'Met HL7 en FHIR bouwen we interoperabele lagen die legacy EHRs, labs, beeldvorming en partnerklinieken verbinden tot één longitudinaal beeld.',
        },
        {
          challenge: 'Lage patientbetrokkenheid',
          solution:
            'We ontwerpen intuïtieve portals en mobiele apps met makkelijke planning, veilige messaging en gepersonaliseerde insights om retentie en therapietrouw te verhogen.',
        },
        {
          challenge: 'Burn-out bij artsen',
          solution:
            'AI-dictaat, ambient documentation en geautomatiseerde facturering verlagen administratieve last zodat artsen meer tijd aan patiënten besteden.',
        },
        {
          challenge: 'Vertraagde diagnostiek',
          solution:
            'We leggen ML en computer vision over PACS en labs voor triage van kritische gevallen en prioriteit voor de radioloog.',
        },
        {
          challenge: 'Beheer van chronische aandoeningen',
          solution:
            'We integreren IoMT-wearables en remote monitoring met klinische dashboards, met slimme alerts voor proactieve interventies.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Use cases die wij bedienen in de zorg',
      description:
        'We pakken kritieke uitdagingen aan in het hele zorgcontinuüm met technologie die klinische realiteit en patiëntervaring respecteert.',
      items: [
        { title: 'Remote patient monitoring', description: 'Wearable-data naar klinische dashboards met alerts en trendanalyse voor chronische aandoeningen.' },
        { title: 'Digitale triage chatbots', description: 'AI-gesprekken die symptomen evalueren en patiënten naar het juiste zorgniveau leiden.' },
        { title: 'Ziekenhuis automatisering', description: 'Bedden, OK-planning, roosters en supplies via verenigde operationele systemen.' },
        { title: 'Genomische data', description: 'Cloud-pipelines voor sequencing, variantanalyse en veilige langetermijnopslag.' },
        { title: 'Mental health-apps', description: 'Veilige mobiele apps met CBT-oefeningen, mood tracking en directe toegang tot counselors.' },
        { title: 'Chirurgische planning AR/VR', description: 'AR/VR-rendering van 3D-anatomie voor preoperatieve planning en training.' },
        { title: 'Medische supply chain', description: 'Blockchain traceability voor farma en devices met cold chain telemetrie.' },
        { title: 'Geautomatiseerde facturering en codering', description: 'RPA en NLP die data uit klinische notities halen voor accurate facturering.' },
      ],
    },
    impact: {
      badge: 'Business impact',
      title: 'Kwantificeerbare klinische impact',
      description:
        'Onze oplossingen verschijnen even hard in operationele dashboards, regulator-rapporten en patiëntenuitkomsten.',
      metrics: [
        { label: 'Minder heropnames', description: 'Daling van heropname dankzij remote monitoring en proactieve workflows.' },
        { label: 'Snellere triage', description: 'Betere patient routing met NLP-triage en intelligente intake.' },
        { label: 'Bespaarde admin-tijd', description: 'Minder data-invoer en papierwerk via RPA en ambient documentation.' },
        { label: 'Audit ready', description: 'Continue HIPAA en 21 CFR Part 11 audit-readiness via geautomatiseerde evidence.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail en e-commerce',
      title: 'Til je digitale storefront op',
      highlight: 'E-commerce',
      description:
        'We helpen DTC-merken, B2B-groothandels en wereldwijde marktplaatsen verkoop en loyaliteit te stuwen met snelle, gepersonaliseerde en betrouwbare omnichannel ervaringen.',
      cta: 'Start je commerce-project',
      statLabels: ['Stores live', 'Verwerkt GMV', 'Laadtijden'],
    },
    features: {
      badge: 'Kerncapaciteiten',
      title: 'Complete retail-oplossingen',
      description:
        'End-to-end commerce engineering voor digitale, fysieke en B2B storefronts met focus op conversie, retentie en operationele efficiëntie.',
      outcomesTitle: 'Wat wij leveren',
      items: [
        {
          title: 'Omnichannel commerce platforms',
          description:
            'Geünificeerde shopping-ervaringen over web, mobile, social en winkel op flexibele, composable architecturen.',
          details:
            'We ontwerpen headless en composable platforms die storefront en commerce engines ontkoppelen zodat nieuwe kanalen, geografieën en merken zonder re-platforming gelanceerd worden.',
          outcomes: [
            'Composable architectuurdiagram met vendor-notities',
            'Geünificeerde cart en klantprofiel over kanalen',
            'Storefront performance budget afgedwongen in CI',
            'Integratieplan voor promotie- en pricing-engine',
            'Operationele tools voor merchandising en CX',
          ],
        },
        {
          title: 'Kassasystemen (POS)',
          description:
            'Cloud POS dat online en winkel verbindt met offline veerkracht en strakke voorraad- en loyaltyintegratie.',
          details:
            'Onze POS synchroniseren voorraad real time, werken offline, integreren randapparatuur en voeden analytics en loyalty voor verenigd reporting.',
          outcomes: [
            'Offline-first POS-app met conflictoplossing',
            'Hardware-integratie voor scanners en printers',
            'Real-time voorraad-sync met commerce engine',
            'Loyalty-herkenning bij checkout',
            'Operationeel dashboard voor winkelmanagers',
          ],
        },
        {
          title: 'Personalisatie en aanbevelingen',
          description:
            'AI-aanbevelingen die het juiste product aan de juiste shopper laten zien om conversie en AOV te tillen.',
          details:
            'We bouwen personalisatie-stacks met events, profielen en attributen, geserveerd via realtime API’s, met dynamische pricing en orchestration die marketers zelf kunnen tunen.',
          outcomes: [
            'Eventschema en profielmodel gedocumenteerd',
            'Aanbevelings-API’s voor home, PDP en cart',
            'Pricing-regels met guardrails en goedkeuringen',
            'Experimentplatform voor offers en layouts',
            'Self-service UI voor campagnes en audiences',
          ],
        },
        {
          title: 'Supply chain en voorraad',
          description:
            'Backend dat stock, fulfillment en multi-warehouse logistiek synchroon houdt, ook bij wisselende vraag of sourcing.',
          details:
            'We integreren ERP’s, OMS, WMS en 3PL API’s in één laag met order routing, real-time voorraad, returns en exceptions die ops in piek vertrouwt.',
          outcomes: [
            'Routing op kosten, snelheid en stock',
            'Real-time voorraad over DC’s, winkels en 3PLs',
            'Returns- en refund-workflow met automatisering',
            'Exceptions-dashboard met actionable alerts',
            'Reporting van fill rate, on-time en shrinkage',
          ],
        },
        {
          title: 'Loyalty en rewards',
          description:
            'Loyaltyplatforms die herhaalaankopen aanjagen, advocacy belonen en bruikbare data opleveren.',
          details:
            'We bouwen modulaire programma’s met punten, tiers, gamification, mobile wallet en partnerintegraties met analytics die laten zien wat CLV en retentie beweegt.',
          outcomes: [
            'Loyalty rules engine met tiers en earn of burn',
            'Mobile wallet integratie Apple en Google',
            'Lid-ervaring web, app en winkel',
            'Analytics over retentie, CLV en herhaalaankopen',
            'Operationele tools voor promo’s en exceptions',
          ],
        },
        {
          title: 'B2B groothandelsportals',
          description:
            'Veilige, schaalbare platforms afgestemd op B2B met custom catalogi, complexe pricing en procurement-integraties.',
          details:
            'Onze B2B-portals beheren accounthiërarchieën, custom prijslijsten, contractprijzen, bulk orders, quote-to-cash en PunchOut-integraties met Ariba, Coupa en andere.',
          outcomes: [
            'Accounthiërarchie en role-based permissies',
            'Custom prijsboek en contractprijs-engine',
            'Quote-to-cash workflow met goedkeuringen en kredietchecks',
            'PunchOut-integratie met grote procurement-platforms',
            'Self-service besteloverzicht, reorder en facturering',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branche-uitdagingen',
      title: 'Retail-knelpunten doorbreken',
      description:
        'We verwijderen de technische wrijving tussen merk, shopper en store of record zodat digitale omzet voorspelbaar schaalt.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Hoge cart abandonment',
          solution:
            'We ontwerpen wrijvingsloze, toegankelijke checkouts, integreren wallets en opgeslagen credentials en voegen gepersonaliseerde retargeting toe die niet opdringerig voelt.',
        },
        {
          challenge: 'Trage paginalaad',
          solution:
            'Migratie naar headless architecturen op edge networks met budget-gedreven performancewerk dat sub-seconde loads beschermt.',
        },
        {
          challenge: 'Slechte productvindbaarheid',
          solution:
            'We integreren AI-search en merchandising, tunen relevantie met jouw data en voeren guided discovery patronen in die intentie omzetten in add to cart.',
        },
        {
          challenge: 'Voorraadverschillen',
          solution:
            'Robuuste middleware synchroniseert voorraad tussen POS, magazijnen en digitaal met reconciliation jobs tegen oversells in het weekend.',
        },
        {
          challenge: 'Losgezongen customer journeys',
          solution:
            'We zetten CDP’s en loyaltyprogramma’s in die identiteit en gedrag over web, app en winkel verbinden zodat service, marketing en merchandising hetzelfde beeld gebruiken.',
        },
        {
          challenge: 'Trafficpieken en downtime',
          solution:
            'We ontwerpen auto-scaling cloud infra met multi-layer caching en load testing zodat flash sales en Black Friday een planningsmoment worden in plaats van een war room.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Use cases die wij bedienen in retail',
      description:
        'We werken met DTC-merken, B2B-groothandels en grote marktplaatsen om commerce-ervaringen te leveren die het bedrijf vooruit helpen.',
      items: [
        { title: 'Headless storefront migratie', description: 'Upgrade van rigide monolieten naar snelle headless architecturen met Next.js of Nuxt.' },
        { title: 'Mobile commerce-apps', description: 'Native iOS- en Android-apps met AR, biometrie en one-tap checkout voor retentie.' },
        { title: 'Marktplaatsen', description: 'Multi-vendor marketplaces met commission routing, vendor dashboards en catalog quality.' },
        { title: 'Subscription box services', description: 'Recurring billing, custom boxen en fulfillment voor abonnementen met churn-bewustzijn.' },
        { title: 'Digitale in-store kiosken', description: 'Touchkiosken voor endless aisle, assisted selling en self-checkout in winkels.' },
        { title: 'Voice commerce', description: 'Stem-assisted shopping via Alexa en Google Assistant voor reorders.' },
        { title: 'Voorspellende voorraadplanning', description: 'AI-forecast die seizoen, promo’s en externe signalen combineert voor inkoopbeslissingen.' },
        { title: 'Geautomatiseerde klantenservice', description: 'AI-chatbots voor tracking, returns en FAQs 24/7 met nette escalaties.' },
      ],
    },
    impact: {
      badge: 'Business impact',
      title: 'Meetbare e-commerce groei',
      description:
        'Onze commerce-architecturen zijn ontworpen voor één ding, namelijk omzet die toe te schrijven is aan jouw tech-investering.',
      metrics: [
        { label: 'Hogere conversie', description: 'Gemiddelde stijging in checkout-voltooiing dankzij wrijvingsloze UX en headless migraties.' },
        { label: 'Pagina-snelheid', description: 'Snelle storefront-rendering die bounce verlaagt en SEO versterkt.' },
        { label: 'Hogere LTV', description: 'Stijging van customer lifetime value door AI-personalisatie en gegamificeerde loyalty.' },
        { label: 'Voorraadnauwkeurigheid', description: 'Real-time synchronisatie tussen kanalen die oversells praktisch elimineert.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply chain en logistiek',
      title: 'Intelligente logistieke software',
      highlight: 'Supply chain',
      description:
        'We helpen verladers, vervoerders, 3PLs en fabrikanten operaties end-to-end te digitaliseren, van yard en magazijn tot fleet en last mile, met software die zichtbaarheid verhoogt en kosten verlaagt.',
      cta: 'Optimaliseer je supply chain',
      statLabels: ['Logistieke platforms', 'Gevolgde zendingen', 'Gem. efficiëntiewinst'],
    },
    features: {
      badge: 'Kerncapaciteiten',
      title: 'Volledige logistieke oplossingen',
      description:
        'Engineering voor fleet operators, magazijnen, expediteurs en 3PL-aanbieders met deliverables die operationele cijfers binnen maanden veranderen.',
      outcomesTitle: 'Wat wij leveren',
      items: [
        {
          title: 'Fleet management',
          description:
            'Telematicaplatforms die voertuiggezondheid monitoren, routes real time volgen en brandstof- en chauffeursinzichten leveren.',
          details:
            'We integreren GPS, OBD-II en dashcam met chauffeurapps en dispatchconsoles. Operations krijgt één beeld van fleet, route, fuel en gedrag met alerts voor echte uitzonderingen.',
          outcomes: [
            'Telematica-pipeline met edge buffering',
            'Live kaart- en routeadherentie-dashboards',
            'Fuel- en idle-rapportage met benchmarks',
            'Chauffeurscoring op veiligheid en efficiëntie',
            'Onderhoudsalerts gekoppeld aan werkplaatsticketing',
          ],
        },
        {
          title: 'Magazijnautomatisering (WMS)',
          description:
            'Slimme WMS-oplossingen voor voorraad, geautomatiseerd picken en slot-optimalisatie voor hoge volumes.',
          details:
            'Onze WMS-implementaties gebruiken barcode en RFID, robotica-integratie en slotting. Ontvangst, putaway, picking, packing en shipping lopen als gecoördineerd flow met exception handling en arbeidstracking.',
          outcomes: [
            'Inbound- en outbound-flows ingericht op je DC',
            'Slottingstrategie met periodieke herevaluatie',
            'Mobiele scan-flows voor pick, pack en ship',
            'Productiviteitsdashboards voor arbeidskracht',
            'Exception handling voor schade, returns en tekorten',
          ],
        },
        {
          title: 'Real-time visibility',
          description:
            'End-to-end tracking over carriers, sensoren en ERPs voor een gedeelde, voorspellende blik op elke zending.',
          details:
            'We aggregeren data van carriers, IoT en ERPs in een control tower met voorspellende ETAs, exception detection en automatische notificaties.',
          outcomes: [
            'Multi-carrier framework met failover',
            'Voorspellend ETA-model afgestemd op je lanes',
            'Notificaties via email, SMS en webhook',
            'Exception cockpit voor ops met workflow',
            'Klantgericht tracking met branding',
          ],
        },
        {
          title: 'Route-optimalisatie',
          description:
            'AI-routing die de meest efficiënte route berekent rekening houdend met verkeer, weer, capaciteit en tijdvensters.',
          details:
            'Onze engines combineren ML, dynamische mapping en constraint solvers voor multi-stop, multi-vehicle en mixed fleet, waardoor drops per route stijgen zonder chauffeursuren te overschrijden.',
          outcomes: [
            'Routingmodel gedocumenteerd met constraints',
            'Chauffeurapp-integratie met sequenced stops',
            'KPI-dashboard voor stops per route en on-time',
            'Re-optimalisatie bij live-verstoringen',
            'Backtesting harness voor heuristieken of providers',
          ],
        },
        {
          title: 'Last-mile-apps',
          description:
            'Mobiele ervaringen voor chauffeurs en klanten die de laatste mijl in een transparente en vertrouwde interactie veranderen.',
          details:
            'We leveren chauffeurapps met turn-by-turn, proof of delivery, handtekeningen en exceptie-capture, plus klantgerichte trackingportals die WISMO-calls verminderen.',
          outcomes: [
            'Native chauffeurapp met offline-first gedrag',
            'Proof of delivery met foto, handtekening en notities',
            'Klant tracking-portal met live ETA en chat',
            'Exceptiecapture voor mislukte leveringen met workflow',
            'Operationeel dashboard voor delivery-performance',
          ],
        },
        {
          title: 'Voorraadprognose',
          description:
            'Voorspellende analytics die voorraad op het juiste niveau in het juiste knooppunt houden zonder kapitaal vast te zetten.',
          details:
            'We mengen historische verkoop, promo’s, seizoen en externe signalen tot prognoses die replenishment en safety stock voeden, met uitlegbaarheid voor planners.',
          outcomes: [
            'Prognosemodel geëvalueerd tegen jouw historie',
            'Replenishment-aanbevelingen geïntegreerd met ERP',
            'Safety stock en reorder points per SKU en knoop',
            'Planner workbench met scenario’s',
            'Forecast nauwkeurigheidsrapportage met tuning',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branche-uitdagingen',
      title: 'Supply-chain-complexiteit oplossen',
      description:
        'We ontwerpen oplossingen die operationele knopen losser maken en data, beslissingen en uitvoering in het veld dichter bij elkaar brengen.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Geen real-time zicht',
          solution:
            'We integreren IoT-sensoren en multi-carrier API’s in een centrale control tower zodat blinde vlekken verdwijnen.',
        },
        {
          challenge: 'Inefficiënte routing en hoge brandstofkosten',
          solution:
            'We zetten AI-routing in die zich aanpast aan verkeer, weer en capaciteit en zo brandstof, kilometers en chauffeursuren verlaagt.',
        },
        {
          challenge: 'Magazijn-knelpunten en fouten',
          solution:
            'Slimme WMS met RFID, barcode en pick-to-light of voice picking versnellen throughput en elimineren fouten in piek.',
        },
        {
          challenge: 'Gefragmenteerde legacy systemen',
          solution:
            'We bouwen middleware en API gateways die ERPs, TMS en 3PL platforms verbinden zodat data schoon stroomt.',
        },
        {
          challenge: 'Bederf in cold chain',
          solution:
            'Continue IoT-temperatuurmonitoring met alerts voorkomt bederf en beschermt compliance.',
        },
        {
          challenge: 'Wrijving in last mile',
          solution:
            'Chauffeurapps met PoD en navigatie plus branded klant-tracking leveren transparante en succesvolle leveringen.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Use cases die wij bedienen in logistiek',
      description:
        'We lossen concrete logistieke uitdagingen op met moderne datagedreven technologie die magazijnen, chauffeurs en klanten respecteert.',
      items: [
        { title: 'Cold chain monitoring', description: 'IoT-temperatuursensoren en tamper evident ledgers die perishables en farma beschermen.' },
        { title: 'Freight forwarding portals', description: 'Veilige portalen voor offerte, boeking en douane met role-based toegang.' },
        { title: 'Yard management', description: 'Digitale yard-oplossingen voor trailer-tracking en dock-door-optimalisatie.' },
        { title: 'Reverse logistics', description: 'Returns automation met RMA, labels, refurbishment en kostenanalyse.' },
        { title: '3PL-portals', description: 'Multi-tenant dashboards waarmee 3PLs voorraad en zendingen aan klanten tonen.' },
        { title: 'Integratie autonome voertuigen', description: 'API’s en control towers voor autonome voertuigen, drones en robotica.' },
        { title: 'Supplier collaboration', description: 'Platforms die communicatie, PO’s en facturatie tussen fabrikant en leverancier versnellen.' },
        { title: 'Demand-driven replenishment', description: 'Systemen die PO’s triggeren op POS-data en forecasts in plaats van statische minima.' },
      ],
    },
    impact: {
      badge: 'Business impact',
      title: 'Meetbare logistieke impact',
      description:
        'Onze technologie raakt direct het bottom line door verspilling weg te halen en ops vertrouwen te geven om betere SLA’s te beloven.',
      metrics: [
        { label: 'Brandstofreductie', description: 'Gemiddelde daling van brandstofkosten via AI-routing en telematica.' },
        { label: 'Fulfillmentnauwkeurigheid', description: 'Minder verzendfouten met barcode, RFID en geautomatiseerde WMS.' },
        { label: 'Snellere dispatch', description: 'Betere yard- en dock-efficiëntie met minder wachttijden.' },
        { label: 'Supply chain visibility', description: 'Volledige transparantie van sourcing tot last mile via centrale dashboards.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-tech en digital natives',
      title: 'Engineering voor innovators',
      highlight: 'Digital Natives',
      description:
        'We geven startups, scale-ups en digital native bedrijven de senior engineering capaciteit om sneller te leveren, veilig te schalen en engineering tot een blijvend voordeel te maken.',
      cta: 'Versnel je roadmap',
      statLabels: ['Ondersteunde startups', 'Actieve gebruikers', 'Gem. MVP-tijd'],
    },
    features: {
      badge: 'Kerncapaciteiten',
      title: 'Compleet digital engineering',
      description:
        'Senior software engineering voor snel bewegende tech-bedrijven, van MVPs tot multi-region platforms.',
      outcomesTitle: 'Wat wij leveren',
      items: [
        {
          title: 'SaaS-platformontwikkeling',
          description:
            'End-to-end engineering voor multi-tenant SaaS van data-isolatie en billing tot admin-tooling en onboarding.',
          details:
            'We ontwerpen tenant isolatie, integreren Stripe en andere billings, leveren backoffice tooling en onboarding-flows die gebruikers activeren.',
          outcomes: [
            'Tenant isolation pattern gedocumenteerd en reviewed',
            'Subscription billing geïntegreerd met reporting',
            'Admin- en backoffice-tools voor ops en support',
            'Onboarding-funnel met activatie-analytics',
            'SLO baseline met error budgets en on-call',
          ],
        },
        {
          title: 'Cloud-native architectuur',
          description:
            'Cloud-native systemen ontworpen voor elasticiteit, veerkracht en voorspelbare kosten.',
          details:
            'We gebruiken microservices, serverless en Kubernetes waar ze lonen, met FinOps die cloud-spend uitlegbaar houden.',
          outcomes: [
            'Referentie-architectuur passend bij je groeiprofiel',
            'Autoscaling-policies afgestemd op trafficpatronen',
            'Multi-AZ veerkracht met gedocumenteerde failure modes',
            'FinOps-dashboards per product of team',
            'Runbooks voor veelvoorkomende incidenten',
          ],
        },
        {
          title: 'Snel MVP-ontwikkeling',
          description:
            'Gerichte sprints die een product in weken van concept naar live MVP brengen, met fundament dat post-launch standhoudt.',
          details:
            'We koppelen product thinking aan starter kits voor MVPs die markt bewijzen, investeerders overtuigen en de typische post-launch rebuild voorkomen.',
          outcomes: [
            'Scopedocument met succescriteria',
            'Live product binnen afgesproken tijd',
            'Componentenbibliotheek voor volgende iteraties',
            'Analytics en feedback vanaf dag één',
            'Roadmap voor schaling en teamgroei',
          ],
        },
        {
          title: 'API economy en integraties',
          description:
            'Veilige developer-vriendelijke REST en GraphQL API’s die het product openen voor ecosystemen en partners.',
          details:
            'We ontwerpen API’s met versioning, rate limiting en OAuth 2.0, leveren developer portals met sample apps en SDKs in de talen van je klanten.',
          outcomes: [
            'API-stijlgids en versioning-policy',
            'Developer portal met docs, sandbox en quickstarts',
            'SDKs in de belangrijkste talen',
            'Baseline rate limiting, auth en audit',
            'Adoptieanalyse voor product en partnerships',
          ],
        },
        {
          title: 'Data engineering en AI-pipelines',
          description:
            'De data en ML-fundering die je product nodig heeft om te evolueren naar verdedigbare intelligentie.',
          details:
            'We bouwen event tracking, ingestion, warehouses en lakehouses en leggen feature stores, model deployment en monitoring eroverheen.',
          outcomes: [
            'Eventtaxonomie en tracking baseline',
            'Warehouse of lakehouse passend bij de roadmap',
            'Feature store en model serving pattern',
            'Kwaliteits- en biasmonitoring op live modellen',
            'Kostenmodel voor storage, compute en ML',
          ],
        },
        {
          title: 'DevOps en CI/CD',
          description:
            'Een delivery pipeline die commits veilig meermaals per dag in deployments verandert met metrics die het bewijzen.',
          details:
            'We implementeren CI/CD, IaC, geautomatiseerde tests en progressive delivery die lead time en change failure rate verlagen.',
          outcomes: [
            'CI/CD templates met quality- en security-gates',
            'IaC-bibliotheek voor core services',
            'Teststrategie unit, integration en e2e',
            'Progressive delivery met feature flags',
            'DORA dashboard voor engineering leadership',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branche-uitdagingen',
      title: 'Tech-startups deblokkeren',
      description:
        'We verwijderen de technische wrijving die digital natives belemmert om te schalen.',
      challengeLabel: 'De uitdaging',
      solutionLabel: 'Onze oplossing',
      items: [
        {
          challenge: 'Trage time to market',
          solution:
            'Senior agile teams en bewezen starter kits korten de MVP-doorloop in zodat je sneller valideert en funding wint.',
        },
        {
          challenge: 'Platform-instabiliteit op schaal',
          solution:
            'We migreren fragiele monolieten naar veerkrachtige cloud-native services met heldere failure modes.',
        },
        {
          challenge: 'Hoge cloud kosten',
          solution:
            'We optimaliseren queries, sizen workloads juist en zetten serverless of containers in waar ze lonen.',
        },
        {
          challenge: 'Oplopende technische schuld',
          solution:
            'Toegewijde engineering pods refactoren legacy, schrijven ontbrekende tests en zetten CI/CD op zonder product te stoppen.',
        },
        {
          challenge: 'Tekort aan engineeringtalent',
          solution:
            'We versterken je team met senior full-stack engineers die vanaf week 1 leveren.',
        },
        {
          challenge: 'Complexe multi-tenancy',
          solution:
            'We ontwerpen veilige data-isolatie, RBAC en dynamische provisioning voor schoon B2B SaaS schaal.',
        },
      ],
    },
    useCases: {
      badge: 'Use cases',
      title: 'Use cases die wij bedienen in Hi-tech',
      description:
        'We werken samen met founders, CTO’s en engineering leads om schaalbare, disruptieve producten te bouwen zonder de gebruikelijke burn-out.',
      items: [
        { title: 'Platformmodernisering', description: 'Refactor van vroege monolieten naar robuuste microservices wanneer je startup schaalt.' },
        { title: 'B2B SaaS-portals', description: 'Complexe enterprise SaaS-apps met RBAC, custom hiërarchieën en admin tools die IT vertrouwt.' },
        { title: 'Consumenten mobiele apps', description: 'High-performance cross-platform apps met React Native of Flutter.' },
        { title: 'AI-verrijkte producten', description: 'Integratie van gen AI, vision en NLP voor verdedigbare differentiators.' },
        { title: 'Marketplaces', description: 'Schaalbare multi-sided marketplaces met routing, escrow en trust.' },
        { title: 'Developer tooling', description: 'SDKs, CLIs en doc-portalen voor technische producten.' },
        { title: 'Cloud kostenoptimalisatie', description: 'Audit en herarchitectuur van cloud-deployments met meetbare besparingen.' },
        { title: 'Startup rescue', description: 'Stabilisatie, refactor en schaling van overgenomen codebases.' },
      ],
    },
    impact: {
      badge: 'Business impact',
      title: 'Snelheid en schaal',
      description:
        'We schrijven niet alleen code, we versnellen groei en verbeteren unit economics zodat engineering een sterke reden wordt om in jou te geloven.',
      metrics: [
        { label: 'Snellere MVP-levering', description: 'Versnelling t.o.v. traditionele in-house hiring voor het kernproduct.' },
        { label: 'Cloud besparingen', description: 'Gemiddelde daling in maandelijkse spend na architectuur- en FinOps-audits.' },
        { label: 'Downtime-vrije deploys', description: 'Volledig geautomatiseerde CI/CD en gedegen testing met progressive delivery.' },
        { label: 'Deploys per maand', description: 'Snelle iteratie en continue levering gestuurd door echte feedback.' },
      ],
    },
  },
}
