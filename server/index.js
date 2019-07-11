const express = require('express')
    , app = express()
    , cors = require('cors')
    , conf = require('./config/config')
    , routes = require('./routes/book')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/book', routes)

app.listen(conf.port, () => console.log(`Server running on port ${conf.port}`))