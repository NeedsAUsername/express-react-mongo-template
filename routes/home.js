const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('/api/users for user data')
})

module.exports = router;
