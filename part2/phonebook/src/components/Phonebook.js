import React from 'react'
import Person from './Person'

const Phonebook = ({ phonebook, remove }) => {
    return (
        <table>
        <tbody>
        {phonebook.map(person => <Person key={person.id} person={person} remove={remove}/>)}
        </tbody>
        </table>
    )
}

export default Phonebook