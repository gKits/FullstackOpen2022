import React from 'react'

const CountryListed = ({ country, click }) => {
    return (
      <div>
        {country.name.common}
        <button onClick={() => click(country.name.common)}>fill</button>
      </div>
    )
}

export default CountryListed