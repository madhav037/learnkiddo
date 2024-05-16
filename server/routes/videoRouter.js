const Video = require('../models/videoMode.js');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const videoData = await Video.find();
    return res.json(videoData);
})

router.get('/:id', async (req, res) => {
    const videoData = await Video.findById(req.params.id);
    return res.json(videoData);
})

module.exports = router;