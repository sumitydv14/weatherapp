import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { getWeather } from '../action/WeatherAction';
function WeatherLocation() {

    const [city , setCity] = useState("puna");
    const [search , setSearch] = useState(null);
    const [error , setError] = useState(null);
    const [weatherdata , setWeatherdata] = useState(null);

     const dispatch = useDispatch();

    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4f1324a4f82567789747b7b1c3928dd2`)
            .then(res => res.json())
            .then((result) =>{
                setWeatherdata(result);
                console.warn(result);
                dispatch(getWeather(result));
            }) 
            .catch((error) =>{
                setError(error);
            })

    }
  
    useEffect(()=>{
        fetchWeather();
    },[])
            
   
      
  

     


    return (
        <section className="location-part">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="search-loaction">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={(e)=>setCity(e.target.value)}                       
                                />
                                <span className="input-group-text" id="basic-addon1" onClick={()=>fetchWeather()}>
                                     <i className="fas fa-search-location"></i>
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="search-city d-flex justify-content-center ">
                            <div className="add-city">
                                <i className="fas fa-3x  fa-plus-circle"></i>
                            </div>
                            <div className="add-content">
                                <p className="m-0" >Add Location</p>
                                <p>Did you know you can add favourite locations?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeatherLocation
