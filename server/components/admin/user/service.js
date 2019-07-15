const User = require('../../../models/user')
    , Err = require('../../../services/err')

exports.getUsersWithKeyWord = async (req) => {
    try {
        const key = req.key
            , val = req.val
            , id = req.id
            , query = {}
        
        query[key] = new RegExp(val)
        if(id != 0) query['_id'] = {$gt:(id)}
        return await User.find(query).limit(10)
    } catch (error) {
        throw new Err(error.message, 'B01')
    }
}