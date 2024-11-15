CREATE TABLE service (
	idservice INT,
	nomservice VARCHAR(20),
	localisation VARCHAR(15) DEFAULT 'PARIS',
	CONSTRAINT pk_service PRIMARY KEY (idservice)
)ENGINE=InnoDB;

SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE employe(
	idemploye INT,
	nom VARCHAR(15) NOT NULL, 
	prenom VARCHAR(15),
	idserv INT,
	CONSTRAINT pk_employe PRIMARY KEY(idemploye),
	CONSTRAINT fk_employe_service FOREIGN KEY (idserv) REFERENCES service(idservice)
)ENGINE=InnoDB;

INSERT INTO service (idservice,nomservice,localisation)
 VALUES (10,'commercial','Toulouse');
 
INSERT INTO service VALUES
 (20,'production','Agen'),
 (30,'ventes','Toulouse'),
 (40,'achats','Agen');

INSERT INTO employe (idemploye,nom,prenom,idserv)
 VALUES (1,'DUPOND','Marcel',10);

INSERT INTO employe (idemploye,nom,prenom,idserv)
 VALUES (2,'DURAND','Jacques',20);
 
INSERT INTO employe (idemploye,nom,prenom,idserv)
 VALUES (3,'LEGRAND','Denis',30);
 
INSERT INTO employe VALUES
 (4,'MEUNIER','Paul',20),
 (5,'MEUNIER','Paul',40),
 (6,'NEUVILLE','Henry',30);
 
 SET FOREIGN_KEY_CHECKS=1;
 