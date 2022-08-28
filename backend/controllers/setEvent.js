const Event = require('../models/Event');
const asyncHandler = require('express-async-handler');

const setEvent = asyncHandler(async(req,res) => {
    if (!req.body.event) {
        res.status(400)
        throw new Error ('Please add a text field');
    }
    const event = await Event.create({
        event: req.body.event,
        text: req.body.text,
        date: req.body.date,
        user: req.body.user
    })
    res.status(200).json(event)
});

module.exports = setEvent