import React, { useState } from "react";
import * as signupFunc from "./SignupFunctions";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
import "./signup.css";
import {useHistory} from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css";



export default function Signup() {
  let [newUser, setnewUser] = useState({});
  const handleChangeEvent = (e, field) => {
    let fieldValue = e.target.value;
    setnewUser({ ...newUser, [field]: fieldValue });
    // if (field === 'email') {
    //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (fieldValue.match(mailformat)) {
    //         setnewUser({ ...newUser, [field]: fieldValue })
    //         return true
    //     } else {
    //         alert("You have entered an invalid email address!");
    //         return false
    //     }
    // } else if (field === 'password') {
      //     var passwordFormat = /^[A-Za-z]\w{7,14}$/;
    //     if (fieldValue.match(passwordFormat)) {
    //         setnewUser({ ...newUser, [field]: fieldValue })
    //         return true
    //     }else{
      //         alert("Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter]")
      //     }
  };

  let history = useHistory();
  // sign in
  const getToSignIn = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  // submiting data to backend
  const submitData = (e) => {
    e.preventDefault();
    signupFunc.registerUser(newUser).then((response) => response.data);
    console.log(newUser);
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="flex-container">
        <div className="row full">
          <div className="col-md-12">
            <div className="form-container">
              <div className="form-container-in"> </div>{" "}
              <div className="row sgnUp ">
                <div className="col-md-6 right-divider pdding">
                  <h3 className="lead-text mn-txt"> Join Us with Social </h3>
                  <div className="icon-soc-fb">
                    <FaFacebookF />
                  </div>{" "}
                  <div className="icon-soc-tw">
                    <FaTwitterSquare />
                  </div>{" "}
                </div>{" "}
                <div className="left-divider">
                  <div className="col-md-6">
                    <form
                      onSubmit={(e) => submitData(e)}
                      style={{ width: "200px", height: "500px" }}
                    >
                      <div className="form-group2">
                        <label htmlFor="name"> Nom: </label>{" "}
                        <input
                          id="nom"
                          type="text"
                          className="form-control sgnUp"
                          onChange={(e) => handleChangeEvent(e, "nom")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="mob-number"> Prénom.: </label>{" "}
                        <input
                          required
                          id="prenom"
                          type="text"
                          className="form-control sgnUp"
                          onChange={(e) => handleChangeEvent(e, "prenom")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="email"> Email: </label>{" "}
                        <input
                          required
                          id="email"
                          type="email"
                          className="form-control sgnUp"
                          onChange={(e) => handleChangeEvent(e, "email")}
                        />{" "}
                      </div>{" "}
                      <div class="form-group2">
                        <label htmlFor="password" > Créer un mot de passe: </label>{" "}
                        <input
                          required
                          id="password"
                          type="password"
                          className="form-control sgnUp"
                          onChange={(e) => handleChangeEvent(e, "password")}
                        />{" "}
                      </div>{" "}
                      {/* <div class="form-group2">
                        <label htmlFor="password"> Confirmer le mot de passe: </label>{" "}
                        <input
                          required
                          id="password"
                          type="password"
                          className="form-control sgnUp"
                          onChange={(e) => handleChangeEvent(e, "password")}
                        />{" "}
                      </div>{" "} */}
                      <div class="form-group2">
                        <input
                          required
                          type="submit"
                          value="submit"
                          className="btn-primary btnn form-submit sub-btn sgnUp"
                        />
                      </div>{" "}
                      <div>
                        <small className="form-text text-muted link-text">
                          Already a User ?
                        </small>{" "}
                        <span className="signuptext">
                          <a href="/#" onClick={(e) => getToSignIn(e)}>
                            Sign - In{" "}
                          </a>{" "}
                        </span>{" "}
                      </div>{" "}
                    </form>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
