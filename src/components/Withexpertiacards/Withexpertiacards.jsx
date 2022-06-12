import React from 'react'
import './Withexpertiacards.css'


const Withexpertiacards = ({FontAwesomeIcon,heading,content,link}) => {
  return (
    <div className='cards'>
        {/* <FontAwesomeIcon/> */}
        <h1>{heading}</h1>
        <p>{content}</p>
        <p><a href={link}>Know More</a></p>
    </div>
  )
}

export default Withexpertiacards