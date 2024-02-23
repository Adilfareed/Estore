import React from "react";
import "./css/Productcatagory.css";
import { ShopContext } from "../context/shopcontext";
import drop_down from "../components/Assets/dropdown_icon.png";
import Items from "../components/Items/Items";
import { useContext } from "react";

const ProductCatagory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="main-catagory">
      <div className="banner">
        <img src={props.banner} alt="BANNER" />
      </div>

      <div className="index">
        <p>
          <span className="boldtext">Showing 1-12</span>out of 36{" "}
        </p>
        <div className="sort">
          Sort by <img src={drop_down} alt="dropdown" />
        </div>
      </div>
      <div className="catagory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="exlpore">Explore More</div>
    </div>
  );
};

export default ProductCatagory;
