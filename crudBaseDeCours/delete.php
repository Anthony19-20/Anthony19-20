<?php
include 'functions.php';
$pdo = pdo_connect_mysql();
$msg = '';
// Verifier que le contact numero ID existe
if (isset($_GET['id'])) {
	// Selectionner l enregistrement qui va être inséré
    $stmt = $pdo->prepare('SELECT * FROM contacts WHERE id = ?');
    $stmt->execute([$_GET['id']]);
    $contact = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$contact) {
        exit('Le contact n existe pas avec cette ID!');
    }
	// Etre sur que l utilisateur confirme avant effacement de la BDD
    if (isset($_GET['confirm'])) {
        if ($_GET['confirm'] == 'yes') {
			// Utilisateur a clique sur le bouton "Yes"
            $stmt = $pdo->prepare('DELETE FROM contacts WHERE id = ?');
            $stmt->execute([$_GET['id']]);
            $msg = 'Vous avez effacé le contact!';
        } else {
			// l utilisateur a clique sur No, l instruction php header forme une requete GET
			// pour executer la page read.php et donc afficher les enregistrements
            header('Location: read.php');
            exit;
        }
    }
} else {
    exit('Pas de ID specifie!');
}
?>

<?=template_header('Delete')?>

<div class="content delete">
	<h2>Effacer le Contact #<?=$contact['id']?></h2>
    <?php if ($msg): ?>
    <p><?=$msg?></p>
    <?php else: ?>
	<p>Etes vous sûr de vouloir effacer #<?=$contact['id']?>?</p>
    <div class="yesno">
        <a href="delete.php?id=<?=$contact['id']?>&confirm=yes">Yes</a>
        <a href="delete.php?id=<?=$contact['id']?>&confirm=no">No</a>
    </div>
    <?php endif; ?>
</div>

<?=template_footer()?>
