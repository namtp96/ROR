const service = require('./service')
    , bookService = require('../../../services/book')
    , Err = require('../../../services/err');

    exports.createBook = async (req, res, next) => {
        try {
            const book = await service.createBook(req, res);
            res.status(200).json(book);
        } catch (error) {
            next(new Err(error.message, 'B01'));
        }
    };