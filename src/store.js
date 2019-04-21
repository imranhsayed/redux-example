import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const initialState = {
	fetching: false,
	fetched: false,
	posts: [],
	error: null
};

const reducer = ( state = initialState, action ) => {
	switch ( action.type ) {
		case "FETCH_POSTS_START": {
			return { ...state, fetching: true };
			break;
		}
		case "RECEIVE_POSTS": {
			return { ...state, fetching: false, fetched: true, posts: action.payload };
			break;
		}
		case "FETCH_POSTS_ERRORS": {
			return { ...state, fetching: false, error: action.payload }
			break;
		}
	}

	return  state;
};


const middleware = applyMiddleware( thunk, logger );

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducer, middleware );

/**
 * Action creators
 * Lets dispatch an action.
 * Multiple synchronous actions
 * Instead of passing an object containing type and payload as store.dispatch parameter, we can pass a multiple dispatch functions
 */
store.dispatch( ( dispatch ) => {
	// First Action Dispatch
	dispatch( {type: 'FETCH_POSTS_START'} );

	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(jsonData => {

			// Second Action Dispatch
			dispatch( { type: 'RECEIVE_POSTS', payload: jsonData } );
		})
		.catch( err => {

			// Third Action Dispatch
			dispatch( 'FETCH_POSTS_ERRORS' );
		} )

} );


export default store;


