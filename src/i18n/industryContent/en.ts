import type { IndustryContentByVariant } from './types'

export const enIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Financial Services',
      title: 'Next-Generation Software for BFSI',
      highlight: 'Financial Services',
      description:
        'We help banks, insurers, and fintech innovators ship secure, compliant, and scalable digital products. From core banking modernization to algorithmic trading, our engineering teams build the systems that move money safely at scale.',
      cta: 'Discuss Your FinTech Project',
      statLabels: ['FinTech Platforms', 'Uptime Guaranteed', 'Compliant'],
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Complete Financial Solutions',
      description:
        'A full spectrum of engineering services tailored for retail and commercial banking, payments, wealth, insurance, and capital markets.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'Digital Banking Platforms',
          description:
            'Custom digital banking experiences that feel native on every device, with the resilience and security that regulated workloads demand.',
          details:
            'We engineer omnichannel banking platforms with unified dashboards, mobile-first journeys, real-time transaction processing, and modular core banking integrations. Our reference architectures already power millions of monthly logins for retail and commercial customers, so your team inherits proven patterns instead of starting from scratch.',
          outcomes: [
            'Reference omnichannel architecture covering web, mobile, and branch surfaces',
            'Authentication baseline with biometrics, step-up, and FIDO2 support',
            'Real-time ledger and transaction APIs with documented SLAs',
            'Operational dashboards for fraud, customer support, and product teams',
            'Hand-off runbooks for SRE, compliance, and customer ops',
          ],
        },
        {
          title: 'Payment Processing Solutions',
          description:
            'PCI-DSS aligned payment gateways, wallets, and cross-border rails engineered for high throughput and predictable settlement.',
          details:
            'Our payments practice covers card acceptance, EMV integration, account-to-account flows, digital wallets, and blockchain settlement, all built with idempotent retries, exactly-once accounting, and reconciliation tooling that keeps finance, ops, and engineering aligned.',
          outcomes: [
            'PCI-DSS aligned tokenization and vaulting strategy',
            'Idempotent payment APIs with reconciliation events',
            'Wallet, EMV, and bank rail connectors with sandbox environments',
            'Settlement reporting wired to your finance ledger',
            'Chargeback and dispute workflow with audit trail',
          ],
        },
        {
          title: 'WealthTech and Robo-Advisors',
          description:
            'Wealth and advisory platforms that combine quantitative models with intuitive client experiences for both retail and HNW segments.',
          details:
            'We build automated portfolio rebalancing engines, risk profiling models, AI-driven advisor copilots, and rich reporting dashboards that aggregate custodians, brokerages, and alternative data sources. Compliance, suitability, and audit trails are designed in from the first sprint.',
          outcomes: [
            'Suitability and KYC capture flows mapped to regulators',
            'Portfolio rebalancing engine with documented strategies',
            'Custodian and brokerage integrations with reconciliation',
            'Client reporting dashboards across web and PDF',
            'Advisor copilot tooling with full audit history',
          ],
        },
        {
          title: 'InsurTech Solutions',
          description:
            'End-to-end insurance experiences from quote to claim, with automation that compresses cycle times without compromising governance.',
          details:
            'We modernize underwriting, policy administration, and claims handling using AI scoring, RPA for back-office workflows, OCR-based document intake, and self-service portals for policyholders and brokers, typically reducing claims cycle times by 40 to 60 percent.',
          outcomes: [
            'Quote and bind APIs with rules engine integration',
            'AI-assisted underwriting scoring with human-in-the-loop reviews',
            'Claims FNOL workflow with document OCR and triage',
            'Self-service portals for policyholders, brokers, and adjusters',
            'Operational dashboards for loss ratio and SLA tracking',
          ],
        },
        {
          title: 'Regulatory and Compliance (RegTech)',
          description:
            'Automated KYC, AML, and reporting platforms that turn compliance from a cost centre into a continuous control plane.',
          details:
            'We integrate biometric identity verification, sanctions and PEP screening, transaction monitoring rules, case management, and regulatory reporting pipelines that satisfy GDPR, PSD2, FATCA, and KYC and AML regimes across multiple jurisdictions.',
          outcomes: [
            'KYC and AML onboarding flow with biometric checks',
            'Sanctions, PEP, and adverse media screening pipelines',
            'Transaction monitoring rules with alert triage workflow',
            'Case management for analysts with full evidence chain',
            'Regulatory reporting exports for local supervisors',
          ],
        },
        {
          title: 'Blockchain and Smart Contracts',
          description:
            'Permissioned and public chain solutions for tokenization, settlement, and tamper-evident audit trails on enterprise-grade infrastructure.',
          details:
            'Our blockchain teams design DeFi style products, asset tokenization platforms, and tamper-proof audit trails across Ethereum, Polygon, and Hyperledger Fabric, with key custody, gas optimization, and compliance hooks engineered for institutional use.',
          outcomes: [
            'Token model and smart contract suite peer reviewed',
            'Custody pattern integrated with HSMs or MPC providers',
            'Settlement reconciliation between on-chain and core systems',
            'Operational tooling for ops, compliance, and treasury',
            'Security review covering bridges, oracles, and upgradability',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Industry Challenges',
      title: 'Solving the Hardest FinTech Problems',
      description:
        'We tackle the technology friction that holds financial institutions back, so your teams can focus on customers, products, and growth.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Evolving Regulatory Landscape',
          solution:
            'We embed automated compliance engines, robust audit trails, and modular control libraries for KYC, AML, GDPR, and PSD2 directly into your platform, so new obligations land as configuration changes rather than risky rebuilds.',
        },
        {
          challenge: 'Rising Cyber Threats and Fraud',
          solution:
            'We design zero-trust architectures, end-to-end encryption, and AI-driven anomaly detection that secure transactions, harden APIs, and surface suspicious behaviour in real time without slowing genuine customers down.',
        },
        {
          challenge: 'Legacy System Constraints',
          solution:
            'Using a strangler fig approach, we wrap legacy core banking systems with modern APIs, peel functionality into microservices, and migrate data progressively, all without freezing the product roadmap or risking outages.',
        },
        {
          challenge: 'Fragmented Customer Data',
          solution:
            'We deploy unified data lakes, customer 360 platforms, and analytics pipelines that consolidate banking, insurance, and digital touchpoints, enabling personalized offers, faster service, and consistent omnichannel experiences.',
        },
        {
          challenge: 'Inefficient Manual Processes',
          solution:
            'We integrate RPA, intelligent document processing, and workflow automation into loan origination, underwriting, and claims handling to remove repetitive work, lower error rates, and free skilled staff for higher value tasks.',
        },
        {
          challenge: 'Slow Payment Settlements',
          solution:
            'We build high-throughput, low-latency payment gateways and tokenized settlement layers backed by smart contracts that enable near instant cross-border remittance with predictable fees and full visibility.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases We Cater to in Financial Services',
      description:
        'We partner with banks, fintech startups, and insurers to solve concrete technology challenges across the full BFSI value chain.',
      items: [
        { title: 'Core Banking Modernization', description: 'Migrating legacy banking monoliths into agile, cloud-native microservices for greater flexibility, faster releases, and lower operational cost.' },
        { title: 'Open Banking API Portals', description: 'Designing secure API gateways and developer experiences that let financial institutions share data with regulated third parties safely.' },
        { title: 'Fraud Detection Systems', description: 'Implementing machine learning models that score transactions in real time, flag suspicious patterns, and tune thresholds without overwhelming analysts.' },
        { title: 'Personal Finance Management', description: 'Building mobile experiences that aggregate bank accounts, categorize spending, and surface personalized budgeting and savings nudges.' },
        { title: 'Automated Loan Origination', description: 'End-to-end digital lending platforms that combine alternative data, AI scoring, and disbursement workflows to approve loans in minutes.' },
        { title: 'Algorithmic Trading Platforms', description: 'High-frequency trading architectures engineered for ultra low latency, complex event processing, and reproducible backtesting.' },
        { title: 'Insurance Telematics', description: 'Usage-based insurance platforms that combine IoT data from connected vehicles with pricing engines for fair, dynamic premiums.' },
        { title: 'Customer Onboarding (eKYC)', description: 'Frictionless digital onboarding workflows with OCR, facial liveness, and risk-based step-up, designed for high pass rates and tight compliance.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Measurable Financial Impact',
      description:
        'Our engineering work translates directly into operational efficiency, stronger security posture, and growth metrics your leadership team can defend.',
      metrics: [
        { label: 'Faster Onboarding', description: 'Reduction in customer onboarding time achieved through automated eKYC, OCR, and risk-based decisioning flows.' },
        { label: 'Fraud Prevention', description: 'Accuracy in detecting and blocking fraudulent transactions using purpose-built machine learning models and rules.' },
        { label: 'Cost Reduction', description: 'Decrease in manual processing costs by introducing RPA and intelligent automation across back-office finance operations.' },
        { label: 'Transaction Volume', description: 'Increase in peak transaction handling capacity through cloud-native microservices and elastic infrastructure.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Healthcare and Life Sciences',
      title: 'Transforming Patient Care with Technology',
      highlight: 'Healthcare',
      description:
        'We help providers, payers, and life sciences organizations deliver better outcomes with secure, interoperable, and human-centered digital solutions, all engineered for HIPAA, FDA, and global health data regulations.',
      cta: 'Discuss Your Healthcare App',
      statLabels: ['HealthTech Apps', 'Compliant', 'Patients Managed'],
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Comprehensive Healthcare Solutions',
      description:
        'Engineering services for hospitals, clinics, payers, healthtech startups, and life sciences companies, designed around clinicians and patients.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'Telemedicine Platforms',
          description:
            'Secure, high-quality video consultation experiences that integrate scheduling, charting, prescriptions, and payments into a single workflow.',
          details:
            'We build HIPAA aligned telemedicine applications using WebRTC, secure messaging, e-prescription connectors, and integrated payments, with low-bandwidth fallbacks so care still reaches patients in rural and underserved settings.',
          outcomes: [
            'WebRTC video pipeline tuned for low bandwidth networks',
            'Scheduling and intake flow integrated with EHR',
            'Secure messaging and document sharing with consent tracking',
            'e-Prescription and refill workflow with audit logs',
            'Payment and claims handoff to revenue cycle systems',
          ],
        },
        {
          title: 'EHR and EMR Integration',
          description:
            'Custom EHR or EMR systems and standards-based integration with hospital, lab, and partner systems for a unified patient record.',
          details:
            'Our interoperability practice leverages HL7 v2, FHIR R4, and CDA to connect hospitals, clinics, labs, imaging centres, and registries. We migrate data, design longitudinal patient views, and ship developer-friendly APIs that accelerate downstream innovation.',
          outcomes: [
            'FHIR R4 facade over legacy HL7 v2 interfaces',
            'Patient matching and identity reconciliation strategy',
            'Bulk data export for analytics and population health',
            'Provider directory and consent management baseline',
            'Developer portal with sample apps and SMART on FHIR support',
          ],
        },
        {
          title: 'IoMT and Wearables Integration',
          description:
            'Securely connect medical devices and consumer wearables to clinical platforms for remote monitoring, alerts, and richer care plans.',
          details:
            'We build secure ingestion pipelines for IoMT devices, glucose monitors, BP cuffs, ECG patches, and consumer wearables, with edge filtering, protocol translation, and clinical-grade alerting that respects clinician workflow and on-call rotations.',
          outcomes: [
            'Device gateway supporting Bluetooth, LTE-M, and NB-IoT',
            'Edge filtering rules to suppress noise before clinician alerts',
            'Time series store with retention aligned to compliance',
            'Care team alerting with escalation policies',
            'Patient mobile app experience with self-care prompts',
          ],
        },
        {
          title: 'Healthcare AI and Analytics',
          description:
            'Predictive models, imaging analysis, and clinical decision support that augment clinicians without disrupting their workflow.',
          details:
            'Our healthcare AI work spans risk stratification, length of stay prediction, no-show forecasting, medical imaging triage, and clinical decision support, all delivered with model documentation, bias monitoring, and clinician feedback loops.',
          outcomes: [
            'Model card and intended use documentation per model',
            'Bias and performance monitoring dashboards',
            'Integration into EHR with minimum click clinician UX',
            'Feedback capture loop for continuous improvement',
            'Audit trail for every prediction shown to clinicians',
          ],
        },
        {
          title: 'Pharmacy Management Systems',
          description:
            'Pharmacy automation, inventory management, and prescription fulfillment for community, hospital, and mail order pharmacy operations.',
          details:
            'We build comprehensive pharmacy systems that handle e-prescribing, automated reorder triggers, compounding workflows, controlled substance audit trails, and last-mile delivery integrations for retail and mail order operations.',
          outcomes: [
            'e-Prescribing integration with Surescripts or local equivalents',
            'Inventory model with automated reorder suggestions',
            'Compounding and verification workflow with sign-off',
            'Controlled substance audit trail with regulator-ready exports',
            'Last-mile delivery integration with status updates to patients',
          ],
        },
        {
          title: 'Clinical Trial Management',
          description:
            'Research operations platforms that streamline patient recruitment, electronic data capture, and regulatory data compliance.',
          details:
            'Our CTMS deployments cover protocol design, patient recruitment, electronic data capture, site monitoring, adverse event reporting, and 21 CFR Part 11 aligned audit trails, accelerating studies for sponsors and CROs alike.',
          outcomes: [
            'Protocol library with versioned amendments',
            'Recruitment funnel with eligibility prescreen tooling',
            'EDC forms with edit checks and reviewer workflow',
            'Adverse event capture wired to safety monitoring',
            '21 CFR Part 11 aligned audit log and e-signatures',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Industry Challenges',
      title: 'Overcoming Healthcare Hurdles',
      description:
        'We solve the technical complexities that distract clinical teams, so the people who care for patients can focus on outcomes instead of systems.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Strict HIPAA and FDA Compliance',
          solution:
            'We engineer platforms with encryption, granular audit logs, and access controls that conform to HIPAA, GDPR, and FDA requirements without slowing the workflows clinicians depend on every day.',
        },
        {
          challenge: 'Siloed Patient Data',
          solution:
            'Using HL7 and FHIR, we build interoperable data layers that connect legacy EHRs, laboratories, imaging centres, and partner clinics into a unified, longitudinal patient view that travels with the person.',
        },
        {
          challenge: 'Poor Patient Engagement',
          solution:
            'We design intuitive patient portals and mobile experiences with easy scheduling, secure messaging, personalized health insights, and content that meets patients where they are, lifting retention and adherence.',
        },
        {
          challenge: 'Physician Burnout',
          solution:
            'Our AI assisted dictation, ambient documentation, automated billing pipelines, and streamlined clinical workflows cut administrative load so physicians can spend more of every visit with the patient in front of them.',
        },
        {
          challenge: 'Delayed Diagnostics',
          solution:
            'We layer machine learning and computer vision on top of existing PACS and lab systems to triage critical cases, prioritize radiologist queues, and accelerate access to time-sensitive treatment.',
        },
        {
          challenge: 'Managing Chronic Conditions',
          solution:
            'We integrate IoMT wearables and remote monitoring directly with clinical dashboards, with smart alerts that nudge proactive interventions before patients escalate to acute episodes.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases We Cater to in Healthcare',
      description:
        'We tackle critical challenges across the continuum of care with modern technology that respects clinical realities and patient experience.',
      items: [
        { title: 'Remote Patient Monitoring', description: 'Help clinical teams manage chronic conditions by syncing wearable data into care dashboards with alerting and trend analysis.' },
        { title: 'Digital Triage Chatbots', description: 'AI-powered conversations that evaluate symptoms, recommend immediate actions, and route patients to the most appropriate level of care.' },
        { title: 'Hospital Operations Automation', description: 'Optimize bed management, OR scheduling, staff rosters, and supply tracking through unified operational systems and dashboards.' },
        { title: 'Genomic Data Processing', description: 'High-performance cloud pipelines for sequencing, variant analysis, and secure long-term storage of genomic data sets.' },
        { title: 'Mental Health Applications', description: 'Secure, friendly mobile experiences offering CBT exercises, mood tracking, and direct access to licensed counselors.' },
        { title: 'Surgical Planning AR/VR', description: 'Augmented and virtual reality tools that render 3D patient anatomy from imaging studies for preoperative planning and training.' },
        { title: 'Medical Supply Chain', description: 'Blockchain-backed traceability for pharmaceuticals and medical devices, with cold chain telemetry baked in.' },
        { title: 'Automated Billing and Coding', description: 'RPA and NLP solutions that extract structured data from clinical notes to generate accurate medical billing codes faster.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Quantifiable Clinical Impact',
      description:
        'Our solutions do more than upgrade technology, they show up in operational dashboards, regulator reports, and patient outcomes alike.',
      metrics: [
        { label: 'Reduced Readmissions', description: 'Decrease in hospital readmission rates through effective remote patient monitoring and proactive intervention workflows.' },
        { label: 'Faster Triage', description: 'Improvement in patient routing efficiency using NLP-powered digital triage and intelligent intake forms.' },
        { label: 'Admin Time Saved', description: 'Reduction in manual data entry and billing paperwork for clinical staff via RPA and ambient documentation.' },
        { label: 'Audit Readiness', description: 'Continuous HIPAA and FDA 21 CFR Part 11 audit readiness maintained through automated control evidence and logging.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail and E-commerce',
      title: 'Elevate Your Digital Storefront',
      highlight: 'E-commerce',
      description:
        'We help direct-to-consumer brands, B2B wholesalers, and global marketplaces drive sales and loyalty with fast, personalized, and reliable omnichannel commerce experiences.',
      cta: 'Start Your Commerce Project',
      statLabels: ['Stores Launched', 'GMV Processed', 'Load Times'],
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Complete Retail Solutions',
      description:
        'End-to-end commerce engineering for digital, physical, and B2B storefronts, with a focus on conversion, retention, and operational efficiency.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'Omnichannel Commerce Platforms',
          description:
            'Unified shopping experiences across web, mobile, social, and physical store, all built on flexible, composable commerce architectures.',
          details:
            'We design headless and composable commerce platforms that decouple the storefront from commerce engines, so brands can roll out new channels, geographies, and brands quickly without re-platforming the back end every time.',
          outcomes: [
            'Composable architecture diagram with vendor selection notes',
            'Unified cart and customer profile across channels',
            'Storefront performance budget enforced in CI',
            'Promotion and pricing engine integration plan',
            'Operational tooling for merchandising and CX teams',
          ],
        },
        {
          title: 'Point of Sale (POS) Systems',
          description:
            'Cloud-based POS software that bridges online and in-store, with offline resilience and tight inventory and loyalty integration.',
          details:
            'Our POS solutions sync inventory in real time, work offline through scan and queue patterns, integrate with hardware peripherals, and feed transaction data straight into your analytics and loyalty engines for unified reporting.',
          outcomes: [
            'Offline-first POS app with conflict resolution',
            'Hardware integration for scanners and receipt printers',
            'Real-time inventory sync with central commerce engine',
            'Loyalty enrollment and recognition at checkout',
            'Operational dashboard for store managers',
          ],
        },
        {
          title: 'Personalization and Recommendations',
          description:
            'AI-driven recommendation engines that present the right product to the right shopper at the right moment to lift conversion and AOV.',
          details:
            'We build personalization stacks combining behavioural events, customer profiles, and product attributes, surfaced through real-time recommendation APIs, dynamic pricing, and orchestration tools that marketers can tune without engineering tickets.',
          outcomes: [
            'Event schema and customer profile model documented',
            'Recommendation APIs serving home, PDP, and cart surfaces',
            'Dynamic pricing rules with guardrails and approvals',
            'Experiment platform for offer and layout tests',
            'Marketer self-serve UI for campaigns and audiences',
          ],
        },
        {
          title: 'Supply Chain and Inventory Management',
          description:
            'Backend systems that keep stock, fulfillment, and multi-warehouse logistics in sync, even when demand or sourcing shifts.',
          details:
            'We integrate ERPs, OMS, WMS, and 3PL APIs into a coherent fulfillment layer, with smart order routing, real-time inventory, returns workflows, and exception handling that ops teams can actually trust during peak season.',
          outcomes: [
            'Order routing rules tuned to cost, speed, and stock',
            'Real-time inventory across DCs, stores, and 3PLs',
            'Returns and refund workflow with policy automation',
            'Exception dashboard for ops with actionable alerts',
            'Reporting on fill rate, on-time, and shrinkage',
          ],
        },
        {
          title: 'Customer Loyalty and Rewards',
          description:
            'Loyalty platforms that nudge repeat purchases, reward advocacy, and produce data your CRM and merchandising teams can act on.',
          details:
            'We build modular loyalty programs with points, tiers, gamified mechanics, mobile wallet passes, and partner ecosystem integrations, supported by analytics that show which mechanics actually move CLV and retention.',
          outcomes: [
            'Loyalty rules engine with tiers and earn or burn flows',
            'Mobile wallet pass integration for Apple and Google',
            'Member experience across web, app, and store',
            'Analytics on retention, CLV, and repeat purchase',
            'Operational tooling for promotions and exception handling',
          ],
        },
        {
          title: 'B2B Wholesale Portals',
          description:
            'Secure, scalable platforms tailored to the realities of B2B commerce, with custom catalogs, complex pricing, and procurement integrations.',
          details:
            'Our B2B portals handle account hierarchies, custom price lists, contract pricing, bulk ordering, quote-to-cash workflows, and PunchOut integrations with Ariba, Coupa, and other procurement systems used by enterprise buyers.',
          outcomes: [
            'Account hierarchy and role-based permissions model',
            'Custom price book and contract pricing engine',
            'Quote-to-cash workflow with approvals and credit checks',
            'PunchOut integration with major procurement platforms',
            'Self-service order history, reorder, and invoicing',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Industry Challenges',
      title: 'Overcoming Retail Bottlenecks',
      description:
        'We remove the technical friction between your brand, your shoppers, and your store of record so digital revenue can scale predictably.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'High Cart Abandonment',
          solution:
            'We engineer frictionless, accessible checkout flows, integrate stored credentials and wallets, and add personalized retargeting that recovers carts without feeling intrusive to your shoppers.',
        },
        {
          challenge: 'Slow Page Load Times',
          solution:
            'Migrating storefronts to headless architectures hosted on edge networks, with budget-driven performance work that protects sub-second loads as your catalog and traffic grow.',
        },
        {
          challenge: 'Poor Product Discoverability',
          solution:
            'We integrate AI-powered search and merchandising, tune relevance models with your data, and surface guided discovery patterns that translate browsing intent into add to cart actions.',
        },
        {
          challenge: 'Inventory Discrepancies',
          solution:
            'Robust middleware synchronizes real-time inventory between physical POS, warehouses, and digital storefronts, with reconciliation jobs that keep oversells out of weekend incident reports.',
        },
        {
          challenge: 'Disconnected Customer Journeys',
          solution:
            'We deploy customer data platforms and loyalty programs that stitch identities and behaviour across web, app, and store, so service, marketing, and merchandising work from the same view of the shopper.',
        },
        {
          challenge: 'Traffic Spikes and Downtime',
          solution:
            'We design auto-scaling cloud infrastructure with multi-layer caching and load testing rituals, so flash sales, drops, and Black Friday peaks become a planning event rather than a war room.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases We Cater to in Retail',
      description:
        'We partner with direct-to-consumer brands, B2B wholesalers, and large marketplaces to ship commerce experiences that move the business.',
      items: [
        { title: 'Headless Storefront Migration', description: 'Upgrading rigid monolithic storefronts to flexible, fast, headless architectures on Next.js or Nuxt with composable backend services.' },
        { title: 'Mobile Commerce Apps', description: 'Native iOS and Android shopping apps with AR product visualization, biometrics, and one-tap checkout designed for retention.' },
        { title: 'Marketplace Development', description: 'Multi-vendor marketplaces with commission routing, vendor dashboards, and catalog quality controls.' },
        { title: 'Subscription Box Services', description: 'Recurring billing, customizable boxes, and fulfillment logic for subscription retail models with churn-aware tooling.' },
        { title: 'In-Store Digital Kiosks', description: 'Touch-screen kiosks for endless aisle browsing, assisted selling, and self-checkout in physical stores.' },
        { title: 'Voice Commerce Integration', description: 'Voice-assisted shopping experiences via Alexa and Google Assistant for repeat orders and quick reorders.' },
        { title: 'Predictive Inventory Planning', description: 'AI demand forecasting that combines seasonality, promotions, and external signals to optimize purchasing decisions.' },
        { title: 'Automated Customer Service', description: 'AI chatbots that handle order tracking, returns, and FAQs around the clock and escalate cleanly when needed.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Measurable E-commerce Growth',
      description:
        'Our commerce architectures are designed to do one job well, which is to drive bottom-line revenue you can attribute to the technology investments your team made.',
      metrics: [
        { label: 'Conversion Rate Increase', description: 'Average boost in checkout completion delivered through frictionless UX redesigns and headless migrations.' },
        { label: 'Page Load Speed', description: 'Lightning-fast storefront rendering times that directly contribute to lower bounce rates and stronger SEO performance.' },
        { label: 'Higher LTV', description: 'Increase in customer lifetime value driven by AI personalization and gamified loyalty programs.' },
        { label: 'Inventory Accuracy', description: 'Real-time synchronization across physical and digital channels that effectively eliminates oversells and stockout complaints.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply Chain and Logistics',
      title: 'Intelligent Logistics Software',
      highlight: 'Supply Chain',
      description:
        'We help shippers, carriers, 3PLs, and manufacturers digitize operations end to end, from yard and warehouse to fleet and last mile, with software that increases visibility and reduces cost.',
      cta: 'Optimize Your Supply Chain',
      statLabels: ['Logistics Platforms', 'Shipments Tracked', 'Avg. Efficiency Gain'],
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Comprehensive Logistics Solutions',
      description:
        'Engineering for fleet operators, warehouses, freight forwarders, and 3PL providers, with practical deliverables that change operational metrics within months.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'Fleet Management Systems',
          description:
            'Telematics platforms that monitor vehicle health, track routes in real time, and surface fuel and driver insights to your operations team.',
          details:
            'We integrate GPS, OBD-II, and dashcam data with driver mobile apps and dispatcher consoles. Operations leaders get a single view of fleet health, route adherence, fuel use, and driver behaviour, with alerts tuned to genuine exceptions.',
          outcomes: [
            'Telematics ingestion pipeline with edge buffering',
            'Live map and route adherence dashboards for dispatch',
            'Fuel and idle reporting with trend benchmarks',
            'Driver scoring with safety and efficiency metrics',
            'Maintenance alerts wired to workshop ticketing',
          ],
        },
        {
          title: 'Warehouse Automation (WMS)',
          description:
            'Intelligent WMS solutions for inventory, automated picking, and storage optimization, designed for high-volume distribution centres.',
          details:
            'Our WMS implementations leverage barcode and RFID scanning, robotics integration, and slot optimization. Receiving, putaway, picking, packing, and shipping operate as a coordinated flow with real-time exception handling and labour tracking.',
          outcomes: [
            'Inbound and outbound flows configured to your DC layout',
            'Slotting strategy with periodic re-evaluation',
            'Mobile scanning workflows for pick, pack, and ship',
            'Labour management dashboards with productivity metrics',
            'Exception handling for damages, returns, and shortages',
          ],
        },
        {
          title: 'Real-Time Visibility Platforms',
          description:
            'End-to-end supply chain tracking across carriers, sensors, and ERPs to give every stakeholder a shared, predictive view of every shipment.',
          details:
            'We aggregate data from carriers, IoT sensors, and ERP systems into a control tower with predictive ETAs, exception detection, and automated stakeholder notifications, so a delay never first surfaces in an angry customer email.',
          outcomes: [
            'Multi-carrier integration framework with failover',
            'Predictive ETA model tuned to your lane history',
            'Stakeholder notifications across email, SMS, and webhook',
            'Exception cockpit for ops with workflow tooling',
            'Customer-facing tracking experience with branding',
          ],
        },
        {
          title: 'Route Optimization Engines',
          description:
            'AI routing that calculates the most efficient delivery routes given traffic, weather, capacity, time windows, and service constraints.',
          details:
            'Our routing engines combine machine learning, dynamic mapping APIs, and constraint solvers to handle multi-stop, multi-vehicle, and mixed fleet scenarios, lifting drops per route while respecting driver hours and customer commitments.',
          outcomes: [
            'Routing model documented with constraints and assumptions',
            'Driver app integration with sequenced stops',
            'KPI dashboard for stops per route and on-time delivery',
            'Re-optimization triggers for live disruptions',
            'Backtesting harness for new heuristics or providers',
          ],
        },
        {
          title: 'Last-Mile Delivery Apps',
          description:
            'Mobile experiences for drivers and customers that turn the final mile into a transparent, branded, and high-trust interaction.',
          details:
            'We ship driver apps with turn-by-turn navigation, proof of delivery, customer signatures, and exception capture, paired with customer-facing tracking portals that reduce WISMO calls and improve delivery satisfaction scores.',
          outcomes: [
            'Native driver app with offline-first behaviour',
            'Proof of delivery with photos, signatures, and notes',
            'Customer tracking portal with live ETA and chat',
            'Exception capture for failed deliveries with workflow',
            'Operational dashboard for delivery performance',
          ],
        },
        {
          title: 'Inventory Forecasting',
          description:
            'Predictive analytics that keep stock at the right level in the right node so you avoid stockouts without burying capital in inventory.',
          details:
            'We blend historical sales, promotions, seasonality, and external signals into demand forecasts that feed replenishment and safety stock policies, with explainability so planners trust and tune the recommendations rather than override them.',
          outcomes: [
            'Forecast model evaluated against your historical data',
            'Replenishment recommendations integrated with ERP',
            'Safety stock and reorder points by SKU and node',
            'Planner workbench with scenario comparison',
            'Forecast accuracy reporting with continuous tuning',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Industry Challenges',
      title: 'Solving Supply Chain Complexities',
      description:
        'We engineer solutions that untangle operational knots and bring data, decisions, and field execution closer together.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Lack of Real-Time Visibility',
          solution:
            'We integrate IoT sensors and multi-carrier APIs into a centralized control tower so blind spots disappear and your team gets accurate, real-time tracking across global transit networks.',
        },
        {
          challenge: 'Inefficient Routing and High Fuel Costs',
          solution:
            'We deploy AI-driven route optimization that adapts to traffic, weather, and load capacity, cutting fuel use, mileage, and driver hours without sacrificing service levels.',
        },
        {
          challenge: 'Warehouse Bottlenecks and Errors',
          solution:
            'Smart WMS platforms with RFID, barcode scanning, and pick to light or voice picking workflows accelerate throughput and virtually eliminate fulfillment errors at peak.',
        },
        {
          challenge: 'Fragmented Legacy Systems',
          solution:
            'We engineer middleware and API gateways that connect ERPs, transportation systems, and 3PL platforms so data flows cleanly between teams instead of being re-keyed by humans.',
        },
        {
          challenge: 'Cold Chain Spoilage',
          solution:
            'Continuous IoT temperature monitoring with automated alerting prevents spoilage and protects compliance for food, pharma, and other regulated cold chains.',
        },
        {
          challenge: 'Last-Mile Delivery Friction',
          solution:
            'Driver apps with proof of delivery and turn-by-turn navigation, paired with branded customer tracking experiences, deliver transparent and successful final mile interactions.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases We Cater to in Logistics',
      description:
        'We solve concrete logistics challenges with modern, data-driven technology that respects the realities of warehouses, drivers, and customers.',
      items: [
        { title: 'Cold Chain Monitoring', description: 'IoT temperature sensors and tamper evident ledgers that protect perishables and pharmaceuticals end to end.' },
        { title: 'Freight Forwarding Portals', description: 'Secure shipper portals for quotes, bookings, and customs documentation with role-based access for partners.' },
        { title: 'Yard Management Systems', description: 'Digital yard solutions that track trailers, optimize dock door scheduling, and improve DC throughput.' },
        { title: 'Reverse Logistics', description: 'Returns automation including RMA generation, return label creation, and refurbishment tracking with cost analysis.' },
        { title: 'Third-Party Logistics (3PL) Portals', description: 'Multi-tenant dashboards letting 3PL providers offer real-time inventory and shipping visibility to their clients.' },
        { title: 'Autonomous Vehicle Integration', description: 'APIs and control towers to interface with autonomous delivery vehicles, drones, and robotics in pilots and rollouts.' },
        { title: 'Supplier Collaboration Portals', description: 'Platforms that streamline communication, purchase orders, and invoicing between manufacturers and their suppliers.' },
        { title: 'Demand-Driven Replenishment', description: 'Automated systems that trigger purchase orders based on real-time POS data and forecasts rather than static minimums.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Measurable Logistics Impact',
      description:
        'Our technology directly targets the bottom line by eliminating waste, smoothing exceptions, and giving operations teams confidence to commit to better SLAs.',
      metrics: [
        { label: 'Fuel Cost Reduction', description: 'Average decrease in fleet fuel expenses achieved through AI-driven route optimization and telematics insights.' },
        { label: 'Fulfillment Accuracy', description: 'Reduction in shipping errors achieved with barcode, RFID, and automated WMS integrations.' },
        { label: 'Faster Dispatch', description: 'Improvement in yard and dock management efficiency, reducing driver wait times and loading bottlenecks.' },
        { label: 'Supply Chain Visibility', description: 'Complete transparency from raw material sourcing to last-mile delivery via centralized tracking dashboards.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-Tech and Digital Natives',
      title: 'Engineering for Innovators',
      highlight: 'Digital Natives',
      description:
        'We give startups, scale-ups, and digital native companies the elite engineering capacity they need to ship product faster, scale safely, and turn engineering into a durable advantage.',
      cta: 'Accelerate Your Roadmap',
      statLabels: ['Startups Supported', 'Of Active Users', 'Avg. MVP Delivery'],
    },
    features: {
      badge: 'Core Capabilities',
      title: 'Complete Digital Engineering',
      description:
        'Senior software engineering for fast-moving technology companies, from MVPs and platform rebuilds to multi-region scale.',
      outcomesTitle: 'What we deliver',
      items: [
        {
          title: 'SaaS Platform Development',
          description:
            'End-to-end engineering for multi-tenant SaaS products, from data isolation and billing to admin tooling and onboarding.',
          details:
            'We design tenant isolation patterns, plug into Stripe and other billing systems, ship admin and back-office tooling, and build onboarding flows that activate users and reduce time to first value.',
          outcomes: [
            'Tenant isolation pattern documented and reviewed',
            'Subscription billing integrated with revenue reporting',
            'Admin and back-office tooling for ops and support',
            'Onboarding funnel with activation analytics',
            'SLO baseline with error budgets and on-call setup',
          ],
        },
        {
          title: 'Cloud-Native Architecture',
          description:
            'Cloud-native systems engineered for elasticity, resilience, and cost predictability, so your infrastructure keeps up with growth instead of slowing it down.',
          details:
            'We use microservices, serverless functions, and Kubernetes where they actually pay off, paired with FinOps practices that keep cloud spend explainable, predictable, and aligned with usage curves.',
          outcomes: [
            'Reference architecture aligned to your growth profile',
            'Autoscaling policies tuned to traffic patterns',
            'Multi-AZ resilience with documented failure modes',
            'FinOps dashboards mapping spend to product or team',
            'Runbooks for common incidents and recovery flows',
          ],
        },
        {
          title: 'Rapid MVP Development',
          description:
            'Focused engineering sprints that take a product from concept to live MVP in weeks, with foundations sturdy enough to scale post-launch.',
          details:
            'We pair product thinking with reusable starter kits to ship MVPs that prove the market opportunity, satisfy investors, and avoid the typical post-launch rebuild because the original code base could not survive growth.',
          outcomes: [
            'MVP scope document with success metrics',
            'Working product in production within agreed timeline',
            'Reusable component library to accelerate next iterations',
            'Analytics and feedback loops wired in from day one',
            'Roadmap for post-MVP scale and team growth',
          ],
        },
        {
          title: 'API Economy and Integrations',
          description:
            'Secure, developer-friendly REST and GraphQL APIs that extend your product into ecosystems, partners, and embedded use cases.',
          details:
            'We design APIs with versioning, rate limiting, and OAuth 2.0 baked in, deliver developer portals with sample apps and tutorials, and build SDKs in your customers most-loved languages so adoption gets easier with every release.',
          outcomes: [
            'API style guide and versioning policy',
            'Developer portal with docs, sandbox, and quickstarts',
            'SDKs in primary languages used by your customers',
            'Rate limiting, auth, and audit baseline',
            'Adoption analytics for product and partnerships teams',
          ],
        },
        {
          title: 'Data Engineering and AI Pipelines',
          description:
            'The data and ML foundation your product needs to evolve from feature flags into real, defensible intelligence.',
          details:
            'We build event tracking, ingestion pipelines, warehouses, and lakehouses, then layer feature stores, model deployment, and monitoring so AI is treated as a first class part of the product, not a side experiment.',
          outcomes: [
            'Event taxonomy and tracking baseline',
            'Warehouse or lakehouse foundation aligned to roadmap',
            'Feature store and model serving pattern',
            'Quality and bias monitoring on live models',
            'Cost model for storage, compute, and ML workloads',
          ],
        },
        {
          title: 'DevOps and CI/CD Automation',
          description:
            'A delivery pipeline that turns developer commits into deployments many times a day, safely, with the metrics to prove it.',
          details:
            'We implement CI/CD pipelines, infrastructure as code, automated testing, and progressive delivery patterns that compress lead time, lower change failure rate, and let your team move fast without praying for Friday afternoons.',
          outcomes: [
            'CI/CD pipeline templates with quality and security gates',
            'Infrastructure as code library covering core services',
            'Automated testing strategy across unit, integration, and e2e',
            'Progressive delivery patterns with feature flags',
            'DORA metrics dashboard for engineering leadership',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Industry Challenges',
      title: 'Unblocking Tech Startups',
      description:
        'We remove the technical friction that prevents digital native companies from scaling, so engineering keeps enabling growth instead of capping it.',
      challengeLabel: 'The Challenge',
      solutionLabel: 'Our Solution',
      items: [
        {
          challenge: 'Slow Time to Market',
          solution:
            'We deploy senior agile teams and proven starter kits to compress your MVP timeline, helping you validate the concept, win customers, and secure funding faster than in-house ramp would allow.',
        },
        {
          challenge: 'Platform Instability at Scale',
          solution:
            'We migrate fragile monoliths into resilient cloud-native services that auto-scale to handle viral growth, with clear failure modes documented so on-call no longer feels like a coin flip.',
        },
        {
          challenge: 'High Cloud Infrastructure Costs',
          solution:
            'We optimize database queries, right-size workloads, and introduce serverless or containerized patterns where they make sense, dramatically lowering monthly AWS, Azure, or GCP burn rates.',
        },
        {
          challenge: 'Mounting Technical Debt',
          solution:
            'We bring dedicated engineering pods to refactor legacy code, write the missing tests, and put CI/CD in place, paying down crippling tech debt without halting product work.',
        },
        {
          challenge: 'Engineering Talent Shortages',
          solution:
            'We augment your in-house team with senior full-stack engineers who plug into your rituals, deliver from week one, and stay long enough to leave the codebase healthier than they found it.',
        },
        {
          challenge: 'Complex Multi-Tenancy',
          solution:
            'We architect secure data isolation, role-based access, and dynamic provisioning so your B2B SaaS scales cleanly from your first enterprise logo to your hundredth.',
        },
      ],
    },
    useCases: {
      badge: 'Use Cases',
      title: 'Use Cases We Cater to in Hi-Tech',
      description:
        'We partner with founders, CTOs, and engineering leaders to build scalable, disruptive products without the burnout that usually comes with them.',
      items: [
        { title: 'Platform Modernization', description: 'Refactoring early stage monoliths into robust microservices as your startup scales and the user base grows beyond initial assumptions.' },
        { title: 'B2B SaaS Portals', description: 'Complex enterprise-facing SaaS apps with role-based access, custom hierarchies, and admin tooling that enterprise IT teams actually trust.' },
        { title: 'Consumer Mobile Apps', description: 'High performance cross-platform mobile apps using React Native or Flutter to reach mobile users quickly without sacrificing UX.' },
        { title: 'AI-Enhanced Products', description: 'Integrating generative AI, computer vision, or NLP into existing products to create real and defensible competitive differentiators.' },
        { title: 'Marketplace Platforms', description: 'Scalable multi-sided marketplaces with complex routing, escrow, and trust mechanisms that buyers and sellers both rely on.' },
        { title: 'Developer Tooling', description: 'SDKs, CLI tools, and documentation portals for technical products targeted at engineers and platform teams.' },
        { title: 'Cloud Cost Optimization', description: 'Auditing and re-architecting cloud deployments to reduce monthly AWS, Azure, or GCP spend with measurable savings.' },
        { title: 'Startup Rescue Operations', description: 'Stabilizing, refactoring, and scaling failing codebases inherited from earlier teams or rapid growth phases.' },
      ],
    },
    impact: {
      badge: 'Business Impact',
      title: 'Velocity and Scale',
      description:
        'We do not just write code, we accelerate growth and improve unit economics so engineering becomes one of the strongest reasons for investors and customers to back you.',
      metrics: [
        { label: 'Faster MVP Delivery', description: 'Acceleration in shipping core product to market compared to traditional in-house hiring and ramp-up.' },
        { label: 'Cloud Cost Savings', description: 'Average reduction in monthly infrastructure spend after architecture optimization audits and FinOps work.' },
        { label: 'Downtime Deployments', description: 'Achieved through fully automated CI/CD pipelines and rigorous automated testing with progressive delivery.' },
        { label: 'Deployments / Month', description: 'Enabling rapid iteration and continuous feature delivery driven by real-time customer feedback.' },
      ],
    },
  },
}
