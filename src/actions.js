import { 
	CHANGE_SEARCH_FIELD,
	REQUEST_VENUES_PENDING, 
	REQUEST_VENUES_SUCCESS,
	REQUEST_VENUES_FAILED,
	VENUE_CLICK
} from './constants.js'

//searchfield is going to receive an input of text from what the user types
export const setSearchField = (text) => ({
		//the action being taken, capitalized because it is a constant
		type: CHANGE_SEARCH_FIELD,
		//what we'll send the reducer, the text the user inputs
		payload: text
})

//this is a higher order function, that is going to return a function. We need to pass in dispatch
//so we can use it in our requestVenues function
export const requestVenues = () => (dispatch) => {
	//we need to iniitally send out a pending dispatch
	dispatch({ type: REQUEST_VENUES_PENDING });
	//then we send a fetch
	fetch('https://api.foursquare.com/v2/venues/search?ll=43.6169361,-116.2053802&intent=browse&radius=650&query=coffee,donuts&client_id=3SQAOU5JEOCWPWRMDUR34UMIB53LPCJXCVBD0JGDZID3IXM5&client_secret=YGCN3WNHQQ04NMICPYOGQGBDZ5L233JPXBDBYRQYVH3GCPLC&v=20190101')
		.then(res => res.json())
		//if the fetch is successful, we return the payload(object) with the returned data
		.then(data => dispatch({type: REQUEST_VENUES_SUCCESS, payload: data}))
		//if the request fails, then we return the payload which will be the error we received
		.catch(error => dispatch({type: REQUEST_VENUES_FAILED, payload: error}))
}


export const venueClick = (venue) => ({
	type: VENUE_CLICK,
	payload: venue
}) 