<?php
function pdo_connect_mysql() {
    $DATABASE_HOST = 'localhost'; // oui comme en AE1
    $DATABASE_USER = 'admin'; // certainement comme en AE1
    $DATABASE_PASS = 'admin'; // à vérifier mais certainement non !
    $DATABASE_NAME = 'phpcrud'; // vous avez bien créé déjà une base de données :) ?
    try { // on essaie la connexion
    	return new PDO('mysql:host=' . $DATABASE_HOST . ';dbname=' . $DATABASE_NAME . ';charset=utf8', $DATABASE_USER, $DATABASE_PASS);
    } catch (PDOException $exception) {
		// Si erreur dans la connection alors stopper et afficher le message ci dessous
    	exit('Echec à la connexion vers la base !');
    }
}
function template_header($title) {
echo <<<EOT
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>$title</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
	</head>
	<body>
    <nav class="navtop">
    	<div>
    		<h1>GESTION ETUDIANTS</h1>
            <a href="index.php"><i class="fas fa-home"></i>Home</a>
    		<a href="read.php"><i class="fas fa-address-book"></i>Contacts</a>
    	</div>
    </nav>
EOT;
}
function template_footer() {
echo <<<EOT
    </body>
</html>
EOT;
}
?>
