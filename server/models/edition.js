const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    edition: {
        type: String,
        required: [true, 'missing edition']
    },
    collector: {
        type: String,
        required: [true, 'missing collector']
    },
    publisher: {
        type: String,
        required:[true, 'missing publisher']
    },
    type: {
        type: String,
        required: [true, 'missing type']
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

module.exports = mongoose.model('editions', bookSchema)