//Objects - defined with class Object in js are the back bone or basic allocations of JS
// var User = new Object({}) //constructor based

//1. Using two curly brackets
var Employee = {
    Name : "Nhan",
    ID : 2123,
    GroupCode : "Permanent",
    GetEmployeeInfo : function () {
        return this.Name +" "+this.ID +" "+this.GroupCode +" "+this.Salary
    }
}

// Employee.Salary = "$25000" //adding property to class
// console.log(Employee.GetEmployeeInfo())

//This is not recommended for inheritance - because they are not 2 separate copies. Ref to same object
//2. We can use object constructor to create a copy and provide partial inheritance
// var SoftwareEngg = new Object(Employee);

// SoftwareEngg.Salary = "$30000" //new property into child class
// //over-riding - GetEmployeeInfo 
// SoftwareEngg.GetEmployeeInfo = function () {
//     return this.Name +" "+this.ID +" "+this.GroupCode +" "+this.Salary
// }
// console.log(Employee.GetEmployeeInfo())
// console.log(SoftwareEngg.GetEmployeeInfo())


//3. We should use Object.create to create a copy and provide inheritance
var SoftwareEngg = Object.create(Employee);

SoftwareEngg.Name = "Mayuri"
SoftwareEngg.Salary = "$30000" //new property into child class
//over-riding - GetEmployeeInfo 
// SoftwareEngg.GetEmployeeInfo = function () {
//     return this.Name +" "+this.ID +" "+this.GroupCode +" "+this.Salary
// }
console.log(Employee.GetEmployeeInfo())
console.log(SoftwareEngg.GetEmployeeInfo())

//this inheritance in javascript is possible only due to prototype
//prototype - is an object in JS to create link between child and parent

console.log(SoftwareEngg.__proto__) //returns Employee object

//4. Empty Object
var EmptyObj = {} //new Object({}) -- this is another way to do same thing
console.log(EmptyObj.__proto__)

//5. Breaking the protoype chain and defining base functions - passing null in constructor method
var nullPrototype = Object.create(null) //so now you can override the base functions provided by javascript
nullPrototype.toString = function (params) {
return "Do something interesting"
}

//6. Object.Assign - mergin two objects

var User = {name : "Aileen", add1 : "Lake City 1", mobile : "9898989889"}

var Address = {name : "Aileen", add1 : "Wall Streets", productName : "New product" }

//var Delivery = {User , Address} //This will just create a variable that has both objects in it

var Delivery = Object.assign(User, Address)//takes the left most ones updated values in case of same properties

console.log(Delivery)


//create one object with name person, and inherit it to Student and create two new properties and one new method
//pls use both ways of inheritance