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
