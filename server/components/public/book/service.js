const Book = require('../../../models/book')
    , Err = require('../../../services/err');

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
        res.status(200).send({
            message: "OK",
            data: book
        })
    } catch (error) {
        throw new Err(error.message, 'B02');
    }
};
exports.searchBook = async (req) => {
    
    const values = req.body.values, id = req.body.id, perPage = req.body.perPage;

    try {
        if (!id) {
            return Book.find({$or:[{title: {$regex: '.*' + values + '.*' }},{content: {$regex: '.*' + values + '.*' }}]}).limit(perPage);
        } else {
            return Book.find({$or:[{title: {$regex: '.*' + values + '.*' }},{content: {$regex: '.*' + values + '.*' }}], _id:{$gt: id }}).limit(perPage);
        }
    } catch (error) {
        throw new Err(error.message, 'B02');
    }
};

exports.findAll = async (req) => {
    const bookID = req.body.bookId, perPage = req.body.perPage;
    console.log(req.body);
    try {
        if (!bookID) {
            return await Book.find().limit(perPage);   
        } else {
            return Book.find({_id:{$gt: bookID }}).limit(perPage);
        }
         
    } catch (error) {
        throw new Err(error.message, 'B01');   
    }
};
