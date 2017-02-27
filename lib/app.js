const express = require('express');
const app = express();
const morgan = require('morgan');
const errorHandler =  require('./error-handler')();

const images = require('./routes/images');

app.use(morgan('dev'));

app.use('/images', images);

app.use(errorHandler);

module.exports = app;