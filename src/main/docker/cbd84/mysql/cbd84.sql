-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Ven 18 Novembre 2016 à 20:24
-- Version du serveur: 5.6.33-0ubuntu0.14.04.1
-- Version de PHP: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `cbd84`
--
CREATE DATABASE IF NOT EXISTS `cbd84` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `cbd84`;

-- --------------------------------------------------------

--
-- Structure de la table `calendars`
--

CREATE TABLE IF NOT EXISTS `calendars` (
  `id_calendar` bigint(20) NOT NULL AUTO_INCREMENT,
  `creationDate` datetime DEFAULT NULL,
  `excelUrl` varchar(255) DEFAULT NULL,
  `pdfUrl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_calendar`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `cbdfiles`
--

CREATE TABLE IF NOT EXISTS `cbdfiles` (
  `id_cbdfile` bigint(20) NOT NULL AUTO_INCREMENT,
  `creationDate` datetime DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_cbdfile`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=45 ;

--
-- Contenu de la table `cbdfiles`
--

INSERT INTO `cbdfiles` (`id_cbdfile`, `creationDate`, `label`, `position`, `url`, `section`) VALUES
(1, '2016-02-28 19:32:29', 'Modification du réglement sportif pour 2016', 1, 'images/get/cbdfiles/pdf/1', 'Règlements Sportif'),
(2, '2016-02-28 22:05:28', 'FFSB Calendrier 2016', 1, 'images/get/cbdfiles/pdf/2', 'Calendriers Officiels FFSB'),
(6, '2016-03-05 14:21:18', 'Calendrier Officiel FFSB 2016/2017', 1, 'images/get/cbdfiles/pdf/6', 'Calendriers Officiels FFSB'),
(8, '2016-03-05 14:27:55', 'reglement sportif', 1, 'images/get/cbdfiles/pdf/8', 'Règlements Sportif'),
(9, '2016-03-05 14:38:34', 'RTI', 1, 'images/get/cbdfiles/pdf/9', 'Règlements Sportif'),
(10, '2016-03-05 14:42:34', 'casistique', 1, 'images/get/cbdfiles/pdf/10', 'Règlements Sportif'),
(19, '2016-03-10 16:42:51', 'RTI modif', 4, 'images/get/cbdfiles/pdf/19', 'reglement modification'),
(20, '2016-03-10 17:19:24', 'Organisation des Championnats VETERANS  2016', 1, 'images/get/cbdfiles/pdf/20', 'Championnats de Vaucluse'),
(21, '2016-03-10 17:21:09', 'champ.84- 2016 généralités', 1, 'images/get/cbdfiles/pdf/21', 'Championnats de Vaucluse'),
(22, '2016-03-10 17:21:39', 'CHAMPIONNATS DE VAUCLUSE-quadrettes D3 et D4', 1, 'images/get/cbdfiles/pdf/22', 'Championnats de Vaucluse'),
(23, '2016-03-10 17:21:55', 'Inscriptions D3', 1, 'images/get/cbdfiles/pdf/23', 'Championnats de Vaucluse'),
(24, '2016-03-10 17:22:53', 'Inscriptions D4', 1, 'images/get/cbdfiles/pdf/24', 'Championnats de Vaucluse'),
(25, '2016-03-10 17:23:13', 'Inscriptions Q3', 1, 'images/get/cbdfiles/pdf/25', 'Championnats de Vaucluse'),
(26, '2016-03-10 17:23:37', 'Inscriptions Q4', 1, 'images/get/cbdfiles/pdf/26', 'Championnats de Vaucluse'),
(27, '2016-03-10 17:23:57', 'Inscriptions S3', 1, 'images/get/cbdfiles/pdf/27', 'Championnats de Vaucluse'),
(28, '2016-03-10 17:24:13', 'Inscriptions S4', 1, 'images/get/cbdfiles/pdf/28', 'Championnats de Vaucluse'),
(29, '2016-03-10 17:24:31', 'Inscriptions Vétérans', 1, 'images/get/cbdfiles/pdf/29', 'Championnats de Vaucluse'),
(30, '2016-03-10 17:24:48', 'PROG. D3D4  84', 1, 'images/get/cbdfiles/pdf/30', 'Championnats de Vaucluse'),
(31, '2016-03-10 17:25:05', 'PROG. S3-S4', 1, 'images/get/cbdfiles/pdf/31', 'Championnats de Vaucluse'),
(32, '2016-03-10 18:22:09', 'championnat national des jeunes en double', 1, 'images/get/cbdfiles/pdf/32', 'cbd vaucluse'),
(33, '2016-03-10 18:27:27', 'note concours national double', 6, 'images/get/cbdfiles/pdf/33', 'FFSB'),
(34, '2016-03-10 18:46:07', 'calendrier de la drome', 7, 'images/get/cbdfiles/pdf/34', 'cbd drome'),
(35, '2016-03-10 18:47:15', 'calendrier de l''ardeche', 7, 'images/get/cbdfiles/pdf/35', 'cbd ardeche'),
(36, '2016-03-11 11:05:53', 'arbitre local', 1, 'images/get/cbdfiles/pdf/36', 'cbd vaucluse'),
(38, '2016-03-11 12:10:34', 'point de précision club', 1, 'images/get/cbdfiles/pdf/38', 'FFSB'),
(39, '2016-03-11 13:15:58', 'feuille de remboursement des arbitres', 1, 'images/get/cbdfiles/pdf/39', 'cbd vaucluse'),
(40, '2016-03-11 15:10:37', 'mini congrés 2016', 1, 'images/get/cbdfiles/pdf/40', 'cbd vaucluse'),
(41, '2016-03-11 15:11:30', 'mini congres 2016 /2', 1, 'images/get/cbdfiles/pdf/41', 'cbd vaucluse'),
(42, '2016-03-11 15:12:23', 'mini congres 2016/3', 1, 'images/get/cbdfiles/pdf/42', 'cbd vaucluse'),
(43, '2016-03-11 15:14:10', 'mini congres 2016/4', 1, 'images/get/cbdfiles/pdf/43', 'cbd vaucluse'),
(44, '2016-04-01 16:18:55', 'Trophée de France 3° et 4°', 1, 'images/get/cbdfiles/pdf/44', 'cbd vaucluse');

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `id_contact` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `function` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `photoUrl` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `postalCode` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `assoCodeLabel` varchar(255) DEFAULT NULL,
  `assoName` varchar(255) DEFAULT NULL,
  `boulodrome` varchar(255) DEFAULT NULL,
  `correspondance` varchar(255) DEFAULT NULL,
  `history` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_contact`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Contenu de la table `contacts`
--

INSERT INTO `contacts` (`id_contact`, `address`, `city`, `email`, `firstname`, `function`, `lastname`, `mobile`, `phone`, `photoUrl`, `position`, `postalCode`, `type`, `assoCodeLabel`, `assoName`, `boulodrome`, `correspondance`, `history`) VALUES
(1, '15 rue des Tours', 'VALREAS', 'vich.raymond@neuf.fr', 'Raymond', 'Président', 'Vich', '06 87 11 19 45 ', '04 90 35 28 38', 'images/get/contacts/jpg/1?cb=1448644715824?cb=1448644863219?cb=1448645148345?cb=1453898216226?cb=1455051078548', 1, '84600', 'person', NULL, NULL, NULL, NULL, NULL),
(2, '493 Avenue Marius Coulon', 'BOLLENE', 'pyrame@gmail.com', 'Gilbert', 'Secr&#233;taire G&#233;n&#233;ral', 'Navarro', '06 87 80 59 46 ', NULL, 'images/get/contacts/jpg/2?cb=1453898229896?cb=1455051087615', 2, '84500', 'person', NULL, NULL, NULL, NULL, NULL),
(3, 'Chemin des N&#233gades', 'ORANGE', 'negades.alain@wanadoo.fr', 'Alain', 'Trésorier', 'Canonge', '', '04 90 34 98 39 ', 'images/get/contacts/jpg/3?cb=1448644738701?cb=1453898241289?cb=1455051095797', 3, '84100', 'person', NULL, NULL, NULL, NULL, NULL),
(12, '693, route d''Aubignan', 'SARRIANS', 'gemo.fadat@laposte.net', 'Gérald', 'Président', 'Fadat', '06 82 59 62 99', '04 90 60 59 97', 'images/get/contacts/jpg/12?cb=1448358729120?cb=1448358754440?cb=1448358829898?cb=1455053019071', 17, '84260', 'asso', 'Pro 84 01 17', 'Boule Sarriannaise', NULL, NULL, NULL),
(13, '2504, Avenue de Pernes', 'MAZAN', '', 'Dany', 'Président', 'Bertrand', NULL, '04 90 35 28 38', 'images/get/contacts/jpg/13?cb=1455053029623', 18, '84380', 'asso', 'Pro 84 01 18', 'Amicale boule Sorguaise', NULL, NULL, NULL),
(14, '10, rue Charles Dickens', 'ROCHEFORT DU GARD', NULL, 'Eric', 'Président', 'DEBARD', NULL, '04 90 14 90 31', 'images/get/contacts/jpg/14?cb=1455051962061?cb=1455052729654', 1, '30650', 'asso', 'Pro 84 01 01', 'ABF - Amicale Boule Fédérale Avignon', 'île Piot 84000 AVIGNON', 'ABF AVIGNON', ''),
(15, '43, traverse des tilleuls', 'BOLLENE', NULL, 'Christelle', 'Présidente', 'DENAT', NULL, '04 90 34 16 54', 'images/get/contacts/jpg/15?cb=1455051998147?cb=1455052008655?cb=1455052014056?cb=1455052021481?cb=1455052068622?cb=1455052190424?cb=1455052223159?cb=1455052562189?cb=1455052695766?cb=1455052863609', 4, '84500', 'asso', 'Pro 84 01 04', 'Boule St Pierre Bollène', 'J. Vésigné', NULL, NULL),
(16, '1, rue Imbert Boachon', 'AVIGNON', 'daniel.monne@wanadoo.fr', 'Daniel', 'Président', 'BUONO', NULL, '04 90 88 51 92', 'images/get/contacts/jpg/16', 2, '84000', 'asso', 'Pro 84 01 02', 'BLB- Boule Lyonnaise de la Barbière Avignon', 'Boulodrome de Saint-Chamand 7 , place des Maraîchers 84 000 AVIGNON', 'Boulodrome de Saint-Chamand', NULL),
(17, '1, rue des acacias Lot les islons', 'CADEROUSSE', NULL, 'Jean-Marie', 'Président', 'SALVADOR', NULL, '04 90 51 97 62', 'images/get/contacts/jpg/17', 5, '84860', 'asso', 'Pro 84 01 05', 'Pi Boule Caderousse', NULL, 'chez le président', NULL),
(18, '11, cours du couchant', 'CAMARET', NULL, 'Raymond', 'Président', 'ROURE', NULL, '04 90 37 23 92', 'images/get/contacts/jpg/18', 6, '84850', 'asso', 'Pro 84 01 06', 'Grosse Boule Camaret', NULL, 'chez le président', NULL),
(19, '6rue de la glaciere', 'COURTHEZON', 'guyrame@hotmail.com', 'GUY', 'Président', 'RAME', '', '04 90 70 73 92', 'images/get/contacts/jpg/19', 7, '84350', 'asso', 'Pro 84 01 07', 'AUBC - Amicale Union Bouliste Courthézon', NULL, 'AUBC Espace du Moulin 84350 COURTHEZON', NULL),
(20, '94,rue de la dame', 'FAUCON', NULL, 'Francis', 'Président', 'VIVARGENT', '06 27 80 37 61', '04 90 46 46 26', 'images/get/contacts/jpg/20', 8, '84110', 'asso', 'Pro 84 01 08', 'Boule Joyeuse Faucon', 'Couvert', 'chez le président', NULL),
(21, '3 Lot, le couvent', 'VISAN', 'grego.rolland@gmail.com', 'Grégory', 'Président', 'ROLLAND', '06 83 05 63 32', NULL, 'images/get/contacts/jpg/21', 22, '84820', 'asso', 'Pro 84 01 22', 'Boule Visannaise', NULL, 'chez le président', NULL),
(22, '21, bd du nord', 'JONQUIERES', NULL, 'Fernand', 'Président', 'RAOUX', NULL, '04 90 70 33 86', 'images/get/contacts/jpg/22', 9, '84150', 'asso', 'Pro 84 01 09', 'Amicale Boule Jonquières', NULL, 'PANZA François, place racine 84150 Jonquières - tél 04 90 70 50 93', NULL),
(23, '879,rue de Chateauneuf', 'ORANGE', 'patrick.batifol@gmail.com', 'Patrick', 'Président', 'BATIFOL', '06 64 94 42 73', NULL, 'images/get/contacts/jpg/23', 14, '84100', 'asso', 'Pro 84 01 14', 'Boule Orangeoise', NULL, 'Chez le président', NULL),
(24, '15, rue des Tours', 'VALREAS', 'vich.raymond@neuf.fr', 'Elisabeth', 'Présidente', 'Vich', '06 73 22 33 47', '04 90 35 28 38', 'images/get/contacts/jpg/24', 20, '84600', 'asso', 'Pro 84 01 20', 'Union Bouliste Valréassienne', 'stade barneron et la romezière', 'chez la présidente', NULL),
(25, '15 rue des tours', 'VALREAS', 'vich.raymond@neuf.fr', 'Elisabeth', 'Membre du CD', 'Vich', NULL, '04 90 35 28 38', 'images/get/contacts/jpg/25', 4, '84600', 'person', NULL, NULL, NULL, NULL, NULL),
(26, '3 rue de la vérriere', 'LAPALUD', 'huguette.pascal@orange.fr', 'leon', 'président', 'PASCAL', NULL, '04 90 40 27 71', 'images/get/contacts/jpg/26', 10, '84840', 'asso', 'pro 84 01 10', 'union bouliste LAPALUD', NULL, 'chez le président', NULL),
(27, '102 les vertes rives', 'MONTFAVET', NULL, 'thierry', 'Président', 'MORIN', '06 74 33 96 23', NULL, 'images/get/contacts/jpg/27', 12, '84140', 'asso', 'pro 84 01 12', 'amicale boule montfavet', 'MORIN , tel : 07 83 85 24 33', 'chez le président', ''),
(28, '15 rue des tours', 'VALREAS', 'vich.raymond@neuf.fr', 'raymond', 'président', 'vich', '06 87 11 19 45', '04 90 35 28 38', 'images/get/contacts/jpg/28', 0, '84600', 'asso', 'pro 84', 'CBD', NULL, 'chez le secrétaire  NAVARRO gilbert', '<p>Creation du site le 05/03/2016</p>'),
(29, '1310 route de valréas', 'sainte cécile les vignes', NULL, 'robert', 'Président', 'HUERTAS', NULL, '04 90 30 86 66', 'images/get/contacts/jpg/29', 16, '84290', 'asso', 'PRO 84 01 16', 'BOULE CECILIENNE', 'Des vignerons tel 04 90 30 84 92', 'chez le président', NULL),
(30, '61 avenue pasteur', 'VEDENE', 'c.b.v@sfr.fr', 'pierre', 'President', 'MATAS', '06 72 76 82 08', NULL, 'images/get/contacts/jpg/30', 21, '84270', 'asso', 'PRO 84 01 21', 'CLUB BOULISTE VEDENE', NULL, 'chez le président', NULL),
(31, 'BP 20025 moriéres les avignon', 'VEDENE CEDEX', NULL, 'jean', 'Président', 'DINICOLA', '06 34 73 66 57', NULL, 'images/get/contacts/jpg/31', 29, '84271', 'asso', 'PRO 84 01 29', 'GROSSE BOULE MORIEROISE', NULL, 'chez le président', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE IF NOT EXISTS `events` (
  `id_event` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `club` varchar(255) DEFAULT NULL,
  `creationDate` datetime DEFAULT NULL,
  `division` varchar(255) DEFAULT NULL,
  `mode` varchar(255) DEFAULT NULL,
  `nature` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_event`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=162 ;

--
-- Contenu de la table `events`
--

INSERT INTO `events` (`id_event`, `category`, `club`, `creationDate`, `division`, `mode`, `nature`, `number`, `place`, `type`) VALUES
(68, 'PROMOTION', 'ub valréas', '2016-10-09 13:00:00', '3 et 4 + 1N', '3 parties systéme AURARD', 'challenge des cartonniers', 10, 'valréas', 'Q'),
(69, 'PROMOTION', 'faucon', '2016-10-09 13:30:00', '3/4 +1N', 'eliminatoires', 'coupe des vendanges', 8, 'FAUCON', 'D'),
(70, 'LOISIRS', 'cbd vaucluse', '2016-10-16 13:30:00', '3/4', 'eliminatoires', 'AS3/4', 0, 'divers', 'S'),
(71, 'LOISIRS', 'cbd vaucluse', '2016-10-22 13:30:00', '3/4', 'eliminatoires', 'as 3/4', 0, 'divers', 'S'),
(72, 'PROMOTION', 'blb avignon', '2016-10-29 09:30:00', '3/4', 'poule', '1° tour souvenir OUDIN', 64, 'ST CHAMAND', 'D'),
(73, 'PROMOTION', 'blb avignon', '2016-11-05 09:30:00', 'M3/M4', 'poules', 'souvenir oudin 2° tours', 64, 'AVIGNON', 'D'),
(74, 'PROMOTION', 'FAUCON', '2016-11-05 13:30:00', 'M3/M4+1M2', 'poules', 'coupe des vendanges', 8, 'FAUCON', 'D'),
(75, 'PROMOTION', 'FAUCON', '2016-11-06 09:30:00', 'M3/M4+1M2', 'poules', 'finale coupe des vendanges', 8, 'FAUCON', 'D'),
(76, 'PROMOTION', 'ST CECILE', '2016-11-11 08:30:00', 'M3/M4+1M2', '3 parties systéme AURARD', '', 16, 'ST CECILE', 'Q'),
(77, 'PROMOTION', 'BLB AVIGNON', '2016-11-12 09:30:00', 'M3/M4', 'poules', '3° tour challenge oudin', 64, 'BLB AVIGNON', 'D'),
(78, 'LOISIRS', 'SORGUES', '2016-11-16 09:30:00', 'M3/M4', NULL, 'plus de 55 ans', 8, 'SORGUES', 'Q'),
(79, 'OFFICIEL', 'VALREAS', '2016-11-19 15:00:00', NULL, NULL, 'CONGRES DU CBD VAUCLUSE', NULL, 'VALREAS', 'S'),
(80, 'PROMOTION', 'BLB AVIGNON', '2016-11-26 09:30:00', 'M3/M4', 'poules', '4° tour challenge oudin', 64, 'BLB AVIGNON', 'D'),
(81, 'PROMOTION', 'BLB AVIGNON', '2016-11-27 09:30:00', 'M3/M4', 'poules', 'finale challenge OUDIN', 64, 'BLB AVIGNON', 'D'),
(82, 'PROMOTION', 'FAUCON', '2016-11-27 13:30:00', 'M3/M4+1M2', NULL, 'coupe de noel', 8, 'FAUCON', 'T'),
(83, 'PROMOTION', 'BLB AVIGNON', '2016-12-03 09:30:00', 'M3/M4', '3 parties systéme AURARD', 'challenge NISSAN', 16, 'BLB AVIGNON', 'T'),
(84, 'PROMOTION', 'FAUCON', '2016-12-03 13:30:00', 'M3/M4+M2', NULL, 'coupe de noel', 8, 'FAUCON', 'T'),
(85, 'PROMOTION', 'FAUCON', '2016-12-04 09:30:00', 'M3/M4+1M2', NULL, 'finale coupe de noel', 8, 'FAUCON', 'T'),
(86, 'PROMOTION', 'FAUCON', '2016-12-11 09:30:00', 'M3/M4+1M2', NULL, 'challenge phalipou', 16, 'FAUCON', 'D'),
(87, 'PROMOTION', 'BLB AVIGNON', '2017-01-07 09:30:00', 'M3/M4', 'poules', 'grand prix d''hiver 1° tour', 64, 'BLB AVIGNON', 'Q'),
(88, 'PROMOTION', 'FAUCON', '2017-01-08 09:30:00', 'M3/M4+1M2', NULL, 'challenge giraud', 16, 'FAUCON', 'D'),
(89, 'PROMOTION', 'BLB AVIGNON', '2017-01-14 09:30:00', 'M3/M4', 'poules', '2° tour grand prix', 64, 'BLB AVIGNON', 'Q'),
(90, 'PROMOTION', 'BOLLENE', '2017-01-14 08:00:00', 'M3/M4+1M2', '2 TOURS', 'challenges serres', 16, 'BOLLENE', 'Q'),
(91, 'PROMOTION', 'BLB AVIGNON', '2017-01-21 09:30:00', 'M3/M4', 'poules', '3° tour GRAND PRIX', 64, 'BLB AVIGNON', 'Q'),
(92, 'PROMOTION', 'BLB AVIGNON', '2017-01-28 09:30:00', 'M3/M4', 'poules', '4° tour grand prix', 64, 'BLB AVIGNON', 'Q'),
(93, 'PROMOTION', 'BLB AVIGNON', '2017-01-29 09:30:00', 'M3/M4', 'poules', 'journée finale grand prix d''hiver', 64, 'ST CHAMAND', 'Q'),
(94, 'LOISIRS', 'SORGUES', '2017-02-08 09:30:00', 'm3/m4', NULL, 'plus de 55 ans', 8, 'SORGUES', 'Q'),
(95, 'PROMOTION', 'MONTFAVET', '2017-02-19 09:30:00', 'M3/M4', NULL, NULL, 16, 'SAINT CHAMAND AVIGNON', 'Q'),
(96, 'PROPAGANDE', 'ABF AVIGNON', '2017-02-25 08:00:00', 'TD', NULL, NULL, 16, 'boulodrome st chamand AVIGNON', 'Q'),
(97, 'PROMOTION', 'ORANGE', '2017-02-26 08:30:00', 'M3/M4', NULL, 'CHALLENGE VESIGNE', 32, 'PARC DES EXPOSITIONS ORANGE', 'D'),
(98, 'PROPAGANDE', 'ORANGE', '2017-03-04 14:00:00', 'M3/M4', 'poules', 'grand prix de la ville', 32, 'PARC DES EXPOSITIONS ORANGE', 'Q'),
(99, 'PROPAGANDE', 'ORANGE', '2017-03-05 08:30:00', 'M3/M4', NULL, 'suite grand prix', 32, 'parc des expo', 'Q'),
(100, 'FEMININES', 'ORANGE', '2017-03-05 09:30:00', 'TD', 'poules', 'challenge féminin', 8, 'parc des expositions ORANGE', 'D'),
(101, 'PROMOTION', 'UB VALREAS', '2017-03-11 13:30:00', 'M3/M4+1M2', '3 parties systéme AURARD', 'challenge dassonville', 10, 'BOULODROME DE LA ROMEZIERE ( couvert)', 'Q'),
(102, 'PROPAGANDE', 'ABF AVIGNON', '2017-03-18 08:00:00', 'TD', 'éliminatoires', NULL, 32, 'ABF AVIGNON', 'D'),
(103, 'PROMOTION', 'ST CECILE', '2017-03-19 13:30:00', 'M3/M4', '3 parties systéme AURARD', 'TRIPLE MIXTES', 16, 'ST CECILE', 'T'),
(104, 'OFFICIEL', 'BLB AVIGNON', '2017-03-25 08:30:00', 'M3/M4 /F3/F4 loisir et promo', '3 parties systéme AURARD', 'TROPHEE DE FRANCE', 0, 'ST CHAMAND AVIGNON', 'T'),
(105, 'OFFICIEL', 'MONTFAVET', '2017-04-01 13:30:00', 'AS 3/4', 'eliminatoires', 'championnat de vaucluse des AS  demi finale', 0, 'MONTFAVET', 'Q'),
(106, 'OFFICIEL', 'MONTFAVET', '2017-04-02 13:30:00', 'AS 3/4', 'eliminatoires', 'FINALE des AS 3/4', 2, 'MONTFAVET', 'Q'),
(107, 'OFFICIEL', 'BOLLENE', '2017-04-08 13:30:00', 'M3', 'poules', 'championnat de vaucluse simple 3°', 0, 'BOLLENE', 'S'),
(108, 'OFFICIEL', 'BOLLENE', '2017-04-09 08:00:00', 'M3', 'eliminatoires', 'journée finale simple 3°', 0, 'BOLLENE', 'S'),
(109, 'PROMOTION', 'FAUCON', '2017-04-15 09:30:00', 'M3/M4+1M2', 'eliminatoires', 'challenge CLAUZEL', 16, 'FAUCON', 'D'),
(110, 'VETERANS', 'ST CECILE', '2017-04-20 09:00:00', 'M3/M4+1M2 plus 55 ans', '3 parties systéme AURARD', 'challenge SAUVAGE', 32, 'ST CECILE', 'Q'),
(111, 'OFFICIEL', 'MONTFAVET', '2017-04-22 13:30:00', 'M4', 'poules', 'SECTEUR SUD', 0, 'MONTFAVET', 'S'),
(112, 'OFFICIEL', 'VALREAS', '2017-04-22 13:30:00', 'M4', 'poules', 'SECTEUR NORD', 0, 'VALREAS stade barneron', 'S'),
(113, 'OFFICIEL', 'VALREAS', '2017-04-23 08:00:00', 'M4', 'eliminatoires', 'journée finale simple M4', 16, 'VALREAS stade barneron', 'S'),
(114, 'OFFICIEL', 'VEDENE', '2017-04-29 13:30:00', 'M3', 'poules', 'eliminatoire double 3°', 0, 'VEDENE', 'D'),
(115, 'OFFICIEL', 'VEDENE', '2017-04-30 08:00:00', 'M3', 'eliminatoires', 'journée finale double M3', 16, 'VEDENE', 'D'),
(116, 'OFFICIEL', 'BOLLENE', '2017-05-01 09:00:00', 'TD', '3 parties systéme AURARD', 'coupe des présidents', 20, 'BOLLENE', 'Q'),
(117, 'OFFICIEL', 'ORANGE', '2017-05-06 13:00:00', 'M4', 'poules', 'eliminatoire double M4', 0, 'ORANGE LA BRUNETTE', 'D'),
(118, 'OFFICIEL', 'ORANGE', '2017-05-07 08:00:00', 'M4', 'eliminatoires', 'journée finale double M4', 0, 'ORANGE LA BRUNETTE', 'D'),
(119, 'PROMOTION', 'FAUCON', '2017-05-08 09:30:00', 'M3/M4+1M2', 'eliminatoires', 'challenge tourniaire', 16, 'FAUCON', 'Q'),
(120, 'PROMOTION', 'COURTHEZON', '2017-05-13 13:30:00', 'M3/M4', 'eliminatoires', 'challenge U express', 16, 'COURTHEZON', 'D'),
(121, 'TIR', 'VEDENE', '2017-05-14 13:30:00', 'TD', 'poules', 'COMBINE et POINT CIBLE', 0, 'VEDENE', 'S'),
(122, 'OFFICIEL', 'MARTIGUES', '2017-05-14 08:00:00', 'championnat régional des AS 3/4', 'eliminatoires', '', 4, 'MARTIGUES', 'Q'),
(123, 'OFFICIEL', 'CAMARET', '2017-05-17 09:00:00', 'VETERANS  M3/M4+1M2', 'poules', 'championnat de vaucluse vétérans i', 0, 'CAMARET', 'Q'),
(124, 'OFFICIEL', 'CAMARET', '2017-05-18 09:00:00', 'M3/M4+1M2', 'eliminatoires', 'journée finale véterans', 4, 'CAMARET', 'Q'),
(125, 'OFFICIEL', 'ABF AVIGNON', '2017-05-20 13:00:00', 'TD', 'poules', 'championnat régional simple', 0, 'ABF AVIGNON ile piot', 'S'),
(126, 'OFFICIEL', 'ABF AVIGNON', '2017-05-21 08:00:00', 'TD', 'eliminatoires', 'suite régional simple', 0, 'ABF AVIGNON ile piot', 'S'),
(127, 'PROMOTION', 'BOLLENE', '2017-05-25 09:00:00', 'M3/M4+1M2', '3 parties systéme AURARD finale obligatoire', NULL, 24, 'BOLLENE', 'D'),
(128, 'OFFICIEL', 'district 04/05', '2017-05-27 13:00:00', 'TD', 'poules', 'régional double TD', 0, 'district 04/05', 'D'),
(129, 'OFFICIEL', 'district 04/05', '2017-05-28 08:00:00', 'TD', 'eliminatoires', 'suite regional double TD', 0, 'DISTRICT 04/05', 'D'),
(130, 'PROMOTION', 'CAMARET', '2017-06-03 13:00:00', 'M3/M4', 'eliminatoires', 'concours de la fête', 16, 'CAMARET', 'Q'),
(131, 'PROMOTION', 'ORANGE', '2017-06-04 13:00:00', 'M3/M4', 'eliminatoires', 'challenge MOREL', 16, 'ORANGE', 'Q'),
(132, 'VETERANS', 'CAMARET', '2017-06-06 09:00:00', 'M3/M4', 'eliminatoires', 'plus de 55 ans', 16, 'CAMARET', 'Q'),
(133, 'OFFICIEL', 'st CECILE', '2017-06-07 13:30:00', 'M/M4+1M2 vétérans', 'poules', 'regional vétérans', 8, 'ST CECILE', 'Q'),
(134, 'OFFICIEL', 'ST CECILE', '2017-06-08 09:00:00', 'M3/M4+1M2 VETERANS', 'eliminatoires', 'suite régional vétérans', 4, 'ST CECILE', 'Q'),
(135, 'PROMOTION', 'ST CECILE', '2017-06-10 13:00:00', 'M/M4', '3 parties systéme AURARD', 'systeme aurard', 16, 'ST CECILE', 'T'),
(136, 'OFFICIEL', 'BOLLENE', '2017-06-16 17:00:00', 'MINI CONGRES', NULL, 'MINI CONGRES', 0, 'BOLLENE', 'S'),
(137, 'OFFICIEL', 'VALREAS', '2017-06-17 13:00:00', 'M3/M4', 'poules', 'championnat de vaucluse quadrette M3/M4', 0, 'VALREAS stade barneron', 'Q'),
(138, 'OFFICIEL', 'VALREAS', '2017-06-18 08:00:00', 'M3/M', 'eliminatoires', 'suite championnat quadrette', 0, 'VALREAS', 'Q'),
(139, 'OFFICIEL', 'VALREAS', '2017-06-17 13:00:00', 'F3/F4 plus triple jeunes', 'poules', 'régional triple féminins', 0, 'VALREAS', 'T'),
(140, 'OFFICIEL', 'VALREAS', '2017-06-18 08:00:00', 'triple feminin plus jeunes', 'eliminatoires', 'suite régional F + jeunes', 0, 'VALREAS', 'T'),
(141, 'PROMOTION', 'VISAN', '2017-06-24 13:45:00', 'M3/M4', 'eliminatoires', NULL, 16, 'VISAN', 'D'),
(142, 'OFFICIEL', 'FEURS(42)', '2017-07-01 08:00:00', 'TD', 'poules', 'championnat de france doubles', 0, 'FEURS', 'D'),
(143, 'OFFICIEL', 'FEURS (42)', '2017-07-02 08:00:00', 'TD', NULL, 'suite championnat de france double', 0, 'FEURS', 'D'),
(144, 'PROMOTION', 'VALREAS', '2017-07-08 15:30:00', 'TD  triple mixte', '3 parties systéme AURARD', 'repas sous les arbres aprés la 2°', 32, 'VALREAS', 'T'),
(145, 'PROMOTION', 'LAPALUD', '2017-07-12 13:30:00', 'M3/M4', 'eliminatoires', NULL, 16, 'LAPALUD', 'T'),
(146, 'OFFICIEL', 'CHAMBERY', '2017-07-21 08:00:00', 'TD', 'poules', 'championnat de france quadrette adultes / jeunes et triple féminin', 0, 'CHAMBERY', 'Q'),
(147, 'OFFICIEL', 'CHAMBERY', '2017-07-22 08:00:00', 'TD', 'eliminatoires', 'championnat de france quadrette adultes / jeunes et triple féminin', 0, 'CHAMBERY', 'Q'),
(148, 'OFFICIEL', 'chambery', '2017-07-23 08:00:00', 'TD', 'eliminatoires', 'championnat de france quadrette adultes / jeunes et triple féminin', 0, 'CHAMBERY', 'Q'),
(149, 'PROMOTION', 'VISAN', '2017-07-29 13:45:00', 'M3/M4+1M2', NULL, NULL, 16, 'VISAN', 'T'),
(150, 'PROMOTION', 'ORANGE', '2017-08-05 13:30:00', 'TD', NULL, 'triple mixte', 8, 'ORANGE', 'T'),
(151, 'PROMOTION', 'COURTHEZON', '2017-08-19 13:30:00', 'M3/M4', 'eliminatoires', 'challenge jamet', 16, 'COURTHEZON', 'D'),
(152, 'OFFICIEL', 'championnat de france simple', '2017-08-26 08:00:00', 'TD', NULL, NULL, 0, 'a déterminer', 'S'),
(153, 'OFFICIEL', 'suite championnat de france simple', '2017-08-27 08:00:00', 'TD', NULL, NULL, 0, 'a détérminer', 'S'),
(154, 'PROMOTION', 'MONTFAVET', '2017-09-03 09:00:00', 'M3/M4', 'eliminatoires', 'challenge rené MORIN', 32, 'MONTFAVET', 'D'),
(155, 'PROMOTION', 'VEDENE', '2017-09-09 13:30:00', 'M3/M4+1M2', 'eliminatoires', 'grand prix de la ville', 16, 'VEDENE', 'T'),
(156, 'PROPAGANDE', 'VALREAS', '2017-09-10 08:00:00', 'TD', 'eliminatoires', '2 tours challenge jean vich', 64, 'VALREAS', 'D'),
(157, 'PROMOTION', 'VALREAS', '2017-09-10 11:00:00', 'TD', 'eliminatoires', 'challenge boussey', 32, 'VALREAS', 'D'),
(158, 'OFFICIEL', 'championnat vétérans et as 3/4', '2017-09-08 08:00:00', 'championnat véterans et as 3/4', 'poules', NULL, 0, 'a déterminer', 'Q'),
(159, 'OFFICIEL', 'championnat de france vétérans et AS3/4', '2017-09-09 08:00:00', 'championnat de france', NULL, 'championnat de france véterans et as 3/4', 0, 'a déterminer', 'Q'),
(160, 'OFFICIEL', 'championnat de france', '2017-09-10 08:00:00', 'championnat de france', NULL, 'suite championnat de france vétérans et as 3/4', 0, 'a determiner', 'Q'),
(161, 'OFFICIEL', 'fin de saison 2016/2017', '2017-09-15 08:00:00', NULL, NULL, NULL, 0, NULL, 'S');

-- --------------------------------------------------------

--
-- Structure de la table `feeds`
--

CREATE TABLE IF NOT EXISTS `feeds` (
  `id_feed` bigint(20) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `content` varchar(1024) DEFAULT NULL,
  `creationDate` datetime DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `facebookLike` bit(1) NOT NULL,
  `top` bit(1) NOT NULL,
  `imagePosition` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `imageTitle` varchar(255) DEFAULT NULL,
  `imageExtension` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `imageWidth` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_feed`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=161 ;

--
-- Contenu de la table `feeds`
--

INSERT INTO `feeds` (`id_feed`, `author`, `content`, `creationDate`, `title`, `facebookLike`, `top`, `imagePosition`, `imageUrl`, `imageTitle`, `imageExtension`, `type`, `imageWidth`) VALUES
(55, 'Raymond Vich', '<p>Sur ce site, vous trouverez toutes les informations n&eacute;cessaires &agrave; la vie du sport boule lyonnaise en Vaucluse :&nbsp;les actualit&eacute;s,&nbsp;&nbsp;les calendriers,&nbsp;les r&eacute;sultats,&nbsp;les associations sportives et&nbsp;les membres du CBD 84 - Vaucluse.<strong> <br /></strong></p>\n<div>Ce site relaiera aussi des infos de la FFSB pour les comp&eacute;titions nationales.</div>\n<p>Bien &agrave; vous, le pr&eacute;sident du CBD Vaucluse et ses membres, <strong>Raymond Vich, Gilbert Navarro et Alain Canonge.</strong></p>', '2016-01-12 00:00:00', 'Bienvenue sur le site officiel du Comité Bouliste Départemental du  Vaucluse', b'0', b'1', 'right', 'images/get/feeds/jpg/55?cb=756599.7415664991', '', 'jpg', 'actus', '256'),
(71, 'G.N.', '<p style="text-align: justify;">Les dossiers concernant les organisations et les inscriptions des f&eacute;d&eacute;raux 2016 vous ont &eacute;t&eacute; adress&eacute;s ce jour par mail ou par voie postale. Vous pouvez les consulter &agrave; partir du menu <strong>"Documentation"</strong><em><strong>.<br /></strong></em></p>', '2016-03-08 00:00:00', 'Championnats de Vaucluse 2016', b'0', b'0', 'right', 'images/get/feeds/jpg/71?cb=252908.832804241221', 'club N3', NULL, 'actus', '256'),
(77, 'RV', '<p>2 stages d''arbitre local ont &eacute;t&eacute; effectu&eacute; dans le VAUCLUSE :14 personnes dans le secteur sud et 13 personnes dans le secteur nord 2 bonnes journ&eacute;es bien encadr&eacute;es par lionel ABER / sebastien CHARROUSSET / et les arbitres du vaucluse elisabeth VICH/christelle DENAT / florian D''HAENENS et le pr&eacute;sident R VICH&nbsp;</p>', '2016-03-11 00:00:00', 'arbitre local cbd 84', b'0', b'0', NULL, 'images/get/feeds/jpg/77', NULL, 'jpg', 'actus', '128'),
(78, 'RV', '<p>suite photos</p>', '2016-03-11 00:00:00', 'arbitre local cbd 84 2', b'0', b'0', 'left', 'images/get/feeds/jpg/78', NULL, 'jpg', 'actus', '256'),
(80, 'RV', '<p>le samedi 19 mars 2016 l''ABF a organis&eacute; son grand prix de la ville d''AVIGNON , c''eetait un 32 doubles toutes divisions , l''organisation etait parfaite avec des jeux superbes un carr&eacute; d'' honneur en couleur bleu et blanc .</p>\n<p>pour le sportif c''est l''&eacute;quipe CONIL christophe / FERRET jean pierre ( NIMES /38) qui a remport&eacute; le challenge sur le score de 9 &agrave; 8 face a l''&eacute;quipe de l''ESB avignon compos&eacute;e de BECRET jean michel / ALVAREZ jos&eacute; et MARTIN david .</p>\n<p>&nbsp;</p>', '2016-03-22 00:00:00', 'grand prix de la ville d''avignon ABF', b'0', b'1', 'right', 'images/get/feeds/jpg/80', 'les finalistes du grand prix', 'jpg', 'results', '256'),
(81, 'RV', '<p>la coupe de provence f&eacute;minines toutes divisions se fera a VEYNES le dimanche 12 juin 2016 , le cbd vaucluse n''aura qu''une &eacute;quipe cette ann&eacute;e , &nbsp;nous avons un bonne quinzaine de joueuses inscrites . le mercredi 11 mai a 14 H &nbsp;a CAMARET aura lieu une rencontre entre les 2 &eacute;quipes form&eacute;es sur place par gilbert NAVARRO .a l''issue de cette journ&eacute;e l''&eacute;quipe vainqueur repr&eacute;sentera le CBD &nbsp;toute fois l''&eacute;quipe qualifi&eacute;e pourra &ecirc;tre compl&eacute;t&eacute; le cas &eacute;ch&eacute;ant . <strong>mesdames rendez vous le 11mai&nbsp;</strong></p>', '2016-03-30 00:00:00', 'coupe de provence des AS féminines', b'0', b'1', 'right', 'images/get/feeds/jpg/81', 'reunion a camaret', 'jpg', 'actus', '256'),
(82, 'RV', '<p>pour voir l'' organisation du troph&eacute;e de FRANCE il faut aller dans documentation&nbsp;</p>', '2016-04-01 00:00:00', 'Trophée de France 3° et 4°', b'0', b'1', 'left', NULL, NULL, NULL, 'actus', NULL),
(83, 'RVICH', '<p>demi finale et finale du championnat des AS 3/4 &nbsp;lieu VEDENE le 03/04/2016.</p>\n<p>r&eacute;sultats demi : ABF 26 / st cecile 14 &nbsp;, VISAN 26 / vedene 14</p>\n<p>FINALE VISAN ( haut vaucluse ) 21 / ABF AVIGNON &nbsp;19 &nbsp;belle rencontre qui c''est jou&eacute;e dans le dernier double et la derniere maine , superbe accueil de nos amis de VEDENE &nbsp;dans un tr&eacute;s beau boulodrome de 8 jeux tout neuf ainsi que des locaux tr&eacute;s fonctionnel &nbsp;, bravo a eux pour cette organisation &nbsp;et souhaitons bonne chance a nos amis de VISAN pour le r&eacute;gional qui aura lieu le dimanche 22 mai a L''ARGENTIERE LABESSE ( 05) &nbsp;</p>', '2016-04-05 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'right', 'images/get/feeds/jpg/83', 'l''équipe championne de vaucluse', 'jpg', 'results', '256'),
(84, 'RVICH', '<p>suite photo</p>', '2016-04-05 00:00:00', 'championnat des AS 3/4 N° 2', b'0', b'1', 'right', 'images/get/feeds/jpg/84', 'VEDENE', 'jpg', 'results', '256'),
(85, 'RVICH', '<p>suite photos</p>', '2016-04-05 00:00:00', 'championnat des AS 3/4  N°3', b'0', b'1', 'right', 'images/get/feeds/jpg/85', 'ABF', 'jpg', 'results', '256'),
(86, 'RVICH', '<p>suite photos</p>', '2016-04-05 00:00:00', 'championnat des AS 3/4 N° 4', b'0', b'1', 'right', 'images/get/feeds/jpg/86', 'sainte cécile les vignes', 'jpg', 'results', '256'),
(89, 'RVICH', '<p>le samedi 2 avril a FAUCON avait lieu le challenge alain et roger CLAUZEL c''etait un 16 doubles 3/4 avec 1 N</p>\n<p>la comp&eacute;tition d&eacute;butait le matin a 09h30 arr&ecirc;t a midi pour un excellent repas concoct&eacute; par le pr&eacute;sident .</p>\n<p>il y avait 70 personnes au repas avec bien s&ucirc;r toute la famille CLAUZEL .</p>\n<p>r&eacute;sultats sportif : en finale l''&eacute;quipe elisabeth et raymond VICH prenaient le meilleur sur l''&eacute;quipe rolland BODGI/ alain&nbsp;PELOURSON de ROMAN sur le score de 13 &agrave; 9 . le challenge CLAUZEL &eacute;tait remis a l''&eacute;quipe de VALREAS et celle ci le laisser a florant CLAUZEL . pour le 2&deg; concours c''est l''autre &eacute;quipe de VALREAS avec pierre et v&eacute;ronique DENIA qui l''emportaient .</p>\n<p>beau concours bien organis&eacute; et tr&eacute;s belle joun&eacute;e &nbsp;</p>', '2016-04-08 00:00:00', 'challenge CLAUZEL a FAUCON', b'0', b'0', 'left', 'images/get/feeds/jpg/89?cb=808660.19774807981', 'les 4 équipes finalistes', 'jpg', 'results', '256'),
(91, 'G.N.', '<p>le 9 et 10 avril c''est d&eacute;roul&eacute; a BOLLENE le &nbsp;DOUBLE 3&deg; qualificatif pour le r&eacute;gional du 4/5 juin a l''ABF AVIGNON .</p>\n<p>r&eacute;sultats : demi finale NYAI / BARROS / REBOURCEL ( st cecile) battent DENAT / BATIFOL ( bollene) 11 &agrave; 10&nbsp;</p>\n<p>l''autre demi = ROLLAND / JAUME /BEGOT ( visan ) battent CARRE/ OBINO/ BOYER 13 a 4</p>\n<p>FINALE : ROLLAND / JAUME/ BEGOT battent NYAI / REBOURCEL / BARROS &nbsp;sur le score de 13 a 11 (NYAI 16/29-3 buts), BEGOT (2/7),JAUME (5/11)</p>\n<p>les 2 &eacute;quipes sont qualifi&eacute;es pour le r&eacute;gional .</p>\n<p>3&deg; place = l''&eacute;quipe DENAT / BATIFOL ( bollene ) battent CARRE/ OBINO/ BOYER ( bollene) sur le score de 13 a 10 . l''&eacute;quipe DENAT / BATIFOL est qualifi&eacute;e pour le r&eacute;gional &nbsp;</p>', '2016-04-11 00:00:00', 'championnat de vaucluse doubles 3° divisions a bollene', b'0', b'1', 'right', 'images/get/feeds/jpg/91?cb=934126.71898195121', 'les équipes qualifiées pour le régional', NULL, 'results', '256'),
(92, 'RV', '<p>le 16 et 17 avril a eu lieu le championnat de vaucluse en simple 4&deg; &nbsp;il y avait 2 secteurs , le sud a montfavet avec 27 joueurs et le nord a st c&eacute;cile avec 37 joueurs , on a qualifi&eacute; 16 joueurs pour la journ&eacute;e finale a MONTFAVET : r&eacute;sultats &nbsp;en demi finale BANCEL th de VISAN bat BOUSQUET eric de vedene &nbsp;et PELLISIER claude bat RINALDI loic , en finale BANCEL th prenait le meilleur sur PELLISSIER claude sur le score de 13 a 11 les 2 joueurs sont qualifi&eacute;s pour le r&eacute;gional a BERRE .</p>\n<p>pour la 3&deg; place BOUSQUET eric prenait le meilleur sur RINALDI loic et se qualifi&eacute; lui aussi pour le r&eacute;gional bravo a tous et merci a elisabeth VICH et jean pierre ARNAUDET qui ont tenu la table de marque a st c&eacute;cile et a elisabeth MAZOYER et robert HUERTAS qui ont tenu celle de MONTFAVET &nbsp;et merci au 2 arbitres christelle DENAT et florian D''HAENENS&nbsp;</p>', '2016-04-19 00:00:00', 'championnat de vaucluse simple 4°', b'0', b'1', 'right', 'images/get/feeds/jpg/92', 'les champions et les dirigeants', 'jpg', 'results', '256'),
(94, 'G.N.', '<p>35 joueurs se disputaient les 23 et 24 avril les championnats simples 3&egrave; division confi&eacute;s &agrave; La Grosse Boule Camar&eacute;toise. Raymond Roure,son Pr&eacute;sident et sa remarquable &eacute;quipe de b&eacute;n&eacute;voles avaient comme de coutume mis les petits plats dans les grands. Quelques t&eacute;nors (ou suppos&eacute;s tels) ont tr&eacute;buch&eacute;s lors de la 1&egrave;re journ&eacute;e,et notamment, Anthony Debeauquesne &eacute;tincelant au tir. L''&eacute;cr&eacute;mage se poursuivait en 1/8&egrave; et en 1/4 qui virent &eacute;merger les tenaces JP Podda et P. Matas bien d&eacute;cid&eacute;s &agrave; ne pas se contenter des miettes. En 1/2 deux des favoris, Carre (Boll&egrave;ne) et Rolland (Visan) &eacute;taient oppos&eacute;s &agrave; Matas (Ved&egrave;ne) et Podda (Camaret). Si Rolland contourna difficilement l''obstacle, Carre s''inclinait 13-11 apr&egrave;s que Matas ait annul&eacute; au jet pr&eacute;c&eacute;dent. &nbsp; &nbsp;&nbsp;</p>', '2016-04-26 00:00:00', 'Grégory ROLLAND champion simples 3ème division face à P.MATAS', b'0', b'1', 'left', 'images/get/feeds/jpg/94', NULL, 'jpg', 'results', '256'),
(95, 'RVICH', '<p>la coupe des pr&eacute;sidents a eu lieu a VALREAS le 1&deg; mai &nbsp;la comp&eacute;tition c''est d&eacute;roul&eacute;e au boulodrome couvert de la romeziere a cause du mauvais temps &nbsp;, apr&eacute;s les parties en 2 tours et 01h30 le verdict est tomb&eacute; vers 19H &nbsp;, 2 &eacute;quipes etaient a &eacute;galit&eacute; CAMARET et la BLB AVIGNON et la 3&deg; place pour LAPALUD &nbsp;le representant de la municipalit&eacute; de VALREAS remettais le challenge jean VICH a LA BLB et la coupe du souvenir a CAMARET . la journ&eacute;e c''est d&eacute;roul&eacute;e dans une excellente ambiance conviviale &nbsp;et un bon repas a midi servi a la salle du vignares par l''&eacute;quipe du VAURIAS &nbsp;la journ&eacute;e etait cl&ocirc;tur&eacute;e par un ap&eacute;ritif offert par l''UBV &nbsp;.</p>\n<p>belle journ&eacute;e dommage que le temps n''etait pas de la partie&nbsp;</p>', '2016-05-02 00:00:00', 'coupe des présidents 1', b'0', b'0', 'left', 'images/get/feeds/jpg/95', 'les 2 équipes finalistes', 'jpg', 'results', '512'),
(96, 'RVICH', '<p>&eacute;quipes qui ont particip&eacute; CAMARET</p>', '2016-05-02 00:00:00', 'coupes des presidents  2016  1', b'0', b'0', 'left', 'images/get/feeds/jpg/96', 'camaret', 'jpg', 'actus', '512'),
(97, 'RVICH', '<p>&eacute;quipes BLB</p>', '2016-05-02 00:00:00', 'coupes des président 2', b'1', b'1', 'left', 'images/get/feeds/jpg/97?cb=120596.961784528771', NULL, NULL, 'actus', '512'),
(98, 'RVICH', '<p>LAPALUD</p>', '2016-05-02 00:00:00', 'coupe des présidents3', b'0', b'0', 'left', 'images/get/feeds/jpg/98', NULL, 'jpg', 'actus', '512'),
(99, 'RVICH', '<p>orange</p>', '2016-05-02 00:00:00', 'coupe des présidents 4', b'0', b'0', 'left', 'images/get/feeds/jpg/99', NULL, 'jpg', 'actus', '512'),
(100, 'RVICH', '<p>MONTFAVET</p>', '2016-05-02 00:00:00', 'coupe des présidents 5', b'0', b'0', 'left', 'images/get/feeds/jpg/100', NULL, 'jpg', 'actus', '512'),
(101, 'RVICH', '<p>BOLLENE</p>', '2016-05-02 00:00:00', 'coupe des présidents 6', b'0', b'0', 'left', 'images/get/feeds/jpg/101', NULL, 'jpg', 'actus', '512'),
(102, 'RVICH', '<p>VISAN</p>', '2016-05-02 00:00:00', 'coupe des présidents 7', b'0', b'0', 'left', 'images/get/feeds/jpg/102', NULL, 'jpg', 'actus', '512'),
(103, 'RVICH', '<p>ST CECILE LES VIGNES 1</p>', '2016-05-02 00:00:00', 'coupe des présidents 8', b'0', b'0', 'left', 'images/get/feeds/jpg/103', NULL, 'jpg', 'actus', '512'),
(104, 'RVICH', '<p>ST CECILE 2</p>', '2016-05-02 00:00:00', 'coupe des présidents 9', b'0', b'0', 'left', 'images/get/feeds/jpg/104', NULL, 'jpg', 'actus', '512'),
(105, 'RVICH', '<p>st cecile 3</p>', '2016-05-02 00:00:00', 'coupe des présidents 10', b'0', b'0', 'left', 'images/get/feeds/jpg/105', NULL, 'jpg', 'actus', '512'),
(106, 'RVICH', '<p>ABF</p>', '2016-05-02 00:00:00', 'coupe des présidents 11', b'0', b'0', 'left', 'images/get/feeds/jpg/106', NULL, 'jpg', 'actus', '512'),
(107, 'RVICH', '<p>ORANGE</p>', '2016-05-02 00:00:00', 'coupe des présidents 12', b'0', b'0', 'left', 'images/get/feeds/jpg/107', NULL, 'jpg', 'actus', '512'),
(108, 'RVICH', '<p>CAMARET 1</p>', '2016-05-02 00:00:00', 'coupe des présidents 13', b'0', b'0', NULL, 'images/get/feeds/jpg/108', NULL, 'jpg', 'actus', '512'),
(109, 'RVICH', '<p>VALREAS 1</p>', '2016-05-02 00:00:00', 'coupe des présidents14', b'0', b'0', 'left', 'images/get/feeds/jpg/109', NULL, 'jpg', 'actus', '512'),
(110, 'RVICH', '<p>VALREAS 2</p>', '2016-05-02 00:00:00', 'coupe des présidents15', b'0', b'0', 'left', 'images/get/feeds/jpg/110', NULL, 'jpg', 'actus', '512'),
(111, 'RVICH', '<p>CBD BUREAU&nbsp;</p>', '2016-05-02 00:00:00', 'coupe des présidents 16', b'0', b'0', 'left', 'images/get/feeds/jpg/111', NULL, 'jpg', 'actus', '512'),
(112, 'RVICH', '<p>ce week end a eu lieu le championnat de VAUCLUSE en double 4&deg; D a MONTFAVET il y a eu 32 &eacute;quipes d''engag&eacute;es ( 1 qui n''est pas venue et 1 sans tampon m&eacute;dical ) bonne reception de nos amis de MONTFAVET toujours avec le sourire , bon arbitrage d''&eacute;lisabeth VICH et florian D''HAENENS &nbsp;et merci a JP ARNAUDET qui a tenu la table pendant 2 jours .voici les r&eacute;sultats sportifs :</p>\n<p>champion de vaucluse : MONIER thierry et julien de VISAN , sous champion de vaucluse : BOUYA alain / MORIN thierry / BOUSQUET eric de MONTFAVET . / 3&deg; equipe qualifi&eacute;e REY jean / DELPO&Iuml;O bernard / GUIGUE jean pierre d''ORANGE &nbsp;, les 3 &eacute;quipes sont qualifi&eacute;es pour le r&eacute;gional le 4 et 5 juin a l''ABF AVIGNON . venez nombreux pour encourager tous nos vauclusiens .</p>', '2016-05-10 00:00:00', 'championnat de vaucluse double 4° (1)', b'0', b'1', 'left', 'images/get/feeds/jpg/112', 'les champions doubles 4°', 'jpg', 'results', '512'),
(113, 'RVICH', '<p>MONTFAVET</p>', '2016-05-10 00:00:00', 'championnat de vaucluse double 4° (2)', b'0', b'1', 'left', 'images/get/feeds/jpg/113?cb=751725.90721662261', NULL, NULL, 'results', '512'),
(114, 'RVICH', '<p>ORANGE</p>', '2016-05-10 00:00:00', 'championnat de vaucluse double 4° (3)', b'0', b'1', 'left', 'images/get/feeds/jpg/114', NULL, 'jpg', 'results', '512'),
(115, 'RVICH', '<p>les dirigeants</p>', '2016-05-10 00:00:00', 'championnat de vaucluse double 4° (4)', b'0', b'1', 'left', 'images/get/feeds/jpg/115', NULL, 'jpg', 'results', '512'),
(116, 'RVICH', '<p>le mercredi 18 et le jeudi 19 mai a eu lieu a orange le championnat v&eacute;terans qualificatif au championnat r&eacute;gional les8 et 9 juin a EMBRUN dans le 04/05 il y a avait &nbsp;16 &eacute;quipes au d&eacute;part &nbsp;la table de marque etait tenue par &eacute;lisabeth MAZOYER et l''arbitrage &eacute;tait assur&eacute; par R VICH . le championnat a rendu son verdict .</p>\n<p>champion de vaucluse l''&eacute;quipe MARTIN michel de l''ABF &nbsp;sous champion l''&eacute;quipe GERBAUT de SARRIANS et pour la 3&deg; place c''est l''&eacute;quipe SERRE de BOLLENE &nbsp;bravo a &nbsp;tous &nbsp;&nbsp;</p>\n<p>rendez vous a EMBRUN &nbsp;et cette ann&eacute;e il y a 3 qualifi&eacute;s pour le FRANCE &nbsp;</p>', '2016-05-23 00:00:00', 'championnat des vétérans  a orange 1', b'0', b'1', 'left', 'images/get/feeds/jpg/116', 'l''équipe championne de l''ABF', 'jpg', 'results', '512'),
(117, 'RVICH', '<p>SARRIANS&nbsp;</p>', '2016-05-23 00:00:00', 'championnat de vaucluse  vétérans 2016 2', b'0', b'1', 'left', 'images/get/feeds/jpg/117', 'l''équipe de sarrians', 'jpg', 'results', '512'),
(118, 'RVICH', '<p>l''&eacute;quipe de BOLLENE</p>', '2016-05-23 00:00:00', 'championnat de vaucluse  vétérans 2016 3', b'0', b'1', 'left', 'images/get/feeds/jpg/118', 'l''équipe de bollene', 'jpg', 'results', '512'),
(119, 'RVICH', '<p>le dimanche 22 mai a eu lieu le championnat r&eacute;gional des AS 3/4 a l''ARGENTIERE 04/05 &nbsp;l''&eacute;quipe de VISAN qui repr&eacute;sentait le VAUCLUSE a perdu contre le club de l''ARGENTIERE &nbsp;sur le score de 14 &agrave; 26 les &eacute;preuves de points et de tir ont &eacute;t&eacute; tr&eacute;s moyenne dommage car pour le 3&deg; tour il fallait qu''ils remportent le quadrette et soit le simple soit le double , dommage car l''&eacute;quipe etait tr&eacute;s comp&eacute;titive !!! &nbsp;</p>', '2016-05-23 00:00:00', 'championnat régional des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/119', 'l''equipe de VISAN', 'jpg', 'results', '512'),
(120, 'RVICH', '<p>le samedi 21 mai a eu lieu a VALREAS le troph&eacute;e de FRANCE 3&deg; et 4&deg; &nbsp;en systeme &nbsp;aurard la table etait tenue par gibert NAVARRO et l''arbitrage assur&eacute; par E VICH .</p>\n<p>les qualifi&eacute;s en 3&deg; D sont : BARNOUIN therese / BARNOUiN roland/ ARNAUDET jp / ROSSO philippe de BOLLENE</p>\n<p>2&deg; &eacute;quipe : GAMBETTA claire / SERRE marc / CALVIER michel BOLLENE st CECILE</p>\n<p>3&deg; &eacute;quipe : DUMERGER ren&eacute;e et christian / REBOURCEL didier st cecile</p>\n<p>en 4&deg; Divisions:</p>\n<p>1&deg; GROS cathy / BERNAL serge / VERHASSEL jp de CAMARET</p>\n<p>2&deg; SCULFORT ghuylaine / GRANGER lilette / LAFITTE denis / LEYDIER serge CAMARET</p>\n<p>3&deg;&nbsp;MAGNAN marine / RINALDI loic / RINALDI stephane / TRUC patrice.</p>\n<p>toutes les &eacute;quipes sont qualifi&eacute;es pour le r&eacute;gional qui aura lieu le samedi 25 juin 2016 a VALREAS</p>\n<p>bravo a toutes et a tous et merci a l''UBV pour cette organisation &nbsp;</p>', '2016-05-23 00:00:00', 'trophée de france 2016', b'0', b'1', 'left', NULL, NULL, NULL, 'results', NULL),
(121, 'RVICH', '<p>r&eacute;sultats championnat simple a berre le 28 et 29 mai : M2 &nbsp;demi christophe GARCIA bat marc PELLET 13 &agrave; 8 et fred SOURET bat flo D''HAENENS 13 a 10 finale fred SOURET bat christophe GARCIA 13 a 10 fred souret qualifi&eacute; pour le FRANCE a THONONS les BAINS .</p>\n<p>en M3 greg ROLLAND chute en finale face a MEY patrice du 13( 8 a 12 ) &nbsp;</p>\n<p>en M4 idem pour thierry BANCEL qui chutait lui aussi en finale 7 &agrave; 13 face a LAPLACE du 04/05&nbsp;</p>\n<p>1 seul qualifi&eacute; dans ces 2 cat&eacute;gories&nbsp;</p>\n<p>en F4 mireille arrufat de camaret bat isabelle MILLON ( 04/05) 12 a11 les 2 joueuses sont qualifi&eacute;es pour le FRANCE&nbsp;</p>\n<p>en F3 mesdames DENAT et DUMERGER ne sortaient pas des poules ainsi que nos jeunes manon DENAT , clement DUBOIS et nathan D''HAENENS , BRAVO a toutes et a tous avec 2 titres et 5 demi finalistes le vaucluse se porte bIEN !!</p>', '2016-05-30 00:00:00', 'championnat régional simple a berre', b'0', b'1', 'left', 'images/get/feeds/jpg/121?cb=797333.57647250341', NULL, NULL, 'results', '512'),
(122, 'RVICH', '<p>photo des M2</p>', '2016-05-30 00:00:00', 'championnat simple a berre 2', b'0', b'1', 'left', 'images/get/feeds/jpg/122', NULL, 'jpg', 'results', '512'),
(123, 'RVICH', '<p>les M3 et M4</p>', '2016-05-30 00:00:00', 'championnat simple a berre 3', b'0', b'1', 'left', 'images/get/feeds/jpg/123', NULL, 'jpg', 'results', '512'),
(124, 'RVICH', '<p>les F4</p>', '2016-05-30 00:00:00', 'championnat simple a berre 3', b'0', b'1', 'left', 'images/get/feeds/jpg/124?cb=579555.46017333161', NULL, NULL, 'results', '512'),
(125, 'RVICH', '<p>le groupe du vaucluse&nbsp;</p>', '2016-05-30 00:00:00', 'championnat regional simple a berre 4', b'0', b'1', 'left', 'images/get/feeds/jpg/125', NULL, 'jpg', 'results', '512'),
(126, 'RVICH', '<p>les &eacute;quipes du vaucluse 1</p>', '2016-06-08 00:00:00', 'championnat régional double a avignon1', b'0', b'1', 'left', 'images/get/feeds/jpg/126?cb=346627.353624357431', NULL, NULL, 'results', '512'),
(127, 'RVICH', '<p>les M2</p>', '2016-06-08 00:00:00', 'championnat régional double a avignon2', b'0', b'1', 'left', 'images/get/feeds/jpg/127', NULL, 'jpg', 'results', '512'),
(128, 'RVICH', '<p>les F2</p>', '2016-06-08 00:00:00', 'championnat régional double a avignon3', b'0', b'1', 'left', 'images/get/feeds/jpg/128?cb=339712.321539468251', NULL, NULL, 'results', '512'),
(129, 'RVICH', NULL, '2016-06-08 00:00:00', 'championnat régional double a avignon4', b'0', b'1', 'left', 'images/get/feeds/jpg/129', NULL, 'jpg', 'results', '512'),
(130, 'RVICH', '<p>les F3</p>', '2016-06-08 00:00:00', 'championnat régional double a avignon 5', b'0', b'1', 'left', 'images/get/feeds/jpg/130', NULL, 'jpg', 'results', '512'),
(131, 'RVICH', '<p>les M4</p>', '2016-06-08 00:00:00', 'championnat régional double a avignon 6', b'0', b'1', 'left', 'images/get/feeds/jpg/131', NULL, 'jpg', 'results', NULL),
(132, 'RVICH', '<p>r&eacute;sultats du r&eacute;gional double a avignon: en M2 souret fred / garcia christophe / vich raymond se qualifient pour le FRANCE a BEZIER / en F2 l''&eacute;quipe elisabeth vich / solerieu mth se qualifient pour le france / en F4 l''&eacute;quipe arrufat mireille / Mm imp&eacute;raire&nbsp;se qualifient pour le FRANCE / en F3 l''&eacute;quipe denat christelle et manon avec Mm barnouin therese ont perdu en finale mais se qualifient pour le france .en M4 monier thierry et julien ont chut&eacute; en finale face a sorentino ( 13 ) seul le champion va au france , en &nbsp;M3 didier denat / patrick batifol ont perdu en demi finale face a gielly de gap seul les 2 finalistes vont au france ! avec 3 titres 4 qualifi&eacute;es et 4 demi finalistes le cbd vaucluse est fier de ses troupes : RENDEZ VOUS A BEZIER les2 et 3 juillet &nbsp;</p>\n<p>&nbsp;</p>', '2016-06-09 00:00:00', 'championnat régional double a avignon7', b'0', b'1', 'left', 'images/get/feeds/jpg/132', NULL, 'jpg', 'results', NULL),
(133, 'RVICH', '<p>le championnat de vaucluse quadrettes se d&eacute;roulera a BOLLENE les 18 et 19 juin 2016 arbitre Mm DENAT christelle &nbsp;a la table NAVARRO gilbertet emile imp&eacute;raire , le tirage au sort se fera a MONTFAVET le 17 juin pour le mini congr&eacute;s , les M2 ( valr&eacute;as et l''abf )vont a BEZIER pour l''inter r&eacute;gion quadrette avec PACA / languedoc roussillon / midi pyr&eacute;nn&eacute;e &nbsp;/ en triple F3 / F4 &nbsp;l''&eacute;quipe DENIA / MERY / BRAVO / DUMERGER bvont a FOS sur MER pour le r&eacute;gional &nbsp; BONNE CHANCE A TOUTES ET A TOUS&nbsp;</p>', '2016-06-09 00:00:00', 'championnat de vaucluse quadrettes 3° et 4° a bollene', b'0', b'1', NULL, 'images/get/feeds/jpg/133', NULL, 'jpg', 'actus', '512'),
(134, 'RVICH', '<p>le 8 et 9 juin c''est d&eacute;roul&eacute; a EMBRUN ( 05) le championnat r&eacute;gional v&eacute;t&eacute;rans qualificatif au FRANCE de cluses le10 et 11 septembre : sont champion l''&eacute;quipe MARTINmichel/ GATTI bernard / BARTHELEMY francis / BECRET daniel / PEYRONNEL robert de l''ABF &nbsp;, ils ont pris la 3&deg; place qualificative l''&eacute;quipe de SARRIANS :GIRBAU jean marc / LAURENT g&eacute;rard/ GIARDINI jean pierre / BELGRAND jacques / ROUMIEU marc&nbsp;</p>\n<p>bravo a tous&nbsp;</p>', '2016-06-10 00:00:00', 'championnat régional vétérans a embrun 05', b'0', b'1', 'left', 'images/get/feeds/jpg/134', NULL, 'jpg', 'results', '512'),
(135, 'RVICH', '<p>ce week end a lieu a VEYNES la coupe de provence des AS f&eacute;minines , il y avait 4 &eacute;quipes suite aux s&eacute;l&eacute;ctions : 1 dans le vauclus , 2 dans le 04/05 et 1 dans le 13 , apr&eacute;s un parcours sans fautes notre &eacute;quipe VAUCLUSIENNE a remport&eacute;e pour la 2&deg; ann&eacute;e consecutive la COUPE DE PROVENCE : demi finale VAUCLUSE 22 hautes alpes 16 FINALE VAUCLUSE 24 bouche du rh&ocirc;ne 4 &nbsp;. BRAVO mesdames VICH elisabeth / solerieu / denat manon et christelle / gambetta claire / bravo clara / mazoyer elisabeth denia veronique dumerger ren&eacute;e beroule eliane &nbsp;</p>', '2016-06-13 00:00:00', 'coupe de provence des AS féminines 2016', b'0', b'1', 'left', 'images/get/feeds/jpg/135', NULL, 'jpg', 'results', '512'),
(136, 'RVICH', '<p>photos de groupe&nbsp;</p>', '2016-06-13 00:00:00', 'coupe de provence des AS féminines 2016 1', b'0', b'1', 'left', 'images/get/feeds/jpg/136', NULL, 'jpg', 'results', '512'),
(137, 'RVICH', '<p>le vaucluse r&eacute;compens&eacute;&nbsp;</p>', '2016-06-13 00:00:00', 'coupe de provence des AS féminines 2016 2', b'0', b'1', 'left', 'images/get/feeds/jpg/137', NULL, 'jpg', 'results', '512'),
(139, 'RVICH', '<p>le&nbsp;18 et 19 juin a eu lieu a BOLLENE le championnat de vaucluse quadrette 4&deg; divisions avec 17 &eacute;quipes au d&eacute;part &nbsp;: r&eacute;sultats demi finale VASSE ( bollene) bat BACCONIER ( bollene) 13 &agrave; 6 / ROL ( vedene ) bat NAPOLEON ( valr&eacute;as ) 13 &agrave; 8 &nbsp;finale : ROL / LEGGIERRI / GARCIA / CARRE/ RIGNON-BRIET ( vedene) battent VASSE jmarie et jackline/ MARCELLIN / LAFITE / RIBIER( bollene) sur le score de 11 &agrave; 10 et se qualifie pour le FRANCE a l''ARBRESLE .</p>', '2016-06-24 00:00:00', 'championnat de vaucluse quadrettes 3° et 4° a bollene', b'0', b'1', 'right', 'images/get/feeds/jpg/139', NULL, 'jpg', 'results', '512'),
(140, 'RVICH', '<p>championnat de vaucluse quadrette 3&deg; divisions : 11 &eacute;quipes d''engag&eacute;es &nbsp; r&eacute;sultats : demi finale ROLLAND (esb haut vaucluse ) bat GATTI ( abf ) 13 &agrave; 10 / BUISSON ( valr&eacute;as ) bat ARNAUDET ( bollene) 13&agrave;7 FINALE &nbsp;ROLLAND / JAUME / BEGOT / DEBROAS serge et bernard &nbsp;( esb haut vaucluse ) battent BUISSON / VICH s/ DENIA / CARUANA / DUMERGER &nbsp;( valr&eacute;as ) sur le score de 13 &agrave; 6 et se qualifient pour le FRANCE de L''ARBRESLE du 22/23/24 juillet&nbsp;</p>', '2016-06-24 00:00:00', 'championnat de vaucluse quadrettes 3° et 4° a bollene 1', b'0', b'1', 'right', 'images/get/feeds/jpg/140', NULL, 'jpg', 'results', '512'),
(141, 'RVICH', '<p>a BEZIER c''est d&eacute;roul&eacute; le championnat quadrette inter r&eacute;gion 2&deg; divisions : 2 &eacute;quipes du vaucluse etaient engag&eacute;es : DEBARD e / MARTIN m et d / edmond ( ABF ) qui chutait au barrage et l''&eacute;quipe VICH r / SOURET f/ GARCIA ch / JOLIVET l/ D''HAENENS flo( valr&eacute;as ) qui a perdu a la qualificative sur le score de 8 &agrave; 9 face a l''&eacute;quipe BENES de TARBES !! dommage . en triple F3/F4 l''&eacute;quipe DENIA vero / DUMERGER ren&eacute;e et BRAVO clara ont elles aussi chutaient a la qualificative . bon r&eacute;sultats quand m&ecirc;me !!</p>', '2016-06-24 00:00:00', 'championnat inter région 2° divisions et triple F3/F4', b'0', b'1', 'right', 'images/get/feeds/jpg/141', NULL, 'jpg', 'results', '512'),
(142, 'RVICH', '<p>ce week end championnat de france double a bezier : r&eacute;sultats de nos vauclussiennes et vauclusiens .</p>\n<p>en F2 l''&eacute;quipe VICH elisabeth/ SOLERIEU mth perde au barrage , en F3 l''&eacute;quipe DENAT manon et christelle et therese BARNOUIN perdent au barrage . en F4 l''&eacute;quipe ARRUFAT /IMPERAIRE ne sort pas des poules en M2 l''&eacute;quipe VICH r/ SOURET f/ GARCIA ch perd en demi finale 9 &agrave; 13 face au champion &nbsp;. beau parcours de l''&eacute;quipe et bravo a toutes et a tous &nbsp;&nbsp;</p>', '2016-07-04 00:00:00', 'championnat de france a bezier 2016', b'0', b'1', 'right', 'images/get/feeds/jpg/142', NULL, 'jpg', 'results', '512'),
(143, 'RVICH', '<p>a valr&eacute;as le 25 juin c''est d&eacute;roul&eacute; le troph&eacute;e de france r&eacute;gional triple mixte nous avions 3 &eacute;quipes en 3&deg; et 3 &eacute;quipe en 4&deg; resultats : en 3&deg; 1&deg; BURLE ( 13 ) avec 742 pts 2&deg; GAMBETTA (84) 551 pts 3&deg; LAROCHE (13) 377 pts 4&deg; DUMERGER (84) 374pts et 7&deg; BARNOUIN ( 84) 203pts ! en 4&deg; 1&deg; AUROUX ( 04/05) &nbsp; 688pts 4&deg; MAGNAN ( 84) 361pts 7&deg; GROS ( 84) 143pts et 8&deg; SCULFORT ( 84) 32pts &nbsp;bravo a 2 champions et bravo a nos vauclusiennes et vauclusiens &nbsp;</p>', '2016-07-05 00:00:00', 'trophée de france 2016 régional a valréas', b'0', b'1', 'left', 'images/get/feeds/jpg/143', NULL, 'jpg', 'results', '512'),
(144, 'RVICH', '<p>suite photos vaucluse</p>', '2016-07-05 00:00:00', 'trophée de france 2016 régional a valréas 2', b'0', b'1', 'left', 'images/get/feeds/jpg/144', NULL, 'jpg', 'results', '512'),
(145, 'RVICH', '<p>suite photos</p>', '2016-07-05 00:00:00', 'trophée de france 2016 régional a valréas 3', b'0', b'1', 'left', 'images/get/feeds/jpg/145', NULL, 'jpg', 'results', '512'),
(146, 'RVICH', '<p>suite photos</p>', '2016-07-05 00:00:00', 'trophée de france 2016 régional a valréas 4', b'0', b'1', 'left', 'images/get/feeds/jpg/146', NULL, 'jpg', 'results', '512'),
(147, 'RVICH', '<p>voici le classement 2&deg; D pour la saison prochaine seuil de point 55 de pond&eacute;r&eacute; , pour les 3&deg; D il faut 9 points dans la colonne CUMUL pour se maintenir ou monter en 3&deg; D&nbsp;</p>', '2016-07-12 00:00:00', 'classement 2° D', b'0', b'1', 'right', 'images/get/feeds/jpg/147', NULL, 'jpg', 'actus', '512'),
(148, 'RVICH', '<p>ls 22/23/24 juillet se sont deroul&eacute; les championnat de france quadrette a l''arbresle &nbsp;nous avions 2 &eacute;quipes qui representaient le VAUCLUSE la comp&eacute;tition c''est d&eacute;roul&eacute;e dans de mauvaises conditions climatiques , le vendredi et le samedi c''etait injouable !! en M3 l''&eacute;quipe du pr&eacute;sident de VISAN greg rolland ne sortait pas des poules , en M4 l''&eacute;quipe ROL de vedene sortait 1&deg; de poule et ne s''inclinait qu''en 16&deg; de finale d''un petit point &nbsp;bravo a eux ! car franchement c''etait vraiment difficle . &nbsp;&nbsp;</p>', '2016-07-25 00:00:00', 'championnat de france quadrette a l''ARBRESLE', b'0', b'1', 'left', 'images/get/feeds/jpg/148', NULL, 'jpg', 'results', '512'),
(149, 'RVICH', '<p>bon d&eacute;but de saison &nbsp;apr&eacute;s une finale gagn&eacute;e a lamastre par E.VICH et C .GARCIA &nbsp;un quart de finale du 128 Q a GAP perdu 8 &agrave; 9 face a martigues , et ce mercredi a PORTES LES VALENCE &nbsp;finale du 64 D TD perdu 9 &agrave; 13 par SOURET fred et VICH R &nbsp;et une demi finale du 32 pour E VICH et C GARCIA .&nbsp;</p>', '2016-08-12 00:00:00', 'concours gap et concours de l''été 2016', b'0', b'1', 'left', 'images/get/feeds/jpg/149', NULL, 'jpg', 'results', '512'),
(150, 'RVICH', '<p>le 27 et 28&nbsp;ao&ucirc;t c''est d&eacute;roul&eacute; le championnat de france simple td &nbsp;a thonons les bains &nbsp;, nous avions 2 r&eacute;pr&eacute;sentants pour le vaucluse Mm ARRUFAT mireille en F4 &nbsp;qui a perdu au barrage et M SOURET fred en M2 qui a perdu ses 2 parties de poules &nbsp;suite a un PB physique . dommage &nbsp;</p>', '2016-08-30 00:00:00', 'championnat de france simple a thonons', b'0', b'1', 'left', 'images/get/feeds/jpg/150', NULL, 'jpg', 'results', '512'),
(151, 'rv', '<p>le championnat des as est bien lanc&eacute; , apr&eacute;s le 1&deg; tour match aller / retour sont qualifi&eacute;es pour les 1/4 de finale = ORANGE contre ST CECILE 1 &nbsp;et ESB GD AVIGNON contre &nbsp;SARRIANS &nbsp;sont d''offices &nbsp;BOLLENE et VISAN &nbsp;match aller le 16 octobre et retour le 22 octobre &nbsp;.bravo a toutes le s&eacute;quipes qui ont particip&eacute; : VALREAS / VEDENE / COURTHEZON / CAMARET /ST CECILE 2</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'right', 'images/get/feeds/jpg/151', 'bollene', 'jpg', 'results', '512'),
(152, 'RVICH', '<p>esb grand avignon</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'0', 'left', 'images/get/feeds/jpg/152', NULL, 'jpg', 'results', '512'),
(153, 'RVICH', '<p>st cecile1</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/153', NULL, 'jpg', 'results', '512'),
(154, 'RVICH', '<p>sarrians et courthezon</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/154', NULL, 'jpg', 'results', '512'),
(155, 'RVICH', '<p>camaret</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/155', NULL, 'jpg', 'results', '512'),
(156, 'RVICH', '<p>visan</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/156', NULL, 'jpg', 'results', '512'),
(157, 'RVICH', '<p>st cecile2</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/157', NULL, 'jpg', 'results', '512'),
(158, 'RVICH', '<p>vedene</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/158', NULL, 'jpg', 'results', '512'),
(159, 'RVICH', '<p>valr&eacute;as&nbsp;</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/159', NULL, 'jpg', 'results', '512'),
(160, 'RVICH', '<p>grand avignon</p>', '2016-10-04 00:00:00', 'championnat des AS 3/4', b'0', b'1', 'left', 'images/get/feeds/jpg/160', NULL, 'jpg', 'results', '512');

-- --------------------------------------------------------

--
-- Structure de la table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `id_member` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_member`),
  UNIQUE KEY `UK_9d30a9u1qpg8eou0otgkwrp5d` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `members`
--

INSERT INTO `members` (`id_member`, `email`, `name`, `phone_number`) VALUES
(1, 'romain.vermorel@gmail.com', 'Romain Vermorel', '0699236193'),
(2, 'negades.alain@wanadoo.fr', 'Alain Canonge', NULL),
(3, 'vich.raymond@neuf.fr', 'Raymond Vich', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `partners`
--

CREATE TABLE IF NOT EXISTS `partners` (
  `id_partner` bigint(20) NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `urlLink` varchar(255) DEFAULT NULL,
  `imageExtension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_partner`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `partners`
--

INSERT INTO `partners` (`id_partner`, `imageUrl`, `position`, `title`, `urlLink`, `imageExtension`) VALUES
(1, 'images/get/partners/jpg/1', 1, 'Le site de la FFSB', 'http://www.ffsb.asso.fr/page.php?P=fo/public/menu/gestion_front/index&id=50', 'jpg'),
(4, 'images/get/partners/jpg/4', 4, 'Videos de sport boule', 'http://www.sport-boules-diffusion.com/', NULL),
(5, 'images/get/partners/jpg/5', 2, 'Les CBD', 'http://www.ffsb.asso.fr/page.php?P=fo/public/menu/gestion_front/index&id=154', NULL),
(6, 'images/get/partners/jpg/6', 3, 'Fédération Internationale de Boules', 'http://www.fiboules.org/', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
