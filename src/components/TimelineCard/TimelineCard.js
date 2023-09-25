import React from "react";
import "./TimelineCard.scss";

const TimelineCard = (props) => {
  return (
    <div className="timeline-card">
      <div className="no-tracker">
        <div className="line"></div>
        <div className="circle">{props.number}</div>
      </div>
      <div className="text">
        <h1 className="purple-text">{props.topHeading}</h1>
        <p className="white-text">{props.middleContent}</p>

        <h1 className="purple-text"> {props.bottomHeading}</h1>
      </div>
    </div>
  );
};

export default TimelineCard;
