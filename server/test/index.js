const Book = require('../modules/book')
const conf = require('../config/config')
const mongoose = require('mongoose')

const book = { title: 'the new book' }
let newBook = new Book (book)

mongoose.connect(conf.urlDB,{ useNewUrlParser: true })

const db = mongoose.connection
db.on('err', (err) => console.error('connection error: ', err.message))
db.once('open', () => {
    console.log('connection ok! exiting..')
})

newBook.save().then(() => console.log('ok')).catch((err) => console.error('save error: ', err.message))