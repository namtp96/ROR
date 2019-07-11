const mongoose = require('mongoose')
    , conf = require('../config/config')

mongoose.Promise = global.Promise
mongoose.connect(conf.urlDB, { useNewUrlParser: true, poolSize: 300 })

const db = mongoose.connection
db.on('err', (err) => console.error('database connection error: ', err.message))
db.once('open', () => {
    console.log('database connected')
})

module.exports = db