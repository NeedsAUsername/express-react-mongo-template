require('dotenv').config();
const express = require('express');
const server = express();
const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');

server.use(homeRouter);
server.use(userRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {console.log('Server started on ' + PORT)});
