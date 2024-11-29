function RemplacerPar(imag){
    console.log("rentree RemplacerPar");
    var mavarlocale=document.getElementById('mainImage');
    mavarlocale.setAttribute("src",imag);
}

function preparerRemplacementPeriodique(){
    console.log("rentree preparerRemplacementPeriodique");
    var monImg=document.getElementById("mainImage");
    var monTableau=["./images/img0.gif","./images/img1.gif","./images/img2.gif","./images/img3.gif",];
    var numeroCelluleTab=0;
    function changerImage(){
        monImg.setAttribute("src",monTableau[numeroCelluleTab]);
        numeroCelluleTab++;
        if (numeroCelluleTab>=monTableau.length) {
            numeroCelluleTab=0;
        }
    }
    setInterval(changerImage,1000);

}

window.onload=function(){
    this.console.log("rentree onload");
    preparerRemplacementPeriodique();
}