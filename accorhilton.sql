CREATE DATABASE ACCORHILTON DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE ACCORHILTON;

CREATE TABLE Hotel(
    numhotel INT(2),
    nom VARCHAR(15) NOT NULL,
    ville VARCHAR(15),
    etoiles ENUM ('1','2','3','4','5') NULL,
    CONSTRAINT pk_Hotel PRIMARY KEY (numhotel)
)
ENGINE=InnoDB;

CREATE TABLE Chambre(
    numchb INT(2),
    etage INT(2),
    prix INT(3),
    datetravaux DATE,
    numhotel INT(2),
    CONSTRAINT pk_Chambre PRIMARY KEY (numchb),
    CONSTRAINT fk_Chambre_Hotel FOREIGN KEY (numhotel) REFERENCES Hotel (numhotel) ON DELETE CASCADE
)
ENGINE=InnoDB;

INSERT INTO Hotel VALUES
    (1, 'Arena', 'Lyon', '5'),
    (2, 'F1', 'Marseille',NULL),
    (3, 'Ibis', 'Avignon', '2'),
    (4, 'Ginette', 'Lyon', '1'),
    (5, 'Royal', 'Avignon', '4');

INSERT INTO Chambre VALUES
    (5, 2, 100, 19990512, 5),
    (10, 2, 36, 20140302, 4),
    (8, 1, 10, 20020201, 2),
    (100, 3, 200, 20150228, 1),
    (17, 5, 128, 20140204, 1),
    (25, 4, 45, 20001224, 3);
