const express = require('express')

const hbs = require('hbs')
const path = require('path')

const app = express()

//weatherdata 
const weatherData = require('../utils/weatherData')
const { error } = require('console')

app.get('/',(req,res)=>
{
    res.send('This is first Page')
})

app.get('/weather',(req,res) =>
{
    if(!req.query.address)
    {
        return res.send('Address is required')
    }
    // res.send('weather')
    weatherData(req.query.address , (error , result )=>{

        if(error)
           return res.send(error)
        else
        res.send(result)

    })


})

const port = process.env.PORT || 3000 ;

app.listen(port , ()=> console.log(`Server is running on ... ${port}`)
)