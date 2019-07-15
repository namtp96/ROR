const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({

    id: Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: [true, 'missing first name']
    },
    lastName: {
        type: String,
        required:[true, 'missing last name']
    },
    birthday:{
        type: Date,
        required:[true, 'missing  birthday']
    },
    placeOfBirth:{
        type: String,
        required:[true, 'missing  place of birth']
    },

    biography: String,
    status: Boolean,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('authors', bookSchema)
