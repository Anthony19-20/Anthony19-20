
// Gestionnaire d'événement pour onSubmit
function prepareEventHandlers() {
	document.getElementById("frmContact").onsubmit = function() {
		// empêcher la soumission du formulaire si pas d'e-mail.
		if (document.getElementById("email").value == "") {
			document.getElementById("errorMessage").innerHTML = "SVP indiquez une adresse e-mail !";
			// Pour STOPPER la soumission du formulaire
			return false;
		} else {
			// Remise à zéro du message et soumission des données
			document.getElementById("errorMessage").innerHTML = "";
			return true;
		}
	};
}

// Lorsque le document a fini de charger
window.onload =  function() {
	prepareEventHandlers();
};

