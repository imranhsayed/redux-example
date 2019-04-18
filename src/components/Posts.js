import React from 'react';

class Posts extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			posts: []
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(jsonData => this.setState({ posts: jsonData }))
	}


	/**
	 * Return the posts items if they exits
	 *
	 * @return {string|*[]}
	 */
	renderPostItems = () => {
		const postItems = this.state.posts;
		if ( postItems.length ) {
			return postItems.map( post => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<p>{post.body}</p>
					</div>
				) );
		} else {
			return 'Loading..';
		}
	};

	render() {
		return(
			<div>
				<h3>Posts</h3>
				{this.renderPostItems()}
			</div>
		);
	}
}

export default Posts;
