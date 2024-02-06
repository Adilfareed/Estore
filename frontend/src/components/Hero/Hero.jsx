import React from "react";
import "./hero.css";
import hand from "../Assets/hand_icon.png";
import heroimg from "../Assets/hero_image.png";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="left ">
          <p>
            <p> New arrivals Only </p>

            <h1>
              New <img className="hand" src={hand} alt=""></img>
            </h1>

            <h1>
              Collections <br />
              for everyone
            </h1>
            <Button className="col_button" type="primary">
              Latest Collections <ArrowRightOutlined />{" "}
            </Button>
          </p>
        </div>
        <div className="right">
          <img src={heroimg} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
