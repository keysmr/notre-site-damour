
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const message = document.getElementById("message");
  const lastRatedDate = localStorage.getItem("lastRatedDate");
  const today = new Date().toISOString().split("T")[0];

  if (lastRatedDate === today) {
    stars.forEach((star) => {
      star.style.pointerEvents = "none";
      star.style.opacity = 0.5;
    });
    message.innerText = "Tu as déjà noté ta journée aujourd'hui mon amour 💌";
    message.style.fontFamily = "'Pacifico', cursive";
    return;
  }

  stars.forEach((star, index) => {
    star.addEventListener("click", function () {
      const rating = index + 1;
      localStorage.setItem("lastRatedDate", today);
      let response = "";
      switch (rating) {
        case 1:
          response = "Ohhhh mince que s'est-il passé, tu as surement besoin d'un câlin, je peux venir te le faire..";
          break;
        case 2:
          response = "Bon c'est pas fameux aujourd'hui, peut être juste la fatigue ou alors il s'est passé quelque chose, tu veux te changer les idées ?";
          break;
        case 3:
          response = "Ça à l'air très moyen tout ça, tu veux faire une petite balade en amoureux";
          break;
        case 4:
          response = "Waaaaw 4 étoiles c'est déjà pas mal, je suis sure qu'il manque juste moi pour avoir la cinquième étoiles";
          break;
        case 5:
          response = "Journée parfaite, bah dit donc c'est rare ça, tu me racontes tout ça ??";
          break;
      }
      message.innerText = response;
      message.style.fontFamily = "'Pacifico', cursive";

      // Disable all stars after selection
      stars.forEach((s) => {
        s.style.pointerEvents = "none";
        s.style.opacity = 0.5;
      });
    });
  });
});
