import React from 'react'
import './App.css'
import Certify_6 from './images/certify_6.png'
function Certifydiscover() {
  return (
        <div className="card mb-3 w-[940px] h-[500px]  ">
        <div className="row g-3 bg-orange-200 border-style ">
            <div className="col-md-4">
                <img src={Certify_6} className="img-fluid rounded-start" alt="..."/>
            </div>
        <div className="col-md-8 bg-orange-200 border-style ">
            <div className="card-body ">
                <h3 className="card-title">Discover Certifications</h3>
                <p className="card-text">Elevate your career with LetsUpgrade programs, offering everything from foundational tech certifications to design, management and business -focused courses</p>
                <button className='Explore'>Explore Certificate Programs</button>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Certifydiscover