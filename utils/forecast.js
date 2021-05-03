// Add require "request" package
const request = require('request')

// Add forecast feature here
const forecast = (lat,long, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=96a6319277839602fd243c69140c9f03&query=' + lat +','+long+ '&units=f'
    console.log(url)
    request({
        url: url,
        json: true
    }, (error,response) =>{
        if(error){
            callback('Unable to connect to weather services', undefined)
        }
        else if(response.body.error){
            callback('Unable to find weather for location.', undefined)
        }
        else{
            callback(undefined, {
                weather_description: response.body.current.weather_descriptions[0],
                temp: response.body.current.temperature,
                feels_like: response.body.current.feelslike
            }  )
        }
    })
}
 
module.exports=forecast

