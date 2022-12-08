let darkmodeBouton = document.getElementById("darkmode");

function turnDark(){
    let cssTarget = document.getElementById('styleToggle');

   if (darkmodeBouton.classList.contains("darkmode")){
    darkmodeBouton.classList.remove("darkmode");
    darkmodeBouton.classList.add("lightmode");
    cssTarget.href = 'darkmode.css';
    console.log('clair');

   } else if (darkmodeBouton.classList.contains("lightmode")){
    darkmodeBouton.classList.remove("lightmode");
    darkmodeBouton.classList.add("darkmode");
    cssTarget.href = 'style.css';
   }
}
// Filtre les patisseries
function filterPastries() {
    let filtresPatisserie = document.querySelector('input[name="patisserie"]:checked').value;
    let patisserieMenu = document.querySelector(`.article`);
    let itemsToHide =  patisserieMenu.querySelectorAll(`section`);

    for (el of itemsToHide){
        
       if (el.classList.contains(`${filtresPatisserie}`) || (filtresPatisserie === "")){

        el.classList.remove("hidePastry");

       } else {
        el.classList.add("hidePastry");
    }
}


sumCart();

}

function sumCart(){
    let panierDis = document.getElementById('patisseries__cartPreview');
    let lignes = panierDis.querySelectorAll("li");
    let somme = 0;
    let nombreUnites = 0;

    for(el of lignes){

        let panierPrix = el.querySelector(".Prix").innerHTML;
        let panierPrixCut = panierPrix.slice(0,-1);
        let pricewithDot = panierPrixCut.replace(",", ".");
        
        let panierUnites = Number(el.querySelector(".Unites").innerHTML);

        console.log(nombreUnites);    
        somme +=  (Number(pricewithDot) * panierUnites);
        console.log(somme); 
        nombreUnites += panierUnites;
    }
    
    afficherPrixtotal(somme,nombreUnites);


};



// fonction de prix du panier.
function afficherPrixtotal(somme, nombreunites){

    // prix
    let conteneurPrix = document.querySelector(".preview__prix");  
    conteneurPrix.innerHTML = `${somme.toFixed(2)}€`;

    // unités
    let conteneurUnites = document.querySelector(".preview__unites");
    conteneurUnites.innerHTML = nombreunites;
}

function removeItem(question){
    question.remove();
    sumCart();
}

/*function updateFinalPrice(){
    let finalPrice = document.get
}*/

// 2 Fonctions pour incrémenter/décrémenter le nombre d'articles
const decrement = (e) => {
    let nombre = Number(e.target.nextElementSibling.textContent);
    if(nombre > 0){
        nombre -= 1;
        e.target.nextElementSibling.textContent = `${nombre}`;

        if (nombre == 0){
            //Supprimer l'article du panier

        }
        else{
            //Décrémenter panierUnitesText 
            
        }
    }
}

const increment = (e) => {
    let nombre = Number(e.target.previousElementSibling.textContent);
    nombre += 1;
    e.target.previousElementSibling.textContent = `${nombre}`;
    let art = e.target.parentElement.parentElement.children;
    //console.log(art[1]);
    if (nombre == 1){
        displayInCart(art[1].textContent, art[3].textContent, nombre);
    }
    else {
        let verif = document.getElementById('patisseries__cartPreview');
        for (let el of verif.children){
            //console.log(el);
            //console.log(el.firstChild.textContent);
            //console.log(e.target.parentElement.parentElement.children[1].textContent);
            if(el.firstChild.textContent == e.target.parentElement.parentElement.children[1].textContent){
                //console.log(el.children[1].textContent);
                el.children[1].textContent = `${nombre}`;
            }
        }
    }
    //}
    //if (nombre == 1){
        //
    //}
    //displayInCart()
    sumCart();
}

// Affiche une ligne dans le résumé du panier.
function displayInCart(gateau, prix, nb) {
    let panierDis = document.getElementById('patisseries__cartPreview');
    
    // Ligne
    let panierItem = document.createElement("li");
    let panierItemText = document.createTextNode(gateau);
    
    
    // Prix
    let panierPrice = document.createElement("div");
    let panierPriceText = document.createTextNode(prix);

    // Nombre d'unités
    let panierUnites = document.createElement("div");
    let panierUnitesText = document.createTextNode(nb);

    // Bouton
    let panierButton = document.createElement("button");
    let panierButtonText = document.createTextNode("Supprimer");

    // Ajouter des classes pour le css
    panierItem.classList.add("LignePanier");
    panierUnites.classList.add("Unites");
    panierPrice.classList.add("Prix");
    panierButton.classList.add("Enlever");

    panierButton.setAttribute("type", "button");

    // Évenement de suppression
    panierButton.addEventListener('click', (e) => {
        removeItem(panierItem);
    });

    panierItem.appendChild(panierItemText);
    panierPrice.appendChild(panierPriceText);
    panierUnites.appendChild(panierUnitesText);
    panierButton.appendChild(panierButtonText);

    panierItem.appendChild(panierPrice);
    panierItem.appendChild(panierUnites);
    panierItem.appendChild(panierButton);
    panierDis.appendChild(panierItem);

    sumCart();
}



let filtreswrap = document.querySelector('.patisserie_filters');

// Déclenche les filtres
filtreswrap.addEventListener('change', filterPastries);

//Pour tous les articles, créer un évènement pour chaque clic
//sur les bouttons plus ou moins : mise à jour du panier 
//avec le nom de l'article, le prix, le nombre d'unités et un boutton supprimer
let listeArticles = document.querySelectorAll("section");

for (let listeArticle of listeArticles){

    let bouttonMinus = listeArticle.lastElementChild.firstElementChild;
    let bouttonPlus = listeArticle.lastElementChild.lastElementChild;
    //Les deux lignes suivantes servent à initialiser la quantité à 1.
    //Peut-être pourrait-on le faire directement dans le HTML
    let nombreArticles = document.createTextNode("0");
    bouttonMinus.nextElementSibling.appendChild(nombreArticles);

    bouttonMinus.addEventListener('click', decrement);
    bouttonPlus.addEventListener('click', increment);
}

darkmodeBouton.addEventListener("click", turnDark);