import React from 'react';
import { connect } from 'react-redux';
import { Platform, Text, View } from 'react-native';
import { styles } from "./styles";

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu'
});

class Component extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native!
				</Text>
				<Text style={styles.instructions}>
					To get started, edit App.js
				</Text>
				<Text style={styles.instructions}>
					{instructions}
				</Text>
			</View>
		);
	}

}

export const HomePage = connect((store) => {
	return {};
})(Component);
