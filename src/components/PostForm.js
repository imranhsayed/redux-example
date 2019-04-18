import React from 'react';

class PostForm extends React.Component {
	render() {
		return(
			<div>
				<form>
					<h3>Post form</h3>
					<label>
						Title:
						<input type="text" name="title"/>
					</label>
					<label>
						Body:
						<input type="textarea" name="body"/>
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostForm;
