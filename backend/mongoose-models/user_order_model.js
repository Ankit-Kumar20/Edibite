const mongoose = require('mongoose');

const userorderschema = new mongoose.Schema({
    username: { type: String, required: true },
    ph_no: { type: Number, required: true },
    resturant_id: { type: String, required: true },
    item: { type: String, required: true },
    no_items: { type: Number, required: true, default: 1 },
    delivery: { type: Boolean, required: true, default: false }
})

const User_order = mongoose.model('User_order', userorderschema);

module.exports = User_order