import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Auth from './auth'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, false)} />
          <Route exact path="/sign_in" component={Auth(LoginPage, false)} />
          <Route exact path="/sign_up" component={Auth(RegisterPage, false)} />
          <Route exact path="/home" component={Auth(HomePage, true)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
