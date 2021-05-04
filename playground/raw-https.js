//Importing the http core node module
const http = require('http') 

//URL to request from
const url = 'http://api.weatherstack.com/current?access_key=96a6319277839602fd243c69140c9f03&query=40,-75&units=f'

const request = http.request(url,(response)=>{
    let data = ''
    //Event listener for all data chunk arriving
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
        console.log(chunk)
    }) 

    //Another listener for end event
    response.on('end',()=>{
        //console.log(data)
        const body = JSON.parse(data)
        console.log(body)
    })

})

//Event Listener for error
request.on('error', (erro)=>{
    console.log('An error', error)
})
request.end()