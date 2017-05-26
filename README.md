# HW-15-Sequelize
Using sequelize for the last homework assignment. Burger 2: The Sequel
Burger eating app that will display a list of burgers available to be eaten and a list of burgers that have been eaten already. 

## Live Link
- none

## Description on how to use the app
User can click on the devour button to eat burgers. Burgers that have been eaten will be displayed on the right side.
User may also add burgers of their choice to the list.

## Requirements
- mySQL import database file schema.sql
- node.js for npm install the package.json
Type node server.js to run application
Type in browser localhost:3000

## Technologies Used
- HTML
- CSS
- Javascript
- Bootstrap
- NPM
- Node.js
- Express.js
- Sequelize
- MySQL
- Heroku

## Code Explaination
App reads from the mysql database of burgers available to be eaten. 
Any burgers that have been eaten will be displayed on the right and devoured status set to true in the database.
When user adds burger, the input value is saved into the mysql database as a new burger that can be devoured.