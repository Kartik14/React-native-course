const express = require('express')
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

const router = express.Router();
const secretKey = 'MY_SECRET_KEY';

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = User({email, password});
        await user.save();

        const token = jwt.sign({ userID: user._id }, secretKey);
        res.send({ token });
        
    } catch (err) {
        return res.status(422).send(err.message);
    }
    
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(422).send('Must provide email and password');
    }

    const user = await User.findOne({ email });
    if ( !user ) {
        return res.status(422).send({ error: 'Invalid email/password'});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userID: user }, secretKey);
        return res.send({ token });
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: 'Invalid email/password'})
    }
    
})

module.exports = router;
