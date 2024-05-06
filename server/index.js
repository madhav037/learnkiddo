const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config({path : './.env'});
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

require('./connection/db.js');

const user = require('./routes/userRouter.js');
app.use('/user', user);

app.get('/', async (req, res) => {
    console.log('Helloooooo');
})

app.listen(process.env.PORT, () => {
    console.log('PORT running');
})
