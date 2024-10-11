const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB has been connected');
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;