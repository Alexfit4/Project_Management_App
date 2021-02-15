DROP DATABASE IF EXISTS projectManagement_db;
CREATE DATABASE projectManagement_db;
USE projectManagement_db;


CREATE TABLE project (
  id INT NOT NULL AUTO_INCREMENT,
  project VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  project_id INT NULL,
  FOREIGN KEY (project_id) REFERENCES project(id),
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  project_id INT NULL,
  role_id INT NULL,
  manager_id INT NULL,
  email VARCHAR(30) NULL,
  password VARCHAR(30) NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (project_id) REFERENCES project(id),
  FOREIGN KEY (manager_id) REFERENCES role(id),
  PRIMARY KEY (id)
);
