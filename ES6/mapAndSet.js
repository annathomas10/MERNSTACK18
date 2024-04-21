//Think the benefit of map is its easier to do certain things compared to array etc

/*map - is a data structure which is used to create objects and array with different types of keys
Special kind of Collection Created in ES6 to set iterables even with non primitive key's unlike other collections(json)
Allows us to use a lot of methods to get, set, delete and do other operations without much pain
remembers insertion order so the fetch is always easy compared to any other collection*/

/*The choice of using a map or array in JavaScript depends on the specific use case. 
Maps are good for storing key-value pairs, while arrays are good for storing ordered 
collections of values. In general, if you need to store key-value pairs and access them 
by key, a map is a better choice*/
/*Objects - you cannot iterate,delete one entry, etc. Maps you can do both*/


/*
let myMap = new Map()

let myStr='test'
let myNum=1234
let myObj={}
let myFunc=function myFunc(){}
myMap.set(myStr,'string is key')
myMap.set(myNum,'number is key')
myMap.set(myObj,'object is key')
myMap.set(myFunc,'function is key')

//entries,get,delete,clear
console.log('1. ',myMap.entries())
console.log('2. ',myMap.get(myStr))
console.log('3. ',myMap.delete(1234))
console.log('4. ',myMap.entries())
console.log('5. ',myMap.clear())
console.log('6. ',myMap.entries())
console.log('7. ',myMap.size)  */

/********************************************************************/

//when we need a iterable/collection with unique values
//Set : this maintains a set of unique collection with additional properties and methods like map

let StudentSet = new Set(["David N","Wanda", "Otoi", "Mayuri", "Joe", "Yiluo"])

console.log('1. ',StudentSet.entries())

console.log('2. ',StudentSet.add("Sierra"))
console.log('3. ',StudentSet.add("Suyash"))

//console.log(StudentSet.add("Suyash"))

console.log('4. ',StudentSet.add("Wanda"))

// console.log(StudentSet.entries())

console.log('5. ',StudentSet.has("David N"))
console.log('6. ',StudentSet.has("David"))
console.log('7. ',StudentSet.has("Eric"))
