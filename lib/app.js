const app = require('express')();
const morgan = require('morgan')('dev');
const images = require('./routes/images');

app.use(morgan);
app.use('/images', images);

module.exports = app;
