const express = require('express')
const { registerUser} = require('../controller/userController')


const router=express.Router();

router.route("/register").post(registerUser)

router.route("/register").post(loginUser)

module.exports = router;   
