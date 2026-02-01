import { useState } from 'react'
import ToDo from './components/ToDo'
import InputForm from './components/InputForm'

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState({
    name: "",
    date: "",
    time: ""
  })

  return (
    <main>
      <h1>To dos:</h1>

      <InputForm setToDo={setToDo} setToDoList={setToDoList}/>
  
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
