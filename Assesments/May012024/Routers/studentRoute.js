
let express = require("express")
let studentRouter = express.Router({}) 
adminRouter.get("/",(req, res)=>{
    res.json([{"name":"anna", "GPA":"4.0"}])
})

adminRouter.get("/info",(req, res)=>{
    res.send("No Information present at the moment Test!!!")
})
  

  module.exports = studentRouter;