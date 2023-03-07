require('dotenv').config();
const express = require('express');
const logger = require('morgan');
require('./utils/database').connect();

require('./utils/database').connect();

const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/api', apiRouter);

module.exports = app;
