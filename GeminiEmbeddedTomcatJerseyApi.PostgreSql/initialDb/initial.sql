-- schema.sql
-- Since we might run the import many times we'll drop if exists
-- DROP DATABASE IF EXISTS jersey_db;

-- CREATE DATABASE jersey_db;

-- Make sure we're using our `blog` database
\c jersey_db;

-- We can create our user table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username  VARCHAR ( 50 ) UNIQUE NOT NULL,
  email VARCHAR ( 255 ) UNIQUE NOT NULL
);

-- We can create our post table
CREATE TABLE post (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  title VARCHAR ( 255 ) UNIQUE NOT NULL,
  content TEXT,
  image VARCHAR ( 255 ) UNIQUE NOT NULL,
  date DATE DEFAULT CURRENT_DATE
);


CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
        last_login TIMESTAMP 
);
