import { createStore } from "redux";

/**
 * Create a reducer function.
 * It takes a state and an action and returns a new state for the store.
 * @param state
 * @param action
 */
const reducer = function ( state, action ) {
	if ( 'INCREMENT' === action.type ) {
		return state + action.payload;
	}
	if ( 'DECREMENT' === action.type ) {
		return state - action.payload;
	}
	return  state;
};

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducer, 0 );

/**
 * Listen to the store using subscribe
 * When Anything changes to the store. the function inside of it will be called.
 * store.getState() return the current state value.
 */
store.subscribe( () => {
	console.warn( 'Store Changed: State value =', store.getState() );
} );

/**
 * Lets dispatch an action.
 * When the below action is dispatched store.subscribe will call the method inside of it.
 */
store.dispatch( {
	type: 'INCREMENT',
	payload: 1
} );
store.dispatch( {
	type: 'INCREMENT',
	payload: 2
} );
store.dispatch( {
	type: 'INCREMENT',
	payload: 3
} );
store.dispatch( {
	type: 'INCREMENT',
	payload: 100
} );
store.dispatch( {
	type: 'DECREMENT',
	payload: 1
} );

export default store;
