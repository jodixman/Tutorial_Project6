import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      {/*---- Text ----*/}
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>

      {/*---- Button ----*/}
      <div className='gpt3__cta-btn'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA