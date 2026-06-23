// Wartet, bis das gesamte HTML-Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {
    const navbarPlaceholder = document.getElementById('bootstrap-navbar');
    
    if (navbarPlaceholder) {
        // Lädt die navbar.html und fügt sie in den Platzhalter ein
        fetch('navbar.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Netzwerk-Antwort war nicht ok');
                }
                return response.text();
            })
            .then(data => {
                navbarPlaceholder.innerHTML = data;
                // Aktiv-Funktion ausführen, nachdem die Navbar im HTML gelandet ist
                setActiveLink();
            })
            .catch(error => console.error('Fehler beim Laden der Navbar:', error));
    }
});

function setActiveLink() {
    // Holt den aktuellen Dateinamen aus der URL
    let currentPage = window.location.pathname.split("/").pop();
    
    // Falls die URL leer ist (z.B. Hauptseite auf GitHub Pages), nutzen wir "index.html"
    if (currentPage === "" || currentPage === undefined) {
        currentPage = "index.html";
    }

    // Sucht alle Links in der geladenen Navbar
    const navLinks = document.querySelectorAll('#nav-links .nav-link');

    // Vergleicht jeden Link mit der aktuellen Seite
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}