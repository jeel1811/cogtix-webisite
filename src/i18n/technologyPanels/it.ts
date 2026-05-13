import type { ServiceTechnologyPanelsByVariant } from './types'

const four = (a: string, b: string, c: string, d: string) => [a, b, c, d]

export const itTechnologyPanels: ServiceTechnologyPanelsByVariant = {
  ai: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'Accoppiamo modelli all’avanguardia con framework di orchestrazione così che prompt, tool e retrieval siano prevedibili in produzione. Prima di esporre qualsiasi cosa ai clienti allineiamo budget di latenza, guardrail e suite di valutazione al tuo profilo di rischio.',
        outcomes: four(
          'Memo di scelta modello con tradeoff su costo, latenza e qualità',
          'Pattern di produzione per RAG, tool calling e output strutturati',
          'Regressione e red team integrati nel processo di release',
          'Gestione e rotazione delle chiavi allineata al tuo standard IAM',
        ),
      },
      {
        overview:
          'Le librerie ML classiche e il deep learning coprono scoring tabulare, computer vision e job di training su larga scala. Standardizziamo gli ambienti così che gli esperimenti fluiscano in pipeline pianificate con lineage tracciabile.',
        outcomes: four(
          'Template di training riutilizzabili con dipendenze fissate',
          'Pipeline di feature compatibili con warehouse o data lake',
          'Experiment tracking e model card per ogni candidato a produzione',
          'Profili CPU e GPU dimensionati su finestre batch e SLA reali',
        ),
      },
      {
        overview:
          'Le piattaforme ML gestite su AWS, Azure e Google Cloud offrono training e serving elastici senza lavoro ripetitivo. Progettiamo landing zone, rete e quote così che i team accelerino senza rompere la governance.',
        outcomes: four(
          'Pattern di landing zone per notebook, training ed endpoint',
          'Connettività privata tra datastore e job di training',
          'Quote, alert di budget e autoscaling calibrati sulle curve d’uso',
          'Runbook di consegna per owner di piattaforma e ML engineer',
        ),
      },
      {
        overview:
          'Pandas, NumPy, Spark e Dask coprono dall’analisi ad hoc alle trasformazioni petabyte. Ci concentriamo su job idempotenti, evoluzione dello schema e backfill riproducibili così che l’analitica resti affidabile quando cambiano le fonti.',
        outcomes: four(
          'Linee guida su partizionamento e layout file per tabelle pesanti',
          'Contratti di schema con regole di evoluzione documentate',
          'Tool di backfill e replay per dati in ritardo',
          'Piani di job attenti ai costi con osservabilità su ogni stadio',
        ),
      },
      {
        overview:
          'Container, Kubernetes, MLflow e FastAPI trasformano i modelli in servizi affidabili. Integriamo health check, segnali di autoscaling e percorsi di rollback così che le release restino no anche con picchi o cambi modello.',
        outcomes: four(
          'Immagini container con base indurite e scanning',
          'Manifest Kubernetes o Helm con limiti di risorsa impostati',
          'Pattern canary o shadow per aggiornamenti di modello',
          'SLO su latenza, errori e freschezza con instradamento alert',
        ),
      },
      {
        overview:
          'Notebook, vector store e Redis supportano iterazione rapida e retrieval a bassa latenza. Manteniamo stretta la parità tra dev e prod così che ciò che funziona in locale non sorprenda dopo la promozione.',
        outcomes: four(
          'Checklist di promozione da notebook a pipeline',
          'Strategia documentata su dimensione indice e vector store',
          'Policy Redis o cache con eviction e TTL guidati',
          'Kit di onboarding per sandbox locali e condivisi',
        ),
      },
    ],
  },
  cloud: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'Progettiamo fondazioni multi account su AWS, Azure e Google Cloud con ownership chiara, guardrail e visibilità dei costi. Le landing zone fanno ereditare le baseline di sicurezza alle nuove workload invece di reinventarle.',
        outcomes: four(
          'Topologia account o abbonamenti con responsabilità mappate',
          'Guardrail di base per rete, crittografia e logging',
          'Modello di tagging e chargeback concordato con il finance',
          'Dashboard esecutivo su costi e rischio',
        ),
      },
      {
        overview:
          'Kubernetes e le piattaforme container portano i servizi più critici. Ci occupiamo di upgrade, capacità e operazioni day two così che i cluster restino patchati, osservabili e pronti per deploy senza downtime.',
        outcomes: four(
          'Baseline di cluster in produzione con node pool e limiti',
          'Consegna Helm o GitOps con percorsi di promozione revisionati',
          'Pattern ingress, service mesh o API gateway scelto e documentato',
          'Esercitazioni di upgrade e rollback catturate nei runbook',
        ),
      },
      {
        overview:
          'Terraform, CloudFormation, Ansible e Puppet mantengono l’infrastruttura ripetibile e revisionabile. I moduli sono testati come codice applicativo così che il drift emerga presto e le modifiche restino auditabili.',
        outcomes: four(
          'Libreria IaC modulare con esempi per stack comuni',
          'Controlli di policy su ogni piano secondo le tue regole',
          'Test automatizzati dei moduli e parità tra ambienti',
          'Backend di stato, locking e modello di accesso documentato',
        ),
      },
      {
        overview:
          'Jenkins, GitLab CI, GitHub Actions e CircleCI accorciano il percorso dal commit alla produzione. Quality gate, approvazioni e promozione artefatti sono espliciti così che le release restino veloci e controllate.',
        outcomes: four(
          'Template di pipeline con test, scan e firma',
          'Matrice di promozione ambienti da dev a produzione',
          'Iniezione segreti senza credenziali long lived nei repo',
          'Metriche di release come lead time e change failure rate visibili',
        ),
      },
      {
        overview:
          'Datadog, Prometheus, ELK e Splunk danno alle operations un quadro condiviso di salute. Dashboard, SLO e tracing sono legati ai percorsi utente reali, non solo alle metriche infrastrutturali.',
        outcomes: four(
          'Dashboard dei segnali d’oro per ogni servizio critico',
          'Tracing distribuito sui flussi utente principali',
          'Struttura log e retention allineate al compliance',
          'Runbook on call collegati agli alert ad alto valore',
        ),
      },
      {
        overview:
          'Funzioni gestite, database, object storage e CDN riducono lavoro non differenziante. Scegliamo primitive adatte alla forma del traffico e ai confini di compliance, poi documentiamo failover e attese di backup.',
        outcomes: four(
          'Matrice di selezione servizi con tradeoff costi e operations',
          'Obiettivi di backup, restore e RPO o RTO per ogni datastore',
          'Strategia CDN e cache edge per asset statici e dinamici',
          'Revisione FinOps con right sizing e guida sulle reservation',
        ),
      },
    ],
  },
  microsoft: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'Il .NET moderno offre API ad alte prestazioni, capacità real time e client multipiattaforma senza rinunciare ai pattern enterprise. Allineiamo struttura della soluzione, test e deployment alle tue pratiche ALM.',
        outcomes: four(
          'Layout di soluzione di riferimento per API, worker e front end',
          'Contratti OpenAPI e test di integrazione in CI',
          'Baseline di performance e profilo di carico sui percorsi caldi',
          'Pipeline di deployment verso Azure o target ibridi',
        ),
      },
      {
        overview:
          'I servizi Azure di compute, integrazione e identità collegano le applicazioni all’ecosistema in modo sicuro. Enfatizziamo rete least privilege, identità gestite e costruzione ripetibile degli ambienti.',
        outcomes: four(
          'Diagramma di architettura con subnet e private endpoint',
          'Uso di identità gestite al posto di segreti statici dove possibile',
          'Pattern di autoscale e resilienza per App Service o Functions',
          'Guardrail sui costi con budget e alert anomalia',
        ),
      },
      {
        overview:
          'SQL, Cosmos, Synapse e Data Factory ancorano analytics e carichi transazionali. Progettiamo per recovery, crittografia e costo query prevedibile prima che i dataset diventino difficili da correggere.',
        outcomes: four(
          'Modello dati e strategia di indicizzazione peer reviewed',
          'Evidenze di backup, geo ridondanza e test di restore',
          'Pipeline di ingest con monitoraggio e percorsi di quarantena',
          'Modello di accesso con row level security dove serve',
        ),
      },
      {
        overview:
          'Power Apps, Automate, BI e Dataverse permettono ai reparti di andare veloce con governance. Impostiamo guardrail così che lo sviluppo citizen innovi in sicurezza accanto alle soluzioni pro code.',
        outcomes: four(
          'Strategia di ambienti con separazione dev, test e produzione',
          'Policy DLP e connettori allineate alla security review',
          'Libreria di componenti riutilizzabili per pattern comuni',
          'Playbook operativo per support e ownership',
        ),
      },
      {
        overview:
          'Azure DevOps, GitHub Actions, Bicep e Application Insights chiudono il ciclo dall’idea alla produzione osservabile. La telemetria lega le release a risultati di business e affidabilità.',
        outcomes: four(
          'Template CI e CD con approvazioni e gestione segreti',
          'Infrastructure as code per le risorse Azure su cui conti',
          'Dashboard su salute build, deployment ed errori live',
          'Strategia di tagging release per audit e rollback',
        ),
      },
      {
        overview:
          'SharePoint, Teams, Graph e Dynamics estendono i flussi dove le persone già lavorano. Le integrazioni rispettano consenso, throttling e regole di lifecycle così che le automazioni restino stabili.',
        outcomes: four(
          'Design di integrazione con permessi Graph least privilege',
          'Manifest app Teams o SharePoint e guida al deployment',
          'Materiali di change management per admin e utenti finali',
          'Monitoraggio su consumo webhook e quota API',
        ),
      },
    ],
  },
  enterprise: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'SAP, Oracle, Salesforce e Dynamics ancorano molti nuclei enterprise. Trattiamo le capacità del pacchetto come first class ed estendiamo solo dove conta la differenziazione, così che gli upgrade restino fattibili.',
        outcomes: four(
          'Analisi fit gap con configurazione prima del codice custom',
          'Strategia di release allineata al ritmo del vendor e alle finestre nere',
          'Contratti di integrazione per sistemi satellite documentati',
          'Libreria di test che copre percorsi finanziari o operativi critici',
        ),
      },
      {
        overview:
          'UiPath, Automation Anywhere, Blue Prism e motori di workflow eliminano lavoro ripetitivo su scala. I bot hanno ownership, monitoraggio e gestione eccezioni come ogni altro servizio in produzione.',
        outcomes: four(
          'Mappa processi con candidati automazione prioritizzati per ROI',
          'Pattern vault credenziali e segregazione dei compiti',
          'Monitoraggio su salute bot, code ed eccezioni di business',
          'Backlog di miglioramento continuo alimentato da metriche operations',
        ),
      },
      {
        overview:
          'Java, .NET, Node e Python alimentano servizi custom e layer di integrazione. Standardizziamo stile API, gestione errori e osservabilità così che stack misti si comportino come una piattaforma.',
        outcomes: four(
          'Template di servizio con auth, logging e metriche integrate',
          'Catalogo API con versioning e policy di deprecazione',
          'Harness di test performance per scenari di picco transazionale',
          'Security scanning in CI per dipendenze e container',
        ),
      },
      {
        overview:
          'Oracle, SQL Server, Postgres e Cassandra si adattano a profili diversi di coerenza e scala. Documentiamo retention, partizionamento e recovery così che i dati restino disponibili sotto carico.',
        outcomes: four(
          'Design schema con strategia di crescita e archiviazione',
          'Calendario verifica backup con evidenza archiviata',
          'Piano di tuning per le dieci query più costose',
          'Revisioni accesso per ruoli database privilegiati',
        ),
      },
      {
        overview:
          'Integrazioni in stile MuleSoft, Kafka, Spring Cloud e Lambda muovono eventi e payload in modo affidabile. Idempotenza, ordinamento e dead letter sono espliciti dal primo giorno.',
        outcomes: four(
          'Catalogo topic evento con owner e schema',
          'Procedure di replay per messaggi tossici o deploy errati',
          'SLO di latenza e throughput per percorso di integrazione',
          'Playbook multi team per triage incidenti',
        ),
      },
      {
        overview:
          'Jira, Confluence, Azure DevOps e ServiceNow mantengono allineate delivery e operations. La tracciabilità dal requisito alla release supporta audit e analisi root cause più rapide.',
        outcomes: four(
          'Configurazione workflow mappata sul tuo SDLC',
          'Dashboard su prevedibilità delivery e qualità',
          'Link CMDB o asset per configuration item critici',
          'Template post incident review collegato al tracking azioni',
        ),
      },
    ],
  },
  data: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'Snowflake, BigQuery, Redshift e Synapse supportano analytics governata su scala. Progettiamo warehouse attorno ai pattern di query, accesso basato su ruoli e controllo della spesa così che gli insight non superino il budget.',
        outcomes: four(
          'Modello logico con mart certificati e ownership',
          'Modello di accesso per ruolo e riga revisionato con security',
          'Gestione carichi o dimensionamento warehouse calibrato sui picchi',
          'Monitoraggio costi con alert su crescita inattesa',
        ),
      },
      {
        overview:
          'Kafka, Flink, Spark Streaming e Kinesis trasformano eventi in decisioni quasi in tempo reale. Progettiamo backpressure, replay e compatibilità schema così che gli stream restino affidabili.',
        outcomes: four(
          'Design topic con decisioni su retention e compaction',
          'Job di stream con recovery di stato e checkpoint verificati',
          'Lag consumer e freschezza dati visibili su dashboard',
          'Percorso DR testato in caso di perdita broker o regione',
        ),
      },
      {
        overview:
          'Airflow, dbt, Talend e Informatica orchestrano carichi batch e incrementali con test. Le dipendenze sono esplicite così che i fallimenti emergano presto e i team downstream vedano l’impatto.',
        outcomes: four(
          'Catalogo DAG o job con SLA e ownership per pipeline',
          'Test dati su freschezza, volume e relazioni chiave',
          'Flusso di promozione da dev a prod con peer review',
          'Lineage da tabelle sorgente a metriche pubblicate',
        ),
      },
      {
        overview:
          'Delta Lake, Iceberg e Hudi su object storage offrono formati aperti con garanzie ACID. Compaction, partizionamento e pattern di accesso sono tarati così che le tabelle restino veloci mentre i dati crescono.',
        outcomes: four(
          'Scelta formato tabella documentata con note di migrazione',
          'Strategia partizione e Z order per scan pesanti',
          'Policy di accesso integrate con il catalogo',
          'Job di housekeeping per file piccoli e snapshot',
        ),
      },
      {
        overview:
          'Spark, Hadoop, Postgres e MongoDB coprono grandi trasformazioni, documenti flessibili e carichi misti. Allineiamo compute alla località storage e al comportamento di spill così che i job finiscano in finestre prevedibili.',
        outcomes: four(
          'Dimensionamento cluster o pool basato su profili job misurati',
          'Layout storage per tier caldi, tiepidi e freddi',
          'Crittografia e rotazione chiavi validate per ogni store',
          'Piano capacità con milestone di review trimestrali',
        ),
      },
      {
        overview:
          'Great Expectations, Datadog, Prometheus ed ELK chiudono il ciclo su qualità dati e salute pipeline. Gli alert sono legati all’impatto di business, non solo al rumore infrastrutturale.',
        outcomes: four(
          'Regole qualità su dataset critici con escalation verso owner',
          'Log e metriche unificate per errori pipeline',
          'Check sintetici su dashboard o API pubblicate',
          'Retro incidenti che alimentano regole e documentazione',
        ),
      },
    ],
  },
  experience: {
    panelOutcomesTitle: 'Cosa portiamo in produzione con questo stack',
    categoryPanels: [
      {
        overview:
          'Figma, Adobe XD, Sketch e InVision mantengono gli artefatti di design strutturati e condivisibili. Librerie, naming e versioning riducono il drift tra designer e engineering downstream.',
        outcomes: four(
          'Libreria componenti con note d’uso ed esempi di cosa fare e non fare',
          'Organizzazione file che scala tra squadre e prodotti',
          'Convenzioni export e handoff concordate con engineering',
          'Annotazioni accessibilità su pattern sensibili',
        ),
      },
      {
        overview:
          'Framer, ProtoPie, Axure e Marvel validano i flussi prima che il codice diventi costoso. Colleghiamo prototipi a piani di test e metriche di successo così che gli stakeholder vedano evidenza, non solo mockup.',
        outcomes: four(
          'Flussi cliccabili che coprono casi primari e limite',
          'Script test di usabilità collegati alle versioni prototipo',
          'Note su motion e micro interazione per implementazione',
          'Registro decisioni su cosa è cambiato dopo il feedback',
        ),
      },
      {
        overview:
          'Maze, UserTesting, Hotjar e Amplitude collegano segnali qualitativi e comportamento quantitativo. La cadenza di ricerca è pianificata così che gli insight arrivino quando le scelte di roadmap sono ancora aperte.',
        outcomes: four(
          'Piano di ricerca con obiettivi, audience e tempistiche',
          'Repository insight ricercabile senza disturbare il team',
          'Dashboard su funnel, retention e adozione feature',
          'Backlog prioritizzato di fix legato alla severità delle evidenze',
        ),
      },
      {
        overview:
          'HTML, CSS, JavaScript, React e Next.js consegnano superfici veloci e accessibili. Struttura semantica, budget di performance e progressive enhancement mantengono esperienze resilienti.',
        outcomes: four(
          'Struttura semantica e ordine heading validati',
          'Budget performance con CI su regressioni',
          'Comportamento responsive testato su matrice device reale',
          'Metadata SEO e condivisione rivisti su template chiave',
        ),
      },
      {
        overview:
          'Tailwind, Material UI, Bootstrap e Ant Design accelerano la UI quando i team vogliono sistemi opinionati. Allineiamo token, theming e API componenti al brand e agli obiettivi di accessibilità.',
        outcomes: four(
          'Pacchetto estensione tema con token brand applicati',
          'Catalogo Storybook o equivalente per UI riutilizzabile',
          'Check tastiera e screen reader su componenti condivisi',
          'Note di migrazione per upgrade major delle librerie',
        ),
      },
      {
        overview:
          'Miro, Confluence, Jira e Slack mantengono discovery e delivery visibili. Rituali e documentazione vivono dove i team già lavorano, il che batte deck di processo pesanti per l’adozione.',
        outcomes: four(
          'Template spazio per workshop e design critique',
          'Tracciabilità da insight discovery a epic Jira',
          'Canali Slack o Teams con percorsi di escalation chiari',
          'Governance leggera che i team seguono davvero',
        ),
      },
    ],
  },
}
