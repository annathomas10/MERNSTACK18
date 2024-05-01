
const fs = require("fs")
//1. Create a setup for Express Web Server
const express = require('express') 
const app = express() 
const port = 3000

//2. Configure a route name - Student
//3. Create a express app and configure in server.js to delegate routes with - "Student"
const studentRouter = require("/Routers/studentRoute")
const studentApp = express(); 
app.use("/student", studentApp)
studentApp.use(studentRouter)

//4. Create API's in default setup - getStudentDetails - Pass Student info like - 
//Name, Age, Address, Session as query string
//(see studentRoute.js)

//5. Save this information received in #4  to a file named studentIfo using fs module async way



app.listen(port)
console.log("api launched at - localhost:"+port)
