import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import App from './containers/App';
import 'tachyons';
import { searchVenues, requestVenues } from './reducers';
import * as serviceWorker from './serviceWorker';

const logger = createLogger();

//in order for us to combine the reducers so we can use both of them, we need to utilize combineReducers fron redux
const rootReducer = combineReducers({searchVenues, requestVenues});

//we need to create a store - js object that describes the state of our app
//thunkmiddleware is going to help us with our ajax calls. Needs to be called before logger 
//because we want logger to log the info from thunkmiddleware
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	//we wrap the App in the provider component, and it will pass down the store 
	//to all of our other components - we'll use connect to finish the connection
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
