import type { IndustryContentByVariant } from './types'

export const esIndustryContent: IndustryContentByVariant = {
  financial: {
    hero: {
      badge: 'Servicios financieros',
      title: 'Software de nueva generación para BFSI',
      highlight: 'Servicios financieros',
      description:
        'Ayudamos a bancos, aseguradoras y fintechs a lanzar productos digitales seguros, conformes y escalables. Desde la modernización de la banca core hasta el trading algorítmico, nuestros equipos construyen los sistemas que mueven dinero a escala.',
      cta: 'Habla de tu proyecto FinTech',
      statLabels: ['Plataformas FinTech', 'Disponibilidad garantizada', 'Conforme'],
    },
    features: {
      badge: 'Capacidades principales',
      title: 'Soluciones financieras completas',
      description:
        'Servicios de ingeniería de extremo a extremo para banca minorista y mayorista, pagos, gestión patrimonial, seguros y mercados de capitales.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Plataformas de banca digital',
          description:
            'Experiencias de banca digital nativas en cada dispositivo, con la resiliencia y seguridad que exigen las cargas reguladas.',
          details:
            'Diseñamos plataformas omnicanal con dashboards unificados, recorridos mobile-first, procesamiento transaccional en tiempo real e integraciones modulares con la banca core. Nuestras arquitecturas de referencia ya soportan millones de logins mensuales.',
          outcomes: [
            'Arquitectura omnicanal de referencia para web, móvil y sucursales',
            'Baseline de autenticación con biometría, step-up y FIDO2',
            'Ledger en tiempo real y APIs transaccionales con SLAs',
            'Dashboards operativos para fraude, atención y producto',
            'Runbooks de hand-off para SRE, cumplimiento y operaciones',
          ],
        },
        {
          title: 'Soluciones de procesamiento de pagos',
          description:
            'Pasarelas de pago, wallets y rieles cross-border alineadas con PCI-DSS, diseñadas para alto throughput y liquidación predecible.',
          details:
            'Nuestra práctica de pagos cubre aceptación de tarjetas, integración EMV, A2A, wallets digitales y liquidación blockchain, con reintentos idempotentes, contabilidad exactly-once y reconciliación que mantiene alineadas a finanzas, ops e ingeniería.',
          outcomes: [
            'Estrategia de tokenización y bóveda alineada a PCI-DSS',
            'APIs de pago idempotentes con eventos de reconciliación',
            'Conectores de wallet, EMV y rieles bancarios con sandbox',
            'Reportes de liquidación integrados con tu ledger financiero',
            'Workflow de chargeback y disputas con audit trail',
          ],
        },
        {
          title: 'WealthTech y robo-advisors',
          description:
            'Plataformas de wealth y asesoría que combinan modelos cuantitativos con experiencias intuitivas para minoristas y HNW.',
          details:
            'Construimos motores de rebalanceo automático, modelos de perfilado de riesgo, copilotos AI para asesores y dashboards que agregan custodios, brokerages y datos alternativos. Cumplimiento, idoneidad y audit trails se diseñan desde el primer sprint.',
          outcomes: [
            'Flujos de idoneidad y KYC mapeados a reguladores',
            'Motor de rebalanceo de carteras con estrategias documentadas',
            'Integraciones con custodios y brokerages con reconciliación',
            'Dashboards de reporting al cliente en web y PDF',
            'Tooling de copiloto para asesores con historial de auditoría',
          ],
        },
        {
          title: 'Soluciones InsurTech',
          description:
            'Experiencias integrales de seguros, de cotización a siniestro, con automatización que reduce tiempos sin comprometer el gobierno.',
          details:
            'Modernizamos suscripción, administración de pólizas y siniestros usando scoring AI, RPA en backoffice, OCR para documentos y portales self-service para asegurados y brokers, reduciendo ciclos de claims entre 40 y 60%.',
          outcomes: [
            'APIs de quote y bind integradas con el motor de reglas',
            'Suscripción asistida por AI con revisión humana',
            'Workflow FNOL con OCR documental y triage',
            'Portales self-service para asegurados, brokers y peritos',
            'Dashboards operativos de loss ratio y SLAs',
          ],
        },
        {
          title: 'Cumplimiento y RegTech',
          description:
            'Plataformas automatizadas de KYC, AML y reporting que convierten el cumplimiento en un plano de control continuo.',
          details:
            'Integramos verificación biométrica, screening de sanciones y PEP, reglas de monitoreo transaccional, gestión de casos y pipelines de reporting regulatorio que satisfacen GDPR, PSD2, FATCA y regímenes KYC/AML en múltiples jurisdicciones.',
          outcomes: [
            'Onboarding KYC y AML con verificación biométrica',
            'Pipelines de screening de sanciones, PEP y medios adversos',
            'Reglas de monitoreo transaccional con triage de alertas',
            'Gestión de casos para analistas con cadena de evidencia',
            'Exportes de reporting regulatorio para supervisores locales',
          ],
        },
        {
          title: 'Blockchain y smart contracts',
          description:
            'Soluciones de cadena permitida y pública para tokenización, liquidación y audit trails inmutables sobre infraestructura empresarial.',
          details:
            'Diseñamos productos tipo DeFi, plataformas de tokenización de activos y audit trails inmutables sobre Ethereum, Polygon y Hyperledger Fabric, con custodia de claves, optimización de gas y ganchos de cumplimiento listos para uso institucional.',
          outcomes: [
            'Modelo de tokens y suite de smart contracts revisados por pares',
            'Patrón de custodia integrado con HSMs o MPC',
            'Reconciliación on-chain y core con visibilidad operativa',
            'Tooling para ops, cumplimiento y tesorería',
            'Revisión de seguridad de bridges, oracles y upgradability',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Retos del sector',
      title: 'Resolviendo los problemas más duros del FinTech',
      description:
        'Eliminamos la fricción tecnológica que frena a las instituciones financieras para que tu equipo se enfoque en clientes, producto y crecimiento.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Panorama regulatorio cambiante',
          solution:
            'Integramos motores de cumplimiento automatizado, audit trails sólidos y librerías modulares de control para KYC, AML, GDPR y PSD2 directamente en tu plataforma, así nuevas obligaciones se vuelven configuración y no reescrituras.',
        },
        {
          challenge: 'Crecientes amenazas de fraude y ciberseguridad',
          solution:
            'Diseñamos arquitecturas zero-trust, cifrado de extremo a extremo y detección de anomalías con AI que aseguran transacciones, endurecen APIs y elevan comportamientos sospechosos en tiempo real sin ralentizar a los clientes legítimos.',
        },
        {
          challenge: 'Restricciones de sistemas legacy',
          solution:
            'Con un enfoque strangler fig, envolvemos sistemas core con APIs modernas, extraemos funcionalidad a microservicios y migramos datos progresivamente sin congelar el roadmap ni arriesgar caídas.',
        },
        {
          challenge: 'Datos de cliente fragmentados',
          solution:
            'Desplegamos data lakes, plataformas de cliente 360 y pipelines analíticos que consolidan banca, seguros y canales digitales para ofrecer experiencias omnicanal personalizadas y consistentes.',
        },
        {
          challenge: 'Procesos manuales ineficientes',
          solution:
            'Integramos RPA, procesamiento documental inteligente y automatización de workflows en originación, suscripción y siniestros para eliminar tareas repetitivas y liberar a los expertos para trabajo de mayor valor.',
        },
        {
          challenge: 'Liquidaciones lentas',
          solution:
            'Construimos pasarelas de alto throughput y baja latencia, junto a capas de liquidación tokenizadas con smart contracts, para remesas cross-border casi instantáneas con costes y visibilidad predecibles.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Casos de uso que atendemos en Servicios financieros',
      description:
        'Trabajamos con bancos, fintechs y aseguradoras para resolver retos tecnológicos concretos en toda la cadena BFSI.',
      items: [
        { title: 'Modernización de banca core', description: 'Migramos monolitos bancarios a microservicios cloud-native ágiles para mayor flexibilidad, releases más rápidos y menor coste operativo.' },
        { title: 'Portales de banca abierta', description: 'Diseñamos API gateways seguros y experiencias de developer para compartir datos con terceros regulados con seguridad.' },
        { title: 'Sistemas de detección de fraude', description: 'Modelos de machine learning que puntúan transacciones en tiempo real, detectan patrones sospechosos y ajustan umbrales sin saturar a los analistas.' },
        { title: 'Gestión de finanzas personales', description: 'Experiencias móviles que agregan cuentas, categorizan gasto y entregan nudges personalizados de ahorro.' },
        { title: 'Originación automatizada de préstamos', description: 'Plataformas digitales end-to-end con datos alternativos, scoring AI y desembolso para aprobar préstamos en minutos.' },
        { title: 'Plataformas de trading algorítmico', description: 'Arquitecturas HFT con latencia ultra baja, procesamiento de eventos complejos y backtesting reproducible.' },
        { title: 'Telematics aseguradora', description: 'Plataformas de seguro basado en uso con datos IoT de vehículos conectados y motores de pricing dinámicos.' },
        { title: 'Onboarding eKYC', description: 'Workflows digitales sin fricción con OCR, liveness facial y step-up basado en riesgo, optimizados para alta tasa de aprobación.' },
      ],
    },
    impact: {
      badge: 'Impacto en el negocio',
      title: 'Impacto financiero medible',
      description:
        'Nuestro trabajo de ingeniería se traduce directamente en eficiencia operativa, mejor postura de seguridad y métricas de crecimiento defendibles.',
      metrics: [
        { label: 'Onboarding más rápido', description: 'Reducción del tiempo de onboarding gracias a flujos eKYC automatizados, OCR y decisión basada en riesgo.' },
        { label: 'Prevención de fraude', description: 'Precisión al detectar y bloquear transacciones fraudulentas con modelos de machine learning específicos.' },
        { label: 'Reducción de costes', description: 'Menor coste de procesamiento manual al introducir RPA y automatización inteligente en operaciones backoffice.' },
        { label: 'Volumen de transacciones', description: 'Mayor capacidad de transacciones pico mediante microservicios cloud-native e infraestructura elástica.' },
      ],
    },
  },

  healthcare: {
    hero: {
      badge: 'Salud y ciencias de la vida',
      title: 'Transformando la atención al paciente con tecnología',
      highlight: 'Salud',
      description:
        'Ayudamos a proveedores, pagadores y empresas de ciencias de la vida a entregar mejores resultados con soluciones digitales seguras, interoperables y centradas en las personas, alineadas con HIPAA, FDA y regulaciones globales de datos sanitarios.',
      cta: 'Habla de tu app sanitaria',
      statLabels: ['Apps HealthTech', 'Conforme', 'Pacientes gestionados'],
    },
    features: {
      badge: 'Capacidades principales',
      title: 'Soluciones sanitarias integrales',
      description:
        'Servicios de ingeniería para hospitales, clínicas, pagadores, healthtech y ciencias de la vida, diseñados en torno a clínicos y pacientes.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Plataformas de telemedicina',
          description:
            'Experiencias de videoconsulta seguras y de alta calidad que integran agenda, historia, prescripción y pagos en un solo flujo.',
          details:
            'Construimos aplicaciones de telemedicina alineadas con HIPAA usando WebRTC, mensajería segura, conectores de e-prescription y pagos integrados, con fallbacks de baja banda para llegar también a entornos rurales.',
          outcomes: [
            'Pipeline WebRTC ajustado a redes de baja banda',
            'Agenda e intake integrados con el EHR',
            'Mensajería segura y compartición documental con consentimiento',
            'Workflow de e-prescription y refill con audit logs',
            'Handoff de pagos y claims al ciclo de ingresos',
          ],
        },
        {
          title: 'Integración EHR y EMR',
          description:
            'Sistemas EHR y EMR personalizados e integración basada en estándares para una historia clínica unificada.',
          details:
            'Nuestra práctica de interoperabilidad usa HL7 v2, FHIR R4 y CDA para conectar hospitales, clínicas, laboratorios, imagen y registros. Migramos datos, diseñamos vistas longitudinales y entregamos APIs developer-friendly.',
          outcomes: [
            'Fachada FHIR R4 sobre interfaces HL7 v2 legacy',
            'Estrategia de matching y reconciliación de pacientes',
            'Export bulk para analítica y población',
            'Baseline de directorio de proveedores y consentimiento',
            'Portal developer con apps de ejemplo y SMART on FHIR',
          ],
        },
        {
          title: 'Integración IoMT y wearables',
          description:
            'Conexión segura de dispositivos médicos y wearables a plataformas clínicas para monitoreo remoto, alertas y mejores planes de cuidado.',
          details:
            'Construimos pipelines de ingesta seguros para IoMT (glucosa, BP, ECG) y wearables, con filtrado en el edge, traducción de protocolos y alertas clínicas que respetan el flujo del clínico y la rotación on-call.',
          outcomes: [
            'Gateway de dispositivos con Bluetooth, LTE-M y NB-IoT',
            'Reglas de filtrado en el edge para reducir ruido',
            'Time series store con retención alineada a cumplimiento',
            'Alertas al equipo asistencial con políticas de escalado',
            'App móvil del paciente con prompts de autocuidado',
          ],
        },
        {
          title: 'IA y analítica sanitaria',
          description:
            'Modelos predictivos, análisis de imágenes y soporte clínico que aumentan al clínico sin romper su flujo.',
          details:
            'Cubrimos estratificación de riesgo, predicción de estancia, no-shows, triage de imagen médica y soporte clínico, todo con documentación de modelo, monitoreo de sesgo y feedback del clínico.',
          outcomes: [
            'Model card y documentación de uso por modelo',
            'Dashboards de sesgo y desempeño',
            'Integración en EHR con UX de mínimo clic',
            'Bucle de feedback para mejora continua',
            'Audit trail de cada predicción mostrada',
          ],
        },
        {
          title: 'Sistemas de gestión farmacéutica',
          description:
            'Automatización de farmacia, inventario y cumplimiento de prescripciones para farmacia comunitaria, hospitalaria y mail order.',
          details:
            'Construimos sistemas que manejan e-prescribing, reorden automático, workflows de compounding, audit trail de sustancias controladas y entrega last-mile para retail y mail order.',
          outcomes: [
            'Integración e-prescribing con Surescripts o equivalentes',
            'Modelo de inventario con sugerencias automáticas de reorden',
            'Workflow de compounding y verificación con sign-off',
            'Audit trail de controlados listo para reguladores',
            'Integración de last-mile con actualizaciones a pacientes',
          ],
        },
        {
          title: 'Gestión de ensayos clínicos',
          description:
            'Plataformas que aceleran reclutamiento, captura electrónica de datos y cumplimiento regulatorio en investigación clínica.',
          details:
            'Nuestros despliegues CTMS cubren diseño de protocolo, reclutamiento, EDC, monitorización, eventos adversos y trazas alineadas con 21 CFR Part 11, acelerando estudios para sponsors y CROs.',
          outcomes: [
            'Biblioteca de protocolos con enmiendas versionadas',
            'Embudo de reclutamiento con prescreen de elegibilidad',
            'Formularios EDC con edit checks y workflow revisor',
            'Captura de eventos adversos conectada a safety',
            'Audit log y firmas electrónicas alineadas a 21 CFR Part 11',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Retos del sector',
      title: 'Superando los obstáculos sanitarios',
      description:
        'Resolvemos las complejidades técnicas que distraen a los equipos clínicos para que se concentren en los resultados, no en los sistemas.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Cumplimiento estricto HIPAA y FDA',
          solution:
            'Diseñamos plataformas con cifrado, audit logs detallados y controles de acceso conformes con HIPAA, GDPR y FDA, sin frenar los flujos en los que confían los clínicos cada día.',
        },
        {
          challenge: 'Datos de paciente en silos',
          solution:
            'Con HL7 y FHIR, construimos capas interoperables que conectan EHRs legacy, laboratorios, imagen y clínicas asociadas en una vista unificada y longitudinal del paciente.',
        },
        {
          challenge: 'Bajo engagement del paciente',
          solution:
            'Diseñamos portales y apps móviles intuitivas con agenda fácil, mensajería segura e insights personalizados para impulsar la retención y la adherencia.',
        },
        {
          challenge: 'Burnout clínico',
          solution:
            'Dictado asistido por IA, documentación ambient y pipelines de facturación automatizados reducen carga administrativa para que los médicos pasen más tiempo con sus pacientes.',
        },
        {
          challenge: 'Diagnósticos lentos',
          solution:
            'Capas de machine learning y visión sobre PACS y laboratorios para hacer triage de casos críticos y priorizar la cola del radiólogo.',
        },
        {
          challenge: 'Gestión de condiciones crónicas',
          solution:
            'Integramos wearables IoMT y monitoreo remoto en dashboards clínicos, con alertas que permiten intervenciones proactivas antes de la escalada aguda.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Casos de uso que atendemos en Salud',
      description:
        'Resolvemos retos críticos en todo el continuum de cuidado con tecnología moderna que respeta la realidad clínica y la experiencia del paciente.',
      items: [
        { title: 'Monitoreo remoto de pacientes', description: 'Sincronización de datos de wearables a dashboards clínicos con alertas y análisis de tendencias para condiciones crónicas.' },
        { title: 'Chatbots de triage digital', description: 'Conversaciones AI que evalúan síntomas, recomiendan acciones y derivan al nivel de atención adecuado.' },
        { title: 'Automatización de operaciones hospitalarias', description: 'Optimizamos camas, agenda quirúrgica, plantillas y trazabilidad de suministros con sistemas operativos unificados.' },
        { title: 'Procesamiento de datos genómicos', description: 'Pipelines cloud de alto rendimiento para secuenciación, análisis de variantes y almacenamiento seguro a largo plazo.' },
        { title: 'Aplicaciones de salud mental', description: 'Apps móviles seguras y amables con ejercicios CBT, tracking de estado de ánimo y acceso directo a counselors.' },
        { title: 'Planificación quirúrgica AR/VR', description: 'Renderizado AR/VR de anatomía 3D del paciente para planificación preoperatoria y entrenamiento.' },
        { title: 'Cadena de suministro médica', description: 'Trazabilidad blockchain para fármacos y dispositivos, con telemetría de cadena de frío incorporada.' },
        { title: 'Facturación y codificación automatizadas', description: 'RPA y NLP que extraen datos de notas clínicas para generar códigos de facturación precisos más rápido.' },
      ],
    },
    impact: {
      badge: 'Impacto en el negocio',
      title: 'Impacto clínico cuantificable',
      description:
        'Nuestras soluciones se reflejan en dashboards operativos, reportes regulatorios y resultados de pacientes a la vez.',
      metrics: [
        { label: 'Menos reingresos', description: 'Disminución de tasas de reingreso mediante monitoreo remoto y workflows proactivos.' },
        { label: 'Triage más rápido', description: 'Mejora en la eficiencia de derivación con triage digital potenciado por NLP e intake inteligente.' },
        { label: 'Tiempo administrativo ahorrado', description: 'Reducción de entrada de datos y papeleo de facturación para personal clínico vía RPA y documentación ambient.' },
        { label: 'Listo para auditoría', description: 'Audit readiness continua HIPAA y FDA 21 CFR Part 11 mediante evidencia automatizada y logging.' },
      ],
    },
  },

  retail: {
    hero: {
      badge: 'Retail y e-commerce',
      title: 'Eleva tu storefront digital',
      highlight: 'E-commerce',
      description:
        'Ayudamos a marcas DTC, mayoristas B2B y marketplaces globales a impulsar ventas y fidelidad con experiencias omnicanal rápidas, personalizadas y fiables.',
      cta: 'Lanza tu proyecto de comercio',
      statLabels: ['Tiendas lanzadas', 'GMV procesado', 'Tiempos de carga'],
    },
    features: {
      badge: 'Capacidades principales',
      title: 'Soluciones retail completas',
      description:
        'Ingeniería de comercio end-to-end para storefronts digitales, físicos y B2B, con foco en conversión, retención y eficiencia operativa.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Plataformas de comercio omnicanal',
          description:
            'Experiencias unificadas en web, móvil, social y tienda física, sobre arquitecturas componibles y flexibles.',
          details:
            'Diseñamos plataformas headless y componibles que separan el storefront de los motores de comercio, permitiendo lanzar canales, geografías y marcas sin re-platforming.',
          outcomes: [
            'Diagrama de arquitectura componible con notas de proveedores',
            'Carrito y perfil de cliente unificados entre canales',
            'Presupuesto de performance del storefront aplicado en CI',
            'Plan de integración del motor de promociones y precios',
            'Tooling operativo para merchandising y CX',
          ],
        },
        {
          title: 'Sistemas de punto de venta (POS)',
          description:
            'Software POS cloud que une online y tienda física, con resiliencia offline e integración con inventario y fidelidad.',
          details:
            'Nuestros POS sincronizan inventario en tiempo real, funcionan offline con scan-and-queue, integran periféricos y alimentan analítica y fidelidad para reporting unificado.',
          outcomes: [
            'App POS offline-first con resolución de conflictos',
            'Integración hardware de scanners e impresoras',
            'Sync de inventario en tiempo real con commerce engine',
            'Enrolamiento y reconocimiento de fidelidad en checkout',
            'Dashboard operativo para responsables de tienda',
          ],
        },
        {
          title: 'Personalización y recomendaciones',
          description:
            'Motores de recomendación AI que muestran el producto adecuado a cada cliente para subir conversión y AOV.',
          details:
            'Construimos stacks de personalización con eventos, perfiles y atributos, expuestos vía APIs en tiempo real, con pricing dinámico y herramientas de orquestación que el equipo de marketing puede ajustar sin tickets.',
          outcomes: [
            'Esquema de eventos y modelo de perfil documentados',
            'APIs de recomendación para home, PDP y carrito',
            'Reglas de pricing dinámico con guardrails y aprobaciones',
            'Plataforma de experimentos para ofertas y layouts',
            'UI self-serve para marketers en campañas y audiencias',
          ],
        },
        {
          title: 'Cadena de suministro e inventario',
          description:
            'Sistemas backend que mantienen stock, fulfillment y logística multi-almacén alineados, incluso ante cambios de demanda.',
          details:
            'Integramos ERPs, OMS, WMS y APIs 3PL en una capa coherente, con order routing, inventario en tiempo real, returns y manejo de excepciones que ops puede confiar en pico.',
          outcomes: [
            'Reglas de routing por coste, velocidad y stock',
            'Inventario en tiempo real entre DCs, tiendas y 3PLs',
            'Workflow de returns y reembolsos con automatización',
            'Dashboard de excepciones con alertas accionables',
            'Reporting de fill rate, on-time y shrinkage',
          ],
        },
        {
          title: 'Fidelidad y rewards',
          description:
            'Plataformas de fidelidad que impulsan repeticiones, premian advocacy y producen datos accionables.',
          details:
            'Construimos programas modulares con puntos, niveles, mecánicas gamificadas, mobile wallet y partner ecosystem, apoyados en analítica que muestra qué mecánicas mueven CLV y retención.',
          outcomes: [
            'Motor de reglas de fidelidad con tiers y earn/burn',
            'Integración con Apple y Google Wallet',
            'Experiencia de miembro en web, app y tienda',
            'Analítica de retención, CLV y compras repetidas',
            'Tooling operativo para promociones y excepciones',
          ],
        },
        {
          title: 'Portales B2B mayoristas',
          description:
            'Plataformas seguras y escalables ajustadas a B2B con catálogos custom, pricing complejo e integraciones de procurement.',
          details:
            'Nuestros portales B2B manejan jerarquías de cuenta, listas de precios custom, contratos, bulk ordering, quote-to-cash e integraciones PunchOut con Ariba, Coupa y otros sistemas de procurement.',
          outcomes: [
            'Modelo de jerarquía de cuentas y permisos por rol',
            'Motor de catálogo y pricing por contrato',
            'Workflow quote-to-cash con aprobaciones y crédito',
            'Integración PunchOut con principales plataformas',
            'Self-service de historial, reorden e invoicing',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Retos del sector',
      title: 'Superando los cuellos de botella en retail',
      description:
        'Eliminamos la fricción técnica entre tu marca, tus compradores y tu store of record para que la facturación digital escale predeciblemente.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Alta tasa de carrito abandonado',
          solution:
            'Diseñamos checkouts sin fricción y accesibles, integramos credenciales y wallets y añadimos retargeting personalizado que recupera carritos sin sentirse intrusivo.',
        },
        {
          challenge: 'Tiempos de carga lentos',
          solution:
            'Migramos storefronts a arquitecturas headless en redes edge, con trabajo de performance basado en presupuestos para preservar cargas sub-segundo al crecer catálogo y tráfico.',
        },
        {
          challenge: 'Mala discoverability de productos',
          solution:
            'Integramos search y merchandising AI, ajustamos relevancia con tus datos y mostramos patrones de descubrimiento que convierten exploración en add to cart.',
        },
        {
          challenge: 'Discrepancias de inventario',
          solution:
            'Middleware robusto sincroniza inventario entre POS físico, almacenes y digital, con jobs de reconciliación que evitan oversells durante el fin de semana.',
        },
        {
          challenge: 'Customer journeys desconectados',
          solution:
            'Desplegamos CDPs y programas de fidelidad que cosen identidades y comportamiento entre web, app y tienda para que servicio, marketing y merchandising operen con la misma vista.',
        },
        {
          challenge: 'Picos de tráfico y caídas',
          solution:
            'Diseñamos infraestructura cloud auto-escalable con caching multi-capa y rituales de carga, así flash sales, drops y Black Friday son evento de planificación, no war room.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Casos de uso que atendemos en Retail',
      description:
        'Trabajamos con marcas DTC, mayoristas B2B y grandes marketplaces para entregar experiencias de comercio que mueven el negocio.',
      items: [
        { title: 'Migración a storefront headless', description: 'Convertimos storefronts monolíticos en arquitecturas headless rápidas con Next.js o Nuxt y servicios componibles.' },
        { title: 'Apps de comercio móvil', description: 'Apps nativas iOS y Android con AR, biometría y checkout one-tap diseñadas para retención.' },
        { title: 'Marketplaces multi-vendor', description: 'Marketplaces con commission routing, dashboards de vendor y controles de calidad de catálogo.' },
        { title: 'Servicios de cajas por suscripción', description: 'Recurring billing, cajas customizables y fulfillment para retail por suscripción con tooling churn-aware.' },
        { title: 'Kioscos digitales en tienda', description: 'Kioscos táctiles para endless aisle, venta asistida y self-checkout en físico.' },
        { title: 'Comercio por voz', description: 'Compras asistidas por voz con Alexa y Google Assistant para reorden y compras rápidas.' },
        { title: 'Planificación de inventario predictiva', description: 'Forecasting AI que combina estacionalidad, promos y señales externas para optimizar compras.' },
        { title: 'Atención al cliente automatizada', description: 'Chatbots AI que gestionan tracking, returns y FAQs 24/7 y escalan limpiamente cuando hace falta.' },
      ],
    },
    impact: {
      badge: 'Impacto en el negocio',
      title: 'Crecimiento medible en e-commerce',
      description:
        'Nuestras arquitecturas de comercio están diseñadas para una sola cosa: impulsar la facturación atribuible a las inversiones en tecnología que tu equipo hizo.',
      metrics: [
        { label: 'Aumento de conversión', description: 'Boost medio en finalización de checkout con UX sin fricción y migraciones headless.' },
        { label: 'Velocidad de página', description: 'Renderizado ultra rápido del storefront que reduce bounce y mejora SEO.' },
        { label: 'Mayor LTV', description: 'Aumento del valor de vida del cliente impulsado por personalización AI y fidelidad gamificada.' },
        { label: 'Precisión de inventario', description: 'Sincronización en tiempo real entre canales que elimina virtualmente oversells y faltantes.' },
      ],
    },
  },

  supplyChain: {
    hero: {
      badge: 'Supply chain y logística',
      title: 'Software logístico inteligente',
      highlight: 'Supply chain',
      description:
        'Ayudamos a cargadores, transportistas, 3PLs y fabricantes a digitalizar operaciones de extremo a extremo, desde patio y almacén hasta flota y last-mile, con software que aumenta visibilidad y reduce costes.',
      cta: 'Optimiza tu cadena de suministro',
      statLabels: ['Plataformas logísticas', 'Envíos rastreados', 'Eficiencia media'],
    },
    features: {
      badge: 'Capacidades principales',
      title: 'Soluciones logísticas integrales',
      description:
        'Ingeniería para operadores de flota, almacenes, freight forwarders y 3PL, con entregables que cambian métricas operativas en meses.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Sistemas de gestión de flotas',
          description:
            'Plataformas de telematics que monitorean salud del vehículo, rastrean rutas en tiempo real y entregan insights de combustible y conducción.',
          details:
            'Integramos GPS, OBD-II y dashcam con apps de driver y consolas de dispatcher. Operaciones gana visibilidad de flota, ruta, fuel y comportamiento, con alertas afinadas a excepciones reales.',
          outcomes: [
            'Pipeline de telematics con buffering en el edge',
            'Dashboards live de mapa y ruta para dispatch',
            'Reporting de fuel e idle con benchmarks',
            'Driver scoring con métricas de seguridad y eficiencia',
            'Alertas de mantenimiento conectadas al taller',
          ],
        },
        {
          title: 'Automatización de almacenes (WMS)',
          description:
            'WMS inteligente para inventario, picking automatizado y optimización de almacenamiento, diseñado para DCs de alto volumen.',
          details:
            'Implementamos barcode y RFID, integración robótica y slotting. Recepción, putaway, picking, packing y shipping operan como un flujo coordinado con manejo de excepciones y trackeo de mano de obra en tiempo real.',
          outcomes: [
            'Flujos inbound y outbound configurados a tu DC',
            'Estrategia de slotting con re-evaluación periódica',
            'Workflows de scanning móvil para pick, pack y ship',
            'Dashboards de productividad y mano de obra',
            'Excepciones para daños, returns y faltantes',
          ],
        },
        {
          title: 'Plataformas de visibilidad en tiempo real',
          description:
            'Trazabilidad end-to-end entre carriers, sensores y ERPs para que cada stakeholder comparta una vista predictiva del envío.',
          details:
            'Agregamos datos de carriers, IoT y ERPs en una control tower con ETAs predictivos, detección de excepciones y notificaciones automáticas, así un retraso no aparece primero en un email del cliente.',
          outcomes: [
            'Framework multi-carrier con failover',
            'Modelo predictivo de ETA ajustado a tus rutas',
            'Notificaciones por email, SMS y webhook',
            'Cockpit de excepciones para ops con workflow',
            'Experiencia de tracking al cliente con branding',
          ],
        },
        {
          title: 'Motores de optimización de rutas',
          description:
            'Routing AI que calcula la ruta más eficiente considerando tráfico, clima, capacidad, ventanas y restricciones de servicio.',
          details:
            'Combinamos machine learning, mapas dinámicos y solvers para multi-stop, multi-vehículo y flotas mixtas, subiendo entregas por ruta sin saltar las horas de conductor o compromisos al cliente.',
          outcomes: [
            'Modelo de routing documentado con restricciones',
            'Integración con app de driver y secuencia de paradas',
            'Dashboard de paradas por ruta y on-time delivery',
            'Re-optimización ante disrupciones live',
            'Backtesting para nuevas heurísticas o proveedores',
          ],
        },
        {
          title: 'Apps de last-mile',
          description:
            'Experiencias móviles para drivers y clientes que convierten la última milla en una interacción transparente y de alta confianza.',
          details:
            'Entregamos apps de driver con turn-by-turn, prueba de entrega, firmas y captura de excepciones, junto a portales de tracking que reducen llamadas WISMO y suben CSAT.',
          outcomes: [
            'App nativa de driver con comportamiento offline-first',
            'Prueba de entrega con foto, firma y notas',
            'Portal de tracking con ETA live y chat',
            'Captura de excepciones para entregas fallidas',
            'Dashboard operativo de performance de delivery',
          ],
        },
        {
          title: 'Forecasting de inventario',
          description:
            'Analítica predictiva que mantiene stock en el nodo correcto al nivel correcto para evitar quiebres sin enterrar capital.',
          details:
            'Mezclamos ventas históricas, promos, estacionalidad y señales externas en forecasts que alimentan reabastecimiento y políticas de safety stock, con explicabilidad para que los planners confíen y ajusten.',
          outcomes: [
            'Modelo de forecast evaluado contra tu histórico',
            'Recomendaciones de reabastecimiento integradas con ERP',
            'Safety stock y puntos de reorden por SKU y nodo',
            'Workbench para planners con escenarios',
            'Reporting de precisión con tuning continuo',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Retos del sector',
      title: 'Resolviendo complejidades de la cadena de suministro',
      description:
        'Diseñamos soluciones que desenredan los nudos operativos y acercan datos, decisiones y ejecución en campo.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Falta de visibilidad en tiempo real',
          solution:
            'Integramos sensores IoT y APIs de carriers en una control tower centralizada para eliminar puntos ciegos y dar tracking real entre redes globales.',
        },
        {
          challenge: 'Routing ineficiente y altos costes de fuel',
          solution:
            'Desplegamos optimización AI que se adapta a tráfico, clima y capacidad, recortando fuel, kilometraje y horas de conductor sin sacrificar SLAs.',
        },
        {
          challenge: 'Cuellos de botella y errores en almacenes',
          solution:
            'Plataformas WMS inteligentes con RFID, barcode y pick-to-light o voice picking aceleran throughput y eliminan virtualmente errores en pico.',
        },
        {
          challenge: 'Sistemas legacy fragmentados',
          solution:
            'Diseñamos middleware y API gateways que conectan ERPs, TMS y plataformas 3PL para que los datos fluyan limpios entre equipos.',
        },
        {
          challenge: 'Daño en cadena de frío',
          solution:
            'Monitoreo IoT continuo de temperatura con alertas evita pérdidas y protege cumplimiento en alimentos y farma.',
        },
        {
          challenge: 'Fricción en la última milla',
          solution:
            'Apps de driver con prueba de entrega y navegación, junto a tracking branded para clientes, ofrecen entregas transparentes y exitosas.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Casos de uso que atendemos en Logística',
      description:
        'Resolvemos retos logísticos concretos con tecnología moderna data-driven que respeta la realidad de almacenes, drivers y clientes.',
      items: [
        { title: 'Monitoreo cadena de frío', description: 'Sensores IoT y registros tamper evident que protegen perecederos y farmacéuticos de extremo a extremo.' },
        { title: 'Portales freight forwarding', description: 'Portales seguros para cotizaciones, bookings y aduanas con acceso por rol para partners.' },
        { title: 'Sistemas yard management', description: 'Soluciones digitales para trackear remolques, optimizar agenda de docks y mejorar throughput.' },
        { title: 'Logística inversa', description: 'Automatización de returns: RMAs, etiquetas, refurbishment y análisis de coste.' },
        { title: 'Portales 3PL', description: 'Dashboards multi-tenant que permiten a 3PLs ofrecer visibilidad de inventario y envíos a sus clientes.' },
        { title: 'Integración vehículos autónomos', description: 'APIs y control towers para vehículos autónomos, drones y robótica en pilotos y rollouts.' },
        { title: 'Portales de colaboración con proveedores', description: 'Plataformas que aceleran comunicación, POs e invoicing entre fabricantes y proveedores.' },
        { title: 'Reabastecimiento por demanda', description: 'Sistemas que disparan POs en base a POS en tiempo real y forecasts en lugar de mínimos estáticos.' },
      ],
    },
    impact: {
      badge: 'Impacto en el negocio',
      title: 'Impacto logístico medible',
      description:
        'Nuestra tecnología ataca el bottom line eliminando desperdicio, suavizando excepciones y dando confianza a operaciones para comprometer mejores SLAs.',
      metrics: [
        { label: 'Reducción de fuel', description: 'Disminución media del gasto de fuel por flota mediante optimización AI y telematics.' },
        { label: 'Precisión de fulfillment', description: 'Reducción de errores con barcode, RFID y WMS automatizado.' },
        { label: 'Dispatch más rápido', description: 'Mejora en eficiencia de yard y dock, con menos esperas y cuellos.' },
        { label: 'Visibilidad supply chain', description: 'Transparencia total desde sourcing hasta last-mile vía dashboards centralizados.' },
      ],
    },
  },

  hiTech: {
    hero: {
      badge: 'Hi-Tech y digital natives',
      title: 'Ingeniería para innovadores',
      highlight: 'Digital Natives',
      description:
        'Damos a startups, scale-ups y empresas digital native la capacidad de ingeniería senior que necesitan para enviar producto más rápido, escalar de forma segura y convertir la ingeniería en ventaja sostenible.',
      cta: 'Acelera tu roadmap',
      statLabels: ['Startups apoyadas', 'Usuarios activos', 'Tiempo medio MVP'],
    },
    features: {
      badge: 'Capacidades principales',
      title: 'Ingeniería digital completa',
      description:
        'Ingeniería senior para empresas tech de rápido movimiento, desde MVPs hasta plataformas multi-región.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Desarrollo de plataformas SaaS',
          description:
            'Ingeniería end-to-end para SaaS multi-tenant, desde aislamiento de datos y billing hasta tooling y onboarding.',
          details:
            'Diseñamos patrones de aislamiento, integramos Stripe u otros billing, entregamos tooling de back-office y construimos onboarding que activa usuarios y reduce time to value.',
          outcomes: [
            'Patrón de aislamiento documentado y revisado',
            'Subscription billing integrado con reporting',
            'Tooling admin para ops y soporte',
            'Embudo de onboarding con analítica de activación',
            'Baseline SLO con error budgets y on-call',
          ],
        },
        {
          title: 'Arquitectura cloud-native',
          description:
            'Sistemas cloud-native diseñados para elasticidad, resiliencia y costes predecibles.',
          details:
            'Usamos microservicios, serverless y Kubernetes donde realmente aportan, con prácticas FinOps que mantienen el gasto cloud explicable y alineado a las curvas de uso.',
          outcomes: [
            'Arquitectura de referencia alineada al perfil de crecimiento',
            'Políticas de autoscaling ajustadas al tráfico',
            'Resiliencia multi-AZ con modos de fallo documentados',
            'Dashboards FinOps por producto o equipo',
            'Runbooks para incidentes comunes y recovery',
          ],
        },
        {
          title: 'Desarrollo rápido de MVP',
          description:
            'Sprints enfocados que llevan un producto de concepto a MVP en semanas, con base sólida para escalar tras el lanzamiento.',
          details:
            'Combinamos product thinking con starter kits para entregar MVPs que prueban mercado, satisfacen inversores y evitan el rebuild post-launch típico.',
          outcomes: [
            'Documento de scope con métricas de éxito',
            'Producto live en producción dentro del plazo acordado',
            'Librería de componentes para acelerar iteraciones',
            'Analítica y feedback conectados desde día uno',
            'Roadmap para escalar y crecer el equipo',
          ],
        },
        {
          title: 'API economy e integraciones',
          description:
            'APIs REST y GraphQL seguras y developer-friendly que extienden el producto a ecosistemas y partners.',
          details:
            'Diseñamos APIs con versioning, rate limiting y OAuth 2.0, entregamos developer portals con sample apps y SDKs en los lenguajes que tus clientes usan.',
          outcomes: [
            'Guía de estilo de API y política de versioning',
            'Developer portal con docs, sandbox y quickstarts',
            'SDKs en lenguajes principales',
            'Baseline de rate limiting, auth y audit',
            'Analítica de adopción para producto y partnerships',
          ],
        },
        {
          title: 'Data engineering y AI pipelines',
          description:
            'La base de datos y ML que tu producto necesita para evolucionar de feature flags a inteligencia defendible.',
          details:
            'Construimos event tracking, ingest, warehouses y lakehouses, y luego añadimos feature stores, deployment de modelos y monitoreo para tratar AI como ciudadano de primera.',
          outcomes: [
            'Taxonomía de eventos y baseline de tracking',
            'Warehouse o lakehouse alineado al roadmap',
            'Patrón de feature store y model serving',
            'Monitoreo de calidad y sesgo en modelos live',
            'Modelo de coste para storage, compute y ML',
          ],
        },
        {
          title: 'DevOps y CI/CD',
          description:
            'Pipeline de entrega que convierte commits en deployments seguros varias veces al día, con métricas para probarlo.',
          details:
            'Implementamos CI/CD, IaC, testing automatizado y entrega progresiva que reducen lead time, bajan tasa de fallos y permiten moverse rápido sin temer las tardes de viernes.',
          outcomes: [
            'Plantillas CI/CD con quality y security gates',
            'Librería IaC para servicios core',
            'Estrategia de testing unit, integration y e2e',
            'Entrega progresiva con feature flags',
            'Dashboard DORA para liderazgo de ingeniería',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Retos del sector',
      title: 'Desbloqueando startups tech',
      description:
        'Eliminamos la fricción técnica que frena a empresas digital native para que la ingeniería siga habilitando crecimiento.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Time to market lento',
          solution:
            'Equipos ágiles senior y starter kits comprimen el plazo del MVP para que valides concepto, ganes clientes y consigas funding más rápido.',
        },
        {
          challenge: 'Inestabilidad de plataforma a escala',
          solution:
            'Migramos monolitos frágiles a servicios cloud-native resilientes que auto-escalan ante crecimiento viral, con modos de fallo documentados.',
        },
        {
          challenge: 'Altos costes de infraestructura cloud',
          solution:
            'Optimizamos queries, ajustamos tamaño y aplicamos serverless o contenedores donde aportan, reduciendo el burn mensual AWS, Azure o GCP.',
        },
        {
          challenge: 'Deuda técnica acumulada',
          solution:
            'Pods dedicados refactorizan código legacy, escriben tests faltantes y montan CI/CD para pagar deuda sin frenar producto.',
        },
        {
          challenge: 'Escasez de talento ingeniero',
          solution:
            'Aumentamos tu equipo con full-stack seniors que se integran a los rituales y entregan desde la semana uno.',
        },
        {
          challenge: 'Multi-tenancy compleja',
          solution:
            'Arquitectamos aislamiento seguro, RBAC y provisioning dinámico para que tu B2B SaaS escale del primer logo enterprise al cien.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Casos de uso que atendemos en Hi-Tech',
      description:
        'Trabajamos con founders, CTOs y líderes de ingeniería para construir productos escalables y disruptivos sin el burnout habitual.',
      items: [
        { title: 'Modernización de plataforma', description: 'Refactor de monolitos tempranos a microservicios robustos cuando la startup escala.' },
        { title: 'Portales B2B SaaS', description: 'Apps SaaS enterprise con RBAC, jerarquías custom y tooling admin que IT confía.' },
        { title: 'Apps móviles para consumidor', description: 'Apps cross-platform de alto rendimiento con React Native o Flutter para alcanzar usuarios rápido.' },
        { title: 'Productos AI-enhanced', description: 'Integración de generative AI, visión o NLP en productos para crear diferenciadores defendibles.' },
        { title: 'Marketplaces', description: 'Marketplaces multi-side con routing, escrow y trust en los que compradores y vendedores confían.' },
        { title: 'Tooling para developers', description: 'SDKs, CLIs y portales de docs para productos técnicos dirigidos a engineers.' },
        { title: 'Optimización de coste cloud', description: 'Auditoría y rearquitectura de despliegues cloud para reducir gasto mensual con ahorros medibles.' },
        { title: 'Rescate de startups', description: 'Estabilización, refactor y escalado de codebases heredadas o de fases de crecimiento rápido.' },
      ],
    },
    impact: {
      badge: 'Impacto en el negocio',
      title: 'Velocidad y escala',
      description:
        'No solo escribimos código: aceleramos crecimiento y mejoramos unit economics para que la ingeniería sea una de las razones más fuertes para apostar por ti.',
      metrics: [
        { label: 'Entrega más rápida de MVP', description: 'Aceleración para llevar producto core al mercado vs hiring tradicional.' },
        { label: 'Ahorro cloud', description: 'Reducción media en gasto mensual tras auditorías de arquitectura y FinOps.' },
        { label: 'Despliegues sin downtime', description: 'CI/CD totalmente automatizado y testing riguroso con entrega progresiva.' },
        { label: 'Despliegues por mes', description: 'Iteración rápida y entrega continua basada en feedback real del cliente.' },
      ],
    },
  },
}
