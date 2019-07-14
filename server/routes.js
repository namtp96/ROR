const routes = require('express').Router()
    , book = require('./components/book/route')
    , user = require('./components/user/route')

// define route from component to root
routes.use('/book', book)
routes.use('/user', user)

routes.get('/', (req, res) => res.status(200).send('Home page'))

module.exports = routes