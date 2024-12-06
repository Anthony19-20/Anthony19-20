function RemplacerPar(imag){
    console.log("Rentrée RemplacerPar");
    var mavarlocale=document.getElementById('mainImage');
    mavarlocale.setAttribute("src", imag);
}

function preparerRemplacement(){
    console.log("Rentrée preparerRemplacement");
    setTimeout(RemplacerPar, 5000, "./images/giphy2.gif");
}

window.onload=function(){
    this.console.log("Rentrée onload");
    preparerRemplacement();
}
