document.getElementById("inscription-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    
    if (nom && prenom) {
        document.getElementById("message").innerText = "Inscription réussie ! Merci " + prenom + " 🎉";
        document.getElementById("inscription-form").reset();
    } else {
        document.getElementById("message").innerText = "Veuillez remplir tous les champs.";
    }
});
