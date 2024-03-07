import React from 'react'
import './productdisplay.css'
const Productdisplay = (props) => {
    const {product}= props;
  return (
    <div>
     <img src={product.image} alt=''/>
    </div>
  )
}

export default Productdisplay