import React from 'react';
import { connect } from 'react-redux';
import { getPostData } from "../actions/postActions";

class Home extends React.Component {
	componentDidMount() {
		console.warn( 'some' , this.props );
	}

	handleOnclick = () => {
		this.props.dispatch(getPostData());
	};

	renderPosts = () => {
		const { posts } = this.props;
		if ( posts.posts ) {
			return  posts.posts.map( post => (
				<ul key={post.id}>
					<li>{post.title}</li>
				</ul>
			) )
		}
	}

	render() {

		return(
			<div>
				<button onClick={this.handleOnclick}>Get Posts</button>
				{this.renderPosts()}
			</div>
		)
	}
}

export default connect( ( store ) => {
	return {
		posts: store.posts
	}
} )(Home);
