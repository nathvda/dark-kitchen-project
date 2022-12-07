let darkmodeBouton = document.querySelector(".darkmode");

function turnDark(){
    let cssTarget = document.getElementById('styleToggle');
    cssTarget.href = 'darkmode.css';
}
darkmodeBouton.addEventListener("click", turnDark);