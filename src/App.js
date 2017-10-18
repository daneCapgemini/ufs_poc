import React, { Component } from "react";
import Styled from "styled-components";
import "./App.css";

const Map = Styled.div`
  width: 100%;
  height: 100vh;
`;

class App extends Component {
  componentDidMount() {
    let options = {
      center: [40.4, -3.6833], // Madrid\
      zoom: 7,
      //title: true,
      layer_selector: true,
      force_mobile: true
      //scrollwheel: true
    };

    window.cartodb.createVis(
      "map",
      "http://documentation.carto.com/api/v2/viz/2b13c956-e7c1-11e2-806b-5404a6a683d5/viz.json",
      options
    );

    debugger;
    //const vis = window.cartodb.Vis();
    //vis.addOverlay(options);
  }

  render() {
    return (
      <div className="App">
        <Map id="map" />
      </div>
    );
  }
}

export default App;
