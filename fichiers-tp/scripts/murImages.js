'use strict';

/* fonction exécutée au chargement de la page, elle doit :
 *  - créer les éléments images à partir des données de *dataImages*
 *  - ajouter ces éléments images dans l'élément #mur (appendChild)
 *  - faire en sorte que le survol d'une de ces images appelle la fonction *details*
 *
 *  - mettre en place l'appel de la fonction *filtreImages* à chaque événement *keyup*
 *    sur l'input #filtre
 */
 const init = () => {
   // création et ajout des images dans #mur
   // Question 1
   const IMG = dataImages.map(item => createImage(item));
   IMG.forEach(img => document.getElementById("mur").appendChild(img));
   IMG.forEach(img => img.addEventListener("mouseover", details));

   // gestion de #filtre
   const filtre = document.getElementById('filtre');
   filtre.value = '';
   filtre.addEventListener('keyup', filtreImages);
 }


 window.addEventListener('DOMContentLoaded', init);

 /* crée un élément HTML IMG dont les attributs src, alt et title sont définis par l'objet imageData fourni
  * @return l'élément HTML IMG créé
  */
 const createImage = imageData => {
   const img = new Image();
   img.src = imageData.image;
   img.alt = imageData.texte;
   img.title = imageData.texte;
   return img;
 }


 /* fonction listener appelée lors du survol de l'une des images
  * les informations de l'image survolée (event.target) sont utilisées pour nourrir l'image dans div#details
  * et le texte de #legende
  */
 const details = event => {
   const image = document.querySelector('div#details img');
   image.src = event.target.src;
   image.alt = event.target.alt;
   document.getElementById('legende').textContent = event.target.title;
 }


 // Question 3
 /* fonction listener appelée à chaque fois qu'une saisie est fait dans l'input #filtre
 *  Cette fonction doit sélectionner les éléments IMG dans #mur,
 *   ceux dont l'attribut *title* contient le texte de #filtre doivent être affichés,
 *     les autres doivent être masqués.
 *   On ne s'occupe pas de la casse des caractères (minuscules ou majuscules) lors du filtrage.
 */
 const filtreImages = event => {
   const back = document.querySelector("#mur");
   const img = back.querySelectorAll("img");
   Array.from(img).forEach(item => item.title.toLowerCase().includes(event.target.value.toLowerCase()) ? item.style.display = "initial" : item.style.display = "none");
 }
