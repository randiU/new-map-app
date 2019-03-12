import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


//styles for the map container - flexible
const mapStyles = {
  width: '75%',
  height: '50%'
};

//you can pass this into the GoogleApiWrapper and it will show up if there is a delay in loading the map
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

//we imported Map from the google-maps-react library we added
export class MapContainer extends Component {
	
	render() {
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
			  <Marker
			    title={'The marker`s title will appear as a tooltip.'}
			    name={'SOMA'}
			    position={{lat: 37.778519, lng: -122.405640}} />
			  <Marker
			    name={'Dolores park'}
			    position={{lat: 37.759703, lng: -122.428093}} />
			  <Marker />
			 </Map>
			)
	}
}

//an API key is necessary and we pass our container/component as a higher order function
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDd7-K4U0STJIqxo--RD9D_XHTuUx1VJ8s',
  LoadingContainer: LoadingContainer
})(MapContainer);