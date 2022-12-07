


// Filtre les patisseries
function filterPastries(){
    let filtresPatisserie = document.querySelector('input[name="patisserie"]:checked').value;
    console.log(filtresPatisserie);
    let patisserieMenu = document.querySelector(`.patisseries__wrapper`);
    let itemsToHide =  patisserieMenu.querySelectorAll(`div`);
    console.log(itemsToHide);

    for (el of itemsToHide){
        
       if (el.classList.contains(`${filtresPatisserie}`)){

        el.classList.remove("hidePastry");

       } else {

        el.classList.add("hidePastry");
    }
}

}

let filtreswrap = document.querySelector('.patisserie_filters');
console.log(filtreswrap);

filtreswrap.addEventListener('change', filterPastries);





/*
<article id="block__Commande">
<h2>Passer commande</h2>
<div class="patisserie_filters">
    <label for="chocolat">Chocolat</label>
    <input id="chocolat" name="patisserie" type="radio" value="chocolat">
    <label for="fruits">Aux fruits</label>
    <input id="fruits" name="patisserie" type="radio" value="fruits">
    <label for="gluten">Sans gluten</label>
    <input id="gluten" name="patisserie" type="radio" value="gluten">
    <label for="lactose">Sans lactose</label>
    <input id="lactose" name="patisserie" type="radio" value="lactose">
</div>
<div class="patisseries__wrapper">
    <!-- CONTENU DYNAMIQUE -->
    <div class="fruits">Fruits</div>
    <div class="chocolat">chocolat</div>
    <div class="gluten">gluten</div>
    <div class="lactose">lactose</div>
    <div class="fruits chocolat">Fruits & chocolat</div>
    <div class="chocolat gluten">chocolat & gluten</div>
    <div class="gluten lactose">gluten & lactose</div>
    <div class="lactose fruits">lactose fruits</div>
</div>   
<div class="patisseries__commande">
    <div id="patisseries__cartPreview">
        <!-- CONTENU DYNAMIQUE -->
    </div>
    <button>Commander</button>
</div>
</article> */