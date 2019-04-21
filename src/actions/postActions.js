export function getPostData() {
	return function ( dispatch ) {
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
}
