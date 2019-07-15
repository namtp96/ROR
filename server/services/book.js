const Book = require('../models/book')
    , Err = require('../services/err')

exports.getOneBook = async () => {
    try {
        return await Book.findOne({})
    } catch (error) {
        throw new Err(error.message, 'B02')
    }
};
exports.createBook = async(req, res)=>{
    try{
        const book = new Book({
            title = req.body.title,
            content = req.body.content,
            excerpt = req.body.excerpt,
            date = req.body.date,
            postType = req.body.postType,
            permalink = req.body.permalink,
            pages = req.body.pages,
            url = req.body.url,
            categories = req.body.categories,
            tags = req.body.tags,
            publisher = req.body.publisher,
            writer = req.body.writer,
            bi_isbn = req.body.bi_isbn,
            bi_year = req.body.bi_year,
            bi_pages =req.body.bi_pages,
            bi_language =req.body.bi_language,
        });
        
    }catch{
        throw new Err(error.message, 'B02')
    }

}