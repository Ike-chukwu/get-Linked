import React from "react";
import "./Navbar.scss";
import logo from "../../images/getlinked.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="logo" alt="" />

      <div className="far-right">
        <div className="links">
          <span className="link">timeline</span>
          <span className="link">overview</span>
          <span className="link">FAQS</span>
          <span className="link">contact</span>
        </div>
        <Button>register</Button>
      </div>
    </nav>
  );
};

export default Navbar;
