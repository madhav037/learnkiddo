const express = require('express')
const router = express.Router();
const MCQ = require('../models/mcqModel.js')

router.get("/", async (req, res) => {
    const data = await MCQ.find();
    return res.json(data);
})

module.exports = router;