import React from "react";
import "./Introduction.scss";
import bulb from "../../images/bulb.png";
import pinkStar from "../../images/satagra.png";
import arrow from "../../images/arrow.png";
import SubHeadingText from "../SubHeadingText/SubHeadingText";
import HorizontalLine from "../HorizontalLine/HorizontalLine";


const Introduction = () => {
  return (
    <div className="intro-parent">
      <section className="intro-container">
        <div className="left">
          <img src={pinkStar} className="first-pink-star" alt="" />
          <img src={bulb} className="bulb" alt="" />
          <img src={arrow} className="arrow" alt="" />
        </div>
        <div className="right">
          <div className="inner-right">
            <SubHeadingText
              beforeBreak="Introduction to getlinked"
              afterBreak="tech Hackathon 1.0"
              moreText="Our tech hackathon is a melting pot of visionaries, and its purpose is
        as clear as day: to shape the future. Whether you're a coding genius, a
        design maverick, or a concept wizard, you'll have the chance to
        transform your ideas into reality. Solving real-world problems, pushing
        the boundaries of technology, and creating solutions that can change the
        world, that's what we're all about!"
            />
          </div>
          <img src={pinkStar} className="second-pink-star" alt="" />
        </div>
      </section>
      <HorizontalLine/>
    </div>
  );
};

export default Introduction;
