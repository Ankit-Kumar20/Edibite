const mongoose = require('mongoose');

const foodlistschema = new mongoose.Schema({

    resturant_name: { type: String, require: true },
    resturant_id: { type: String, require: true },
    food: { type: String, require: true },
    availibility: { type: String, require: true, default: "available" }

})

const Food = mongoose.model('Food', foodlistschema);

module.exports = Food;