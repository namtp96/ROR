const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const userSchema = new Schema({
    id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: [true, 'missing username']
    },
    gender: {
        type: String,
        required: [true, 'missing gender']
    },
    birthday: {
        type: String,
        required: [true, 'missing birthday']
    },
    email: {
        type: String,
        required: [true, 'missing email']
    },
    phone: {
        type: String,
        required: [true, 'missing phone']
    },
    address: {
        type: String,
        required: [true, 'missing address']
    },
    picture: {
        type: String,
        required: [true, 'missing picture']
    },

    balance: {
        type: Number,
        required: [true, 'missing balance']
    },
    password: {
        type: String,
        required: [true, 'missing password']
    },
    isActivated: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('users', userSchema)
