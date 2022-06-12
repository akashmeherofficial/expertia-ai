import React from 'react'
import './Jobsearchcards.css'


const Jobsearchcards = ({heading,content,content2}) => {
  return (
    <div className='j-card'>

    <h3>{heading}</h3>
        <p>{content}</p>
        <p>{content2}</p>
    </div>
  )
}

export default Jobsearchcards