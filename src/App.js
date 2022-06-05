import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LogOrsign from "./components/Login-Signup/LogOrsign";
import Signup from "./components/Login-Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Museepage from "./components/Museepage/Museepage";
import MuseeDetails from "./components/MuseeDetails/MuseeDetails";
import Hotelpage from "./components/Hotelpage/Hotelpage";
import HotelDetails from "./components/HotelDetails/HotelDetails";
import { hoteldata, voldata, museedata } from "./data";
import Volpage from "./components/Volpage/Volpage";
import VolDetails from "./components/VolDetails/VolDetails";
import Accueil from "./components/Accueil/Accueil";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/login">
            <LogOrsign />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        <Route path="/accueil">
          <Accueil   museedata={museedata} hoteldata={hoteldata} voldata={voldata}/>
        </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/Home">
            <Navbar />
          </Route>
          <Route exact path="/museesdetails/:id">
            <div>
              <MuseeDetails museedata={museedata} />
            </div>
          </Route>
          <Route exact path="/museespage">
            <Museepage museedata={museedata} />
          </Route>

          <Route exact path="/hotelspage">
            <Hotelpage hoteldata={hoteldata} />
          </Route>
          <Route exact path="/hotelsdetails/:id">
            <div>
              <HotelDetails hoteldata={hoteldata} />
            </div>
          </Route>

          <Route exact path="/volspage">
            <Volpage voldata={voldata} />
          </Route>
          <Route exact path="/volsdetails/:id">
            <div>
              <VolDetails voldata={voldata} />
            </div>
          </Route>
          <Route exact path='/cart'><Cart/></Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
