const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    const user = this;

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt = await bcyrpt.genSalt(10);
        const hash = await bcyrpt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        return next(err);
    }
    
})

userSchema.methods.comparePassword = function(candidatePassword) {
    console.log(candidatePassword);
    const user = this;

    return new Promise((resolve, reject) => {
        console.log(candidatePassword);
        bcyrpt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }
            
            resolve(true);
        })
    })
}

mongoose.model('User', userSchema);
