const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    excerpt: {
        type: String
    },
    author: {
        type: [String]
    },
    categories: {
        type: [String]  
    },
    tags: {
        type: [String]  
    },
    size: {
        type: Number
    },
    publisher: {
        type: String
    },
    published: {
        type: Date
    },
    pages: {
        type: Number
    },
    language: {
        type: [String]
    },
    format: {
        type: [String]
    },
    id: {
        type: Number
    }
})

module.exports = mongoose.model('book', bookSchema)