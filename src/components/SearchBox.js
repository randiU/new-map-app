import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
	return (
		<div>
			<input
				type='search'
				placeholder='Enter Venue Name'
				onChange={searchChange}
			/>
		</div>
		)
}


export default SearchBox;

//FRIEND846