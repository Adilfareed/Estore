import React from 'react'
import "./offers.css"
import exclusive_image from "../Assets/exclusive_image.png"

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers_left'>
        <h1 > Exclusive</h1>
        <h1> Offers for You</h1>
        <p>ONLY ON BEST SELLING PRODUCTS</p>
        <button className='check_button'>Check Now</button>


        </div>
        <div className='offers_right'>
            <img src={exclusive_image } alt='e-img' />
        </div>
    </div>
  )
}

export default Offers