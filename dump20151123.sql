CREATE DATABASE  IF NOT EXISTS `cbd84` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cbd84`;
-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: localhost    Database: cbd84
-- ------------------------------------------------------
-- Server version	5.6.26-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
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
  PRIMARY KEY (`id_contact`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'15 rue des Tours','VALREAS','vich.raymond@neuf.fr','Raymond','Pr&#233;sident','Vich','06 87 11 19 45 ','04 90 35 28 38','images/get/contacts/jpg/1',1,'84600'),(2,'493 Avenue Marius Coulon','BOLLENE','pyrame@gmail.com','Gilbert','Secr&#233;taire G&#233;n&#233;ral','Navarro','06 87 80 59 46 ',NULL,'images/get/contacts/jpg/2',2,'84500'),(3,'Chemin des N&#233gades','ORANGE','negades.alain@wanadoo.fr','Alain','Tr&#233;sorier','Canonge','','04 90 34 98 39 ','images/get/contacts/jpg/3',3,'84100');
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feeds`
--

DROP TABLE IF EXISTS `feeds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feeds` (
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
  PRIMARY KEY (`id_feed`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feeds`
--

LOCK TABLES `feeds` WRITE;
/*!40000 ALTER TABLE `feeds` DISABLE KEYS */;
INSERT INTO `feeds` VALUES (2,'Raymond Vich','<p>J\'ai voulu cr&eacute;er ce blog pour faire <strong>connaitre</strong> notre passion qui est le sport boule lyonnaise. Grace &agrave; nos b&eacute;n&eacute;voles, notre association organise des concours et des repas dans la convivialit&eacute; avec toutes les personnes qui l\'entoure dans une bonne ambiance.</p>\n<p>Je vous rappelle la reu de vendredie prochain</p>','2015-09-16 00:00:00','Le mot du président','\0','','left',NULL,'Concours d\'Avoriaz',NULL),(3,'Alain Canonge','<p>Depechez vous de venir vous inscrire au concours d\'Orange. Beaucoup de lots &agrave; gagner et super ambiance assur&eacute;e !!</p>','2015-10-27 00:00:00','Inscription au concours d\'orange','\0','\0','left','feeds/3/image/jpg','Inscriptions','jpg'),(4,'Romain Vermorel','<p>Consultez les actus du CBD Vaucluse sur votre t&eacute;l&eacute; portable ;)</p>','2015-09-15 00:00:00','Le site est compatible avec les smartphones !!!','\0','\0','right','feeds/4/image/jpg','Smartphone','jpg');
/*!40000 ALTER TABLE `feeds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id_member` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_member`),
  UNIQUE KEY `UK_9d30a9u1qpg8eou0otgkwrp5d` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'romain.vermorel@gmail.com','Romain Vermorel','0699236193'),(2,'negades.alain@wanadoo.fr','Alain Canonge',NULL),(3,'vich.raymond@neuf.fr','Raymond Vich',NULL);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partners` (
  `id_partner` bigint(20) NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(255) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `urlLink` varchar(255) DEFAULT NULL,
  `imageExtension` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_partner`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,'images/get/partners/jpg/1',1,'Le site de la FFSB','http://www.ffsb.asso.fr/page.php?P=fo/public/menu/gestion_front/index&id=50','jpg'),(3,'images/get/partners/jpg/3',2,'Le site de la FIB','http://www.fiboules.org','jpg'),(4,'images/get/partners/jpg/4',3,'Videos de sport boule','http://www.sport-boules-diffusion.com/',NULL);
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-23 22:31:12
