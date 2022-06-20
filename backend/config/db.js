const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI // Get URI from .env

// Connects to MongoDB
function connectDB() {
    
    mongoose.connect(mongoURI, (err, db) => {
        if (err) throw err;
        console.log('Connected to MongoDB');
    })
}


module.exports = { connectDB };