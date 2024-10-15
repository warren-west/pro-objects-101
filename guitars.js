import { GUITARS_API_URL } from './utils.js'
import { Guitar } from './guitarModel.js'

// DOM Elements
const guitarHeaderEl = document.getElementById("guitar-header")
const guitarIdEl = document.getElementById("guitar-id")
const guitarImageEl = document.getElementById("guitar-image")
const guitarBodyTypeEl = document.getElementById("guitar-body-type")
// const guitarsSectionEl = document.getElementById("section-guitars") // unused / redundant element
const guitarsSelectEl = document.getElementById("guitars-select")
const guitarMaterialsListEl = document.getElementById("guitar-materials-list")

// Global Variable
const guitars = []

// Event Listener
guitarsSelectEl.addEventListener("change", (event) => renderSingleGuitar(event))

// Functions
function getGuitarsFromApi() {

    fetch(GUITARS_API_URL)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json)

            for (let g of json) {
                const newGuitar = new Guitar(g.id, g.model, g.manufacturer, g.bodyType, g.materials, g.strings, g.image)

                console.log(newGuitar)

                guitars.push(newGuitar)
            }

            populateGuitarsSelect(guitars)

        })
        .catch((error) => {
            console.log(error)
        })


    // console.log("After the fetch scope...", guitars) // Output?
}

function populateGuitarsSelect(guitars) {
    for (let g of guitars) {
        const newOption = document.createElement("option")

        newOption.value = `${g.id}`
        newOption.innerText = `${g.model}`

        guitarsSelectEl.appendChild(newOption)
    }
}

function renderSingleGuitar(event) {
    // get guitar using event
    console.log(event.target.value)
    let guitar = guitars.filter((item) => item.id == event.target.value)[0]

    console.log(guitar)
    // with that guitar, render the details
    guitarHeaderEl.innerText = `${guitar.manufacturer} - ${guitar.model}`
    guitarIdEl.innerText = `ID: ${guitar.id}`
    guitarImageEl.src = guitar.image
    guitarImageEl.alt = `${guitar.manufacturer} - ${guitar.model}`
    guitarBodyTypeEl.innerText = `Body type: ${guitar.bodyType}`

    renderGuitarMaterials(guitar)
}

function renderGuitarMaterials(guitar) {
    
    guitarMaterialsListEl.innerHTML = ""
    
    for (let key in guitar.materials) {
        const newMaterial = document.createElement("li")
        
        newMaterial.innerText = `${key}: ${guitar.materials[key]}`
        
        guitarMaterialsListEl.appendChild(newMaterial)
    }
}


// Runtime

getGuitarsFromApi()