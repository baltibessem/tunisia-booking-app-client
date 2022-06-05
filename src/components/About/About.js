
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import "./About.css"


const About = () => {
  return (
    <div>
      <Navbar />
      <div className="sec1" style={{marginTop:"5%"}}>
        <div className="sec3">
          <h3>À propos </h3>
          <p>
            Tunisie musée est une plateforme en ligne pour les musées nationals
            basés sur tout le territoire tunisien qui permet la facilité de
            l'inscription , l'authentification et la réservation des tickets d'accès
            au musée destiné.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About