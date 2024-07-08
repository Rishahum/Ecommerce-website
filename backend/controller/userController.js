const mongoose = require('mongoose')
const catchAsyncErrors = require('../middleware/catchASyncErrors')
const User = require('../models/userModels')

exports.registerUser = catchAsyncErrors(async(req, res)=>{
    const {name, email, password}=req.body;
    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a simple id",
            url:"profile.pic"
        }
    });

    const token = user.getJWTToken()
    res.status(200).json({
        success:true,
        token
    })
})
exports.loginUser = catchAsyncErrors(async(req,res)=>{
    const {email, password} = req.body;

    //checking if user or password is enter
    if(!email || !password){
        return next(new ErrorHandler("Please enter your email and password", 404))
    }
   const user = await User.findOne({email}).select("+password")
    
   if(!user ){
    return next(new ErrorHandler("Please Enter valid Email and password",404))
   }
    //check password 
    const isPasswordMatched = await user.comparePassword(password);

    if( !isPasswordMatched){
        return next(new ErrorHandler("Please Enter valid Email and password",404))
       }
       const token = user.getJWTToken()
       res.status(200).json({
           success:true,
           token
       })

})
