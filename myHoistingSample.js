
//There seems to be 3 scenarios - a var, a function called directly, an function assigned to a var and called thru the var.
//Hoisting happens only in the named function case


/*console.log("Try out var hoisting on my own")
//console.log("this is undeclared x: " + x)   //error here and execution stops
x = 24
console.log("this is x declared by assigning a value: " + x)
var y = 2
console.log("this is y declared by assigning a value plus use of 'var': " + y)

console.log("Try out functional hoisting on my own")
console.log(myFunction())
function myFunction(){

    console.log("This is myFunction: " + 3000)
}   


console.log("Try var functional hoisting on my own")
console.log(varFunction)
var varFunction = function myFunction(){

    console.log(4000)
}
console.log("This is varFunction: "+ varFunction) //This printed the function definition
console.log(varFunction) //This printed [Function: myFunction]

console.log("Try anonymous functional hoisting on my own")
//console.log(validUser) //error "its not a function" and stops. I do not get "udefined"

//console.log(validUser(5,9)); //test it and see - "validUser is not a function". I do not get "undefined"

var validUser = function (a, b) {
    return a + b
}

console.log(validUser(5,9)) //gave me 14

*/
