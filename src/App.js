import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { cartodb } from "./modules/carto";

class App extends Component {
  componentDidMount() {
    window.cartodb.createVis(
      "map",
      "http://documentation.carto.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json"
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} id="myImage" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Map-container" id="map" />
      </div>
    );
  }
}

export default App;
