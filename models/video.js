const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    url_image: {
        type: String,
        required: true
    },
    products: [{
        link_product: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    }],
    comments: [{
        username: {
            type: String
        },
        comment: {
            type: String
        },
        timestamp: {
            type: Date
        }
    }]
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
