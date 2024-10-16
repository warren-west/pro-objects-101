// Guitar Model Class
export class Guitar {
    // constructor
    constructor(id, model, manufacturer, bodyType, materials, strings, image) {
        this.id = id
        this.model = model
        this.manufacturer = manufacturer
        this.bodyType = bodyType
        this.materials = materials
        this.strings = strings
        this.image = image
    }

    // functions?
    // nothing here is altering the DOM
    // therefore, we should put it in another file
}

class GuitarMaterials {
    constructor(neck, fretboard, body) {
        this.neck = neck
        this.fretboard = fretboard
        this.body = body
    }
    // other stuff? Printing out the details, etc.
}