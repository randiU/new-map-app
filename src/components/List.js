import React, { Component } from 'react';

class List extends Component {
	render() {
		const venues = this.props.venues;
		return (
			<div>
				{venues.map(indVenue => (
					<p>{indVenue.name}</p>
					))}
			</div>
			)
	}
}

export default List;