const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middleware/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
    const tracks = await Track.find({ userId: req.user._id });
    res.send(tracks);
})

router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;

    if (!name || !locations) {
        res.status(422).send({ error: 'Need to provide name and locations.' })
    }

    try {
        const track = Track({ userId: req.user._id, name, locations });
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }

})

module.exports = router;