-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space

-- original

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL,
  galaxy TEXT NOT NULL,
  moons TEXT[]
);

INSERT INTO planets
  (name, orbital_period_in_years, orbits_around, galaxy, moons)
VALUES
  ('Earth', 1.00, 'The Sun', 'Milky Way', '{"The Moon"}'),
  ('Mars', 1.88, 'The Sun', 'Milky Way', '{"Phobos", "Deimos"}'),
  ('Venus', 0.62, 'The Sun', 'Milky Way', '{}'),
  ('Neptune', 164.8, 'The Sun', 'Milky Way', '{"Naiad", "Thalassa", "Despina", "Galatea", "Larissa", "S/2004 N 1", "Proteus", "Triton", "Nereid", "Halimede", "Sao", "Laomedeia", "Psamathe", "Neso"}'),
  ('Proxima Centauri b', 0.03, 'Proxima Centauri', 'Milky Way', '{}'),
  ('Gliese 876 b', 0.23, 'Gliese 876', 'Milky Way', '{}');


-- modified

CREATE TABLE galaxies
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  diameter BIGINT NOT NULL
)
;

CREATE TABLE stars
(
  id SERIAL PRIMARY KEY,
  galaxy_id INTEGER REFERENCES galaxies (id),
  name TEXT NOT NULL UNIQUE,
  age INTEGER NOT NULL
)
;

CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  star_id INTEGER REFERENCES stars (id),
  name TEXT NOT NULL UNIQUE,
  orbital_period_in_years FLOAT NOT NULL
);

CREATE TABLE moons
(
  id SERIAL PRIMARY KEY,
  planet_id INTEGER REFERENCES planets (id),
  name TEXT NOT NULL UNIQUE,
  orbital_period_in_years FLOAT NOT NULL
)
;
