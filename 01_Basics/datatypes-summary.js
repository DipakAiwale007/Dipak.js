// Primitive
// 7 types : String Number , Boolean , null , undefined , Symbol , BigInt

const score =100
const scoreValues = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 123423432645577n

// reffrence (Non primitive)
//Array , objects , Functions

const heros = ["shatiaman","nagraj","colbo"]
let myobj={
    name:"Dipak",
    age:22,
}
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


// stack( primitive)
//heap (non primitive)

let myYoutubename = "Dipak-Aiwale"

let anothername = myYoutubename
anothername = "Dipu"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "dipakaiwale59@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dipu@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);