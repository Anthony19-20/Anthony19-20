function Vaisseau(){
    console.log("Rentrée Vaisseau");
    var monImg=document.getElementById("varJS");
    var monTableau=["./images/Extra_terrestre.jpg","./images/Vaisseau_Spatial.jpg"];
    var numeroCelluleTab=0;
    var i=0;
    function deplacement(){
        monImg.addEventListener('mouseover',function(){
            console.log("Coucou les CIEL IR 2");
            monImg.setAttribute("src",monTableau[numeroCelluleTab]);
            numeroCelluleTab++;
            if (numeroCelluleTab>=monTableau.length) {
                numeroCelluleTab=0;
            }
        });
		console.log("Les extra-terrestre saluent les CIEL IR 2");
        monImg.style.left=i+"px";
        i+=10;
        if(i==500){
            clearInterval(intervalID);
        }
	}
    intervalID = setInterval(deplacement, 500);
}

window.onload=function(){
    this.console.log("Rentrée onload");
    Vaisseau();
}
