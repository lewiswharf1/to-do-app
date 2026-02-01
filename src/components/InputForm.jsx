import React from 'react'

const InputForm = () => {
  return (
    <form className='add-to-list'>
        <h2>New item:</h2>
        <div className='input-label'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name'/>
        </div>
        <div className='input-label'>
            <label htmlFor='date'>Date:</label>
            <input type='date' id='date'/>
        </div>
        <div className='input-label'>
            <label htmlFor='time'>Time:</label>
            <input type='text' id='time'/>
        </div>

        <button type='submit'>Submit</button>
    </form>
  )
}

export default InputForm