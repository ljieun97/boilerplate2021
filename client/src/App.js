import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './routes/LandingPage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import "./style.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sign_in" component={LoginPage} />
          <Route exact path="/sign_up" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
