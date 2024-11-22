<?php
include 'functions.php';
// Connection avec le serveur MYSQL et la base de données
$pdo = pdo_connect_mysql();
// la URL posséde la structure URL?parametres:numerodepage grâce à la méthode GET, on retourne à page 1 si non specifiée
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? (int)$_GET['page'] : 1;
// nombre d'enregistrements de BDD par page
$records_per_page = 5;
// la préparation de la requête sql sans apparitions des variables BDD est une SECURITE contre les sniffers
// cette preparation n'est effectuée qu une seule fois !! pour les nombreuses executions à suivre
// LIMIT est une directive sql pour limiter la réponse en nombre de données
$stmt = $pdo->prepare('SELECT * FROM contacts ORDER BY id LIMIT :current_page, :record_per_page');
$stmt->bindValue(':current_page', ($page-1)*$records_per_page, PDO::PARAM_INT);
$stmt->bindValue(':record_per_page', $records_per_page, PDO::PARAM_INT);
$stmt->execute();
// Formation d un tableau associatif contenant la vue réponse de MYSQL
$contacts = $stmt->fetchAll(PDO::FETCH_ASSOC);
// En sachant le compte total d enregistrements en BDD on decidera d afficher ou non le bouton SUIVANT 
$num_contacts = $pdo->query('SELECT COUNT(*) FROM contacts')->fetchColumn();
?>

<?=template_header('Read')?>

<div class="content read">
	<h2>Read Contacts</h2>
	<a href="create.php" class="create-contact">Create Contact</a>
	<table>
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Title</td>
                <td>Created</td>
                <td></td>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($contacts as $contact): ?>
            <tr>
                <td><?=$contact['id']?></td>
                <td><?=$contact['name']?></td>
                <td><?=$contact['email']?></td>
                <td><?=$contact['phone']?></td>
                <td><?=$contact['title']?></td>
                <td><?=$contact['created']?></td>
                <td class="actions">
                    <a href="update.php?id=<?=$contact['id']?>" class="edit"><i class="fas fa-pen fa-xs"></i></a>
                    <a href="delete.php?id=<?=$contact['id']?>" class="trash"><i class="fas fa-trash fa-xs"></i></a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
	<div class="pagination">
		<?php if ($page > 1): ?>
		<a href="read.php?page=<?=$page-1?>"><i class="fas fa-angle-double-left fa-sm"></i></a>
		<?php endif; ?>
		<?php if ($page*$records_per_page < $num_contacts): ?>
		<a href="read.php?page=<?=$page+1?>"><i class="fas fa-angle-double-right fa-sm"></i></a>
		<?php endif; ?>
	</div>
</div>

<?=template_footer()?>
