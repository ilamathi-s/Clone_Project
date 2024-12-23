import React from 'react'
import './App.css'
function CommunityCard() {
  return (
        <div className="card text-center mb-3 w-[50rem] h-[35rem] ">
            <div className="card-body bg-black border-style">
                <h5 className="card-title text-white font-serif py-2">Join a community of students dedicated to upskilling</h5>
                <h1 className="card-text text-white font-bold py-3">1,434,262</h1>
                <p className='card-text text-white font-serif py-3' >Approximately 10,000 students enroll in LetsUpgrade programs every day</p>
            </div>
        </div>
  )
}

export default CommunityCard