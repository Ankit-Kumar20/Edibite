const mongoose = require('mongoose');

let current = new Date();

const foodlistschema = new mongoose.Schema({

    resturant_name: { type: String, require: true },
    resturant_id: { type: String, require: true },
    food: { type: String, require: true },
    availibility: { type: String, require: true, default: "available" },
    date: { type: String, require: true, default: current.toLocaleDateString()},
    time: { type: String, require: true, default: current.toLocaleTimeString()}

})

const Food = mongoose.model('Food', foodlistschema);

module.exports = Food;