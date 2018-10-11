import React from 'react';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { HomePage } from "./pages/home-page/home-page";

export class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Provider
				store={store}
			>
				<HomePage/>
			</Provider>
		);
	}

}
