const book = require('../controllers/book')
    , routes = require('express').Router()

routes.route('/')
    .post(book.createBook)
    .get(book.getBooks)

module.exports = routes