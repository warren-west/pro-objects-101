// mutable vs immutable
const myImmutableObject = {
    prop1: "Hello",
    prop2: true,
    prop3: 55,
}

let myMutableObject = {
    a: "World",
    b: false,
    c: function() { console.log("Hey") },
}

// myMutableObject = { // this is fine
//     fname: "Jason",
//     lname: "Statham"
// }

// console.log(myMutableObject) // ?

// myImmutableObject = { // error!
//     fname: "Rebel",
//     lname: "Wilson"
// }

// console.log(myImmutableObject) // ?


// IMMUTABLE doesn't mean UNCHANGEABLE
console.log(myImmutableObject)

myImmutableObject.prop1 = "Hello again"
myImmutableObject.prop2 = false
myImmutableObject.prop3 = 111
myImmutableObject.anotherProp = "Wow"

// error?

console.log(myImmutableObject)