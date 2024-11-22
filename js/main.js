//Import des modules

import { Connexion, Inscription } from "./Modules/Inscription.js";

//Chargeons les modules au demarage des pages
let path = location.pathname //location est un objet js qui permet de localiser l'url. et la propriété pathname affiche l'url de la page en cours d'affichage

document.addEventListener("DOMContentLoaded", () => {
    if(path && path === "/inscription.html") {
        Inscription()
    } else if(path === "/index.html" || path === "/") {
        Connexion()
    }
})