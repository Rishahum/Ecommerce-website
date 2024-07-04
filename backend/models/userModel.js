const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter your name"],
        maxLength: [30, "Name should not contain more than 30 characters"],
        minLength:[4, "Name should have more than 4 characters"]
    },
    email:{
        type:String,
        required:[true, "Please enter your email"],
        unique:true,
        validate:[validator.isEmail, "Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength:[8, "Password should contain atleast 8 character"],
        select:false  // mongodb mai query apply na kr paaye password pe
    },
    avatar:{
        public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          }
    },

    role:{
        type: String,
        default: "user"
    },
    resetPasswordToken: true,
    reserPasswordExpire:true

})

module.exports = mongoose.model("users", userSchema)
