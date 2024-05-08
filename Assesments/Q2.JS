//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 
//25166665, undefined, true, "Robert Jr.", null, {}, -32767

var myVar = "Robert "
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar = .0266
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar = false
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar = {myname : "Test Me"}
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar = 25166665
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar=undefined
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar = true
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar="Robert Jr."
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar=null
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar={}
console.log("Value: ", myVar, "Type: ", typeof(myVar))
myVar=-32767
console.log("Value: ", myVar, "Type: ", typeof(myVar))
