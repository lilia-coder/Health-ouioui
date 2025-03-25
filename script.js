// Fonction pour afficher un message de confirmation après la sauvegarde
function showConfirmation() {
    const confirmationMessage = document.createElement("p");
    confirmationMessage.textContent = "Données sauvegardées ! ✅";
    confirmationMessage.style.color = "green";
    confirmationMessage.style.textAlign = "center";
    confirmationMessage.style.fontWeight = "bold";
    document.body.appendChild(confirmationMessage);
  
    // Supprimer le message après 2 secondes
    setTimeout(() => {
      confirmationMessage.remove();
    }, 2000);
  }
  
  // Fonction pour sauvegarder les données dans
  
  