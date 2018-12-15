# Summary
- template for a express/react/mongo app with passport/JWT user authentication and working signup/login/logout forms.
# Features
- Connected React
- Connected MongoDB
- Set Up User Auth in Express with JWT and Passport
- Set Up User Authentication in React side
  - login/signup/logout forms working
  - stores token in local storage and include in header
  - fetches user on app mount if local storage has token
# Setup
$ npm install

$ npm run client-install

create an .env file at root with the following (to access database):

MONGO_URI="yourMongoURIHere"


to start Express server:
$ npm run server

to start React server:
$ npm run client  

to start both servers:
$ npm run dev
