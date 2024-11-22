<?php

// Ex1 :

$T = 9;
$N = 10;
$N_1 = 82;
$N_2 = 41;
$N_3 = 30;

echo "Test exercice 1 : \n";

echo ($T % 2 == 0 && $T != 0)? "$T est pair. \n" : "$T est impair.\n";
echo "\n";

echo "Exercice 1 :\n";

if ($N % 2 == 0 && $N != 0){
	echo $N, " est pair.\n";
}
if ($N % 2 != 0){
	echo $N, " est impair.\n";
}
if ($N == 0){
	echo "Veuillez rentrer un nombre.\n";
}
echo "\n";

// Ex2 :

function testparite($B){
	if ($B % 2 == 0 && $B != 0){
		echo "TRUE.\n";
	}
	if ($B % 2 != 0){
		echo "FALSE.\n";
	}
	if ($B == 0){
		echo "Veuillez rentrer un nombre.\n";
	}
}

echo "Exercice 2 :\n";
echo "- ", testparite($N_1);
echo "- ", testparite($N_2);
echo "- ", testparite($N_3);

?>