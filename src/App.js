import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LogOrsign from "./components/Login-Signup/LogOrsign";
import Signup from "./components/Login-Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Museepage from "./components/Museepage/Museepage";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import col1 from "./assets/col1.png";
import col2 from "./assets/col2.jpg";
import col3 from "./assets/col3.jpg";
import { useState } from "react";
import MuseeDetails from "./components/MuseeDetails/MuseeDetails";

function App() {
  const [museedata, setMuseedata] = useState([
    {
      id: 1,
      nom: "Musée De Carthage ",
      region: "Tunis",
      images: [img1],
      description:
        "Le musée national de Carthage (arabe : المتحف الوطني بقرطاج) est un musée archéologique situé sur la colline de Byrsa au cœur de la ville de Carthage en Tunisie. C'est l'un des deux principaux musées archéologiques de Tunisie avec le musée national du Bardo.",
      adresse: "Carthage , Tunis",
      collections:[{
        imagesCollection:col2,
        descriptionCollection:"Céramiques découvertes dans les nécropoles puniques.",
      }],
      prix:15,
    
    },
    {
      id: 2,
      nom: "Musée De Bardo ",
      region: "Bardo",
      images: [img2],
      description:
        "Le musée national de Carthage (arabe : المتحف الوطني بقرطاج) est un musée archéologique situé sur la colline de Byrsa au cœur de la ville de Carthage en Tunisie. C'est l'un des deux principaux musées archéologiques de Tunisie avec le musée national du Bardo.",
      adresse: "Bardo , Tunis",
      collections:[{
        imagesCollection:col2,
        descriptionCollection:"Céramiques découvertes dans les nécropoles puniques.",
      }],
      prix:14
    },
    {
      id: 3,
      nom: "Musée De Djerba ",
      region: "Bardo",
      images: [img3],
      description:
        "Le musée national de Carthage (arabe : المتحف الوطني بقرطاج) est un musée archéologique situé sur la colline de Byrsa au cœur de la ville de Carthage en Tunisie. C'est l'un des deux principaux musées archéologiques de Tunisie avec le musée national du Bardo.",
      adresse: "Bardo , Tunis",
      collections:[{
        imagesCollection:col2,
        descriptionCollection:"Céramiques découvertes dans les nécropoles puniques.",
      }],
      prix:17,
    },
  ]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LogOrsign />
          </Route>
          <Route exact path="/details/:id">
            <div>
              <MuseeDetails museedata={museedata} />
            </div>
          </Route>
          <Route exact path="/museepage">
            <Museepage museedata={museedata} />
          </Route>

          <Route exact path="/register">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
