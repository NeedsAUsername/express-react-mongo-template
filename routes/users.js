const express = require('express');
const userRouter = express.Router();
// To handle HTTP POST request in Express.js version 4 and above,
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

userRouter.get('/api/users', (req, res) => {
  // later pull from db
  const users = [
    {id: 1, firstName: 'Bob'},
    {id: 2, firstName: 'Mary'}
  ]
  res.json(users);
})

module.exports = userRouter;
