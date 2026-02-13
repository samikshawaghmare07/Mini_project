CREATE TABLE users (
  user_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255),
  age INT,
  gender VARCHAR(10),
  budget INT,
  location VARCHAR(100),
  food_pref VARCHAR(20),
  smoking_pref VARCHAR(10)
);
