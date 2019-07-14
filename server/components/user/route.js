const ctrl = require('./controller')
    , routes = require('express').Router()

routes.route('/')
    .get((req, res) => res.status(200).send('User page'))
routes.route('/getOneBook')
    .get(ctrl.userGetOneBook)

module.exports = routes