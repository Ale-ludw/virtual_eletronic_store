import mongoose from'mongoose';
import AutoIncrementFactory  from 'mongoose-sequence';
const AutoIncrement  = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema({
    userID: {
        type: Number
    },
    nome: {
        type: String, 
        required: true
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

const User = mongoose.model('User', userSchema);

export default User;