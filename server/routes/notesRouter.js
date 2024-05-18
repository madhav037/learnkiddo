const Notes = require('../models/notesModel.js');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const notesData = await Notes.find();
    return res.json(notesData);
})

router.get('/:id', async (req, res) => {
    const notesData = await Notes.findById(req.params.id);
    return res.json(notesData);
})

module.exports = router;