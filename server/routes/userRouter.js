const User = require('../models/userModel.js');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/signup', async (req, res) => {
    let { username, email, contactNo, location, password } = req.body;

    if (!username || !email || !contactNo || !location || !password) {
        return res.status(422).json({ error: 'please fill the fields properly' })
    }
    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            console.log('user exist!!!');
            return res.status(422).json({ error: 'User already exists' });
        }

        let hashPassword = await bcrypt.hash(password, 12);
        password = hashPassword;

        const newUser = new User({ username, email, contactNo, location, password });
        await newUser.save();

        return res.status(200).send({ message: "user registered successfully" + User.email + " and password " + User.password });
        
    } catch (err) {
        console.log(err);
    }
})

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    if( !email || !password ){
        return res.status(422).json({message : 'please enter required details'})
    }

    const LoginUser = await User.findOne({email : email});

    if(!LoginUser) {
        return res.status(400).send({ message: 'Invalid details' });
    }

    const isMatch = await bcrypt.compare(password , LoginUser.password);

    if(!isMatch){
        return res.status(400).send({ message: 'Invalid details' });
    }

    return res.status(200).send({ message: "Found the required user with email" + User.email + " and password " + User.password });
})

router.get('/', async (req, res) => {
    let user = await User.find();
    return res.json(user);
})

module.exports = router;