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
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    developer: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        min: 0,
        max: 9999,
        required: true
    }
});

module.exports = mongoose.model('MobileApp', mobileAppSchema);