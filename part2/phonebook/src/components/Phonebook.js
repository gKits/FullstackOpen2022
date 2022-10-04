import React from 'react'
import Person from './Person'

const Phonebook = ({ phonebook }) => {
    return (
        <table>
        <tbody>
        {phonebook.map(person => <Person key={person.id} person={person}/>)}
        </tbody>
        </table>
    )
}

export default Phonebook