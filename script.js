const messages = {
    1: "Ohhhh mince que s'est-il passé, tu as surement besoin d'un câlin, je peux venir te le faire..",
    2: "Bon c'est pas fameux aujourd'hui, peut être juste la fatigue ou alors il s'est passé quelque chose, tu veux te changer les idées ?",
    3: "Ça à l'air très moyen tout ça, tu veux faire une petite balade en amoureux",
    4: "Waaaaw 4 étoiles c'est déjà pas mal, je suis sure qu'il manque juste moi pour avoir la cinquième étoiles",
    5: "Journée parfaite, bah dit donc c'est rare ça, tu me racontes tout ça ??"
};

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const note = star.dataset.note;
        document.getElementById('message').textContent = messages[note];
        document.getElementById('message').classList.remove('hidden');
    });
});

const mots = [
    "Je t'aime", "T'es beau", "Mon chéri", "Mon amour", "Le plus doux", "Le plus gentil",
    "Mon confident", "Mon pilier", "Le plus drôle", "T'es parfait", "Mon ange", "Mon trésor",
    "Le plus fort", "T'es un roi", "T'es unique", "Mon soleil", "T'es magique", "Mon coeur",
    "Le plus stylé", "T'es craquant", "T'es sexy", "Mon ours", "Mon nounours", "Mon âme sœur",
    "Mon bébé", "T'es incroyable", "T'es trop fort", "T'es mon tout", "T'es mon homme", "T'es mon rêve"
];

document.getElementById("voirMot").addEventListener("click", () => {
    const day = new Date().getDate();
    const mot = mots[(day - 1) % mots.length];
    document.getElementById("mot").textContent = mot;
    document.getElementById("mot").classList.remove("hidden");
});
