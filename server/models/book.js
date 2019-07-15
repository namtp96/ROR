const mongoose = require('mongoose')
    , Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        minlength: [1, 'Title so short'],
        maxlength: [100, 'Title so long'],
        required: [true, 'missing title']
    },
    content: String,
    productionDate:String,
    languageIds:[
            [String]
            
    ],
    editionIds:[
        [String]
    ],
    authorIds:[
        [String]
    ],
    categoryIds:[
        [String]
    ],
    isActivated:{
        type: Boolean,
        
    },
    isPublish :{
        type: Boolean
        
    },
    key: Schema.Types.ObjectId,
    method: String,
    sourceIds:[String],
    image:String,
    price:Number,
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model('books', bookSchema)