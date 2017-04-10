const express = require('express')
const app = express();
const contacts = require('./routes/contacts');


const morgan = require('morgan');
app.use(morgan('dev'));

app.use('/contacts', contacts);

module.exports = app;