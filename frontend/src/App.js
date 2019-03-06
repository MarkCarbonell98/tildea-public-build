// third party librarys
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Tutorial from "./pages/Tutorial"

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/game1/:id" component={Game1} />
            <Route path="/game2/:id" component={Game2} />
            <Route path="/tutorial/" component={Tutorial} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
