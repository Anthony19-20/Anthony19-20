<?php
function connexpdo($base,$param)
{
  include_once($param.".inc.php");
  $dsn="mysql:host=".HOST.";dbname=".$base;
  $user=USER;
  $pass=PASS;
  try
  {
    $idcom = new PDO($dsn,$user,$pass);
    return $idcom;
  }
  catch(PDOException $except)
  {
    echo"Echec de la connexion",$except->getMessage();
    return FALSE;
    exit();
  }
}
?>

