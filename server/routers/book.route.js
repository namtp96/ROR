const bookCtrl = require('../controllers/book.controller')
const routes = require('express').Router({mergeParams : true})

routes.route('/:id')
    .delete(bookCtrl.delBook)
routes.route('/')
    .get(bookCtrl.getBooks)
    .post(bookCtrl.createBook)

module.exports = routes