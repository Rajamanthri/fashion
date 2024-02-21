import React from 'react'
import './navigation.css'

export default function Navigationbar() {
  return (
    <div className='navigation-container'>
        <div className='topicBox'>
        <span>Home</span>
      </div>
      <div className='topicBox'>
        <span>Men</span>
      </div>
      <div className='topicBox'>
        <span>Women</span>
      </div>
      <div className='topicBox'>
        <span>Kids</span>
      </div>
      <div className='topicBox'>
        <span>wishlist</span>
      </div>
      <div className='topicBox'>
        <span>Cart</span>
      </div>
      <div className='topicBox'>
        <span>Contact</span>
      </div>
    </div>
  )
}
