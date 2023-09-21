import React from "react";
import "./JudgingCriteria.scss";
import faq from "../../images/faq.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import Button from "../Button/Button";
import pinkStar from "../../images/satagra.png";
import bottomStar from "../../images/star-2.png";
import topStar from "../../images/star.png";
import HorizontalLine from "../HorizontalLine/HorizontalLine";

const JudgingCriteria = () => {
  return (
    <div className="judge-parent">
      <section className="judge-container">
        <div className="left-section">
          <img src={faq} className="faq-picture" alt="" />
          <img src={leftFlair} className="left-purple-flair" alt="" />
          <img src={pinkStar} className="p-star" alt="" />
          <img src={bottomStar} className="faded-star" alt="" />
          <img src={topStar} className="sharp-star" alt="" />
        </div>
        <div className="criteria">
          <div className="criteria-top-content">
            <p className="criteria-heading-text">
              judging criteria
              <br />
              <span className="colored">Key attributes</span>
            </p>
          </div>
          <div className="more-details">
            <span className="colored">Innovation and Creativity:</span>
            <span className="more-text">
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </span>
          </div>
          <div className="more-details">
            <span className="colored">Functionality:</span>
            <span className="more-text">
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </span>
          </div>
          <div className="more-details">
            <span className="colored">Impact and Relevance:</span>
            <span className="more-text">
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </span>
          </div>
          <div className="more-details">
            <span className="colored">Technical Complexity: </span>
            <span className="more-text">
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </span>
          </div>
          <div className="more-details">
            <span className="colored">Adherence to Hackathon Rules: </span>
            <span className="more-text">
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </span>
          </div>
          <Button>read more</Button>
          <img src={leftFlair} className="right-purple-flair" alt="" />
        </div>
      </section>
      <HorizontalLine/>
    </div>
  );
};

export default JudgingCriteria;
