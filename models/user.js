const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence');

const userShema = new mongoose.Schema({
    nome: {
        type: String, 
        required: true, 
        unique: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    },
    password: { 
        type: String, 
        required: true
    },
}, {
    timestamps: true})

userSchema.plugin(AutoIncrement, { inc_field: 'userId'});

const User = mongoose.model('User', userShema);

module.exports = User;