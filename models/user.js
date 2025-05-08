const mongoose = require('moongoose');

const userShema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, requied: true},
    password: { type: String, requied: true},
}, {timestamps: true})

const user = mongoose.model('user', userShema);

module.exports = User;