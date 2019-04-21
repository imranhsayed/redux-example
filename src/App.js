import React from 'react';
import Home from "./components/Home";


import store from "./store";
import { Provider } from 'react-redux'

class App extends React.Component {

	render() {
		return(
			<Provider store={store}>
				<Home/>
			</Provider>
		);
	}
}

export default App
