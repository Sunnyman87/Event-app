const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
        name:{
            type: String,
            trim: true.valueOf,
            required: [true, "Please add Event name"]
        },
        email:{
            type: String,
            required: [true, "Please add text"]
        },
        age:{
            type: String,
            required: [true, 'Please add event date']
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createAt:{
            type: Date,
            default: Date.now
        }
}));

module.exports = Event