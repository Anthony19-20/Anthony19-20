function RemplacerPar(imag){
    console.log("rentree RemplacerPar");
    var mavarlocale=document.getElementById('mainImage');
    mavarlocale.setAttribute("src",imag);
}

function preparerRemplacement(){
    console.log("rentree preparerRemplacement");
    setTimeout(RemplacerPar,5000,"./images/giphy2.gif");
}

window.onload=function(){
    this.console.log("rentree onload");
    preparerRemplacement();
}