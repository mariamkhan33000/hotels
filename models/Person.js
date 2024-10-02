const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type: 'string',
        required: true
    }, 
    age: {
        type: 'number',
        required: true
    },
    work: {
        type: 'string',
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: 'string',
        required: true
    },
    email : {
        type: 'string',
        required: true,
        unique: true
    },
    address: {
        type: 'string'
    },
    salary: {
        type: 'number',
        required: true
    }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;