<!DOCTYPE html>
<html>
        <head>
                <title>Bienvenue</title>
                <meta http-equiv="Content-type" content="text/html"; charset="UTF-8"/>
        </head>
        <body bgcolor="#202020" text="white">
                <h1>Bienvenue</h1>
                <h3>Page d'exercice de l’étudiant Tony BARELLI en classe de BTS CIEL_2_IR</h3>
       <form method="POST" action="<?php echo $_SERVER['PHP_SELF'];?>">
                <fieldset>
                        <legend>Recherche d'étudiants</legend><br/>
                                <label>Prénom Etudiant</label>
                                <input type="text" name="prenom_etud"/><br/><br/>
                                <label>Nom Etudiant</label>
                                <input type="text" name="nom_etud"/><br/><br/>
                </fieldset><br/>
                 <input type="submit" value="Envoyer"/><br/>
         </body>
</html>

<?php
        $prenom = $_POST['prenom_etud'];
	$nom = $_POST['nom_etud'];
        if(isset($_POST['prenom_etud']) && isset($_POST['nom_etud']))
        {
                include("connexion.php");
                $idcom = connexpdo('Mini_Projet','myparam');
                $reqprep = $idcom->prepare("SELECT * FROM etudiants WHERE prenom_etud = :prenom_etud || nom_etud = :nom_etud");

                $reqprep->bindValue(':prenom_etud', $prenom, PDO::PARAM_STR);
		$reqprep->bindValue(':nom_etud', $nom, PDO::PARAM_STR);

		$reqprep->execute();

		$reqprep->bindColumn('matricule', $matricule);
		$reqprep->bindColumn('prenom_etud', $prenom);
		$reqprep->bindColumn('nom_etud', $nom);
                $reqprep->bindColumn('date_nais', $date_nais);
                $reqprep->bindColumn('sexe', $sexe);
                $reqprep->bindColumn('adresse', $adresse);

                echo "<h3>Il y a ", $reqprep->rowCount() ," etudiant nommé $prenom $nom</h3>";

                while ($result=$reqprep->fetch(PDO::FETCH_BOUND))
                {
                        echo "<h4>Son matricule est : $matricule, son prenom est : $prenom, son nom de famille est : $nom, son sexe est : $sexe, sa date de naissance est : $date_nais et son adresse est : $adresse</h4>";
                }

                $reqprep->closeCursor();
                $idcom=null;
        }
?>

