import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);
let getDefaultcart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartitems, Setcartitem] = useState(getDefaultcart());

  const addtoCart = (itemId) => {
    Setcartitem((last) => ({ ...last, [itemId]: last[itemId] + 1 }));
  };
  const removefromCart = (itemId) => {
    Setcartitem((last) => ({ ...last, [itemId]: last[itemId] - 1 }));
  };
  const GetTotalAmount = ()=>{
    let totalAmount=0;
    for(const item in cartitems)
    {
      if(cartitems[item]>0){
        let iteminfo= all_product.find((product)=>product.id===Number(item))
        totalAmount += iteminfo.new_price*cartitems[item];
      }
      
    }
    return totalAmount;
  }
  const GetTotalCartItems = ()=>{
    let totalcartitems=0;
    for(const item in cartitems)
    {
      if(cartitems[item]>0){
        totalcartitems+= cartitems[item];
      }
      
    }
    return totalcartitems;
  }
  const contextValue = {GetTotalCartItems,GetTotalAmount, all_product, cartitems, addtoCart, removefromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
