const user = require('../controllers/user')
    , routes = require('express').Router()

routes.route('/login')
    .post(user.userLogin)
routes.route('/signup')
    .post(user.createUser)

module.exports = routes