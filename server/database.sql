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
    PRIMARY KEY (`id`)
);

INSERT INTO
    `journey` (`id`, `name`)
VALUES (1, 'Forêt'),
    (2, 'Science-Fiction'),
    (3 'Montagne'),
    (4, 'Cosmique'),
    (5, 'Aventure'),
    (6, 'Aquatique');

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

CREATE TABLE IF NOT EXISTS `celebrity` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `activities` VARCHAR(255) NOT NULL,
    `condition` VARCHAR(255) NOT NULL,
    `description` TEXT(65535) NOT NULL,
    `price` INT NOT NULL,
    `journey_id` INT NOT NULL,
    `url` VARCHAR(255) NOT NULL,
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
        "La Forêt Sombre de Vador",
        'No fear',
        "Rejoignez Dark Vador pour une retraite relaxante dans 
        une forêt sombre située sur la planète Endor. Marchez à 
        travers des arbres géants et écoutez le chant apaisant des 
        Ewoks, tout en méditant sur votre place dans l'univers. C'est 
        une déconnexion totale où vous pourrez enfin respirer sans votre 
        masque. Qui aurait cru que Vador avait la main verte ?",
        '150',
        2,
        'https://echappee-celebrement-fantasque.netlify.app/assets/darkvador-DFzFOZKL.jpg'
    ),
    (
        4,
        'Ellen Ripley',
        "Ripley et la Jungle Spatiale",
        'No fear',
        "Enfilez votre combinaison spatiale et suivez Ellen Ripley dans 
        une jungle luxuriante située sur une lune lointaine. Découvrez 
        des plantes géantes et des créatures étranges (mais inoffensives, 
        promis !). Profitez de séances de yoga anti-gravité et de bains de 
        boue extraterrestres. Une aventure où même les Xénomorphes prennent 
        des vacances pour se ressourcer.",
        '150',
        2,
        'https://echappee-celebrement-fantasque.netlify.app/assets/ellenripley-B7JR2zA2.webp'
    ),
    (
        5,
        'Gollum',
        "L'Ascension Précieuse de Gollum",
        'No fear',
        "Grimpez avec Gollum à travers les montagnes et écoutez-le murmurer 
        des douceurs à son précieux tout en admirant les vues spectaculaires. 
        Découvrez les grottes secrètes et les lacs cachés. Une aventure où vous 
        apprendrez l'art de la pêche avec des mains maigres et des yeux globuleux.",
        '150',
        3,
        'https://echappee-celebrement-fantasque.netlify.app/assets/gollum-FNfyQutf.jpg'
    ),
    (
        6,
        'Nicolas Hojac',
        "Les Pics Vertigineux de Hojac",
        'No fear',
        "Suivez Nicolas Hojac dans une ascension à couper le souffle des plus hauts 
        sommets. Testez vos limites avec des défis d'escalade extrêmes, puis 
        détendez-vous avec des pique-niques alpins où les marmottes vous tiendront 
        compagnie. Parfait pour ceux qui cherchent à se déconnecter en flirtant avec 
        l'altitude.",
        '150',
        3,
        'https://echappee-celebrement-fantasque.netlify.app/assets/hojac-8BExEV3h.jpg'
    ),
    (
        7,
        'Pape',
        "Les Jardins Célestes du Vatican",
        'No fear',
        "Embarquez avec le Pape pour une aventure spirituelle dans des jardins 
        cosmiques. Méditez sous des étoiles scintillantes et flottez parmi les 
        nébuleuses. Une retraite divine où même les anges prennent des selfies. 
        Une expérience sacrée pour se déconnecter et trouver la paix dans les cieux.",
        '150',
        4,
        'https://echappee-celebrement-fantasque.netlify.app/assets/pape2-Bu0X7Spe.jpg'
    ),
    (
        8,
        'Sylvain Durif',
        "Les Univers Mystiques de Durif",
        'No fear',
        "Voyagez à travers des dimensions parallèles avec Sylvain Durif et découvrez 
        des paysages cosmologiques fascinants. Assistez à des spectacles de lumière 
        interdimensionnels et explorez des mondes où la réalité défie l'imagination. 
        Parfait pour ceux qui veulent se perdre dans l'inconnu et se retrouver dans 
        le mystique.",
        '150',
        4,
        'https://echappee-celebrement-fantasque.netlify.app/assets/sylvaindurif-SlxzwGkp.jpg'
    ),
    (
        9,
        'Mike Horn',
        "L'Appel de la Wild Adventure avec Mike",
        'No fear',
        "Rejoignez Mike Horn dans une série de quêtes épiques à travers jungles, 
        déserts et montagnes. Testez vos compétences de survie tout en suivant les 
        traces d'explorateurs légendaires. Une aventure où chaque journée est un 
        nouveau défi et chaque nuit une histoire à raconter.",
        '150',
        5,
        'https://echappee-celebrement-fantasque.netlify.app/assets/mikehorn-D8WGJ9i0.jpg'
    ),
    (
        10,
        'Denis Brogniart',
        "L'Expédition Brogniart",
        'No fear',
        "Partez à l'aventure avec Denis Brogniart dans des terres sauvages et 
        inconnues. Relevez des défis extrêmes, comme allumer un feu avec des lunettes 
        de soleil et construire des radeaux en bambou. Une déconnexion totale pour les 
        amateurs de survie et de sensations fortes.",
        '150',
        5,
        'https://echappee-celebrement-fantasque.netlify.app/assets/denisbrogniart-CtWODnTc.jpg'
    ),
    (
        11,
        'Jacques-Yves Cousteau',
        "Les Abysses de Cousteau",
        'No fear',
        "Plongez dans les profondeurs avec Jacques-Yves Cousteau et explorez des récifs 
        coralliens et des épaves mystérieuses. Nagez avec des créatures marines fascinantes 
        et découvrez les secrets de l'océan. Une aventure aquatique pour ceux qui veulent 
        se déconnecter et se perdre dans le bleu infini.",
        '150',
        6,
        'https://echappee-celebrement-fantasque.netlify.app/assets/cousteau-vZc1kfIZ.jpg'
    ),
    (
        12,
        'Arthur aka Aquaman Curry',
        "Les Vacances d'Aquaman",
        'No fear',
        "Plongez dans les royaumes sous-marins avec Aquaman et découvrez des cités 
        englouties. Nagez avec les dauphins et faites des courses de tortues. Profitez 
        de bains thermaux naturels sous l'eau et de festins de fruits de mer frais. 
        Une escapade aquatique pour ceux qui cherchent une déconnexion totale et une 
        aventure inoubliable.",
        '150',
        6,
        'https://echappee-celebrement-fantasque.netlify.app/assets/aquaman-GbFQCF8f.jpg'
    );

ALTER TABLE booking
ADD CONSTRAINT fk_booking_user FOREIGN KEY (user_id) REFERENCES user (id);

ALTER TABLE booking
ADD CONSTRAINT fk_booking_celebrity FOREIGN KEY (celebrity_id) REFERENCES celebrity (id);

ALTER TABLE service
ADD CONSTRAINT fk_service_booking FOREIGN KEY (booking_id) REFERENCES booking (id);

ALTER TABLE celebrity
ADD CONSTRAINT fk_celebrity_journey FOREIGN KEY (journey_id) REFERENCES journey (id);

CREATE TABLE `contact` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `firstname` VARCHAR(100) NOT NULL,
    `lastname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100),
    `message` TEXT NOT NULL
);