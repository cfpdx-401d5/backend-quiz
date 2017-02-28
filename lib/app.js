const express = require('express')();
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));


//add links to routes here
// const etc.


// register routes here:
// app.use()


module.exports = app;