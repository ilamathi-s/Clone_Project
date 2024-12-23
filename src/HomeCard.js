import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function HomeCard(props) {
  return (
    <div className="px-2 card-style h-[28rem] border-style">
        <div className="card text-bg-dark  ">
        <img src={props.image} className="card-img bg  h-[35rem] " alt="alt"/>
        <div className="card-img-overlay">
        <h2 className="card-title font-serif ">{props.heading}</h2>
        <button name='button' className='card-button font-normal text-center'>{props.button}</button>
    </div>
</div>
    </div>
  )
}

export default HomeCard