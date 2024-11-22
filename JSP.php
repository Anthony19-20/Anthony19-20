<?php
        echo "<body bgcolor=#202020 text=white><br />";
        $prenom = $_POST['prenom_etud'];
        $nom = $_POST['nom_etud'];
        if(isset($_POST['prenom_etud']) || isset($_POST['nom_etud']))
        {
                echo "Bonjour ".$prenom."<br />";
                include("connexion.php");
                $idcom = connexpdo('Mini_Projet','myparam');
                $reqprep = $idcom->prepare("SELECT matricule, nom_etud, prenom_etud, sexe, date_nais, adresse FROM etudiants WHERE prenom_etud = :prenom_etud OR nom_etud = :nom_etud");
                $reqprep->bindValue(':prenom_etud', $prenom, PDO::PARAM_STR);
                $reqprep->bindValue(':nom_etud', $nom, PDO::PARAM_STR);
                echo "Bonjour Loan <br />";
                $reqprep->execute();
                echo "Bonjour Sofiane <br />";
                $reqprep->blindColumn('matricule', $matricule);
                $reqprep->bindColumn('prenom_etud', $prenom);
                $reqprep->bindColumn('nom_etud', $nom);
                $reqprep->bindColumn('date_nais', $date_nais);
                $reqprep->bindColumn('sexe', $sexe);
                $reqprep->bindColumn('adresse', $adresse);
                echo "Bonjour Alex <br />";
                echo "<h3>Il y a ", $reqprep->rowCount() ," etudiant ", ucfirst($prenom),"</h3>";
                while ($result=$reqprep->fetch(PDO::FETCH_BOUND))
                {
                        echo "<h3>$matricule $prenom $nom $sexe $date_nais $adresse</h3>";
                }
                $reqprep->closeCursor();
                $idcom=null;
        }
?>
