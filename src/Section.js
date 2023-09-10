import React from 'react'
import './section.css'
import { NavLink } from 'react-router-dom'

const Section = () => {
  return (
    <div className='section1'>
        <ul>
            <li><NavLink to="/">All</NavLink></li>
            <li><NavLink to="/complete">Complete </NavLink></li>
            <li><NavLink to="/notcomplete">not complete</NavLink></li>
        </ul>
    </div>
  )
}

export default Section