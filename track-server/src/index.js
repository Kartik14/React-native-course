require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser');
const requireAuth = require('./middleware/requireAuth');
const trackRoutes = require('./routes/trackRoutes');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoose_uri = 'mongodb+srv://kartik:kartik@react-tracker-app.nooix4r.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongoose_uri);
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo db');
})
mongoose.connection.on('error', (err) => {
    console.error('Error in mongo db connection', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`You are logged in with email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
