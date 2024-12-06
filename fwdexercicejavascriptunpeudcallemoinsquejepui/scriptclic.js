function preparerRemplacementPeriodique(){
    console.log("Rentrée preparerRemplacementPeriodique");
    var monImg=document.getElementById("mainImage");
    var monTableau=["./images/Capture4.JPG","./images/Capture3.JPG","./images/Capture2.JPG","./images/Capture1.JPG", "./images/Capture5.JPG"];
    var i=0;
    function changerImage(){
		console.log("Coucou les CIEL IR 2");
        monImg.setAttribute("src", monTableau[i]);
        i++;
        if (i>=monTableau.length) {
            i=0;
        }
	}
    setInterval(changerImage, 1000);
}

function preparerRemplacementPeriodique_1(){
    var monImg=document.getElementById("mainImage_1");
    var monImg_1=document.getElementById("mainImage_2");
    var monTableau=["./images/cri.gif", "./images/Calme.JPG"];
    var monTableau_1=["./images/explosion.gif","./images/voiture.JPG"];
    var i=0;
    function changerImage_1(){
        monImg.setAttribute("src", monTableau[i]);
        monImg_1.setAttribute("src", monTableau_1[i]);
        i++;
        if (i>=monTableau.length && i>=monTableau_1.length) {
            i=0;
        }
	}
    setInterval(changerImage_1, 5000);
}

window.onload=function(){
    this.console.log("Rentrée onload");
    preparerRemplacementPeriodique();
    preparerRemplacementPeriodique_1();
}
