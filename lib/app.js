const app = require('express')();
const morgan = require('morgan')('dev');

const imageRouter =  require('./routes/images');

const errorHandler = require('./error-handler')();

app.use(morgan);

app.use('/images', imageRouter);

app.use(errorHandler);

module.exports = app;