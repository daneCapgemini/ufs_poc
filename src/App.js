import React, { Component } from 'react';
import Styled from 'styled-components';
import './App.css';

const Map = Styled.div`
  width: 100%;
  height: 100vh;
`;

class App extends Component {
  componentDidMount() {
    const options = {
      // center: [40.4, -3.6833], // Madrid\
      zoom: 7,
      // title: true,
      layer_selector: true
      // force_mobile: true
      // scrollwheel: true
    };

    window.cartodb.createVis(
      'map',
      'https://capgemini-uk.carto.com/u/simonconway1979/api/v2/viz/4da691fa-8fbb-4e84-8dc3-dc10826476c7/viz.json',
      options
    );

    // const vis = window.cartodb.Vis();
    // vis.addOverlay(options);
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
