window.onload=function(){ // Onload attend que toutes les ressources soient chargées dans le navigateur.
    this.console.log("Rentrée onload"); // 'this' représente la window / la fenêtre
    console.log("Première rentrée"); // 'this' représente la window / la fenêtre
	console.log("Coucou les CIEL 1 IR"); // Affiche dans le terminal web le message entre guillemets
    var zoneImage=document.getElementById('mainImage'); // Il prend l'élément HTML et le transforme en objet JS
	addEventListener('mouseover', (event) => { // C'est un écouteur d'évènements qui éxecute la function
		console.log("Deuxième rentrée");
		console.log("Coucou les CIEL 2 IR");
		//zoneImage.setAttribute("src","./images/giphy2.gif");
		zoneImage.setAttribute("src","./images/chalet.jpg");
		setTimeout(() => {
			zoneImage.setAttribute("src","./images/giphy.gif");
		}, 1000);
	});
	/*zoneImage.addEventListener('click',function(){ // C'est un écouteur d'évènements qui éxecute la function
		console.log("Deuxième rentrée");
		console.log("Coucou les CIEL 2 IR");
		//zoneImage.setAttribute("src","./images/giphy2.gif");
		zoneImage.setAttribute("src","./images/chalet.jpg");
	});*/
}
