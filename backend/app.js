const express = require('express')
const middleware = require('./middleware/error.js')
const app=express();
app.use(express.json());
//route 
const product = require('./routes/productRouter.js')
const user = require('./routes/userRoutes.js')
app.use('/api', product)
app.use('/api', user)
app.use(middleware)
module.exports = app;