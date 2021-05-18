console.log('Client side JS file is loaded')


//On Clicking the button in form
const weatherForm = document.querySelector('form')

//On adding any input in  the form
const searchElement = document.querySelector('input')

// For multiple paragraph elements we use id to separate
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')


// Event listener with Event 'e'
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Grabbing user input for location
    const location = searchElement.value

    //console.log(location)
    // Changing paragraph content according to the api response
    message1.textContent = 'Loading...'
    message2.textContent = ''

        // Invoking Fetch API
        fetch('http://localhost:3000/weather?address=' + location).then((response) => {
            response.json().then((data)=>{
                if(data.error){
                    message1.textContent= data.error
                    return message1.textContent
                }
                message1.textContent = data.location
                message2.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            })
        })
})