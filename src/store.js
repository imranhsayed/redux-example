import { combineReducers, createStore } from "redux";

/**
 * Reducer which needs to return new state/ old one
 * This reducer only takes care of userData and cannot change
 * any other reducer data like tweetsReducer
 *
 * @param state Default State value
 * @param action
 *
 * @return {Array} State
 */
const userReducer = ( state={}, action ) => {
	switch ( action.type ) {
		/*
		 * We creating a new state, whose value will be equal to old state (...state ) and
		 * then name: action.payload will override the name property value in prev state
		 * and then return a new state with overriden values of name
		 */
		case 'CHANGE_NAME': {
			state = { ...state, name: action.payload };
			break;
		}
		case 'CHANGE_AGE': {
			state = { ...state, age: action.payload };
			break;
		}

	}

	// Return a new state after modifying these values
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
const store = createStore( reducers );

/**
 * Listen to the store using subscribe
 * When Anything changes to the store. the function inside of it will be called.
 * store.getState() return the current state value.
 */
store.subscribe( () => {
	console.warn( 'Store Changed: State value =', store.getState() );
} );


// Action creator
function changeName() {
	return {
		type: 'CHANGE_NAME',
		payload: 'Imran'
	}
}

/**
 * Lets dispatch synchronous action by passing a function( action creator ) inside of store.dispatch()
 * When the below action is dispatched store.subscribe will call the method inside of it.
 */
store.dispatch( changeName() );

export default store;
