const Book = require('../modules/book')
    , db = require('../db/db')

exports.createBook = (req, res) => {
    if(!req.body) return res.status(403).send('body can not empty!')

    const newBook = new Book(req.body)
    newBook.save()
    .then(() => res.json({message: 'created successfully!'}))
    .catch(err => res.json({message: `create error: ${err}`}))
}

exports.getBooks = (req, res) => {
    db.collection('books').find({}).toArray().then(data => res.status(200).send(data))
}

exports.getBook = (req, res) => {
    if(!req.params) return res.status(403).send('why not book id?')

    //
}