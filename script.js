// 1. MESSAGE DYNAMIQUE

let compteur = 0;

const messages = [
    "Bienvenue sur ma page personnelle ",
    "Je suis passionné par le développement informatique ",
    "Merci d’avoir pris le temps de me découvrir "
];

function afficherMessage() {
    document.getElementById("message").innerText = messages[compteur];
    compteur++;

    if (compteur >= messages.length) {
        compteur = 0;
    }
}


// 2. CHANGEMENT DE COULEUR

function changerCouleur() {
    const section = document.getElementById("interaction");

    section.style.backgroundColor =
        section.style.backgroundColor === "rgb(240, 248, 255)"
        ? "#ffffff"
        : "#f0f8ff";
}



// 3. AFFICHER / CACHER MA PASSION

function togglePassion() {
    const passion = document.getElementById("passion");

    if (passion.style.display === "none") {
        passion.style.display = "block";
    } else {
        passion.style.display = "none";
    }
}
