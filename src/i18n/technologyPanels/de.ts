import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const deTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'Wir kombinieren Spitzenmodelle mit Orchestrierungsframeworks, damit Prompts, Tools und Retrieval in Produktion vorhersehbar laufen. Bevor etwas Kunden erreicht, stimmen wir Latenzbudgets, Guardrails und Evaluationsuiten mit Ihrem Risikoprofil ab.',
        outcomes: four(
          'Auswahlmemo mit Kosten-, Latenz- und Qualitätsabwägungen',
          'Produktionsmuster für RAG, Tool Calling und strukturierte Ausgaben',
          'Regression und Red Team in Ihrem Releaseprozess verankert',
          'Schlüsselverwaltung und Rotation passend zu Ihrem IAM-Standard'
        ),
      },
      {
        overview:
          'Klassische ML- und Deep-Learning-Bibliotheken decken tabellarisches Scoring, Computer Vision und große Trainingsjobs ab. Wir standardisieren Umgebungen, damit Experimente sauber in geplante Pipelines mit nachvollziehbarer Lineage übergehen.',
        outcomes: four(
          'Wiederverwendbare Trainingsvorlagen mit fixierten Abhängigkeiten',
          'Feature-Pipelines kompatibel zu Warehouse oder Data Lake',
          'Experimenttracking und Model Cards für jeden Produktionskandidaten',
          'CPU- und GPU-Profile passend zu echten Batchfenstern und SLAs'
        ),
      },
      {
        overview:
          'Managed ML auf AWS, Azure und Google Cloud liefert elastisches Training und Serving ohne unnötige Kleinarbeit. Wir entwerfen Landing Zones, Netzwerk und Quotas, damit Teams schnell bleiben ohne Governance zu brechen.',
        outcomes: four(
          'Landing-Zone-Muster für Notebooks, Training und Endpoints',
          'Private Konnektivität zwischen Datenspeichern und Trainingsjobs',
          'Quotas, Budgetalarme und Autoscaling an Nutzungskurven angepasst',
          'Übergaberunbooks für Plattformbesitzer und ML Engineers'
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark und Dask reichen von Ad-hoc-Analyse bis Petabyte-Transformationen. Wir setzen auf idempotente Jobs, Schemaevolution und reproduzierbare Backfills, damit Analytics verlässlich bleibt, wenn Quellen sich ändern.',
        outcomes: four(
          'Leitfaden zu Partitionierung und Dateilayout für große Tabellen',
          'Schemakontrakte mit dokumentierten Evolutionsregeln',
          'Backfill- und Replay-Tools für verspätete Daten',
          'Kostenbewusste Jobpläne mit Observability in jeder Stufe'
        ),
      },
      {
        overview:
          'Container, Kubernetes, MLflow und FastAPI machen aus Modellen zuverlässige Services. Health Checks, Autoscaling-Signale und Rollback-Pfade halten Releases langweilig, auch wenn Traffic steigt oder Modelle wechseln.',
        outcomes: four(
          'Containerimages mit gehärteten Basen und Scanning',
          'Kubernetes-Manifeste oder Helm mit gesetzten Ressourcelimits',
          'Canary- oder Shadow-Muster für Modellupdates',
          'SLOs zu Latenz, Fehlern und Frische mit Alarmrouting'
        ),
      },
      {
        overview:
          'Notebooks, Vektorspeicher und Redis unterstützen schnelle Iteration und latenzarmes Retrieval. Wir halten Dev- und Prod-Parität eng, damit lokale Erfolge nach dem Rollout nicht überraschen.',
        outcomes: four(
          'Checkliste zur Promotion von Notebook zu Pipeline',
          'Dokumentierte Strategie zu Indexgröße und Vektorstore',
          'Redis- oder Cache-Richtlinien mit Eviction und TTL',
          'Onboarding-Kit für lokale und geteilte Sandboxes'
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'Wir entwerfen Multi-Account-Fundamente auf AWS, Azure und Google Cloud mit klarer Ownership, Guardrails und Kostentransparenz. Landing Zones vererben Sicherheitsbaselines an neue Workloads statt sie neu zu erfinden.',
        outcomes: four(
          'Konto- oder Abonnement-Topologie mit verantwortlichen Teams',
          'Baseline-Guardrails für Netzwerk, Verschlüsselung und Logging',
          'Tagging- und Chargeback-Modell mit Finance abgestimmt',
          'Executive-Dashboard zu Kosten und Risiko'
        ),
      },
      {
        overview:
          'Kubernetes und Containerplattformen tragen Ihre kritischsten Services. Wir kümmern uns um Upgrades, Kapazität und Day-two-Betrieb, damit Cluster gepatcht, beobachtbar und bereit für Zero-Downtime-Deploys bleiben.',
        outcomes: four(
          'Produktionsreife Cluster-Baseline mit Node Pools und Limits',
          'Helm- oder GitOps-Lieferung mit reviewten Promotion-Pfaden',
          'Gewähltes und dokumentiertes Muster für Ingress, Mesh oder API-Gateway',
          'Upgrade- und Rollback-Übungen in Runbooks festgehalten'
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible und Puppet halten Infrastruktur wiederholbar und reviewbar. Module werden wie Anwendungscode getestet, damit Drift früh auffällt und Änderungen auditierbar bleiben.',
        outcomes: four(
          'Modulare IaC-Bibliothek mit Beispielen für gängige Stacks',
          'Policy-Checks auf jedem Plan nach Ihren Governance-Regeln',
          'Automatisierte Modultests und Umgebungsparität',
          'State-Backend, Locking und Zugriffsmodell dokumentiert'
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions und CircleCI verkürzen den Weg vom Commit bis Produktion. Quality Gates, Freigaben und Artefakt-Promotion sind explizit, damit Releases schnell und kontrolliert bleiben.',
        outcomes: four(
          'Pipeline-Templates mit Tests, Scans und Signierung',
          'Umgebungs-Promotionsmatrix von Dev bis Produktion',
          'Secrets-Einspeisung ohne langlebige Credentials in Repos',
          'Sichtbare Release-Metriken wie Lead Time und Change-Failure-Rate'
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK und Splunk geben Operations ein gemeinsames Gesundheitsbild. Dashboards, SLOs und Tracing hängen an echten User Journeys, nicht nur an Infrastrukturmetriken.',
        outcomes: four(
          'Golden-Signals-Dashboards pro kritischem Service',
          'Verteiltes Tracing über die wichtigsten User-Flows',
          'Logstruktur und Aufbewahrung passend zur Compliance',
          'On-Call-Runbooks verlinkt von wertvollen Alerts'
        ),
      },
      {
        overview:
          'Managed Functions, Datenbanken, Objektspeicher und CDN reduzieren undifferenzierte Arbeit. Wir wählen Primitive passend zu Trafficform und Compliance-Grenzen und dokumentieren Failover sowie Backup-Erwartungen.',
        outcomes: four(
          'Auswahlmatrix mit Kosten- und Ops-Tradeoffs',
          'Backup-, Restore- und RPO- oder RTO-Ziele je Datenspeicher',
          'CDN- und Edge-Caching-Strategie für statische und dynamische Assets',
          'FinOps-Review mit Right-Sizing und Reservierungsempfehlungen'
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'Modernes .NET liefert leistungsstarke APIs, Echtzeitfähigkeiten und plattformübergreifende Clients ohne Enterprise-Muster zu opfern. Wir richten Lösungsstruktur, Tests und Deployment an Ihren ALM-Praktiken aus.',
        outcomes: four(
          'Referenz-Lösungslayout für APIs, Worker und Frontends',
          'OpenAPI-Verträge und Integrationstests in CI',
          'Performance-Baseline und Lastprofil für Hot Paths',
          'Deployment-Pipeline nach Azure oder hybride Ziele'
        ),
      },
      {
        overview:
          'Azure Compute-, Integrations- und Identitätsdienste verbinden Anwendungen sicher mit dem Ökosystem. Wir betonen least-privilege-Netzwerk, Managed Identities und wiederholbare Umgebungsaufbauten.',
        outcomes: four(
          'Architekturdiagramm mit Subnets und Private Endpoints',
          'Einsatz Managed Identities statt statischer Secrets wo möglich',
          'Autoscale- und Resilienzmuster für App Service oder Functions',
          'Kosten-Guardrails mit Budgets und Anomaliealarmen'
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse und Data Factory verankern Analytics und transaktionale Workloads. Wir designen für Recovery, Verschlüsselung und vorhersehbare Abfragekosten, bevor Datenbestände wachsen.',
        outcomes: four(
          'Datenmodell und Indexstrategie im Peer Review',
          'Nachweise zu Backup, Geo-Redundanz und Restore-Tests',
          'Ingestionspipelines mit Monitoring und Quarantänepfaden',
          'Zugriffsmodell mit Row-Level Security falls nötig'
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI und Dataverse lassen Abteilungen mit Governance schnell vorankern. Wir setzen Guardrails, damit Citizen Developer sicher neben Pro-Code-Lösungen innovieren.',
        outcomes: four(
          'Umgebungsstrategie mit Trennung von Dev, Test und Produktion',
          'DLP- und Connector-Policies abgestimmt mit Security Review',
          'Wiederverwendbare Komponentenbibliothek für gängige Muster',
          'Operations-Playbook für Support und Ownership'
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep und Application Insights schließen die Schleife von der Idee bis zur beobachtbaren Produktion. Telemetrie verbindet Releases mit Business- und Zuverlässigkeitsergebnissen.',
        outcomes: four(
          'CI- und CD-Templates mit Freigaben und Secret-Handling',
          'Infrastructure as Code für Ihre kritischen Azure-Ressourcen',
          'Dashboards zu Build-Gesundheit, Deployments und Live-Fehlern',
          'Release-Tagging-Strategie für Audits und Rollbacks'
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph und Dynamics erweitern Workflows dort, wo Teams bereits arbeiten. Integrationen respektieren Consent, Throttling und Lifecycle-Regeln, damit Automatisierungen stabil bleiben.',
        outcomes: four(
          'Integrationsdesign mit least-privilege Graph-Berechtigungen',
          'Teams- oder SharePoint-App-Manifeste und Deployment-Guide',
          'Change-Management-Materialien für Admins und Endnutzer',
          'Monitoring zu Webhook- und API-Kontingentverbrauch'
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce und Dynamics verankern viele Enterprise-Kerne. Wir behandeln Paketfähigkeiten als gleichwertig und erweitern nur dort, wo Differenzierung zählt, damit Upgrades machbar bleiben.',
        outcomes: four(
          'Fit-Gap-Analyse mit Konfiguration vor Custom Code',
          'Release-Strategie passend zu Vendor-Rhythmus und Blackout-Fenstern',
          'Integrationsverträge für Satellitensysteme dokumentiert',
          'Testbibliothek für kritische Finanz- oder Operationspfade'
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism und Workflow-Engines entfernen repetitive Arbeit im großen Maßstab. Bots haben Ownership, Monitoring und Exception-Handling wie jeder andere Produktionsservice.',
        outcomes: four(
          'Prozesslandkarte mit nach ROI priorisierten Automatisationskandidaten',
          'Credential-Vault-Muster und Funktionstrennung',
          'Monitoring zu Bot-Gesundheit, Queues und Business-Exceptions',
          'Continuous-Improvement-Backlog aus Operations-Metriken gespeist'
        ),
      },
      {
        overview:
          'Java, .NET, Node und Python treiben Custom-Services und Integrationsschichten an. Wir standardisieren API-Stil, Fehlerbehandlung und Observability, damit gemischte Stacks wie eine Plattform wirken.',
        outcomes: four(
          'Service-Template mit Auth, Logging und Metriken integriert',
          'API-Katalog mit Versionierung und Deprecation-Policy',
          'Performance-Test-Harness für Spitzentransaktionsszenarien',
          'Security-Scanning in CI für Dependencies und Container'
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres und Cassandra passen zu unterschiedlichen Konsistenz- und Skalenprofilen. Wir dokumentieren Retention, Partitionierung und Recovery, damit Daten unter Last verfügbar bleiben.',
        outcomes: four(
          'Schemadesign mit Wachstums- und Archivierungsstrategie',
          'Backup-Verifikationsplan mit gespeicherten Nachweisen',
          'Tuning-Plan für die zehn teuersten Statements',
          'Zugriffsreviews für privilegierte Datenbankrollen'
        ),
      },
      {
        overview:
          'MuleSoft-, Kafka-, Spring-Cloud- und Lambda-ähnliche Integrationen bewegen Events und Nutzdaten zuverlässig. Idempotenz, Reihenfolge und Dead-Letter-Handling sind vom ersten Tag an explizit.',
        outcomes: four(
          'Event-Topic-Katalog mit Ownern und Schemas',
          'Replay-Verfahren für Giftnachrichten oder fehlerhafte Deployments',
          'Latenz- und Durchsatz-SLOs pro Integrationspfad',
          'Multi-Team-Playbook für Incident-Triage'
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps und ServiceNow halten Delivery und Operations ausgerichtet. Traceability von Anforderung bis Release unterstützt Audits und schnellere Root-Cause-Analysen.',
        outcomes: four(
          'Workflow-Konfiguration gemappt auf Ihre SDLC',
          'Dashboards zu Delivery-Vorhersagbarkeit und Qualität',
          'CMDB- oder Asset-Links für kritische Configuration Items',
          'Post-Incident-Review-Vorlage mit Action-Tracking verbunden'
        ),
      },
    ],
  },
  data: { 
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift und Synapse tragen regierte Analytics im großen Maßstab. Wir entwerfen Warehouses um Abfragemuster, rollenbasierten Zugriff und Spend-Controls, damit Insights das Budget nicht überholen.',
        outcomes: four(
          'Logisches Modell mit zertifizierten Marts und Ownership',
          'Rollen- und Zeilenzugriffsmodell mit Security reviewed',
          'Workload-Management oder Warehouse-Sizing auf Peaks abgestimmt',
          'Kostenmonitoring mit Alarmen bei unerwartetem Wachstum'
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming und Kinesis verwandeln Events in nahezu Echtzeit-Entscheidungen. Wir engineer Backpressure, Replay und Schema-Kompatibilität, damit Streams vertrauenswürdig bleiben.',
        outcomes: four(
          'Topic-Design mit Retention- und Compaction-Entscheidungen',
          'Stream-Jobs mit State-Recovery und verifizierten Checkpoints',
          'Consumer-Lag und Datenfrische auf Dashboards sichtbar',
          'Getesteter DR-Pfad bei Broker- oder Regionsausfall'
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend und Informatica orchestrieren Batch- und inkrementelle Loads mit Tests. Abhängigkeiten sind explizit, damit Fehler früh sichtbar werden und Downstream-Teams Impact sehen.',
        outcomes: four(
          'DAG- oder Job-Katalog mit SLAs und Ownership pro Pipeline',
          'Datentests zu Frische, Volumen und Schlüsselbeziehungen',
          'Promotionsfluss von Dev nach Prod mit Peer Review',
          'Lineage von Quelltabellen zu veröffentlichten Metriken'
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg und Hudi auf Objektspeicher bieten offene Formate mit ACID-Garantien. Compaction, Partitionierung und Zugriffsmuster sind getuned, damit Tabellen mit wachsenden Daten schnell bleiben.',
        outcomes: four(
          'Tabellenformat-Wahl dokumentiert mit Migrationsnotizen',
          'Partition- und Z-Order-Strategie für schwere Scans',
          'Zugriffsrichtlinien im Katalog integriert',
          'Housekeeping-Jobs für kleine Dateien und Snapshots'
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres und MongoDB decken große Transformationen, flexible Dokumente und gemischte Workloads ab. Wir alignen Compute mit Speicherlokalität und Spill-Verhalten, damit Jobs in vorhersagbaren Fenstern enden.',
        outcomes: four(
          'Cluster- oder Pool-Sizing basierend auf gemessenen Jobprofilen',
          'Speicherlayout für heiße, warme und kalte Tiers',
          'Verschlüsselung und Schlüsselrotation je Store validiert',
          'Kapazitätsplan mit vierteljährlichen Review-Meilensteinen'
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus und ELK schließen die Schleife zu Datenqualität und Pipeline-Gesundheit. Alerts hängen an Business-Impact, nicht nur an Infrarauschen.',
        outcomes: four(
          'Qualitätsregeln auf kritischen Datensätzen mit Owner-Eskalation',
          'Einheitliche Logs und Metriken für Pipeline-Fehler',
          'Synthetische Checks auf veröffentlichten Dashboards oder APIs',
          'Incident-Retros, die Regeln und Dokumentation speisen'
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'Was wir mit diesem Stack liefern',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch und InVision halten Design-Artefakte strukturiert und teilbar. Bibliotheken, Namenskonventionen und Versionierung reduzieren Drift zwischen Design und Engineering.',
        outcomes: four(
          'Komponentenbibliothek mit Nutzungshinweisen und Do- und Don’t-Beispielen',
          'Dateiorganisation, die über Squads und Produkte skaliert',
          'Export- und Handoff-Konventionen mit Engineering abgestimmt',
          'Barrierefreiheits-Annotationen bei sensiblen Patterns'
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure und Marvel validieren Flows, bevor Code teuer wird. Wir binden Prototypen an Testpläne und Erfolgsmetriken, damit Stakeholder Evidenz sehen, nicht nur Mockups.',
        outcomes: four(
          'Klickbare Flows für Primär- und Randfälle',
          'Usability-Testskripte verknüpft mit Prototyp-Versionen',
          'Motion- und Micro-Interaction-Notizen für die Umsetzung',
          'Decision Log, was sich nach Feedback geändert hat'
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar und Amplitude verbinden qualitative Signale mit quantitativem Verhalten. Research-Tempo ist geplant, damit Insights ankommen, wenn Roadmap-Entscheidungen noch offen sind.',
        outcomes: four(
          'Research-Plan mit Zielen, Zielgruppe und Zeitlinien',
          'Durchsuchbares Insight-Repository ohne Team-Rückfragen',
          'Dashboards zu Funnels, Retention und Feature-Adoption',
          'Priorisierter Fix-Backlog gekoppelt an Evidenz-Schwere'
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React und Next.js liefern schnelle, zugängliche Oberflächen. Semantik, Performance-Budgets und Progressive Enhancement halten Erlebnisse resilient.',
        outcomes: four(
          'Semantische Struktur und Heading-Reihenfolge validiert',
          'Performance-Budget mit CI-Checks bei Regressionen',
          'Responsive Verhalten auf echter Gerätematrix getestet',
          'SEO- und Share-Metadaten für Schlüsseltemplates reviewed'
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap und Ant Design beschleunigen UI, wenn Teams opinionated Systeme wollen. Wir alignen Tokens, Theming und Komponenten-APIs mit Marke und Barrierefreiheitszielen.',
        outcomes: four(
          'Theme-Erweiterungspaket mit angewandten Marken-Tokens',
          'Storybook oder gleichwertiger Katalog für wiederverwendbare UI',
          'Tastatur- und Screenreader-Checks auf geteilten Komponenten',
          'Migrationsnotizen bei Major-Upgrades der Bibliotheken'
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira und Slack halten Discovery und Delivery sichtbar. Rituale und Doku leben dort, wo Teams ohnehin arbeiten, was Adoption stärker fördert als schwere Prozessdecks.',
        outcomes: four(
          'Space-Templates für Workshops und Design-Reviews',
          'Traceability von Discovery-Insights zu Jira-Epics',
          'Slack- oder Teams-Kanäle mit klaren Eskalationspfaden',
          'Leichte Governance, der Teams wirklich folgen'
        ),
      },
    ],
  },
}
