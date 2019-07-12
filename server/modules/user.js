const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const User = new Schema ({
    name: {
        type: String,
        minlength: [4, 'name to short'],
        maxlength: [16, 'name to long'],
        required: [true, 'missing name']
    },
    password: {
        type: String,
        required: [true, 'missing password']
    }
})

module.exports = mongoose.model('User', User)