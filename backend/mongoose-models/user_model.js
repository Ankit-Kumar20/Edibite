const mongoose = require('mongoose');

const userschemma = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const User = mongoose.model('User',userschemma);

module.exports = User;