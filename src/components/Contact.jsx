import React, { useEffect } from "react";
import "./contact.css";
import backBtnLight from "./icons/backArrow.svg";
import backBtnDark from "./icons/backArrowDark.svg";
import phone from "./icons/phone.svg";
import location from "./icons/location.svg";
import email from "./icons/email.svg";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate(null)
  const goBack = () => {
    navigate("/")
  };
  const thme = localStorage.getItem('theme')
  return (
    <>
      <div className="contact_header">
        {
          thme==='dark'? <img src={backBtnLight} onClick={goBack}
          className="project_btn"
          alt="Back Button"
        />:
        <img
        src={backBtnDark}
        onClick={goBack}
        className="project_btn"
        alt="Back Button"
        />
      }
        <h2 className="contact_title"> for more Information</h2>
      </div>
      <section className="contact_section">
        <div className="contact_container">
          <div className="contact_phone">
            <img src={phone} className="contact_container_phone" alt="phone Image" />
            <div className="contact_container_box">
            <div>
              Contact us 
            </div>
            <div className="locmailname">+91 7011100970</div>
            <div className="locmailname">+91 9311112977</div>
            </div>
          </div>
          <div className="contact_phone">
            <img src={email} className="contact_container_email" alt="email image" />
            <div className="contact_container_box">
            <div>Write us </div>
            <a target='_blank' href={`https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzDfqDBtNLWksTqBtBpbQvghRxFNXXxghzJFBSTLcNZZxNlwnrHGtRcwZWJHjsqmXthnsnB`} className="locmailname cotact_email"> dpdzines@gmail.com</a>
          </div>
            </div>
          <div className="contact_phone">
            <img
              src={location}
              className="contact_container_location"
              alt="location image"
            />
            <div className="contact_container_box">
              <div>visit Us</div>
              <a
                href="https://goo.gl/maps/xxaG7szeAp5ig3aD8"
                target="_blank"
                className="locmailname"
              >
                DP-dzines, Vashundra Ghaziabad
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
