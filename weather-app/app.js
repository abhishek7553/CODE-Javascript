const request = require('request')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const address=process.argv[2]
geocode(address,(error,data)=>{
    if(error)
    {
        return console.log(error)
    }
    
    forecast(data.latitude,data.longitude,(err,msg)=>{
        if(error)
        {
          return  console.log(err)
        }
        else
        {
            console.log(data.location)
            message = msg.desc+'. It is '+msg.temp+' degree out. There is '+msg.deg+'% chance of rain.'
            console.log(message)
        }
    })
    
})

