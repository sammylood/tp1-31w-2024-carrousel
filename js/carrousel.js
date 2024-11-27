(function () {
  // console.log("Vive JavaScript");
  let carrousel__bouton = document.querySelector(".carrousel__bouton");
  let carrousel__x = document.querySelector(".carrousel__x");
  let carrousel = document.querySelector(".carrousel");
  let carrousel__image = document.querySelector(".carrousel__image");
  let carrousel__figure = document.querySelector(".carrousel__figure");
  let galerie = document.querySelector(".galerie");
  let galerie__img = document.querySelectorAll(".galerie img");
  let carrousel__gauche = document.querySelector(".carrousel__gauche");
  let carrousel__droite = document.querySelector(".carrousel__droite");
  
  console.log(galerie__img.length);

carrousel__droite.addEventListener("click", function(){
  index++;
  afficheImage(index);
})
carrousel__gauche.addEventListener("click", function(){
  index--;
  afficheImage(index);
})

  function remplirCarrousel() {
    for (elm of galerie__img) {
      console.log(elm.src);
      //data set sur chacune des images
      //un ecouteur sur chaque element de la galerie
      //chaque ecouteur extrait le numéro de l'image
      let img = document.createElement("img");
      img.src = elm.src; // copie une image de la galerie vers le carrousel
      img.classList.add("carrousel__img");
      carrousel__figure.appendChild(img);
    }
  }
  /**
   * Création d'un radio
   * créer un élément input et ajouter les attributs type, class, value
   * @param {
   * } i numéro de radio
   */
  function creationRadio(i){
//creation d'un seul radio
  }

  carrousel__bouton.addEventListener("click", function () {
    if (carrousel__figure.innerHTML === "") {
      remplirCarrousel();
    }
    afficheImage(4);
    carrousel.classList.add("carrousel--ouvrir");
    console.log("Ouvrir");
  });

  carrousel__x.addEventListener("click", function () {
    carrousel.classList.remove("carrousel--ouvrir");
    console.log("fermer");
  });

  function afficheImage(index){
    let carrousel__img = document.querySelectorAll(".carrousel__img");
    for (let i = 0; i < carrousel__img.length; i++) {
      carrousel__img[i].classList.remove("carrousel__img--visible");
    }
    carrousel__img[index].classList.add("carrousel__img--visible");
  }
})();
