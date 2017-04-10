const app = require('express')();

const morgan = require('morgan');
app.use(morgan('dev'));

const contacts = require('./routes/contacts');

app.use('/contacts', contacts);

module.exports = app;