const MongoClient = require('mongodb').MongoClient

const User = require('../modules/user.model')
const config = require('../config')

let mongodb;
const client = new MongoClient(config.urlDB, { useNewUrlParser: true, poolSize: 10 })
client.connect()
    .then((result) => {
        mongodb = result.db('ror').collection('user')
        console.log('Connected to the database')
    })
    .catch(err => console.log(err))

exports.getUsers = (req, res) => {
    console.log('Get users')
    mongodb.find({}).toArray()
        .then((items) => {
            return res.send(items)
        })
        .catch(err => console.log(err))
}

exports.getUser = (req, res) => {
    console.log('Get user')
    mongodb.find({ 'userName': req.params.userName }).toArray()
        .then((items) => {
            return res.send(items)
        })
        .catch(err => console.log(err))
}

exports.createUser = (req, res) => {
    console.log('Create a user')
    if (!req.body) {
        console.log('Body cannot empty')
    }

    mongodb.findOne({ 'name': req.body.name })
        .then((result) => {
            if (result) {
                console.log('User name already')
                return res.send('User name already')
            }

            const user = new User({
                name: req.body.name,
                birthday: req.body.birthday,
                address: req.body.address,
                tags: req.body.tags
            })
            mongodb.insertOne(user)
                .then(() => {
                    console.log(user)
                    return res.send(user)
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
        })
}

exports.delUser = (req, res) => {
    mongodb.findOne({ 'name': req.body.name })
        .then((result) => {
            if (result == null) {
                console.log(result)
                return res.send('User not already')
            }

            console.log(`Delete user with user name ${req.body.name}`)
            mongodb.deleteOne({ 'name': req.body.name })
                .then(() => {
                    console.log('Done!')
                    res.send('Done!')
                })
                .catch(err => {
                    console.log(err)
                    res.send('Has error')
                })
        })
        .catch(err => {
            console.log(err)
        })
}