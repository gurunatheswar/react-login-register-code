React Mysql login and signup 
============================

Simple code for React Mysql login and signup  Project for a college student

## Features 
* login with email and password 
* Register with username , email and password



# Quick Guide backend Accounts

1. Clone this repo to your documents root e.g under `c:\xampp\htdocs\nodejs_login_register\backend` on windows
2. Import the `create_tbl.sql` file to your database. (You can create a database called reactlognregister using phpmyadmin and import this file into it)
3. open `backend\server.js` file and enter your database settings
```js
define('db_host', 'localhost');
define('db_user', 'root');
define('db_password', '');
define('db_database', 'dairy');
define ('PAGE_URL', 'http://localhost/Dairy/');
```
4. npm install express mysql cors nodemon
5. Open the url to your project e.g [http://localhost:8081/](http://localhost:8081/) and login with an already created account

# Quick Guide frontend Accounts
1. Clone this repo to your documents root e.g under `c:\xampp\htdocs\nodejs_login_register\frontend` on windows
2. npx create-react-app <app_name>
3. npm install react-router-dom --save
4. npm i axios
5. npm start


 


