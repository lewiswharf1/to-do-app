import React from 'react'

const InputForm = ({ setToDo, toDo, handleSubmit }) => {

  return (
    <form className='add-to-list'>
        <h2>New item:</h2>
        <div className='input-label'>
            <label htmlFor='name'>Name:</label>
            <input 
            type='text' 
            id='name' 
            value={toDo.name} 
            onChange={(e) => setToDo(prev => ({...prev, name: e.target.value}))}
            />
        </div>
        <div className='input-label'>
            <label htmlFor='date'>Date:</label>
            <input 
            type='date' 
            id='date' 
            value={toDo.date}
            onChange={(e) => setToDo(prev => ({...prev, date: e.target.value}))}
            />
        </div>
        <div className='input-label'>
            <label htmlFor='time'>Time:</label>
            <input 
            type='time' 
            id='time' 
            value={toDo.time}
            onChange={(e) => setToDo(prev => ({...prev, time: e.target.value}))}
            />
        </div>

        <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default InputForm