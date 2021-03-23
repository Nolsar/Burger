-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers" database --
CREATE DATABASE burgers_db;
--chooses the burgers_db schema to querie--
USE burgers_db;

--creates "burgers" table--
CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN
);