import React, { useState } from "react";
import "./logOrsign.css";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
<<<<<<< HEAD
import {useHistory } from "react-router-dom"
import axios from "axios";
import { login } from "../../utlis/index";




export default function LogOrsign({ history }) {
  const [loginData, setLoginData] = useState({});
  
  history= useHistory();
=======
import { useHistory } from "react-router-dom";
import axios from "axios";
import { login } from "../../utlis/index";

export default function LogOrsign({ history }) {
  const [loginData, setLoginData] = useState({});

  history = useHistory();
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a

  const getToSignUp = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  const handleChange = (e) => {
<<<<<<< HEAD
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
=======
    console.log([e.target.name], ":", e.target.value);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault()
    axios
      .post("http://localhost:5000/api/users/login", loginData)
      .then((response) => {
        login(response.data.token);
        alert("CONNECTÉ AVEC SUCCÈS  ");
        history.push("/");
      })
      .catch((err) => alert(err.response.data.msg));
  };
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
  return (
    <div className="container1">
      <section className="myform-area">
        <div className="container1">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>Connexion</h2>
<<<<<<< HEAD
                  <p>vous choisissez la bonne option</p>
=======
                  <p>Choisissez la bonne option</p>
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
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
<<<<<<< HEAD
                  <h2>Entrez les informations d'identification</h2>
=======
                  <h2>S'IDENTIFIER</h2>
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
                  <form>
                    <div className="form-group">
                      <input
                        className="loginInfo"
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                      />
<<<<<<< HEAD
                      <label>Email-Id</label>
=======
                      <label>Email</label>
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
                    </div>
                    <div className="form-group">
                      <input
                        className="loginInfo"
                        type="password"
                        name="motdepasse"
                        required
                        onChange={handleChange}
                      />
<<<<<<< HEAD
                      <label>password</label>
=======
                      <label>Mot de passe</label>
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
                    </div>
                    <div className="myform-button">
                      <button
                        type="button"
                        className="myform-btn"
                        onClick={() => handleSubmit()}
                      >
<<<<<<< HEAD
                        Login
=======
                        Continuer
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
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
<<<<<<< HEAD
                        <small className="form-text text-muted signup-text">
                          Créer un compte
                        </small>
=======
                        {/* <small className="form-text text-muted signup-text">
                          Créer un compte
                        </small> */}
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
                      </div>
                      <span className="signUPtext">
                        <a
                          href="/#"
                          onClick={(e) => getToSignUp(e)}
                          style={{ color: "#007bff" }}
                        >
<<<<<<< HEAD
                          Sign-Up
=======
                          S'inscrire
>>>>>>> ea1929e3440e10343e0d475f1653bb92a245589a
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
