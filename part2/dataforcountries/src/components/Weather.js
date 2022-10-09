import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        .then(location_response => {
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${location_response.data[0].lat}&lon=${location_response.data[0].lon}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(weather_response => {
                setWeather(weather_response.data)
                setLoading(false)
            })
        })
    }, [country])

    if (loading) {
        return <></>
    }

    return (
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            temperature: {weather.main.temp} °C
            <div><img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='Weather Icon'/></div>
            <div>wind: {weather.wind.speed} m/s</div>
        </div>
    )
}

export default Weather