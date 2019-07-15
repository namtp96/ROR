const Book = require('../../../models/book')
    , Err = require('../../../services/err')

exports.getManyBook = async (quantity) => {
    try {
        return await Book.find({}).limit(parseInt(quantity))
    } catch (error) {
        throw new Err(error.message, 'B02')
    }
};
exports.createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        book.save();
    } catch (error) {
        throw new Err(error.message, 'B02');
    }
};