let new_button = document.createElement("button");
document.body.prepend(new_button);
new_button.setAttribute("id", "button");
new_button.textContent = "Cliquez ici pour dire bonjour";
function saisie() {
  let votre_nom = prompt("Veuillez saisir votre nom : ");
  if (confirm("Votre nom est bien : " + votre_nom + " ?")) {
    alert("Hello " + votre_nom);
  } else {
    saisie();
  }
}
new_button.setAttribute("onclick", "saisie()");
