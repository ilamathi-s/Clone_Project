import React from 'react'
import '../src/App.css'
import Certificard from './Certificard'
import Certify_1 from '../src/images/certify_1.png'
import Certify_2 from '../src/images/certify_2.png'
import Certify_3 from '../src/images/certify_3.png'
import Certify_4 from '../src/images/certify_4.png'
import Certify_5 from '../src/images/certify_5.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
function certifipage() {
  return (
    <div className='justify-center px-48' id='certify'>
        <div className="card " >
         <div className="card-body justify-items-center bg border-style">
            <div className='flex justify-center gap-3 mt-20'>
                <p className='horizontal-line'></p>
                <h4 className="card-title"><span className='color'>CERTIFICATE PROGRAMS</span></h4>
                <p className='horizontal-line'></p>
            </div>
                <h1 className="card-subtitle py-4"><span className='font-white italic font-bold'>All From Basic To Advance</span></h1>
                <p className="card-text"><span className='font-white font-medium'>Earn certificate from LetsUpgrade, GDG MAD - Google Developer Group Mumbai, NSDC, and ITM Group of Institutions</span></p>
            <div className='flex flex-wrap p-2 gap-2'>
                <Certificard image={Certify_1}  detail="20.6k Enrolled 16 Dec" title="Postman API Fundamentals Student Expert Certification" />
                <Certificard image={Certify_2}  detail="11.5k Enrolled 12 Dec" title="Node.js Bootcamp" />
                <Certificard image={Certify_3}  detail="17.5k Enrolled 17 Dec" title="GenAI 101 with Pieces" />
                <Certificard image={Certify_4}  detail="9.9k Enrolled 19 Dec" title="Excel Bootcamp" />
                <Certificard image={Certify_5}  detail="17.9k Enrolled 23 Dec" title="JioCinema React Clone" />
            </div>
            <div className='py-5'><a href="#" className='link-warning link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>view all certificate program<FontAwesomeIcon icon={faGreaterThan} className='px-2'/></a></div>
         </div>
        </div>
    </div>
  )
}

export default certifipage