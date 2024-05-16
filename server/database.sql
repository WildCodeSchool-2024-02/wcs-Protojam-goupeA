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

--
-- Base de données :  `simple-mvc`
--
-- --------------------------------------------------------

--
-- Structure de la table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
    `id` int(11) UNSIGNED NOT NULL,
    `title` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

--
-- Contenu de la table `item`
--

INSERT INTO
    `item` (`id`, `title`)
VALUES (1, 'Stuff'),
    (2, 'Doodads');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
ALTER TABLE `item` ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
AUTO_INCREMENT = 3;
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
        `Forêt`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.`,
        `Nature`
    ),
    (
        `Science-Fiction`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.`,
        `SF`
    ),
    (
        `Montagne`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna 
   aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
   ullamco laboris nisi ut aliquip ex ea commodo consequat. 
   Duis aute irure dolor in reprehenderit in voluptate velit 
   esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
   occaecat cupidatat non proident, sunt in culpa qui officia 
   deserunt mollit anim id est laborum.`,
        `Nature`
    );

CREATE TABLE IF NOT EXISTS `booking` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `journey_id` INT NULL,
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
ADD CONSTRAINT fk_booking_journey FOREIGN KEY (journey_id) REFERENCES journey (id);

ALTER TABLE service
ADD CONSTRAINT fk_service_booking FOREIGN KEY (booking_id) REFERENCES booking (id);