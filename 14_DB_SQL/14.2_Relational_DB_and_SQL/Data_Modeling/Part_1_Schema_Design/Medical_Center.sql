-- from the terminal run:
-- psql < Medical_Center.sql

DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE medical_centers (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    address TEXT
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY, 
    first_name TEXT, 
    last_name TEXT,
    email TEXT
);

CREATE TABLE medical_centers_doctors (
    id SERIAL PRIMARY KEY, 
    medical_center_id INTEGER REFERENCES medical_centers (id), 
    doctor_id INTEGER REFERENCES doctors (id)
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY, 
    first_name TEXT, 
    last_name TEXT,
    DOB TIMESTAMP,
    email TEXT,
    Gender TEXT
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY, 
    doctor_id INTEGER REFERENCES doctors (id), 
    patient_id INTEGER REFERENCES patients (id),
    "date" TIMESTAMP,
    reason TEXT
);

CREATE TABLE diagnoses (
    id SERIAL PRIMARY KEY, 
    visit_id INTEGER REFERENCES visits (id), 
    disease_id INTEGER REFERENCES diseases (id),
    notes TEXT,
    Treatment TEXT,
    Prescription TEXT
);

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    scientific_name TEXT,
    description TEXT,
    is_terminal BOOLEAN
);
