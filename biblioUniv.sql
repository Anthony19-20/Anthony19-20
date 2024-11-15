/* bibliothèque univesitaire */

SET FOREIGN_KEY_CHECKS=0;

--
-- Table structure for table `Etudiant`
--

DROP TABLE IF EXISTS `Etudiant`;

CREATE TABLE Etudiant (
NumCarte INT,
Nom VARCHAR(50),
Prenom VARCHAR(50),
Adresse VARCHAR(80),
PRIMARY KEY(NumCarte)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Table structure for table `Ouvrage`
--

DROP TABLE IF EXISTS `Ouvrage`;

CREATE TABLE Ouvrage (
CodeOuvrage INT(2),
Titre VARCHAR(50),
NbExemplaires TINYINT,
PRIMARY KEY (CodeOuvrage)
)ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Table structure for table `Auteur`
--

DROP TABLE IF EXISTS `Auteur`;

CREATE TABLE Auteur (
idAuteur INT,
Nom VARCHAR(50),
Prenom VARCHAR(50),
Nationalite VARCHAR(30),
PRIMARY KEY (idAuteur)
)ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Table structure for table `Emprunter`
--

DROP TABLE IF EXISTS `Emprunter`;

CREATE TABLE Emprunter (
NumCarte INT,
CodeOuvrage INT(2),
DatePret DATETIME,
DateRetour DATETIME,
PRIMARY KEY (NumCarte,CodeOuvrage),
FOREIGN KEY (NumCarte) REFERENCES Etudiant(NumCarte),
FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `Ecrire`
--

DROP TABLE IF EXISTS `Ecrire`;

CREATE TABLE Ecrire (
CodeOuvrage INT(2),
idAuteur INT,
PRIMARY KEY (CodeOuvrage,idAuteur),
FOREIGN KEY (CodeOuvrage) REFERENCES Ouvrage(CodeOuvrage),
FOREIGN KEY (idAuteur) REFERENCES Auteur(idAuteur)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;