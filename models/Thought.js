const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 280
    }, 
    createdAt:{
        type: date, 
        default: Date.now,
        get: createdAtVal => new Date(createdAtVal).toLocalDateString()
    }, 
    username: {
        type: string,
        required: true, 
        trim: true
    }, 
    reactions: [reactionSchema]
})




const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new Types.ObjectId()
    }, 
    reactionBody:{
        type: String,
        required: true,
        trim:true,
        maxlength: 280
    }, 
    username: {
        type: String,
        required: true,
        trim: true
    }, 
    createdAt: {
        type: date, 
        default: Date.now,
        get: createdAtVal => new Date(createdAtVal).toLocalDateString()
    }, 
    reactionType: {
        type: String,
        required: true,
        enum: ['like', 'love', 'funny', 'wow', 'sad', 'mad'] 
    }
})



const Reaction = mongoose.model('Reaction', reactionSchema);
module.exports = Reaction;