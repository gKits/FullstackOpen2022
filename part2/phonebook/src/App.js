import { useEffect, useState } from 'react'
import personService from './services/persons'

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
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    const found = persons.find(person => person.name === personObject.name)
    if (found === undefined){
      personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(personObject))
        console.log(response)
      })
    }
    else {
      if(window.confirm(`${personObject.name} already exists. Do you want to change their number from ${found.number} to ${personObject.number}`)) {
        personObject.id = found.id
        changeNumber(personObject)
      }
    }
    setNewName('')
    setNewNumber('')
  }

  const removePerson = (event) => {
    event.preventDefault()
    const person = persons.find(person => person.id === parseInt(event.currentTarget.value))
    if (window.confirm(`Do you really want to delete ${person.name}`)) {
      personService
      .remove(person.id)
      .then(response => {
        const copy = [...persons]
        const index = copy.indexOf(copy.find(p => p.id === person.id))
        if (index > -1) {
          copy.splice(index, 1)
          setPersons(copy)
        }
        console.log(response)
      })
    }
  }

  const changeNumber = (personObject) => {
    personService
    .put(personObject.id, personObject)
    .then(response => {
      const copy = [...persons]
      const index = copy.indexOf(copy.find(person => person.id === personObject.id))
      copy[index] = personObject
      setPersons(copy)
      console.log(response)
    })
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
      <Phonebook phonebook={toShow} remove={removePerson}/>
    </div>
  )
}

export default App
