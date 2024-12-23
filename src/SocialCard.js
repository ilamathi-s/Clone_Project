import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Bg from './images/background.jpg'
import './App.css'
function SocialCard(props) {
  return (
    <div className="card w-[12rem] h-[6rem] border-style">
            <img  className="card-img image-fill border-style w-[12rem] h-[6rem]" src={Bg} alt="..."/>
            <div className="card-img-overlay flex">
                <img src={props.media_img} className='icon_ab mt-2'/>
                <div className='px-3'>
                <p className='card-title para-font '>{props.media}</p>
                <h5 className="card-title text-base text-black">{props.followers}</h5></div>
            </div>
        </div>
  )
}

export default SocialCard