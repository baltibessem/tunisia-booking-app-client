import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="contwal">
      <Navbar />
      <div className="aps">
        <div style={{ paddingTop: "100px" }}>
          <label className="contactla">First Name*</label>
          <input name="firstName" placeholder="Edd" className="contactput" />
        </div>

        <div>
          <label className="contactla">Last Name*</label>
          <input
            className="contactput"
            id="lastName"
            name="lastName"
            placeholder="Burke"
          />
        </div>

        <div>
          <label htmlFor="email" className="contactla">
            Email*
          </label>
          <input
            className="contactput"
            name="email"
            id="lastName"
            placeholder="bluebill1049@hotmail.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="contactla">
            Message
          </label>
          <textarea name="message" id="message" />
        </div>

        <input
          type="submit"
          className="contactbut"
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
    </div>
  );
};

export default Contact;
