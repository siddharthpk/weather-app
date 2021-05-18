console.log('Client side JS file is loaded')


//On Clicking the button in form
const weatherForm = document.querySelector('form')

//On adding any input in  the form
const searchElement = document.querySelector('input')

// Event listener with Event 'e'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Grabbing user input for location
    const location = searchElement.value

    console.log(location)
        // Invoking Fetch API
        fetch('http://localhost:3000/weather?address=' + location).then((response) => {
            response.json().then((data)=>{
                if(data.error){
                    return console.log(data.error)
                }
                console.log(data.location)
                console.log(data.forecast)
            })
        })
})