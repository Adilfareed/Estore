import React from "react";
import Items from ".././Items/Items";
import new_collections from "../Assets/new_collections";
import "./Newcollections.css";

const Newcollections = () => {
  return (
    <div className="new_collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="new-collection-item">
          {new_collections.map((item, i) => {
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
         })}
      </div>
    </div>
  );
};

export default Newcollections;
