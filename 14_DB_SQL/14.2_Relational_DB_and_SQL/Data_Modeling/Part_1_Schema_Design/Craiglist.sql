-- from the terminal run:
-- psql < Craigslist.sql

DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist

CREATE TABLE regions (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    state TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    prefered_reagion_id INTEGER REFERENCES regions (id), 
    username TEXT,
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    email TEXT
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY, 
    user_id INTEGER REFERENCES users (id), 
    region_id INTEGER REFERENCES regions (id),
    category_id INTEGER REFERENCES categories (id),
    title TEXT,
    "text" TEXT ,
    location TEXT
);
