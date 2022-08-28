const Event = require('../models/Event');
const asyncHandler = require('express-async-handler');

const setRegister = asyncHandler(async(req,res) => {
    if (!req.body.event) {
        res.status(400)
        throw new Error ('Please add a text field');
    }
    const event = await Event.create({
        name: req.body.event,
        email: req.body.text,
        age: req.body.date,
        user: req.body.user
    })
    res.status(200).json(event)
});

module.exports = setRegister