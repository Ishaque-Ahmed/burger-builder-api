const express = require('express');
const cors = require('cors'); //Cross origin resource sharing
const compression = require('compression');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');

const app = express();

app.use(compression());

app.use(cors());

app.use(express.json());

app.use('/user', userRouter);

app.use('/order', orderRouter);


module.exports = app;