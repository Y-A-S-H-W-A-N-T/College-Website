import React from 'react'
import './css/display.css'

function Display({ prop, id }) {
  return (
    <div className='images'>
      <div key={id} className='data'>
        <h1>Title :</h1><p>{prop.Title}</p>
        <h1>News :</h1><p>{prop.News}</p>
      </div>
    </div>
  )
}

export default Display