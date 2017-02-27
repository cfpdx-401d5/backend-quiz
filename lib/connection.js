const mongoose = require('mongoose');

mongoose.Promise = Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/backend-quiz';

mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection open to ' + dbUri);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err);
});

process.on('SIGINT', () => {
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection closed through app termination.');
        process.exit(0);
    });
});

module.exports = mongoose.connection;