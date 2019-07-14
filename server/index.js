const express = require('express')
    , app = express()
    , cors = require('cors')
    , conf = require('./conf')
    , routes = require('./routes')
    , path = require('path')

// serve static files from template
app.use("/public",express.static(path.join(__dirname, "../public")))

// connect to the database
require('./db')

// parser incoming request with urlencoded, json payload -- is based on body-parser
// urlencoded option: extended - false to using querystring library, true to using qs library
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// using cors middleware to enable CORS -- Cross-Origin Resource Sharing
app.use(cors())

// authencation middleware

// define route
app.use(routes)

// response error
app.use((err, req, res, next) => {
    const errs = err.getErr()
    res.status(errs.status).send(errs.msg)
})

app.listen(conf.port, () => console.log(`server listening on port: ${conf.port}`))