const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6253441e4737e681704e1caf5d6dda37&query=37.8267,-122.4233&units=f'

request(
    { url : url, json:true},
    (error,response)=>{
        const msg =response.body.current.weather_descriptions[0] + ". It is currently "+response.body.current.temperature+" degree out. There is "+response.body.current.precip+"% chance of rain."
        console.log(msg)


    }
)