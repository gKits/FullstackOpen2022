import { useState } from 'react'
import Phonebook from './components/Phonebook'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [showAll, setShowAll] = useState(true)

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
