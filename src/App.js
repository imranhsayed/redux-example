import React from 'react';
import Posts from "./components/Posts";

import { Provider } from 'react-redux';
import store from "./store";

class App extends React.Component {

	render() {
		console.warn( 'came' );
		return(
				<Provider store={store}>
					<Posts/>
				</Provider>
		);
	}
}

export default App
