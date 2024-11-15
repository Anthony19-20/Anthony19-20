// cliquer dans phpmyadmin pour créer une
// nouvelle base de donnée:  francecanin
// avec un dictionnaire de caractere :
// utf8mb4_general_ci

CREATE TABLE proprietaire (
id_proprio INT,
nom VARCHAR(50),
adresse VARCHAR(80),
CONSTRAINT pk_proprio PRIMARY KEY (id_proprio))
ENGINE=InnoDB;



CREATE TABLE race (
id_race INT,
intitule VARCHAR(50),
origine VARCHAR(50),
descriptif TEXT,
CONSTRAINT pk_race PRIMARY KEY (id_race))
ENGINE=InnoDB;



CREATE TABLE concours(
id_concours INT,
ville_accueil VARCHAR(50),
date_concours DATE,
nb_primes INT,
nb_participants INT,
CONSTRAINT pk_concours PRIMARY KEY (id_concours))
ENGINE=InnoDB;



CREATE TABLE chien(
id_chien INT,
nom VARCHAR(50),
sexe CHAR(1),
date_naissance DATE,
date_acquisition DATE,
id_prop INT NOT NULL,
id_rac INT NOT NULL,
PRIMARY KEY (id_chien),
FOREIGN KEY (id_prop) REFERENCES proprietaire(id_proprio),
FOREIGN KEY (id_rac) REFERENCES race(id_race))
ENGINE=InnoDB;



CREATE TABLE particip_asso(
id_dog INT,
id_contest INT,
classement INT,
PRIMARY KEY (id_dog,id_contest),
FOREIGN KEY (id_dog) REFERENCES chien(id_chien),
FOREIGN KEY (id_contest) REFERENCES concours(id_concours))
ENGINE=InnoDB; 



INSERT INTO proprietaire (id_proprio,nom,adresse)
VALUES 
(1,'sammy','vanlife sur mer'),
(2,'bob','avignon'),
(3,'ambre','paris'),
(4,'gertrude','ramstein'),
(5,'ginette','avignon'),
(6,'gina','paris'),
(7,'laurence','avignon');

INSERT INTO concours (id_concours,ville_accueil,
date_concours,nb_primes,nb_participants)
VALUES
(10,'marseille','2019-05-20',3,6),
(20,'avignon','2020-02-12',1,5),
(30,'paris','2020-05-20',2,5),
(40,'fontainebleau','2021-02-21',1,4),
(50,'ramstein','2022-10-18',2,5),
(60,'paris','2023-11-03',2,6);

INSERT INTO race (id_race,intitule,origine,descriptif)
VALUES
(1,'chien loup','allemagne','très docile, fragile des pattes arrières'),
(2,'bulldog','pitiviers','très gentil et indiscipliné'),
(3,'setter','angleterre','peureux et craignant le froid'),
(4,'chihuahua','paris','bruyant et peureux'),
(5,'caniche','paris','peureux et silencieux'),
(6,'dalmatien','allemagne','ronfle la nuit'),
(7,'basset','paris','souvent malade et craintif'),
(8,'husky','suede','yeux bleus et poils blancs'),
(9,'teckel','paris','indescriptible non'),
(10,'dogue','allemand','attention chien mechant'),
(11,'boxer','angleterre','solide et discipliné'),
(12,'yorkshire','angleterre','attention ne pas piétiner'),
(13,'bull terrier','france','solide et fidèle'),
(14,'dobermann','allemagne','attention au dressage');

INSERT INTO chien (id_chien,nom,sexe,date_naissance,
date_acquisition,id_prop,id_rac)
VALUES
(15,'doudou','M','2023-05-12','2023-08-23',3,5),
(25,'roudoudou','F','2019-12-24','2020-02-05',6,3),
(35,'scoubidou','M','2024-11-05','2024-12-05',1,7),
(45,'ramses','M','2020-11-05','2021-02-05',5,5),
(55,'pilou','F','2019-11-05','2020-01-05',2,3),
(65,'nacho','M','2024-12-05','2026-02-15',4,4),
(75,'gringo','M','2024-01-03','2024-06-05',5,6),
(85,'karl','M','2024-10-05','2024-12-05',2,7),
(95,'chouchou','M','2024-10-15','2025-02-05',1,2),
(105,'mac','M','2018-01-05','2020-02-05',3,5);

INSERT INTO particip_asso (id_dog,id_contest,classement)
VALUES
(25,30,1),
(55,50,2),
(75,30,2),
(35,20,1),
(85,60,2);
