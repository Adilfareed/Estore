import React from "react";
import "./Newslater.css";
const Newslater = () => {
  return (
    <div className="newslater">
      <div className="text-div">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>
            Subscribe to our Newslater and Stay Updated
        </p>
      </div>
      <div className="form-div">
        <input className="email" type="text" placeholder="Your Email Id"></input>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default Newslater;
