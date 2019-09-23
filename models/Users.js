const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: String,
    password: String,
    pharmacy: String
})


module.exports = mongoose.model('Users',userSchema)