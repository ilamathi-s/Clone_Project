import React from 'react'
import './App.css'
import Refer_1 from './images/refer-1.png'
import Refer_2 from './images/refer-2.png'
function Refer() {
  return (
    <div>
        <div className='justify-items-center py-32'>
            <div className='flex justify-center gap-3'>
                <p className='horizon'></p>
                <h4 className="card-title"><span className='text-green-800'>REFER AND EARN</span></h4>
                <p className='horizon'></p></div>
                <h1 className="card-subtitle py-4"><span className='italic font-serif'>Refer & Earn</span></h1>
                <p className="card-text"><span className='font-medium para-font'>Refer your friends to LetsUpgrade programs and earn T-shirts, stickers, notebooks, bags, tech gadgets, and more</span></p>
            </div>
            <div className='justify-items-center  '>
            <div className="card mb-3 w-[60rem] h-[55rem] bg-green-300" >
                 <div className="row g-0 ">
                    <div className="col-md-8">
                        <div className="card-body ml-9">
                            <h1 className="card-title font-serif italic py-3">Step 1</h1>
                            <h4 className="card-title py-3">Generate your Referral link - Share it</h4>
                            <p className="card-text py-2">3...2...1... It's that easy to generate your referral link!
                            Once generated, share it with all your friends, and if they join using your unique link, you'll earn points to win swags.</p>
                            <button className='Enroll mt-2'>Refer Now</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={Refer_1} className="img-fluid rounded-start image-size " alt="..."/>
                    </div>
                </div>
                <div className="row g-0 mt-5">
                    <div className="col-md-4">
                        <img src={Refer_2} class="img-fluid rounded-start image-size" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body mr-8 text-right">
                        <h1 className="card-title font-serif italic">Step 2</h1>
                            <h4 className="card-title py-3">See yourself top the leader board</h4>
                            <p className="card-text py-2">For every friend who joins using your referral link, your points increase, giving you a greater chance to win swags. Good luck!</p>
                            <button className='Enroll mt-2'>Refer Now</button>
                        </div>
                    </div>
            </div> 
            </div>
            </div>
    </div>
  )
}

export default Refer