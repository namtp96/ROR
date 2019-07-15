const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
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
    excerpt: {
        type: String,
        required: [true, 'missing excerpt']
    },
    date: {
        type: Date,
        required: [true, 'missing date']
    },
    postType: {
        type: String,
        required: [true, 'missing post type']
    },
    permalink: {
        type: Date,
        required: [true, 'missing published']
    },
    pages: {
        type: Number,
        required: [true, 'missing pages']
    },
    language: {
        type: String,
        required: [true, 'missing language']
    },
    format: {
        type: String,
        required: [true, 'missing format']
    },
    isbn10: {
        type: Number,
        minlength: [10, 'ISBN10 is not correct'],
        maxlength: [10, 'ISBN10 is not correct'],
        required: [true, 'missing ISBN-10']
    },
    isbn13: {
        type: Number,
        minlength: [13, 'ISBN13 is not correct'],
        maxlength: [13, 'ISBN13 is not correct'],
        required: [true, 'missing ISBN-13']
    }
})

module.exports = mongoose.model('books', bookSchema)