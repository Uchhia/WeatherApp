import React, { useEffect, useState } from 'react';
import './Weather.css';
import axios from 'axios';

function Weather() {
  const [city,setcity]=useState('');
  const [Temp,setTemp]=useState(0);
  const [bothTemp,setBoth]=useState({min:'',max:''})
  
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=WEATHERAPIKEY`)
    .then( res=>{
      setTemp(res.data.main.temp);
      
      setBoth({...bothTemp,min:res.data.main.temp_min,max:res.data.main.temp_max})
    })
    .catch(err=>{
      setTemp('')
    })

  },[city])

  return (
    <div className='wrapper'>
        <div className='header'>
            <input type='search' defaultValue={''} placeholder='Type City Name..' onChange={(e)=>{setcity(e.target.value)}}/>
        </div>
        <div className='content'>
          <div className='icon'>
            <i class="fa-solid fa-street-view fa-4x" ></i>
          </div>
          <div className='city'>
            {city}
          </div>
        </div>
        <div className='footer1'>
          <h1>{Temp?Temp:'Temp'}°</h1>
        </div>
        <div className='footer2'>
          <h3> Min :{bothTemp.min}° Cel | Max :{bothTemp.max}° Cel</h3>
        </div>
       
      
    </div>
  );
}

export default Weather;
