import React from 'react'

const Message = ({ message, style }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={style}>
            {message}
        </div>
    )
}

export default Message