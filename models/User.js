const mongoose = require('mongoose');
const { Schema, model } = mongoose;

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
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please input a working email address']
    }, 
    thoughts:[{
        type: Schema.Types.ObjectId,
        ref: "Thought"
    }], 
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

userSchema.virtual("friendCount").get(function(){
    return this.friends.length 
})


const User = model('User', userSchema);


module.exports = User