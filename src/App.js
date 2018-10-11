import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { NavigationStack } from "./pages/navigator";

export class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider
				store={store}
			>
				<NavigationStack/>
			</Provider>
		);
	}

}
