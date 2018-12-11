const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  res.send('/api/users for user data')
})

module.exports = router;
