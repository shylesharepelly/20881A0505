const express=require('express')
const app = express()

app.listen(3000,()=>{
    console.log("server started at port 3000")
})

app.get("/numbers",async (req,res)=>{
const url =req.query.url;
console.log(url)
})