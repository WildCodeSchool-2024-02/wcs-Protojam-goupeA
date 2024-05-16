-- Active: 1713169810273@@127.0.0.1@3306@protojama
-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

SET time_zone = "+00:00";

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