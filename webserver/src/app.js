// Import  modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))


//Init an express server
const app = express()

// Define paths for Express config
const publicDirectoryPath=path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engines and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static ditectory to serve
app.use(express.static(publicDirectoryPath))


/*
    app.get takes 2 args
    arg1: route
    arg2: function for respective route
        - arg1 : object with incoming info from req from server
        - arg2 : response to be sent to the requester

*/


// Home page
app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Sid'
    })
})

// About page
app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Sid'
    })
})

// Help page
app.get('/help', (req,res)=>{
    res.render('help', {
        title: 'Help',
        message: 'Help welp',
        name: 'Sid'
    })
})

// Weather page
app.get('/weather', (req,res)=>{
    //WEATHER HTTP ENDPOINT BEGIN
    if(!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }

    //Call geocode & forecast using callback chaining
    geocode(req.query.address, (error,{latitude, longitude, location} = {} )=>{  //Destructured data object
        if(error){
            return res.send({
                error //Used shorthand here due to same name for prop & string
            })
        }
            
            forecast(latitude,longitude, (error, forecastData) => {
                if(error){res.send({
                    error
                 })
                }
                
                res.send({
                    forecast: forecastData,
                    location: location,
                    address: req.query.address
                })
            })
    })
    //WEATHER ENDPOINT END
})

// Products endpoint 
app.get('/products', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)

    res.send({
        products: []
    })
    
})

// Looks for pages invoked further into help
app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Sid',
        errorMessage: 'Help Article Not Found'
    })
})

// 404 Pages - NEEDS TO BE SET UP AT LAST, EXPRESS LOOKS FOR A MATCH BEFORE THIS TO INVOKE *
app.get('*', (req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Sid',
        errorMessage: 'Page Not Found'
    })
})

/*
// Help page
app.get('/help', (req,res)=>{
    res.send([{
        name: 'Sid',
        age: 23
        },{
            name: 'Siddharth'
        }
    ])
})

// About page
app.get('/about', (req,res)=>{
    res.send('<h1>About</h1>')
})
*/

/*
    app.listen is to start the server
    arg1: port : required
    arg2: function to execute : optional

*/
app.listen(3000, ()=>{
    console.log('Server is up on port 3000')
})