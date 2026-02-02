import React, { useEffect, useState, useRef } from 'react'
import Calendar from './Calendar'
import Clock from './Clock'
import Dropdown from './Dropdown'

const ToDo = ({ name, date, time }) => {

  const [optionsShowing, setOptionsShowing] = useState(false);
  const optionsRef = useRef(null);

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        console.log("you clicked outsied");
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
    <div className='to-do'>
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
          <button>Remove item</button>
          <hr/>
          <button>Mark as complete</button>
        </div>
    </div>
  )
}

export default ToDo