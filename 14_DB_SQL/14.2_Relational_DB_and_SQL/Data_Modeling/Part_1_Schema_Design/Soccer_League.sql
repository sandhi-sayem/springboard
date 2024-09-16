-- from the terminal run:
-- psql < Soccer_League.sql

DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league

CREATE TABLE seasons (
    id SERIAL PRIMARY KEY, 
    start_date TIMESTAMP, 
    end_date TIMESTAMP
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    mascot TEXT,
    location TEXT
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY, 
    team_id INTEGER REFERENCES teams (id),
    name TEXT,
    jersey_number INTEGER,
    DOB TIMESTAMP,
    height INTEGER,
    nationality TEXT,
    position TEXT
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    DOB TIMESTAMP,
    nationality TEXT
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    season_id INTEGER REFERENCES seasons (id),
    home_team_id INTEGER REFERENCES teams (id),
    away_team_id INTEGER REFERENCES teams (id),
    location TEXT, 
    "date" DATE,
    start_time TIME,
    end_time TIME, 
    first_half_extra INTEGER, 
    second_hald_extra INTEGER
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY, 
    player_id INTEGER REFERENCES players (id),
    match_id INTEGER REFERENCES matches (id)
);

CREATE TABLE rankings (
    id SERIAL PRIMARY KEY, 
    season_id INTEGER REFERENCES seasons (id),
    team_id INTEGER REFERENCES teams (id),
    rank INTEGER
);

CREATE TABLE lineups (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches (id),
    team_id INTEGER REFERENCES teams (id),
    player_id INTEGER REFERENCES players (id),
    position TEXT
);

CREATE TABLE results (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches (id),
    team_id INTEGER REFERENCES teams (id),
    result TEXT
);

CREATE TABLE matches_referees (
    id SERIAL PRIMARY KEY,
    match_id INTEGER REFERENCES matches (id),
    referee_id INTEGER REFERENCES referees (id),
    position TEXT
);
