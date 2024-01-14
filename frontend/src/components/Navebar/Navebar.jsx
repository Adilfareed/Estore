import React from "react";
import "./navebar.css";
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";
import Shop from "../../pages/Shop";
import ProductCatagory from "../../pages/ProductCatagory";

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
             <li> <Link to='/'>Shop</Link></li>
            <li> <Link to='/catagory'>Mens</Link></li>
            <li> <Link to= '/catagory'>womens</Link></li>
            <li> <Link to='/catagory'>KIds</Link></li>

          </ul>
        </div>
        <div className="cart-section">
        <Link to='/login'><button> login </button> </Link>
         <Link to="/cart"><img src={cart} alt="cart"/></Link>
         <div className="cart-count">
          0
         </div>
        </div>
      </div>
    </>
  );
};

export default navebar;
