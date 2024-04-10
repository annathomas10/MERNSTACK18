//Shorthand - is avoids writing redundant variable name, when key of our object and the object name
//are the same

// if we put comma we don't need to use let again and it will continue as let till semicolon ;
let cat = "Miaow", 
dog = "Woof",
bird = "Chirp",
lion = "roar";

//without short hand
let AnimalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

//ES6 - we can just keep one if key and variable name are same
let AnimalSoundES6 = {cat, dog, bird, lion }

//Can put on one line like above
// let AnimalSoundES6 = {
//     cat,
//     dog,
//     bird,
//     lion
// }

//{ cat: 'Miaow', dog: 'Woof', bird: 'Chirp', lion: 'roar' }
console.log(AnimalSound)

//{ cat: 'Miaow', dog: 'Woof', bird: 'Chirp', lion: 'roar' }
console.log(AnimalSoundES6) 

//Will get [object Object], {}.toSting() => [object Object]
console.log(`Animal Sounds 1 ${AnimalSoundES6}`) 

//converts the object in to value of strings, {"cat":"Miaow","dog":"Woof","bird":"Chirp","lion":"roar"}
//The benefit of JSON.stringify is that the javascript object has been converted into a json object
//You cannot transfer an object across the network, it has to be json, xml etc
console.log(`Animal Sounds 2 ${JSON.stringify(AnimalSoundES6)}`) 

//Will get [object Object], {}.toSting() => [object Object]
console.log("Animal Sounds 3 " + AnimalSoundES6) 

//{"cat":"Miaow","dog":"Woof","bird":"Chirp","lion":"roar"}
console.log("Animal Sounds 4 " + JSON.stringify(AnimalSoundES6))

//{ cat: 'Miaow', dog: 'Woof', bird: 'Chirp', lion: 'roar' }
//Still an object, no conversion
console.log("Animal Sounds 5 ", AnimalSoundES6) // putting , makes log to convert object into string