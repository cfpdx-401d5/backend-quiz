const app = require('express')();
const morgan = require('morgan')('dev');
const errorHandler = require('./error-handling')();
const images = require('./api/image-route');

app.use(morgan);
app.use('/images', images);

app.use(errorHandler);

module.exports = app;