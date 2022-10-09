import React from 'react'

const Person = ({ person, remove }) => {
    return (
        <tr>
        <td>{person.name}</td>
        <td>{person.number}</td>
        <td><button onClick={() => remove(person)} value={person}>delete</button></td>
        </tr>
      )
}

export default Person