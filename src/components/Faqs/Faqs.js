import React from "react";
import pinkStar from "../../images/satagra.png";
import SubHeadingText from "../SubHeadingText/SubHeadingText";
import plus from "../../images/plus.png";
import thinking from "../../images/thinking.png";
import "./Faqs.scss";

const Faqs = () => {
  return (
    <div className="faqs-parent">
      <section className="faqs-container">
        <div className="questions">
          <img src={pinkStar} className="next-pink" alt="" />
          <p className="heading-text">
            Frequently Ask <br />
            <span className="colored">Questions</span>
          </p>
          <p className="more-details">
            We got answers to the questions that you might <br /> want to ask
            about
            <span className="white"> getlinked Hackathon 1.0</span>
          </p>

          <div className="question-pack">
            <div className="question">
              <p className="q-one">
                Can I work on a project I started before the hackathon?
              </p>
              <p className="plus">+</p>
            </div>
            <div className="question">
              <p className="q-one">
                What happens if I need help during the hackathon?{" "}
              </p>
              <p className="plus">+</p>
            </div>
            <div className="question">
              <p className="q-one">
                What happens if I don't have an idea for a project?{" "}
              </p>
              <p className="plus">+</p>
            </div>
            <div className="question">
              <p className="q-one">
                Can I join a team or do I have to come with one?{" "}
              </p>
              <p className="plus">+</p>
            </div>
            <div className="question">
              <p className="q-one">What happens after the hackathon ends </p>
              <p className="plus">+</p>
            </div>
            <div className="question">
              <p className="q-one">
                Can I work on a project I started before the hackathon?{" "}
              </p>
              <p className="plus">+</p>
            </div>
          </div>
        </div>
        <div className="question-picture">
          <img src={thinking} alt="" />
        </div>
      </section>
      <hr className="second-hr" />
    </div>
  );
};

export default Faqs;
