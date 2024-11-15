<?php
if(isset($_POST["first_name"]) &isset($_POST["poids"]) &isset($_POST["taille"]))
    {
	// IMC = Poids / Taille x Taille

	/*$resultat=$_POST["poids"]/($_POST["taille"]*$_POST["taille"])

	echo "<h2> Bonjour, ".stripslashes($_POST["first_name"]).
        " votre Indice de Masse Corporel est ".$resultat." </h2>";
   	*/
	echo "<h2> Bonjour, ".stripslashes($_POST["first_name"])."Poids : "
	.striplashes($_POST["poids"])."Taille : ".striplashes($_POST["taille"]).".</h2>";
}
?>

