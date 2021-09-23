const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=6253441e4737e681704e1caf5d6dda37&query=37.8267,-122.4233'

request(
    { url : url},
    (error,response)=>{
        const data= JSON.parse(response.body)
        console.log(data.current)
    }
)