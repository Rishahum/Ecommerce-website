const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
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
    resetPasswordToken: String,
    reserPasswordExpire:Date

})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    this.password=await bcrypt.hash(this.password, 10)
})
//get JWT Token

userSchema.methods.getJWTToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    });
};

module.exports = mongoose.model("users", userSchema)