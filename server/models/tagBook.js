const mongoose = require("mongoose");
    Schema = mongoose.Schema;

    const tagBook = new Schema({
        id:{
            type:String,
            unique:[true,"Id tag đã tồn tại!"],
            required:[true,"Nhập id"]

        },
        lable:{
            type:[String],
            required:[true,"Nhập Lable"]

        }
    })
    module.exports = mongoose.model("tags",tagBook)