// Filtre les patisseries
function filterPastries() {
    let filtresPatisserie = document.querySelector('input[name="patisserie"]:checked').value;
    let patisserieMenu = document.querySelector(`.patisseries__wrapper`);
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
    


function displayInCart() {
    let panierDis = document.getElementById('patisseries__cartPreview');
    
    // Ligne
    let panierItem = document.createElement("li");
    let panierItemText = document.createTextNode("Gateau");
    
    // Prix
    let panierPrice = document.createElement("div");
    let panierPriceText = document.createTextNode("Prix");

    // Bouton
    let panierButton = document.createElement("button");
    let panierButtonText = document.createTextNode("-");

    panierItem.classList.add("LignePanier");
    panierButton.classList.add("Enlever");
    panierPrice.classList.add("Prix");

    panierButton.setAttribute("type", "button");

    panierButton.addEventListener('click', (e) => {
        removeItem(panierItem)
    });

    panierItem.appendChild(panierItemText);
    panierPrice.appendChild(panierPriceText);
    panierButton.appendChild(panierButtonText);

    panierItem.appendChild(panierPrice);
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