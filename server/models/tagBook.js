const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({

    id: Schema.Types.ObjectId,
    tagId: Schema.Types.ObjectId,
    bookId:[[Schema.Types.ObjectId]],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('tag_books', bookSchema)
