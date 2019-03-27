import React from 'react';

const VenueInformation = ({currentVenue, activeVenueLocation}) => {
	if (currentVenue) {
		return (
			<div>
				<p>{currentVenue.name}</p>
				<p>{activeVenueLocation}</p>
			</div>
			)
	} else {
		return (
			<div>
				<p>No venue selected</p>
			</div>
			)
	}

	// return (
	// 	<div>
	// 		<p>hi</p>
	// 	</div>
	// 	)
}


export default VenueInformation;