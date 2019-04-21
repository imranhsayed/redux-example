import { combineReducers, createStore } from "redux";

/**
 * Reducer which needs to return new state/ old one
 * @param state Default State value
 * @param actions
 *
 * @return {Array} State
 */
const userReducer = ( state={}, actions ) => {
	return state;
};

/**
 * Reducer which needs to return new state/ old one
 *
 * @param state Default State value
 * @param actions
 *
 * @return {Array} State
 */
const tweetsReducer = ( state=[], actions ) => {
	return state;
};

/**
 * Combine reducers
 * Its takes an object as param
 * 'user' tells what piece of data we are modifying and
 * 'userReducer' is the reducer function which is going to handle that
 *
 * @type {Reducer<any>}
 */
const reducers = combineReducers( {
	user: userReducer,
	tweets: tweetsReducer
} );

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducers, 0 );

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
