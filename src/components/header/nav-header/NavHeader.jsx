import React from "react";
import menuBar from "../../../assets/Group 68.svg";
import "./NavHeader.css";
import fb from '../../../assets/fb.png'
import twitter from '../../../assets/twitter.png'
import linked from '../../../assets/linkedin.png'
import insta from '../../../assets/insta.png'

const NavHeader = () => {
  return (
    <div className="container">
      <div className="left-nav">
        <div className="menubar">
          <img src={menuBar} alt="" />
          Brouse By Category
        </div>

        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Easy Monthly Installments</a>
        </li>
        <li>
          <a href="#">Shop by Brands</a>
        </li>
        <li>
          <a href="#">Become a Vendor</a>
        </li>
      </div>
      <div className="right-nav">
        <img src={fb} alt="" />
        <img src={twitter} alt="" />
        <img src={linked} alt="" />
        <img src={insta} alt="" />
      </div>
    </div>
  );
};

export default NavHeader;
