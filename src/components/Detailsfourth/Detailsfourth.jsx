import React from 'react'
import './Detailsfourth.css'
import Imgone from '../../img/Imgone.png'
import Detailsfourthcards from '../Detailsfourthcards/Detailsfourthcards'


const Detailsfourth = () => {
  return (
    <div className='section2'>
        <div className="left-df">
            <img className='imgone' src={Imgone} alt="Illustrate1" />
        </div>    
        <div className="right-df">
          <Detailsfourthcards  heading="At First" content="Expertia Ai uses algorithms(validated at AAAI conferrence) which, given a Job Description, identifies Top 10 candidates from a given pool of application with 100% accuracy."/>  
          <Detailsfourthcards heading="Then," content="It assigns a scope to each profile, scores skills to explain why one candidate is better than the other purely in terms of desired skills."/>  
          <Detailsfourthcards heading="Not Just That" content="The algorithm doesn't just rely on the information  in CV; But goes beyond to build a skill graph, collect information regarding the candidate to enhance the screening abilities of the algorithm"/>  

        </div>
    </div>
  )
}

export default Detailsfourth