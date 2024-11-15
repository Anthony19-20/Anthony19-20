<?php

if(isset($_POST["nbr_1"]) &isset($_POST["nbr_2"]) &isset($_POST["sign"])){

$nbr_1 = $_POST["nbr_1"]
$nbr_2 = $_POST["nbr_2"]
$sign = $_POST["sign"]

if(($nbr_1 != 0) && ($nbr_2 != 0)){
    if($sign == "*")
        {
            $resultat = $nbr_1 * $nbr_2;
            echo "Le résultat de votre nombre est : ".$resultat;
        }
    if($sign == "+")
        {
            $resultat = $nbr_1 + $nbr_2;
            echo "<h2> Le résultat de votre nombre est : ".$resultat ".</h2>";
        }
    if($sign == "-")
        {
            $resultat = $nbr_1 - $nbr_2;
            echo "<h2> Le résultat de votre nombre est : ".$resultat ".</h2>";
        }
    if($sign == "/")
        {
            $resultat = $nbr_1 / $nbr_2;
            echo "<h2> Le résultat de votre nombre est : ".$resultat ".</h2>";
        }
	}
}
    else{
    echo "<h2>Veuillez renseignez tous les champs</h2>";
	}
?>
