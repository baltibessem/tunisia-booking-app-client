import './App.css';
import Homepage from "./components/Homepage/Homepage"
import LogOrsign from "./components/Login-Signup/LogOrsign"
import Signup from "./components/Login-Signup/Signup"
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Museepage from './components/Museepage/Museepage';




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
          <Route exact path="/museepage">
            <Museepage/>
          </Route>
          <Route path="/register"><Signup /></Route>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
