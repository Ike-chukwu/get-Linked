import React from "react";
import "./HeroSection.scss";
import line from "../../images/Vector 4.png";
import topStar from "../../images/star.png";
import rightStar from "../../images/star-1.png";
import bottomStar from "../../images/star-2.png";
import title from "../../images/Title.png";
import count from "../../images/Countdown time.png";
import Button from "../Button/Button";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import rightFlair from "../../images/Purple-Lens-Flare-PNG-right-side.png";
import metrix from "../../images/metrix 1.png";
import man from "../../images/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import space from "../../images/space-image.png";

const HeroSection = () => {
  return (
    <div className="hero-section-parent">
      <hr className="first-hr " />
      <section className="hero-section-container">
        <div className="top-text">
          <p className="little-advert">
            <em> Igniting a Revolution in HR Innovation</em>
          </p>
          <img src={line} className="line-vector" alt="" />
        </div>
        <div className="hero-section-inner">
          <div className="left-side">
            <img src={topStar} className="top-star" alt="" />
            <img src={rightStar} className="right-star" alt="" />
            <img src={bottomStar} className="bottom-star" alt="" />
            <img src={leftFlair} className="left-flair" alt="" />
            <div className="middle-content">
              <img src={title} className="title-tag" alt="" />
              <p className="brief">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Button>register</Button>
            </div>
            <img src={count} alt="" className="countdown" />
          </div>
          <div className="right-side">
            <img src={leftFlair} className="right-flair" alt="" />
            <img src={metrix} className="metrix" alt="" />
            <img src={man} className="man" alt="" />
            <img src={space} className="space" alt="" />
          </div>
        </div>
      </section>
      <hr className="second-hr"/>
    </div>
  );
};

export default HeroSection;
