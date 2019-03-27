import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_VENUES_PENDING, 
	REQUEST_VENUES_SUCCESS,
	REQUEST_VENUES_FAILED,
	VENUE_CLICK
} from './constants.js';

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


//just like the reducer above, we need an initial state to start off with
const initialStateVenues = {
	isPending: false,
	venues: [],
	error: ''
}

export const requestVenues = (state=initialStateVenues, action={}) => {
	switch(action.type) {
		//if the action returns pending, we are going to create a new object
		//and create a new state called isPending that will be true
		case REQUEST_VENUES_PENDING:
			return Object.assign({}, state, {isPending: true})
		//if it is successful, we'll return a new state object that adds venues to it
		//and we'll give venues the payload from the action (data return from fetch)
		//and we update ispending to false
		case REQUEST_VENUES_SUCCESS:
			return Object.assign({}, state, {venues: action.payload.response.venues, isPending: false})
		//if it fails, we'll add error to our state and it gets assigned the error info from 
		//the action.payload associated with FAILED and then we still update ispending to false
		case REQUEST_VENUES_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		//if nothing matches the criteria(action.type) then we'll return the default state
		default:
			return state;
	}
}

const initialStateOfClickedVenues = {
	showingInfoWindow: false,
	activeVenue: {},
	activeVenueLocation: []
}

export const onVenueClick = (state=initialStateOfClickedVenues, action={}) => {
	switch (action.type) {
		case VENUE_CLICK: 
			return Object.assign({}, state, {activeVenue: action.payload, activeVenueLocation: action.payload.location.address, showingInfoWindow: true})
		default: 
			return state;
	}
}