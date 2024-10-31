import React from 'react'

export default function TodoCard({name, handleRemoveName, index, handleEditName}) {
  return (
    <div className='todoCard'>
        <h4>{name}</h4>
        <button onClick={() => {
          handleEditName(index)
        }}>✏️</button>

        <button onClick={() => {
          handleRemoveName(index);
        }}>🗑️</button>
    </div>
  )
}
