const Book = require('../modules/book')

exports.createBook = (req, res) => {
    if (!req.body) return res.status(403).send('body can not empty!')

    const newBook = new Book(req.body)
    newBook.save()
        .then(() => res.json({ message: 'created successfully!' }))
        .catch(err => res.json({ message: `create error: ${err}` }))
}

exports.getBooks = (req, res) => {
    Book.find({}).sort({ published: -1 })
        .limit(9)
        .toArray()
        .then(books => {
            res.status(200)
                .send(books)
        })
        .catch(err => {
            res.status(404)
                .send(err)
        })
}

exports.getBooksWithAuthor = (req, res) => {
    Book.find({author : req.params.author})
        .toArray()
        .then(books => {
            res.status(200)
                .send(books)
        })
        .catch(err => {
            res.status(404)
                .send(err)
        })
}