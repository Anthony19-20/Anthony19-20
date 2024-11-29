<!DOCTYPE html>
<html lang="fr">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
  <title>Recherche de client</title>
  <style type="text/css" >
    div{font-size: 20px;}
  </style>
 </head>
 <body>
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">

  <fieldset>
    <legend>Recherche de client</legend>
    <label>Ville </label><input type="text" name="ville" /><br /><br />
    <label>Id_client</label><input type="number" step="1" name="id_client" /><br />
    <input type="submit" value="Envoyer" />
  </fieldset>
</form>
 </body>
</html>

<?php
if(isset($_POST['ville']) &&  isset($_POST['id_client']))
{
  $ville=strtolower($_POST['ville']);
  $id_client=$_POST['id_client'];
  include("connexion.php");
  $idcom=connexpdo('magasin','myparam');
  $reqprep=$idcom->prepare("SELECT prenom,nom FROM client WHERE lower(ville)= :ville AND id_client>= :id_client ");
  //*****Liaison des paramètres
  $reqprep->bindValue(':ville',$ville,PDO::PARAM_STR);
  $reqprep->bindParam(':id_client',$id_client,PDO::PARAM_INT);
  $reqprep->execute();
  //*****Liaison des résultats à des variables
  $reqprep->bindColumn('prenom', $prenom);
  $reqprep->bindColumn('nom', $nom);
  //*****Affichage
  echo "<div><h3>Il y a ", $reqprep->rowCount() ," client(s) habitant à ",ucfirst($ville)," et dont l'identifiant est supérieur ou égal à $id_client</h3><hr />";
  while($result=$reqprep->fetch(PDO::FETCH_BOUND))
  {
    echo "<h3> $prenom $nom</h3>";
  }
  echo "</div>";
  $reqprep->closeCursor();
  $idcom=null;
}
?>

