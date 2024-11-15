<?php
	echo "<body bgcolor=#202020 text=white>";
	//Ex 27
	echo "Ex 27 :<br>";
	$tab = array(5, 90, 24, 564);
	function Tminus(&$tab){
		echo "Valeur de départ : <br>";
		foreach($tab as $t){
			echo $t. "<br>";
		}
		echo "<br> Valeur d'arrivée : <br>";
		foreach($tab as $t){
			echo ($t - 1)."<br>";
		}
	}

	Tminus($tab);
	echo "<br>";

	//Ex 28
	echo "Ex 28 :<br>";
	$tableau=array(7, 12, 15, 20, 21);
	$cs=0;
		for ($i=0;$i<=4;$i++){
			$cs=$cs^$tableau[$i];
		}
	echo "CheckSum = ".$cs."<br><br>";
	echo "Voici les étapes pour arriver au CheckSum :<br>";
	function FCS(&$tableau){
		foreach($tableau as $tb){
			$cs=$cs^$tb;
			echo $cs."<br>";
		}
	}
	FCS($tableau);


?>
