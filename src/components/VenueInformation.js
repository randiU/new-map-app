import React from 'react';

const VenueInformation = ({currentVenue, activeVenueLocation}) => {

    const donutOrCoffeePic = (venue) => {
    	if (venue) {
	    		if (venue.toLowerCase().includes("donuts")) {
	    		return (<img src={require('../images/donut.png')} />);
	    	} else if (venue.toLowerCase().includes("coffee")) {
	    		return (<img src={require('../images/coffee.png')} />);
	    	} else {
	    		return (<img src={require('../images/yum.png')} />);
	    	}
    	}
    }

	if (currentVenue) {
		return (
			<div>
				<h1 className='venue-name'>{currentVenue.name}</h1>
				<div className='venue-info'>
					<p className='address-info'>{activeVenueLocation}</p>
					<p>{donutOrCoffeePic(currentVenue.name)}</p>
				</div>
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