# Yummyelp
live link: https://yummyelp.herokuapp.com/
This is a solo react-redux project to test my knowledage on what I have learned so far.
The website is a clone of yelp, but only focus on restaurants.

## Please check out the LINKS below for feature list and database schema:
## [Feature List](https://github.com/tan004/yummyelp/wiki/Feature-List)

## [Database Schema ](https://github.com/tan004/yummyelp/wiki/Database-Schema)

## Steps to run this application locally:
1. clone this repo
2. cd to the backend folder and run `npm install` to install all the needed dependencies.
3. Create .env file based on the .env.example file in the backend root folder.
  * openssl rand -base64 -10 run this in your node shell to creates a strong password.
4. Create a postgres databse user with the same name and password in the .env file that you have created with CREATEDB privileges.
5. Run sequelize commands to set up a database.
  * `npx dotenv sequelize db:create`
  * `npx dotenv sequelize db:migrate`
  * `npx dotenv sequelize db:seed:all`
6. Run  `npm start` in the backend folder
7. cd into frontend folder and run `npm install`
8. Run `npm start` in fronted folder after install all the dependencies.

The website would host on localhost:3000 now.
