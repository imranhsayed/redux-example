
/**
 * Action creators
 * Lets dispatch an action.
 * Multiple synchronous actions
 * Instead of passing an object containing type and payload as store.dispatch parameter, we can pass a multiple dispatch functions
 */
export const  getPosts = () =>  {
	return ( dispatch ) => {
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

	}

};
