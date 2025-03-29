import './App.css'


import { Searchbox } from './components/Searchbox'
import { useState } from 'react';

function App() {

  let [weatherinfo , setweatherinfo]= useState({
    city: 'delhi',
    temp: 20,
    humidity: 20,
    windspeed: 30,
  })

  const updateinfo =(newinfo)=>{
    setweatherinfo(newinfo);
  }
return (
    <>
     
     <Searchbox weather={weatherinfo} updateinfo={updateinfo}/>
    </>
  )
}

export default App
