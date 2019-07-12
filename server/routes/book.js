const book = require('../controllers/book')
    , routes = require('express').Router()

routes.route('/')
    .post(book.createBook)
    .get(book.getBooks)
routes.route('/author/:author')
    .get(book.getBooksWithAuthor)

module.exports = routes