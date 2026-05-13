import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const nlTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'We combineren state of the art modellen met orchestratieframeworks zodat prompts, tools en retrieval voorspelbaar in productie gedrag vertonen. Voordat iets klanten bereikt, stemmen we latencybudgets, guardrails en evaluatiesuites af op jouw risicoprofiel.',
        outcomes: four(
          'Modelkeuzememo met afwegingen voor kosten, latency en kwaliteit',
          'Productiepatronen voor RAG, tool calling en gestructureerde output',
          'Regressie en red team ingebed in jouw releaseproces',
          'Sleutelbeheer en rotatie in lijn met jouw IAM-standaard',
        ),
      },
      {
        overview:
          'Klassieke ML- en deep learningbibliotheken ondersteunen tabulaire scoring, computer vision en grote trainingjobs. We standaardiseren omgevingen zodat experimenten netjes doorgroeien naar geplande pipelines met traceerbare lineage.',
        outcomes: four(
          'Herbruikbare trainingsjablonen met vastgepinde dependencies',
          'Feature pipelines compatibel met je warehouse of data lake',
          'Experiment tracking en model cards voor elke productiekandidaat',
          'CPU- en GPU-profielen passend bij echte batchvensters en SLA’s',
        ),
      },
      {
        overview:
          'Beheerde ML-platformen op AWS, Azure en Google Cloud geven elastisch trainen en serveren zonder onnodig werk. We ontwerpen landing zones, netwerk en quota zodat data science snel kan zonder governance te breken.',
        outcomes: four(
          'Landing zone patronen voor notebooks, training en endpoints',
          'Private connectiviteit tussen datastores en trainingjobs',
          'Quota, budgetalarmen en autoscaling afgestemd op gebruiksgrafieken',
          'Overdrachtrunbooks voor platform owners en ML engineers',
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark en Dask dekken alles van ad hoc verkenning tot petabyte transformaties. We richten ons op idempotente jobs, schema-evolutie en reproduceerbare backfills zodat analytics betrouwbaar blijft als bronnen veranderen.',
        outcomes: four(
          'Richtlijnen voor partitionering en bestandslayout voor zware tabellen',
          'Schemacontracten met gedocumenteerde evolutieregels',
          'Backfill- en replay-tools voor laat aankomende data',
          'Kostenbewuste jobplannen met observability per stap',
        ),
      },
      {
        overview:
          'Containers, Kubernetes, MLflow en FastAPI maken van modellen betrouwbare services. We bouwen health checks, autoscalingsignalen en rollbackpaden in zodat releases saai blijven, ook bij piekverkeer of modelwissels.',
        outcomes: four(
          'Containerimages met geharde bases en scanning',
          'Kubernetes manifesten of Helm met resource limits',
          'Canary- of shadowpatronen voor modelupdates',
          'SLO’s voor latency, fouten en versheid met alarmering',
        ),
      },
      {
        overview:
          'Notebooks, vector stores en Redis ondersteunen snelle iteratie en lage latency retrieval. We houden dev- en prod-pariteit strak zodat wat lokaal werkt niet verrast na promotie.',
        outcomes: four(
          'Checklist voor promotie van notebook naar pipeline',
          'Gedocumenteerde strategie voor indexgrootte en vector store',
          'Redis- of cachebeleid met eviction en TTL',
          'Onboardingkit voor lokale en gedeelde sandboxes',
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'We ontwerpen multi-account fundamenten op AWS, Azure en Google Cloud met duidelijke ownership, guardrails en kostenzichtbaarheid. Landing zones laten nieuwe workloads security baselines erven in plaats van ze opnieuw uit te vinden.',
        outcomes: four(
          'Account- of abonnementstopologie met verantwoordelijkheden in kaart',
          'Baseline guardrails voor netwerk, encryptie en logging',
          'Tagging- en chargebackmodel afgestemd met finance',
          'Executive dashboard voor kosten en risico',
        ),
      },
      {
        overview:
          'Kubernetes en containerplatformen dragen je meest kritieke services. We focussen op upgrades, capaciteit en day-two operaties zodat clusters gepatcht, observeerbaar en klaar zijn voor zero-downtime deploys.',
        outcomes: four(
          'Productieklare clusterbaseline met node pools en limits',
          'Helm- of GitOps-levering met gereviewde promotiepaden',
          'Gekozen en gedocumenteerd patroon voor ingress, mesh of API gateway',
          'Upgrade- en rollback-oefeningen vastgelegd in runbooks',
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible en Puppet houden infrastructuur herhaalbaar en reviewbaar. Modules worden getest als applicatiecode zodat drift vroeg zichtbaar is en wijzigingen auditbaar blijven.',
        outcomes: four(
          'Modulaire IaC-bibliotheek met voorbeelden voor gangbare stacks',
          'Policy checks op elk plan volgens jouw governanceregels',
          'Geautomatiseerde moduletests en omgevingspariteit',
          'State backend, locking en toegangsmodel gedocumenteerd',
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions en CircleCI verkorten de weg van commit naar productie. Quality gates, goedkeuringen en artefactpromotie zijn expliciet zodat releases snel en gecontroleerd blijven.',
        outcomes: four(
          'Pipelinesjablonen met tests, scans en signing',
          'Omgevingspromotiematrix van dev tot productie',
          'Secrets injectie zonder langdurige credentials in repos',
          'Zichtbare releasemetrieken zoals lead time en change failure rate',
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK en Splunk geven operations een gedeeld beeld van gezondheid. Dashboards, SLO’s en tracing hangen aan echte user journeys, niet alleen infrastructuurmetrieken.',
        outcomes: four(
          'Golden signals dashboards per kritieke service',
          'Gedistribueerde tracing over de belangrijkste user flows',
          'Logstructuur en retentie passend bij compliance',
          'On-call runbooks gekoppeld aan waardevolle alerts',
        ),
      },
      {
        overview:
          'Beheerde functies, databases, objectopslag en CDN verminderen undifferentiated werk. We kiezen primitives die passen bij je trafficvorm en compliancegrenzen en documenteren failover en backupverwachtingen.',
        outcomes: four(
          'Selectiematrix met kosten- en operations tradeoffs',
          'Backup-, restore- en RPO- of RTO-doelen per datastore',
          'CDN- en edge cachingstrategie voor statische en dynamische assets',
          'FinOps review met right sizing en reserveringsadvies',
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'Modern .NET levert krachtige API’s, realtime mogelijkheden en cross-platform clients zonder enterprise patronen op te geven. We lijnen oplossingsstructuur, tests en deployment af op je bestaande ALM-praktijken.',
        outcomes: four(
          'Referentie oplossingslayout voor API’s, workers en frontends',
          'OpenAPI-contracten en integratietests in CI',
          'Performance baseline en loadprofiel voor hot paths',
          'Deployment pipeline naar Azure of hybride doelen',
        ),
      },
      {
        overview:
          'Azure compute-, integratie- en identiteitsdiensten verbinden applicaties veilig met het ecosysteem. We benadrukken least-privilege netwerk, managed identities en herhaalbare omgevingen.',
        outcomes: four(
          'Architectuurdiagram met subnets en private endpoints',
          'Gebruik van managed identities in plaats van statische secrets waar mogelijk',
          'Autoscale- en resilientiepatronen voor App Service of Functions',
          'Kosten guardrails met budgetten en anomalie-alerts',
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse en Data Factory verankeren analytics en transactionele workloads. We ontwerpen voor recovery, encryptie en voorspelbare querykosten voordat datasets moeilijk te fixen worden.',
        outcomes: four(
          'Datamodel en indexstrategie peer reviewed',
          'Bewijs van backup, geo-redundantie en restore-tests',
          'Ingest pipelines met monitoring en quarantainepad',
          'Toegangsmodel met row-level security waar nodig',
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI en Dataverse laten afdelingen snel bewegen met governance. We zetten guardrails zodat citizen developers veilig innoveren naast pro-code oplossingen.',
        outcomes: four(
          'Omgevingsstrategie met scheiding van dev, test en productie',
          'DLP- en connectorbeleid afgestemd op security review',
          'Herbruikbare componentenbibliotheek voor veelvoorkomende patronen',
          'Operationeel playbook voor support en ownership',
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep en Application Insights sluiten de lus van idee naar observeerbare productie. Telemetrie koppelt releases aan business- en betrouwbaarheidsresultaten.',
        outcomes: four(
          'CI- en CD-sjablonen met goedkeuringen en secret handling',
          'Infrastructure as code voor Azure resources waar je op leunt',
          'Dashboards voor buildgezondheid, deployments en live fouten',
          'Release tagging strategie voor audits en rollbacks',
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph en Dynamics breiden workflows uit waar mensen al werken. Integraties respecteren consent, throttling en lifecycle regels zodat automatisering stabiel blijft.',
        outcomes: four(
          'Integratieontwerp met least-privilege Graph permissies',
          'Teams- of SharePoint-app manifesten en deploymentgids',
          'Change management assets voor admins en eindgebruikers',
          'Monitoring op webhook- en API quotumverbruik',
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce en Dynamics verankeren veel enterprise kernen. We behandelen pakketmogelijkheden als first class en breiden alleen uit waar differentiatie telt, zodat upgrades haalbaar blijven.',
        outcomes: four(
          'Fit-gap analyse met configuratie vóór maatwerkcode',
          'Releasestrategie afgestemd op vendorcadans en blackoutvensters',
          'Integratiecontracten voor satellietsystemen gedocumenteerd',
          'Testbibliotheek die kritieke financiële of operationele paden dekt',
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism en workflow engines verwijderen repetitief werk op schaal. Bots hebben ownership, monitoring en exception handling zoals elke andere productieservice.',
        outcomes: four(
          'Proceskaart met automatisering kandidaten gerangschikt op ROI',
          'Credential vault patroon en segregation of duties',
          'Monitoring voor botgezondheid, queues en business exceptions',
          'Continuous improvement backlog gevoed door operations metrics',
        ),
      },
      {
        overview:
          'Java, .NET, Node en Python drijven maatwerkservices en integratielagen aan. We standaardiseren API-stijl, foutafhandeling en observability zodat gemengde stacks zich als één platform gedragen.',
        outcomes: four(
          'Servicesjabloon met auth, logging en metrics ingebouwd',
          'API-catalogus met versioning en deprecatiebeleid',
          'Performance test harness voor piektransactiescenario’s',
          'Security scanning in CI voor dependencies en containers',
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres en Cassandra passen bij verschillende consistentie- en schaalprofielen. We documenteren retentie, partitionering en recovery zodat data onder load beschikbaar blijft.',
        outcomes: four(
          'Schemadesign met groei- en archiveringsstrategie',
          'Backup verificatieschema met opgeslagen bewijs',
          'Tuningplan voor de tien duurste statements',
          'Toegangsreviews voor geprivilegieerde databaserollen',
        ),
      },
      {
        overview:
          'MuleSoft-, Kafka-, Spring Cloud- en Lambda-achtige integraties bewegen events en payloads betrouwbaar. Idempotentie, volgorde en dead letter handling zijn vanaf dag één expliciet.',
        outcomes: four(
          'Event topic catalogus met owners en schema’s',
          'Replay procedures voor giftige berichten of slechte deploys',
          'Latency- en throughput SLO’s per integratiepad',
          'Multi-team playbook voor incident triage',
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps en ServiceNow houden delivery en operations op één lijn. Traceability van requirement tot release ondersteunt audits en snellere root cause analyses.',
        outcomes: four(
          'Workflowconfiguratie gemapt op je SDLC',
          'Dashboards voor delivery voorspelbaarheid en kwaliteit',
          'CMDB- of assetlinks voor kritieke configuration items',
          'Post incident review template gekoppeld aan action tracking',
        ),
      },
    ],
  },
  data: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift en Synapse ondersteunen governed analytics op schaal. We ontwerpen warehouses rond querypatronen, rolgebaseerde toegang en spend controls zodat inzichten het budget niet voorbijstreven.',
        outcomes: four(
          'Logisch model met gecertificeerde marts en ownership',
          'Rol- en rijtoegangsmodel gereviewd met security',
          'Workload management of warehouse sizing afgestemd op pieken',
          'Kostenmonitoring met alerts bij onverwachte groei',
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming en Kinesis zetten events om in bijna realtime beslissingen. We engineeren backpressure, replay en schema compatibiliteit zodat streams betrouwbaar blijven.',
        outcomes: four(
          'Topic ontwerp met retentie- en compaction keuzes',
          'Stream jobs met state recovery en geverifieerde checkpoints',
          'Consumer lag en dataversheid zichtbaar op dashboards',
          'Getest DR pad bij broker- of regioverlies',
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend en Informatica orkestreren batch en incrementele loads met tests. Afhankelijkheden zijn expliciet zodat fouten vroeg zichtbaar zijn en downstream teams impact zien.',
        outcomes: four(
          'DAG- of jobcatalogus met SLA’s en ownership per pipeline',
          'Datatests op versheid, volume en sleutelrelaties',
          'Promotieflow van dev naar prod met peer review',
          'Lineage van brontabellen naar gepubliceerde metrics',
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg en Hudi op objectstorage geven open formaten met ACID garanties. Compaction, partitionering en toegangspatronen zijn getuned zodat tabellen snel blijven als data groeit.',
        outcomes: four(
          'Tabel formaat keuze gedocumenteerd met migratienotities',
          'Partition- en Z-order strategie voor zware scans',
          'Toegangsbeleid geïntegreerd met je catalogus',
          'Housekeeping jobs voor kleine bestanden en snapshots',
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres en MongoDB dekken grote transformaties, flexibele documenten en gemengde workloads. We alignen compute met opslaglocaliteit en spill gedrag zodat jobs binnen voorspelbare vensters eindigen.',
        outcomes: four(
          'Cluster- of pool sizing op basis van gemeten jobprofielen',
          'Opslaglayout voor warme, lauwe en koude tiers',
          'Encryptie en sleutelrotatie per store gevalideerd',
          'Capaciteitsplan met kwartaal review mijlpalen',
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus en ELK sluiten de lus op datakwaliteit en pipeline gezondheid. Alerts hangen aan business impact, niet alleen infrastructuurruis.',
        outcomes: four(
          'Kwaliteitsregels op kritieke datasets met owner escalatie',
          'Uniforme logs en metrics voor pipeline failures',
          'Synthetische checks op gepubliceerde dashboards of API’s',
          'Incident retros die regels en documentatie voeden',
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'Wat wij met deze stack leveren',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch en InVision houden design artefacten gestructureerd en deelbaar. Bibliotheken, naamgeving en versioning verminderen drift tussen designers en engineering.',
        outcomes: four(
          'Componentenbibliotheek met gebruiksnotities en do- en don’t-voorbeelden',
          'Bestandsorganisatie die schaalt over squads en producten',
          'Export- en handoff afspraken met engineering',
          'Toegankelijkheidsannotaties op gevoelige patronen',
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure en Marvel valideren flows voordat code duur wordt. We koppelen prototypes aan testplannen en succescriteria zodat stakeholders bewijs zien, niet alleen mockups.',
        outcomes: four(
          'Klikbare flows voor primaire en randgevallen',
          'Usability test scripts gekoppeld aan prototype versies',
          'Motion- en micro interaction notities voor implementatie',
          'Beslislog wat er na feedback veranderde',
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar en Amplitude verbinden kwalitatieve signalen met kwantitatief gedrag. Research cadence is gepland zodat insights landen terwijl roadmap keuzes nog open zijn.',
        outcomes: four(
          'Researchplan met doelen, doelgroep en tijdlijnen',
          'Doorzoekbare insight repository zonder het team te pingen',
          'Dashboards voor funnels, retentie en feature adoptie',
          'Geprioriteerde fix backlog gekoppeld aan evidenzie ernst',
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React en Next.js leveren snelle, toegankelijke oppervlakken. Semantische structuur, performance budgets en progressive enhancement houden ervaringen veerkrachtig.',
        outcomes: four(
          'Semantische paginastructuur en heading volgorde gevalideerd',
          'Performance budget met CI checks op regressies',
          'Responsive gedrag getest op echte device matrix',
          'SEO- en share metadata gereviewd op sleutelsjablonen',
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap en Ant Design versnellen UI wanneer teams opinionated systemen willen. We lijnen tokens, theming en component API’s af op merk en toegankelijkheidsdoelen.',
        outcomes: four(
          'Theme extensiepakket met merk tokens toegepast',
          'Storybook of equivalente catalogus voor herbruikbare UI',
          'Toetsenbord- en screenreader checks op gedeelde componenten',
          'Migratienotities bij major upgrades van libraries',
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira en Slack houden discovery en delivery zichtbaar. Rituelen en documentatie leven waar teams al werken, wat adoptie sterker maakt dan zware procesdecks.',
        outcomes: four(
          'Ruimte templates voor workshops en design reviews',
          'Traceability van discovery insights naar Jira epics',
          'Slack- of Teams kanalen met duidelijke escalatiepaden',
          'Lichte governance die teams echt volgen',
        ),
      },
    ],
  },
}
