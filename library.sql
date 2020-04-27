CREATE DATABASE  IF NOT EXISTS `library` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `library`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: library
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.28-MariaDB

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `book_id` int(11) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `descryption` varchar(255) DEFAULT NULL,
  `is_available` bit(1) NOT NULL,
  `orders_amount` int(11) DEFAULT NULL,
  `publishing_house` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `year_of_publish` int(11) DEFAULT NULL,
  `location_location_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`book_id`),
  KEY `FK4bhqoqn0x1bpxmyycrkmiu23n` (`location_location_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` (`book_id`, `author`, `descryption`, `is_available`, `orders_amount`, `publishing_house`, `title`, `type`, `year_of_publish`, `location_location_id`) VALUES (83,'df','','',5,'erw','sdf','sdf',232,7),(118,'xxx','','',0,'xxx','xxx','xxx',222,15),(88,'hfgh','','',1,'hrt','dth','cgh',435,4),(89,'nsrjsry','','',0,'sjrymsnrym','srmyn','nzgn',346,6),(113,'sde','','',1,'cxv','sef','dsf',123,13),(91,'fmh ','','',3,'hmmyt','zfhm','nfgm',634,10),(97,'fg','','\0',6,'dht','ksi??ka','hfxn',32,14),(122,'z','','',0,'z','z','a',22,17);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_location`
--

DROP TABLE IF EXISTS `book_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_location` (
  `location_id` int(11) NOT NULL,
  `bookcase_number` int(11) NOT NULL,
  `is_free` bit(1) NOT NULL,
  `location_on_shelf` int(11) NOT NULL,
  `shelf_number` int(11) NOT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_location`
--

LOCK TABLES `book_location` WRITE;
/*!40000 ALTER TABLE `book_location` DISABLE KEYS */;
INSERT INTO `book_location` (`location_id`, `bookcase_number`, `is_free`, `location_on_shelf`, `shelf_number`) VALUES (5,1,'\0',1,1),(7,1,'\0',4,2),(8,1,'\0',2,1),(4,1,'\0',2,2),(6,1,'\0',3,1),(9,1,'\0',3,2),(10,1,'\0',4,1),(14,1,'\0',2,3),(12,1,'\0',1,2),(11,1,'\0',1,3),(13,1,'\0',5,1),(15,1,'\0',3,3),(16,1,'\0',5,3),(17,1,'\0',5,2),(18,1,'',4,3),(19,2,'',3,1),(20,2,'',5,1),(21,2,'',3,2),(22,2,'',4,1),(23,2,'',2,1),(24,2,'',1,2),(25,2,'',1,1),(29,2,'',3,3),(27,2,'',5,2),(28,2,'',4,2),(26,2,'',2,2),(30,2,'',2,3),(32,2,'',1,3),(31,2,'',4,3),(33,2,'',5,3),(34,3,'\0',2,1),(35,3,'',1,2),(36,3,'',5,1),(37,3,'',4,1),(38,3,'',2,2),(39,3,'',3,1),(41,3,'',5,2),(40,3,'',3,2),(43,3,'',4,2),(44,3,'',1,3),(46,3,'',4,3),(45,3,'',2,3),(47,3,'',5,3),(42,3,'',1,1),(48,3,'',3,3),(49,4,'',3,1),(50,4,'',4,1),(51,4,'',1,1),(53,4,'',2,1),(52,4,'',2,2),(54,4,'',1,2),(55,4,'',4,2),(56,4,'',3,2),(57,4,'',2,3),(58,4,'',5,2),(59,4,'\0',5,1),(61,4,'',4,3),(60,4,'',1,3),(63,4,'',3,3),(62,4,'',5,3),(64,5,'',3,1),(66,5,'',2,1),(68,5,'',2,2),(69,5,'',5,1),(67,5,'',1,2),(65,5,'',1,1),(71,5,'',3,2),(72,5,'',1,3),(70,5,'',4,1),(73,5,'',4,3),(74,5,'',2,3),(75,5,'',5,3),(76,5,'',3,3),(77,5,'',5,2),(78,5,'',4,2);
/*!40000 ALTER TABLE `book_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_order`
--

DROP TABLE IF EXISTS `book_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_order` (
  `order_id` int(11) NOT NULL,
  `date_of_borrow` date DEFAULT NULL,
  `date_of_return` date DEFAULT NULL,
  `date_to_return` date DEFAULT NULL,
  `borrowed_book_book_id` int(11) DEFAULT NULL,
  `user_user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK1w00v0eywva27baw7ppi8i004` (`borrowed_book_book_id`),
  KEY `FKbnolpoitih0jgdfgv3dfjvdn7` (`user_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_order`
--

LOCK TABLES `book_order` WRITE;
/*!40000 ALTER TABLE `book_order` DISABLE KEYS */;
INSERT INTO `book_order` (`order_id`, `date_of_borrow`, `date_of_return`, `date_to_return`, `borrowed_book_book_id`, `user_user_id`) VALUES (116,'2019-01-18',NULL,'2019-02-08',97,82);
/*!40000 ALTER TABLE `book_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` (`next_val`) VALUES (123),(123),(123),(123);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`user_id`, `email`, `name`, `password`, `role`, `surname`, `username`) VALUES (1,'admin@admin','admin','admin','ADMIN','admin','admin'),(2,'jan@kowalski','Jan','kowalskij','WORKER','Kowalski','jkowalski'),(82,'x','x','x','READER','x','x'),(86,'y','y','y','READER','y','y'),(120,'ss','s','s','READER','s','s');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_current_orders`
--

DROP TABLE IF EXISTS `user_current_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_current_orders` (
  `user_user_id` int(11) NOT NULL,
  `current_orders_order_id` int(11) NOT NULL,
  UNIQUE KEY `UK_8mxea6lnofrthhem4g3jx0kg0` (`current_orders_order_id`),
  KEY `FKatfywcn4krf4p1fgnql9xux77` (`user_user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_current_orders`
--

LOCK TABLES `user_current_orders` WRITE;
/*!40000 ALTER TABLE `user_current_orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_current_orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-01-22 21:29:20
