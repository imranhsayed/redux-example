import React from 'react';
import Posts from "./components/Posts";


class App extends React.Component {

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(json => console.log(json))
	}

	render() {
		return(
			<React.Fragment>
				<Posts/>

			</React.Fragment>
		);
	}
}

export default App
