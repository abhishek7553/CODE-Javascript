const request = require('request')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

geocode('Boston',(error,data)=>{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(data)
    }
    
forecast(data.latitude,data.longitude,(err,msg)=>{
    if(error)
    {
        console.log(err)
    }
    else
    {
        console.log(msg)
    }
})
    
})

