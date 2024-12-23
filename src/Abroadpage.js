import React from 'react'
import AbroadCard from './AbroadCard'
import Abroad_1 from './images/abroad_1.png'
import Abroad_2 from './images/abroad_2.png'
import Abroad_3 from './images/abroad_3.png'
import Abroad_4 from './images/abroad_4.png'
import Abroad_5 from './images/abroad_5.png'
import Ab_1 from './images/ab-1.jpg'
import Ab_2 from './images/ab-2.jpg'
import Ab_3 from './images/ab-3.jpg'
import Ab_4 from './images/ab-4.jpg'
import Ab_5 from './images/ab-5.jpg'
import Ab_6 from './images/ab-6.png'
import Ab_7 from './images/ab-7.png'
import Ab_8 from './images/ab-8.png'
import Ab_9 from './images/ab-9.png'
import Ab_10 from './images/ab-10.png'
import './App.css'
function Abroadpage() {
  return (
    <div className='justify-items-center'>
        <div className='justify-items-center py-32'>
            <div className='flex justify-center gap-3'>
                <p className='horizontal'></p>
                <h4 className="card-title"><span className='text-pink-700'>LOOKING TO PURSE YOUR MASTER DEGREE ABROAD?</span></h4>
                <p className='horizontal'></p></div>
                <h1 className="card-subtitle py-4"><span className='text-sky-900 italic font-bold font-serif'>Study Abroad While Saving Significantly</span></h1>
                <p className="card-text"><span className='font-medium para-font'>Join LetsUpgrade's MS Abroad Programs, allowing students to start their MS journey with select international universities in India and </span></p>
                <p className="card-text"><span className='font-medium para-font'>later continue abroad, saving significantly on costs</span></p>
            </div>
            <div className='flex flex-wrap justify-items-center gap-3 '>
                <AbroadCard image={Ab_1} icon={Abroad_1} place="USA" />
                <AbroadCard image={Ab_2} icon={Abroad_2} place="UK" />
                <AbroadCard image={Ab_3} icon={Abroad_3} place="NEW ZEALAND" />
                <AbroadCard image={Ab_4} icon={Abroad_4} place="JAPAN" />
                <AbroadCard image={Ab_5} icon={Abroad_5} place="AUSTRALIA" />
            </div>
            <div className='flex flex-wrap  mt-8'>
                <img src={Ab_6} className='image-size' alt="image"/>
                <div className='flex flex-col px-4'>
                <img src={Ab_7} className='image-size1' alt="image"/>
                <img src={Ab_8} className='image-size1' alt="image"/></div>
                <div className='flex flex-col px-4'>
                <img src={Ab_9} className='image-size1' alt="image"/>
                <img src={Ab_10} className='image-size1' alt="image"/></div>
                
            </div>
    </div>
  )
}

export default Abroadpage