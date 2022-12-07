let darkmodeBouton = document.querySelector(".darkmode");

function turnDark(){
    let cssTarget = document.getElementById('styleToggle');
   if (cssTarget.href == "style.css"){
    console.log('clair');
   } else if(cssTarget.href == "darkmode.css"){
   console.log('fonce');
  cssTarget.href = 'darkmode.css';
   }
}


darkmodeBouton.addEventListener("click", turnDark);