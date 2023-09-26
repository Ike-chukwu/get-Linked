import React, { useEffect, useRef } from "react";
import "./RegisterContent.scss";
import topStar from "../../images/star.png";
import rightStar from "../../images/star-1.png";
import pinkStar from "../../images/satagra.png";
import bottomStar from "../../images/star-2.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import sittingMan from "../../images/sittin-man.png";
import congrats from "../../images/congrats.png";
import woman from "../../images/walk.png";
import man from "../../images/man-walk.png";
import Button from "../Button/Button";
import { useState } from "react";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const RegisterContent = () => {
  const [registrationDetails, setRegistrationDetails] = useState({
    teamsName: "",
    number: "",
    email: "",
    projectTopic: "",
    category: 1,
    size: 5,
    checkBoxState: false,
  });
  const [categories, setCategories] = useState();
  const [sizes, setSizes] = useState([5, 10, 20]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [pdLoading, setPostDataLoading] = useState(true);
  const [pdErrorState, setPostDataErrorState] = useState();

  // refs for dropdowns
  const sizeRef = useRef();
  const categoryRef = useRef();

  const firstRowOfInputs = [
    {
      id: 0,
      elementType: "input",
      type: "text",
      name: "teamsName",
      errorMessage: "Field cannot be empty",
      required: true,
      placeHolder: "Enter the name of your group",
      pattern: "^(?!s*$).+",
      labelName: "Team’s Name",
    },
    {
      id: 1,
      elementType: "input",
      name: "number",
      type: "text",
      errorMessage: "Invalid format",
      required: true,
      placeHolder: "Enter your phone number",
      pattern: "^[0-9]+$",
      labelName: "Phone",
    },
  ];

  const secondRowOfInputs = [
    {
      id: 2,
      elementType: "input",
      type: "email",
      name: "email",
      errorMessage: "Invalid Email",
      required: true,
      placeHolder: "Enter your email address",
      labelName: "Email",
    },
    {
      id: 3,
      elementType: "input",
      name: "projectTopic",
      type: "text",
      errorMessage: "Field cannot be empty",
      required: true,
      placeHolder: "What is your group project topic",
      pattern: "^(?!s*$).+",
      labelName: "Project Topic",
    },
  ];

  //functiion that runs when inputchange event is triggered
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistrationDetails({
      ...registrationDetails,
      [name]: value,
    });
  };

  //function that runs when the select dropdown is clicked
  const firstSelectHandler = (e) => {
    const value = e.target.value;
    const categoryID = categories.find((cat) => cat.name == value).id;
    setRegistrationDetails({
      ...registrationDetails,
      category: categoryID,
    });
  };

  //function that runs when the select dropdown is clicked
  const secondSelectHandler = (e) => {
    const value = e.target.value;
    setRegistrationDetails({
      ...registrationDetails,
      size: value,
    });
  };

  //function that is triggeed when the checkbox is changed
  const handleCheckboxChange = (event) => {
    setRegistrationDetails({
      ...registrationDetails,
      checkBoxState: event.target.checked,
    });
  };

  //function that is triggered when the submit button is clicked
  const submitForm = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: registrationDetails.email,
      phone_number: registrationDetails.number,
      team_name: registrationDetails.teamsName,
      group_size: registrationDetails.size,
      project_topic: registrationDetails.projectTopic,
      category: registrationDetails.category,
      privacy_poclicy_accepted: registrationDetails.checkBoxState,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      " https://backend.getlinked.ai/hackathon/registration",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setPostDataLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setPostDataLoading(false);
        setPostDataErrorState(error.message);
      });
  };

  //function that fetches categories from the api
  const fetchCategories = async () => {
    try {
      const data = await fetch(
        " https://backend.getlinked.ai/hackathon/categories-list"
      );
      if (!data.ok) {
        throw "Api request failed";
      }
      const result = await data.json();
      setCategories(result);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error occured</div>;
  return (
    <div className="register-parent">
      {!pdLoading && !pdErrorState && (
        <Link to="/">
          <img src={congrats} alt="" className="congrats" />
        </Link>
      )}
      <section
        className={
          !pdLoading && !pdErrorState
            ? "register-container disappear"
            : "register-container"
        }
      >
        <h1 className="registration-heading-text-one">register</h1>
        <div className="register-left-hand">
          <img src={topStar} className="faded-white-register" alt="" />
          <img src={pinkStar} className="first-pink-regoister" alt="" />
          <img src={pinkStar} className="second-pink-register" alt="" />
          <img src={leftFlair} className="left-flair-register" alt="" />
          <img src={sittingMan} className="main-img" alt="" />
        </div>
        <form className="right-reg-form" onSubmit={submitForm}>
          <img
            src={topStar}
            className="faded-white-registeration-form"
            alt=""
          />
          <img src={topStar} className="white-star-registeration-form" alt="" />
          <img
            src={leftFlair}
            className="right-flair-registeration-form"
            alt=""
          />
          <h1 className="registration-heading-text">register</h1>
          <div className="reg-form-content">
            <div className="little-text-container">
              <span className="span-little-text">
                Be part of this movement!
              </span>
              <div className="img-pack">
                <img src={woman} className="m-img" alt="" />
                <img src={man} className="m-img" alt="" />
              </div>
            </div>
            <h2 className="reg-sub-heading">create your account</h2>
            <div className="input-collection">
              {firstRowOfInputs.map((input) => {
                return (
                  <div className="input-detail" key={input.name + "lsmkldkds"}>
                    <label htmlFor="">{input.labelName}</label>
                    <Input
                      key={input.name + "lsmkldkds"}
                      elementtype={input.elementType}
                      type={input.type}
                      placeholder={input.placeHolder}
                      errormessage={input.errorMessage}
                      value={registrationDetails[input.name]}
                      required={input.required}
                      onChange={inputChangeHandler}
                      name={input.name}
                      pattern={input.pattern}
                      className="reg-input"
                    />
                  </div>
                );
              })}
            </div>
            <div className="input-collection">
              {secondRowOfInputs.map((input) => {
                return (
                  <div className="input-detail" key={input.name}>
                    <label htmlFor="">{input.labelName}</label>
                    <Input
                      key={input.name}
                      elementtype={input.elementType}
                      type={input.type}
                      placeholder={input.placeHolder}
                      errormessage={input.errorMessage}
                      value={registrationDetails[input.name]}
                      required={input.required}
                      onChange={inputChangeHandler}
                      name={input.name}
                      pattern={input.pattern}
                      className="reg-input"
                    />
                  </div>
                );
              })}
            </div>
            <div className="input-collection">
              <div className="input-detail">
                <label htmlFor="">Category</label>
                <select
                  className="input-select"
                  ref={sizeRef}
                  onChange={(e) => firstSelectHandler(e)}
                >
                  {categories?.map((category) => (
                    <option
                      key={category.id}
                      value={category.name}
                      style={{ color: "white", background: "#1C162F" }}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>{" "}
              </div>
              <div className="input-detail">
                <label htmlFor="">Group Size</label>
                <select
                  className="input-select"
                  ref={categoryRef}
                  onChange={(e) => secondSelectHandler(e)}
                >
                  {sizes.map((size) => (
                    <option
                      style={{ color: "white", background: "#1C162F" }}
                      key={size}
                      value={size}
                    >
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <p className="instruction">
              Please review your registration details before submitting
            </p>
            <div className="confirm-instruction">
              <input
                type="checkbox"
                className="checkbox"
                checked={registrationDetails.checkBoxState}
                onChange={handleCheckboxChange}
                style={{ position: "relative", cursor: "ponter" }}
              />
              <p className="confirm-text">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <button
              className={
                registrationDetails.checkBoxState ? "btn-reg click" : "btn-reg"
              }
            >
              register now
            </button>
            {pdErrorState ? <p className="error">{pdErrorState}</p> : null}
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterContent;
