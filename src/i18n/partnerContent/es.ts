import type { PartnerContentByVariant, PartnerLandingCopy } from './types'

export const esPartnerContent: PartnerContentByVariant = {
  microsoft: {
    metadata: {
      title:
        'Socio Microsoft | Azure, .NET, Power Platform y Microsoft 365 | Cogtix Solutions',
      description:
        'Cogtix es un Microsoft Solutions Partner que entrega migraciones a Azure, modernización de .NET, automatización con Power Platform, colaboración en Microsoft 365 y personalizaciones de Dynamics 365 en sectores regulados.',
    },
    hero: {
      eyebrow: 'Alianza con Microsoft',
      title: 'Diseñado con Microsoft, entregado para la empresa',
      highlight: 'Microsoft',
      description:
        'Como Microsoft Solutions Partner, ayudamos a las organizaciones a modernizarse en Azure, escalar Power Platform de forma segura y desplegar experiencias de Copilot gobernadas que mueven métricas reales de negocio, no solo hojas de ruta.',
      tier: 'Microsoft Solutions Partner',
      tierSubtitle:
        'Designaciones en Azure, Data & AI y Business Applications',
      cta: 'Habla con un experto de la alianza',
      exploreCapabilities: 'Explorar capacidades',
      activePartnerBadge: 'Socio Activo',
      highlights: [
        'Microsoft Solutions Partner en Azure, Data & AI y Business Applications',
        'Migraciones lideradas por Cloud Adoption Framework (CAF) con revisiones Azure Well-Architected',
        'Centro de Excelencia (CoE) de Power Platform para un citizen development gobernado',
        'Estrategia co-sell con Microsoft y oferta transaccional en Marketplace',
      ],
      statLabels: ['Proyectos Microsoft', 'Certificaciones MS', 'Experiencia Microsoft'],
    },
    credentials: {
      badge: 'Credenciales de la alianza',
      title:
        'Credenciales, competencias y un músculo de entrega construido sobre Microsoft',
      description:
        'Una práctica multidisciplinar de arquitectos, ingenieros, especialistas de datos y consultores diseñada en torno a Microsoft Cloud y renovada cada trimestre frente a nuevas certificaciones.',
      certificationsTitle:
        'Certificaciones activas en nuestros equipos de entrega',
      certificationsDescription:
        'Una instantánea de las credenciales basadas en rol que mantienen actualmente nuestros ingenieros, arquitectos y consultores.',
      competencies: [
        {
          title: 'Infraestructura Azure',
          description:
            'Landing zones, redes hub-and-spoke, identidad híbrida y guardarraíles FinOps diseñados según el Azure Well-Architected Framework.',
        },
        {
          title: 'Modern Work y M365',
          description:
            'Microsoft 365, SharePoint Online, desarrollo de apps en Teams, Viva y portales de intranet modernos que elevan la experiencia y la adopción.',
        },
        {
          title: 'Datos e IA en Azure',
          description:
            'Azure Synapse, Fabric, Databricks, OpenAI Service y Cognitive Services: datos y copilotos diseñados para desbloquear decisiones.',
        },
        {
          title: 'Business Applications',
          description:
            'Personalizaciones de Dynamics 365 Sales, Customer Service y Finance con controles PCF, plugins, Power Pages e integraciones con Dataverse.',
        },
        {
          title: 'Power Platform',
          description:
            'Power Apps canvas y dirigidas por modelo, flujos de Power Automate, dashboards Power BI y AI Builder dentro de un kit CoE gobernado.',
        },
        {
          title: 'Seguridad y cumplimiento',
          description:
            'Despliegues de Defender XDR, Sentinel, Purview, Intune y Entra ID que aplican zero trust, acceso condicional y clasificación de datos.',
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
      badge: 'Lo que entregamos',
      title: 'Una práctica de entrega completa sobre Microsoft Cloud',
      description:
        'Seis motores de ingeniería que ejecutamos repetidamente para clientes en BFSI, salud, manufactura y tecnología.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Migración y modernización en Azure',
          description:
            'Un camino predecible para salir de centros de datos envejecidos y proveedores legacy, con cada oleada medida contra un baseline claro de coste, resiliencia y seguridad.',
          details:
            'Empezamos con una evaluación de portafolio en Azure Migrate y dividimos el estado en 6 a 8 oleadas de migración para que el negocio nunca sufra un evento big-bang. Cada oleada recibe una landing zone en Bicep, un objetivo de SLO, un patrón de DR y una política de etiquetado FinOps antes de que se mueva una sola carga. Nuestro squad combina un arquitecto empresarial con ingenieros de entrega, así las decisiones de diseño se toman una vez y se reutilizan en todo.',
          outcomes: [
            'Landing zone Azure alineada con Cloud Adoption Framework',
            'Oleadas de migración revisadas contra los pilares Well-Architected',
            'Repositorios de infraestructura Bicep o Terraform entregados',
            'Baseline FinOps con etiquetado, presupuestos y reporte mensual',
            'Runbook de DR de producción probado en un simulacro real',
            'Sesiones de transferencia de conocimiento para tus ingenieros de plataforma',
          ],
        },
        {
          title: 'Modernización de aplicaciones .NET',
          description:
            'Un plan de modernización viable para las apps .NET Framework que todavía sostienen el negocio, sin reescrituras big-bang y sin congelar la hoja de ruta de producto.',
          details:
            'Usamos el patrón strangler-fig para desprender funcionalidad de monolitos ASP.NET por contexto delimitado, mientras la app de producción sigue entregando nuevas características al negocio. Los nuevos servicios corren sobre .NET 8 con contenedores en AKS o Container Apps, un API gateway al frente y OpenTelemetry hacia Application Insights. El estado final es un solo runtime, un solo pipeline CI/CD y una sola postura de seguridad.',
          outcomes: [
            'Código .NET Framework mapeado en contextos delimitados',
            'Hoja de ruta strangler-fig con hitos trimestrales',
            'Nuevos servicios sobre .NET 8 en AKS o Container Apps',
            'Trazas OpenTelemetry fluyendo a Application Insights',
            'Pipelines CI/CD configurados en GitHub Actions o Azure DevOps',
            'Defender for Cloud y Key Vault integrados en cada carga',
          ],
        },
        {
          title: 'Power Platform y Copilot Studio',
          description:
            'Citizen development sin caos. Una práctica gobernada de Power Platform con agentes Copilot Studio anclados en tus datos reales.',
          details:
            'Levantamos un Centro de Excelencia de Power Platform con el CoE Starter Kit oficial y añadimos lo que los clientes realmente necesitan: estrategia de entornos, una política DLP consensuada con el negocio, un modelo de datos en Dataverse propiedad de TI y un pipeline ALM sobre Power Platform Pipelines. Los agentes Copilot Studio se anclan en SharePoint, Dataverse y Azure OpenAI para que las respuestas sean precisas y auditables.',
          outcomes: [
            'CoE Starter Kit desplegado con estrategia de entornos y DLP',
            'Modelo de dominio Dataverse propiedad de tu equipo de TI',
            'Pipeline ALM sobre Power Platform Pipelines',
            'Playbook de onboarding y formación para makers',
            'Dos agentes Copilot Studio en producción anclados a datos empresariales',
            'Dashboards de capacidad y dimensionamiento de licencias',
          ],
        },
        {
          title: 'Microsoft 365 y SharePoint',
          description:
            'Una experiencia moderna de empleado sobre Microsoft 365 con una intranet real, apps de Teams que se usan y automatizaciones de Graph que eliminan tareas manuales.',
          details:
            'Diseñamos y construimos soluciones SharePoint Framework, apps con Teams Toolkit, add-ins de Outlook personalizados y dashboards Viva Connections, y los conectamos a tus sistemas a través de Microsoft Graph y Logic Apps. Cada proyecto incluye un plan de gobierno de contenidos, una revisión de seguridad del tenant frente a Microsoft Secure Score y un playbook de adopción para que el despliegue cale en los empleados.',
          outcomes: [
            'Intranet en SharePoint Online con tarjetas Viva Connections',
            'De dos a cuatro apps Teams Toolkit integradas en el flujo diario',
            'Automatizaciones Microsoft Graph que sustituyen entregas manuales',
            'Revisión de seguridad del tenant con plan de mejora de Secure Score',
            'Políticas de gobierno y ciclo de vida de contenidos documentadas',
            'Kit de gestión del cambio y adopción para RR. HH. y Comunicación',
          ],
        },
        {
          title: 'Plataforma de datos Azure y Fabric',
          description:
            'Un único estado analítico de confianza sobre Microsoft Fabric, con modelos semánticos en Power BI, linaje gobernado y frescura medida en minutos, no en días.',
          details:
            'Construimos lakehouses medallion sobre OneLake, ejecutamos pipelines en Synapse o Fabric Data Factory y modelamos transformaciones en dbt o Dataform. Cada dataset de Power BI pasa por una revisión de modelo semántico con row-level security, grupos de cálculo parametrizables y una política de datasets certificados documentada. Microsoft Purview lo enlaza todo con linaje, clasificación y scorecards de calidad de datos.',
          outcomes: [
            'Estructura lakehouse Bronze a Gold sobre OneLake',
            'Pipelines de ingesta en Synapse o Fabric Data Factory',
            'Proyecto dbt con tests documentados y verificaciones CI',
            'Modelos semánticos Power BI certificados con row-level security',
            'Linaje y clasificación respaldados por Purview',
            'Scorecards de calidad de datos revisados mensualmente',
          ],
        },
        {
          title: 'Soluciones Azure AI y OpenAI',
          description:
            'Asistentes Azure OpenAI de grado producción que se mantienen anclados en tus datos, se evalúan antes de cada release y operan dentro de guardarraíles empresariales.',
          details:
            'Diseñamos la arquitectura de recuperación con Azure AI Search, anclamos los prompts a documentos almacenados en SharePoint, OneLake o Cosmos DB y evaluamos respuestas con Prompt Flow sobre datasets golden que crecen con el tiempo. La red pasa por endpoints privados, los filtros de seguridad de contenido se afinan con tu equipo de Trust & Safety y Application Insights ofrece dashboards de tokens, latencia y grounding desde el día uno.',
          outcomes: [
            'Arquitectura RAG de referencia en Azure OpenAI y AI Search',
            'Harness de evaluación Prompt Flow con datasets golden',
            'Endpoints privados, identidad gestionada y filtros de contenido',
            'Dashboards Application Insights de tokens y latencia',
            'Checklist de IA responsable firmado con tu equipo legal',
            'Playbook de despliegue a producción con adopción por fases',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Por qué nos eligen',
      title: 'Problemas difíciles que resolvemos sobre el stack Microsoft',
      description:
        'Los patrones recurrentes que desenredamos dentro del ecosistema Microsoft y cómo abordamos cada uno.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Migraciones a Azure estancadas o parciales',
          solution:
            'Reactivamos los viajes a la nube con una landing zone alineada con CAF, oleadas de replatform y refactor y un baseline FinOps que controla el run-rate desde el día uno.',
        },
        {
          challenge: 'Estado .NET Framework envejecido',
          solution:
            'Migración strangler-fig a .NET 8, contenerización en AKS y CI/CD en Azure DevOps o GitHub sin congelar tu hoja de ruta de funcionalidades.',
        },
        {
          challenge: 'Power Platform sin gobernanza',
          solution:
            'Levantamos un CoE de Power Platform con estrategia de entornos, políticas DLP, ALM, monitorización de capacidad y una comunidad de makers que escala con seguridad.',
        },
        {
          challenge: 'Iniciativas de IA atrapadas en PoC',
          solution:
            'Productivizamos asistentes Azure OpenAI con RAG, puertas de evaluación, observabilidad y guardarraíles de IA responsable para que los PoCs escalen a nivel empresa.',
        },
        {
          challenge: 'Brechas de identidad, datos y cumplimiento',
          solution:
            'Despliegues zero-trust con Entra ID acceso condicional, clasificación Purview, Defender XDR y runbooks Sentinel para cumplir SOC 2, HIPAA y GDPR.',
        },
        {
          challenge: 'Analítica y reporte fragmentados',
          solution:
            'Una plataforma de datos unificada Fabric y Synapse con modelos semánticos Power BI y gobernanza Purview: una fuente fiable para cada pregunta del negocio.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Implantaciones reales en el ecosistema Microsoft',
      description:
        'Implementaciones representativas que nuestra práctica Microsoft ha entregado para sectores regulados y equipos digital-native.',
      items: [
        {
          title: 'Core bancario a Azure',
          description:
            'Migración y replatform de cargas mid-office de un banco Tier-2 a Azure con DNS privado, ExpressRoute y Defender for Cloud.',
        },
        {
          title: 'Dynamics 365 CE para seguros',
          description:
            'Flujos a medida de siniestros y suscripción sobre Dynamics 365 con controles PCF, plugins personalizados y portales Power Pages.',
        },
        {
          title: 'Copilot para manufactura',
          description:
            'Entregamos un copiloto Azure OpenAI de planta anclado en SOPs de SharePoint y telemetría IoT, reduciendo escaladas de primer contacto.',
        },
        {
          title: 'Renovación de intranet Microsoft 365',
          description:
            'Modernizamos una intranet de 12 000 empleados en SharePoint Online con Viva Connections, integración con Teams y automatizaciones Graph.',
        },
        {
          title: 'CoE de Power Platform',
          description:
            'Levantamos un CoE gobernado de Power Platform con estrategia de entornos, ALM vía Power Platform Pipelines y políticas DLP.',
        },
        {
          title: 'Lakehouse Fabric para retail',
          description:
            'Diseñamos un lakehouse Microsoft Fabric con arquitectura medallion, OneLake y modelos semánticos Power BI para insights diarios.',
        },
        {
          title: 'HL7 en salud sobre Azure',
          description:
            'Integramos flujos HL7 y FHIR en Azure Health Data Services con clasificación Purview y seguridad lista para HIPAA.',
        },
        {
          title: 'Plataforma SaaS .NET',
          description:
            'Reconstruimos un SaaS ASP.NET MVC legacy en una plataforma .NET multi-tenant sobre AKS con OpenTelemetry y CI/CD sin downtime.',
        },
      ],
    },
    impact: {
      badge: 'Impacto de la alianza',
      title: 'Los resultados que nuestro trabajo Microsoft impulsa de forma consistente',
      description:
        'Una instantánea de las mejoras operativas y financieras de las que nos hacemos cargo en cada engagement Microsoft.',
      metrics: [
        {
          label: 'Ahorro de run-rate',
          description:
            'Reducción media en el gasto mensual de Azure tras nuestras revisiones FinOps y Well-Architected sobre estados migrados.',
        },
        {
          label: 'Disponibilidad de carga',
          description:
            'SLA objetivo para nuestras landing zones Azure de producción con patrones activo-pasivo multi-región y runbooks de DR probados.',
        },
        {
          label: 'PoC a producción',
          description:
            'Plazo típico desde una prueba de concepto Azure OpenAI hasta un despliegue de copiloto gobernado, evaluado y listo para producción.',
        },
        {
          label: 'Adopción de makers',
          description:
            'Incremento de makers activos de Power Platform en 90 días tras desplegar nuestro Centro de Excelencia gobernado.',
        },
      ],
    },
  },
  aws: {
    metadata: {
      title:
        'Socio AWS | Arquitectura Cloud, Migraciones y DevOps en AWS | Cogtix Solutions',
      description:
        'Cogtix es miembro de AWS Partner Network construyendo cargas Well-Architected sobre Amazon Web Services, incluyendo EKS, Lambda, Aurora y SageMaker, con FinOps, seguridad y prácticas SRE integradas.',
    },
    hero: {
      eyebrow: 'Alianza con AWS',
      title: 'Construido en AWS, diseñado para resultados que se acumulan',
      highlight: 'AWS',
      description:
        'Como miembro de AWS Partner Network, entregamos cargas Well-Architected sobre Amazon Web Services: desde landing zones y plataformas EKS hasta copilotos con Bedrock, con FinOps y seguridad incrustadas en nuestra forma de entregar.',
      tier: 'AWS Partner Network (APN)',
      tierSubtitle:
        'Rutas Solutions y Services con entrega alineada al Well-Architected',
      cta: 'Habla con un experto de la alianza',
      exploreCapabilities: 'Explorar capacidades',
      activePartnerBadge: 'Socio Activo',
      highlights: [
        'Miembro APN con rutas Solutions, Services y Software',
        'Revisiones Well-Architected en los seis pilares en cada engagement',
        'Descubrimiento y ejecución alineados con AWS Migration Acceleration Program (MAP)',
        'Ofertas transaccionales en AWS Marketplace y motion co-sell con nuestros equipos de cuentas',
      ],
      statLabels: ['Migraciones AWS', 'Certificaciones AWS', 'Ahorro Medio'],
    },
    credentials: {
      badge: 'Credenciales de la alianza',
      title:
        'Una práctica de entrega que vive dentro del AWS Well-Architected Framework',
      description:
        'Un equipo liderado por arquitectura con cobertura profunda de certificaciones, playbooks MAP y una cultura de entrega FinOps-first diseñada en torno a AWS.',
      certificationsTitle:
        'Certificaciones activas en nuestros equipos de entrega',
      certificationsDescription:
        'Una instantánea de las credenciales basadas en rol que mantienen actualmente nuestros ingenieros, arquitectos y consultores.',
      competencies: [
        {
          title: 'Fundamentos Cloud',
          description:
            'Landing zones multi-cuenta con AWS Control Tower, Organizations, SCPs e Identity Center: seguras, auditables y listas para escalar desde el día uno.',
        },
        {
          title: 'Contenedores y Kubernetes',
          description:
            'Clusters EKS en producción con autoescalado Karpenter, service mesh (App Mesh o Istio), GitOps con Argo CD y políticas como código.',
        },
        {
          title: 'Serverless',
          description:
            'Sistemas event-driven en Lambda, EventBridge, SQS y Step Functions diseñados para idempotencia, latencias por debajo de 100 ms y coste controlado.',
        },
        {
          title: 'Datos y analítica',
          description:
            'Lakehouses sobre Amazon S3 con Glue, Athena, Redshift Serverless, tablas Iceberg y Quicksight: analítica diseñada para costes conscientes.',
        },
        {
          title: 'IA / ML en AWS',
          description:
            'Amazon Bedrock, pipelines SageMaker, recuperación con Kendra y modelos foundation afinados con endpoints VPC privados y observabilidad.',
        },
        {
          title: 'Seguridad y cumplimiento',
          description:
            'Patrones con AWS Security Hub, GuardDuty, Config, IAM Access Analyzer y KMS alineados con controles SOC 2, HIPAA, PCI-DSS e ISO 27001.',
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
      badge: 'Lo que entregamos',
      title: 'Una práctica de ingeniería completa sobre Amazon Web Services',
      description:
        'Seis motores de ingeniería que ejecutamos repetidamente para clientes modernizando en AWS: desde migraciones hasta GenAI en producción.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Migración AWS Cloud (MAP)',
          description:
            'Una migración a AWS liderada por seniors que sigue el playbook del Migration Acceleration Program, con cada oleada revisada contra los seis pilares Well-Architected.',
          details:
            'Ejecutamos una evaluación de portafolio en AWS Migration Hub, clasificamos cada carga en las 6 R adecuadas (rehost, replatform, refactor, repurchase, retire, retain) y luego diseñamos una landing zone Control Tower con red, identidad, logging y guardarraíles SCP listos desde el día uno. Las oleadas se dimensionan en sprints de dos semanas y nuestros arquitectos firman la revisión Well-Architected de cada oleada antes del corte a producción.',
          outcomes: [
            'Evaluación de portafolio AWS Migration Hub con proyecciones de coste',
            'Landing zone AWS Control Tower con OUs y SCPs',
            'Patrones de referencia de red, identidad, logging y KMS',
            'Revisiones Well-Architected y backlog de remediación por oleada',
            'Pipelines CI/CD de IaC sobre Terraform o CDK',
            'Plan de corte a producción con rollback y simulacro DR',
          ],
        },
        {
          title: 'EKS y contenedores',
          description:
            'Una plataforma Amazon EKS de producción a la que tus equipos pueden desplegar con seguridad desde el día uno, con autoescalado, GitOps e identidad cableadas por nosotros.',
          details:
            'Construimos clusters EKS privados con IAM en IRSA, políticas OPA Gatekeeper, AWS Load Balancer Controller para ingress, Argo CD para entrega GitOps y Karpenter para autoescalado rápido y consciente del coste. Añadimos KEDA para escalado por eventos, External Secrets Operator para Secrets Manager y un runbook de actualización probado para que las versiones dejen de ser un incendio trimestral.',
          outcomes: [
            'Cluster EKS privado con roles IAM en IRSA',
            'Autoescalado Karpenter con node pools bien dimensionados',
            'Entrega Argo CD GitOps desde tus repos de aplicación',
            'Guardarraíles OPA Gatekeeper aplicando política corporativa',
            'External Secrets Operator conectado a AWS Secrets Manager',
            'Runbook de actualización de EKS, add-ons y versiones de Karpenter',
          ],
        },
        {
          title: 'Modernización serverless',
          description:
            'Un backend event-driven que escala elásticamente con el negocio, con idempotencia, trazabilidad y telemetría de coste integradas desde el primer commit.',
          details:
            'Diseñamos funciones Lambda idempotentes y de corta duración, enrutamos trabajo a través de buses EventBridge con contratos en schema registry, orquestamos flujos largos en Step Functions y guardamos datos en diseños single-table de DynamoDB o Aurora Serverless v2. Las trazas X-Ray van a CloudWatch y exponemos un dashboard de coste por feature para que ingeniería y finanzas vean los mismos números.',
          outcomes: [
            'Bus EventBridge con contratos en schema registry',
            'Funciones Lambda diseñadas para idempotencia y reintentos',
            'Orquestaciones Step Functions para flujos largos',
            'Modelo single-table en DynamoDB o Aurora Serverless v2',
            'Trazas X-Ray y dashboards CloudWatch por workflow',
            'Telemetría de coste por feature para ingeniería y finanzas',
          ],
        },
        {
          title: 'Data Lakehouse en AWS',
          description:
            'Un lakehouse de tabla abierta sobre Amazon S3 que da a analistas, data scientists y equipos de producto la misma fuente gobernada, sin lock-in de proveedor.',
          details:
            'Diseñamos lakehouses medallion sobre S3 con Apache Iceberg, construimos la ingesta en AWS Glue o Kinesis Firehose y ejecutamos transformaciones con dbt sobre Athena o EMR. Glue Data Quality aplica reglas a nivel fila y tabla, Lake Formation otorga permisos por columna y la capa de servicio se entrega en Redshift Serverless para BI y Quicksight para self-service.',
          outcomes: [
            'Tablas Iceberg sobre Amazon S3 con arquitectura medallion',
            'Ingesta Glue o Kinesis para batch y streaming',
            'Proyecto dbt con tests documentados y checks CI',
            'Reglas Glue Data Quality conectadas a alertas',
            'Políticas Lake Formation de acceso por columna',
            'Capas de servicio Redshift Serverless y Quicksight',
          ],
        },
        {
          title: 'GenAI sobre Amazon Bedrock',
          description:
            'Asistentes con recuperación aumentada sobre Amazon Bedrock que se anclan en tu contexto empresarial, se miden antes de cada release y nunca salen de tu VPC.',
          details:
            'Elegimos el modelo Bedrock correcto (Claude, Llama o Titan), construimos la recuperación sobre Amazon Kendra o OpenSearch Serverless y anclamos las respuestas en documentos que ya posees en S3, SharePoint o Confluence. Bedrock Guardrails gestiona la seguridad de contenido, la evaluación corre sobre un dataset golden que crece con el tiempo y la observabilidad va a CloudWatch y OpenTelemetry.',
          outcomes: [
            'Arquitectura RAG de referencia sobre Amazon Bedrock y Kendra',
            'Bedrock Guardrails configurado para contenido y PII',
            'Endpoints PrivateLink que mantienen el tráfico dentro de la VPC',
            'Harness de evaluación con dataset golden versionado',
            'Dashboards CloudWatch de tokens, latencia y grounding',
            'Plan de rollout a producción con adopción por fases',
          ],
        },
        {
          title: 'FinOps e ingeniería de costes',
          description:
            'Un programa continuo de coste en AWS, no una auditoría puntual. Gobernanza de etiquetado, estrategia de commitments y una narrativa ejecutiva mensual.',
          details:
            'Establecemos el baseline de gasto con Cost and Usage Reports, construimos dashboards en Cost Explorer y QuickSight y convertimos recomendaciones de Compute Optimizer en pull requests, no en slides. La cobertura de Savings Plans se dimensiona contra la carga prevista, S3 lifecycle e Intelligent-Tiering entran en los buckets principales y una reunión FinOps mensual produce una narrativa ejecutiva sobre qué cambió y por qué.',
          outcomes: [
            'CUR ingerido en una capa de analítica de coste',
            'Política de etiquetado aplicada vía SCPs y checks CI',
            'Recomendaciones Compute Optimizer convertidas en PRs',
            'Plan de cobertura Savings Plans y Reserved Instances',
            'S3 lifecycle e Intelligent-Tiering en los principales buckets',
            'Revisión FinOps mensual con narrativa ejecutiva de coste',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Por qué nos eligen',
      title: 'Problemas difíciles que resolvemos en AWS',
      description:
        'Los patrones recurrentes que desenredamos sobre Amazon Web Services y cómo abordamos cada uno.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Sprawl de cuentas AWS sin estructura',
          solution:
            'Consolidamos cuentas en una landing zone Control Tower con Organizations, SCPs, logging centralizado e Identity Center: limpio, auditable y escalable.',
        },
        {
          challenge: 'Sorpresas de rendimiento y coste en producción',
          solution:
            'Observabilidad CloudWatch con OpenTelemetry, right-sizing guiado por Compute Optimizer y una cadencia FinOps mensual dejan las sorpresas atrás.',
        },
        {
          challenge: 'Modernizaciones de monolito estancadas',
          solution:
            'Re-arquitecturamos a microservicios en EKS, desacoplamos vía SQS y EventBridge y contenerizamos con Karpenter para escalar rápido sin coste desbocado.',
        },
        {
          challenge: 'Data lakes y warehouses desconectados',
          solution:
            'Un lakehouse Iceberg sobre S3 unifica la analítica: Athena, Redshift y Quicksight comparten la misma fuente gobernada con puertas Glue Data Quality.',
        },
        {
          challenge: 'Postura de seguridad por debajo de las expectativas del auditor',
          solution:
            'Endurecemos estados AWS con GuardDuty, Security Hub, reglas Config, IAM Access Analyzer y patrones KMS alineados con SOC 2, HIPAA y PCI-DSS.',
        },
        {
          challenge: 'Proyectos piloto de IA que no llegan a producción',
          solution:
            'Graduamos PoCs de Bedrock y SageMaker a producción con harness de evaluación, red PrivateLink, guardarraíles y releases controlados por CI/CD.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Implantaciones reales en el ecosistema AWS',
      description:
        'Implementaciones representativas que nuestra práctica AWS ha entregado para SaaS, sectores regulados y equipos digital-native.',
      items: [
        {
          title: 'Fintech: salida de VMware a AWS',
          description:
            'Replatform de una fintech de pagos de VMware a AWS con Control Tower, EKS y Aurora Postgres en 14 semanas sin downtime para el cliente.',
        },
        {
          title: 'SaaS multi-tenant en EKS',
          description:
            'Diseñamos un modelo de aislamiento SaaS multi-tenant en EKS con autoescalado Karpenter, Argo CD y atribución de coste por tenant.',
        },
        {
          title: 'Plataforma serverless de logística',
          description:
            'Plataforma logística event-driven sobre Lambda + EventBridge + DynamoDB sirviendo 4 M eventos diarios con latencia inferior a 100 ms.',
        },
        {
          title: 'Copilot de soporte sobre Bedrock',
          description:
            'Copiloto de soporte al cliente sobre Amazon Bedrock con recuperación Kendra y trazabilidad completa para una aseguradora.',
        },
        {
          title: 'Lakehouse Iceberg para retail',
          description:
            'Un lakehouse Iceberg sobre S3 con dbt + Athena y Redshift Serverless que redujo el gasto analítico en un 55 % frente al warehouse legacy.',
        },
        {
          title: 'Estado healthcare listo para HIPAA',
          description:
            'Endurecimos un entorno AWS a controles HIPAA con Macie, KMS, GuardDuty y un plan BCDR probado entre dos regiones.',
        },
        {
          title: 'Ingesta de datos IoT',
          description:
            'Pipeline IoT Core + Kinesis Firehose ingiriendo 1B+ eventos de telemetría al mes con dashboards de baja latencia en Timestream.',
        },
        {
          title: 'Programa FinOps AWS',
          description:
            'Programa FinOps continuo con cobertura de Savings Plans, gobernanza de etiquetado y narrativa ejecutiva mensual de coste.',
        },
      ],
    },
    impact: {
      badge: 'Impacto de la alianza',
      title: 'Los resultados que nuestro trabajo AWS impulsa de forma consistente',
      description:
        'Una instantánea de las mejoras operativas y financieras de las que nos hacemos cargo en cada engagement AWS.',
      metrics: [
        {
          label: 'Recorte factura AWS',
          description:
            'Reducción típica de run-rate en 90 días cuando nuestro programa FinOps se aplica sobre un estado AWS migrado.',
        },
        {
          label: 'Migración mediana',
          description:
            'Duración mediana desde el descubrimiento MAP hasta la primera oleada en producción para migraciones mid-market sobre Control Tower.',
        },
        {
          label: 'SLA objetivo',
          description:
            'Objetivo de disponibilidad por defecto para nuestras arquitecturas multi-AZ de producción, validado con ejercicios de chaos y DR.',
        },
        {
          label: 'Latencia API',
          description:
            'Latencia p99 típica que entregamos en APIs públicas serverless y EKS tras nuestra pasada de ingeniería de rendimiento.',
        },
      ],
    },
  },
  'google-cloud': {
    metadata: {
      title:
        'Socio Google Cloud | BigQuery, Vertex AI, GKE y Anthos | Cogtix Solutions',
      description:
        'Cogtix es Google Cloud Partner entregando plataformas de datos BigQuery, productización en Vertex AI, plataformas de contenedores GKE y modernización Anthos para organizaciones data-led.',
    },
    hero: {
      eyebrow: 'Alianza con Google Cloud',
      title: 'Innovación dirigida por datos sobre Google Cloud',
      highlight: 'Google Cloud',
      description:
        'Como Google Cloud Partner, ayudamos a las organizaciones data-led a construir su estado analítico sobre BigQuery, productivizar IA con Vertex AI y modernizar contenedores en GKE, todo bajo una plataforma gobernada y FinOps-aware.',
      tier: 'Google Cloud Partner',
      tierSubtitle: 'Áreas de foco Data & Analytics y Cloud Infrastructure',
      cta: 'Habla con un experto de la alianza',
      exploreCapabilities: 'Explorar capacidades',
      activePartnerBadge: 'Socio Activo',
      highlights: [
        'Google Cloud Partner con foco en Data & Analytics y Cloud Infrastructure',
        'Plataformas de datos BigQuery-first con dbt, Dataform y modelos semánticos en Looker',
        'Flujos Vertex AI listos para producción con monitorización y gobierno de modelos',
        'Modernización GKE y Anthos con redes zero-trust y política como código',
      ],
      statLabels: ['Proyectos GCP', 'Certificaciones GCP', 'SLO de Pipeline'],
    },
    credentials: {
      badge: 'Credenciales de la alianza',
      title: 'Una práctica Google Cloud anclada en datos y productización',
      description:
        'Un equipo de ingeniería y analítica construido en torno a BigQuery, Vertex AI, GKE y el stack de seguridad de Google Cloud, con certificaciones basadas en rol en cada disciplina.',
      certificationsTitle:
        'Certificaciones activas en nuestros equipos de entrega',
      certificationsDescription:
        'Una instantánea de las credenciales basadas en rol que mantienen actualmente nuestros ingenieros, arquitectos y consultores.',
      competencies: [
        {
          title: 'Analítica de datos en BigQuery',
          description:
            'Warehouses BigQuery con particionado, clustering y BI Engine junto a transformaciones en dbt o Dataform y capas semánticas en Looker.',
        },
        {
          title: 'Vertex AI y GenAI',
          description:
            'Pipelines Vertex AI end-to-end, despliegues Model Garden, copilotos anclados en Gemini y productización con feature store.',
        },
        {
          title: 'GKE y Anthos',
          description:
            'Clusters GKE endurecidos con Autopilot, Workload Identity, Config Sync, Anthos Service Mesh y Binary Authorization para cargas compliant.',
        },
        {
          title: 'Serverless y Cloud Run',
          description:
            'Servicios event-driven en Cloud Run, Cloud Functions, Workflows y Eventarc con fan-out de Pub/Sub y patrones idempotentes.',
        },
        {
          title: 'Datos en streaming',
          description:
            'Pipelines en tiempo real sobre Pub/Sub y Dataflow con Apache Beam, semántica exactly-once y latencia sub-segundo hacia BigQuery y Bigtable.',
        },
        {
          title: 'Seguridad y gobierno',
          description:
            'VPC Service Controls, Security Command Center, IAM Recommender, CMEK y DLP diseñados para estados listos para SOC 2, HIPAA y GDPR.',
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
      badge: 'Lo que entregamos',
      title: 'Una práctica de entrega completa sobre Google Cloud',
      description:
        'Seis motores de ingeniería que ejecutamos repetidamente para clientes modernizando en Google Cloud: desde plataformas BigQuery hasta Vertex AI en producción.',
      outcomesTitle: 'Lo que entregamos',
      items: [
        {
          title: 'Plataforma de datos BigQuery',
          description:
            'Un único estado analítico BigQuery en el que cada equipo confía. Tablas curadas, modelos semánticos certificados en Looker y una historia real de coste junto a cada consulta.',
          details:
            'Diseñamos tablas BigQuery particionadas y clusterizadas, activamos BI Engine para las consultas críticas y usamos BigLake o tablas externas Iceberg para mantener el almacenamiento abierto. Las transformaciones se modelan en dbt con puertas CI y tests unitarios, la lógica semántica vive en Looker (o Looker Modeler) con row-level security y una estrategia de reservas de slots mantiene el rendimiento predecible para todos.',
          outcomes: [
            'Tablas BigQuery particionadas y clusterizadas para consultas top',
            'Aceleración BI Engine activada en dashboards críticos',
            'Tablas externas BigLake o Iceberg para almacenamiento abierto',
            'Proyecto dbt con puertas CI, tests y linaje',
            'Modelo semántico Looker con políticas de row-level security',
            'Estrategia de reservas y autoescalado de slots con guardarraíles',
          ],
        },
        {
          title: 'Productización en Vertex AI',
          description:
            'Una práctica Vertex AI que convierte notebooks en cargas de producción gobernadas, con feature stores, monitorización y Gemini anclado en tus datos.',
          details:
            'Diseñamos pipelines Vertex AI de entrenamiento, evaluación y despliegue, construimos una capa de serving respaldada por Feature Store para predicciones online de baja latencia y activamos Model Monitoring para alertas de drift y skew. Para casos GenAI, anclamos Gemini con Vertex AI Search y Document AI, evaluamos con datasets golden y entregamos un proceso de release que tu equipo de plataforma puede ejecutar.',
          outcomes: [
            'Pipelines Vertex AI para entrenamiento, evaluación y despliegue',
            'Feature Store con rutas de serving online y offline',
            'Model Monitoring para drift, skew y atribución de features',
            'Recuperación Vertex AI Search anclada en documentos empresariales',
            'Harness de evaluación con datasets golden versionados',
            'Runbook de release que tu equipo MLOps puede ejecutar de forma autónoma',
          ],
        },
        {
          title: 'Plataformas GKE y Anthos',
          description:
            'Una plataforma GKE Autopilot lista para compliance a la que tus ingenieros pueden desplegar con seguridad. Identidad, política e integridad de la cadena de suministro cableadas por nosotros.',
          details:
            'Construimos clusters GKE Autopilot privados con Workload Identity Federation, Binary Authorization para firma de imágenes y Config Sync con Policy Controller para aplicar política GitOps. El tráfico este-oeste lo gobierna Anthos Service Mesh, el borde Cloud Armor y Cloud Load Balancing, y los secretos fluyen desde Secret Manager a través de External Secrets Operator.',
          outcomes: [
            'Cluster GKE Autopilot privado con Workload Identity',
            'Binary Authorization aplicando imágenes firmadas en despliegue',
            'Config Sync y Policy Controller para política GitOps',
            'Anthos Service Mesh para tráfico este-oeste y mTLS',
            'Cloud Armor y balanceo en el borde',
            'External Secrets Operator conectado a Secret Manager',
          ],
        },
        {
          title: 'Streaming y datos en tiempo real',
          description:
            'Pipelines sub-segundo sobre Pub/Sub y Dataflow que sustituyen el batch nocturno por datos siempre frescos, con semántica exactly-once y manejo de eventos tardíos resuelto.',
          details:
            'Diseñamos pipelines Apache Beam sobre Dataflow con procesamiento exactly-once, ventanas de eventos tardíos y evolución de esquema gestionada con contratos de Schema Registry. Los datos calientes aterrizan en Bigtable para serving y en BigQuery para analítica, las dead-letter queues capturan mensajes corruptos y los dashboards en Cloud Monitoring siguen throughput, latencia y frescura de extremo a extremo.',
          outcomes: [
            'Topics Pub/Sub con contratos de schema registry versionados',
            'Pipelines Apache Beam sobre Dataflow con exactly-once',
            'Ventanas de eventos tardíos y dead-letter queues',
            'Capa caliente Bigtable más sink analítico BigQuery',
            'Dashboards Cloud Monitoring de frescura y lag',
            'Herramientas de replay para back-fills y migraciones de esquema',
          ],
        },
        {
          title: 'Cloud Run y serverless',
          description:
            'Servicios totalmente gestionados sobre Cloud Run que escalan a cero, despliegan desde tu repo y siguen observables vía Cloud Trace, Cloud Profiler y Cloud Logging.',
          details:
            'Construimos servicios Cloud Run afinados para concurrencia, con API Gateway o Load Balancing al frente, orquestados por Workflows para procesos multi-step y enrutados por Eventarc para patrones event-driven. El estado persistente vive en Cloud SQL o Spanner con PITR y réplicas, y cada servicio entrega Cloud Trace, Cloud Profiler y CI/CD vía Cloud Deploy.',
          outcomes: [
            'Servicios Cloud Run con configuraciones afinadas para concurrencia',
            'Orquestaciones Workflows para procesos multi-step',
            'Enrutamiento Eventarc para patrones event-driven',
            'Capa de datos Cloud SQL o Spanner con PITR y réplicas',
            'Cloud Trace y Cloud Profiler activos por defecto',
            'CI/CD vía Cloud Deploy con rollout progresivo',
          ],
        },
        {
          title: 'FinOps e ingeniería de costes en GCP',
          description:
            'Un programa continuo de coste en Google Cloud construido sobre economía BigQuery, estrategia de descuentos de uso comprometido y una política de etiquetado en la que finanzas e ingeniería confían.',
          details:
            'Establecemos el baseline con Billing Export hacia BigQuery, dimensionamos reservas de slots BigQuery y autoescalado contra la carga prevista, aplicamos Committed-Use Discounts donde la cobertura es segura y ejecutamos lifecycle GCS y transiciones de clase de almacenamiento en los buckets principales. Una revisión FinOps mensual produce una narrativa ejecutiva de coste y un backlog de fixes que ingeniería puede entregar el siguiente sprint.',
          outcomes: [
            'Billing Export ingerido en una capa de coste consultable',
            'Reservas de slots BigQuery dimensionadas a la carga prevista',
            'Plan de cobertura CUD revisado trimestralmente',
            'Lifecycle GCS y transiciones de clase en buckets principales',
            'Política de labels y etiquetado aplicada vía org policies',
            'Revisión FinOps mensual con narrativa ejecutiva de coste',
          ],
        },
      ],
    },
    challenges: {
      badge: 'Por qué nos eligen',
      title: 'Problemas difíciles que resolvemos en Google Cloud',
      description:
        'Patrones recurrentes que desenredamos en Google Cloud y cómo abordamos cada uno.',
      challengeLabel: 'El reto',
      solutionLabel: 'Nuestra solución',
      items: [
        {
          challenge: 'Analítica sin confianza entre equipos',
          solution:
            'BigQuery, Dataform y Looker establecen una única capa semántica con tests al estilo dbt y linaje para que cada dashboard responda desde la misma fuente.',
        },
        {
          challenge: 'Experimentos ML que nunca llegan a producción',
          solution:
            'Vertex AI Pipelines, Feature Store y Model Monitoring gradúan los notebooks a producción gobernada y observable con puertas de evaluación.',
        },
        {
          challenge: 'Pipelines de datos lentos y solo batch',
          solution:
            'Pub/Sub con Dataflow y Bigtable sustituye el batch nocturno por streaming exactly-once y frescura a nivel minuto en el warehouse.',
        },
        {
          challenge: 'Plataformas de contenedores con drift de política',
          solution:
            'Anthos Config Sync y Policy Controller aplican política GitOps en flotas GKE; Binary Authorization detiene imágenes sin firmar en despliegue.',
        },
        {
          challenge: 'Exposición de datos sensibles y brechas de cumplimiento',
          solution:
            'VPC Service Controls, DLP, CMEK y Security Command Center crean un perímetro defendible alineado con controles SOC 2, HIPAA y GDPR.',
        },
        {
          challenge: 'Costes BigQuery y GCP impredecibles',
          solution:
            'Reservas BigQuery con autoescalado de slots, CUDs, lifecycle GCS y una cadencia FinOps basada en etiquetado suavizan el gasto mes a mes.',
        },
      ],
    },
    useCases: {
      badge: 'Casos de uso',
      title: 'Implantaciones reales en el ecosistema Google Cloud',
      description:
        'Implementaciones representativas que nuestra práctica Google Cloud ha entregado para equipos data-led, regulados y digital-native.',
      items: [
        {
          title: 'Lakehouse BigQuery para retail',
          description:
            'Unificamos los datos de retail en un lakehouse BigQuery con BigLake, transformaciones dbt y dashboards Looker para más de 2 000 tiendas.',
        },
        {
          title: 'Rollout Vertex AI en salud',
          description:
            'Productivizamos modelos clínicos predictivos en Vertex AI con VPC Service Controls alineados a HIPAA y flujos de datos cifrados con CMEK.',
        },
        {
          title: 'Plataforma SaaS GKE Autopilot',
          description:
            'Diseñamos una plataforma SaaS multi-tenant sobre GKE Autopilot con Workload Identity, Anthos Service Mesh y Argo CD GitOps.',
        },
        {
          title: 'Personalización en streaming',
          description:
            'Pipeline Pub/Sub a Dataflow a Bigtable sirviendo recomendaciones de personalización por debajo de 100 ms en web y móvil.',
        },
        {
          title: 'Copilot anclado en Gemini',
          description:
            'Copiloto de soporte impulsado por Gemini anclado en Cloud Storage y BigQuery con harness de evaluación.',
        },
        {
          title: 'Transcodificación de media en Cloud Run',
          description:
            'Pipeline de transcodificación de media sobre Cloud Run y Workflows que escaló 10x en pico sin sobre-provisión.',
        },
        {
          title: 'Habilitación Looker en FinTech',
          description:
            'Modelo semántico LookML para una plataforma FinTech, sustituyendo 40+ workbooks Tableau legacy por dashboards gobernados.',
        },
        {
          title: 'Modernización híbrida Anthos',
          description:
            'Modernizamos un estado de manufactura híbrido con clusters Anthos on-prem y GKE en GCP bajo un único plano de política.',
        },
      ],
    },
    impact: {
      badge: 'Impacto de la alianza',
      title: 'Los resultados que nuestro trabajo en Google Cloud impulsa de forma consistente',
      description:
        'Una instantánea de las mejoras operativas y financieras de las que nos hacemos cargo en cada engagement Google Cloud.',
      metrics: [
        {
          label: 'Rendimiento de consultas',
          description:
            'Aceleración típica de consultas BigQuery tras nuestra pasada de particionado, clustering, vistas materializadas y optimización BI Engine.',
        },
        {
          label: 'Reducción de coste GCP',
          description:
            'Ahorro medio de run-rate en 90 días tras aplicar nuestro programa FinOps: reservas, CUDs, lifecycle y gobernanza de etiquetado.',
        },
        {
          label: 'Frescura de datos',
          description:
            'Latencia típica de extremo a extremo en nuestros pipelines streaming Pub/Sub a Dataflow a BigQuery, sustituyendo jobs nocturnos legacy.',
        },
        {
          label: 'ML PoC a producción',
          description:
            'Tiempo mediano para mover una prueba de concepto Vertex AI a un rollout de producción gobernado, evaluado y monitorizado.',
        },
      ],
    },
  },
}

export const esPartnerLanding: PartnerLandingCopy = {
  metadata: {
    title: 'Alianzas estratégicas en la nube | Microsoft, AWS, Google Cloud | Cogtix Solutions',
    description:
      'Cogtix entrega alianzas cloud credenciadas en Microsoft, AWS y Google Cloud. Explora nuestras prácticas Azure, AWS y GCP con FinOps, seguridad y SRE integrados.',
  },
  hero: {
    eyebrow: 'Alianzas estratégicas',
    title: 'Construyendo sobre las plataformas cloud más confiables del mundo',
    highlight: 'plataformas cloud',
    description:
      'Nuestros ingenieros, arquitectos y consultores están profundamente credenciados en Microsoft, AWS y Google Cloud. Elige tu plataforma y traeremos el playbook, las certificaciones y el músculo de entrega a tu medida.',
  },
  cards: {
    microsoft: {
      name: 'Microsoft',
      tier: 'Microsoft Solutions Partner',
      tagline: 'Azure · Datos e IA · Business Applications',
      description:
        'Moderniza en Azure, escala Power Platform de forma segura y despliega experiencias Copilot gobernadas en .NET, Microsoft 365 y Dynamics 365.',
      highlights: [
        'Migraciones a Azure lideradas por Cloud Adoption Framework',
        'Centro de Excelencia de Power Platform',
        'Asistentes Azure OpenAI en producción',
      ],
      statLabels: ['Proyectos MS', 'Certificaciones', 'Experiencia'],
      cta: 'Explora nuestra práctica Microsoft',
    },
    aws: {
      name: 'AWS',
      tier: 'AWS Partner Network',
      tagline: 'Migraciones · EKS · Serverless · Bedrock',
      description:
        'Construye cargas Well-Architected sobre Amazon Web Services. Levantamos landing zones, plataformas EKS, copilotos Bedrock y modelos de coste FinOps que escalan.',
      highlights: [
        'Oleadas de migración alineadas con MAP',
        'Plataformas GitOps EKS y Argo CD',
        'Copilotos con recuperación aumentada en Bedrock',
      ],
      statLabels: ['Migraciones AWS', 'Certificaciones', 'Ahorro Medio'],
      cta: 'Explora nuestra práctica AWS',
    },
    'google-cloud': {
      name: 'Google Cloud',
      tier: 'Google Cloud Partner',
      tagline: 'BigQuery · Vertex AI · GKE · Anthos',
      description:
        'Innovación dirigida por datos sobre Google Cloud. Construimos lakehouses BigQuery, cargas Vertex AI productivizadas y plataformas de contenedores modernizadas sobre GKE Autopilot.',
      highlights: [
        'Plataformas semánticas BigQuery y Looker',
        'Pipelines Vertex AI en producción',
        'GKE Autopilot con política GitOps',
      ],
      statLabels: ['Proyectos GCP', 'Certificaciones', 'SLO de Pipeline'],
      cta: 'Explora nuestra práctica Google Cloud',
    },
  },
  whyUs: {
    eyebrow: 'Por qué Cogtix',
    title: 'Un equipo multi-cloud respaldado por verdadera profundidad de ingeniería',
    description:
      'No solo acumulamos certificaciones. Operamos las plataformas que recomendamos cada día, en producción, en clientes regulados y digital-native.',
    items: [
      {
        title: 'Arquitectos en cada engagement',
        description:
          'Cada proyecto de socio empareja a un arquitecto principal con un squad de entrega, así las decisiones de diseño son lideradas por seniors y reutilizadas durante todo el engagement.',
      },
      {
        title: 'Entrega alineada a frameworks',
        description:
          'Ejecutamos contra Azure CAF, AWS Well-Architected y Google Cloud Architecture Framework, pilar por pilar, revisión por revisión.',
      },
      {
        title: 'FinOps desde el día uno',
        description:
          'El modelado de coste, la gobernanza de etiquetado y una narrativa ejecutiva mensual de coste forman parte del engagement, no son un añadido.',
      },
      {
        title: 'Seguridad y cumplimiento integrados',
        description:
          'Los controles SOC 2, HIPAA, PCI-DSS y GDPR son arquitecturas de referencia que aplicamos, no documentos boilerplate que entregamos.',
      },
      {
        title: 'Aceleradores reutilizables',
        description:
          'Landing zones, harness de evaluación GenAI, kits CoE de Power Platform y módulos IaC aceleran la entrega sin generar lock-in.',
      },
      {
        title: 'Listos para co-sell',
        description:
          'Equipos de cuenta de socio activos en Microsoft, AWS y Google Cloud, para transaccionar en marketplaces y acelerar el procurement.',
      },
    ],
  },
}
