import React, { useContext } from 'react'
import './productdisplay.css'
import { ShopContext } from '../../context/shopcontext';
const Productdisplay = (props) => {
    const {product}= props;
    const{addtoCart}=useContext(ShopContext);
  return (
    <div className='main-div'>
    <div className='div2'>
    <div className='image-div'>
     <img src={product.image} alt=''/>
     <img src={product.image} alt=''/>
     <img src={product.image} alt=''/>
     <img src={product.image} alt=''/>
    </div>
    <div className='main-img'>
     <img src={product.image} alt=''/>
    </div>
    </div>
    <div className='right-div'>
        <p className='name '> {product.name}</p>
        <div className='old-price'>  ${product.old_price}</div>
        <div className='new-price'>  ${product.new_price}</div> 
        <p className='size'>Select Size </p>
       <div className='size-list'>
    
       <div> S</div>
       <div>M</div>
       <div>L</div> 
       <div>XL</div>
       <div>XXL</div>

       </div>
        <div className='cart-div'>   <button onClick={()=>{addtoCart(product.id)}} className='cart-button'>Add To Cart</button></div> 
        
    </div>
    </div>
  )
}

export default Productdisplay