// app.js
function loadGroup(groupName) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = ''; // Leeren

    const items = internetLinks[groupName] || [];
    
// In app.js innerhalb der forEach-Schleife:
items.forEach(item => {
    // Hier wird das Logo aus dem item-Objekt mitgegeben
    const card = new Card(item.title, item.url, item.desc, item.logo);
    container.innerHTML += card.render();
});
}

// app.js
document.addEventListener("DOMContentLoaded", () => {
    loadGroup('social'); // Lädt die Daten beim Start
});