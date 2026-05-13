import type { IndustryContentByVariant } from './types'

export const deIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Finanzdienstleistungen',
      title: 'Software der nächsten Generation für BFSI',
      highlight: 'Finanzdienstleistungen',
      description:
        'Wir helfen Banken, Versicherern und Fintech-Innovatoren, sichere, konforme und skalierbare digitale Produkte auszuliefern. Vom Core-Banking-Modernisieren bis zum algorithmischen Trading bauen unsere Engineering-Teams die Systeme, die Geld sicher in großem Maßstab bewegen.',
      cta: 'FinTech-Projekt besprechen',
      statLabels: ['FinTech-Plattformen', 'Garantierte Verfügbarkeit', 'Konform'],
    },
    features: {
      badge: 'Kernfähigkeiten',
      title: 'Komplette Finanzlösungen',
      description:
        'Ein vollständiges Engineering-Spektrum für Retail- und Firmenkunden, Zahlungen, Wealth, Versicherung und Kapitalmärkte.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'Digitale Banking-Plattformen',
          description:
            'Bankenerlebnisse, die auf jedem Gerät nativ wirken, mit der Resilienz und Sicherheit, die regulierte Workloads verlangen.',
          details:
            'Wir entwickeln omnichannel Banking-Plattformen mit einheitlichen Dashboards, Mobile-First-Journeys, Echtzeit-Transaktionsverarbeitung und modularen Core-Banking-Integrationen. Unsere Referenzarchitekturen tragen bereits Millionen monatlicher Logins.',
          outcomes: [
            'Referenzarchitektur über Web, Mobile und Filiale',
            'Authentifizierungs-Baseline mit Biometrie, Step-up und FIDO2',
            'Echtzeit-Ledger und Transaktions-APIs mit dokumentierten SLAs',
            'Operative Dashboards für Fraud, Support und Produkt',
            'Übergabe-Runbooks für SRE, Compliance und Customer Ops',
          ],
        },
        {
          title: 'Lösungen für Zahlungsverkehr',
          description:
            'PCI-DSS-konforme Gateways, Wallets und grenzüberschreitende Schienen für hohen Durchsatz und planbare Settlement-Zeiten.',
          details:
            'Unsere Payments-Praxis deckt Karten, EMV, A2A, Wallets und Blockchain-Settlement ab, mit idempotenten Retries, Exactly-Once-Buchhaltung und Reconciliation-Tools, die Finance, Ops und Engineering aufeinander abstimmen.',
          outcomes: [
            'PCI-DSS-konforme Tokenisierungs- und Vault-Strategie',
            'Idempotente Payment-APIs mit Reconciliation-Events',
            'Wallet-, EMV- und Bank-Konnektoren mit Sandbox',
            'Settlement-Reporting mit Anbindung ans Finance Ledger',
            'Chargeback- und Dispute-Workflow mit Audit-Trail',
          ],
        },
        {
          title: 'WealthTech und Robo-Advisor',
          description:
            'Wealth- und Beratungsplattformen, die Quant-Modelle mit intuitiven Kundenerlebnissen für Retail und HNW kombinieren.',
          details:
            'Wir bauen automatisierte Rebalancing-Engines, Risikoprofiling-Modelle, KI-Copilots für Berater und Reporting-Dashboards, die Custodians, Brokerages und Alternativdaten aggregieren. Compliance, Suitability und Audit sind ab Sprint eins eingeplant.',
          outcomes: [
            'Suitability- und KYC-Erfassung im Einklang mit Regulatoren',
            'Rebalancing-Engine mit dokumentierten Strategien',
            'Custodian- und Brokerage-Integrationen mit Reconciliation',
            'Client-Reporting in Web und PDF',
            'Berater-Copilot mit vollständiger Audit-Historie',
          ],
        },
        {
          title: 'InsurTech-Lösungen',
          description:
            'Ende-zu-Ende-Versicherungserlebnisse vom Quote bis zum Schaden mit Automatisierung, die Zyklen verkürzt ohne Governance zu opfern.',
          details:
            'Wir modernisieren Underwriting, Policenverwaltung und Schadenbearbeitung mit KI-Scoring, RPA, OCR und Self-Service-Portalen für Versicherte und Makler und reduzieren so Schadenzyklen um 40 bis 60 Prozent.',
          outcomes: [
            'Quote- und Bind-APIs mit Regelwerk-Integration',
            'KI-gestütztes Underwriting mit Human-in-the-Loop',
            'FNOL-Workflow mit Dokument-OCR und Triage',
            'Self-Service-Portale für Versicherte, Makler und Sachbearbeiter',
            'Operative Dashboards für Loss Ratio und SLA-Tracking',
          ],
        },
        {
          title: 'Compliance und RegTech',
          description:
            'Automatisierte KYC-, AML- und Reporting-Plattformen, die Compliance vom Kostenfaktor zur kontinuierlichen Kontrollebene machen.',
          details:
            'Wir integrieren biometrische Identitätsprüfung, Sanktions- und PEP-Screening, Transaction Monitoring, Case Management und regulatorische Reporting-Pipelines, die GDPR, PSD2, FATCA sowie KYC- und AML-Regimen mehrerer Jurisdiktionen erfüllen.',
          outcomes: [
            'KYC- und AML-Onboarding mit biometrischen Checks',
            'Pipelines für Sanktionen, PEP und Adverse Media',
            'Transaction-Monitoring-Regeln mit Alarm-Triage',
            'Case Management für Analysten mit Beweiskette',
            'Regulatorische Exporte für lokale Aufsichten',
          ],
        },
        {
          title: 'Blockchain und Smart Contracts',
          description:
            'Permissioned- und Public-Chain-Lösungen für Tokenisierung, Settlement und manipulationssichere Audit-Trails auf Enterprise-Infrastruktur.',
          details:
            'Unsere Blockchain-Teams entwerfen DeFi-ähnliche Produkte, Tokenisierungsplattformen und manipulationssichere Audit-Trails auf Ethereum, Polygon und Hyperledger Fabric, mit Key Custody, Gas-Optimierung und Compliance-Hooks für institutionellen Einsatz.',
          outcomes: [
            'Token-Modell und Smart-Contract-Suite peer reviewed',
            'Custody-Pattern integriert mit HSM oder MPC',
            'Reconciliation zwischen On-Chain und Core',
            'Operative Tools für Ops, Compliance und Treasury',
            'Security-Review zu Bridges, Oracles und Upgradeability',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branchenherausforderungen',
      title: 'Die schwierigsten FinTech-Probleme lösen',
      description:
        'Wir entfernen die Technologiereibung, die Finanzinstitute ausbremst, damit sich Ihre Teams auf Kunden, Produkte und Wachstum konzentrieren.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Sich wandelndes regulatorisches Umfeld',
          solution:
            'Wir verankern automatisierte Compliance-Engines, robuste Audit-Trails und modulare Kontrollbibliotheken für KYC, AML, GDPR und PSD2 direkt in Ihrer Plattform, sodass neue Pflichten als Konfiguration statt als riskanter Rebuild ankommen.',
        },
        {
          challenge: 'Steigende Cyber-Risiken und Betrug',
          solution:
            'Wir entwerfen Zero-Trust-Architekturen, Ende-zu-Ende-Verschlüsselung und KI-gestützte Anomalieerkennung, die Transaktionen sichern, APIs härten und verdächtiges Verhalten in Echtzeit melden, ohne ehrliche Kunden auszubremsen.',
        },
        {
          challenge: 'Beschränkungen durch Legacy-Systeme',
          solution:
            'Mit dem Strangler-Fig-Ansatz hüllen wir Legacy-Cores in moderne APIs, lösen Funktionalitäten in Microservices heraus und migrieren Daten schrittweise, ohne die Roadmap zu blockieren.',
        },
        {
          challenge: 'Fragmentierte Kundendaten',
          solution:
            'Wir betreiben Data Lakes, Customer-360-Plattformen und Analytics-Pipelines, die Banking, Versicherung und digitale Touchpoints konsolidieren, für personalisierte und konsistente omnichannel Erlebnisse.',
        },
        {
          challenge: 'Ineffiziente manuelle Prozesse',
          solution:
            'Wir integrieren RPA, intelligente Dokumentverarbeitung und Workflow-Automatisierung in Origination, Underwriting und Schadenbearbeitung, um repetitive Arbeit zu eliminieren.',
        },
        {
          challenge: 'Langsame Settlement-Zeiten',
          solution:
            'Wir bauen Hochdurchsatz-Gateways und tokenisierte Settlement-Schichten mit Smart Contracts für nahezu sofortige grenzüberschreitende Überweisungen mit planbaren Gebühren.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases im Bereich Finanzdienstleistungen',
      description:
        'Wir arbeiten mit Banken, Fintechs und Versicherern an konkreten Technologieherausforderungen entlang der gesamten BFSI-Wertschöpfung.',
      items: [
        { title: 'Core-Banking-Modernisierung', description: 'Migration von Banking-Monolithen zu agilen, cloud-native Microservices für Flexibilität und schnellere Releases.' },
        { title: 'Open-Banking-API-Portale', description: 'Sichere API-Gateways und Developer-Erlebnisse, mit denen Institute Daten regulierten Drittparteien sicher öffnen.' },
        { title: 'Fraud-Detection-Systeme', description: 'ML-Modelle, die Transaktionen in Echtzeit scoren und Schwellen ohne Analystenüberlastung tunen.' },
        { title: 'Personal Finance Management', description: 'Mobile Erlebnisse, die Konten aggregieren, Ausgaben kategorisieren und personalisierte Spar-Nudges liefern.' },
        { title: 'Automatisierte Kreditvergabe', description: 'End-to-End-Lending-Plattformen mit Alternativdaten, KI-Scoring und Auszahlung in Minuten.' },
        { title: 'Algorithmische Trading-Plattformen', description: 'HFT-Architekturen mit ultra niedriger Latenz, CEP und reproduzierbarem Backtesting.' },
        { title: 'Versicherungs-Telematik', description: 'Usage-based Insurance mit IoT-Daten aus vernetzten Fahrzeugen und Pricing-Engines.' },
        { title: 'Onboarding (eKYC)', description: 'Friktionsfreie digitale Onboarding-Workflows mit OCR, Liveness und risikobasiertem Step-up.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Messbarer finanzieller Impact',
      description:
        'Unsere Engineering-Arbeit übersetzt sich direkt in operative Effizienz, stärkere Sicherheit und vorzeigbare Wachstumsmetriken.',
      metrics: [
        { label: 'Schnelleres Onboarding', description: 'Verkürzte Onboarding-Zeit durch automatisiertes eKYC, OCR und risikobasierte Entscheidungen.' },
        { label: 'Fraud Prevention', description: 'Genauigkeit beim Erkennen und Blocken betrügerischer Transaktionen mit eigens trainierten ML-Modellen.' },
        { label: 'Kostenreduktion', description: 'Geringere manuelle Verarbeitungskosten durch RPA und intelligente Automatisierung im Backoffice.' },
        { label: 'Transaktionsvolumen', description: 'Erhöhte Spitzenkapazität durch cloud-native Microservices und elastische Infrastruktur.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Gesundheit und Life Sciences',
      title: 'Patientenversorgung mit Technologie transformieren',
      highlight: 'Healthcare',
      description:
        'Wir helfen Leistungserbringern, Kostenträgern und Life-Science-Unternehmen, bessere Ergebnisse mit sicheren, interoperablen und menschzentrierten digitalen Lösungen zu liefern, alle ausgerichtet an HIPAA, FDA und globalen Gesundheitsdaten-Regulierungen.',
      cta: 'Healthcare-App besprechen',
      statLabels: ['HealthTech-Apps', 'Konform', 'Versorgte Patienten'],
    },
    features: {
      badge: 'Kernfähigkeiten',
      title: 'Umfassende Healthcare-Lösungen',
      description:
        'Engineering-Services für Krankenhäuser, Kliniken, Kostenträger, HealthTech und Life Sciences, gestaltet rund um Klinikerinnen und Patientinnen.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'Telemedizin-Plattformen',
          description:
            'Sichere, hochwertige Videokonsultationen mit integrierter Terminierung, Doku, Rezepten und Zahlungen.',
          details:
            'Wir bauen HIPAA-konforme Telemedizin-Apps mit WebRTC, sicherer Messaging, e-Prescription-Konnektoren und Zahlungen, mit Low-Bandwidth-Fallbacks für ländliche Versorgung.',
          outcomes: [
            'WebRTC-Pipeline für Low-Bandwidth-Netze',
            'Terminierung und Intake mit EHR integriert',
            'Sichere Messaging und Dokumenten-Sharing mit Consent',
            'e-Prescription- und Refill-Workflow mit Audit',
            'Übergabe von Zahlungen und Claims an Revenue Cycle',
          ],
        },
        {
          title: 'EHR- und EMR-Integration',
          description:
            'Maßgeschneiderte EHR- oder EMR-Systeme und standardbasierte Integration für eine vereinheitlichte Patientenakte.',
          details:
            'Unsere Interoperabilitäts-Praxis nutzt HL7 v2, FHIR R4 und CDA, um Krankenhäuser, Kliniken, Labore, Bildgebung und Register zu verbinden. Wir migrieren Daten und liefern developer-freundliche APIs.',
          outcomes: [
            'FHIR-R4-Fassade über HL7-v2-Legacy-Schnittstellen',
            'Patient-Matching- und Reconciliation-Strategie',
            'Bulk-Datenexport für Analytics und Population Health',
            'Provider-Verzeichnis und Consent-Management',
            'Developer-Portal mit SMART on FHIR Beispielen',
          ],
        },
        {
          title: 'IoMT- und Wearable-Integration',
          description:
            'Sichere Verbindung medizinischer Geräte und Consumer-Wearables an klinische Plattformen für Remote Monitoring und Alarme.',
          details:
            'Wir bauen sichere Ingestion-Pipelines für IoMT und Wearables mit Edge-Filterung, Protokollübersetzung und klinischen Alarmen, die Workflow und On-Call respektieren.',
          outcomes: [
            'Device-Gateway mit Bluetooth, LTE-M und NB-IoT',
            'Edge-Regeln zur Rauschunterdrückung vor Alarm',
            'Time-Series-Store mit Compliance-konformer Retention',
            'Alarme mit Eskalationsrichtlinien für das Team',
            'Patient-App mit Selbstpflege-Erinnerungen',
          ],
        },
        {
          title: 'Healthcare KI und Analytics',
          description:
            'Vorhersagemodelle, Bildgebungsanalyse und klinische Entscheidungsunterstützung, die Klinikerinnen ergänzen ohne den Workflow zu stören.',
          details:
            'Unsere Healthcare-KI deckt Risikostratifizierung, Aufenthaltsdauer, No-Shows, Bildtriage und CDS ab, mit Modellkarten, Bias-Monitoring und Klinikerinnen-Feedback.',
          outcomes: [
            'Modellkarte und Verwendungsdoku pro Modell',
            'Bias- und Performance-Dashboards',
            'EHR-Integration mit minimaler Klick-UX',
            'Feedback-Schleife für kontinuierliche Verbesserung',
            'Audit-Trail für jede gezeigte Vorhersage',
          ],
        },
        {
          title: 'Pharmazie-Managementsysteme',
          description:
            'Apothekenautomatisierung, Inventarmanagement und Rezeptabwicklung für Offizin, Klinik und Versandapotheke.',
          details:
            'Wir bauen umfassende Systeme: e-Prescribing, automatisierte Nachbestellung, Rezeptur-Workflows, Audit-Trails für kontrollierte Substanzen und Last-Mile-Integrationen.',
          outcomes: [
            'e-Prescribing-Integration mit Surescripts oder lokal',
            'Inventarmodell mit automatischer Nachbestellempfehlung',
            'Rezeptur- und Verifikations-Workflow mit Sign-off',
            'Audit-Trail für kontrollierte Substanzen',
            'Last-Mile-Integration mit Patienten-Updates',
          ],
        },
        {
          title: 'Studienmanagement',
          description:
            'Forschungsplattformen, die Patientenrekrutierung, EDC und regulatorische Datenkonformität beschleunigen.',
          details:
            'Unsere CTMS-Deployments decken Protokolldesign, Rekrutierung, EDC, Site Monitoring, AE-Reporting und 21 CFR Part 11 ab und beschleunigen Studien für Sponsoren und CROs.',
          outcomes: [
            'Protokollbibliothek mit versionierten Amendments',
            'Rekrutierungstrichter mit Eligibility-Prescreen',
            'EDC-Formulare mit Edit Checks und Reviewer-Workflow',
            'AE-Erfassung mit Sicherheitsmonitoring',
            'Audit-Log und e-Signaturen 21 CFR Part 11',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branchenherausforderungen',
      title: 'Healthcare-Hürden überwinden',
      description:
        'Wir lösen die technischen Komplexitäten, die klinische Teams ablenken, damit sich die Versorger auf Outcomes konzentrieren können.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Strenge HIPAA- und FDA-Compliance',
          solution:
            'Wir bauen Plattformen mit Verschlüsselung, granularen Audit-Logs und Zugriffssteuerungen, die HIPAA, GDPR und FDA-Anforderungen erfüllen, ohne die täglichen Workflows zu bremsen.',
        },
        {
          challenge: 'Patientendaten in Silos',
          solution:
            'Mit HL7 und FHIR bauen wir interoperable Datenebenen, die Legacy-EHRs, Labore, Bildgebung und Partnerkliniken in eine longitudinale Patientensicht zusammenführen.',
        },
        {
          challenge: 'Schwaches Patient Engagement',
          solution:
            'Wir gestalten intuitive Portale und Apps mit einfacher Terminierung, sicherer Messaging und personalisierten Insights, die Retention und Adhärenz steigern.',
        },
        {
          challenge: 'Burnout bei Ärztinnen',
          solution:
            'KI-Diktat, Ambient-Documentation und automatisierte Abrechnung senken die Verwaltungslast, sodass Ärztinnen mehr Zeit am Patienten verbringen.',
        },
        {
          challenge: 'Verzögerte Diagnostik',
          solution:
            'Wir legen ML und Computer Vision auf PACS und Labore, um kritische Fälle zu triagieren und die Radiologen-Queue zu priorisieren.',
        },
        {
          challenge: 'Chronische Erkrankungen',
          solution:
            'Wir integrieren IoMT-Wearables und Remote Monitoring direkt in klinische Dashboards, mit smarten Alarmen für proaktive Interventionen.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases im Gesundheitswesen',
      description:
        'Wir lösen kritische Herausforderungen entlang des Versorgungspfads mit Technologie, die klinische Realität und Patienten-Erlebnis respektiert.',
      items: [
        { title: 'Remote Patient Monitoring', description: 'Wearable-Daten in klinische Dashboards mit Alarmen und Trendanalyse für chronische Erkrankungen.' },
        { title: 'Digitale Triage-Chatbots', description: 'KI-Konversationen, die Symptome bewerten und Patienten zur passenden Versorgungsstufe leiten.' },
        { title: 'Hospital Operations Automation', description: 'Bettenmanagement, OP-Planung, Schichtpläne und Lieferungen über vereinheitlichte Systeme.' },
        { title: 'Genomische Datenverarbeitung', description: 'Cloud-Pipelines für Sequenzierung, Variantenanalyse und sichere Langzeitspeicherung.' },
        { title: 'Mental-Health-Anwendungen', description: 'Sichere Apps mit CBT-Übungen, Mood-Tracking und direktem Zugang zu Beratenden.' },
        { title: 'OP-Planung AR/VR', description: 'AR/VR-Rendering der 3D-Anatomie für präoperative Planung und Training.' },
        { title: 'Medizinische Lieferkette', description: 'Blockchain-Traceability für Pharmazeutika und Medizinprodukte mit Cold-Chain-Telemetrie.' },
        { title: 'Automatisierte Abrechnung und Codierung', description: 'RPA und NLP, die strukturierte Daten aus klinischen Notizen für korrekte Codes extrahieren.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Quantifizierbarer klinischer Impact',
      description:
        'Unsere Lösungen zeigen sich gleichermaßen in operativen Dashboards, Regulator-Reports und Patientenoutcomes.',
      metrics: [
        { label: 'Weniger Wiederaufnahmen', description: 'Sinkende Wiederaufnahmeraten durch Remote Monitoring und proaktive Workflows.' },
        { label: 'Schnellere Triage', description: 'Bessere Patientenrouting-Effizienz durch NLP-Triage und intelligente Intake-Formulare.' },
        { label: 'Eingesparte Verwaltungszeit', description: 'Weniger Dateneingabe und Papierkram durch RPA und Ambient Documentation.' },
        { label: 'Audit Readiness', description: 'Kontinuierliche HIPAA- und 21-CFR-Part-11-Bereitschaft durch automatisierte Evidenz.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail und E-Commerce',
      title: 'Heben Sie Ihren digitalen Storefront an',
      highlight: 'E-Commerce',
      description:
        'Wir helfen DTC-Marken, B2B-Großhändlern und globalen Marktplätzen, Umsatz und Loyalität mit schnellen, personalisierten und verlässlichen omnichannel Erlebnissen zu treiben.',
      cta: 'Commerce-Projekt starten',
      statLabels: ['Stores live', 'Verarbeitetes GMV', 'Ladezeiten'],
    },
    features: {
      badge: 'Kernfähigkeiten',
      title: 'Komplette Retail-Lösungen',
      description:
        'Engineering von Ende zu Ende für digitale, physische und B2B-Storefronts mit Fokus auf Conversion, Retention und operative Effizienz.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'Omnichannel-Commerce-Plattformen',
          description:
            'Vereinheitlichte Einkaufserlebnisse über Web, Mobile, Social und Filiale auf flexiblen, composable Architekturen.',
          details:
            'Wir entwerfen headless und composable Plattformen, die Storefront und Commerce-Engines entkoppeln, sodass neue Kanäle, Geographien und Marken ohne Re-Plattforming starten.',
          outcomes: [
            'Composable-Architektur mit Vendor-Auswahlnotizen',
            'Vereinheitlichter Cart und Kundenprofil über Kanäle',
            'Storefront-Performance-Budget in CI durchgesetzt',
            'Integrationsplan für Promotion- und Pricing-Engine',
            'Operative Tools für Merchandising und CX',
          ],
        },
        {
          title: 'Kassensysteme (POS)',
          description:
            'Cloud-POS, der Online und Filiale verbindet, mit Offline-Resilienz und enger Inventar- und Loyalty-Integration.',
          details:
            'Unsere POS-Lösungen synchronisieren Inventar in Echtzeit, arbeiten offline, integrieren Hardware und versorgen Analytics und Loyalty mit Daten für vereinheitlichtes Reporting.',
          outcomes: [
            'Offline-First-POS mit Konfliktauflösung',
            'Hardware-Integration für Scanner und Drucker',
            'Echtzeit-Inventar-Sync mit Commerce-Engine',
            'Loyalty-Erkennung am Checkout',
            'Operatives Dashboard für Filialleiter',
          ],
        },
        {
          title: 'Personalisierung und Empfehlungen',
          description:
            'KI-Empfehlungs-Engines, die das richtige Produkt zur richtigen Zeit zeigen und Conversion und AOV heben.',
          details:
            'Wir bauen Personalisierungs-Stacks aus Events, Profilen und Produktattributen, ausgespielt über Echtzeit-APIs, mit Pricing und Orchestrierung, die Marketers ohne Engineering-Tickets pflegen.',
          outcomes: [
            'Event-Schema und Profil-Modell dokumentiert',
            'Empfehlungs-APIs für Home, PDP und Cart',
            'Pricing-Regeln mit Guardrails und Freigaben',
            'Experimentplattform für Angebote und Layouts',
            'Self-Service-UI für Kampagnen und Audiences',
          ],
        },
        {
          title: 'Supply Chain und Inventar',
          description:
            'Backend, das Stock, Fulfillment und Multi-Warehouse-Logistik im Einklang hält, auch wenn Nachfrage oder Sourcing wechseln.',
          details:
            'Wir integrieren ERPs, OMS, WMS und 3PL-APIs in eine kohärente Schicht mit Order Routing, Echtzeit-Inventar, Returns und Exception Handling, das Ops im Peak vertraut.',
          outcomes: [
            'Routing-Regeln nach Kosten, Tempo und Stock',
            'Echtzeit-Inventar über DCs, Filialen und 3PLs',
            'Returns- und Refund-Workflow mit Policy-Automation',
            'Exceptions-Dashboard mit handlungsfähigen Alarmen',
            'Reporting zu Fill Rate, On-Time und Shrinkage',
          ],
        },
        {
          title: 'Loyalty und Rewards',
          description:
            'Loyalty-Plattformen, die Wiederkäufe pushen, Advocacy belohnen und nutzbare Daten produzieren.',
          details:
            'Wir bauen modulare Programme mit Punkten, Tiers, Gamification, Mobile Wallet und Partnerintegrationen, gestützt auf Analytics, die zeigen, welche Mechaniken CLV und Retention bewegen.',
          outcomes: [
            'Loyalty-Regelwerk mit Tiers und Earn or Burn',
            'Mobile-Wallet-Integration Apple und Google',
            'Mitglieder-Erlebnis Web, App und Filiale',
            'Analytics zu Retention, CLV und Wiederkäufen',
            'Operative Tools für Promos und Exceptions',
          ],
        },
        {
          title: 'B2B-Großhandelsportale',
          description:
            'Sichere, skalierbare Plattformen, abgestimmt auf B2B-Realitäten mit Custom-Katalogen, komplexen Preisen und Procurement-Integrationen.',
          details:
            'Unsere B2B-Portale bilden Kontenhierarchien, Custom-Preislisten, Vertragspreise, Großbestellungen, Quote-to-Cash und PunchOut zu Ariba, Coupa und anderen ab.',
          outcomes: [
            'Kontenhierarchie und rollenbasierte Permissions',
            'Custom-Preisbuch und Vertragspreis-Engine',
            'Quote-to-Cash mit Freigaben und Bonitätsprüfungen',
            'PunchOut-Integration mit großen Procurement-Plattformen',
            'Self-Service Bestellhistorie, Reorder und Invoicing',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branchenherausforderungen',
      title: 'Retail-Engpässe überwinden',
      description:
        'Wir entfernen die technische Reibung zwischen Marke, Shopper und Store of Record, damit digitaler Umsatz planbar skaliert.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Hohe Cart-Abandonment-Rate',
          solution:
            'Wir entwickeln friktionsfreie, barrierefreie Checkouts, integrieren Wallets und gespeicherte Daten und ergänzen Personalisierung beim Retargeting, ohne aufdringlich zu wirken.',
        },
        {
          challenge: 'Langsame Ladezeiten',
          solution:
            'Migration auf headless Architekturen am Edge, mit budgetbasierter Performance-Arbeit, die Sub-Sekunden-Loads bei wachsendem Katalog hält.',
        },
        {
          challenge: 'Schlechte Produktauffindbarkeit',
          solution:
            'Wir integrieren KI-Suche und Merchandising, tunen Relevanzmodelle mit Ihren Daten und führen geführte Discovery-Patterns ein, die Browsing in Add to Cart wandeln.',
        },
        {
          challenge: 'Inventar-Diskrepanzen',
          solution:
            'Robuste Middleware synchronisiert Inventar zwischen POS, Lagern und digital, mit Reconciliation-Jobs gegen Wochenend-Oversells.',
        },
        {
          challenge: 'Unverbundene Customer Journeys',
          solution:
            'Wir betreiben CDPs und Loyalty-Programme, die Identitäten und Verhalten über Web, App und Filiale verknüpfen, sodass Service, Marketing und Merchandising eine Sicht teilen.',
        },
        {
          challenge: 'Traffic-Spitzen und Downtime',
          solution:
            'Wir entwerfen auto-skalierende Cloud-Infra mit Multi-Layer-Caching und Lasttests, sodass Flash Sales, Drops und Black Friday Planungstermine statt War Rooms sind.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases im Retail',
      description:
        'Wir arbeiten mit DTC-Marken, B2B-Großhändlern und großen Marktplätzen an Commerce-Erlebnissen, die das Geschäft bewegen.',
      items: [
        { title: 'Headless-Storefront-Migration', description: 'Upgrade rigider Monolithen auf flexible, schnelle headless Architekturen mit Next.js oder Nuxt.' },
        { title: 'Mobile-Commerce-Apps', description: 'Native iOS- und Android-Shopping-Apps mit AR, Biometrie und One-Tap-Checkout.' },
        { title: 'Marketplace-Entwicklung', description: 'Multi-Vendor-Marktplätze mit Provisionsrouting, Vendor-Dashboards und Katalogqualität.' },
        { title: 'Subscription-Box-Services', description: 'Recurring Billing, individuelle Boxen und Fulfillment für Abomodelle mit Churn-Tools.' },
        { title: 'Digitale In-Store-Kioske', description: 'Touch-Kioske für Endless Aisle, Assisted Selling und Self-Checkout in Filialen.' },
        { title: 'Voice Commerce', description: 'Sprachassistenz-Shopping über Alexa und Google Assistant für Reorders.' },
        { title: 'Predictive Inventory Planning', description: 'KI-Forecasting kombiniert Saisonalität, Promos und externe Signale für bessere Einkaufsentscheidungen.' },
        { title: 'Automatisierter Kundenservice', description: 'KI-Chatbots für Tracking, Returns und FAQs rund um die Uhr mit sauberer Eskalation.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Messbares E-Commerce-Wachstum',
      description:
        'Unsere Commerce-Architekturen verfolgen ein Ziel: messbaren Umsatz, der den Tech-Investitionen Ihres Teams zugeordnet werden kann.',
      metrics: [
        { label: 'Conversion-Anstieg', description: 'Durchschnittlicher Anstieg der Checkout-Vollendung durch friktionsfreie UX und headless Migrationen.' },
        { label: 'Ladegeschwindigkeit', description: 'Schneller Storefront-Render, der Bounce senkt und SEO stärkt.' },
        { label: 'Höherer LTV', description: 'Customer Lifetime Value steigt durch KI-Personalisierung und gamifizierte Loyalty.' },
        { label: 'Inventar-Genauigkeit', description: 'Echtzeit-Synchronisation über Kanäle, die Oversells praktisch eliminiert.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply Chain und Logistik',
      title: 'Intelligente Logistiksoftware',
      highlight: 'Supply Chain',
      description:
        'Wir helfen Verladern, Carriern, 3PLs und Herstellern, Operationen end-to-end zu digitalisieren, vom Hof und Lager bis zu Flotte und Last Mile, mit Software, die Sichtbarkeit erhöht und Kosten senkt.',
      cta: 'Supply Chain optimieren',
      statLabels: ['Logistik-Plattformen', 'Verfolgte Sendungen', 'Effizienzgewinn'],
    },
    features: {
      badge: 'Kernfähigkeiten',
      title: 'Umfassende Logistiklösungen',
      description:
        'Engineering für Flottenbetreiber, Lager, Spediteure und 3PLs mit Lieferungen, die operative Kennzahlen in Monaten verändern.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'Flottenmanagement',
          description:
            'Telematik-Plattformen, die Fahrzeuggesundheit überwachen, Routen in Echtzeit verfolgen und Treibstoff- und Fahrer-Insights liefern.',
          details:
            'Wir integrieren GPS, OBD-II und Dashcams mit Fahrer-Apps und Dispatch-Konsolen. Operations sieht Flotte, Routenadhärenz, Fuel und Verhalten in einer Sicht mit Alarmen für echte Ausnahmen.',
          outcomes: [
            'Telematik-Pipeline mit Edge-Buffering',
            'Live-Karten- und Routen-Dashboards',
            'Fuel- und Idle-Reporting mit Benchmarks',
            'Fahrer-Scoring zu Sicherheit und Effizienz',
            'Wartungsalarme verknüpft mit Werkstatt',
          ],
        },
        {
          title: 'Lagerautomatisierung (WMS)',
          description:
            'Intelligente WMS für Inventar, automatisiertes Picking und Slot-Optimierung in Hochvolumen-DCs.',
          details:
            'Unsere WMS-Implementierungen nutzen Barcode und RFID, Robotik-Integration und Slotting. Wareneingang, Putaway, Picking, Packing und Versand laufen koordiniert mit Exception Handling und Arbeitskräftesteuerung.',
          outcomes: [
            'Inbound- und Outbound-Flüsse für Ihr DC konfiguriert',
            'Slotting-Strategie mit regelmäßiger Re-Evaluation',
            'Mobile Scanning für Pick, Pack und Ship',
            'Produktivitäts-Dashboards für Arbeitskräfte',
            'Exception Handling für Schäden, Returns und Fehlmengen',
          ],
        },
        {
          title: 'Echtzeit-Visibility-Plattformen',
          description:
            'End-to-End-Tracking über Carrier, Sensoren und ERPs für eine geteilte, prädiktive Sicht jeder Sendung.',
          details:
            'Wir aggregieren Daten aus Carriern, IoT und ERPs in einer Control Tower mit prädiktiven ETAs, Exception-Detection und automatischen Benachrichtigungen.',
          outcomes: [
            'Multi-Carrier-Framework mit Failover',
            'Prädiktives ETA-Modell auf Ihre Lanes getuned',
            'Stakeholder-Benachrichtigungen via Email, SMS und Webhook',
            'Exceptions-Cockpit mit Workflow-Tools',
            'Customer-Tracking-Erlebnis mit Branding',
          ],
        },
        {
          title: 'Routen-Optimierung',
          description:
            'KI-Routing, das die effizienteste Route gegeben Verkehr, Wetter, Kapazität und Zeitfenster berechnet.',
          details:
            'Unsere Engines kombinieren ML, dynamisches Mapping und Constraint-Solver für Multi-Stop-, Multi-Vehicle- und Mixed-Fleet-Szenarien und steigern Drops pro Route ohne Fahrerstunden zu sprengen.',
          outcomes: [
            'Routing-Modell mit Constraints dokumentiert',
            'Fahrer-App-Integration mit sequenzierten Stops',
            'KPI-Dashboard zu Stops pro Route und On-Time',
            'Re-Optimierung bei Live-Disruptions',
            'Backtesting-Harness für Heuristiken oder Provider',
          ],
        },
        {
          title: 'Last-Mile-Apps',
          description:
            'Mobile Erlebnisse für Fahrer und Kunden, die die letzte Meile in eine transparente, gebrandete und vertrauensvolle Interaktion verwandeln.',
          details:
            'Wir liefern Fahrer-Apps mit Turn-by-Turn, Proof of Delivery, Unterschriften und Exception-Erfassung, gepaart mit kundenorientierten Tracking-Portalen, die WISMO-Calls senken.',
          outcomes: [
            'Native Fahrer-App mit Offline-First-Verhalten',
            'Proof of Delivery mit Foto, Unterschrift und Notizen',
            'Customer-Tracking-Portal mit Live-ETA und Chat',
            'Exception-Erfassung mit Workflow für gescheiterte Lieferungen',
            'Operatives Delivery-Performance-Dashboard',
          ],
        },
        {
          title: 'Inventar-Forecasting',
          description:
            'Prädiktive Analytics, die Bestand am richtigen Knoten in der richtigen Höhe halten, ohne Kapital zu binden.',
          details:
            'Wir mischen Historie, Promos, Saisonalität und externe Signale in Forecasts, die Replenishment und Safety Stock speisen, mit Erklärbarkeit für Planer.',
          outcomes: [
            'Forecast-Modell gegen Ihre Historie evaluiert',
            'Replenishment-Empfehlungen ins ERP integriert',
            'Safety Stock und Reorder Points pro SKU und Knoten',
            'Planer-Workbench mit Szenarienvergleich',
            'Forecast-Genauigkeits-Reporting mit Tuning',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branchenherausforderungen',
      title: 'Supply-Chain-Komplexität lösen',
      description:
        'Wir entwerfen Lösungen, die operative Knoten lösen und Daten, Entscheidungen und Feldarbeit zusammenbringen.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Fehlende Echtzeit-Sichtbarkeit',
          solution:
            'Wir integrieren IoT-Sensoren und Multi-Carrier-APIs in eine zentrale Control Tower, sodass blinde Flecken verschwinden.',
        },
        {
          challenge: 'Ineffizientes Routing und hohe Treibstoffkosten',
          solution:
            'Wir setzen KI-Routing ein, das sich an Verkehr, Wetter und Kapazität anpasst und so Treibstoff, Kilometer und Fahrerstunden senkt.',
        },
        {
          challenge: 'Engpässe und Fehler im Lager',
          solution:
            'Smarte WMS mit RFID, Barcode und Pick-to-Light oder Voice Picking beschleunigen Durchsatz und eliminieren Fehler im Peak.',
        },
        {
          challenge: 'Fragmentierte Legacy-Systeme',
          solution:
            'Wir entwickeln Middleware und API-Gateways, die ERPs, TMS und 3PL-Plattformen verbinden, sodass Daten sauber fließen.',
        },
        {
          challenge: 'Kühlkettenverderb',
          solution:
            'Kontinuierliches IoT-Temperaturmonitoring mit Alarmen verhindert Verluste und schützt Compliance.',
        },
        {
          challenge: 'Reibung in der letzten Meile',
          solution:
            'Fahrer-Apps mit PoD und Navigation plus gebrandete Kunden-Tracking-Erlebnisse liefern transparente Endabschnitte.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases in der Logistik',
      description:
        'Wir lösen konkrete Logistik-Herausforderungen mit moderner, datengetriebener Technologie, die Lager, Fahrer und Kunden respektiert.',
      items: [
        { title: 'Cold Chain Monitoring', description: 'IoT-Sensoren und manipulationssichere Ledger schützen Verderbliches und Pharma.' },
        { title: 'Spediteursportale', description: 'Sichere Portale für Quotes, Buchungen und Zollunterlagen mit Rollen-Zugriff.' },
        { title: 'Yard Management', description: 'Digitale Yard-Lösungen für Trailer-Tracking und Dock-Door-Optimierung.' },
        { title: 'Reverse Logistics', description: 'Returns-Automatisierung mit RMA, Labels, Refurbishment und Kostenanalyse.' },
        { title: '3PL-Portale', description: 'Multi-Tenant-Dashboards für 3PLs mit Echtzeit-Inventar und Sendungssicht.' },
        { title: 'Integration autonomer Fahrzeuge', description: 'APIs und Control Tower für autonome Fahrzeuge, Drohnen und Robotik.' },
        { title: 'Supplier-Collaboration-Portale', description: 'Plattformen für Kommunikation, POs und Invoicing zwischen Herstellern und Lieferanten.' },
        { title: 'Bedarfsbasiertes Replenishment', description: 'Systeme, die POs auf Basis von POS-Daten und Forecasts statt statischer Mindestmengen auslösen.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Messbarer Logistik-Impact',
      description:
        'Unsere Technologie zielt direkt auf das Bottom Line, indem sie Verschwendung beseitigt und Operations Vertrauen gibt, bessere SLAs zuzusagen.',
      metrics: [
        { label: 'Treibstoff-Reduktion', description: 'Durchschnittliche Senkung der Flottentreibstoffkosten durch KI-Routing und Telematik.' },
        { label: 'Fulfillment-Genauigkeit', description: 'Weniger Versandfehler durch Barcode, RFID und automatisierte WMS.' },
        { label: 'Schnellerer Dispatch', description: 'Bessere Yard- und Dock-Effizienz mit weniger Wartezeiten.' },
        { label: 'Supply-Chain-Visibility', description: 'Vollständige Transparenz vom Sourcing bis zur letzten Meile via zentrale Dashboards.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-Tech und Digital Natives',
      title: 'Engineering für Innovatoren',
      highlight: 'Digital Natives',
      description:
        'Wir geben Startups, Scale-ups und Digital-Native-Unternehmen die Senior-Engineering-Kapazität, um schneller zu liefern, sicher zu skalieren und Engineering in einen dauerhaften Vorteil zu verwandeln.',
      cta: 'Roadmap beschleunigen',
      statLabels: ['Unterstützte Startups', 'Aktive Nutzer', 'Ø MVP-Lieferung'],
    },
    features: {
      badge: 'Kernfähigkeiten',
      title: 'Vollständiges digitales Engineering',
      description:
        'Senior Software Engineering für schnell wachsende Tech-Unternehmen, vom MVP bis zur Multi-Region-Plattform.',
      outcomesTitle: 'Was wir liefern',
      items: [
        {
          title: 'SaaS-Plattform-Entwicklung',
          description:
            'End-to-End-Engineering für multi-tenant SaaS-Produkte, von Datenisolation und Billing bis zu Admin-Tools und Onboarding.',
          details:
            'Wir entwerfen Tenant-Isolation, integrieren Stripe und andere Billings, liefern Admin-Tooling und Onboarding-Flows, die Nutzer aktivieren.',
          outcomes: [
            'Tenant-Isolations-Pattern dokumentiert und reviewed',
            'Subscription-Billing in Reporting integriert',
            'Admin- und Backoffice-Tools für Ops und Support',
            'Onboarding-Funnel mit Aktivierungs-Analytics',
            'SLO-Baseline mit Error Budgets und On-Call',
          ],
        },
        {
          title: 'Cloud-native Architektur',
          description:
            'Cloud-native Systeme für Elastizität, Resilienz und planbare Kosten.',
          details:
            'Wir nutzen Microservices, Serverless und Kubernetes da, wo sie sich lohnen, gepaart mit FinOps, das Cloud-Spend erklärbar hält.',
          outcomes: [
            'Referenzarchitektur passend zum Wachstumsprofil',
            'Autoscaling-Policies an Trafficmuster getuned',
            'Multi-AZ-Resilienz mit dokumentierten Failure Modes',
            'FinOps-Dashboards nach Produkt oder Team',
            'Runbooks für gängige Vorfälle und Recovery',
          ],
        },
        {
          title: 'Schnelle MVP-Entwicklung',
          description:
            'Fokussierte Sprints, die ein Produkt in Wochen vom Konzept zum Live-MVP bringen, mit Fundamenten, die nach dem Launch tragen.',
          details:
            'Wir kombinieren Product Thinking mit wiederverwendbaren Starter Kits, um MVPs zu liefern, die den Markt belegen, Investoren überzeugen und das übliche Post-Launch-Rebuild vermeiden.',
          outcomes: [
            'Scope-Dokument mit Erfolgsmetriken',
            'Lebendiges Produkt im vereinbarten Zeitrahmen',
            'Komponentenbibliothek für nächste Iterationen',
            'Analytics und Feedback-Schleifen ab Tag 1',
            'Roadmap für Post-MVP-Skalierung und Teamwachstum',
          ],
        },
        {
          title: 'API Economy und Integrationen',
          description:
            'Sichere, developer-freundliche REST- und GraphQL-APIs, die das Produkt in Ökosysteme und Embedded-Use-Cases öffnen.',
          details:
            'Wir entwerfen APIs mit Versioning, Rate Limiting und OAuth 2.0, liefern Developer-Portale mit Sample-Apps und SDKs in den Lieblingssprachen Ihrer Kunden.',
          outcomes: [
            'API-Style-Guide und Versioning-Policy',
            'Developer-Portal mit Docs, Sandbox und Quickstarts',
            'SDKs in den Hauptsprachen Ihrer Kunden',
            'Rate Limiting, Auth und Audit Baseline',
            'Adoptions-Analytics für Produkt und Partnerschaften',
          ],
        },
        {
          title: 'Data Engineering und KI-Pipelines',
          description:
            'Die Daten- und ML-Basis, die Ihr Produkt für echte, verteidigbare Intelligenz braucht.',
          details:
            'Wir bauen Event Tracking, Ingestion, Warehouses und Lakehouses und ergänzen Feature Stores, Modell-Deployment und Monitoring, damit KI als First-Class-Bürger zählt.',
          outcomes: [
            'Event-Taxonomie und Tracking-Baseline',
            'Warehouse oder Lakehouse passend zur Roadmap',
            'Feature-Store- und Model-Serving-Pattern',
            'Qualitäts- und Bias-Monitoring auf Live-Modellen',
            'Kostenmodell für Storage, Compute und ML',
          ],
        },
        {
          title: 'DevOps und CI/CD',
          description:
            'Eine Pipeline, die Commits sicher mehrmals täglich in Deployments verwandelt, mit Metriken, die es belegen.',
          details:
            'Wir implementieren CI/CD, Infrastructure as Code, Tests und Progressive Delivery, die Lead Time und Change-Failure-Rate senken.',
          outcomes: [
            'CI/CD-Pipeline-Templates mit Quality- und Security-Gates',
            'IaC-Bibliothek für Core-Services',
            'Teststrategie über Unit, Integration und e2e',
            'Progressive Delivery mit Feature Flags',
            'DORA-Dashboard für Engineering-Leadership',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Branchenherausforderungen',
      title: 'Tech-Startups freischalten',
      description:
        'Wir entfernen die technische Reibung, die Digital Natives am Skalieren hindert.',
      challengeLabel: 'Die Herausforderung',
      solutionLabel: 'Unsere Lösung',
      items: [
        {
          challenge: 'Langsame Time to Market',
          solution:
            'Senior agile Teams und bewährte Starter Kits verkürzen den MVP-Zeitrahmen, sodass Sie Konzept, Kunden und Funding schneller sichern.',
        },
        {
          challenge: 'Plattform-Instabilität bei Skalierung',
          solution:
            'Wir migrieren fragile Monolithen zu resilienten cloud-native Services mit klar dokumentierten Failure Modes.',
        },
        {
          challenge: 'Hohe Cloud-Kosten',
          solution:
            'Wir optimieren Queries, dimensionieren Workloads richtig und führen Serverless oder Container ein, wo sie sinnvoll sind.',
        },
        {
          challenge: 'Wachsende technische Schuld',
          solution:
            'Dedizierte Engineering-Pods refactoren Legacy-Code, schreiben fehlende Tests und führen CI/CD ein, ohne Produkt zu blockieren.',
        },
        {
          challenge: 'Engpass bei Engineering-Talenten',
          solution:
            'Wir verstärken Ihr Team mit Senior-Full-Stack-Engineers, die ab Woche 1 liefern.',
        },
        {
          challenge: 'Komplexe Multi-Tenancy',
          solution:
            'Wir architektieren sichere Datenisolation, RBAC und dynamisches Provisioning für sauberes Scale Ihres B2B-SaaS.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases im Hi-Tech',
      description:
        'Wir arbeiten mit Founders, CTOs und Engineering Leads an skalierbaren, disruptiven Produkten ohne den üblichen Burnout.',
      items: [
        { title: 'Plattform-Modernisierung', description: 'Refactor früher Monolithen zu robusten Microservices, wenn das Startup skaliert.' },
        { title: 'B2B-SaaS-Portale', description: 'Komplexe Enterprise-SaaS-Apps mit RBAC, Custom-Hierarchien und Admin-Tools, denen IT vertraut.' },
        { title: 'Consumer-Mobile-Apps', description: 'Performante Cross-Platform-Apps mit React Native oder Flutter.' },
        { title: 'KI-erweiterte Produkte', description: 'Integration von Generative AI, Vision oder NLP für defendierbare Differenzierer.' },
        { title: 'Marktplätze', description: 'Skalierbare multi-sided Marktplätze mit Routing, Escrow und Trust.' },
        { title: 'Developer-Tooling', description: 'SDKs, CLIs und Doku-Portale für technische Produkte.' },
        { title: 'Cloud-Kostenoptimierung', description: 'Audit und Re-Architektur von Cloud-Deployments mit messbaren Einsparungen.' },
        { title: 'Startup-Rescue', description: 'Stabilisieren, refactoren und skalieren übernommener Codebases.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Velocity und Skala',
      description:
        'Wir schreiben nicht nur Code, wir beschleunigen Wachstum und verbessern Unit Economics, damit Engineering ein starker Investmentgrund wird.',
      metrics: [
        { label: 'Schnellere MVP-Lieferung', description: 'Beschleunigung beim Launch des Kernprodukts gegenüber traditionellem Hiring.' },
        { label: 'Cloud-Einsparungen', description: 'Durchschnittliche Senkung des monatlichen Spends nach Architektur- und FinOps-Audits.' },
        { label: 'Downtime-freie Deployments', description: 'Vollautomatisierte CI/CD und gründliches Testing mit Progressive Delivery.' },
        { label: 'Deployments / Monat', description: 'Schnelle Iteration und kontinuierliche Lieferung getrieben von echtem Feedback.' },
      ],
    },
  },
}
