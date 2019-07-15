const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    

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
    
    biography:{
        type: String,
        required:[true, 'missing biography']
    },
    status:{
        type: String,
        required:[true, 'missing status']
    },
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