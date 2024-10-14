// This is the bank

let balance = 10000

// literal JS Objects
const theBank = {
    balance: 100,
    branch: "Vestland",
    deposit: function(amount) {
        this.balance += amount
    },
    withdraw: function(amount) {
        this.balance -= amount
    },
    displayBranch: function() {
        console.log(this.branch)
    }
    // if we want more stuff, we add it here...
}

console.log(theBank.balance)
theBank.deposit(20)
console.log(theBank.balance)
theBank.withdraw(50)
console.log(theBank.balance)

theBank.displayBranch()

// Alternatives to literal objects:

// Object Functions (Functional Constructors)
// (The Old Way)

function Bank(initialBalance, branchName) {

    this.balance = initialBalance
    this.branch = branchName

    this.deposit = function(amount) {
        balance += amount
    }

    this.withdraw = function(amount) {
        balance -= amount
    }
}

let vestlandBranch = new Bank(100, "Vestland")
let ostland = new Bank(150, "Ostland")
let nordland = new Bank(80, "Nordland")
let sorland = new Bank(-190, "Sorland")

// log out their values

console.log(vestlandBranch)
console.log(ostland)
console.log(nordland)
console.log(sorland)

// ------------------
// Using ES6 Classes: (The Good Way)
// Uses Functional Constructors behind the scenes

class Employee {
    constructor(fname, lname, age, id) {
        this.fname = fname
        this.lname = lname
        this.age = age
        this.id = id
    }

    // Methods
    printEmployeeDetails() {
        console.log(`${this.fname} ${this.lname}`)
        console.log(`${this.age} years old`)
    }
}

class PartTimeEmp extends Employee {
    constructor(fname, lname, age, id, salary) {
        super(fname, lname, age, id)
        this.salary = salary
    }
    
    displaySalary() {
        console.log(`${this.salary} kr. / year`)
    }
}

const warren = new PartTimeEmp("Warren", "west", 32, 12345678, 100)
// const sean = new Employee("Sean", "Skinner", 33, 987654321, 200)

warren.printEmployeeDetails()
// sean.printEmployeeDetails()

warren.salary = 300

warren.printEmployeeDetails()
warren.displaySalary()