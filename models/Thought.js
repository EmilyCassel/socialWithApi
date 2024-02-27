const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: 
        required: 
        trim:
    }, 
    createdAt:{
        date: 
        date.now: 
    }, 
    username: {
        type: string
        required: 
    }, 
    reactions: {
        type: 
        enum: 
    }
})




const reactionSchema = new mongoose.Schema({
    reactionId: {
        
    }, 
    reactionBody:{
        type: 
        required: 
        trim:
    }, 
    username: {
        type: string
        required: 
    }, 
    createdAt: {
        date: 
        date.now: 
    }
})