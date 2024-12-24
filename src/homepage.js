import React from 'react'
import './App.css';
import HomeCard from './HomeCard';
import HomeCard2 from './HomeCard2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCertificate, faIndianRupeeSign, faTowerBroadcast } from '@fortawesome/free-solid-svg-icons';
import Home_1 from '../src/images/home_1.png'
import Home_2 from '../src/images/home_2.png'
import Home_3 from '../src/images/home_3.png'
import Home_4 from '../src/images/home_4.png'
function Homepage() {
  return (
    <div id='home'>
    <div className='justify-items-center py-36 '>
        <div className='text-9xl italic font-serif'>
            <h1 className='px-14 font-extrabold'>Future Proof Your</h1>
            <h1 className='font-extrabold'>Career With <span className='color font-extrabold'>LetsUpgrade</span></h1>
        </div>
        <div className='para-font'>
            Explore Tech, Design, Management, Business, Product and Data with LetsUpgrade. Learn directly from top Industry experts
        </div>
        <div className='flex py-20'>
            <p><FontAwesomeIcon icon={faTowerBroadcast} className='px-2' style={{ color: 'red' }}/>LIVE CLASSES  <span className='para-font px-2'> | </span></p>
            <p><FontAwesomeIcon icon={faCertificate} className='px-2' style={{ color: 'blue' }}/>GET CERTIFIED  <span className='para-font px-2'> | </span></p>
            <p><FontAwesomeIcon icon={faIndianRupeeSign} className='px-2' style={{ color: 'green' }}/>FREE PROGRAMS</p>
        </div>
    </div>
    <div className='flex flex-wrap px-28'>
        <HomeCard   image={Home_1} heading="Explore Certificate Programs" button="Get Certified"/>
        <HomeCard  image={Home_2} heading="Study Abroad Programs" button="Explore Programs"/>
        <div className='spacing flex flex-col  space-y-8 '>
          <HomeCard2 image={Home_3} heading="India's Best B.Tech CSE" button="Apply Now"/>
          <HomeCard2 image={Home_4} heading="B.Des in UI UX Program" button="Apply Now"/>
        </div>
   </div>
   </div>
  )
}

export default Homepage