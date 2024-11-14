<?php
echo "<body bgcolor=#202020 text=white>";
if(isset($_POST["Pseudo"]) &isset($_POST["Password"]))
    {
	$ID = $_POST["Pseudo"];
	$MDP = $_POST["Password"];
	$codes = array("Alex" => "Bonjour",
		       "Matthieu" => "hello",
		       "Evan" => "MDP",
		       "Loan" => "1243",
		       "Tony" => "drôle",
		       "Teva" => "Je_ne_sais_pas");
        $drapeau = FALSE;
	echo "<table> <tr> <td>"."Identifiant"."</td><td>"."Mot De Passe"."</td></tr><td></td>";
	foreach($codes as $pseudo => $password){
		echo "<tr><td>".$pseudo."</td><td>".$password."</td></tr>";
		if($ID == $pseudo && $MDP == $password){
			echo "Bonjour ".$pseudo."<br><br>";
			$drapeau = TRUE;
		}
	}
	echo "</table><br>";
	if ($drapeau == FALSE){
		echo "Accès Refusé";
	}
    }
?>

