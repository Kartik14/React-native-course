const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {

    let token;
    try {
        const { authorization } = req.headers;
        token = authorization.split(' ')[1];
    } catch (err) {
        return res.status(401).send({ error: 'User must be logged in.' })
    }

    if (!token) {
        return res.status(401).send({ error: 'User must be logged in.' })
    }

    const secretKey = 'MY_SECRET_KEY';
    jwt.verify(token, secretKey, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'User must be logged in.' });
        }

        const user = await User.findById(payload.userID);
        req.user = user;
        next();
    });
}