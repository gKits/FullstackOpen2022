import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {
    const [weather, setWeather] = useState({})
    const [temp, setTemp] = useState(0)
    
    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        .then(location => {
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.data[0].lat}&lon=${location.data[0].lon}&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                setWeather(response.data)
                setTemp(response.data.main.temp)
            })
        })
    }, [country])

    return (
        <div>
            <h2>Weather in {country.capital[0]}</h2>
            temperature: {temp}
        </div>
    )
}

export default Weather