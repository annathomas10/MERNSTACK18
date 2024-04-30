//importing express top class and then creating express server

console.log("In server js")

const express = require('express')
const app = express() //this now is our express app server 

app.get('/', function (req, res) {
  res.send('Hello World!!! From Wanda!!')
})


//http://localhost:3000/data?name=suyash&session=express
app.get('/data', function (req, res) {
    //req.query - is used to read the values present after ? in api path
    let queryString = req.query 
 
    console.log('queryString: ',queryString)
    if (queryString.session == "express") {
        res.json({"name " : queryString.name})
    }else{
        res.json(queryString)
    }
})


//http://localhost:3000/nameByID/2000
app.get('/nameByID/:id', function (req, res) {
    //reads the parameter passed in path of API, we can have multiple query params
    let queryParam = req.params["id"] 
    console.log('id: ',queryParam)
    if (queryParam == 2000) {
        res.send("<h1>User is present</h1>")
    }else{
        res.send("<h1>User is not present</h1>")
    }
})

//when i used the browser back and forward navigation, the call to the api is not resent
//I know because the changed logging did not show in the console here
app.listen(3000)

console.log("api launched at - localhost:3000")