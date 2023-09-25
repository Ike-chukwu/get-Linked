import React from "react";
import "./Partners.scss";
import sponsors from "../../images/sponsors.png";
import rightFlair from "../../images/Purple-Lens-Flare-PNG-right-side.png";
import pinkStar from "../../images/satagra.png";
import topStar from "../../images/star.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Partners = () => {
  return (
    <div className="partners-parent">
      <section className="partners-container">
        <div className="partners-head">
          <h1 className="partners-title">partners and sponsors</h1>
          <p className="supporting-text">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="sponsor-picture">
          <img src={pinkStar} className="first-pink-star" alt="" />
          <img src={pinkStar} className="second-pink-star" alt="" />
          <img src={topStar} className="only-white-star" alt="" />
          <img src={sponsors} className="sponsor-pic" alt="" />
          <img src={rightFlair} className="far-left-flair" alt="" />
          <img src={rightFlair} className="sec-flair" alt="" />
        </div>
      </section>
      <HorizontalLine />
    </div>
  );
};

export default Partners;
