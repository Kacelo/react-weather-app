import React,{useState} from 'react';
import axios from 'axios';
function App() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=66c292d74799d5094a23ace1a374b5e7`
  
  const searchLocation =(event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  
  }
  
  return (
    <div className="app">
      <div className='search'>
        <input
        value = {location}
        onChange ={event => setLocation(event.target.value)}
        onKeyPress ={searchLocation}
        placeholder='Enter Location'
        type ="text"
        />
      </div>
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            </div>
            <div className='description'>
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              <p>clouds</p>
            </div>
          </div>


          {data.name != undefined &&
          <div className='bottom'>
            <div className='feels'>
              {data.main ? <p className='bold'>{data.main.feels_like}</p> : <p>unavailable</p>}
             
              <p>feels like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'> {data.main.humidity.toFixed()}%</p> : null}
                
                <p>humidity</p>
            </div>
            <div className='wind'>
              {data.main ? <p className='bold'> {data.wind.speed.toFixed()} K/PH</p> : null}
              <p>wind speed</p>
            </div>
          </div>
}
        </div>
    </div>
          
  );
}

export default App;
