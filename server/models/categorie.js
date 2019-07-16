const mongoose = require("mongoose"),
        Schema = mongoose.Schema;

const Categories = new Schema({
    id:{
        type:String,
        unique:[true,"Id đã tồn tại"],
        required :[true,"Chưa nhập id"]
    },
    name:{
        type :String,
        required:[true,"Chưa nhập tên loại"],

    }
})
module.exports =mongoose.model("categories",Categories);
