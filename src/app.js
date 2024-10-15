const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.get("/user",(req, res)=>{
    console.log(req.query)
    res.send("bye ");
    })
app.post("/user",(req, res)=>{
        res.send("bye ");
        })