import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="container sign_up_bg">
        <div className="subscribe_wrapper"></div>
      </div>
      <div className="container footer_bg">
        <div className="footer_wrapper">
          <div className="logo">
            <img src="./logo.png" alt="logo" />
          </div>
          <div className="social">
            <a href="/">
              <BsFacebook />
            </a>
            <a href="/">
              <BsInstagram />
            </a>
            <a href="/">
              <CiTwitter />
            </a>
          </div>
          {/* <div className="tag">
            <span>App</span>
            <span>Web</span>
            <span>Api</span>
            <span>Imagine</span>
            <span>3D</span>
            <span>Team</span>
            <span>News</span>
            <span>discord</span>
          </div> */}
          <p>Term of Service Privacy Policy</p>
          <p>2023 Axeom Ai</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
