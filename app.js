// Add require "request" package
const request = require('request')

//Importing geocode.js & forecast.js from utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Call geocode
geocode('Vancouver', (error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

//Call forecast
forecast(37.8267,-122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })