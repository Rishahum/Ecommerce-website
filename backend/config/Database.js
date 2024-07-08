// connectDatabase.js
const mongoose = require('mongoose');

const connectDatabase = () => {
  const MONGODB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce'
  mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
  console.log('connected to db');
  })
  
};

module.exports = connectDatabase;


