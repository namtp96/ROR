const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({

    id: Schema.Types.ObjectId,
    title: {
        type: String,
        minlength: [1, 'Title so short'],
        maxlength: [100, 'Title so long'],
        required: [true, 'missing title']
    },
    content: {
        type: String,
        required: [true, 'missing content']
    },
    productionDate: {
        type: Date,
        required: [true, 'missing production date']
    },
    languageIds: [
        [Schema.Types.ObjectId,]
    ],
    editionIds: [
        [Schema.Types.ObjectId,]
    ],
    authorIds: [
        [Schema.Types.ObjectId,]
    ],
    categoryIds: [
        [Schema.Types.ObjectId,]
    ],
    isActivated: {
        type: Boolean,

    },
    isPublish: {
        type: Boolean

    },
    key: Schema.Types.ObjectId,
    method: String,
    sourceIds: [String],
    image: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('books', bookSchema)
