const mongoose = require('mongoose');

const resturtantschemma = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    address: String
});

const Resturant = mongoose.model('Resturant', resturtantschemma);

module.exports = Resturant;