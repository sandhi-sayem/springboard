-- 1. Modify it to show the matchid and player name for all goals scored by Germany. To identify German players, check for: teamid = 'GER'
SELECT matchid, player FROM goal 
  WHERE teamid = 'GER'
;

-- 2. Show id, stadium, team1, team2 for just game 1012

SELECT id,stadium,team1,team2
  FROM game
where id = 1012
;

-- 3. Modify it to show the player, teamid, stadium and mdate for every German goal.

SELECT player,teamid,stadium,mdate
  FROM game JOIN goal ON (id=matchid)
where teamid = 'GER'
;

-- 4. Show the team1, team2 and player for every goal scored by a player called Mario player LIKE 'Mario%'



-- 5. Show player, teamid, coach, gtime for all goals scored in the first 10 minutes gtime<=10

-- 6. List the dates of the matches and the name of the team in which 'Fernando Santos' was the team1 coach.

-- 7. List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'

-- 8. Instead show the name of all players who scored a goal against Germany.

-- 9. Show teamname and the total number of goals scored.

-- 10. Show the stadium and the number of goals scored in each stadium.

-- 11. For every match involving 'POL', show the matchid, date and the number of goals scored.

-- 12. For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'

-- 13. 