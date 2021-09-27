const request = require("request")

const forecast = (long,lang, callback) => {
    const url='http://api.weatherstack.com/current?access_key=6253441e4737e681704e1caf5d6dda37&units=f&query='+lang+','+long
    
    request({url:url, json:true},(error,response)=>{
    
        if(error){
            
            callback('Unable to connect!',undefined)
        }else if(response.body.error==0){
            
            callback('Unable to find location!',undefined)
        }else{
            callback(undefined,{
                desc:response.body.current.weather_descriptions[0],
                temp:response.body.current.temperature,
                deg:response.body.current.precip
            })
        }
    })
}

module.exports = forecast