const ctrl = require('./controller')
    , routes = require('express').Router();
    
routes.route('/')
    .get((req, res) => res.status(200).send('Book page'));
routes.route('/get')
    .get(ctrl.getOneBook);
routes.route('/get/:quantity')
    .get(ctrl.getManyBook);
routes.route('/create/')
    .post(ctrl.createBook);
routes.route('/search')
    .post(ctrl.searchBooks);

module.exports = routes;
