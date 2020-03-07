import { createStore } from "redux";

// Initialize initialState.
const initialState = {
	chocolate: 'Dairy Milk'
};

// Create Reducer.
/**
 *
 * @param prevState ( the first time its value is equal to initialState,
 * and then after every dispatch of action, automatically gets the value of the previous state,
 * just before action creates a new state with new values )
 * @param action
 *
 * @return {Object} newState ( after creating a new state based on the action type. Also called nextState )
 */
const reducer = ( prevState, action ) => {

	console.warn( 'prevState', prevState );

	// Set newState to prevState.
	let newState = prevState;

	if ( 'COOKIES' === action.type ) {
		newState = { ...prevState, cookies: action.payload }
	}

	return newState;

};

/**
 * Create a store.
 *
 * @param {Object} reducer Reducer function.
 * @param {Object} reducer Initial State.
 *
 * @type {Object} store.
 */
const store = createStore( reducer, initialState );

/**
 * Action creator.
 *
 * @return {Object} action.
 */
const getLastName = () => {

	// Action.
	const actionOne = {
		type: 'COOKIES',
		payload: 'Hide n Seek'
	};

	return actionOne;
};

// Get the value of action.
const myAction = getLastName();

// Listen to any change in store
store.subscribe( () => {
	console.warn( 'newState', store.getState() );
} );

store.dispatch( myAction );


