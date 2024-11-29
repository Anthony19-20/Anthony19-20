function preparerApparitionTexte(){
    console.log("Rentrée preparerApparitionTexte");
    /*var broch=document.getElementById("brochures");
    var monImg=document.getElementById("mainImage");
    var tour=document.getElementById("tourBrochures");
    broch.onclick=function (){ // Onlick est un event pour éxecuter la fonction
        if (broch.checked) monImg.style.display="block";
        else monImg.style.display="none";
    }
    broch.onclick=function (){ // Onlick est un event pour éxecuter la fonction
        if (broch.checked) tour.style.display="block";
        else tour.style.display="none";
    }*/
    var monTexte=document.getElementById("h1");
    var monTableau=["<p>Bonjour</p>", "</br><p>Tu vas bien ?</p>", "</br></br><p>Tu fais quoi ?</p>", "</br></br></br><p>Tu ne t'ennuies pas au moins ?<p>"];
    var i=0;
    function changerTexte(){
            monTexte.innerHTML = monTableau[i];
            monTexte.style.display="block";
            i++;
        if (i>=monTableau.length) {
            i=0;
        }
    }
    setInterval(changerTexte, 1000);
}

window.onload=function(){
    this.console.log("Rentrée onload");
    preparerApparitionTexte();
}
