import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import "./style.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/sign_in" component={Login} />
          <Route path="/sign_up" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
