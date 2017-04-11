const app = require('express')();
const morgan = require('morgan')('dev');
const images = require('./routes/images');
const errorHandler = require('./error-handler');

app.use(morgan);
app.use('/images', images);
app.user(errorHandler);

module.exports = app;
