const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new error ("Invalid Email Id")
            }
        }
    },
    phone:{
        type:String,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:10
    },
    date:{
        type:Date,
        default:Date.now
    }
});
const User = new  mongoose.model("USER", userSchema);
module.exports = User;