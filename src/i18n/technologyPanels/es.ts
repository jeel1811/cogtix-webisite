import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const esTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          'Combinamos modelos de frontera con frameworks de orquestación para que prompts, herramientas y recuperación se comporten de forma predecible en producción. Antes de exponer nada a clientes, alineamos presupuestos de latencia, salvaguardas y suites de evaluación con tu perfil de riesgo.',
        outcomes: four(
          'Memo de selección de modelos con tradeoffs de coste, latencia y calidad',
          'Patrones de producción para RAG, tool calling y salidas estructuradas',
          'Regresión y red team integrados en tu proceso de release',
          'Gestión y rotación de claves alineadas con tu estándar IAM',
        ),
      },
      {
        overview:
          'Las librerías clásicas de ML y deep learning cubren scoring tabular, visión por computador y jobs de entrenamiento masivo. Estandarizamos entornos para que los experimentos pasen limpiamente a pipelines programados con linaje trazable.',
        outcomes: four(
          'Plantillas de entrenamiento reutilizables con dependencias fijadas',
          'Pipelines de features compatibles con tu warehouse o lago',
          'Tracking de experimentos y model cards para cada candidato a producción',
          'Perfiles CPU y GPU dimensionados a ventanas de batch y SLAs reales',
        ),
      },
      {
        overview:
          'Las plataformas ML gestionadas en AWS, Azure y Google Cloud ofrecen entrenamiento y serving elásticos sin trabajo repetitivo. Diseñamos landing zones, red y cuotas para que los equipos de datos avancen rápido sin romper gobierno.',
        outcomes: four(
          'Patrones de landing zone para notebooks, entrenamiento y endpoints',
          'Conectividad privada entre almacenes de datos y jobs de entrenamiento',
          'Cuotas, alertas de presupuesto y autoscaling ajustados a curvas de uso',
          'Runbooks de entrega para propietarios de plataforma y ML engineers',
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark y Dask cubren desde exploración ad hoc hasta transformaciones a escala petabyte. Nos centramos en jobs idempotentes, evolución de esquema y backfills reproducibles para que la analítica siga siendo fiable cuando cambian las fuentes.',
        outcomes: four(
          'Guía de particionado y layout de ficheros para tablas pesadas',
          'Contratos de esquema con reglas de evolución documentadas',
          'Herramientas de backfill y replay para datos tardíos',
          'Planes de jobs conscientes del coste con observabilidad en cada etapa',
        ),
      },
      {
        overview:
          'Contenedores, Kubernetes, MLflow y FastAPI convierten modelos en servicios fiables. Incorporamos health checks, señales de autoscaling y caminos de rollback para que los releases sigan siendo aburridos aunque cambien modelos o tráfico.',
        outcomes: four(
          'Imágenes de contenedor con bases endurecidas y escaneo',
          'Manifiestos de Kubernetes o Helm con límites de recursos definidos',
          'Patrones canary o shadow para actualizaciones de modelos',
          'SLOs de latencia, errores y frescura con enrutado de alertas',
        ),
      },
      {
        overview:
          'Notebooks, vector stores y Redis apoyan iteración rápida y recuperación de baja latencia. Mantenemos la paridad dev y prod para que lo que funciona en local no sorprenda tras el despliegue.',
        outcomes: four(
          'Checklist de promoción de notebook a pipeline',
          'Estrategia de tamaño e índice vectorial documentada',
          'Políticas de Redis o caché con eviction y TTL guiados',
          'Kit de onboarding para sandboxes locales y compartidos',
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          'Diseñamos fundaciones multi cuenta en AWS, Azure y Google Cloud con propiedad clara, guardrails y visibilidad de coste. Las landing zones hacen que las nuevas cargas hereden líneas base de seguridad en lugar de reinventarlas.',
        outcomes: four(
          'Topología de cuentas o suscripciones con responsables mapeados',
          'Guardrails base para red, cifrado y logging',
          'Modelo de etiquetado y chargeback acordado con finanzas',
          'Dashboard ejecutivo de coste y riesgo',
        ),
      },
      {
        overview:
          'Kubernetes y plataformas de contenedores soportan tus servicios más críticos. Nos centramos en upgrades, capacidad y operaciones día dos para que los clusters sigan parcheados, observables y listos para despliegues sin tiempo de inactividad.',
        outcomes: four(
          'Baseline de cluster productivo con node pools y límites',
          'Entrega Helm o GitOps con rutas de promoción revisadas',
          'Patrón de ingress, service mesh o API gateway elegido y documentado',
          'Ejercicios de upgrade y rollback capturados en runbooks',
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible y Puppet mantienen la infraestructura repetible y revisable. Los módulos se prueban como código de aplicación para detectar drift pronto y mantener cambios auditables.',
        outcomes: four(
          'Librería IaC modular con ejemplos para stacks habituales',
          'Comprobaciones de política en cada plan según tus reglas de gobierno',
          'Tests automatizados de módulos y paridad de entornos',
          'Backend de estado, bloqueo y modelo de acceso documentado',
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions y CircleCI acortan el camino de commit a producción. Las quality gates, aprobaciones y promoción de artefactos son explícitas para que los releases sigan siendo rápidos y controlados.',
        outcomes: four(
          'Plantillas de pipeline con tests, escaneos y firma',
          'Matriz de promoción de entornos desde dev hasta producción',
          'Inyección de secretos sin credenciales de larga duración en repos',
          'Métricas de release como lead time y tasa de fallo de cambio visibles',
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK y Splunk dan a operaciones una imagen compartida de salud. Los dashboards, SLOs y trazas se atan a recorridos reales de usuario, no solo a métricas de infraestructura.',
        outcomes: four(
          'Dashboards de señales doradas por servicio crítico',
          'Trazas distribuidas en los flujos de usuario principales',
          'Estructura de logs y retención alineadas al cumplimiento',
          'Runbooks de guardia enlazados desde alertas de alto valor',
        ),
      },
      {
        overview:
          'Funciones gestionadas, bases de datos, almacenamiento de objetos y CDN reducen trabajo no diferenciado. Elegimos primitivas que encajan con tu forma de tráfico y límites de cumplimiento, y documentamos failover y backup.',
        outcomes: four(
          'Matriz de selección de servicios con tradeoffs de coste y ops',
          'Objetivos de backup, restore y RPO o RTO por datastore',
          'Estrategia de CDN y caché en edge para activos estáticos y dinámicos',
          'Revisión FinOps con right sizing y orientación de reservas',
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          '.NET moderno ofrece APIs de alto rendimiento, capacidades en tiempo real y clientes multiplataforma sin renunciar a patrones enterprise. Alineamos estructura de solución, pruebas y despliegue con tus prácticas ALM existentes.',
        outcomes: four(
          'Layout de solución de referencia para APIs, workers y front ends',
          'Contratos OpenAPI y tests de integración en CI',
          'Baseline de rendimiento y perfil de carga para rutas calientes',
          'Pipeline de despliegue hacia Azure u objetivos híbridos',
        ),
      },
      {
        overview:
          'Los servicios de compute, integración e identidad de Azure conectan aplicaciones al ecosistema de forma segura. Enfatizamos redes con mínimo privilegio, identidades gestionadas y construcción repetible de entornos.',
        outcomes: four(
          'Diagrama de arquitectura con subnets y private endpoints',
          'Uso de identidades gestionadas en lugar de secretos estáticos cuando aplica',
          'Patrones de autoscale y resiliencia para App Service o Functions',
          'Guardrails de coste con presupuestos y alertas de anomalías',
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse y Data Factory anclan analítica y cargas transaccionales. Diseñamos para recuperación, cifrado y coste de consulta predecible antes de que los datasets crezcan más allá de arreglos fáciles.',
        outcomes: four(
          'Modelo de datos e estrategia de indexación revisados por pares',
          'Evidencia de backup, redundancia geo y prueba de restore',
          'Pipelines de ingesta con monitorización y rutas de cuarentena',
          'Modelo de acceso con seguridad a nivel de fila cuando haga falta',
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI y Dataverse permiten que los departamentos avancen rápido con gobierno. Establecemos guardrails para que los citizen developers innoven con seguridad junto a soluciones pro code.',
        outcomes: four(
          'Estrategia de entornos separando dev, test y producción',
          'Políticas DLP y de conectores alineadas a revisión de seguridad',
          'Librería de componentes reutilizables para patrones comunes',
          'Playbook operativo para soporte y propiedad',
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep y Application Insights cierran el ciclo desde idea hasta producción observable. La telemetría une releases a resultados de negocio y fiabilidad.',
        outcomes: four(
          'Plantillas CI y CD con aprobaciones y manejo de secretos',
          'Infraestructura como código para recursos Azure de los que dependes',
          'Dashboards de salud de build, despliegues y errores en vivo',
          'Estrategia de etiquetado de releases para auditorías y rollbacks',
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph y Dynamics extienden flujos donde la gente ya trabaja. Las integraciones respetan consentimiento, throttling y reglas de ciclo de vida para que las automatizaciones sigan estables.',
        outcomes: four(
          'Diseño de integración con permisos Graph de mínimo privilegio',
          'Manifiestos de apps Teams o SharePoint y guía de despliegue',
          'Activos de gestión del cambio para administradores y usuarios finales',
          'Monitorización de consumo de webhooks y cuotas de API',
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce y Dynamics anclan muchos núcleos empresariales. Tratamos las capacidades del paquete como ciudadanas de primera clase y extendemos solo donde importa la diferenciación, para que los upgrades sigan siendo viables.',
        outcomes: four(
          'Análisis fit gap con configuración antes de código custom',
          'Estrategia de release alineada a cadencia del vendor y ventanas negras',
          'Contratos de integración para sistemas satélite documentados',
          'Biblioteca de tests que cubre rutas financieras u operativas críticas',
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism y motores de workflow eliminan trabajo repetitivo a escala. Los bots tienen propiedad, monitorización y manejo de excepciones como cualquier otro servicio productivo.',
        outcomes: four(
          'Mapa de proceso con candidatos a automatización priorizados por ROI',
          'Patrón de bóveda de credenciales y segregación de funciones',
          'Monitorización de salud de bots, colas y excepciones de negocio',
          'Backlog de mejora continua alimentado por métricas de operaciones',
        ),
      },
      {
        overview:
          'Java, .NET, Node y Python impulsan servicios custom y capas de integración. Estandarizamos estilo de API, manejo de errores y observabilidad para que stacks mixtos se comporten como una plataforma.',
        outcomes: four(
          'Plantilla de servicio con auth, logging y métricas integrados',
          'Catálogo de API con versionado y política de deprecación',
          'Harness de tests de rendimiento para picos de transacción',
          'Escaneo de seguridad en CI para dependencias y contenedores',
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres y Cassandra encajan distintos perfiles de consistencia y escala. Documentamos retención, particionado y recuperación para que los datos sigan disponibles bajo carga.',
        outcomes: four(
          'Diseño de esquema con estrategia de crecimiento y archivo',
          'Calendario de verificación de backups con evidencia almacenada',
          'Plan de tuning para las diez consultas más costosas',
          'Revisiones de acceso para roles privilegiados de base de datos',
        ),
      },
      {
        overview:
          'Integraciones estilo MuleSoft, Kafka, Spring Cloud y Lambda mueven eventos y cargas de forma fiable. La idempotencia, el orden y el manejo de dead letter son explícitos desde el primer día.',
        outcomes: four(
          'Catálogo de topics de eventos con dueños y esquemas',
          'Procedimientos de replay para mensajes tóxicos o mal despliegues',
          'SLOs de latencia y throughput por ruta de integración',
          'Playbook multiequipo para triage de incidentes',
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps y ServiceNow mantienen alineadas entrega y operaciones. La trazabilidad de requisito a release apoya auditorías y análisis de causa raíz más rápidos.',
        outcomes: four(
          'Configuración de flujos de trabajo mapeada a tu SDLC',
          'Dashboards de predictibilidad de entrega y calidad',
          'Enlaces CMDB o de activos para ítems de configuración críticos',
          'Plantilla de revisión post incidente conectada al seguimiento de acciones',
        ),
      },
    ],
  },
  data: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift y Synapse potencian analítica gobernada a escala. Diseñamos warehouses alrededor de patrones de consulta, acceso basado en roles y control de gasto para que los insights no se adelanten al presupuesto.',
        outcomes: four(
          'Modelo lógico con marts certificados y propiedad',
          'Modelo de acceso por rol y fila revisado con seguridad',
          'Gestión de carga o tamaño de warehouse ajustado a picos',
          'Monitorización de coste con alertas ante crecimiento inesperado',
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming y Kinesis convierten eventos en decisiones casi en tiempo real. Ingeniamos backpressure, replay y compatibilidad de esquema para que los streams sigan siendo fiables.',
        outcomes: four(
          'Diseño de topics con decisiones de retención y compactación',
          'Jobs de stream con recuperación de estado y checkpoints verificados',
          'Lag de consumidores y frescura de datos visibles en dashboards',
          'Camino de DR probado ante pérdida de broker o región',
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend e Informatica orquestan cargas batch e incrementales con tests. Las dependencias son explícitas para que los fallos salgan pronto y los equipos downstream vean el impacto.',
        outcomes: four(
          'Catálogo de DAGs o jobs con SLAs y propiedad por pipeline',
          'Tests de datos sobre frescura, volumen y relaciones clave',
          'Flujo de promoción de dev a prod con revisión por pares',
          'Linaje desde tablas fuente hasta métricas publicadas',
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg y Hudi sobre almacenamiento de objetos ofrecen formatos abiertos con garantías ACID. Compactación, particionado y patrones de acceso se afinan para que las tablas sigan rápidas al crecer los datos.',
        outcomes: four(
          'Elección de formato de tabla documentada con notas de migración',
          'Estrategia de partición y Z order para scans pesados',
          'Políticas de acceso integradas con tu catálogo',
          'Jobs de housekeeping para ficheros pequeños y snapshots',
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres y MongoDB cubren transformaciones grandes, documentos flexibles y cargas mixtas. Alineamos cómputo con localidad de almacenamiento y comportamiento de spill para que los jobs terminen en ventanas predecibles.',
        outcomes: four(
          'Dimensionado de cluster o pools basado en perfiles de job medidos',
          'Layout de almacenamiento para tiers caliente, tibio y frío',
          'Cifrado y rotación de claves validados por almacén',
          'Plan de capacidad con revisiones trimestrales',
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus y ELK cierran el ciclo de calidad de datos y salud de pipelines. Las alertas se atan al impacto de negocio, no solo al ruido de infraestructura.',
        outcomes: four(
          'Reglas de calidad en datasets críticos con escalado a dueños',
          'Logs y métricas unificados para fallos de pipeline',
          'Checks sintéticos sobre dashboards o APIs publicadas',
          'Retros de incidentes que alimentan reglas y documentación',
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'Lo que entregamos con este stack',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch e InVision mantienen artefactos de diseño estructurados y compartibles. Librerías, nomenclatura y versionado reducen deriva entre diseñadores e ingeniería downstream.',
        outcomes: four(
          'Librería de componentes con notas de uso y ejemplos de qué hacer y qué no',
          'Organización de ficheros que escala entre squads y productos',
          'Convenciones de export y handoff acordadas con ingeniería',
          'Anotaciones de accesibilidad en patrones que requieren cuidado',
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure y Marvel validan flujos antes de que el código se encarezca. Unimos prototipos a planes de prueba y métricas de éxito para que los stakeholders vean evidencia, no solo mockups.',
        outcomes: four(
          'Flujos clicables que cubren casos primarios y borde',
          'Guiones de test de usabilidad enlazados a versiones de prototipo',
          'Notas de motion y micro interacción para implementación',
          'Registro de decisiones con lo que cambió tras el feedback',
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar y Amplitude conectan señales cualitativas con comportamiento cuantitativo. La cadencia de investigación está planificada para que los insights lleguen cuando las decisiones de roadmap siguen abiertas.',
        outcomes: four(
          'Plan de investigación con objetivos, audiencia y plazos',
          'Repositorio de insights buscable sin depender del equipo',
          'Dashboards de embudos, retención y adopción de features',
          'Backlog priorizado de fixes ligado a severidad de evidencia',
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React y Next.js entregan superficies rápidas y accesibles. Estructura semántica, presupuestos de rendimiento y mejora progresiva mantienen experiencias resilientes.',
        outcomes: four(
          'Estructura semántica y orden de encabezados validados',
          'Presupuesto de rendimiento con CI ante regresiones',
          'Comportamiento responsive probado en matriz de dispositivos reales',
          'Metadatos SEO y de compartición revisados en plantillas clave',
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap y Ant Design aceleran la entrega UI cuando los equipos quieren sistemas con opinión. Alineamos tokens, theming y APIs de componentes con tu marca y objetivos de accesibilidad.',
        outcomes: four(
          'Paquete de extensión de tema con tokens de marca aplicados',
          'Catálogo Storybook o equivalente para UI reutilizable',
          'Comprobaciones de teclado y lector de pantalla en componentes compartidos',
          'Notas de migración al actualizar versiones mayores de librerías',
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira y Slack mantienen visibles discovery y entrega. Los rituales y la documentación viven donde los equipos ya trabajan, lo que mejora adopción más que decks de proceso pesados.',
        outcomes: four(
          'Plantillas de espacio para workshops y críticas de diseño',
          'Trazabilidad desde insights de discovery a épicas en Jira',
          'Canales de Slack o Teams con rutas de escalado claras',
          'Gobernanza ligera que los equipos realmente siguen',
        ),
      },
    ],
  },
}
