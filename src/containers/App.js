import React, { Component } from 'react';
import MapContainer from '../components/Map';
import List from '../components/List';
import SearchBox from '../components/SearchBox';
import '../App.css'

import { connect } from 'react-redux';
import { setSearchField } from '../actions.js';


const mapStateToProps = (state) => {
  //we want to grab just the state information we are interested in for this component
  //we get this information from our reducer.js file
  return {
    searchField: state.searchField
  }
}
//dispatch is what triggers the action (actions are the objects that we created)
//we need dispatch to send the action to our reducer
const mapDispatchToProps = (dispatch) => {
  //receives an event, it's the event from the search input when users type
  //this will update the searchfield part of our store/state via an action,
  //that sends the reducer the new user input and then updates the store
  //event.target.value is the text from the user input
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

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
      } ],

    searchField: ''
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }



  render() {
    const filteredVenues = this.state.venues.filter(venue => {
      return venue.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
  
    if (this.state.venues.length === 0) {
      return <h1>Loading</h1>
    } else {
        return (
        <div className="container">
          <h1 className='ba br3'>Best of Boise: Nom Nom Nom</h1>
          <div className="containerMap">
            <div className="map">
              <MapContainer 
                venues = {filteredVenues}
              />
            </div>
          </div>
          <div className="searchAndListContainer">
            <div className="searchBox">
              <SearchBox 
                searchChange={this.onSearchChange}
              />
            </div>
            <div className="list">
              <List 
                venues = {filteredVenues}
              />
            </div>
          </div>   
        </div>
      );
    }
    
  }
}

//connect is going to run, and it will return another function and then we will run
//App inside of that function

export default connect(mapStateToProps, mapDispatchToProps)(App)

