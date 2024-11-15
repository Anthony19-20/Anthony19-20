CREATE TABLE `etudiants` (
	`matricule` varchar(12) NOT NULL,
	`nom_etud` varchar(30) NOT NULL,
	`prenom_etud` varchar(30) NOT NULL,
	`date_nais` date NOT NULL,
	`sexe` char(1) NOT NULL,
	`adresse` varchar(50) NOT NULL,
	PRIMARY KEY(`matricule`)
)

