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
