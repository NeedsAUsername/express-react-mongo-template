const express = require('express');
const app = express();
const path = require('path');
// To handle HTTP POST request in Express.js version 4 and above,
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
// Move to a routes folder later
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log('Server started on ' + PORT)});
