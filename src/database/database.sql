CREATE TABLE ingredients(
  id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE(name)
);

CREATE TABLE seasons(
  id INT AUTO_INCREMENT,
  name VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE courses(
  id INT AUTO_INCREMENT,
  menu VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE permissions(
  id INT AUTO_INCREMENT,
  role VARCHAR(50),
  PRIMARY KEY(id)
);

CREATE TABLE users(
  id INT AUTO_INCREMENT,
  lastname VARCHAR(30) NOT NULL,
  firstname VARCHAR(39),
  mail VARCHAR(150) NOT NULL,
  password VARCHAR(50),
  idPermission INT NOT NULL,
  PRIMARY KEY(id),
  UNIQUE(mail),
  FOREIGN KEY(idPermission) REFERENCES permissions(id)
);

CREATE TABLE recipes(
  id INT AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) NOT NULL,
  description VARCHAR(400) NOT NULL,
  guests SMALLINT,
  created_at DATETIME,
  updated_at DATETIME,
  idCourse INT NOT NULL,
  idSeason INT,
  idUser INT NOT NULL,
  PRIMARY KEY(id),
  UNIQUE(slug),
  FOREIGN KEY(idCourse) REFERENCES courses(id),
  FOREIGN KEY(idSeason) REFERENCES seasons(id),
  FOREIGN KEY(idUser) REFERENCES users(id)
);

CREATE TABLE steps(
  id INT AUTO_INCREMENT,
  content TEXT,
  id_1 INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(id_1) REFERENCES recipes(id)
);

CREATE TABLE images(
  id INT AUTO_INCREMENT,
  url VARCHAR(250),
  alternate_text VARCHAR(200),
  idRecipe INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(idRecipe) REFERENCES recipes(id)
);

CREATE TABLE ingredients_recipes(
  idIngredient INT,
  idRecipe INT,
  quantity DOUBLE,
  PRIMARY KEY(idIngredient, idRecipe),
  FOREIGN KEY(idIngredient) REFERENCES ingredients(id),
  FOREIGN KEY(idRecipe) REFERENCES recipes(id)
);