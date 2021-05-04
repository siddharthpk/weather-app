//Importing geocode.js & forecast.js from utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Location input from cmd line
const address = process.argv[2]

if(!address){
    console.log('Please provide an address')
}
else{
    //Call geocode & forecast using callback chaining
geocode(address, (error,{latitude, longitude, location})=>{  //Destructured data object
    if(error){
        return console.log(error)
    }
    //console.log(data)
    forecast(latitude,longitude, (error, forecastData) => {
        if(error){
           return console.log(error)
        }
        console.log(location)
        console.log(forecastData)
    })
})
}