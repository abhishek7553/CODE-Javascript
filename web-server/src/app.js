const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('Hello express')
})
app.get('/help',(req,res)=>{
    res.send('Help Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})

app.get('/weather',(req,res)=>{
    res.send('Weather Page')
})
// app.com
// app.com/help 
// app.com/about

app.listen(3000,()=>{
    console.log("SERVER UP AND RUNNING #3000.")
})