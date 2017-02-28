const mongoose = require('mongoose');

mongoose.Promise = Promise;

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/backend-quiz';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err);
});