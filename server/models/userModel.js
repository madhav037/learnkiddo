const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    solvedQuestion: [{ type: mongoose.Schema.Types.ObjectId }],
    history: [{
      problemID: {
        type: Number,
        required: true
      },
      problem_title: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true,
      },
      memory: {
        type: Number,
        required: true,
        default: 0
      },
      language: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true
      },
      datetime: {
        type: Date,
        required: true,
        default: Date.now
      }
    }]
  }
)

const User = mongoose.model('User', userSchema);
module.exports = User;