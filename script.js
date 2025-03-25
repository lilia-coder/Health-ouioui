// Fonction pour sauvegarder les données dans localStorage
function saveData() {
    const water = document.getElementById('water').value;
    const exercise = document.getElementById('exercise').value;
    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('notes').value;
  
    const data = {
      water,
      exercise,
      mood,
      notes,
      date: new Date().toLocaleDateString()
    };
  
    // Sauvegarder dans localStorage
    let savedData = JSON.parse(localStorage.getItem('healthData')) || [];
    savedData.push(data);
    localStorage.setItem('healthData', JSON.stringify(savedData));
  
    displaySummary();
  }
  
  // Fonction pour afficher le résumé des données sauvegardées
  function displaySummary() {
    const savedData = JSON.parse(localStorage.getItem('healthData')) || [];
    
    let summaryText = '';
    
    if (savedData.length > 0) {
      summaryText = savedData.map(item => {
        return `
          <div>
            <h3>${item.date}</h3>
            <p>Verres d'eau : ${item.water}</p>
            <p>Sport : ${item.exercise}</p>
            <p>Humeur : ${item.mood}</p>
            <p>Notes : ${item.notes}</p>
          </div>
        `;
      }).join('');
    } else {
      summaryText = 'Aucune donnée sauvegardée.';
    }
  
    document.getElementById('summary-text').innerHTML = summaryText;
  }
  
  // Initialiser l'affichage du résumé
  displaySummary();
  