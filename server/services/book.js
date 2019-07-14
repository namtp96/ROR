const Book = require('../modules/book')

exports.getOneBook = async () => {
    try {
        return await Book.findOne({})
    } catch (error) {
        throw new Err(error.message, 'B02')
    }
}