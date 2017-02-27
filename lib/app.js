const app = require('express')();
const morgan = require('mogan')('dev');
const errorHandler = require('./error-handling')();
const images = require('./routes/images-routes');

app.use(morgan);
app.use('/images', images);

app.use(errorHandler);

module.exports = app;