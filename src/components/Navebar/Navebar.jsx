import React, { useContext, useState } from "react";
import "./navebar.css";
import logo from "../Assets/A2 logo.jpg";
import cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext, } from "../../context/shopcontext";

import { FaBars } from "react-icons/fa";
 
const Navebar = () => {
  
  const { GetTotalCartItems } = useContext(ShopContext);
  const[showNav,setShowNav]= useState(false);
  return (
    <>
      <div className="navebar">
      
        <div className="site">
          <img src={logo} alt="logo" />
          <p>Adi's</p>
        </div>
        <div>
          <ul className= { showNav?"mid-mobile "  : "mid"} >
            <li>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/">
                Shop
              </Link>
            </li>

            <li>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/mens">
                Mens
              </Link>
            </li>
            <li>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/womens">
                Womens
              </Link>
            </li>
            <li>
              {" "}
              <Link style={{ textDecoration: "none" }} to="/kids">
                Kids
              </Link>
            </li>
            <Link style={{ textDecoration: "none" }} to="/login">
            <button className="button"> login </button>{" "}
          </Link>
          </ul>

        </div>
        <div className="cart-section">
         
          <Link style={{ textDecoration: "none" }} to="/cart">
            <img className='cartimg' src={cart} alt="cart" />
          </Link>
          <div className="cart-count">{GetTotalCartItems()}</div>
        </div>
        
        <button className="hide-navebar" onClick={()=>{setShowNav(!showNav)}} >
         
         <FaBars />
       </button>
      </div>
    </>
  );
};

export default Navebar;
