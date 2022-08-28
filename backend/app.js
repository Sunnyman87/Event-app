require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const connectDB = require('./config/db')
connectDB();

const User = require('./models/User');


const app = express();
app.use(express.json());

const registerUser = require('./controllers/userControler');
const loginUser = require('./controllers/loginController');
const setEvent = require('./controllers/setEvent');
const getEvents = require('./controllers/getEvents');

app.post('/api/user', registerUser);
app.post('/api/user/login', loginUser);
app.post('/api/events', setEvent);
app.get('/api/events', getEvents);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})