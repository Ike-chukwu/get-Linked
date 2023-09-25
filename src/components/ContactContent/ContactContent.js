import React, { useState } from "react";
import "./ContactContent.scss";
import topStar from "../../images/star.png";
import rightStar from "../../images/star-1.png";
import pinkStar from "../../images/satagra.png";
import bottomStar from "../../images/star-2.png";
import leftFlair from "../../images/Purple-Lens-Flare-PNG-left-side.png";
import fb from "../../images/Vector-1.png";
import twitter from "../../images/twitter.png";
import ig from "../../images/mdi_instagram.png";
import linkedin from "../../images/ri_linkedin-fill.png";
import locationIcon from "../../images/Vector-2.png";
import Button from "../Button/Button";
import Input from "../Input/Input";

const ContactContent = () => {
  const [contactDetails, setContactDetails] = useState({
    FirstName: "",
    Mail: "",
    Message: "",
  });

  const inputFields = [
    {
      id: 0,
      elementType: "input",
      type: "text",
      name: "FirstName",
      errorMessage: "Field cannot be empty",
      required: true,
      placeHolder: "Enter your name",
      pattern:"^(?!\s*$).+"

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
      elementType: "textarea",
      name: "Message",
      type: "text",
      errorMessage: "Field cannot be empty",
      pattern:"^(?!\s*$).+",
      required: true,
      placeHolder: "Enter a message",
    },
  ];

  //functiion that runs when inputchange event is triggered
  const inputChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e.target);
    setContactDetails({
      ...contactDetails,
      [name]: value,
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

        <div className="right-form">
          <img src={topStar} className="faded-star" alt="" />
          <img src={topStar} className="whitish-star" alt="" />
          <img src={pinkStar} className="pinkish-star" alt="" />
          <img src={leftFlair} className="extreme-right" alt="" />
          <h2 className="form-title">
            Questions or need assistance?Let us know about it!
          </h2>
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
          {/* <input type="text" className="input-field" />
          <input type="text" className="input-field" />
          <textarea type="text" className="input-field" rows={50} /> */}
          <div className="btn-container-second">
            <Button>submit</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
