const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true, 
        required: true,
        trim: true 
    }, 
    email: {
        type: String,
        required: true, 
        unique: true,
        match: 
    }, 
    thoughts:{
        type: 
        ref:
    }, 
    friends: [{
        type: 
        ref: 
    }]
})