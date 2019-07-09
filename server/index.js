const express = require('express')
    , config = require('./config')
    , routes = require('./routers/index.route')
    , path = require('path')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', routes)

app.listen(config.port, () => console.log(`Server running on port ${config.port}`))