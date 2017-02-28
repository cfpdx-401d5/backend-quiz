process.env.DB_URI = 'mongodb://localhost:27017/quiz-contacts-test';
require('../lib/connection');
const mongoose = require('mongoose');

before(() => mongoose.connection.dropDatabase());