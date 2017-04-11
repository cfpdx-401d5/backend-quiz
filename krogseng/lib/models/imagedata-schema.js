const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imagedata = new Schema({
    title: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true,
        enum: ['animals', 'food', 'places']
    },
    url: {
        type: String,
        require: true
    },
    description: {
        type: String
    }
});