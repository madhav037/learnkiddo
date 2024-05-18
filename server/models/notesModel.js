const mongoose = require('mongoose');

const notesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        logo: {
            type: String,
            require: true,
        },
        url: {
            type: String,
            require: true,
        }
    }
)

const notes = mongoose.model('Notes', notesSchema);
module.exports = notes;