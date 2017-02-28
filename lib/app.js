const express = require('express');
const app = express();

// put the required routes here
// const images = require('./routes/images-route')
// then
// app.use('/');
// app.use('/images/), images;

const images = require('./routes/imagedata-route');
const morgan = require('morgan');
app.use(morgan('dev'));
app.use('/');
app.use('/images/'), images;

module.exports = app;