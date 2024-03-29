const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model('users', UserSchema)

module.exports = User