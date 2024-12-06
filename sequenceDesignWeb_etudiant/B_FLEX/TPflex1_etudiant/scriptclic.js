function preparerRemplacementPeriodique(){
    console.log("Rentrée preparerRemplacementPeriodique");
    var monImg=document.getElementById("mainImage");
    var monTableau=["./images/img0.gif","./images/img1.gif","./images/img2.gif","./images/img3.gif","./images/giphy.gif"];
    var numeroCelluleTab=0;
    function changerImage(){
		console.log("Coucou les CIEL IR 2");
        monImg.setAttribute("src", monTableau[numeroCelluleTab]);
        numeroCelluleTab++;
        if (numeroCelluleTab>=monTableau.length) {
            numeroCelluleTab=0;
        }
	}
    setInterval(changerImage, 1000);
}

window.onload=function(){
    this.console.log("Rentrée onload");
    preparerRemplacementPeriodique();
}
