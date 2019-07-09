const userCtrl = require('../controllers/user.controller')
const routes = require('express').Router({ mergeParams: true })

routes.route('/:userName')
    .get(userCtrl.getUser)
routes.route('/')
    .get(userCtrl.getUsers)
    .post(userCtrl.createUser)
    .delete(userCtrl.delUser)


module.exports = routes