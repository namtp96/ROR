const User = require('../../../models/user')
    , bookService = require('../../../services/book')
    , services = require('./service')
    , Err = require('../../../services/err')

exports.userGetOneBook = async (req, res, next) => {
    try {
        const book = await bookService.getOneBook()
        res.status(200).send(book)
    } catch (error) {
        next(new Err(error.message, 'B01'))
    }
}

exports.getUsersWithKeyWord = async (req, res, next) => {
    switch(req.params.key){
        case 'email':
        case 'phone':
        case 'name':
            break
        default: next(new Err('bad key', 'A01'))
    }
    let data = {
        key : req.params.key,
        val : req.params.val,
        id : req.params.id
    }

    try {
        let users = await services.getUsersWithKeyWord(data)
        res.status(200).send(users)
    } catch (error) {
        next(new Err(error.message, 'B01'))
    }
}