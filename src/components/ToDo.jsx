import React, { useEffect, useState, useRef } from 'react'
import Calendar from './Calendar'
import Clock from './Clock'
import Dropdown from './Dropdown'

const ToDo = ({ name, date, time, handleRemove, handleComplete, handleEdit }) => {

  const [optionsShowing, setOptionsShowing] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setOptionsShowing(false);
      }
    }

    if (optionsShowing) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [optionsShowing]);

  return (
    <div className='to-do' ref={optionsRef}>
        <h2>{name}</h2>
        <div className='date-time-info'>
          <div className='date-info'>
              <Calendar />
              <p>{date}</p>
          </div>
          <div className='time-info'>
              <Clock />
              <p>{time}</p>
          </div>
        </div>
        <Dropdown displayOptions={() => setOptionsShowing(true)}/>

        <div className={`options ${optionsShowing ? "" : "invisible"}`}>
          <button onClick={() => handleRemove(name, date)}>Remove item</button>
          <hr/>
          <button onClick={() => handleComplete(name, date, setOptionsShowing)}>Mark as complete</button>
          <hr />
          <button onClick={() => handleEdit(name, date, setOptionsShowing)}>Edit</button>
        </div>
    </div>
  )
}

export default ToDo