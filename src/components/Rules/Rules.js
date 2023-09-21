import React from "react";
import "./Rules.scss";
import SubHeadingText from "../SubHeadingText/SubHeadingText";
import bottomStar from "../../images/star-2.png";
import topStar from "../../images/star.png";
import woman from "../../images/woman.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const Rules = () => {
  return (
    <div className="rules-parent">
      <section className="rules-container">
        <div className="left-side">
          <img src={leftFlair} className="l-flair" alt="" />
          <img src={bottomStar} className="t-star" alt="" />
          <SubHeadingText
            beforeBreak="Rules and"
            afterBreak="Guidelines"
            moreText="Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!"
          />
          <img src={topStar} className="b-star" alt="" />
        </div>
        <div className="right-side">
          <img src={woman} className="woman" alt="" />
          <img src={leftFlair} className="r-flair" alt="" />
        </div>
      </section>
      <HorizontalLine />
    </div>
  );
};

export default Rules;
