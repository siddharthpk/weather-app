// Object property shorthand

const name = 'Sid'
const userAge = 23//Short
const user = {
    //name: name,
    name, // Shorthand for same name object property 
    age: userAge,
    location: 'Los Angeles'
}

console.log(user)

