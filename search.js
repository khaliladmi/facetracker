// Fonction de recherche
/*document.getElementById('searchBtn').addEventListener('click', async () => {
    const searchQuery = document.getElementById('searchQuery').value.trim();

    if (!searchQuery) {
        alert('Please enter a search query.');
        return;
    }

    try {
        // Appelle le backend pour effectuer la recherche
        const response = await fetch(`http://localhost:7071/api/sreach?query=${encodeURIComponent(searchQuery)}`);
        console.log(response); // Logge la réponse brute
        const results = await response.json();
        console.log(results);

        if (response.ok) {
            const results = await response.json();

            // Affiche les résultats de la recherche
            displaySearchResults(results);
        } else {
            alert('No results found.');
            document.getElementById('searchResults').innerHTML = ''; // Efface les résultats précédents
        }
    } catch (error) {
        console.error("Search error:", error);
        alert('An error occurred during the search.');
    }
});

// Fonction pour afficher les résultats
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Efface les résultats précédents

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Crée une table pour afficher les résultats
    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Image</th>
        </tr>
    `;

    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.id}</td>
            <td>${result.name}</td>
            <td>${result.age}</td>
            <td>${result.adresse}</td>
            <td><img src="${result.image_url}" alt="${result.name}'s Image" width="100"></td>
        `;
        table.appendChild(row);
    });

    resultsContainer.appendChild(table);
}*/
 // Fonction de recherche
document.getElementById('searchBtn').addEventListener('click', async () => {
    const searchQuery = document.getElementById('searchQuery').value.trim();

    if (!searchQuery) {
        alert('Please enter a search query.');
        return;
    }

    try {
        // Appelle le backend pour effectuer la recherche
        const response = await fetch(`https://facetracker.azurewebsites.net/api/sreach?code=4RMjfT4JV84OCinWHZ3fkD7jMayJGf8c6HPeEfBAhkJmAzFuWHg2Dw%3D%3D&query=${encodeURIComponent(searchQuery)}`);

        
        if (response.ok) {
            const results = await response.json();

            // Affiche les résultats de la recherche
            displaySearchResults(results);
        } else {
            alert('No results found.');
            document.getElementById('searchResults').innerHTML = ''; // Efface les résultats précédents
        }
    } catch (error) {
        console.error("Search error:", error);
        alert('An error occurred during the search.');
    }
});

// Fonction pour afficher les résultats
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Efface les résultats précédents

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>image</th>
        </tr>
    `;

    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.id}</td>
            <td>${result.name}</td>
            <td>${result.age}</td>
            <td>${result.adresse}</td>
            <td><img src="${result.image_url}" alt="${result.name}'s Image" width="100"></td>
        `;
        table.appendChild(row);
    });

    resultsContainer.appendChild(table);
}
