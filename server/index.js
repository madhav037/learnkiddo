const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const compiler = require('compilex');
const options = { stats: true };
// const __dirname = path.resolve()

dotenv.config({ path: './.env' });
const app = express();

__dirname = path.resolve();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/codemirror-5.65.9", express.static("D:/Individual Folder/Shruti/Projects/learnkiddo/server/codemirror-5.65.16"))

require('./connection/db.js');
app.use(express.static(path.join(__dirname, 'client/build')))

const user = require('./routes/userRouter.js');
app.use('/user', user);

const video = require('./routes/videoRouter.js');
app.use('/video', video);

const notes = require('./routes/notesRouter.js');
app.use('/notes', notes);

const mcq = require('./routes/mcqRouter.js')
app.use('/mcq', mcq);

const editor = require("./routes/editorRouter.js")
app.use('/editor', editor);

const problem = require("./routes/problemRouter.js")
app.use('/problem', problem);

// app.get('/', async (req, res) => {
//     console.log('Helloooooo');
// })

console.log(__dirname)

app.listen(process.env.PORT, () => {
    console.log('PORT running');
})

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'client', 'build', 'index.html'))
})
