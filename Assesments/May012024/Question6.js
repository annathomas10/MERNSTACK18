//6. Give me an example of map and set collection 
//each with at least four properties implemented - like get, set, clear, etc

/*let myMap = new Map()
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

let myDevices = new Set(["ingenico 360","pax3900", "lane 3000",])
console.log('1. ',myDevices.entries())
console.log('2. ',myDevices.delete("pax3900"))
console.log('3. ',myDevices.entries())
console.log('4. ',myDevices.add("lane5000"))
console.log('5. ',myDevices.values()) 
console.log('6. ',myDevices.has("pax3900"))
myDevices.forEach((device, myDevices)=>
{
    console.log("device is: ",device)
})

