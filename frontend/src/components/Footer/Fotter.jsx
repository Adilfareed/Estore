import React from "react";
import "./footer.css";
import footer_logo from "../Assets/A2 logo.jpg";
import instalogo from "../Assets/instagram_icon.png";
import whstapplogo from "../Assets/whatsapp_icon.png";
import pinterestlogo from "../Assets/pintester_icon.png";
const Fotter = () => {
  return (
    <div className="footer">
      <div className="footerimg">
        <img src={footer_logo} alt="footer" />

        <p> di's </p>
      </div>
      <div className="footer-links">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Contact</li>
          <li>offices</li>
          <li>About</li>
        </ul>
      </div>
      <div className="social-icons">
        <div>
          {" "}
          <img src={instalogo} alt="social" />
        </div>
        <div>
          {" "}
          <img src={pinterestlogo} alt="social" />
        </div>
        <div>
          <img src={whstapplogo} alt="social" />
        </div>
      </div>
      <div className="copyright">copyright@2024 -All Right Reserved.</div>
    </div>
  );
};

export default Fotter;
