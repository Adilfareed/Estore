import React from "react";
import "./navebar.css";
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"

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
            <li>Shop</li>
            <li> Mens</li>
            <li>Womens</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="cart-section">
          <button> login</button>
         <img src={cart} alt="cart"/>
         <div className="cart-count">
          0
         </div>
        </div>
      </div>
    </>
  );
};

export default navebar;
