// Add require "request" package
const request = require('request')

//Store API url
const url = 'http://api.weatherstack.com/current?access_key=96a6319277839602fd243c69140c9f03&query=37.8267,-122.4233'

//Requesting API response using request package
request({
    url: url,
    json: true
}, (error, response)=>{
    //console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current)

    console.log(response.body.current)
})


//Requesting Current weather data from API
request({
    url: url,
    json: true
}, (error, response) =>{
    console.log("It is currently " + response.body.current.temperature+" degrees out. It feels like "+ response.body.current.feelslike + " degrees out.")
})
