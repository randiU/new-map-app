import React, { Component } from 'react';
import Map from '../components/Map';
import List from '../components/List';



class App extends Component {
  render() {
    return (
      <div>
        <h1>Best of Boise: Nom Nom Nom</h1>
        < Map />
        < List />

      </div>
    );
  }
}

export default App;
