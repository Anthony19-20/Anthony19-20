<?php
$tab=array(34, 56, 778, 5, 8, 66);
$tab_1=array(-45, -83, -91, -205, -2, -39);
$tab_2=array(45, -83, -91, 205, 2, -39);

function outMax ($tablo){
	$valMax = 0;
	$longueur=count($tablo);
	for ($i = 0; $i < $longueur; $i++){
		if ($valMax<$tablo[$i]) $valMax = $tablo[$i];
	}
	return $valMax;
}

echo "Tableau positifs : \n";
echo "Valeur maximale = ", outMax($tab), "\n";

function outMin ($tablo){
	$valMin = $tablo[0];
	$longueur=count($tablo);
	for ($i = 0; $i < $longueur; $i++){
		if ($valMin>$tablo[$i]) $valMin = $tablo[$i];
	}
	return $valMin;
}

echo "Tableau negatifs : \n";
echo "Valeur maximale = ", outMax($tab_1), "\n";
echo "Valeur minimale = ", outMin($tab_1), "\n";

echo "Tableau negatifs et positifs : \n";
echo "Valeur maximale = ", outMax($tab_2), "\n";
echo "Valeur minimale = ", outMin($tab_2), "\n";

function F3 ($arg1){
	if ($arg1%2==0) return TRUE;
	else return FALSE;
}

$chiffre = -23;
$resultat = F3($chiffre)? TRUE: FALSE;

if ($resultat) echo $chiffre, " est PAIR";
else echo $chiffre, " est IMPAIR";
?>