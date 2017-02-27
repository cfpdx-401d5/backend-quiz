const app = require('express')();
const morgan = require('morgan')('dev');

const errorHandler = require('./error-handler')();

app.use(morgan);
app.use(errorHandler);

module.exports = app;