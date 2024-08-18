const mongoose = require('mongoose')

const problemModel = mongoose.Schema(
    {
        problem_id: {
            type: Number,
            required: true,
            unique: true
        },
        problem_title: {
            type: String,
            required: true,
            unique: true
        },
        time_limit: {
            type: Number,
            required: true,
        },
        max_memory: {
            type: Number,
            required: true,
        },
        problem_statement: {
            type: String,
            required: true,
            unique: true
        },
        input_statement: {
            type: String,
            required: true,
        },
        output_statement: {
            type: String,
            required: true,
        },
        examples: [{
            input: {
                type: String,
                required: true,
            },
            output: {
                type: String,
                required: true,
            },
        }],
        level:
        {
            type: String,
            required: true,
            enum: ["easy", "medium", "hard"],
        },
        category:
        {
            type: [String],
            required: true
        },
    }
)

const Problem = mongoose.model('Problem', problemModel)
module.exports = Problem