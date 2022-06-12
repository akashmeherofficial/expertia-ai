import React from 'react'
import './Jobsearch.css'
import Imgtwo from '../../img/Imgtwo.jpg'
import Detailsfourthcards from '../Detailsfourthcards/Detailsfourthcards'
import Jobsearchcards from '../Jobsearchcards/Jobsearchcards'

const Jobsearch = () => {
  return (
    <div className='section3'>
        <div className="container">

        <div className="left-js">
            <p className='forprof'>For Professionals...</p>
            <img className='imgprof' src={Imgtwo} alt="Imgtwo" />
        </div>
        <div className="right-js">
            <Detailsfourthcards heading="Focus your Job Search" content="Enough of those irrlevent job suggestions. With top-notch suggestions for you to apply and personlised career path planning for job seeking individuals..."/>
            <button className="apply-btn">Apply</button>
        </div>
        </div>
        <div className="container2">

        <div className="prof-skills">
            <h3>Right Professionals with Right Skills!</h3>
            <p>Find the right professional in minutes* & user Use our Ai Score and Expandibility model to make your hiring decisions with confidence </p>
            <p> Enough of those irrlevent job suggestions. With top-notch suggestions for you to apply and personlised career path planning for job seeking individuals..."</p>
            
           
        </div>
        <div className="benefits">
            <Jobsearchcards className="benefits2" heading="Save Time and Money" content="On average, we hellp reduce our clients hiring cost by 80% in time and money spent." content2="In out Pilot study, 1 professional from the top 5 recommended is hired with 100% success rate."/>
            <Jobsearchcards  className="benefits2" heading="Wildest Sourcing" content="A single click on Expertia would source candidates from India's top job portals!" content2="Our platform integratd with top leading job portals to broaden your reach and sourcing of professionals."/>
            <Jobsearchcards  className="benefits2" heading="Integrated with your services!" content="Our APIs are exposed to integrate with the services and platforms you use. Be it WhatsApp, HRMS/SAP tools." content2="You can chase to get real time updates and integration based on your convenience!"/>
        </div>
        </div>
    </div>
  )
}

export default Jobsearch