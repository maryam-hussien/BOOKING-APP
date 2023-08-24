import React from 'react'
import './mailList.css'

function MailList() {
  return (
    <div className='mail my-5'>
      <div className='container d-flex flex-column gap-2 mt-3 p-5 text-center '>
        
      <h1 className='fs-4 p-0 m-0'>Save Time , Save money</h1>
      <span className='fs-4 fw-lighter '>Sign Up and we 'll send best deal to you</span>
      <div className=' mailInputContainer d-flex justify-content-center gap-2 mt-3'>
      <input type='email' placeholder='Your Email'/>
      <button className=''>Subcribe</button>
      </div>
      </div>
      </div>
  )
}

export default MailList
