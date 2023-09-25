import React from "react";
import "./Footer.scss";
import topStar from "../../images/star.png";
import pinkStar from "../../images/satagra.png";
import logo from "../../images/getlinked.png";
import fb from "../../images/Vector-1.png";
import twitter from "../../images/twitter.png";
import ig from "../../images/mdi_instagram.png";
import linkedin from "../../images/ri_linkedin-fill.png";
import locationIcon from "../../images/Vector-2.png";
import call from "../../images/call.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-parent">
      <section className="footer-container">
        <div className="left-footer-side">
          <img className="footer-star-white" src={topStar} alt="" />
          <div className="text-content-org">
            <div className="top-part">
              <Link to="/">
                <img src={logo} alt="" className="logo-image" />
              </Link>
              <p className="more-about-logo">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <p className="bottom-text">
              Terms of Use <span className="pipe">|</span> Privacy Policy
            </p>
          </div>
        </div>
        <div className="right-footer-side">
          <div className="right-footer-inner-first">
            <div className="links-pack">
              <p className="link-name">Useful Links </p>
              <p className="link-name">Overview </p>
              <p className="link-name">Timeline </p>
              <p className="link-name">FAQS </p>
              <Link to="/register" style={{ textDecoration: "none", position:"relative" }}>
                <p className="link-name">Register </p>
              </Link>
              <div className="follow-prompt">
                <p className="link-name">Follow us </p>
                <div className="icons">
                  <img className="logo-icon" src={ig} alt="" />
                  <img className="logo-icon" src={twitter} alt="" />
                  <img className="logo-icon" src={fb} alt="" />
                  <img className="logo-icon" src={linkedin} alt="" />
                </div>
              </div>
            </div>
            <img src={topStar} className="embedded-star" alt="" />
          </div>
          <div className="second-right-footer-inner-first">
            <div className="second-try">
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <p className="link-name">Contact Us </p>
              </Link>
              <div className="contact-deets">
                <img src={call} alt="" className="call-icon" />
                <p className="number">+234 6707653444 </p>
              </div>
              <div className="contact-deets">
                <img src={locationIcon} alt="" className="call-icon" />
                <div className="paragraph-pack">
                  <p className="street-name">27,Alara Street </p>
                  <p className="street-number">Yaba 100012 </p>
                  <p className="street-name">Lagos State </p>
                </div>
              </div>
            </div>
            <img src={topStar} className="embedded-second-star" alt="" />
          </div>
        </div>
      </section>
      <div className="bottom-footer-content">
        <img src={pinkStar} className="extra-pink" alt="" />
        <span className="copyright">All rights reserved. © getlinked Ltd.</span>
      </div>
    </div>
  );
};

export default Footer;
