const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : "./.env"});
mongoose.connect(process.env.DATABASE).then(() => {console.log('Connection Successfull');}).catch((err) => {console.log("Not Connected");});