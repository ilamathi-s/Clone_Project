import React, { useEffect, useState } from 'react'
import './App.css'
import Bg from './images/login-bg.jpg'
import image1 from './images/login-1.png'
import image2 from './images/login-2.png'
import image3 from './images/login-3.png'
import image4 from './images/login-4.png'
import image5 from './images/login-5.png'
function Login() {
  const images=[
    image1,
    image2,
    image3,
    image4,
    image5,
  ];
    const [currentImage,setCurrentImage]= useState(0);
    useEffect(()=> {
      const interval = setInterval(() => {
        setCurrentImage((previous)=> (previous+1)% images.length);
      },3000);
      return () => clearInterval(interval);
    },[]);
  return (
    <div class="card text-bg-dark">
      <img src={Bg} class="card-img Bg" alt="..."/>
      <div class="card-img-overlay">
          <div className='place-items-center mt-32 '>
            <div class="card w-[28rem] h-[50rem] justify-items-center p-4" >
                <img src={images[currentImage]} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title italic font-serif text-2xl">Login or Signup</h5>
                    <p class="card-text para-font">Future proof your career with LetsUpgrade</p>
                <div class="input-group mb-3">
                    <span class="input-group-text">+91</span><input type="text" class="form-control"  placeholder="9876543210"/>
                </div>
                <button class="Continue mb-3">Continue</button>
                <p className='cart-text text-gray-500 text-xs'>Have internation number? <a className='link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover'>Login Here!</a></p>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Login