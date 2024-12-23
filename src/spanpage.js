import React from 'react'
import './App.css'
import DiscoverCertify from './Certifydiscover'
import CommunityCard from './CommunityCard'
function spanpage() {
  return (
    <div>
    <div className='justify-items-center py-20'>
      <div className='flex justify-center gap-3'>
        <p className='horizontal-line'></p>
        <h4 className="card-title"><span className='color'>OUR PRESENCE SPAN</span></h4>
        <p className='horizontal-line'></p></div>
        <h1 className="card-subtitle py-4"><span className='text-black italic font-bold font-serif'>Students From Top Colleges Upskill With LetsUpgrade</span></h1>
        <p className="card-text"><span className='font-medium para-font'>Students enroll in universities for degrees, but they turn to LetsUpgrade for skills</span></p>
    </div>
    <div className='justify-items-center'>
        <DiscoverCertify/>
        <CommunityCard/>
    </div>
    </div>
  )
}

export default spanpage