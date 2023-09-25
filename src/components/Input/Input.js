import React, { useState } from "react";
import "./Input.scss";

const Input = (props) => {
  const [focused, setFocusd] = useState(false);

  const focusHandler = () => {
    setFocusd(true);
  };

  let element;
  switch (props.elementtype) {
    case "input":
      element = (
        <input
          focused={focused.toString()}
          onBlur={focusHandler}
          {...props}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          className={props.className}
        />
      );
      break;
    case "textarea":
      element = (
        <textarea
          focused={focused.toString()}
          onBlur={focusHandler}
          {...props}
          value={props.value}
          onChange={(e) => props.onChange(e)}
          cols="30"
          rows="10"
          className={props.className}
        />
      );
      break;

    default:
      break;
  }

  return (
    <>
      {element}
      <p className="error-message"></p>
    </>
  );
};

export default Input;
