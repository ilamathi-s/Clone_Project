import React from 'react'
import logo from '../src/images/lulogo.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Nav() {
  return (
    <div>
        <nav>
          <ul className='flex flex-wrap gap-3 h-12'>
            <li className='px-24 py-4'><h3 className='headspace'>About LetsUpgrade</h3></li>
            <li className='px-12 py-4'><h3 className='headspace'>Explore programs</h3></li>
            <li className='px-12'><img src={logo} className='logo' alt="LU_logo"/></li>
            <li><h1 className='logofont py-2'>LU</h1></li>
            <li className='px-32 py-4'><h3 className='headspace'>Refer & Earn</h3></li>
            <li className='px-24 py-3'><button type="button" name="login" className='Login'>Log In</button></li>
            </ul>
        </nav>
        <marquee className="marquee"><h3 className='font-serif font_size py-2'>WELCOME TO LETSUPGRADE!! <FontAwesomeIcon icon={faStar} className='icon px-2' />PRAGATH ENROLLED IN DATA ANALYTICS!! <FontAwesomeIcon icon={faStar} className='icon px-2' />PRAGATH ENROLLED IN WEB DEVELOPMENT!!  <FontAwesomeIcon icon={faStar} className='icon px-2' /> PRAGATH ENROLLED IN DATA SCIENCE!!  <FontAwesomeIcon icon={faStar} className='icon px-2' />PRAGATH ENROLLED IN PYTHON PROGRAMMING!!  <FontAwesomeIcon icon={faStar} className='icon px-2' /> PRAGATH ENROLLED IN DATA ANALYTICS!!  <FontAwesomeIcon icon={faStar} className='icon px-2' /> PRAGATH ENROLLED IN DATA SCIENCE!! </h3></marquee>

    </div>
  )
}

export default Nav