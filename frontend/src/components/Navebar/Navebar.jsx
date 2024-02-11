import React from "react";
import "./navebar.css";
import logo from "../Assets/A2 logo.jpg"
import cart from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";

const navebar = () => {
  return (
    <>
      <div className="navebar">
        <div className="site">
        <img src={logo} alt="logo"/>
         <p>Adi's</p>  
        </div>
        <div >
          <ul className="mid">
             <li> <Link style={{textDecoration  : 'none'}}to='/'>Shop</Link></li>
            
            <li> <Link style={{textDecoration  : 'none'}} to='/mens'>Mens</Link></li>
            <li> <Link style={{textDecoration  : 'none'}} to= '/womens'>Womens</Link></li>
            <li> <Link  style={{textDecoration  : 'none'}} to='/kids'>Kids</Link></li>

          </ul>
        </div>
        <div className="cart-section">
        <Link style={{textDecoration  : 'none'}}  to='/login'><button> login </button> </Link>
         <Link style={{textDecoration  : 'none'}}  to="/cart"><img src={cart} alt="cart"/></Link>
         <div className="cart-count">
          0
         </div>
        </div>
      </div>
    </>
  );
};

export default navebar;
