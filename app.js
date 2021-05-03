// Add require "request" package
const request = require('request')

//Store API url
const url = 'http://api.weatherstack.com/current?access_key=96a6319277839602fd243c69140c9f03&query=37.8267,-122.4233'

//Requesting API response using request 
request({
    url: url
}, (error, response)=>{
    //console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current)
})