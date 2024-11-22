<?php

$meteo = array("Lundi" => "ensoleillé",
			  "Mardi" => "nuageux",
			  "Mercredi" => "grêleux",
			  "Jeudi" => "pluivieux",
			  "Vendredi" => "arc-En-Ciel",
			  "Samedi" => "orageux",
			  "Dimanche" => "une tempête");

foreach ($meteo as $jour => $temps){
	echo "La météo de ", $jour, " est ", $temps, ".\n";
}

?>