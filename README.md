# Template per Pagina Web Personale

Questo è un template per una pagina web personale progettato per creare una presenza online professionale. Il template è stato originariamente creato da [codewithsadee](https://github.com/codewithsadee), e l'ho personalizzato aggiungendo il **supporto multilingua** e semplificando l'inserimento dei **progetti** e del **curriculum** tramite file JSON.

## Come Modificare la Sezione Curriculum

La sezione del curriculum del sito web è gestita tramite un file JSON. Per personalizzarla con le tue informazioni accademiche e lavorative, puoi modificare il seguente formato JSON:

```json
{
    "IMPORTANTE": "Mettere in alto le informazioni più recenti per rispettare l'ordine cronologico",
    
    "education": [
        {
            "school_it": "Politecnico di Milano",
            "school_en": "Polytechnic University of Milan",
            "time_it": "2019 — Presente",
            "time_en": "2019 — Present",
            "description_it": "Iscritto al corso di Ingegneria Elettronica.",
            "description_en": "Enrolled in the Electronic Engineering course."
        },
        {
            "school_it": "Liceo Scientifico Galileo Galilei",
            "school_en": "Galileo Galilei Scientific High School",
            "time_it": "2014 — 2019",
            "time_en": "2014 — 2019",
            "description_it": "Diplomato presso il Liceo Scientifico Galileo Galilei.",
            "description_en": "Graduated from Galileo Galilei Scientific High School."
        }
    ],
    "experience": [
        {
            "title_it": "Progetti accademici",
            "title_en": "Academic projects",
            "time_it": "2023",
            "time_en": "2023",
            "description_it": "Partecipazione a vari progetti nell'ambito dell'Ingegneria Elettronica.",
            "description_en": "Participation in various projects in the field of Electronic Engineering."
        }
    ]
}
```
## Come Modificare la Sezione Progetti

Puoi aggiungere o modificare i progetti visualizzati nella sezione progetti del sito web modificando il file JSON dedicato. Ecco un esempio di struttura:
```json
{
    "project": [
        {
            "Title": "Sistema di monitoraggio IoT",
            "description_it": "Progetto per monitorare dati sensoriali tramite una rete IoT.",
            "description_en": "Project to monitor sensor data via an IoT network.",
            "link": "https://github.com/username/IoT-Monitoring-System",
            "img": "assets/images/iot_monitoring_system.jpg"
        },
        {
            "Title": "Simulatore di reti neurali",
            "description_it": "Simulatore per reti neurali artificiali utilizzando Python.",
            "description_en": "Simulator for artificial neural networks using Python.",
            "link": "https://github.com/username/Neural-Network-Simulator",
            "img": "assets/images/neural_network_simulator.jpg"
        }
    ]
```
## Inserimento di Dati Personali nella Pagina Web
Per inserire dati personali come chi sei e altre informazioni biografiche nel sito, è necessario modificare direttamente il file HTML. I commenti all'interno del codice specificano chiaramente a quale parte del sito si riferiscono le diverse sezioni, quindi basta seguire le indicazioni fornite nei commenti.

## Traduzioni Multilingua
Per gestire le traduzioni multilingua, ci sono due file JSON separati, uno per ogni lingua. Di seguito un esempio per il file in inglese:
```json
{
    "about": "About",
    "about_me": "About Me",
    "s_contacts": "Show Contacts",
    "Birthday": "Birthday",
    "date": "15 November, 2000",
    "City": "City",
    "resume": "Resume",
    "education": "Education",
    "experience": "Experience",
    "portfolio": "Portfolio",
    "about_text": "My name is John Doe, a passionate Software Engineer.",
    "resume_text": "<b class='text-decoration-underline'>Click here</b> to download the full resume."
}
```
### Aggiungere Nuovi Elementi Tradotti 
Per aggiungere nuovi elementi HTML che necessitano di traduzione, devi aggiungere un attributo `lng-tag="VALORE"` all'elemento HTML corrispondente, dove **VALORE** è il nome della chiave che aggiungerai nei file JSON di traduzione. È importante che il valore sia uguale in entrambi i file di traduzione.
