var { aConstant, User } = require("./module") //require is node module that allows us importing data from other file


console.log(User.getUserInfo())

console.log(aConstant)

console.log(globalThis.User)