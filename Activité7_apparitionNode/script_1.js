function preparerApparitionMenu(){
    console.log("Rentrée preparerApparitionMenu");
    var broch=document.getElementById("brochures");
    var tour=document.getElementById("tourBrochures");
    broch.onclick=function (){
        if (broch.checked) tour.style.display="block";
        else tour.style.display="none";
    }
}

window.onload=function(){
    this.console.log("Rentrée onload");
    preparerApparitionMenu();
}
