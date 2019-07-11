const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const Book = new Schema ({
    title: { 
        type: String,
        minlength: [2, 'Title so short'],
        maxlength: [40, 'Title so long'], 
        required: [true, 'why not title?']
    },
    price: {
        type: Schema.Types.Decimal128,
        default: 0.00
    },
    rating: {
        type: Number,
        default: 0
    },
    author: { 
        type: String, 
        default: 'unknow' 
    },
    publisher: { 
        type: String, 
        default: 'unknow' 
    },
    published: {
        type: Date,
        default: Date.now
    },
    pages: { 
        type: Number, 
        default: '0' 
    },
    language: { 
        type: String, 
        default: 'unknow' 
    },
    format: { 
        type: String, 
        default: 'unknow' 
    },
    isbn10: { 
        type: Number, 
        minlength: [10, 'ISBN10 is not correct'],
        maxlength: [10, 'ISBN10 is not correct'],
        default: 0 
    },
    isbn13: { 
        type: Number,
        minlength: [13, 'ISBN13 is not correct'],
        maxlength: [13, 'ISBN13 is not correct'], 
        default: 0 
    }
})


module.exports = mongoose.model('Book', Book, 'books')
