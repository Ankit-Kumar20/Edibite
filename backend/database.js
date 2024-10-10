const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb+srv://admin:deecc%4016@cluster0.cou91a0.mongodb.net/');
        console.log('MongoDB has been connected');
    }
    catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;