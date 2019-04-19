import React from 'react';

class PostForm extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			title: '',
			body: ''
		}
	}

	handleFormSubmit = ( event ) => {
		event.preventDefault();

		const postData = {
			title: this.state.title,
			body: this.state.body,
		};

		fetch( 'https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify( postData )
		} )
			.then( res => res.json() )
			.then( jsonData => console.warn( jsonData ) );
	};

	handleOnChangeInput = ( event ) => {
		this.setState( { [event.target.name]: event.target.value } )
	};

	render() {
		return(
			<div>
				<form onSubmit={this.handleFormSubmit}>
					<h3>Post form</h3>
					<label>
						Title:
						<input type="text" name="title" onChange={this.handleOnChangeInput} />
					</label>
					<label>
						Body:
						<input type="textarea" name="body" onChange={this.handleOnChangeInput} />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
