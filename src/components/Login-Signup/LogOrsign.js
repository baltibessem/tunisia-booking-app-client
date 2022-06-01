import React, { useState } from "react";
import "./logOrsign.css";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import {useHistory } from "react-router-dom"
import axios from "axios";
import { login } from "../../utlis/index";




export default function LogOrsign({ history }) {
  const [loginData, setLoginData] = useState({});
  
  history= useHistory();

  const getToSignUp = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const handleChange = (e) => {
    console.log([e.target.name],":", e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };


const handleSubmit = (e) => {
  // e.preventDefault()
  axios
    .post("http://localhost:5000/api/users/login", loginData)
    .then((response) => {
      login(response.data.token);
      alert("CONNECTÉ AVEC SUCCÈS  ");
      history.push("/Home");
    })
    .catch((err) => alert(err.response.data.msg));

    
};
  return (
    <div className="container1">
      <section className="myform-area">
        <div className="container1">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>Connexion</h2>
                  <p>vous choisissez la bonne option</p>
                  <ul>
                    <li>
                      <a href="/#" className="facebook">
                        <FaFacebookF />
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="/#" className="twitter">
                        <FaTwitterSquare />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="form-input">
                  <h2>Entrez les informations d'identification</h2>
                  <form>
                    <div className="form-group">
                      <input
                        className="loginInfo"
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                      />
                      <label>Email-Id</label>
                    </div>
                    <div className="form-group">
                      <input
                        className="loginInfo"
                        type="password"
                        name="motdepasse"
                        required
                        onChange={handleChange}
                      />
                      <label>password</label>
                    </div>
                    <div className="myform-button">
                      <button
                        type="button"
                        className="myform-btn"
                        onClick={() => handleSubmit()}
                      >
                        Login
                      </button>
                    </div>
                    <div className="mlewi">
                      <div
                        style={{
                          width: "200px",
                          paddingTop: "25px",
                          paddingLeft: "80px",
                        }}
                      >
                        <small className="form-text text-muted signup-text">
                          Créer un compte
                        </small>
                      </div>
                      <span className="signUPtext">
                        <a
                          href="/#"
                          onClick={(e) => getToSignUp(e)}
                          style={{ color: "#007bff" }}
                        >
                          Sign-Up
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
