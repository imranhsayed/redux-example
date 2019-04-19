import React from 'react';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

import { Provider } from 'react-redux';
import store from "./store";

class App extends React.Component {

	render() {
		return(
				<Provider store={store}>
					<PostForm/>
					<Posts/>
				</Provider>
		);
	}
}

export default App
