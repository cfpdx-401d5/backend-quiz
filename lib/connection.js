const mongoose = require('mongoose');
mongoose.Promise = Promise;

constdbUri = process.env.DB_URI || 'mongdb://localhost:27017/images';

module.exports = mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
  console.log('connected to mongodb !!!');
});