
window.onload=function(){
    this.console.log("rentree onload");
    var zoneImage=document.getElementById('mainImage');
	zoneImage.addEventListener('click',function(){
		console.log("coucou les SN2");
		zoneImage.setAttribute("src","./images/giphy2.gif");	
	});
}