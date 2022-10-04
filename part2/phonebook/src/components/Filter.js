import React from 'react'

const Filter = ({ filter, filterHandler }) => {
    return (
        <div>
            filter: <input value={filter} onChange={filterHandler}></input>
        </div>
    )
}

export default Filter