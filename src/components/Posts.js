import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from "../actions";

class Posts extends React.Component {



	handleOnClick = () => {
		this.props.dispatch( getPosts() );
	};

	renderPostData = () => {
		const postData = this.props.posts;
		console.warn( 'called' );
		if ( postData.length ) {
			return postData.map( post => (

				<div key={post.id}>
					<h6>{ post.title }</h6>
					<p>{post.body}</p>
				</div>
			) )
		} else {
			return (
				<p>Loading...</p>
			)
		}
	};

	render() {

		return(
			<div>
				<button onClick={this.handleOnClick}>Get Posts</button>
				{ this.renderPostData() }
			</div>
		)
	}
}

export default connect( ( state ) => {
	return {
		posts: state.posts
	}
} )( Posts );
