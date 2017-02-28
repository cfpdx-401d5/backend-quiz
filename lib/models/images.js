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
        enum: ['animal', 'food', 'places'],
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Image = mongoose.model('Image', schema);
module.exports = Image;