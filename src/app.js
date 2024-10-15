const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.get("/user/:userId/:username",(req, res)=>{
    console.log(req.params)
    res.send("bye ");
    })
app.post("/user",(req, res)=>{
        res.send("bye ");
        })