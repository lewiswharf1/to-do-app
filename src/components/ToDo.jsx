import React from 'react'
import Calendar from './Calendar'
import Clock from './Clock'
import Dropdown from './Dropdown'

const ToDo = ({ name, date, time }) => {
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
        <Dropdown />
    </div>
  )
}

export default ToDo