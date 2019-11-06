
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

export default reducer;
