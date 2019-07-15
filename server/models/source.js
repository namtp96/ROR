const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    

    site: String,
    description: String,
    status:{
        type: Boolean
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

module.exports = mongoose.model('sources', bookSchema)