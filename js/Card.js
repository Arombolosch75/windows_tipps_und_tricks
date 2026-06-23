class Card {
    constructor(title, url, desc, logo) {
        this.title = title;
        this.url = url;
        this.desc = desc;
        this.logo = logo; // Neu hinzugefügt
    }

    render() {
        return `
            <div class="card p-3 shadow-sm">
                <img src="${this.logo}" alt="${this.title} Logo" class="card-img-top mb-2" style="width: 50px; height: 50px; object-fit: contain;">
                <div class="card-body p-0">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text small text-muted">${this.desc}</p>
                    <a href="${this.url}" target="_blank" class="btn btn-outline-primary btn-sm">Besuchen</a>
                </div>
            </div>
        `;
    }
}