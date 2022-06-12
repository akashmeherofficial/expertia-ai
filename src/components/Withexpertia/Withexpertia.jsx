import React from 'react'
import './Withexpertia.css'
import Withexpertiacards from '../Withexpertiacards/Withexpertiacards'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

const Withexpertia = () => {
  return (
    <div className='withexpertia'>
        <h5 className='heading'>with Expertia</h5>
        <div className="card-item">
        <Withexpertiacards FontAwesomeIcon={faCompass} heading='Source Widely,' content="Automatically source from your company data base or explore the existing job platforms for the best talent out there..." link="/"/>
        <Withexpertiacards FontAwesomeIcon={faCompass} heading='Screen Confidentially.' content="Screen only the best of the best with Expertia's algorithm with 100% accuracy with detailed explanation." link="/"/>
        
        </div>
    </div>
  )
}

export default Withexpertia