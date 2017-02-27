const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbURI = process.env.dbURI || 'mongodb://localhost:27017/backend-quiz';

module.exports = mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('You have connected to mongodb, my friend');
});