const bookRoute = require('./book.route')
const userRoute = require('./user.route')
const routes = require('express').Router()

routes.use('/user', userRoute)
routes.use('/book', bookRoute)

routes.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})

module.exports = routes