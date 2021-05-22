// Add require "request" package
const request = require('request')

// Your API Key
const API_KEY = config.WEATHERSTACK_KEY

// Add forecast feature here
const forecast = (lat,long, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key='+ encodeURIComponent(API_KEY) + '&query=' + lat +','+long+ '&units=f'
    //console.log(url)
    request({
        url,    //Destructured url variable
        json: true
    }, (error,{body}) =>{ //Destructured response variable
        if(error){
            callback('Unable to connect to weather services', undefined)
        }
        else if(body.error){
            callback('Unable to find weather for location.', undefined)
        }
        else{
            callback(undefined,body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature+" degrees out. It feels like "+ body.current.feelslike + " degrees out.")
        }
    })
}
 
module.exports=forecast

