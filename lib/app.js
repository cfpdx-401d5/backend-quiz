const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler =  require('./error-handler')();

const places = require('./routes/places');

app.use(morgan('dev'));

app.use('/places', places);

app.use(errorHandler);

module.exports = app;