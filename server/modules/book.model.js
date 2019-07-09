const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const Book = new Schema ({
    title: String,
    isbn: Number,
    price: Number,
    publisher: String,
    author: [String],
    publishDate: Number,
    binding: String
})

module.exports = mongoose.model('Book', Book)