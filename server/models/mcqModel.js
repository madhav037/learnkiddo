const mongoose = require('mongoose')

const mcqCategory = mongoose.Schema(
    {
        title : {
            type : String,
            require : true
        },
        logo : {
            type : String,
            require : true
        }
    }
)

const MCQ = mongoose.model('MCQ', mcqCategory)
module.exports = MCQ;