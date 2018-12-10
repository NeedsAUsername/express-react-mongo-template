const express = require('express');
const app = express();
const path = require('path');
// To handle HTTP POST request in Express.js version 4 and above,
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');
const homeRoute = require('./routes/home');

app.use(express.static(__dirname + '/public'));
app.use(homeRoute);

// Moved to the routes folder
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'view', 'index.html'));
// })

app.listen(3000);
