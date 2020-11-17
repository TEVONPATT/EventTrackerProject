-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema artistgallerydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `artistgallerydb` ;

-- -----------------------------------------------------
-- Schema artistgallerydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `artistgallerydb` DEFAULT CHARACTER SET utf8 ;
USE `artistgallerydb` ;

-- -----------------------------------------------------
-- Table `artist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `artist` ;

CREATE TABLE IF NOT EXISTS `artist` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `art_style` VARCHAR(500) NULL,
  `birth_year` INT NULL,
  `death_year` INT NULL,
  `artist_image` VARCHAR(500) NULL,
  `list_of_work` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `art_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `art_work` ;

CREATE TABLE IF NOT EXISTS `art_work` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(300) NULL,
  `art_type` VARCHAR(100) NULL,
  `price` DECIMAL(65,2) NULL,
  `location` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO artistgallery@localhost;
 DROP USER artistgallery@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'artistgallery'@'localhost' IDENTIFIED BY 'artistgallery';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'artistgallery'@'localhost';
SET SQL_MODE = '';
GRANT USAGE ON *.* TO user1;
 DROP USER user1;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'user1';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `artist`
-- -----------------------------------------------------
START TRANSACTION;
USE `artistgallerydb`;
INSERT INTO `artist` (`id`, `name`, `art_style`, `birth_year`, `death_year`, `artist_image`, `list_of_work`) VALUES (1, 'Vincent van Gogh', 'painter', 1853, 1809, NULL, 'The Starry Night, The Potato Eaters, Van Gogh Self-Portrait');

COMMIT;
