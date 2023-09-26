import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../images/getlinked.png";
import close from "../../images/close.png";
import menu from "../../images/menu.png";
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isNavbarActive, setNavBarActive] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={logo} className="logo" alt="" />
      </Link>
      <img
        src={menu}
        onClick={() => setNavBarActive(true)}
        alt=""
        className="menu"
      />

      <div className={isNavbarActive ? "far-right activated" : "far-right"}>
        <div className="links">
          <img
            src={close}
            onClick={() => setNavBarActive(false)}
            alt=""
            className="close"
          />
          <span className="link">timeline</span>
          <span className="link">Overview</span>
          <span className="link">FAQS</span>
          <Link
            to="/contact"
            style={{ textDecoration: "none", position:"relative" }}
            onClick={() => setNavBarActive(false)}
          >
            <span
              className={
                location.pathname == "/contact" ? "link current" : "link"
              }
            >
              contact
            </span>
          </Link>
        </div>
        <Link to="/register">
          <button
            onClick={() => setNavBarActive(false)}
            className={
              location.pathname == "/register" ? "nav-btn currently" : "nav-btn"
            }
          >
            register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
