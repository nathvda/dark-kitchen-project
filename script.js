// Filtre les patisseries
function filterPastries() {
    let filtresPatisserie = document.querySelector('input[name="patisserie"]:checked').value;
    console.log(filtresPatisserie);
    let itemsToHide =  document.querySelectorAll(`.${filtresPatisserie}`);
    console.log(itemsToHide);
    for (el of itemsToHide){
        
       if (el.classList.contains(`${filtresPatisserie}`) || (filtresPatisserie === "")){

        el.classList.remove("hidePastry");

       } else {

        el.classList.add("hidePastry");
    }
}
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