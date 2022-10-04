import React from 'react'

const PersonForm = ({ submitFunction, nameInput, nameInputHandler, numberInput, numberInputHandler }) => {
    return (
        <form onSubmit={submitFunction}>
            <div>name: <input value={nameInput} onChange={nameInputHandler}/></div>
            <div>number: <input value={numberInput} onChange={numberInputHandler}/></div>
            <div>
            <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm