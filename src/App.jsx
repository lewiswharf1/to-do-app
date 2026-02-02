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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toDo.name || !toDo.date || !toDo.time) {
      return;
    }

    setToDoList((prev) => [...prev, toDo]);
    setToDo({
      name: "",
      date: "",
      time: ""
    })
  }

  

  return (
    <main>
      <h1>To dos:</h1>

      <InputForm 
        setToDo={setToDo} 
        setToDoList={setToDoList} 
        toDo={toDo}
        handleSubmit={handleSubmit}/>
  
      <div className='to-do-wrapper'>

        {toDoList.length <= 0 
        ? 
        <p className='no-items-message'>Add items to your list...</p> 
        :
        toDoList.map(task => 
          <ToDo
          key={task.name} 
          name={task.name}
          date={task.date}
          time={task.time}
          />
        )

      }

      </div>

    </main>
  )
}

export default App
