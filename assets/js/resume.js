document.addEventListener("DOMContentLoaded", function() {
    // Se il file JSON è ospitato sul server locale
    fetch('../../resume.json')
      .then(response => response.json())
      .then(data => {
        // Selezioniamo l'elemento <ul> dove inserire gli studi
        const studyList = document.getElementById('study-list');
        // Selezioniamo l'elemento <ul> dove inserire le esperienze lavorative
        const workList = document.getElementById('work-list');
        
        // Iteriamo sui progetti nel JSON
        data.education.forEach(education => {

            const studyItem = document.createElement('li');
            studyItem.classList.add('timeline-item');
            studyItem.innerHTML = `
              <h4 class="h4 timeline-item-title">${education.school_it}</h4>
              <span>${education.time_it}</span>
              <p class="timeline-text">
                ${education.description_it}
              </p>
            `;
            studyList.appendChild(studyItem);
        
        });
        data.experience.forEach(experience => {
                
            const workItem = document.createElement('li');
            workItem.classList.add('timeline-item');
            workItem.innerHTML = `
            <h4 class="h4 timeline-item-title">${experience.title_it}</h4>
            <span>${experience.time_it}</span>
            <p class="timeline-text">
                ${experience.description_it}
            </p>
            `;
            workList.appendChild(workItem);
            
        });
    })
    .catch(error => console.error('Errore durante il fetch dei progetti:', error));
});


function ResumeTranslate(ling) {
    fetch('../../resume.json')
      .then(response => response.json())
      .then(data => {
        // Creiamo l'elemento <li> con la classe "project-item active"
        // Selezioniamo l'elemento <ul> dove inserire gli studi
        const studyList = document.getElementById('study-list');
        studyList.innerHTML = '';
        // Selezioniamo l'elemento <ul> dove inserire le esperienze lavorative
        const workList = document.getElementById('work-list');
        workList.innerHTML = '';

        data.education.forEach(education => {
            // Creiamo l'elemento <li> con la classe "project-item active"
            const studyItem = document.createElement('li');
            studyItem.classList.add('timeline-item');

            var description = '';
            var school = '';
            var time = '';
            switch (ling) {
                case 'it':
                    description = education.description_it;
                    school = education.school_it;
                    time = education.time_it;
                    break;
                case 'en':
                    description = education.description_en;
                    school = education.school_en;
                    time = education.time_en;
                    break;
            }
            // Creiamo il contenuto HTML
            studyItem.innerHTML = `
                <h4 class="h4 timeline-item-title">${school}</h4>
                <span>${time}</span>
                <p class="timeline-text">
                    ${description}
                </p>
            `;

            // Aggiungiamo l'elemento <li> alla lista
            studyList.appendChild(studyItem);
        });

        data.experience.forEach(experience => {
            const workItem = document.createElement('li');
            workItem.classList.add('timeline-item');

            var description = '';
            var title = '';
            var time = '';
            switch (ling) {
                case 'it':
                    description = experience.description_it;
                    title = experience.title_it;
                    time = experience.time_it;
                    break;
                case 'en':
                    description = experience.description_en;
                    title = experience.title_en;
                    time = experience.time_en;
                    break;
            }
            // Creiamo il contenuto HTML
            workItem.innerHTML = `
                <h4 class="h4 timeline-item-title">${title}</h4>
                <span>${time}</span>
                <p class="timeline-text">
                    ${description}
                </p>
            `;

            // Aggiungiamo l'elemento <li> alla lista
            workList.appendChild(workItem);
        });
      })
      .catch(error => console.error('Errore durante il fetch dei progetti:', error));
}
