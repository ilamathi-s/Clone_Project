import React from 'react'
import './App.css'
function Certificard(props) {
  return (
        <div className="card w-[13rem] h-[30rem]">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text font-style font-light">{props.detail}</p>
                <h5 className="card-title font-style">{props.title}</h5>
                <button href="#" className="Enroll justify-center place-self-end">Enroll Now</button>
            </div>
    </div>
  )
}

export default Certificard