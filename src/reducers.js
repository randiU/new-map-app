import { CHANGE_SEARCH_FIELD } from './constants.js';

//we need some kind of a start point so we add initialState
const initialStateSearch = {
	searchField: ''
}

//this will take in the state of our app and what action just occurred
//we'll give it default parameters (=...) Remember, actions are just objects
export const searchVenues = (state=initialStateSearch, action={}) => {
	//action.type is a key used in our object we pass in via action above
	switch (action.type) {
		case CHANGE_SEARCH_FIELD: 
			//this will return a new state with the searchfield information updated via the action object passed through
			return Object.assign({}, state, {searchField: action.payload});
		default:
			return state;
	}
} 