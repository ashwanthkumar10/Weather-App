const request = require('request')


//Basic Setup of url
const openWeatherMap = 
{
 BASE_URL : 'https://api.openweathermap.org/data/2.5/weather?q=',
 SECRET_KEY : '9ad448ea9e2a4928a6cbb96f729da4c7'
}


//Functionalities 
const WeatherData = (address ,callback)=>
{
    const url = openWeatherMap.BASE_URL + encodeURIComponent(address)
     + "&APPID=" + openWeatherMap.SECRET_KEY ;
    console.log(url);
    
    request({ url ,json : true } , (error , data)=>
    {
        if(error)
        {
            callback(true , 'unable to fetch the details' + error)
        }
        else{
            callback(false , data?.body)
        }
       
        
    })
}
module.exports = WeatherData ;