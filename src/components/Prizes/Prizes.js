import React from "react";
import "./Prizes.scss";
import trophy from "../../images/trophy.png";
import topStar from "../../images/star.png";
import rightStar from "../../images/star-1.png";
import bottomStar from "../../images/star-2.png";
import rightFlair from "../../images/Purple-Lens-Flare-PNG-right-side.png";
import pinkStar from "../../images/satagra.png";
import bronze from "../../images/bronze_medal-1.png";
import gold from "../../images/gold_medal-1.png";
import silver from "../../images/silver_medal-1.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";


const Prizes = () => {
  return (
    <div className="prizes-parent">
      <div className="awards-briefing">
        <h1 className="heading-prize">
          Prizes and <br />
          <span className="colored-aspect">Rewards</span>
        </h1>
        <p className="highlight">
          Highlight of the prizes or rewards for winners and <br /> for
          participants.
        </p>
      </div>
      <section className="prizes-container">
        <div className="left-focus">
          <img src={pinkStar} className="pink-first-star" alt="" />
          <img src={topStar} className="white-first-star" alt="" />
          <img src={trophy} className="trophy" alt="" />
          <img className="left-side-flair" src={rightFlair} alt="" />
        </div>
        <div className="right-focus">
          <img src={topStar} className="white-1-star" alt="" />
          <img src={topStar} className="high-star" alt="" />
          <img src={topStar} className="low-star" alt="" />

          <img className="right-side-flair" src={rightFlair} alt="" />

          <div className="awards-briefing-two">
            <h1 className="heading-prize">
              Prizes and <br />
              <span className="colored-aspect">Rewards</span>
            </h1>
            <p className="highlight">
              Highlight of the prizes or rewards for winners and <br /> for
              participants.
            </p>
          </div>
          <div className="card-pack">
            <div className="award-card">
              <img className="silver" src={silver} alt="" />
              <div className="sport-content">
                <h2 className="position">2nd</h2>
                <span className="role">runner</span>
              </div>
              <h1 className="money">N300,000</h1>
            </div>
            <div className="award-card">
              <img className="gold" src={gold} alt="" />
              <div className="sport-content">
                <h2 className="position">1st</h2>
                <span className="role">runner</span>
              </div>
              <h1 className="money">N400,000</h1>
            </div>
            <div className="award-card">
              <img className="silver" src={bronze} alt="" />
              <div className="sport-content">
                <h2 className="position">3rd</h2>
                <span className="role">runner</span>
              </div>
              <h1 className="money">N150,000</h1>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Prizes;
