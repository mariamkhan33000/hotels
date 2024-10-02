const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config(); 

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send("Welcome to the hotel... How can I help?");
})

const menuItemRoutes = require("./routes/menuitemRoutes")
app.use('/menu', menuItemRoutes)


const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);



app.listen(PORT, () => {
    console.log('Hotel Server listening on port 3000!');
})