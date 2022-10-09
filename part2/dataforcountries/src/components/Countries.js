import React from 'react'
import CountryView from './CountryView'
import Countrylist from './Countrylist'

const Countries = ({ countries, click }) => {
    if (countries.length > 10) {
        return <div>Too many countries to display</div>
    }
    else if (countries.length === 1) {
        return <CountryView country={countries[0]}/>
    }
    else {
        return <Countrylist countries={countries} click={click}/>
    }
}

export default Countries