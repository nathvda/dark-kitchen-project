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

displayInCart();
sumCart();

}

function sumCart(){
    let panierDis = document.getElementById('patisseries__cartPreview');
    let lignes = panierDis.querySelectorAll("li");
    let somme = 0;
    let nombreUnites = 0;

    for(el of lignes){

        let panierPrix = Number(el.querySelector(".Prix").innerHTML);
        let panierUnites = Number(el.querySelector(".Unites").innerHTML);
        console.log(panierPrix);
        console.log(nombreUnites);    
        somme += panierPrix; 
        nombreUnites += panierUnites;

    }

    afficherPrixtotal(somme,nombreUnites);


};

// fonction de prix du panier.
function afficherPrixtotal(somme, nombreunites){

    // prix
    let conteneurPrix = document.querySelector(".preview__prix");
    conteneurPrix.innerHTML = `${somme.toFixed(2)}`;

    // unités
    let conteneurUnites = document.querySelector(".preview__unites");
    conteneurUnites.innerHTML = nombreunites;
}

function removeItem(question){
    question.remove();
    sumCart();
}


// Affiche une ligne dans le résumé du panier.
function displayInCart() {
    let panierDis = document.getElementById('patisseries__cartPreview');
    
    // Ligne
    let panierItem = document.createElement("li");
    let panierItemText = document.createTextNode("Gateau");
    
    // Prix
    let panierPrice = document.createElement("div");
    let panierPriceText = document.createTextNode("15.30");

    // Nombre d'unités
    let panierUnites = document.createElement("div");
    let panierUnitesText = document.createTextNode("5");

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
}

let filtreswrap = document.querySelector('.patisserie_filters');

// Déclenche les filtres
filtreswrap.addEventListener('change', filterPastries);

//Pour tous les articles, créer un évènement pour chaque clic
//sur les bouttons plus ou moins : mise à jour du panier 
//avec le nom de l'article, le prix, le nombre d'unités et un boutton supprimer
var listeArticles = document.querySelectorAll("section");
for (let listeArticle of listeArticles){
    var bouttons = listeArticle.("button");
}




/*
<div class="patisseries__commande">
    <div id="patisseries__cartPreview">
        <!-- CONTENU DYNAMIQUE -->
    </div>
    <button>Commander</button>
</div>
</article> */