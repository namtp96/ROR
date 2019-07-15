const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    
    name: {
        type: String,
        required: [true, 'missing name']
    },
    country: {
        type: String,
        required:[true, 'missing country']
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

module.exports = mongoose.model('languages', bookSchema)