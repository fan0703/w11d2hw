const express = require('express')
const app = express()
app.get('/',(req, res)=>{
    res.send('99 Bottles of beer on the wall'+ " " + '<a>take one down, pass it around<a>')
})


app.listen(3000,()=>{
    console.log('listening')
})