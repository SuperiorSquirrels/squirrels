# SuperSquirrelStore

Team members

Zhibin Ye, github: oceantiger123; Lily McGowan, github: Swissius; Jiefei Wang, github: kasidikaishi; Savion Sweeney, github: Savion92


Description

Welcome to our app! The SuperSquirrelStore, or SSS is an demo app dedicated to selling stuffed animals.

Start
Sync and seed your database by running 'npm install' and then 'npm run seed'. Running npm run start:dev
start:dev will both start your server and build your client side files using webpack

We have Login/Signup form for our users. How do these forms work? and How do we handle the process? Let us give a brief description:

We use React and Redux to implement user sign up and login functionality which the app uses JWT authentication. 

First: user's information is stored in database when signing up. (password is encrypted in database)
Second: A JWT is generated when a user logs in. (token that is stored at window local storage allows a user presists in login)
Third: Log out is only availble after a user log in (logging out deletes JWT in window local storage)
