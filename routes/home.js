const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // Using __dirname gives an absolute path
  // resolve lets us use relative path notation
  res.sendFile(path.resolve(__dirname, '../view/index.html'));
})

router.get('/api/users', (req, res) => {
  const users = [
    {id: 1, firstName: 'Bob'},
    {id: 2, firstName: 'Mary'}
  ]
  res.json(users);
})

module.exports = router;
