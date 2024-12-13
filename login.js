document.getElementById('loginBtn').addEventListener('click', async (event) => {
    // Empêcher le comportement par défaut (soumission du formulaire)
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Envoi de la requête au backend (fonction Azure)
        let response = await fetch(`https://facetrackerv2.azurewebsites.net/api/LoginFunction?username=${username}&password=${password}`);
        
        if (response.ok) {
            // Si l'authentification réussit, obtenir les données renvoyées
            let data = await response.json();

            // Redirection vers le profil avec les données (username et badge)
            window.location.href = `profile.html?username=${data.username}&badge=${data.badge}`;
        } else {
            alert('Identifiants incorrects.');
        }
    } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        alert('Erreur lors de la connexion.');
    }
});
