// Récupère les paramètres de l'URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
const badge = urlParams.get('badge');

// Affiche les informations sur la page
document.getElementById('userName').textContent = username;
document.getElementById('badge').textContent = badge;

// Si aucune donnée n'est fournie, redirige vers la page de connexion
if (!username || !badge) {
    alert("You are not logged in!");
    window.location.href = "index.html";
}
