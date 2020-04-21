import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import NavMobile from "./components/NavMobile";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <NavMobile />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/prices" component={Prices} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
