require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/twitwer',(req,res)=>{
    res.send('shruti')
})

app.get('/register',(req,res)=>{
    res.send('Please register first')
})
app.get('/login',(req,res)=>{
    res.send('Please login')
})
app.listen(process.env.PORT, () =>{
    console.log(`Server listen at port ${port}`)
})