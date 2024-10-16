const myCar = {
    brand: "Ferrari",
    model: "458",
    color: "red",
    horsePower: 1200,
    isConvertible: true,
    isAutomatic: false,
    // new prop
}

// Let's create an engine for the car
const ferrariV8Engine = {
    size: 2500,
    cylinders: 8,
    VINNumber: "FERRARI2010_378",
}
const audiV6Engine = {
    size: 2200,
    cylinders: 6,
    VINNumber: "AUDI2010_378",
}

// Put the engine in the car
// (The car is COMPOSED with the engine)

myCar.engine = ferrariV8Engine

// console.log(myCar)

// Take the car to the mechanic, and replace the engine
myCar.engine = audiV6Engine

const myNewCar = { ...myCar, ...ferrariV8Engine }
delete myNewCar.engine

console.log(myCar)
console.log(myNewCar)



const myWeight = { weight: 150 }
const myHeight = { height: 200 }
const myPerimeter = { perimeter: 500 }

const myObj3 = {
    ...myWeight,
    ...myHeight,
    depth: 250,
    area: 300,
} // SPREAD OPERATOR!

console.log(myObj3)

const obj4 = {}

Object.assign(obj4, myWeight)
Object.assign(obj4, myPerimeter)

console.log(obj4)





// DOM Elements
const sectionCars = document.getElementById("section-cars")

function renderCarDetails() {

    // for, for...of, for...in
    for (let key in myCar) {
        // console.log(key)
        // console.log(myCar[key])

        const newPTag = document.createElement("p")
        newPTag.id = "car-" + key
        newPTag.innerText = `${key}: ${myCar[key]}`

        sectionCars.appendChild(newPTag)
    }
}







// Runtime
// renderCarDetails()

function forInLoopWithArrays() {
    // We can also use for...in loops with arrays
    // all it does is expose the element index to us as "key"
    // here I've named the "key" as "idx", for index.
    let superCars = ["Lamborghini", "Ferrari", "Porsche"]

    for (let idx in superCars) {
        // console.log(idx)
        // console.log(superCars[idx])
    }
}
