import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postAction";
import PropTypes from 'prop-types';

class Posts extends React.Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	/**
	 * Return the posts items if they exits
	 *
	 * @return {string|*[]}
	 */
	renderPostItems = () => {
		const postItems = this.props.posts;
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

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
	posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
