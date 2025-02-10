const mongoose = require('mongoose');

const mobileAppSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
        min: 1,
        max: 10
    },
    Developer: {
        type: String,
        required: true
    },
    Price : {
        type: Number,
        min: 0,
        max: 9999,
        required: true
    }
});

module.exports = mongoose.model('MobileApp', mobileAppSchema);