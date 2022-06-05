import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contwal">
      <Navbar />
      <div className="contact">
        <div className="aps">
          <div style={{ paddingTop: "30px" }}>
            <label className="contactla">Prénom</label>
            <input name="firstName" className="contactput" />
          </div>

          <div>
            <label className="contactla">Nom</label>
            <input className="contactput" id="lastName" name="lastName" />
          </div>

          <div>
            <label htmlFor="email" className="contactla">
              Email
            </label>
            <input className="contactput" name="email" id="lastName" />
          </div>
          <div>
            <label htmlFor="message" className="contactla">
              Message
            </label>
            <textarea name="message" id="message" />
          </div>

          <button className="contactbut">Envoyer</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
