const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log('listening on port 3000');
})
app.use("/test1",(req, res)=>{
res.send("hello");
})
app.use("/test",(req, res)=>{
    res.send("bye ");
    })