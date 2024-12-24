import React from 'react'
import './App.css'
function AbroadCard(props) {
  return (
        <div className="card w-[10rem] h-[20rem] ">
            <img src={props.image} className="card-img image-fill w-[192px] h-[140px] border-style " alt="abroad"/>
            <div className="card-img-overlay justify-items-center">
                <img src={props.icon} className='icon_ab'/>
                <h5 className="card-title font-semibold py-2 text-white">{props.place}</h5>
            </div>
        </div>
  )
}

export default AbroadCard