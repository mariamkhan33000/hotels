const mongoose = require('mongoose');
require('dotenv').config(); 


// Define the MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL = process.env.MONGODB_URL;

// set up MongoDB connection

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
})

db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
})

db.on('disconnect', () => {
    console.log('Disconnected from MongoDB');
})

// Export the database connection

module.exports = db;