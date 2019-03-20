import React, { Component } from 'react';
import MapContainer from '../components/Map';
import List from '../components/List';
import SearchBox from '../components/SearchBox';

import '../App.css'

import { connect } from 'react-redux';
import { setSearchField, requestVenues } from '../actions.js';


const mapStateToProps = (state) => {
  //we want to grab just the state information we are interested in for this component
  //we get this information from our reducer.js file
  return {
    searchField: state.searchVenues.searchField,
    venues: state.requestVenues.venues,
    isPending: state.requestVenues.isPending,
    error: state.requestVenues.error
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
    // onSearchChange = (event) => {
    // this.setState({ searchField: event.target.value })
    // } WORKS THE SAME AS THE FUNCTION ABOVE
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestVenues: () => dispatch(requestVenues())
  }
}

class App extends Component {


  componentDidMount() {
    this.props.onRequestVenues();
  }

  render() {
    const {searchField, onSearchChange, venues, isPending} = this.props;
    const filteredVenues = venues.filter(venue => {
      return venue.name.toLowerCase().includes(searchField.toLowerCase());
    })
  
    if (isPending) {
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
                searchChange={onSearchChange}
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

