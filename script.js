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


darkmodeBouton.addEventListener("click", turnDark);