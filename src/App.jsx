import { useState } from 'react'
import ToDo from './components/ToDo'
import InputForm from './components/InputForm'

function App() {

  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState({
    name: "",
    date: "",
    time: "",
    completed: false
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
      time: "",
      completed: false
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

  const handleComplete = (name, date, setOptionsShowing) => {
    setToDoList(prev => prev.map(task => 
      task.name === name && task.date === date
      ? {...task, completed: true}
      : task
    ))
    setOptionsShowing(false);
  }

  const handleEdit = (name, date, setOptionsShowing) => {
    let newName = window.prompt("Please enter the new name");
    console.log(newName);
    setToDoList(prev => prev.map(task => 
      task.name === name && task.date === date
      ? {...task, name: newName}
      : task
    ))
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

        <h2 className='task-message'>Oustanding tasks: </h2>


        {toDoList.filter(task => task.completed === false) <= 0 
        ? 
        <p className='no-items-message'>Add items to your list...</p> 
        :
        toDoList.map(task => 
          {if (task.completed === false) {
            return (
              <ToDo
              key={task.name} 
              name={task.name}
              date={task.date}
              time={task.time}
              handleRemove={handleRemove}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
            />)         
          }}
          )
        }

        <h2 className='task-message'>Completed Tasks: </h2>

        {toDoList.filter(task => task.completed === true).length <= 0 
        ? 
        <p className='no-items-message'>No completed items...</p> 
        :
        toDoList.map(task => 
          {if (task.completed === true) {
            return (
              <ToDo
              key={task.name} 
              name={task.name}
              date={task.date}
              time={task.time}
              handleRemove={handleRemove}
              handleComplete={handleComplete}
            />)         
          }}
          )
        }

      </div>

    </main>
  )
}

export default App
