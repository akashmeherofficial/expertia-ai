import React, { useContext } from 'react'
import './Getstarted.css'
import { GetStartedContext } from '../context/GetStartedContext'

const GetStarted = () => {
  const {updateStarted}=useContext(GetStartedContext)
  return (
    <div className='section'>
        <div className="left-gs">
        <h1>Let's Find that</h1>
        <h1>Best Candidate...</h1>
        <p>Source, screen, rank candidates</p>
        <p>from multiple job boards, internal and external databases.</p>
        <button className="gs-btn" onClick={()=>updateStarted(true)}>
            Get Started
        </button>
        </div>
        <div className="right-gs">
            <embed className='embed' src="" type="video/mp4" />
        </div>

    </div>
  )
}

export default GetStarted