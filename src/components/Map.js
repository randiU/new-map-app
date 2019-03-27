import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import { connect } from 'react-redux';
import { venueClick } from '../actions.js';


const mapStateToProps = (state) => {
	return {
		showingInfoWindow: state.onVenueClick.showingInfoWindow,
    	activeVenue: state.onVenueClick.activeVenue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		venueClick: (venueItem) => dispatch(venueClick(venueItem))
	}
}

//styles for the map container - flexible
const mapStyles = {
  width: '50%',
  height: '400px',
  margin: '0'
};

//you can pass this into the GoogleApiWrapper and it will show up if there is a delay in loading the map
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

//we imported Map from the google-maps-react library we added
export class MapContainer extends Component {
	showAlert(){
    	alert('Im an alert!');
  	}

  	onMarkerClick = (item) => {
  		console.log(item);
  	}
	
	render() {
		const {showingInfoWindow, venueClick, activeVenue} = this.props;
		const venues = this.props.venues;
		{console.log(venues)}
		return (
			<Map google={this.props.google}
			    style={mapStyles}
            	initialCenter={{
             		lat: 43.6169361,
             		lng: -116.2053802
            		}}
			    zoom={14}>
			  {venues.map(indVenue => (
			  	<Marker 
			  		//we'll call the venueClick action that updates the current venue in state to the 
			  		//marker we click on
			  		onClick={() => {venueClick(indVenue)}}
			  		name={indVenue.name}
			  		position={{lat: indVenue.location.lat, lng: indVenue.location.lng }}
			  	/>
			  	))
			  }
			 <InfoWindow 
			 	// marker={activeVenue}
			 	// visible={showingInfoWindow}
			 >
			 	<div>
			 		<h1>hi</h1>
			 	</div>
			 </InfoWindow>
			 </Map>
			)
	}
}

//an API key is necessary and we pass our container/component as a higher order function
export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({
  apiKey: 'AIzaSyDd7-K4U0STJIqxo--RD9D_XHTuUx1VJ8s',
  LoadingContainer: LoadingContainer
})(MapContainer));