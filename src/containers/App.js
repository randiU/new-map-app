import React, { Component } from 'react';
import MapContainer from '../components/Map';
import List from '../components/List';



class App extends Component {
  render() {
    return (
      <div>
        <h1>Best of Boise: Nom Nom Nom</h1>
        < MapContainer />
        < List />
      </div>
    );
  }
}

export default App;
