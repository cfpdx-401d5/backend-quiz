const express = require('express');
const app = express();
const images = require('./routes/image-routes');

const morgan = require('morgan');
app.use(morgan('dev'));

app.use('/images', images);

module.exports = app;