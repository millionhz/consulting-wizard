const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    type: {
        type: String,
        enum: ['general','reported'],
        default: 'general'
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
    },

    createdAt: {
        type: Date,
        default: new Date().toString(),
    },
})

module.exports = mongoose.model('Feedback',feedbackSchema)