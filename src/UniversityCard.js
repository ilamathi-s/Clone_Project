import React from 'react'

function UniversityCard(props) {
  return (
    <div className="card w-[20rem]" >
        <img src={props.image} className="card-img-top h-28" alt="..."/>
        <div className="card-body">
            <h6 className="card-title text-pink-700">SHEFFIELD HALLAM UNIVERSITY</h6>
            <h5 className="card-title font-serif">{props.course}</h5>
            <p className="card-text">
                <ul className='list-disc'>
                    <li>6 to 8 Months India online + offline</li>
                    <li>Job Opprotunities in UK</li>
                    <li>2 Years whork visa post complete MS Degree</li>
                </ul></p>
            <button className="Enroll ">Apply Now</button>
  </div>
</div>
  )
}

export default UniversityCard