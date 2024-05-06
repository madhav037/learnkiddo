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
          contactNo: {
            type: Number,
            require: true,
          },
          location: {
            type: String,
            required: true,
          },
    }
)

const User = mongoose.model('User', userSchema);
module.exports = User;