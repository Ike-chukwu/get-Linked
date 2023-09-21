import React from "react";
import "./SubHeadingText.scss";

const SubHeadingText = (props) => {
  return (
    <>
      <p className="heading-text">
        {props.beforeBreak} <br />
        <span className="colored">{props.afterBreak}</span>
      </p>
      <p className="more-details">{props.moreText}</p>
    </>
  );
};

export default SubHeadingText;
