// Import packages
const express = require('express');
const dotenv = require('dotenv').config();
const movieRoutes = require('./routes/movieRoutes');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./config/db.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Initialize app
const app = express();
const PORT = process.env.PORT;

// Set view engine as ejs
app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({ extended: false })); // parses the req.body
app.use(cookieParser()); // parses the cookies


app.use('/movies', movieRoutes); // uses routes present in movieRoutes
app.use('/users', userRoutes); // uses routes present in userRoutes

// Homepage
app.get('/', (req, res) => {
    res.render('index.ejs');
})

// Connect to MongoDB and Listen to port 
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
})