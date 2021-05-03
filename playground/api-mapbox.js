//Mapbox API for geocoding

const request = require('request')
const chalk = require('chalk')

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2lkZGhhcnRocGsiLCJhIjoiY2tvODB2b3I2MGF1ZzJvcGo4dDEzMDgxNSJ9.VFYD9B-8y5fZ57e5fJhccA&limit=1'

request({
    uri: url,
    json: true
}, (error, response)=>{
    if(error){
        console.log('Unable to connect to Mapbox API')
    }
    else if(response.body.features.length === 0){
        console.log('Unable to find the location, Try Again!')
    }
    else{
        console.log(chalk.green("Latitude: " + response.body.features[0].center[1] + " , Longitude: " + response.body.features[0].center[0]))
    }
    
})

