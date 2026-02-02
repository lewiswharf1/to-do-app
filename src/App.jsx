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
    console.log("Clicked");

    if (!toDo.name || !toDo.date || !toDo.time) {
      console.log("here")
      console.log(toDo.name)
      console.log(toDo.date)
      console.log(toDo.time)
      return;
    }

    setToDoList((prev) => [...prev, toDo]);
    setToDo({
      name: "",
      date: "",
      time: ""
    })
  }

  const handleRemove = (name, date) => {
    setToDoList(
      toDoList.filter(task => 
        task.name !== name 
        && task.date !== date
      )
    )
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
          handleRemove={handleRemove}
          />
        )

      }

      </div>

    </main>
  )
}

export default App
