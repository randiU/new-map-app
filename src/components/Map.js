import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import fakeAPIFoursquare from '../api/newMapAPI';

//styles for the map container - flexible
const mapStyles = {
  width: '100%',
  height: '100%'
};

//you can pass this into the GoogleApiWrapper and it will show up if there is a delay in loading the map
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

//we imported Map from the google-maps-react library we added
export class MapContainer extends Component {
	render() {
		return (
			<Map
		        google={this.props.google}
		        zoom={14}
		        style={mapStyles}
		        initialCenter={{
		         lat: 43.6169361,
		         lng: -116.2053802
		        }}
		      />
			)
	}
}

//an API key is necessary and we pass our container/component as a higher order function
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDd7-K4U0STJIqxo--RD9D_XHTuUx1VJ8s',
  LoadingContainer: LoadingContainer
})(MapContainer);