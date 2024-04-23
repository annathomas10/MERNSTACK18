// require - import, module.exports - export
//ES6- import and export

//User.js

const User = {"New" : "UserName"}
export default User; //only one default export is allowed from one module/file

export let UserInfo = ()=>{
    return "FirstName, LastName"
}

//constants.js - filename and path
export const pi = 3.141
export const xi = 9.18
export const refKey = 5.25
export let UserInfo = 200000 

//OurFile.js

//default import - generally the same/similar name as file doesn't use {}
import User from "./User" 
//named - import (named is used to export/import multiple items to/from files )
import {UserInfo} from "./User" 
//multiple named imports
import {pi, xi, refKey} from "./constants"  
//imports everything as wild card in one constant// all imports
import * as Constants from "./constants"  

console.log(Constants.pi)
console.log(Constants.xi)

//aliasing if we have duplicate import
import {UserInfo as constUserInfo} from "./constants" 
