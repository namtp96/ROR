const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const Book = new Schema ({
    title: { 
        type: String,
        minlength: [1, 'Title so short'],
        maxlength: [100, 'Title so long'], 
        required: [true, 'missing title']
    },
    price: {
        type: Number,
        required: [true, 'missing price']
    },
    rating: {
        type: Number,
        default: 0.0
    },
    author: { 
        type: String,
        required: [true, 'missing author']
    },
    publisher: { 
        type: String,
        required: [true, 'missing publisher']
    },
    published: {
        type: String,
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


module.exports = mongoose.model('books', Book)
