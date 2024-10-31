import React, { useState } from 'react';

export default function TodoInput({handleAddName, setInput, input}) {

  return (
    <div className='todoInput'>
        <input type='text' placeholder='Digite um nome' value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => {
          handleAddName(input);
          setInput('')
        }}>Anotar</button>
    </div>
  )
}
