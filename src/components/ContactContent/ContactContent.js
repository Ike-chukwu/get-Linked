import React, { useState } from "react";
import "./ContactContent.scss";
import topStar from "../../images/star.png";
import pinkStar from "../../images/satagra.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import fb from "../../images/Vector-1.png";
import twitter from "../../images/twitter.png";
import ig from "../../images/mdi_instagram.png";
import linkedin from "../../images/ri_linkedin-fill.png";
import Input from "../Input/Input";
import { useNavigate } from "react-router-dom";

const ContactContent = () => {
  const [contactDetails, setContactDetails] = useState({
    FirstName: "",
    Mail: "",
    Message: "",
    Number: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setErrorMessage] = useState();
  const navigate = useNavigate();
  const inputFields = [
    {
      id: 0,
      elementType: "input",
      type: "text",
      name: "FirstName",
      errorMessage: "Field cannot be empty",
      required: true,
      placeHolder: "Enter your name",
      pattern: "^(?!s*$).+",
    },
    {
      id: 1,
      elementType: "input",
      name: "Mail",
      type: "email",
      errorMessage: "Invalid format",
      required: true,
      placeHolder: "Enter your email",
    },
    {
      id: 2,
      elementType: "input",
      name: "Number",
      type: "text",
      errorMessage: "Invalid Format",
      pattern: "^[0-9]+$",
      required: true,
      placeHolder: "Enter your phone number",
    },
    {
      id: 3,
      elementType: "textarea",
      name: "Message",
      type: "text",
      errorMessage: "Field cannot be empty",
      pattern: "^(?!s*$).+",
      required: true,
      placeHolder: "Enter a message",
    },
  ];

  //functiion that runs when inputchange event is triggered
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: contactDetails.Mail,
      phone_number: contactDetails.Number,
      first_name: contactDetails.FirstName,
      message: contactDetails.Message,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error);
        setErrorMessage(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="contact-parent">
      <section className="contact-container">
        <div className="left-part">
          <img src={pinkStar} className="pinkish-star" alt="" />
          <img src={leftFlair} className="extreme-left" alt="" />

          <h1 className="contact-heading">Get in touch</h1>
          <div className="little-info">
            <p className="info-content">Contact</p>
            <p className="info-content">information</p>
          </div>
          <div className="little-info">
            <p className="info-content">27,Alara Stree</p>
            <p className="info-content">Yaba 100012</p>
            <p className="info-content">Lagos State</p>
          </div>
          <div className="little-info">
            <p className="info-content">Call Us : 07067981819</p>
          </div>
          <div className="little-info">
            <p className="info-content">we are open from Monday-Friday</p>
            <p className="info-content">08:00am - 05:00pm</p>
          </div>
          <div className="social-links">
            <p className="info-content">Share on</p>
            <div className="icons-pack-in-contact">
              <img className="logo-icon" src={ig} alt="" />
              <img className="logo-icon" src={twitter} alt="" />
              <img className="logo-icon" src={fb} alt="" />
              <img className="logo-icon" src={linkedin} alt="" />
            </div>
          </div>
        </div>

        <form className="right-form" onSubmit={submitForm}>
          <img src={topStar} className="faded-star" alt="" />
          <img src={topStar} className="whitish-star" alt="" />
          <img src={pinkStar} className="pinkish-star" alt="" />
          <img src={leftFlair} className="extreme-right" alt="" />
          <h2 className="form-title">
            Questions or need assistance?Let us know about it!
          </h2>
          <p className="mobile-detail">
            Email us below to any question related to our event
          </p>
          {inputFields.map((field) => {
            return (
              <Input
                key={field.name}
                elementtype={field.elementType}
                type={field.type}
                placeholder={field.placeHolder}
                errormessage={field.errorMessage}
                value={contactDetails[field.name]}
                required={field.required}
                onChange={inputChangeHandler}
                name={field.name}
                pattern={field.pattern}
                className="input-field"
              />
            );
          })}

          {error ? <p className="error-message">{error}!</p> : null}
          <div className="btn-container-second">
            <button className="btn-contact">submit</button>
          </div>

          <div className="social-links">
            <p className="info-content">Share on</p>
            <div className="icons-pack-in-contact">
              <img className="logo-icon" src={ig} alt="" />
              <img className="logo-icon" src={twitter} alt="" />
              <img className="logo-icon" src={fb} alt="" />
              <img className="logo-icon" src={linkedin} alt="" />
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactContent;
