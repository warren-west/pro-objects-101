const myCar = {
    brand: "Ferrari",
    model: "458",
    color: "red",
    horsePower: 1200,
    isConvertible: true,
    isAutomatic: false,
    // new prop
}


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
renderCarDetails()

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
