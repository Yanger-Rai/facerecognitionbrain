import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./logo.png";

const Logo = () => {
  return (
    <>
      <div className="ma4 mt0">
        <Tilt className="Tilt">
          <div className="pa3">
            <img alt="logo" src={brain} />
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Logo;
