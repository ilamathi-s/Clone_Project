import React from 'react'
import SocialCard from './SocialCard'
import './App.css'
import Media_1 from './images/media-1.png'
import Media_2 from './images/media-2.png'
import Media_3 from './images/media-3.jpg'
import Media_4 from './images/media-4.png'
import Media_5 from './images/media-5.png'
import Media_6 from './images/media-6.png'
function footer() {
  return (
    <div className='justify-items-center'>
    <div className='justify-items-center py-36'>
         <h5>LU ON SOCIAL MEDIA</h5>
        <div className='flex flex-wrap gap-3 mt-6 border-style'>
            <SocialCard media_img={Media_1} media="Instagram" followers="41,500+"/>
            <SocialCard media_img={Media_2} media="Youtube" followers="2,04,500+"/>
            <SocialCard media_img={Media_3} media="LinkedIn" followers="14,000+"/>
            <SocialCard media_img={Media_4} media="Whatsapp" followers="57,000+"/>
            <SocialCard media_img={Media_5} media="Discord" followers="12,400+"/>
            <SocialCard media_img={Media_6} media="Twitter" followers="1,190+"/>
        </div>
    </div>
      <p className='font-semibold'>2024 © LetsUpgrade EdTech Pvt. Ltd.</p>
      <p className='text-center text-sm px-16'>LetsUpgrade EdTech Pvt. Ltd. is a completely owned subsidiary and operational division of ITM Edutech Training Pvt. Ltd., which is part of the ITM Group. LetsUpgrade, a business inside ITM Edutech Training India Pvt. Ltd., acts in accordance with ITM's aim to provide high-quality educational and training services. All material, trademarks, logos, and intellectual property shown on this website are the exclusive property of ITM Edutech Training India Pvt. Ltd. and LetsUpgrade EdTech Pvt. Ltd., and are protected under relevant intellectual property laws. Unauthorized use, copying, distribution, or exhibition of any content on this website is strictly forbidden and will result in legal action to the maximum degree allowed by law.</p>
    </div>
  )
}

export default footer