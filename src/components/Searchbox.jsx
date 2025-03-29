import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../components/searchbox.css"
import { useState } from 'react';
import sun from '../assets/sun.png'
import wind from '../assets/Assets/wind.png'
import humidity from '../assets/Assets/humidity.png'
import search  from '../assets/Assets/search.png'
import rain  from '../assets/Assets/rain.png'
import cloud  from '../assets/Assets/cloud.png'


export const Searchbox = ({weather , updateinfo}) => {

  const newsun = sun;
const newrain = rain;
const newcloud = cloud;



  // const API_URL = ' https://api.openweathermap.org/data/2.5/weather';
  const API_KEY = "ee094aa3d52aeb49cca36e400d1043f2"

  let [city ,setcity] = useState("");
  

  let weatherInfo = async ()=>{
   const response =  await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
   const newResonse = await response.json();
   console.log(newResonse);
   
   let result = {
    city: city,
    temp : newResonse.main.temp,
    tempMin:newResonse.main.temp_max,
    tempMax:newResonse.main.temp_max,      
    humidity:newResonse.main.humidity,
    feelslike:newResonse.main.feels_like,
    weather: newResonse.weather[0].description,
    windspeed: newResonse.wind.speed,
  }
    return result;
  };
  

   
    

  let handdleChange = (evt) => {
     setcity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    setcity("");
   let newinfo = await weatherInfo();
   updateinfo(newinfo);

  }



  

   
  return (
  <>
    <div className="wrapper">
       <div className='formdiv'>
   <form onSubmit={handleSubmit}  className='form'>
    <input
     id="inputbox" 
     placeholder='Search'
     variant="outlined" 
    value={city}
     required
     onChange={handdleChange}
     />
    {/* <Button variant="contained" type="submit">click here to submit</Button> */}
    <button type='submit' className='button'> <img src={search} alt="search" /></button>
   </form>


  
  </div>
  
  <img 
  src={
    weather?.temp > 25 
      ? sun 
      : weather?.humidity > 80
      ? rain 
      : weather?.temp < 10 
      ? cold 
      : cloud
  } 
  alt="Weather icon" 
  className="image" 
/>

    <h1 className='degree'>{weather.temp}°C</h1>

  <h1 className='name'> {weather.city}</h1>
 <div className='wind'>
 <img src={wind} alt="wind" />
 <h4>{weather.windspeed}KM/h wind speed</h4>
 </div>
  

<div className='humidity' >
  <img src={humidity} alt="humiditty" />
  <h4>{weather.humidity} % Humidity</h4>
  
</div>
  
  
   </div>  
   </>

  )
}
