const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path : './.env'});
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

require('./connection/db.js');

const user = require('./routes/userRouter.js');
app.use('/user', user);

const video = require('./routes/videoRouter.js');
app.use('/video', video);

const notes = require('./routes/notesRouter.js');
app.use('/notes', notes);

app.get('/', async (req, res) => {
    console.log('Helloooooo');
})

app.listen(process.env.PORT, () => {
    console.log('PORT running');
})
