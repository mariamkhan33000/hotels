const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menu');


router.get('/', async (req, res) => {
    try{
        const menuData = await MenuItem.find();
        console.log('data menu fetched');
        res.status(200).json(menuData)
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Error fetching data'});
    }
})


// this is our task to taste recipes

router.get('/:taste', async (req, res) => {
    try{
        // const menuData = await MenuItem.find();
        // console.log('data menu fetched');
        // res.status(200).json(menuData)
    }catch(err){
        // console.log(err);
        // res.status(500).json({error : 'Error fetching data'});
    }
})

router.post('/', async (req, res) => {
    try{
        const menuData = req.body;
        const newMenuItem = new MenuItem(menuData);
        const response = await newMenuItem.save();
        console.log('data menu saved');
        res.status(200).json(response)


    }catch(err) {
        console.error('Error:', err)
        res.status(500).json('Error creating menu item')
    }
})



module.exports = router;
