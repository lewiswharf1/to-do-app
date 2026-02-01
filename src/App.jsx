import { useState } from 'react'
import ToDo from './components/ToDo'

function App() {

  return (
    <main>
      <h1>To dos:</h1>

      <form className='add-to-list'>
        <h2>New item:</h2>
        <input />
        <input />
        <input />
        <button>Submit</button>
      </form>
  
      <div className='to-do-wrapper'>

        <ToDo
          name="Clean room"
          date="today"
          time="4.50pm"
        />

      </div>

    </main>
  )
}

export default App
