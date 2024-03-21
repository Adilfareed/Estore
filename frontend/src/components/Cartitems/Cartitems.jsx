import React, { useContext } from "react";
import { ShopContext } from "../../context/shopcontext";
import removeicon from "../Assets/cart_cross_icon.png";
import "./Cartitem.css";
const Cartitems = () => {
  const { GetTotalAmount, all_product, cartitems, removefromCart } =
    useContext(ShopContext);
  return (
    <div className="Cartitem">
      <div className="cart-text">
            <p > Products</p>
             <div className="text1">
          
           <p> Title </p>
         </div>
         <p>Price</p>
         <p>Quantity</p>
         <p>Total</p>
          <p>Remove</p>
       </div>
       <hr />
       {all_product.map((e) => {
        if (cartitems[e.id] > 0) {
          return (
            <div className="cart-material">
              
              <div className="text">
               <img className="item-img" src={e.image} alt="" />
                {" "}
                <p> {e.name} </p>
              </div>
              <p>${e.new_price} </p>
              <button className="cart-items-quantity">{cartitems[e.id]}</button>
              <p> {e.new_price * cartitems[e.id]} </p>
              <img
                src={removeicon}
                onClick={() => {
                  removefromCart(e.id);
                }}
                alt=""
              />
              
            </div>
          );
        }
       })}
       <div className="TotalAmount">Total Amount = $ {GetTotalAmount()}</div>
       </div>
  );
};

export default Cartitems;
