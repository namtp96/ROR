const mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , bcrypt = require('bcrypt')

const saltRounds = 10   

const userSchema = new Schema ({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 16,
        validate: {
            validator: (v) => {
                return /^[a-zA-Z]+$/.test(v)
            },
            message: props => `${props.value} is not a valid name!`
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return /^[a-z0-9\.]{1,}@[a-z0-9\.]{1,}\.[a-z\.]{1,}$/gm.test(v)
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 16
    }
})



module.exports = mongoose.model('User', userSchema, 'user')