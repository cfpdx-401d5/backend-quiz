process.env.MONGODB_URI = 'mongodb://localhost:27017/backend-quiz-test';
require('../lib/mongo-connection');
const mongoose = require('mongoose');

before(() => mongoose.connection.dropDatabase());