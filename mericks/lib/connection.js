const mongoose = require('mongoose');
mongoose.Promise = Promise;

const dbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/quiz-contacts';

mongoose.connect(dbUri);

module.exports = mongoose.connecton;