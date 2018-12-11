# Site Goals
- social media site where users can post things to a global board, and also to private boards(friends only, groups, etc.)
- real time chat with sockets.io
# Tech Used
  React, Express, MongoDB
# Setup
npm install
npm run client-install

create an .env file at root with the following (to access database):
MONGO_URI="//contributor:password1@ds229878.mlab.com:29878/social-media"

to start Express server: npm run server
to start React server: npm run client  
to start both: npm run dev

# Current Goal:
- Build a basic site, with users able to create posts and see all posts.

#ToDos:
- Set Up User Authentication
  - JWT token auth?
- Create/Edit Database Models (Users, Posts, etc.)  

Routes/Pages to create in React, with endpoints in Express API to fetch info:
- SignUp/Login('/'): If user not logged in, show forms to sign up/log in
- Main Page('/'): All posts are shown. Text for now(like Twitter), later enable other content/pics/vids/etc.(like reddit).
- User Page('/user'): Should show user's posts, with options to edit/delete.
- Account Page('/settings'): Should show user info(email, name), and options to edit/delete account
