import React from 'react';

const VenueInformation = ({currentVenue, activeVenueLocation}) => {

    const donutOrCoffeePic = (venue) => {
    	if (venue) {
	    		if (venue.toLowerCase().includes("donuts")) {
	    		return console.log('donuts');
	    	} else if (venue.toLowerCase().includes("coffee")) {
	    		return console.log('coffee');
	    	} else {
	    		return console.log('neither');
	    	}
    	}
    }

	if (currentVenue) {
		return (
			<div>
				<p>{currentVenue.name}</p>
				<p>{activeVenueLocation}</p>
				<p>{donutOrCoffeePic(currentVenue.name)}</p>
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