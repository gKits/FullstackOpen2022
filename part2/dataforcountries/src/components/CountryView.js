import React from 'react'
import Weather from './Weather'

const CountryView = ({ country }) => {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>capital: {country.capital[0]}</div>
        <div>area: {country.area}</div>
        <div>
          <h4>languages:</h4>
          <ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
        </div>
        <div><img src={country.flags.png} alt={`Flag ${country}`}/></div>
        <Weather country={country}/>
      </div>
    )
}

export default CountryView