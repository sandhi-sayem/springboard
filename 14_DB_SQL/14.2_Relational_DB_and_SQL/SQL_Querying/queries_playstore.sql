-- Comments in SQL Start with dash-dash --

CREATE TABLE analytics
(
  id SERIAL PRIMARY KEY,
  app_name TEXT NOT NULL,
  category TEXT NOT NULL,
  rating FLOAT(1),
  reviews INT,
  size TEXT,
  min_installs INT,
  price FLOAT(2),
  content_rating TEXT,
  genres TEXT[],
  last_updated DATE,
  current_version TEXT,
  android_version TEXT
);

-- 1. Find the app with an ID of ***1880***

select * from analytics where id = 1880;

-- 2. Find the ID and app name for all apps that were last updated on August 01, 2018.

select * from analytics where last_updated = '2018-08-01';

-- 3. Count the number of apps in each category, e.g. “Family | 1972”.

select category, count(1) from analytics group by category;

-- 4. Find the top 5 most-reviewed apps and the number of reviews for each.

select app_name, reviews from analytics order by reviews desc limit 5;

-- 5. Find the app that has the most reviews with a rating greater than equal to 4.8.

select * from analytics where rating >= 4.8 order by reviews desc limit 1;

-- 6. Find the average rating for each category ordered by the highest rated to lowest rated.

select category, avg(rating) from analytics group by category order by avg desc;

-- 7. Find the name, price, and rating of the most expensive app with a rating that’s less than 3.

select app_name, price, rating from analytics where rating < 3 order by price desc limit 1;

-- 8. Find all apps with a min install not exceeding 50, that have a rating. Order your results by highest rated first.

select * from analytics where min_installs <= 50 and rating is not null order by rating desc;

-- 9. Find the names of all apps that are rated less than 3 with at least 10000 reviews.

select app_name from analytics where rating < 3 and reviews >= 10000;

-- 10. Find the top 10 most-reviewed apps that cost between 10 cents and a dollar.

select app_name from analytics where price between 0.10 and 1.00 order by reviews desc limit 10;

-- 11. Find the most out of date app. Hint: You don’t need to do it this way, but it’s possible to do with a subquery: http://www.postgresqltutorial.com/postgresql-max-function/

select app_name from analytics where last_updated = (select min(last_updated) from analytics);

-- 12. Find the most expensive app (the query is very similar to #11).

select app_name from analytics where price = (select max(price) from analytics);

-- 13. Count all the reviews in the Google Play Store.

select sum(reviews) from analytics;

-- 14. Find all the categories that have more than 300 apps in them.

select category from analytics group by category having count(1) > 300;

-- 15. Find the app that has the highest proportion of min_installs to reviews, among apps that have been installed at least 100,000 times. Display the name of the app along with the number of reviews, the min_installs, and the proportion.

select app_name, reviews, min_installs, min_installs / reviews proportion from analytics where min_installs / reviews = (select max(min_installs / reviews) from analytics where reviews >= 100000);
select app_name, reviews, min_installs, min_installs / reviews proportion from analytics where reviews >= 100000 order by proportion desc limit 1;