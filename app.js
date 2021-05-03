//Importing geocode.js & forecast.js from utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Call geocode & forecast using callback chaining
geocode('Boston', (error,data)=>{
    if(error){
    }
    console.log(data)
    forecast(data.latitude,data.longitude, (error, forecastData) => {
        if(error){
           return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})