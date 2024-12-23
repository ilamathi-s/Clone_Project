import React from 'react'
import './App.css'
import Uni_1 from './images/uni-1.png'
import Uni_2 from './images/uni-2.png'
import Uni_3 from './images/uni-3.png'
import Uni_4 from './images/uni-4.png'
import Uni_5 from './images/uni-5.jpg'
import UniversityCard from './UniversityCard'
function UniversityPage() {
  return (
    <div className='justify-items-center'>
        <div className='justify-items-center py-32'>
                <h1 className="card-subtitle py-4"><span className='text-sky-900 italic font-bold font-serif'>Esteemed Partnered University</span></h1>
                <p className="card-text"><span className='font-medium para-font'>Partner Universities for MS Study Abroad Programs</span></p>
        </div>
        <div className='flex justify-items-center border-style  w-[15rem] h-[8rem]'>
                <img src={Uni_1} alt='image1'/>
                <img src={Uni_2} alt='image2' className='ml-5'/>
        </div>
        <div className='flex flex-wrap gap-3 py-24'>
            <UniversityCard image={Uni_3} course="MS In Big Data Analaytics"/>
            <UniversityCard image={Uni_4} course="MS In Big Data Analaytics"/>
            <UniversityCard image={Uni_5} course="MS In Big Data Analaytics"/>
        </div>
    </div>
  )
}

export default UniversityPage