const user = require('./user')
    , book = require('./book')
    , routes = require('express').Router()

routes.use('/user', user)
routes.use('/book', book)

module.exports = routes