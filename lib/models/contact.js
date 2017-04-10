const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contacts = new Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    company: { type: String},

    notes: { type: String},

    category: {
        type: String,
        enum: ['work', 'school', 'personal']
    }

});

module.exports = mongoose.model('Contact', contacts);