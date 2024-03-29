//Q5. Give me an example of your choice on closure, hoisting, constructor function, each.

//CLOSURE
/*function parent(name){

    studentID = "123-45-6789" // social security number
    studentStatus = "E" //enrolled
    studentGrades = ["CLASS1:A", "CLASS2:A", "CLASS3:D"]
    studentName="Anna"

    var child = function getStudentStatus(){
        if (name == studentName)
            return studentStatus
        else
            return "unauthorized access"
    }

    return child

}

var child = parent("bob")
console.log(child)
console.log(child())

var child = parent("Anna")
console.log(child()) */


//hoisting start ==============================================================================
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

console.log(validUser(5,9)) //gave me 14 */
//hoisting end ===========================================================================================

//constructor function

firstname="bob" //what is passed in is used, not "bob". So the ctor does not need to use "this"
function myCTORFunction (p1,p2,p3)
{
    firstname = p1
    age = p2
    score = p3

    this.GetName=function(){
        return firstname;
    }

    this.GetAge=function(){
        return age
    }
}

myObj=new myCTORFunction("anna","29",100)
console.log("age: ", myObj.GetAge(), " name: ", myObj.GetName())






