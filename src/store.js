import { combineReducers, createStore } from "redux";

/**
 * Reducer which needs to return new state/ old one
 * @param state Default State value
 * @param action
 *
 * @return {Array} State
 */
const userReducer = ( state={}, action ) => {
	switch ( action, type ) {
		case 'CHANGE_NAME': {
			state,name = action.payload;
			break;
		}
		case 'CHANGE_AGE': {
			state.age = action.payload;
			break;
		}

	}
	return state;
};

/**
 * Reducer which needs to return new state/ old one
 *
 * @param state Default State value
 * @param action
 *
 * @return {Array} State
 */
const tweetsReducer = ( state=[], action ) => {
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
	type: 'CHANGE_NAME',
	payload: 'Imran'
} );
store.dispatch( {
	type: 'CHANGE_AGE',
	payload: 28
} );

export default store;
