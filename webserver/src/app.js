// Import  modules
const express = require('express')
const path = require('path')
const hbs = require('hbs')

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

app.get('', (req,res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Sid'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title: 'About Me',
        name: 'Sid'
    })
})

app.get('/help', (req,res)=>{
    res.render('help', {
        title: 'Help',
        message: 'Help welp',
        name: 'Sid'
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

// Weather page
app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'Sunny',
        location: 'Victoria'
    })
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