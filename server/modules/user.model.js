const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const User = new Schema ({
    name: String,
    birthday: Number,
    address: String,
    tags: [String],
})

module.exports = mongoose.model('User', User)