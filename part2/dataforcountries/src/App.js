import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
      console.log(response.data)
    })
  }, [])

  const toShow = showAll
  ? countries
  : countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  const handleFillButtonClick = (toFill) => {
    setSearch(toFill)
  }

  const handSearchInput = (event) => {
    setSearch(event.target.value)
    if (search !== ''){
      setShowAll(false)
    }
    else{
      setShowAll(true)
    }
  }

  return (
    <div>
      find
      <input value={search} onChange={handSearchInput}></input>
      <Countries countries={toShow} click={handleFillButtonClick}/>
    </div>
  )
}

export default App
