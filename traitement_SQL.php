<?php
	echo "<body bgcolor=#202020 text=white>";
	echo "<h1>Bienvenue</h1>";
	$prenom = $_POST['prenom_etud'];
	$id = $_POST['matricule'];
	if(isset($_POST['prenom_etud']) && isset($_POST['matricule']))
	{
		echo "Bonjour ".$prenom.", matricule : ".$id;
		include("connexion.php");
		echo "Bonjour Matthieu";
		$idcom = connexpdo('Mini_Projet','myparam');
		echo "Bonjour Evan";
		$reqprep = $idcom->prepare("SELECT nom_etud, prenom_etud, matricule FROM etudiants WHERE prenom_etud= :prenom_etud");
		echo "Bonjour Didier";
		$reqprep->bindValue(':prenom_etud',$prenom,PDO::PARAM_STR);
		echo "Bonjour Charles";
                $reqprep->bindValue(':nom_etud',$nom,PDO::PARAM_STR);
		echo "Bonjour Loan";
		$reqprep->bindParam(':matricule',$id,PDO::PARAM_STR);
		echo "Bonjour Ylan";
		$reqprep->execute();
		echo "Bonjour Sofiane";
		$reqprep->bindColumn('prenom', $prenom);
		$reqprep->bindColumn('nom', $nom);
		echo "Bonjour Alex !";
		echo "<h3>Il y a ", $reqprep->rowCount() ,"etudiant habitant à ", ucfirst($prenom)," et dont l'identifiant est supérieur ou égal à $id</h3>";
		while ($result=$reqprep->fetch(PDO::FETCH_BOUND))
		{
			echo "<h3>$prenom $nom</h3>";
		}
		$reqprep->closeCursor();
		$idcom=null;
	}
?>
