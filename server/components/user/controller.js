const User = require('../../modules/user')
    , bookService = require('../../services/book')
    // , bcrypt = require('bcrypt')
    // , conf = require('../../conf')

exports.userGetOneBook = async (req, res, next) => {
    try {
        const book = await bookService.getOneBook()
        res.status(200).send(book)
    } catch (error) {
        next(new Error(error.message, 'B01'))
    }
}

// exports.createUser = (req, res) => {
//     if (!req.body) {
//         return res.status(403)
//             .send('missing info')
//     }

//     User.findOne({ 'name': req.body.name })
//         .then(result => {
//             if (result) return res.status(403)
//                 .send('user name already')

//             let user = new User(req.body)
//             const err = user.validateSync()

//             if (err) {
//                 return res.status(403)
//                     .send(err.message)
//             }

//             bcrypt.genSalt(conf.saltRounds)
//                 .then(salt => {
//                     return bcrypt.hash(user.password, salt)
//                 })
//                 .then(hash => {
//                     user.password = hash
//                     return user.save()
//                 })
//                 .then(() => {
//                     res.status(200)
//                         .send('user created successfully')
//                 })
//                 .catch(err => {
//                     res.send(500)
//                         .send(err)
//                 })
//         })
//         .catch(err => {
//             return res.status(500)
//                 .send(err)
//         })
// }

// exports.userLogin = (req, res) => {
//     if (!req.body) {
//         return res.status(403)
//             .send('missing info')
//     }

//     User.findOne({ 'name': req.body.name })
//     .then(result => {
//         if (!result) return res.status(403)
//             .json({message: 'user not already'})

//         return bcrypt.compare(req.body.password, result.password)
//     })
//     .then(result => {
//         if(!result) return res.status(403).json({message : 'wrong password'})
//         else return res.status(200).json({message : 'login success'})
//     })
//     .catch(err => {
//         res.status(500)
//             .send(err)
//     })
// }