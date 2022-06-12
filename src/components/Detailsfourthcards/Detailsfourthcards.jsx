import React from 'react'
import './Detailsfourthcards.css'

const Detailsfourthcards = ({heading,content}) => {
  return (
    <div className='d-card'>
        <h3>{heading}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Detailsfourthcards