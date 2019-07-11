const Book = require('../modules/book')
    , mongoose = require('../db/db')

const db = mongoose.collection('books')

exports.createBook = (req, res) => {
    if (!req.body) return res.status(403).send('body can not empty!')

    const newBook = new Book(req.body)
    newBook.save()
        .then(() => res.json({ message: 'created successfully!' }))
        .catch(err => res.json({ message: `create error: ${err}` }))
}

exports.getBooks = (req, res) => {
    let data = db.find({}).limit(9)
    data.toArray().then(data => res.status(200).send(data))
}

exports.getBookWithAuthor = (req, res) => {
    if (!req.params.author) return res.status(403).send('missing author')

    db.find({ 'author': req.params.author }).toArray()
        .then(result => {
            if (!result) return res.status(404).json(`not found any book with author: ${req.params.author}`)

            res.status(200).send(result)
        })
        .catch(err => res.json({ message: `get book error: ${err}` }))
}