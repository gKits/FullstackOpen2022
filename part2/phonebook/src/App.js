import { useEffect, useState } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson= (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    if (persons.find(person => person.name === personObject.name) === undefined){
      setPersons(persons.concat(personObject))
    }
    else {
      alert(`${personObject.name} is already in the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const toShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInput = (event) => {
    setFilter(event.target.value)
    if (filter !== ''){
      setShowAll(false)
    }
    else{
      setShowAll(true)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterHandler={handleFilterInput}/>
      <h3>New entry</h3>
      <PersonForm submitFunction={addPerson}
        nameInput={newName} nameInputHandler={handleNameInput}
        numberInput={newNumber} numberInputHandler={handleNumberInput}
      />
      <h2>Numbers</h2>
      <Phonebook phonebook={toShow}/>
    </div>
  )
}

export default App
