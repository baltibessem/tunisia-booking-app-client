import React, { useEffect } from "react";
import "./Navbar.css";
import { useHistory } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useSelector } from "react-redux";
const Navbar = () => {
  const history = useHistory();
  const cartreducer = useSelector((state) => state.cartReducer);
  const { cartItems } = cartreducer;

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser,'hahi')
const token = localStorage.getItem("JWT");
console.log(token,'hahi')


  return (
    <header class="site-header site-header__header-one  ">
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div class="container clearfix" style={{ height: "0px" }}>
          <div class="logo-box">
            <a class="navbar-brand" href="/accueil">
              <img
                src={logo}
                
                  style={{color:"white",height:"30px",width:"40px"}}
                  alt="Awesome Image"
              />
            </a>
            <button class="menu-toggler" data-target=".main-navigation">
              <span class="fa fa-bars"></span>
            </button>
          </div>
          <div class="main-navigation">
            <ul class=" navigation-box @@extra_class">
              <li>
                <a href="/accueil">Accueil</a>
               
              </li>
              

              <li>
                <a href="/museespage">Musées</a>
               
              </li>

              <li>
                <a href="/hotelspage">Hotels</a>
             
              </li>
              <li>
                <a href="/volspage">Vols</a>
               
              </li>
              {!currentUser? (
              
              <li>
              <a href="/login"
              onClick={() => {
                            history.push("/login");
                          
                        }}>Se  Connecter</a>
             
            </li>)
              :(  <li>
                 <a href="/">Connecté par : {currentUser.username.toUpperCase()}</a>
               
              </li>)
            }

            <li>
                <a href="/cart"><i class="fas fa-shopping-cart"></i>{cartItems.length}</a>
              </li>
            <li>
              <a href="/login"
              onClick={() => {
                          if (currentUser) {
                            localStorage.removeItem("currentUser");
                            history.push("/login");
                          }
                        }}>Se  Déconnecter</a>
            </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
