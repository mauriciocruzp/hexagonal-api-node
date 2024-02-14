CREATE SCHEMA `user_management_db` ;

CREATE TABLE `user_management_db`.`users` (
  `id` CHAR(36) NOT NULL,
  `first_name` VARCHAR(40) NOT NULL,
  `last_name` VARCHAR(40) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `cellphone` VARCHAR(20) NULL,
  `activation_token` VARCHAR(100) NULL,
  `verification_date` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `cellphone_UNIQUE` (`cellphone` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
