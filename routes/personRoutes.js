const express = require('express');
const router = express.Router();

const Person = require("../models/Person");

router.post('/', async (req, res) => {
    try{
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response)

    }
    catch(err){
        console.error('Error:', err)
        res.status(500).send('Error creating person')
    }
})


router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data)
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Error fetching data'});
    }
})


router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType;
        if(workType == "chef" || workType == "manager" || workType == "waiter"){
            const response = await Person.find({work:workType});
            console.log("respose fetch")
            res.status(200).json(response)
        }else{
            res.status(404).json('Invalid work type. Choose from chef, manager, or waiter.')
        }
    }catch(err){
        console.error('Error:', err)
        res.status(500).json('Error fetching data')
    }
})



 // this is our update task to change the recipe

 router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.person.id;
        const updatePersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true, // return the updated document
            runValidators: true // Run mongoose validators
        })

        if(!response) {
            return res.status(404).json('Person not found');
        }
        console.log("data updated")
        res.status(200).json(response)

    }catch(err){
        console.error('Error:', err)
        res.status(500).json('Error updating person')
    }
})


module.exports = router;