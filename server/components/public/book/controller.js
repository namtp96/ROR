const service = require('./service')
    , bookService = require('../../../services/book')
    , Err = require('../../../services/err')
    , TagBook = require('../../../models/tagBook')

exports.getManyBook = async (req, res, next) => {
    const quantity = req.params.quantity > 1 ? req.params.quantity : next(new Err('missing params', 'B01'))

    if (quantity) {
        try {
            const books = await service.getManyBook(quantity)
            res.status(200).json(books)
        } catch (error) {
            next(new Err(error.message, 'B02'))
        }
    }
}

exports.getOneBook = async (req, res, next) => {
    try {
        const book = await bookService.getOneBook()
        res.status(200).json(book)
    } catch (error) {
        next(new Err(error.message, 'B01'))
    }
}
const getOneTagByName = async (nameTag) => {
    try {
        return await TagBook.findOne({ lable: nameTag });
    } catch (error) {
        throw (error)
    }
}
const getDetail = async (list, callback,para) => {
    let result = [];
    try {
        for (let index = 0; index < list.length; index++) {
            await callback(list[index]).then(rs => {
                result.push(rs[para])
            })
        }
    } catch (error) {

    }
    return await result;

}

const getTagBookByName = async (req, res, next) => {
    try {
        let tagReq = req.query.tag;
        if (tagReq) {
            const tag = await service.getTagBookByName(tagReq);
            res.status(200).send(tag);
        }
        else res.status(300).end()
    } catch (error) {
        throw (error)

    }
}
const getCategoriesByName = async (req, res, next) => {
    try {
        let nameReq = req.query.cate;
        if (nameReq) {
            const categories = await service.getCategories(nameReq);
            res.status(200).json(categories);
        }
        else res.status(302).end()
    } catch (error) {
        throw (error)
    }
}

const getAuthorByName = async (req, res, next) => {
    try {
        let nameReq = req.query.name;
        if (nameReq) {
            const Author = await service.getAuthorByName(nameReq);
            res.status(200).json(Author);
        }
        else res.status(302).end();
    } catch (error) {

    }
}
const getBookAdvance = async (req, res, next) => {
    try {
        let infor = req.body;
        let input = infor.input;
        let tag = infor.tag;
        let cate = infor.categories;
        let author = infor.author;
        const Book = await service.getBookAdvance(input, tag, cate, author);
        res.status(200).json(Book);
    } catch (error) {
        throw (error)

    }
}
module.exports = { getTagBookByName, getAuthorByName, getCategoriesByName, getBookAdvance }