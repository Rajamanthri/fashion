import React from 'react'
import'./Hero.css'
import family from '../Assets/family.png'

export default function Hero() {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New arrivals only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
        </div>
      </div>
      <div className="hero-right">
            <img src={family} alt="" />
      </div>
    </div>
  )
}
