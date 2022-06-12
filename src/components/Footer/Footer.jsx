import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="products">
        <h3>Products</h3>
        <ul>
            <li>For Companies</li>
            <li>XP Screening</li>
            <li>XP Sourcing</li>
        </ul>
        <h5>For Individuals</h5>
        <ul>

        <li>Personalised</li>
        <li> Job Recommmendation</li>
        </ul>
        </div>

        <div className="company">
            <h3>Company</h3>
            <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Tech Blogs</li>
                <li>Press</li>
                <li>Affiliates</li>
            </ul>
        </div>

        <div className="features">
            <h3>Features</h3>
            <li>Source-</li>
            <li>Integrate with 50+ Job Boards</li>
            <li>Screen-</li>
            <li>Explainable AI</li>
            <li>Rank</li>
            <li>Hyper Profiling, Hyper Screen</li>
        </div>

        <div className="connect">
            <h3>Connect</h3>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          
        </div>

    </div>
  )
}

export default Footer