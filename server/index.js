const express = require('express')
    , app = express()
    , cors = require('cors')
    , conf = require('./config/config')
    , routes = require('./routes/index')
    , path = require('path')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/public",express.static(path.join(__dirname, "../public")));
require('./db/db')

app.use('/', routes)


app.listen(conf.port, () => console.log(`Server running on port ${conf.port}`))