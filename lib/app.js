const express = require('express');
const app = express();
//const images = ('./routes/images');

const morgan = require('morgan');
app.use(morgan('dev'));

//app.use('/images', images);

module.exports = app;