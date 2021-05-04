// Import express module
const express = require('express')

//Init an express server
const app = express()

/*
    app.get takes 2 args
    arg1: route
    arg2: function for respective route
        - arg1 : object with incoming info from req from server
        - arg2 : response to be sent to the requester
*/

// Home page
app.get('', (req,res )=>{
    res.send('Hello Express!')
})

// Help page
app.get('/help', (req,res)=>{
    res.send('Help Page')
})

// About page
app.get('/about', (req,res)=>{
    res.send('About Page')
})

// Weather page
app.get('/weather', (req,res)=>{
    res.send('Show Weather')
})

/*
    app.listen is to start the server
    arg1: port : required
    arg2: function to execute : optional

*/
app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})