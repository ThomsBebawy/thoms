// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const app = express();
// Start up an instance of app
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const cors = require('cors')
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 5000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

app.get('/test', function (req, res) {
    res.send('hello world');
})