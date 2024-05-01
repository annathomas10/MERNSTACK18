
let express = require("express")
let studentRouter = express.Router({}) 
studentRouter.get("/",(req, res)=>{
    res.json([{"name":"anna", "GPA":"4.0"}])
})

module.exports = studentRouter;