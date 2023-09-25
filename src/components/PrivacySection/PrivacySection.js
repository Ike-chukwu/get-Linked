import React from "react";
import "./PrivacySection.scss";
import topStar from "../../images/star.png";
import pinkStar from "../../images/satagra.png";
import Button from "../Button/Button";
import padlock from "../../images/big-padlock.png";
import padlockTransparent from "../../images/vector-padlock.png";
import tick from "../../images/tick.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";

const PrivacySection = () => {
  return (
    <div className="policy-parent">
      <section className="policy-container">
        <div className="left-privacy">
          <img src={pinkStar} className="pink" alt="" />
          <div className="words">
            <img src={topStar} className="second-white-one" alt="" />
            <div className="top-part">
              <img src={pinkStar} className="pinkish" alt="" />
              <div className="inner-top-part">
                <p className="heading-text">
                  Privacy Policy and <br />
                  <span className="colored">Terms</span>
                </p>
                <p className="more-details">
                  Last updated on September 12, 2023
                </p>
                <p className="more-details-info">
                  Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant
                </p>
              </div>
              <div className="border-text">
                <p className="more-text-content">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <div className="licensing-policy-content">
                  <div className="licensing-policy-inner">
                    <h2 className="policy-heading">Licensing Policy</h2>
                    <p className="terms">
                      Here are terms of our Standard License:
                    </p>
                    <div className="ticked-section">
                      <img src={tick} className="tick" alt="" />
                      <p className="briefing-story">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </div>
                    <div className="ticked-section">
                      <img src={tick} className="tick" alt="" />
                      <p className="briefing-story">
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </p>
                    </div>
                    <div className="btn-container">
                      <Button>read more</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="leftish" src={leftFlair} alt="" />
        </div>
        <div className="right-privacy">
          <img src={topStar} className="third-white-one" alt="" />
          <img src={padlockTransparent} alt="" className="privacy-pic-second" />
          <img src={padlock} alt="" className="privacy-pic" />
        </div>
      </section>
    </div>
  );
};

export default PrivacySection;
