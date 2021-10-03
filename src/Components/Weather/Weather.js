import React from 'react'
import Footer from  '../Footer' 
import Navbar from '../Navbar'
import Weatherday from './Weatherday'
import WeatherLocation from './WeatherLocation'

function Weather() {
    return (
        <div>
            <Navbar/>
            <WeatherLocation/>
            <Weatherday/>
            <Footer/>
        </div>
    )
}

export default Weather
