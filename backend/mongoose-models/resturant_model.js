const mongoose = require('mongoose');

const resturtantschemma = new mongoose.Schema({
    username: {type: String, require: true},
    resturant_id: { type: String, require: true },
    email: {type: String, require: true },
    password: {type: String, require: true},
    address: { type: String, require: true}
});

const Resturant = mongoose.model('Resturant', resturtantschemma);

module.exports = Resturant;