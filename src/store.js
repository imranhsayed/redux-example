import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';



const middleware = applyMiddleware( thunk, logger );

/**
 * Create store using the reducer function added above
 * and pass an initial state.
 */
const store = createStore( reducer, middleware );


export default store;


