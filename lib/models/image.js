const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-url');

const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        enum: ['animals', 'food', 'places']
        required: true
    },
    url: {
        type: mongoose.SchemaTypes.Url,
        required: true
    }
});

module.exports = mongoose.model('Image', schema);