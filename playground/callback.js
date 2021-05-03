//Callback function passed to SetTimeout
setTimeout(()=>{
    console.log('2 Seconds are up')
}, 2000)

const names = ['Sid', 'Jess', 'Tim']
const shortNames = names.filter((name)=>{
    return name.length <= 4
})

const geocode = (address, callback) =>{
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
}

geocode('Philadelphia', (data)=>{
    console.log(data)
})


// Define an add function that accepts the correct arguments


const add = (a,b,callback) =>{
    setTimeout(()=>{
        const total = a+b;
        callback(total) 
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
