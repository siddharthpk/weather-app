// Add require "request" package
const request = require('request')

//Importing geocode.js & forecast.js from utils
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

//Store API url
const url = 'http://api.weatherstack.com/current?access_key=96a6319277839602fd243c69140c9f03&query=37.8267,-122.4233&units=f'

// //Requesting API response using request package & HTTP requests
// request({
//     url: url,
//     json: true
// }, (error, response)=>{
//     //console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)
//     if(error){
//         console.log('Unable to connect to weather service')
//     }

//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current)
//     }
    
// })


//Requesting Current weather data from API using HTTP requests
// request({
//     url: url,
//     json: true
// }, (error, response) =>{

//     //Add Error Handling here
//     if(error){
//         console.log('Unable to connect to weather service')
//     }

//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature+" degrees out. It feels like "+ response.body.current.feelslike + " degrees out.")
//     }
    
// })


geocode('Vancouver', (error,data)=>{
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })