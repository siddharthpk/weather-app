// Add require "request" package
const request = require('request')

//Adding geocoding feature here
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic2lkZGhhcnRocGsiLCJhIjoiY2tvODB2b3I2MGF1ZzJvcGo4dDEzMDgxNSJ9.VFYD9B-8y5fZ57e5fJhccA&limit=1'

    request({
        url: url,
        json: true
    }, (error,{body}) =>{
        if(error){
            callback('Unable to connect to location services', undefined)
        }
        else if(body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }  )
        }
    })
}

module.exports=geocode