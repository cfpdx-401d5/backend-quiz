const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: true
  },
  url: {
    type: Buffer,
    contentType: String,
    required: true
  }

});

module.exports = mongoose.model('Image', schema);