import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import LogOrsign from "./components/Login-Signup/LogOrsign";
import Signup from "./components/Login-Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact";
import About from "./components/About/About"

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

          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/Home">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
