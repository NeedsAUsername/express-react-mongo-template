const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');

userRouter.get('/api/test', (req, res) => {
  const users = [
    {id: 1, name: 'Bob'},
    {id: 2, name: 'Mary'}
  ]
  res.json(users);
})

// index
userRouter.get('/api/users', (req, res) => {
  User.find()
  .then(doc => {
    res.json(doc);
  })
  .catch(err => res.status(500).json(err))
})

// create
userRouter.post('/api/users', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request body is missing');
  }
  /* req.body will be something like:
    {name: "name", email: "email@email.com"}
  */
  let model = new User(req.body);
  model.save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      } else {
        return res.status(201).send('user created');
      }
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

module.exports = userRouter;
