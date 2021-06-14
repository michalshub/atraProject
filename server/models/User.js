const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: 'string',
        required: true
    },
    userAge: {
        type: 'string',
        required: true
    },
    userCity: {
        type: 'string',
        required: true
    },
    userMail: {
        type: 'string',
        required: true
    },
    userPhone: {
        type: 'string',
        required: true
    }
})


module.exports = mongoose.model('User', userSchema);
