import { CHANGE_SEARCH_FIELD } from './constants.js'

//searchfield is going to receive an input of text from what the user types
export const setSearchField = (text) => ({
		//the action being taken, capitalized because it is a constant
		type: CHANGE_SEARCH_FIELD,
		//what we'll send the reducer, the text the user inputs
		payload: text
})