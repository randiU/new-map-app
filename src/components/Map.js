import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends Component {
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

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDd7-K4U0STJIqxo--RD9D_XHTuUx1VJ8s'
})(MapContainer);