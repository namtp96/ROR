const MongoClient = require('mongodb').MongoClient
    , Book = require('../modules/book.model')
    , conf = require('../config')

let mongodb;
const client = new MongoClient(conf.urlDB, { useNewUrlParser: true, poolSize: 10 })
client.connect().then((result) => {
    mongodb = result.db('ror').collection('book')
    console.log('Book controller connect to the database')
}).catch(err => {
    console.log(err)
})

exports.getBooks = (req, res) => {
    mongodb.find({}).toArray().then((books) => {
        return res.send(books)
    }).catch(err => {
        console.log(err)
        return res.send('Cannot get all books')
    })
}

exports.getBook = (req, res) => {
    mongodb.findOne({}).toArray().then((books) => {
        return res.send(books)
    }).catch(err => {
        console.log(err)
        return res.send('Cannot get all books')
    })
}

exports.createBook = (req, res) => {
    if (!req.body) {
        return res.status(403).send('Body cannot empty')
    }

    const book = new Book({
        title: req.body.title,
        isbn: req.body.isbn,
        price: req.body.price,
        publisher: req.body.publisher,
        author: req.body.author,
        publishDate: req.body.publishDate,
        binding: req.body.binding
    })

    mongodb.findOne({'isbn' : parseInt(req.body.isbn)}).then(result => {
        if(result){
            return res.status(403).send('Book already')
        }

        mongodb.insertOne(book).then(() => {
            return res.send('Add done!')
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}

exports.delBook = (req, res) => {
    if (!req.params) {
        return res.status(403).send('Body cannot empty')
    }

    mongodb.findOne({'isbn' : parseInt(req.params.id)}).then(result => {
        if(!result){
            return res.status(403).send('Book not already')
        }

        mongodb.deleteOne(result).then(() => {
            return res.send('Remove done!')
        }).catch(err => console.log(err))
    }).catch(err => console.log(err))
}