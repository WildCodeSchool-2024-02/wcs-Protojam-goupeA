-- Active: 1712247778999@@127.0.0.1@3306@protojam_a
-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;

CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(50) NOT NULL,
    `lastname` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `is_admin` BOOL NULL
);

INSERT INTO
    `user` (
        `firstname`,
        `lastname`,
        `password`,
        `email`,
        `is_admin`
    )
VALUES (
        'Matthieu',
        'Helbert',
        'admin',
        'admin.matthieu@admin.fr',
        true
    ),
    (
        'Alex',
        'Wenck',
        'admin',
        'admin.alex@admin.fr',
        true
    ),
    (
        'Sacha',
        'Darras',
        'admin',
        'admin.sacha@admin.fr',
        true
    ),
    (
        'Fabien',
        'Laquerriere',
        'admin',
        'admin.fabien@admin.fr',
        true
    ),
    (
        'Pierre',
        'Delarocque',
        'admin',
        'admin.pierre@admin.fr',
        true
    );

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

CREATE TABLE IF NOT EXISTS `journey` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT(65535) NOT NULL,
    `type` VARCHAR(80) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    `journey` (`name`, `description`, `type`)
VALUES (
        'Forêt',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.',
        'Nature'
    ),
    (
        'Science-Fiction',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.',
        'SF'
    ),
    (
        'Montagne',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.',
        'Nature'
    );

CREATE TABLE IF NOT EXISTS `booking` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `celebrity_id` INT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `isBooked` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `service` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `booking_id` INT NULL,
    `option1` TINYINT(1) NOT NULL DEFAULT 0,
    `option2` TINYINT(1) NOT NULL DEFAULT 0,
    `option3` TINYINT(1) NOT NULL DEFAULT 0,
    `option4` TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`)
);

ALTER TABLE booking
ADD CONSTRAINT fk_booking_user FOREIGN KEY (user_id) REFERENCES user (id);

ALTER TABLE booking
ADD CONSTRAINT fk_booking_celebrity FOREIGN KEY (celebrity_id) REFERENCES celebrity (id);

ALTER TABLE service
ADD CONSTRAINT fk_service_booking FOREIGN KEY (booking_id) REFERENCES booking (id);

CREATE TABLE `contact` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100),
    `message` TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS `celebrity` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `activities` VARCHAR(255) NOT NULL,
    `condition` VARCHAR(255) NOT NULL,
    `description` TEXT(65535) NOT NULL,
    `price` INT NOT NULL,
    `journey_id` INT NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO
    `celebrity` (
        `id`,
        `name`,
        `activities`,
        `condition`,
        `description`,
        `price`,
        `journey_id`,
        `url`
    )
VALUES (
        1,
        'Yvan Kereun Appa',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        1,
        'https://echappee-celebrement-fantasque.netlify.app/assets/Yvan_Kereun_Appa-CMGI_HGT.jpg'
    ),
    (
        2,
        'Balou',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        1,
        'https://echappee-celebrement-fantasque.netlify.app/assets/Baloo-y36sHIYl.png'
    ),
    (
        3,
        'Dark Vador',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        2,
        'https://echappee-celebrement-fantasque.netlify.app/assets/darkvador-DFzFOZKL.jpg'
    ),
    (
        4,
        'Ellen Ripley',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        2,
        'https://echappee-celebrement-fantasque.netlify.app/assets/ellenripley-B7JR2zA2.webp'
    ),
    (
        5,
        'Gollum',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        3,
        'https://echappee-celebrement-fantasque.netlify.app/assets/gollum-FNfyQutf.jpg'
    ),
    (
        6,
        'Nicolas Hojac',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        3,
        'https://echappee-celebrement-fantasque.netlify.app/assets/hojac-8BExEV3h.jpg'
    ),
    (
        7,
        'Pape',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        4,
        'https://echappee-celebrement-fantasque.netlify.app/assets/pape2-Bu0X7Spe.jpg'
    ),
    (
        8,
        'Sylvain Durif',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        4,
        'https://echappee-celebrement-fantasque.netlify.app/assets/sylvaindurif-SlxzwGkp.jpg'
    ),
    (
        9,
        'Mike Horn',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        5,
        'https://echappee-celebrement-fantasque.netlify.app/assets/mikehorn-D8WGJ9i0.jpg'
    ),
    (
        10,
        'Denis Brogniart',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        5,
        'https://echappee-celebrement-fantasque.netlify.app/assets/denisbrogniart-CtWODnTc.jpg'
    ),
    (
        11,
        'Jacques-Yves Cousteau',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        6,
        'https://echappee-celebrement-fantasque.netlify.app/assets/cousteau-vZc1kfIZ.jpg'
    ),
    (
        12,
        'Arthur aka Aquaman Curry',
        "L'Appel de la Forêt de Kereun",
        'No fear',
        'Rejoignez Yvan Kereun Appa dans une forêt où les 
        arbres murmurent des secrets anciens et les animaux 
        organisent des soirées dansantes. Marchez à travers 
        des clairières enchantées et découvrez pourquoi les 
        écureuils le considèrent comme leur gourou. Une aventure 
        déjantée pour se déconnecter et rire aux éclats.',
        '150',
        6,
        'https://echappee-celebrement-fantasque.netlify.app/assets/aquaman-GbFQCF8f.jpg'
    );