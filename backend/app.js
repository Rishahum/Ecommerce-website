const express = require('express')
const middleware = require('./middleware/error.js')
const app=express();
app.use(express.json());
//route 
const product = require('./routes/productRouter.js')
app.use('/api', product)

app.use(middleware)
module.exports = app;