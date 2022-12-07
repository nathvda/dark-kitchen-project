// Filtre les patisseries
function filterPastries() {
    let filtresPatisserie = document.querySelector('input[name="patisserie"]:checked').value;
    let patisserieMenu = document.querySelector(`.article`);
    let itemsToHide =  patisserieMenu.querySelectorAll(`div`);

    for (el of itemsToHide){
        
       if (el.classList.contains(`${filtresPatisserie}`) || (filtresPatisserie === "")){

        el.classList.remove("hidePastry");

       } else {
        el.classList.add("hidePastry");
    }
}

displayInCart();

}

function removeItem(question){
    question.remove();
}

/*function updateFinalPrice(){
    let finalPrice = document.get
}*/
    

// Affiche une ligne dans le résumé du panier.
function displayInCart() {
    let panierDis = document.getElementById('patisseries__cartPreview');
    
    // Ligne
    let panierItem = document.createElement("li");
    let panierItemText = document.createTextNode("Gateau");
    
    // Prix
    let panierPrice = document.createElement("div");
    let panierPriceText = document.createTextNode("Prix");

    // Nombre d'unités
    let panierUnites = document.createElement("div");
    let panierUnitesText = document.createTextNode("Unites");

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
        removeItem(panierItem)
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

/*
<div class="patisseries__commande">
    <div id="patisseries__cartPreview">
        <!-- CONTENU DYNAMIQUE -->
    </div>
    <button>Commander</button>
</div>
</article> */