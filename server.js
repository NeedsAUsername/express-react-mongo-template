const express = require('express');
const server = express();
const path = require('path');
// To handle HTTP POST request in Express.js version 4 and above,
// body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const userRouter = require('./routes/users')

server.use(express.static(__dirname + '/public'));
server.use(homeRouter);
server.use(userRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {console.log('Server started on ' + PORT)});
