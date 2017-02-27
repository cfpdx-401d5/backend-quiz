const app = require('app');
const morgan = require('morgan')('dev');

app.user(morgan);


module.exports = app;
