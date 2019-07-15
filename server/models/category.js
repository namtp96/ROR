const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({

    id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, 'missing name']
    },
    description: {
        type: String,
        required:[true, 'missing description']
    },
    status:{
        type: Boolean,
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

module.exports = mongoose.model('categories', bookSchema)
