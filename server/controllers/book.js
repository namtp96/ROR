const Book = require('../modules/book')

exports.createBook = (req, res) => {
    if (!req.body) return res.status(403).send('body can not empty!')

    const newBook = new Book(req.body)
    newBook.save()
        .then(() => res.json({ message: 'created successfully!' }))
        .catch(err => res.json({ message: `create error: ${err}` }))
}

exports.getBooks = (req, res) => {
    Book.find({}).limit(9)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(404).json(err)
        })
}

exports.searchBooksWithTitle = (req, res) => {
    Book.find({ title: new RegExp(req.params.title) }).sort({title : 1})
        .then(books => {
            res.status(200)
                .send(books)
        })
        .catch(err => {
            res.status(404)
                .send(err)
        })
}