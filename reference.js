// Remember passing things by reference vs by value?

// Primitives are passed by value (string, boolean, number, etc)
// Non-primitives are passed by reference (Arrays & Objects)

const coffeeArray = ["Mocha", "Latte", "Americano"]

const newCoffeeArray = coffeeArray

// If we really want a new space in memory, we use the spread operator [...]
const newNewCoffeeArray = [...coffeeArray]

newCoffeeArray.push("☕")
newNewCoffeeArray.push("🍵")

console.log(coffeeArray)    // => ["Mocha", "Latte", "Americano"] Wrong!
console.log(newCoffeeArray) // => ["Mocha", "Latte", "Americano", "☕"]
console.log(newNewCoffeeArray) // => ["Mocha", "Latte", "Americano", "🍵"]



// By reference with OBJECTS

const price = 13.99

const coffeeObject = {
    name: "Americano",
    hasMilk: false,
    hasOatCream: true,
    price: 13.99
}

function changeStuff(coffeeObject, p) {
    coffeeObject.price = 21.99
    p = 21.99
}

changeStuff({...coffeeObject}, price)

console.log(coffeeObject)   // => 21.99
console.log(price)          // => 13.99


// How do we sidestep this?
// If we want the function to open up a new space in memory for an object, what can we do?
// HINT: See arrays ;)
// Use the spread operator {...}

// Random example below (how regular variables operate)

let numA = 20
let numB = 10

function addTwoNumbers(a, b) {
    a = a + b
}

addTwoNumbers(numA, numB)
console.log(numA, numB)