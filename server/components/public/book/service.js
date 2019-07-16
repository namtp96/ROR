const Book = require('../../../models/book')
    , Err = require('../../../services/err')
    , TagBook = require('../../../models/tagBook')
    , Categories = require('../../../models/categorie')
    , Author = require("../../../models/author")
    , Language = require("../../../models/language");

const getManyBook = async (quantity) => {
    try {
        return await Book.find({}).limit(parseInt(quantity))
    } catch (error) {
        throw new Err(error.message, 'B02')
    }
}
//get one Author by id
const getOneAuhorById = async (idAuthor) => {
    try {
        return await Author.findOne({ id: idAuthor });
    } catch (error) {
        throw (error);

    }
}
//get one Author by Name
const getOneAuthorByName = async (nameAuhtor) => {
    try {
        return await Author.findOne({ name: nameAuhtor });
    } catch (error) {
        throw (error);

    }
}
//get one Categorise by Id
const getOneCategoriseById = async (idCate) => {
    try {
        return await Categories.findOne({ id: idCate });
    } catch (error) {
        throw (error);
    }
}
//get one Categorise by Name
const getOneCategoriseByName = async (nameCateg) => {
    try {
        return await Categories.findOne({ name: nameCateg });
    } catch (error) {
        throw (error);
    }
}
//get one Tag by Id 
const getOneTagById = async (idTag) => {
    try {
        return await TagBook.findOne({ id: idTag });
    } catch (error) {
        throw (error)
    }
}
//get one Tag by Name
const getOneTagByLable = async (lableTag) => {
    try {
        return await TagBook.findOne({ lable: lableTag });
    } catch (error) {
        throw (error)
    }
}
//get Language by Name Language
const getOneLanguage = async (language) => {
    try {
        return await Language.findOne({ language: language });
    } catch (error) {
        throw (error)
    }
}

//get 10 tag book 
const getTagBookByName = async (tagName) => {
    try {

        return await TagBook.find({ lable: new RegExp(tagName, "i") }).limit(10);
    } catch (error) {

    }
}
//get 10 categories 
const getCategories = async (nameCateg) => {
    try {
        return await Categories.find({ $text: { $search: nameCateg } }).limit(10);
    } catch (error) {
        throw (error)

    }
}
//get 10 Auhor
const getAuthorByName = async (nameAuthor) => {
    try {
        return await Author.find({ $text: { $search: nameAuthor } }).limit(10);
    } catch (error) {
        throw (error)
    }
}
//get 10 Book
const getBookAdvance = async (input, tag, categories, author) => {
    try {
        return await Book.find({ $text: { $search: input }, tag: tag, categories: categories, author: author });
    } catch (error) {

    }
}
//get One Book by Id
const getBookById = async (idBook) => {
    try {
        return await Book.findOne(idBook);
    } catch (error) {
        throw (error)
    }
}
//get líst para from Json 
const getPartialInOneJson = async (list, callback,para) => {
    let result = [];
    try {
        for (let index = 0; index < list.length; index++) {
            await callback(list[index]).then(rs => {
                result.push(rs[para])
            })
        }
    } catch (error) {
        throw(error)

    }
    return await result;

}

const getAllDetailBook = async (idBook) => {
    try {
        let Book = await getBookById(idBook);
        Book.tags = await getDetail(Book.tags, getOneTagByLable,"lable")
        Book.categories = await getDetail(Book.categories, getOneCategoriseByName,"name")
        Book.language = await getDetail(Book.language, getOneLanguage,"language")
        Book.formats = await getDetail(Book.formats, g,"lable")

    

     


    } catch{

    }
}
module.exports = { getManyBook, getTagBookByName, getCategories, getAuthorByName, getBookAdvance }