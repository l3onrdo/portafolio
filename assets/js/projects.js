document.addEventListener("DOMContentLoaded", function() {
    // Se il file JSON è ospitato sul server locale
    fetch('../../project.json')
      .then(response => response.json())
      .then(data => {
        // Selezioniamo l'elemento <ul> dove inserire i progetti
        const projectList = document.querySelector('.project-list');
        
        // Iteriamo sui progetti nel JSON
        data.project.forEach(project => {
          // Creiamo l'elemento <li> con la classe "project-item active"
          const projectItem = document.createElement('li');
          projectItem.classList.add('project-item', 'active');
  
          // Creiamo il contenuto HTML
          projectItem.innerHTML = `
            <a href="${project.link}" target="_blank">
              <figure class="project-img">
                <div class="project-item-icon-box">
                  <ion-icon name="eye-outline"></ion-icon>
                </div>
                <img src="${project.img}" alt="${project.Title}" loading="lazy">
              </figure>
              <h3 class="project-title">${project.Title}</h3>
              <p class="project-description">${project.description}</p>
            </a>
          `;
  
          // Aggiungiamo l'elemento <li> alla lista
          projectList.appendChild(projectItem);
        });
      })
      .catch(error => console.error('Errore durante il fetch dei progetti:', error));
  });
  