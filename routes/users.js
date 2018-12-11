const express = require('express');
const userRouter = express.Router();
const path = require('path');

userRouter.get('/api/users', (req, res) => {
  // later pull from db 
  const users = [
    {id: 1, firstName: 'Bob'},
    {id: 2, firstName: 'Mary'}
  ]
  res.json(users);
})

module.exports = userRouter;
