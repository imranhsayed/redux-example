import React from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";


class App extends React.Component {

	render() {
		return(
			<React.Fragment>
				<PostForm/>
				<Posts/>
			</React.Fragment>
		);
	}
}

export default App
