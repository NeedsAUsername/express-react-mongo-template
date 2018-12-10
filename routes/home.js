const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  // Using __dirname gives an absolute path
  // resolve lets us use relative path notation
  res.sendFile(path.resolve(__dirname, '../view/index.html'));
})

module.exports = router;
