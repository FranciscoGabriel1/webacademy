-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema loja_bd_lab1
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema loja_bd_lab1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `loja_bd_lab1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `loja_bd_lab1` ;

-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`categoria` (
  `CategoriaID` INT NOT NULL,
  `NomeCategoria` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`CategoriaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`cliente` (
  `ClienteID` INT NOT NULL,
  `NomeCompleto` VARCHAR(255) NOT NULL,
  `CPF` VARCHAR(14) NOT NULL,
  `NumeroCelular` VARCHAR(20) NULL DEFAULT NULL,
  `Email` VARCHAR(255) NULL DEFAULT NULL,
  `DataNascimento` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`ClienteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`endereco` (
  `EnderecoID` INT NOT NULL,
  `Rua` VARCHAR(255) NOT NULL,
  `Cidade` VARCHAR(255) NULL DEFAULT NULL,
  `Estado` VARCHAR(50) NULL DEFAULT NULL,
  `CEP` VARCHAR(10) NULL DEFAULT NULL,
  PRIMARY KEY (`EnderecoID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`compra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`compra` (
  `CompraID` INT NOT NULL,
  `DataHoraCompra` DATETIME NULL DEFAULT NULL,
  `DescontoAplicado` DECIMAL(5,2) NULL DEFAULT NULL,
  `FormaPagamento` VARCHAR(255) NULL DEFAULT NULL,
  `TotalCompra` DECIMAL(10,2) NULL DEFAULT NULL,
  `EnderecoID` INT NULL DEFAULT NULL,
  `ClienteID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`CompraID`),
  INDEX `EnderecoID` (`EnderecoID` ASC) VISIBLE,
  INDEX `ClienteID` (`ClienteID` ASC) VISIBLE,
  CONSTRAINT `compra_ibfk_1`
    FOREIGN KEY (`EnderecoID`)
    REFERENCES `loja_bd_lab1`.`endereco` (`EnderecoID`),
  CONSTRAINT `compra_ibfk_2`
    FOREIGN KEY (`ClienteID`)
    REFERENCES `loja_bd_lab1`.`cliente` (`ClienteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`subcategoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`subcategoria` (
  `SubcategoriaID` INT NOT NULL,
  `NomeSubcategoria` VARCHAR(255) NOT NULL,
  `CategoriaID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`SubcategoriaID`),
  INDEX `CategoriaID` (`CategoriaID` ASC) VISIBLE,
  CONSTRAINT `subcategoria_ibfk_1`
    FOREIGN KEY (`CategoriaID`)
    REFERENCES `loja_bd_lab1`.`categoria` (`CategoriaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`produto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`produto` (
  `ProdutoID` INT NOT NULL,
  `Modelo` VARCHAR(255) NOT NULL,
  `Fabricante` VARCHAR(255) NULL DEFAULT NULL,
  `PrecoBase` DECIMAL(10,2) NULL DEFAULT NULL,
  `QuantidadeDisponivel` INT NULL DEFAULT NULL,
  `SubcategoriaID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`ProdutoID`),
  INDEX `SubcategoriaID` (`SubcategoriaID` ASC) VISIBLE,
  CONSTRAINT `produto_ibfk_1`
    FOREIGN KEY (`SubcategoriaID`)
    REFERENCES `loja_bd_lab1`.`subcategoria` (`SubcategoriaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`itensdacompra`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`itensdacompra` (
  `ProdutoID` INT NOT NULL,
  `CompraID` INT NOT NULL,
  `quantidade` INT NULL,
  PRIMARY KEY (`ProdutoID`, `CompraID`),
  INDEX `ProdutoID` (`ProdutoID` ASC) VISIBLE,
  INDEX `CompraID` (`CompraID` ASC) VISIBLE,
  CONSTRAINT `itensdacompra_ibfk_2`
    FOREIGN KEY (`ProdutoID`)
    REFERENCES `loja_bd_lab1`.`produto` (`ProdutoID`),
  CONSTRAINT `itensdacompra_ibfk_3`
    FOREIGN KEY (`CompraID`)
    REFERENCES `loja_bd_lab1`.`compra` (`CompraID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `loja_bd_lab1`.`numeroserie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `loja_bd_lab1`.`numeroserie` (
  `NumSerieID` INT NOT NULL,
  `NumeroSerie` VARCHAR(255) NOT NULL,
  `ProdutoID` INT NULL DEFAULT NULL,
  PRIMARY KEY (`NumSerieID`),
  INDEX `ProdutoID` (`ProdutoID` ASC) VISIBLE,
  CONSTRAINT `numeroserie_ibfk_1`
    FOREIGN KEY (`ProdutoID`)
    REFERENCES `loja_bd_lab1`.`produto` (`ProdutoID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
