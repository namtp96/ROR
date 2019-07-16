const mongoose = require("mongoose");
     Schema=  mongoose.Schema;
    
const Author = new Schema({
    id: {
        type:String,
        unique:[true,"Id đã tồn tại!"],
        required:[true,"Nhập id"],

    },
    name:{
        type:String,
        required :[true,"Nhập tên!"]

    },
    address :[String],
    birthDay: Date
})
module.exports = mongoose.model("authors",Author);