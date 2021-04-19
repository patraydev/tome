const express = require('express');
const cors = require('cors')
const logger = require('morgan');
const routes = require('./routes/router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(routes);

module.exports = app