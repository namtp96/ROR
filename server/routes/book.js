const book = require('../controllers/book')
    , routes = require('express').Router()

routes.route('/')
    .post(book.createBook)
    .get(book.getBooks)
routes.route('/search/:title')
    .get(book.searchBooksWithTitle)

module.exports = routes