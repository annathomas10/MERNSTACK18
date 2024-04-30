//let express = require("express")

// dev/local , production or testing - nodejs gives me the environment it is in
//But how does it know?
//let environment = process.environment 

//This is a dev dependency when I installed and I used -D
//let devHelper = require("chat-gpt")

//yarn - explicitely install and then use
//npm - comes with nodejs, so just use this

//we need to initialize npm in our directory

// npm init => creates package.json <with meta data of the project>

//nnow we can install packages

// npm i <module_name> eg npm i express

// dependencies - will be installed locally and in prod server

// npm i <module_name> -D

// dev-dependencies - will be installed locally and but not in prod server 


//to install all packages present in package.json use below -

// npm i  [no need to mention module]


// to uninstall the packages 
// npm uninstall <module_name>

// cyclic dependencies - when we are not able to resolve the dependencies of dependencies
// package.lock.json - helps us to avoid such problems