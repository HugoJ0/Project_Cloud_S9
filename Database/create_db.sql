CREATE DATABASE bd_web_efreibiblio;
use bd_web_efreibiblio;

create user 'efreibiblio_user'@'%' identified by '12345'; -- Creates the user
grant all on bd_web_efreibiblio.* to 'efreibiblio_user'@'%';

CREATE TABLE `bd_web_efreibiblio`.`livre`
(
	`idlivre` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(100) NULL,
	`author` VARCHAR(100) NULL,
	`edition` VARCHAR(100) NULL,
	`quantity` INT NULL, 
	`image` VARCHAR(500) NULL,
PRIMARY KEY (`idlivre`)
);


INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("Tombant", "Fabien Clouette", "Les Editions de l’Ogre", 2, "https://static2.cyberlibris.com/books_upload/300pix/9782377561254.jpg");

INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("
La faute de l'abbé Mouret", "Emile Zola", "Librofilio", 1, "https://static2.cyberlibris.com/books_upload/300pix/9782492900938.jpg");

INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("A Tale of Two Cities", "Charles Dickens", "Pandora’s Box", 1, "https://static2.cyberlibris.com/books_upload/300pix/9789897786587.jpg");

INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("Programmer en Java", "Claude Delannoy", "Eyrolles", 3, "https://static2.cyberlibris.com/books_upload/300pix/9782212442229.jpg");

INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("Autour de la Lune", "Jules Verne", "Domaine public", 1, "https://static2.cyberlibris.com/books_upload/300pix/verne_autour_de_la_lune_illustre.jpg");

INSERT INTO livre(`title`, `author`, `edition`, `quantity`, `image`) VALUES("Node.js Web Development", "David Henry", "Packt Publishing", 1, "https://static2.cyberlibris.com/books_upload/300pix/9781838983253.jpg");


