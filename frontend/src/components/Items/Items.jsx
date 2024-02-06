import React from "react";
import "./items.css";
const Items = (props) => {
  return (
    <>
      <div className="items">
        <img src={props.image} alt="item" />
        <p> {props.name}</p>
        <div className="item_prices">
          <div className="new-price">${props.new_price}</div>
          <div className="old-price">${props.old_price}</div>
        </div>
      </div>
    </>
  );
};

export default Items;
