const express = require('express')
const app = require('./app')

const dotenv = require('dotenv')
const  connectDB  = require('./config/Database')
// config
// dotenv.config('/backend/config/config.env');


//Uncaught Error
process.on("uncaughtException",err=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to uncaught excetion")
    process.exit(1);
})

app.use(express.json());
dotenv.config({path: "backend/config/config.env"});

connectDB();

const port = process.env.PORT 
const server=app.listen(2000, ()=>{
    console.log('Server is listening on 2000');
})

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled Promise Rejection")
    server.close(()=>{
        process.exist(1);
    });
    
})
