require('dotenv').config();
const express = require('express');
const logger = require('morgan');

require('./utils/database').connect();

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);

module.exports = app;
