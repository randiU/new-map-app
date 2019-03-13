import React, { Component } from 'react';
import MapContainer from '../components/Map';
import List from '../components/List';
import '../App.css'





class App extends Component {

  state = {
    venues: [
      { name: "Alia's Coffee House",
        lat: 43.61649176843242,
        lng: -116.2049893438631 
      },
      { name: "Dk Donuts",
        lat: 43.62186775479125,
        lng: -116.20658782073909
      },
      { name: "Guru Donuts",
        lat: 43.616097384118554,
        lng: -116.20143784746583
      } ]
  }
  render() {
    return (
      <div className="container">
        <h1 className='ba br3'>Best of Boise: Nom Nom Nom</h1>
        <div className="map">
          < MapContainer 
            venues = {this.state.venues}
          />
        </div>
        <div className="list">
          < List 
            venues = {this.state.venues}
          />
        </div>
        <div>
          <p>hi</p>
        </div>
      </div>
    );
  }
}

export default App;

