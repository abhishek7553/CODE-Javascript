const request = require('request')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


const weather =  (address) => {
    if(!address){
        console.log("Please , provide a LOCATION.")
    }
    else {
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
               console.log(data.forecast)
            }
        })
        
    })
    }
}

module.exports = weather