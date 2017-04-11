const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    notes: {
        type: String
    },
    category: {
        type: String,
        enum: ['work', 'school', 'personal'],
        required: true
    }
})

module.exports = mongoose.model('Contact', schema);