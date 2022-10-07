import React from 'react'
import CountryListed from './CountryListed'

const Countrylist = ({ countries, click }) => {
    return (
      <>
        {countries.map(country => <CountryListed key={country.name.official} country={country} click={click}/>)}
      </>
    )
}

export default Countrylist