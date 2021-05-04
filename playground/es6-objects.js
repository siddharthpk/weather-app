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

//Object Destructuring
const product = {
    label: 'Red Jar',
    price: 5,
    stock: 500,
    salePrice: undefined
}

// Destructuring each property
// const label = product.label
// const price = product.price
// const stock = product.stock


//Modern destructuring for multiple object properties, can include non-existing properties in the {} on the left
const{label,price,stock} = product
console.log(label)
console.log(stock)
