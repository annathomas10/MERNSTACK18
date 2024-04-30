console.log("In myserver js")

const express = require('express')
const app = express() //this now is our express app server 

//http://localhost:3000/data?amount=250&percent=100
app.get('/data', function (req, res) {
    //req.query - is used to read the values present after ? in api path
    let queryString = req.query 
 
    console.log('queryString: ',queryString)
    if (queryString.percent == 100) {
       // res.json("thank you: ", amount)
      // res.send("thank you: ", queryString.amount)
      res.send("thank you")
    }else{
        res.json(queryString)
    }
})

app.listen(3000)

console.log("api launched at - localhost:3000")
