import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Menu1 from './routes/Menu1';
import Menu2 from './routes/Menu2';
import Profile from './routes/Profile';

import "./style.css"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/menu1" component={Menu1} />
          <Route path="/menu2" component={Menu2} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
