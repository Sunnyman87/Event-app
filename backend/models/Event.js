const mongoose = require('mongoose');

const Event = mongoose.model('Event', new mongoose.Schema({
        event:{
            type: String,
            trim: true.valueOf,
            required: [true, "Please add Event name"]
        },
        text:{
            type: String,
            required: [true, "Please add text"]
        },
        date:{
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