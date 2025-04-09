document.addEventListener("DOMContentLoaded", function() {
    console.log("Pagina articolo caricata con successo!");

    // Verifica se l'URL contiene #articoli e, in caso affermativo, esegue lo scroll
    if (window.location.hash === "#articoli") {
        const articoliSection = document.querySelector('#articoli');
        if (articoliSection) {
            articoliSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Funzione per aprire l'articolo
function openArticle(articleUrl) {
    window.location.href = articleUrl; // Cambia la pagina per aprire l'articolo
}

function closePage() {
    window.location.href = 'index.html#articoli'; // Usa il percorso relativo
}

// Funzione per copiare il link
function copyLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copiato!');
    });
}

// Funzione per condividere su WhatsApp
function shareOnWhatsApp() {
    const link = window.location.href;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
    window.open(whatsappUrl, '_blank');
}

// Funzione per condividere su Facebook
function shareOnFacebook() {
    const link = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    window.open(facebookUrl, '_blank');
}

// Funzione per condividere su Instagram (avviso per la mancanza di supporto)
function shareOnInstagram() {
    alert("Instagram non supporta la condivisione diretta tramite link.");
}


