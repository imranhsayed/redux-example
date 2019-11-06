import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Posts from "./components/Posts";

class App extends React.Component {
	render() {
		return(
			<Provider store={ store }>
				<div>
					<Posts/>
				</div>
			</Provider>
		)
	}
}

export default App;
