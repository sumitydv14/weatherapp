import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';


function Weatherday() {

     const weathers = useSelector(state => state.weather.weather);
     const [weatherData, setWeatherdata] = useState(weathers);
     console.log(weathers);

     console.warn("weatherdata" , weatherData);

     useEffect(() => {
         setWeatherdata(weathers);
     }, [weathers])

     const dt = 1632812779;
     
     var day = new Date(dt*1000);
     
     console.log(day.toUTCString());
     console.log(day.toDateString());
     console.log(day.toISOString());
     console.log(day.toString());

    return (
        <section className="weather-day">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="rain-part">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="city">
                                        <h1>{weatherData.name}</h1>
                                        <h2>06:20pm</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="day">
                                        <h1>TimeZone</h1>
                                        <h4>{Intl.DateTimeFormat().resolvedOptions().timeZone}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6 d-flex align-items-end">
                                    <div className="city">
                                       
                                        <h2><span><i className="fas fa-2x fa-cloud-showers-heavy"></i></span>  </h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="day">
                                        <h1></h1>
                                        <h4></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-0">
                         <div className="day-count">
                             <ul className="list-inline d-flex justify-content-around m-0">
                                 <li className="text-center" >
                                     <h5>City Temp</h5>
                                     <h6><i className="fas fa-cloud"></i></h6>
                                     <h4>{weatherData?.main?.temp_max}</h4>
                                     <h4>{weatherData?.main?.temp_min}</h4>
                                 </li>
                                 <li className="text-center" >
                                     <h5>Sys</h5>
                                     <h6><i className="fas fa-cloud"></i></h6>
                                     <h4>{weatherData?.sys?.sunrise}</h4>
                                     <h4>{weatherData?.sys?.sunset}</h4>
                                 </li>
                                 <li className="text-center" >
                                     <h5>Wind</h5>
                                     <h6><i className="fas fa-cloud"></i></h6>
                                     <h4>{weatherData?.wind?.deg}</h4>
                                     <h4>{weatherData?.wind?.gust}</h4>
                                 </li>
                                

                             </ul>
                         </div>
       


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Weatherday
