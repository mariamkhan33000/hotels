const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

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