const mongoose = require('mongoose');

const videoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        logo: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        oneShotVideoUrl: {
            type: String,
            require: true,
        },
        playlistUrl: {
            type: String,
            require: true,
        }
    }
)

const video = mongoose.model('Video', videoSchema);
module.exports = video;